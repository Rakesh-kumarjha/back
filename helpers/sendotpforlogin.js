import nodemailer from "nodemailer";

import User from "../model/user.js";

import { validationErrorHandler } from "./validation-error-handler.js";
export const sendRegistratiomEmail = async (req, res, next) => {
  const transporter = await nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "telomr.life@gmail.com",
      pass: "whsakpzcwduposyr",
    },
  });
  validationErrorHandler(req, next);
  const { email_address } = req.body;
  console.log(req.body);
  try {
    const data = await User.findOne({
      where: {
        email_address: email_address,
      },
      raw: true,
    });
    if (!data) {
      const error = new Error("Account not found!");
      error.statusCode = 404;
      return next(error);
    } else {
      const first_name = data["first_name"];
      const last_name = data["last_name"];
      const date = data["createdAt"];
      const name = date["first_name + last_name"];
      const mobile = data["phone"];
      const plan = data["myplan"];

      let info = await transporter.sendMail({
        from: '"Team Telomr" ' + "<telomr.life@gmail.com>", // sender address
        to: email_address, // list of receivers
        subject: "Welcome Mail", // Subject line
        //text: "Hello Yes", // plain text body
        html: `<!DOCTYPE html>
        <html
          xmlns="http://www.w3.org/1999/xhtml"
          xmlns:v="urn:schemas-microsoft-com:vml"
          xmlns:o="urn:schemas-microsoft-com:office:office"
        >
          <head>
            <title></title>
            <!--[if !mso]><!-->
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <!--<![endif]-->
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <style type="text/css">
              #outlook a {
                padding: 0;
              }
              body {
                margin: 0;
                padding: 0;
                -webkit-text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
              }
              table,
              td {
                border-collapse: collapse;
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
              }
              img {
                border: 0;
                height: auto;
                line-height: 100%;
                outline: none;
                text-decoration: none;
                -ms-interpolation-mode: bicubic;
              }
              p {
                display: block;
                margin: 13px 0;
              }
            </style>
            <style type="text/css">
              @media only screen and (min-width: 480px) {
                .mj-column-per-100 {
                  width: 100% !important;
                  max-width: 100%;
                }
              }
            </style>
            <style media="screen and (min-width:480px)">
              .moz-text-html .mj-column-per-100 {
                width: 100% !important;
                max-width: 100%;
              }
            </style>
            <style type="text/css">
              @media only screen and (max-width: 480px) {
                table.mj-full-width-mobile {
                  width: 100% !important;
                }
                td.mj-full-width-mobile {
                  width: auto !important;
                }
              }
            </style>
            <style type="text/css">
              @media (max-width: 479px) {
                .hide-on-mobile {
                  display: none !important;
                }
              }
              .gr-headerviewonline-hovvqe a,
              .gr-headerviewonline-hovvqe a:visited {
                color: #aca5a5;
                text-decoration: none;
              }
              .gr-mltext-swirov a,
              .gr-mltext-swirov a:visited {
                text-decoration: none;
              }
              .gr-mltext-otdveq a,
              .gr-mltext-otdveq a:visited {
                text-decoration: none;
              }
              .gr-mltext-lrghwj a,
              .gr-mltext-lrghwj a:visited {
                text-decoration: none;
              }
              .gr-mltext-tvgaph a,
              .gr-mltext-tvgaph a:visited {
                text-decoration: none;
              }
              .gr-mlbutton-ncxttn p {
                direction: ltr;
              }
              .gr-mlimage-xyubtq img {
                box-sizing: border-box;
              }
              @media (min-width: 480px) {
                .gr-mlimage-ocphva {
                  height: 330px !important;
                }
              }
              .gr-mltext-tnctue a,
              .gr-mltext-tnctue a:visited {
                text-decoration: none;
              }
              .gr-mltext-bxvawj a,
              .gr-mltext-bxvawj a:visited {
                text-decoration: none;
              }
              .gr-mlbutton-gkbuis p {
                direction: ltr;
              }
              .gr-footer-xgyvdg a,
              .gr-footer-xgyvdg a:visited {
                color: #000000;
                text-decoration: underline;
              }
            </style>
            <link
              href="https://fonts.googleapis.com/css?display=swap&family=Roboto:400,400i,700,700i|Poppins:400,400i,700,700i|Lato:400,400i,700,700i&subset=cyrillic,greek,latin-ext,vietnamese"
              rel="stylesheet"
              type="text/css"
            />
            <style type="text/css">
              @import url(https://fonts.googleapis.com/css?display=swap&family=Roboto:400,400i,700,700i|Poppins:400,400i,700,700i|Lato:400,400i,700,700i&subset=cyrillic,greek,latin-ext,vietnamese);
            </style>
          </head>
          <body style="word-spacing: normal; background-color: #ffffff">
            <div style="background-color: #ffffff">
              <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
              <div style="margin: 0px auto; max-width: 600px">
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="width: 100%"
                >
                  <tbody>
                    <tr>
                      <td
                        style="
                          border-bottom: 0 none #000000;
                          border-left: 0 none #000000;
                          border-right: 0 none #000000;
                          border-top: 0 none #000000;
                          direction: ltr;
                          font-size: 0px;
                          padding: 0 40px;
                          text-align: center;
                        "
                      >
                        <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:520px;" ><![endif]-->
                        <div
                          class="mj-column-per-100 mj-outlook-group-fix"
                          style="
                            font-size: 0px;
                            text-align: left;
                            direction: ltr;
                            display: inline-block;
                            vertical-align: top;
                            width: 100%;
                          "
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            width="100%"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    background-color: transparent;
                                    border-bottom: none;
                                    border-left: none;
                                    border-right: none;
                                    border-top: none;
                                    vertical-align: top;
                                    padding: 0;
                                  "
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    role="presentation"
                                    width="100%"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          align="center"
                                          class="gr-headerviewonline-irmkst gr-headerviewonline-hovvqe"
                                          style="
                                            font-size: 0px;
                                            padding: 30px 0;
                                            word-break: break-word;
                                          "
                                        >
                                          <div
                                            style="
                                              font-family: Roboto, Arial, sans-serif;
                                              font-size: 10px;
                                              font-style: normal;
                                              line-height: 1;
                                              text-align: center;
                                              text-decoration: none;
                                              color: #000000;
                                            "
                                          >
                                            <div>
                                              <a
                                                style="color: #aca5a5"
                                                href="#"
                                                target="_blank"
                                                >View online</a
                                              >
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!--[if mso | IE]></td></tr></table><![endif]-->
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#F26C2E" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
              <div
                style="
                  background: #f26c2e;
                  background-color: #f26c2e;
                  margin: 0px auto;
                  max-width: 600px;
                "
              >
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="background: #f26c2e; background-color: #f26c2e; width: 100%"
                >
                  <tbody>
                    <tr>
                      <td
                        style="
                          border-bottom: 0 none #000000;
                          border-left: 0 none #000000;
                          border-right: 0 none #000000;
                          border-top: 0 none #000000;
                          direction: ltr;
                          font-size: 0px;
                          padding: 5px;
                          text-align: center;
                        "
                      >
                        <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:590px;" ><![endif]-->
                        <div
                          class="mj-column-per-100 mj-outlook-group-fix"
                          style="
                            font-size: 0px;
                            text-align: left;
                            direction: ltr;
                            display: inline-block;
                            vertical-align: top;
                            width: 100%;
                          "
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            width="100%"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    background-color: transparent;
                                    border-bottom: none;
                                    border-left: none;
                                    border-right: none;
                                    border-top: none;
                                    vertical-align: top;
                                    padding: 0;
                                  "
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    role="presentation"
                                    width="100%"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          align="left"
                                          class="gr-mltext-hnhjnf gr-mltext-swirov"
                                          style="
                                            font-size: 0px;
                                            padding: 0;
                                            word-break: break-word;
                                          "
                                        >
                                          <div
                                            style="
                                              font-family: Ubuntu, Helvetica, Arial,
                                                sans-serif;
                                              font-size: 13px;
                                              line-height: 2;
                                              text-align: left;
                                              color: #000000;
                                            "
                                          >
                                            <div style="text-align: center">
                                              <p
                                                style="
                                                  font-family: Arial;
                                                  font-size: 14px;
                                                  margin-top: 0px;
                                                  margin-bottom: 0px;
                                                  font-weight: normal;
                                                  color: #000000;
                                                "
                                              >
                                                <span style="color: #ffffff"
                                                  ><strong
                                                    ><span style="font-size: 12px"
                                                      ><span
                                                        style="
                                                          font-family: Roboto, Arial,
                                                            sans-serif;
                                                        "
                                                        >WE'RE SO HAPPY YOU'RE HERE
                                                        ✨</span
                                                      ></span
                                                    ></strong
                                                  ></span
                                                >
                                              </p>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!--[if mso | IE]></td></tr></table><![endif]-->
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#FFEBD6" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
              <div
                style="
                  background: #ffebd6;
                  background-color: #ffebd6;
                  margin: 0px auto;
                  max-width: 600px;
                "
              >
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="background: #ffebd6; background-color: #ffebd6; width: 100%"
                >
                  <tbody>
                    <tr>
                      <td
                        style="
                          border-bottom: 0 none #000000;
                          border-left: 0 none #000000;
                          border-right: 0 none #000000;
                          border-top: 0 none #000000;
                          direction: ltr;
                          font-size: 0px;
                          padding: 0 40px;
                          text-align: center;
                        "
                      >
                        <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:520px;" ><![endif]-->
                        <div
                          class="mj-column-per-100 mj-outlook-group-fix"
                          style="
                            font-size: 0px;
                            text-align: left;
                            direction: ltr;
                            display: inline-block;
                            vertical-align: top;
                            width: 100%;
                          "
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            width="100%"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    background-color: transparent;
                                    border-bottom: none;
                                    border-left: none;
                                    border-right: none;
                                    border-top: none;
                                    vertical-align: top;
                                    padding: 0;
                                  "
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    role="presentation"
                                    width="100%"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          style="font-size: 0px; word-break: break-word"
                                        >
                                          <div style="height: 50px; line-height: 50px">
                                            &#8202;
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!--[if mso | IE]></td></tr></table><![endif]-->
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#FFEBD6" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
              <div
                style="
                  background: #ffebd6;
                  background-color: #ffebd6;
                  margin: 0px auto;
                  max-width: 600px;
                "
              >
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="background: #ffebd6; background-color: #ffebd6; width: 100%"
                >
                  <tbody>
                    <tr>
                      <td
                        style="
                          border-bottom: 0 none #000000;
                          border-left: 0 none #000000;
                          border-right: 0 none #000000;
                          border-top: 0 none #000000;
                          direction: ltr;
                          font-size: 0px;
                          padding: 0 40px;
                          text-align: center;
                        "
                      >
                        <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:520px;" ><![endif]-->
                        <div
                          class="mj-column-per-100 mj-outlook-group-fix"
                          style="
                            font-size: 0px;
                            text-align: left;
                            direction: ltr;
                            display: inline-block;
                            vertical-align: top;
                            width: 100%;
                          "
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            width="100%"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    background-color: transparent;
                                    border-bottom: none;
                                    border-left: none;
                                    border-right: none;
                                    border-top: none;
                                    vertical-align: top;
                                    padding: 0;
                                  "
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    role="presentation"
                                    width="100%"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          align="left"
                                          class="gr-mltext-hnhjnf gr-mltext-otdveq"
                                          style="
                                            font-size: 0px;
                                            padding: 0;
                                            word-break: break-word;
                                          "
                                        >
                                          <div
                                            style="
                                              font-family: Ubuntu, Helvetica, Arial,
                                                sans-serif;
                                              font-size: 13px;
                                              line-height: 1.2;
                                              text-align: left;
                                              color: #000000;
                                            "
                                          >
                                            <div style="text-align: center">
                                              <p
                                                style="
                                                  font-family: Arial;
                                                  font-size: 14px;
                                                  margin-top: 0px;
                                                  margin-bottom: 0px;
                                                  font-weight: normal;
                                                  color: #000000;
                                                "
                                              >
                                                <span style="color: #000000"
                                                  ><strong
                                                    ><span style="font-size: 36px"
                                                      ><span
                                                        style="
                                                          font-family: Poppins, Arial,
                                                            sans-serif;
                                                        "
                                                        >Welcome to Telomr,</span
                                                      ></span
                                                    ></strong
                                                  ></span
                                                >
                                              </p>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          align="left"
                                          class="gr-mltext-hnhjnf gr-mltext-lrghwj"
                                          style="
                                            font-size: 0px;
                                            padding: 0;
                                            word-break: break-word;
                                          "
                                        >
                                          <div
                                            style="
                                              font-family: Ubuntu, Helvetica, Arial,
                                                sans-serif;
                                              font-size: 13px;
                                              line-height: 1.2;
                                              text-align: left;
                                              color: #000000;
                                            "
                                          >
                                            <div style="text-align: center">
                                              <p
                                                style="
                                                  font-family: Arial;
                                                  font-size: 14px;
                                                  margin-top: 0px;
                                                  margin-bottom: 0px;
                                                  font-weight: normal;
                                                  color: #000000;
                                                "
                                              >
                                                <span style="color: #828282"
                                                  ><strong
                                                    ><span style="font-size: 44px"
                                                      ><span
                                                        style="
                                                          font-family: Poppins, Arial,
                                                            sans-serif;
                                                        "
                                                        >${
                                                          first_name + last_name
                                                        }</span
                                                      ></span
                                                    ></strong
                                                  ></span
                                                >
                                              </p>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          align="center"
                                          style="
                                            font-size: 0px;
                                            padding: 19px;
                                            word-break: break-word;
                                          "
                                        >
                                          <p
                                            style="
                                              border-top: dashed 1px #4f4f4f;
                                              font-size: 1px;
                                              margin: 0px auto;
                                              width: 84%;
                                            "
                                          ></p>
                                          <!--[if mso | IE
                                            ]><table
                                              align="center"
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              style="
                                                border-top: dashed 1px #4f4f4f;
                                                font-size: 1px;
                                                margin: 0px auto;
                                                width: 404.88px;
                                              "
                                              role="presentation"
                                              width="404.88px"
                                            >
                                              <tr>
                                                <td style="height: 0; line-height: 0">
                                                  &nbsp;
                                                </td>
                                              </tr>
                                            </table><!
                                          [endif]-->
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          align="left"
                                          class="gr-mltext-hnhjnf gr-mltext-tvgaph"
                                          style="
                                            font-size: 0px;
                                            padding: 0 20px;
                                            word-break: break-word;
                                          "
                                        >
                                          <div
                                            style="
                                              font-family: Ubuntu, Helvetica, Arial,
                                                sans-serif;
                                              font-size: 13px;
                                              line-height: 1.6;
                                              text-align: left;
                                              color: #000000;
                                            "
                                          >
                                            <div style="text-align: center">
                                              <p
                                                style="
                                                  font-family: Arial;
                                                  font-size: 14px;
                                                  margin-top: 0px;
                                                  margin-bottom: 0px;
                                                  font-weight: normal;
                                                  color: #000000;
                                                "
                                              >
                                                <span style="color: #333333"
                                                  ><span style="font-family: Arial"
                                                    >Thanks for choosing TELOMR. You’ve
                                                    just taken an exciting step in your
                                                    wellness journey</span
                                                  ></span
                                                >
                                              </p>
                                            </div>
                                            <div style="text-align: center">
                                              <p
                                                style="
                                                  font-family: Arial;
                                                  font-size: 14px;
                                                  margin-top: 0px;
                                                  margin-bottom: 0px;
                                                  font-weight: normal;
                                                  color: #000000;
                                                "
                                              >
                                                <br />
                                              </p>
                                            </div>
                                            <div style="text-align: center">
                                              <p
                                                style="
                                                  font-family: Arial;
                                                  font-size: 14px;
                                                  margin-top: 0px;
                                                  margin-bottom: 0px;
                                                  font-weight: normal;
                                                  color: #000000;
                                                "
                                              >
                                                <span style="color: #4a4642"
                                                  ><span style="font-size: 18px"
                                                    ><span
                                                      style="
                                                        font-family: Lato, Arial,
                                                          sans-serif;
                                                      "
                                                      >Your subscription plan starts
                                                      from
                                                    </span></span
                                                  ></span
                                                ><span style="color: #bdbdbd"
                                                  ><span style="font-size: 18px"
                                                    ><span
                                                      style="
                                                        font-family: Lato, Arial,
                                                          sans-serif;
                                                      "
                                                      >${date}.</span
                                                    ></span
                                                  ></span
                                                >
                                              </p>
                                            </div>
                                            <div style="text-align: center">
                                              <p
                                                style="
                                                  font-family: Arial;
                                                  font-size: 14px;
                                                  margin-top: 0px;
                                                  margin-bottom: 0px;
                                                  font-weight: normal;
                                                  color: #000000;
                                                "
                                              >
                                                <br />
                                              </p>
                                            </div>
                                            <div style="text-align: center">
                                              <h2
                                                style="
                                                  line-height: 22px;
                                                  font-size: 18px;
                                                  padding-top: 15px;
                                                  padding-bottom: 15px;
                                                  margin-top: 0px;
                                                  margin-bottom: 0px;
                                                  font-weight: normal;
                                                  color: #000000;
                                                "
                                              >
                                                <span style="color: #ff9500"
                                                  ><span style="font-size: 20px"
                                                    ><span style="font-family: Georgia"
                                                      >Please check your plan
                                                      details</span
                                                    ></span
                                                  ></span
                                                >
                                              </h2>
                                            </div>
                                            <div style="text-align: justify">
                                              <p
                                                style="
                                                  font-family: Arial;
                                                  font-size: 14px;
                                                  margin-top: 0px;
                                                  margin-bottom: 0px;
                                                  font-weight: normal;
                                                  color: #000000;
                                                "
                                              >
                                                <span style="color: #000000"
                                                  ><span style="font-size: 14px"
                                                    ><span
                                                      style="
                                                        font-family: Poppins, Arial,
                                                          sans-serif;
                                                      "
                                                      >Enrollment Id no -</span
                                                    ></span
                                                  ></span
                                                ><span style="color: #000000"
                                                  ><span style="font-size: 14px"
                                                    ><span
                                                      style="
                                                        font-family: Courier New,
                                                          sans-serif;
                                                      "
                                                      >{$$$$$}</span
                                                    ></span
                                                  ></span
                                                >
                                              </p>
                                            </div>
                                            <div style="text-align: justify">
                                              <p
                                                style="
                                                  font-family: Arial;
                                                  font-size: 14px;
                                                  margin-top: 0px;
                                                  margin-bottom: 0px;
                                                  font-weight: normal;
                                                  color: #000000;
                                                "
                                              >
                                                <span style="color: #000000"
                                                  ><span style="font-size: 14px"
                                                    ><span
                                                      style="
                                                        font-family: Arial, sans-serif;
                                                      "
                                                      >Name -
                                                    </span></span
                                                  ></span
                                                ><span style="color: #000000"
                                                  ><span style="font-size: 14px"
                                                    ><span
                                                      style="
                                                        font-family: Courier New,
                                                          sans-serif;
                                                      "
                                                      >{${
                                                        first_name + last_name
                                                      }}</span
                                                    ></span
                                                  ></span
                                                >
                                              </p>
                                            </div>
                                            <div style="text-align: justify">
                                              <p
                                                style="
                                                  font-family: Arial;
                                                  font-size: 14px;
                                                  margin-top: 0px;
                                                  margin-bottom: 0px;
                                                  font-weight: normal;
                                                  color: #000000;
                                                "
                                              >
                                                <span style="color: #000000"
                                                  ><span style="font-size: 14px"
                                                    ><span
                                                      style="
                                                        font-family: Arial, sans-serif;
                                                      "
                                                      >MOBILE -
                                                    </span></span
                                                  ></span
                                                ><span style="color: #000000"
                                                  ><span style="font-size: 14px"
                                                    ><span
                                                      style="
                                                        font-family: Courier New,
                                                          sans-serif;
                                                      "
                                                      >{${mobile}}</span
                                                    ></span
                                                  ></span
                                                ><span style="color: #000000"
                                                  ><span style="font-size: 14px"
                                                    ><span
                                                      style="
                                                        font-family: Arial, sans-serif;
                                                      "
                                                      >&nbsp;</span
                                                    ></span
                                                  ></span
                                                >
                                              </p>
                                            </div>
                                            <div style="text-align: justify">
                                              <p
                                                style="
                                                  font-family: Arial;
                                                  font-size: 14px;
                                                  margin-top: 0px;
                                                  margin-bottom: 0px;
                                                  font-weight: normal;
                                                  color: #000000;
                                                "
                                              >
                                                <span style="color: #000000"
                                                  ><span style="font-size: 14px"
                                                    ><span
                                                      style="
                                                        font-family: Poppins, Arial,
                                                          sans-serif;
                                                      "
                                                      >Plan package details -</span
                                                    ></span
                                                  ></span
                                                ><span style="color: #000000"
                                                  ><span style="font-size: 14px"
                                                    ><span
                                                      style="
                                                        font-family: Courier New,
                                                          sans-serif;
                                                      "
                                                      >&nbsp;{${plan}}></span
                                                  ></span
                                                >
                                              </p>
                                            </div>
                                            <p
                                              style="
                                                font-family: Arial;
                                                font-size: 14px;
                                                margin-top: 0px;
                                                margin-bottom: 0px;
                                                font-weight: normal;
                                                color: #000000;
                                              "
                                            >
                                              <br />
                                            </p>
                                            <div style="text-align: center">
                                              <p
                                                style="
                                                  font-family: Arial;
                                                  font-size: 14px;
                                                  margin-top: 0px;
                                                  margin-bottom: 0px;
                                                  font-weight: normal;
                                                  color: #000000;
                                                "
                                              >
                                                <span style="color: #000000"
                                                  ><span
                                                    style="
                                                      font-size: 14.666666666666666px;
                                                    "
                                                    ><span style="font-family: Arial"
                                                      >Please login to your dashboard
                                                      ,manage and update your
                                                      details.</span
                                                    ></span
                                                  ></span
                                                >
                                              </p>
                                            </div>
                                            <div style="text-align: center">
                                              <p
                                                style="
                                                  font-family: Arial;
                                                  font-size: 14px;
                                                  margin-top: 0px;
                                                  margin-bottom: 0px;
                                                  font-weight: normal;
                                                  color: #000000;
                                                "
                                              >
                                                <span style="color: #000000"
                                                  ><span
                                                    style="
                                                      font-size: 14.666666666666666px;
                                                    "
                                                    ><span style="font-family: Arial"
                                                      >For any assistance, please feel free
                                                      to contact us @telomr.life</span
                                                    ></span
                                                  ></span
                                                >
                                              </p>
                                            </div>
                                            <div style="text-align: center">
                                              <p
                                                style="
                                                  font-family: Arial;
                                                  font-size: 14px;
                                                  margin-top: 0px;
                                                  margin-bottom: 0px;
                                                  font-weight: normal;
                                                  color: #000000;
                                                "
                                              >
                                                <span style="color: #000000"
                                                  ><span
                                                    style="
                                                      font-size: 14.666666666666666px;
                                                    "
                                                    ><span style="font-family: Arial"
                                                      >For queries , please text us at
                                                    </span></span
                                                  ></span
                                                ><a
                                                  href="https://wa.me/message/EX43MOTVGZT3E1"
                                                  style="
                                                    text-decoration: none;
                                                    color: inherit;
                                                  "
                                                  target="_blank"
                                                  class="link-id-pjpxwuirl"
                                                  ><span style="color: #000000"
                                                    ><strong
                                                      ><span style="font-size: 13px"
                                                        ><span
                                                          style="
                                                            font-family: Poppins, Arial,
                                                              sans-serif;
                                                          "
                                                          ><span
                                                            style="font-weight: 500"
                                                            ><span
                                                              style="
                                                                background-color: transparent;
                                                              "
                                                              >9019363833</span
                                                            ></span
                                                          ></span
                                                        ></span
                                                      ></strong
                                                    ></span
                                                  ></a
                                                >
                                              </p>
                                            </div>
                                            <div style="text-align: left">
                                              <p
                                                style="
                                                  font-family: Arial;
                                                  font-size: 14px;
                                                  margin-top: 0px;
                                                  margin-bottom: 0px;
                                                  font-weight: normal;
                                                  color: #000000;
                                                "
                                              >
                                                <br />
                                              </p>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          style="font-size: 0px; word-break: break-word"
                                        >
                                          <div style="height: 20px; line-height: 20px">
                                            &#8202;
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          align="center"
                                          vertical-align="middle"
                                          class="gr-mlbutton-nksypi gr-mlbutton-ncxttn link-id-a768853f339b"
                                          style="
                                            font-size: 0px;
                                            padding: 0;
                                            word-break: break-word;
                                          "
                                        >
                                          <table
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            role="presentation"
                                            style="
                                              border-collapse: separate;
                                              line-height: 100%;
                                            "
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  align="center"
                                                  bgcolor="#F26C2E"
                                                  role="presentation"
                                                  style="
                                                    border: none;
                                                    border-bottom: 0 none #000000;
                                                    border-left: 0 none #000000;
                                                    border-radius: 999px;
                                                    border-right: 0 none #000000;
                                                    border-top: 0 none #000000;
                                                    cursor: auto;
                                                    font-style: italic;
                                                    mso-padding-alt: 8px 12px;
                                                    background: #f26c2e;
                                                    word-break: break-word;
                                                  "
                                                  valign="middle"
                                                >
                                                  <a
                                                    href="https://www.telomr.life/products"
                                                    style="
                                                      display: inline-block;
                                                      background: #f26c2e;
                                                      color: #ffffff;
                                                      font-family: Roboto, Arial,
                                                        sans-serif;
                                                      font-size: 16px;
                                                      font-style: italic;
                                                      font-weight: bold;
                                                      line-height: 100%;
                                                      margin: 0;
                                                      text-decoration: none;
                                                      text-transform: none;
                                                      padding: 8px 12px;
                                                      mso-padding-alt: 0px;
                                                      border-radius: 999px;
                                                    "
                                                    target="_blank"
                                                    >Visit website</a
                                                  >
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!--[if mso | IE]></td></tr></table><![endif]-->
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#FFEBD6" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
              <div
                style="
                  background: #ffebd6;
                  background-color: #ffebd6;
                  margin: 0px auto;
                  max-width: 600px;
                "
              >
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="background: #ffebd6; background-color: #ffebd6; width: 100%"
                >
                  <tbody>
                    <tr>
                      <td
                        style="
                          border-bottom: 0 none #000000;
                          border-left: 0 none #000000;
                          border-right: 0 none #000000;
                          border-top: 0 none #000000;
                          direction: ltr;
                          font-size: 0px;
                          padding: 0;
                          text-align: center;
                        "
                      >
                        <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
                        <div
                          class="mj-column-per-100 mj-outlook-group-fix"
                          style="
                            font-size: 0px;
                            text-align: left;
                            direction: ltr;
                            display: inline-block;
                            vertical-align: top;
                            width: 100%;
                          "
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            width="100%"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    background-color: transparent;
                                    border-bottom: none;
                                    border-left: none;
                                    border-right: none;
                                    border-top: none;
                                    vertical-align: top;
                                    padding: 0;
                                  "
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    role="presentation"
                                    width="100%"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          align="center"
                                          class="gr-mlimage-xyubtq gr-mlimage-ocphva link-id-"
                                          style="
                                            font-size: 0px;
                                            padding: 0;
                                            word-break: break-word;
                                          "
                                        >
                                          <table
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            role="presentation"
                                            style="
                                              border-collapse: collapse;
                                              border-spacing: 0px;
                                            "
                                          >
                                            <tbody>
                                              <tr>
                                                <td style="width: 375px">
                                                  <img
                                                    alt="TELOMR"
                                                    height="330"
                                                    src="https://multimedia.getresponse.com/getresponse-ChDod/photos/0ed740be-ffd0-4dcc-b190-a06c78689148.png"
                                                    style="
                                                      border: 0;
                                                      border-left: 0 none #000000;
                                                      border-right: 0 none #000000;
                                                      border-top: 0 none #000000;
                                                      border-bottom: 0 none #000000;
                                                      border-radius: 0;
                                                      display: block;
                                                      outline: none;
                                                      text-decoration: none;
                                                      height: 330px;
                                                      width: 100%;
                                                      font-size: 13px;
                                                    "
                                                    width="375"
                                                  />
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          align="left"
                                          class="gr-mltext-hnhjnf gr-mltext-tnctue"
                                          style="
                                            font-size: 0px;
                                            padding: 10px;
                                            word-break: break-word;
                                          "
                                        >
                                          <div
                                            style="
                                              font-family: Ubuntu, Helvetica, Arial,
                                                sans-serif;
                                              font-size: 13px;
                                              line-height: 1.4;
                                              text-align: left;
                                              color: #000000;
                                            "
                                          >
                                            <p
                                              style="
                                                font-family: Arial;
                                                font-size: 14px;
                                                margin-top: 0px;
                                                margin-bottom: 0px;
                                                font-weight: normal;
                                                color: #000000;
                                              "
                                            >
                                              <span style="color: #000000"
                                                ><span style="font-size: 8px"
                                                  ><span
                                                    style="
                                                      font-family: Arial, sans-serif;
                                                    "
                                                    >***TERMS AND CONDITIONS
                                                    APPLICABLE</span
                                                  ></span
                                                ></span
                                              >
                                            </p>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!--[if mso | IE]></td></tr></table><![endif]-->
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
              <div style="margin: 0px auto; max-width: 600px">
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="width: 100%"
                >
                  <tbody>
                    <tr>
                      <td
                        style="
                          border-bottom: 0 none #000000;
                          border-left: 0 none #000000;
                          border-right: 0 none #000000;
                          border-top: 0 none #000000;
                          direction: ltr;
                          font-size: 0px;
                          padding: 0 40px;
                          text-align: center;
                        "
                      >
                        <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:520px;" ><![endif]-->
                        <div
                          class="mj-column-per-100 mj-outlook-group-fix"
                          style="
                            font-size: 0px;
                            text-align: left;
                            direction: ltr;
                            display: inline-block;
                            vertical-align: top;
                            width: 100%;
                          "
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            width="100%"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    background-color: transparent;
                                    border-bottom: none;
                                    border-left: none;
                                    border-right: none;
                                    border-top: none;
                                    vertical-align: top;
                                    padding: 0;
                                  "
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    role="presentation"
                                    width="100%"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          style="font-size: 0px; word-break: break-word"
                                        >
                                          <div style="height: 29px; line-height: 29px">
                                            &#8202;
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          align="left"
                                          class="gr-mltext-hnhjnf gr-mltext-bxvawj"
                                          style="
                                            font-size: 0px;
                                            padding: 0;
                                            word-break: break-word;
                                          "
                                        >
                                          <div
                                            style="
                                              font-family: Ubuntu, Helvetica, Arial,
                                                sans-serif;
                                              font-size: 13px;
                                              line-height: 1.6;
                                              text-align: left;
                                              color: #000000;
                                            "
                                          >
                                            <div style="text-align: center">
                                              <p
                                                style="
                                                  font-family: Arial;
                                                  font-size: 14px;
                                                  margin-top: 0px;
                                                  margin-bottom: 0px;
                                                  font-weight: normal;
                                                  color: #000000;
                                                "
                                              >
                                                <span style="color: #4a4642"
                                                  ><strong
                                                    ><span style="font-size: 14px"
                                                      ><span
                                                        style="
                                                          font-family: Lato, Arial,
                                                            sans-serif;
                                                        "
                                                        >Not quite the right time to
                                                        chat?</span
                                                      ></span
                                                    ></strong
                                                  ></span
                                                ><span style="color: #4a4642"
                                                  ><span style="font-size: 14px"
                                                    ><span
                                                      style="
                                                        font-family: Lato, Arial,
                                                          sans-serif;
                                                      "
                                                      >&nbsp;No worries at all! You can
                                                      reach out to us at any time using
                                                      the button below.</span
                                                    ></span
                                                  ></span
                                                >
                                              </p>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!--[if mso | IE]></td></tr></table><![endif]-->
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
              <div style="margin: 0px auto; max-width: 600px">
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="width: 100%"
                >
                  <tbody>
                    <tr>
                      <td
                        style="
                          border-bottom: 0 none #000000;
                          border-left: 0 none #000000;
                          border-right: 0 none #000000;
                          border-top: 0 none #000000;
                          direction: ltr;
                          font-size: 0px;
                          padding: 0;
                          text-align: center;
                        "
                      >
                        <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
                        <div
                          class="mj-column-per-100 mj-outlook-group-fix"
                          style="
                            font-size: 0px;
                            text-align: left;
                            direction: ltr;
                            display: inline-block;
                            vertical-align: top;
                            width: 100%;
                          "
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            width="100%"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    background-color: transparent;
                                    border-bottom: none;
                                    border-left: none;
                                    border-right: none;
                                    border-top: none;
                                    vertical-align: top;
                                    padding: 0;
                                  "
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    role="presentation"
                                    width="100%"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          style="font-size: 0px; word-break: break-word"
                                        >
                                          <div style="height: 30px; line-height: 30px">
                                            &#8202;
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          align="center"
                                          vertical-align="middle"
                                          class="gr-mlbutton-nksypi gr-mlbutton-gkbuis link-id-ec5415fd2a97"
                                          style="
                                            font-size: 0px;
                                            padding: 0;
                                            word-break: break-word;
                                          "
                                        >
                                          <table
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            role="presentation"
                                            style="
                                              border-collapse: separate;
                                              line-height: 100%;
                                            "
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  align="center"
                                                  bgcolor="#F26C2E"
                                                  role="presentation"
                                                  style="
                                                    border: none;
                                                    border-bottom: 0 none #000000;
                                                    border-left: 0 none #000000;
                                                    border-radius: 999px;
                                                    border-right: 0 none #000000;
                                                    border-top: 0 none #000000;
                                                    cursor: auto;
                                                    font-style: normal;
                                                    mso-padding-alt: 8px 12px;
                                                    background: #f26c2e;
                                                    word-break: break-word;
                                                  "
                                                  valign="middle"
                                                >
                                                  <a
                                                    href="https://www.telomr.life/"
                                                    style="
                                                      display: inline-block;
                                                      background: #f26c2e;
                                                      color: #ffffff;
                                                      font-family: Roboto, Arial,
                                                        sans-serif;
                                                      font-size: 16px;
                                                      font-style: normal;
                                                      font-weight: bold;
                                                      line-height: 100%;
                                                      margin: 0;
                                                      text-decoration: none;
                                                      text-transform: none;
                                                      padding: 8px 12px;
                                                      mso-padding-alt: 0px;
                                                      border-radius: 999px;
                                                    "
                                                    target="_blank"
                                                    >CHAT TO US</a
                                                  >
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          align="center"
                                          style="
                                            font-size: 0px;
                                            padding: 5px 0;
                                            word-break: break-word;
                                          "
                                        >
                                          <p
                                            style="
                                              border-top: solid 1px #e4ddd5;
                                              font-size: 1px;
                                              margin: 0px auto;
                                              width: 100%;
                                            "
                                          ></p>
                                          <!--[if mso | IE
                                            ]><table
                                              align="center"
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              style="
                                                border-top: solid 1px #e4ddd5;
                                                font-size: 1px;
                                                margin: 0px auto;
                                                width: 600px;
                                              "
                                              role="presentation"
                                              width="600px"
                                            >
                                              <tr>
                                                <td style="height: 0; line-height: 0">
                                                  &nbsp;
                                                </td>
                                              </tr>
                                            </table><!
                                          [endif]-->
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!--[if mso | IE]></td></tr></table><![endif]-->
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
              <div style="margin: 0px auto; max-width: 600px">
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="width: 100%"
                >
                  <tbody>
                    <tr>
                      <td
                        style="
                          border-bottom: 0 none #000000;
                          border-left: 0 none #000000;
                          border-right: 0 none #000000;
                          border-top: 0 none #000000;
                          direction: ltr;
                          font-size: 0px;
                          padding: 5px;
                          text-align: center;
                        "
                      >
                        <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:590px;" ><![endif]-->
                        <div
                          class="mj-column-per-100 mj-outlook-group-fix"
                          style="
                            font-size: 0px;
                            text-align: left;
                            direction: ltr;
                            display: inline-block;
                            vertical-align: top;
                            width: 100%;
                          "
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            width="100%"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    background-color: transparent;
                                    border-bottom: none;
                                    border-left: none;
                                    border-right: none;
                                    border-top: none;
                                    vertical-align: top;
                                    padding: 0;
                                  "
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    role="presentation"
                                    width="100%"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          style="font-size: 0px; word-break: break-word"
                                        >
                                          <div style="height: 25px; line-height: 25px">
                                            &#8202;
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          align="center"
                                          style="
                                            font-size: 0px;
                                            padding: 5px;
                                            word-break: break-word;
                                          "
                                        >
                                          <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td><![endif]-->
                                          <table
                                            align="center"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            role="presentation"
                                            style="float: none; display: inline-table"
                                          >
                                            <tbody>
                                              <tr class="link-id-99e7535f74c6">
                                                <td
                                                  style="
                                                    padding: 0 10px;
                                                    vertical-align: middle;
                                                  "
                                                >
                                                  <table
                                                    border="0"
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                    role="presentation"
                                                    style="
                                                      border-radius: 0;
                                                      width: 30px;
                                                    "
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td
                                                          style="
                                                            font-size: 0;
                                                            height: 30px;
                                                            vertical-align: middle;
                                                            width: 30px;
                                                          "
                                                        >
                                                          <a
                                                            href="https://facebook.com"
                                                            target="_blank"
                                                            ><img
                                                              alt="facebook"
                                                              height="30"
                                                              src="https://us-as.gr-cdn.com/images/common/templates/messages/v2/social/facebook1.png"
                                                              style="
                                                                border-radius: 0;
                                                                display: block;
                                                              "
                                                              width="30"
                                                          /></a>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          <!--[if mso | IE]></td><td><![endif]-->
                                          <table
                                            align="center"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            role="presentation"
                                            style="float: none; display: inline-table"
                                          >
                                            <tbody>
                                              <tr class="link-id-dfb3a5434da7">
                                                <td
                                                  style="
                                                    padding: 0 10px;
                                                    vertical-align: middle;
                                                  "
                                                >
                                                  <table
                                                    border="0"
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                    role="presentation"
                                                    style="
                                                      border-radius: 0;
                                                      width: 30px;
                                                    "
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td
                                                          style="
                                                            font-size: 0;
                                                            height: 30px;
                                                            vertical-align: middle;
                                                            width: 30px;
                                                          "
                                                        >
                                                          <a
                                                            href="https://twitter.com"
                                                            target="_blank"
                                                            ><img
                                                              alt="twitter"
                                                              height="30"
                                                              src="https://us-as.gr-cdn.com/images/common/templates/messages/v2/social/twitter1.png"
                                                              style="
                                                                border-radius: 0;
                                                                display: block;
                                                              "
                                                              width="30"
                                                          /></a>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          <!--[if mso | IE]></td><td><![endif]-->
                                          <table
                                            align="center"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            role="presentation"
                                            style="float: none; display: inline-table"
                                          >
                                            <tbody>
                                              <tr class="link-id-b8658208b883">
                                                <td
                                                  style="
                                                    padding: 0 10px;
                                                    vertical-align: middle;
                                                  "
                                                >
                                                  <table
                                                    border="0"
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                    role="presentation"
                                                    style="
                                                      border-radius: 0;
                                                      width: 30px;
                                                    "
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td
                                                          style="
                                                            font-size: 0;
                                                            height: 30px;
                                                            vertical-align: middle;
                                                            width: 30px;
                                                          "
                                                        >
                                                          <a
                                                            href="https://instagram.com"
                                                            target="_blank"
                                                            ><img
                                                              alt="instagram"
                                                              height="30"
                                                              src="https://us-as.gr-cdn.com/images/common/templates/messages/v2/social/instagram1.png"
                                                              style="
                                                                border-radius: 0;
                                                                display: block;
                                                              "
                                                              width="30"
                                                          /></a>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          <!--[if mso | IE]></td><td><![endif]-->
                                          <table
                                            align="center"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            role="presentation"
                                            style="float: none; display: inline-table"
                                          >
                                            <tbody>
                                              <tr class="link-id-3099b493f1c0">
                                                <td
                                                  style="
                                                    padding: 0 10px;
                                                    vertical-align: middle;
                                                  "
                                                >
                                                  <table
                                                    border="0"
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                    role="presentation"
                                                    style="
                                                      border-radius: 0;
                                                      width: 30px;
                                                    "
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td
                                                          style="
                                                            font-size: 0;
                                                            height: 30px;
                                                            vertical-align: middle;
                                                            width: 30px;
                                                          "
                                                        >
                                                          <a
                                                            href="https://youtube.com"
                                                            target="_blank"
                                                            ><img
                                                              alt="youtube"
                                                              height="30"
                                                              src="https://us-as.gr-cdn.com/images/common/templates/messages/v2/social/youtube1.png"
                                                              style="
                                                                border-radius: 0;
                                                                display: block;
                                                              "
                                                              width="30"
                                                          /></a>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          <!--[if mso | IE]></td></tr></table><![endif]-->
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!--[if mso | IE]></td></tr></table><![endif]-->
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
              <div style="margin: 0px auto; max-width: 600px">
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="width: 100%"
                >
                  <tbody>
                    <tr>
                      <td
                        style="
                          border-bottom: 0 none #000000;
                          border-left: 0 none #000000;
                          border-right: 0 none #000000;
                          border-top: 0 none #000000;
                          direction: ltr;
                          font-size: 0px;
                          padding: 5px;
                          text-align: center;
                        "
                      >
                        <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:590px;" ><![endif]-->
                        <div
                          class="mj-column-per-100 mj-outlook-group-fix"
                          style="
                            font-size: 0px;
                            text-align: left;
                            direction: ltr;
                            display: inline-block;
                            vertical-align: top;
                            width: 100%;
                          "
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            width="100%"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    background-color: transparent;
                                    border-bottom: none;
                                    border-left: none;
                                    border-right: none;
                                    border-top: none;
                                    vertical-align: top;
                                    padding: 0;
                                  "
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    role="presentation"
                                    width="100%"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          align="center"
                                          class="gr-footer-jdeasc gr-footer-xgyvdg"
                                          style="
                                            font-size: 0px;
                                            padding: 10px 40px;
                                            word-break: break-word;
                                          "
                                        >
                                          <div
                                            style="
                                              font-family: Roboto, Arial, sans-serif;
                                              font-size: 10px;
                                              font-style: normal;
                                              line-height: 1;
                                              text-align: center;
                                              text-decoration: none;
                                              color: #aca5a5;
                                            "
                                          >
                                            <div>
                                              sal, banaaloee, 560078, Bangalore,
                                              India<br /><br />आप किसी भी समय
                                              <a
                                                href="https://app.getresponse.com/unsubscribe.html?x=a62b&m=E&mc=J8&s=E&u=ChDod&z=EVz8lg&pt=unsubscribe"
                                                target="_blank"
                                                >सदस्यता समाप्त</a
                                              >
                                              कर सकते हैं या
                                              <a
                                                href="https://app.getresponse.com/change_details.html?x=a62b&m=E&s=E&u=ChDod&z=EJrtVyB&pt=change_details"
                                                target="_blank"
                                                >अपने संपर्क विवरणों</a
                                              >
                                              को बदल सकते हैं।
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!--[if mso | IE]></td></tr></table><![endif]-->
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
              <table
                align="center"
                style="
                  font-family: 'Roboto', Helvetica, sans-serif;
                  font-weight: 400;
                  letter-spacing: 0.018em;
                  text-align: center;
                  font-size: 10px;
                "
              >
                <tr>
                  <td style="padding-bottom: 20px">
                    <br />
                    <div style="color: #939598">इसके द्वारा संचालित:</div>
                    <a
                      href="https://app.getresponse.com/referral.html?x=a62b&c=i42Xc&u=ChDod&z=EEMStaI&"
                      ><img
                        src="https://app.getresponse.com/images/common/templates/badges/gr_logo_2.png"
                        alt="GetResponse"
                        border="0"
                        style="display: block"
                        width="120"
                        height="24"
                    /></a>
                  </td>
                </tr>
              </table>
            </div>
          </body>
        </html>
        `, // html body
      });
      res.status(200).json({
        message: `${email_address} Sent successfully`,
        first_name: first_name,
        last_name: last_name,
        email_address: email_address,
      });
      console.log(res);
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
