import express from "express";

//BODY VALIDATOR IMPORT
import { userSignup } from "../controllers/administrator/create-api/create-cust-kyc.js";
import { Signin } from "../controllers/administrator/fetch-api/login.js";
import { UserInfo } from "../controllers/administrator/fetch-api/getInfo.js";
import { customerSigninOtpRequest } from "../controllers/administrator/create-api/otpsentforlogin.js";
import { sendRegistratiomEmail } from "../helpers/sendotpforlogin.js";
import { Signinwithotp } from "../controllers/administrator/fetch-api/loginwithotp.js";
import { Protect } from "../middleware/error-handlers/protect.js";
import { sendVerificationEmail } from "../helpers/mailverify.js";

const router = express.Router();

router.post("/registration", userSignup);
router.post("/login", Signin);
router.post("/loginrequestotp", customerSigninOtpRequest);
router.post("/loginwithotp", Signinwithotp);
router.post("/userInfo", UserInfo, Protect);
router.post("/mail", sendRegistratiomEmail);
router.post("/verifymail", sendVerificationEmail);
export default router;
