//models
import User from "../../../model/user.js";
//helpers
import { validationErrorHandler } from "../../../helpers/validation-error-handler.js";
export const UserInfo = async (req, res, next) => {
  validationErrorHandler(req, next);
  const { email_address } = req.body;
  console.log(req.body);
  try {
    const data = await User.findOne({
      where: {
        email_address: email_address,
      },
    });
    if (!data) {
      const error = new Error(`Not found user!`);
      error.statusCode = 498;
      return next(error);
    }
    console.log(data);
    const id = data["id"];
    const name = data["first_name"];
    const lastname = data["last_name"];
    const email = data["email_address"];
    const lastlogintime = data["updatedAt"];
    res.status(200).json({
      message: `Successful`,
      id: id,
      name: name,
      userID: email,
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
