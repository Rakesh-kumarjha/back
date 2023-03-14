import User from "../../../model/user.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
import { validationErrorHandler } from "../../../helpers/validation-error-handler.js";
import { generateOTP } from "../../../helpers/generateOtp.js";
//helpers
export const customerSigninOtpRequest = async (req, res, next) => {
  const accountSid = "ACd9c4121cc7730bbe021bcaab23f4e5cf";
  const authToken = "9afddf6c65cb2d921caa79f5584f60d8";
  const sid = "MG64466f86844f1bea182fd5541fb5c1e9";
  const client = require("twilio")(accountSid, authToken, {
    logLevel: "debug",
  });
  validationErrorHandler(req, next);
  const phone = req.body.phone;
  console.log(req.body);

  const OTP = Number.parseInt(generateOTP(6));
  console.log("OTP FOR LOGIN " + OTP);
  try {
    const user = await User.findOne({
      where: {
        phone,
      },
    });
    if (!user) {
      const error = new Error("user not found");
      error.statusCode = 404;
      return next(error);
    }
    await User.update(
      { phoneotp: OTP },
      {
        where: {
          phone: phone,
        },
      }
    );
    {
      client.messages
        .create({
          body: "Hii Customer" + OTP + " is your otp to login to Telomr Do not share with anyone Telomr naver calls to ask for otp ",
          messagingServiceSid: "MG8da0e114c6b9b8b402e4873cfb27bea3",
          to: "+91" + phone,
          from: "+12762959260",
        })
        .then((message) => console.log(message.sid))
        .done();
    }
    res.status(201).json({
      message: "OTP sent successfully",
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
