import User from "../model/user.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

//helpers
import { validationErrorHandler } from "./validation-error-handler.js";
import { generatenewOtp } from "./verificationOtp.js";

// import { sendRegistratiomEmail } from "../../../helpers/send-registration-email.js";
//helpers
export const sendVerificationEmail = async (req, res, next) => {
  const accountSid = "AC740735b5be843af78a678ce72d78fcae";
  const authToken = "a036f48c5de0dc284eb6e560e9110907";
  const sid = "MG446ae8135183463b8a517e8fd6bfb4a0";
  const client = require("twilio")(accountSid, authToken, {
    logLevel: "debug",
  });
  validationErrorHandler(req, next);
  const phone = req.body.phone;
  console.log(req.body);

  const newotp = Number.parseInt(generatenewOtp(7));
  console.log("OTP FOR LOGIN " + newotp);
  try {
    const user = await User.findOne({
      where: {
        phone,
      },
    });
    if (!user) {
      const error = new Error("user not found");
      error.statusCode = 403;
      return next(error);
    }
    await User.update(
      { mailotp: newotp },
      {
        where: {
          phone: phone,
        },
      }
    );
    {
      client.messages
        .create({
          body: "hello" + newotp,
          messagingServiceSid: "MG64466f86844f1bea182fd5541fb5c1e9",
          to: "+91" + phone,
          from: "+13854976015",
        })
        .then((message) => console.log(message.sid))
        .done();
    }
    res.status(201).json({
      msg: "OTP sent successfully",
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
