//packages
import jwt from "jsonwebtoken";
//models
import User from "../../../model/user.js";
//helpers
import { validationErrorHandler } from "../../../helpers/validation-error-handler.js";
export const Signinwithotp = async (req, res, next) => {
  validationErrorHandler(req, next);
  const { phone, OTP } = req.body;
  console.log(req.body);
  try {
    const data = await User.findOne({
      where: {
        phone: phone,
      },
      raw: true,
    });

    if (!data) {
      const error = new Error("Account not found!");
      error.statusCode = 404;
      return next(error);
    } else {
      if (data.phoneotp == OTP) {
        const error = new Error("Wrong Password");
        error.statusCode = 401;
        return next(error);
      }
    }
    const id = data["id"];
    const name = data["first_name"];
    const lastname = data["last_name"];
    const email = data["email_address"];
    
    const lastlogintime = data["updatedAt"];
    const token = jwt.sign(
      { email_address: email },
      process.env.TOKEN_SIGNING_KEY,
      {
        expiresIn: "1s",
      }
    );
    const refreshToken = jwt.sign(
      { id, email_address: email },
      process.env.REFRESH_TOKEN_SIGNING_KEY
    );

    res.status(202).json({
      message: `${phone} logged in successfully`,
      id: id,
      name: name,
      phone: phone,

      token: token,
      refreshToken: refreshToken,
      lastlogintime: lastlogintime,
      lastname: lastname,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
