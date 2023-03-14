import Cryptr from "cryptr";
const cryptr = new Cryptr("myTotallySecretKey");
import { createRequire } from "module";
const require = createRequire(import.meta.url);
//models
import User from "../../../model/user.js";
//helpers
import { validationErrorHandler } from "../../../helpers/validation-error-handler.js";
import { generatenewOtp } from "../../../helpers/verificationOtp.js";
export const userSignup = async (req, res, next) => {
  validationErrorHandler(req, next);
  const accountSid = "ACd9c4121cc7730bbe021bcaab23f4e5cf";
  const authToken = "9afddf6c65cb2d921caa79f5584f60d8";
  const client = require("twilio")(accountSid, authToken, {
    logLevel: "debug",
  });
  const {
    first_name,
    last_name,
    date_of_birth,
    phone,
    city,
    region,
    amount,
    postal_code,
    occupation,
    salary,
    p_address,
    date_of_diagnosis,
    hospital_name,
    cancer,
    stage_of_cancer,
    myplan,
    insurance,
    consulting_physicion,
    reffered,
    email_address,
    password,
  } = req.body;
  const newotp = Number.parseInt(generatenewOtp(7));
  console.log("OTP FOR LOGIN " + newotp);
  try {
    const admin = await User.findOne({ where: { phone } });
    if (admin) {
      const error = new Error("This Phone already exists : " + phone);
      error.statusCode = 403;
      return next(error);
    }
    const encryptedPassword = cryptr.encrypt(password);
    const data = await User.create({
      first_name,
      last_name,
      date_of_birth,
      phone,
      city,
      region,
      amount,
      postal_code,
      occupation,
      salary,
      p_address,
      date_of_diagnosis,
      hospital_name,
      cancer,
      stage_of_cancer,
      myplan,
      insurance,
      consulting_physicion,
      reffered,
      email_address,
      isActive: false,
      password: encryptedPassword,
      mailotp: newotp,
    });
    {
      client.messages
        .create({
          body: "Hii customer "  + newotp + " this is your verification otp verify your account and proceed for payment",
          messagingServiceSid: "MG8da0e114c6b9b8b402e4873cfb27bea3",
          to: "+91" + phone,
          from: "+12762959260",
        })
        .then((message) => console.log(message.sid))
        .done();
    }
    {
      
    }
    res.status(201).json({
      message: `${phone} registered successfully`,
      data,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
