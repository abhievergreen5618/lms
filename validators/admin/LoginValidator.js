const { body, validationResult } = require("express-validator");
const User = require("../../models/User");

exports.loginUser = [
  body("password").not().isEmpty().withMessage("Field is required"),
  body("email")
    .not()
    .isEmpty()
    .withMessage("Field is required")
    .bail()
    .isEmail()
    .custom((email, { req }) => {
      return new Promise((resolve, reject) => {
        User.findOne({ email: email }, function (err, user) {
          if (err) {
            reject(new Error("Server Error"));
          }
          if (user) {
            bcrypt.compare(req.body.password, user.password).then((isMatch) => {
              !isMatch
                ? reject(new Error("Incorrect Email or Password"))
                : resolve(true);
            });
          } else {
            reject(new Error("Incorrect Email or Password"));
          }
        });
      });
    }),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        var validerrorformat = [];
        var currenterror = {};
        errors.array().forEach((element) => {
          currenterror["name"] = element.param;
          currenterror["error"] = element.msg;
          validerrorformat.push(currenterror);
        });
        return res.status(403).json({ status: "error", errors:validerrorformat});
      }
      next();
    },
];
