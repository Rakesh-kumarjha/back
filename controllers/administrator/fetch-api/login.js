//packages
import jwt from "jsonwebtoken";
import Cryptr from "cryptr";
const cryptr = new Cryptr("myTotallySecretKey");
//models
import User from "../../../model/user.js";
//helpers
import { validationErrorHandler } from "../../../helpers/validation-error-handler.js";

export const Signin = async (req, res, next) => {
  validationErrorHandler(req, next);
  const { userId, password } = req.body;
  console.log(req.body);
  try {
    const data = await User.findOne({
      where: {
        email_address: userId,
      },
    });
    if (!data) {
      const error = new Error("Account not found!");
      error.statusCode = 404;
      return next(error);
    }
    const decryptedString = cryptr.decrypt(data.password);
    if (decryptedString !== password) {
      const error = new Error("Wrong Password");
      error.statusCode = 401;
      return next(error);
    } else {
      const id = data["id"];
      const name = data["first_name"];
      const lastname = data["last_name"];
      const email = data["email_address"];
      const lastlogintime = data["updatedAt"];
      const token = jwt.sign(
        { email_address: email },
        process.env.TOKEN_SIGNING_KEY,
        {
          expiresIn: "1 day",
        }
      );
      const refreshToken = jwt.sign(
        { id, email_address: email },
        process.env.REFRESH_TOKEN_SIGNING_KEY
      );
      res.status(200).json({
        message: `${userId} logged in successfully`,
        id: id,
        name: name,
        userID: email_address,
        token: token,
        refreshToken: refreshToken,
        lastlogintime: lastlogintime,
        lastname: lastname,
      });
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
