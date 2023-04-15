const User = require("../../models/User");

exports.registerUser = (req, res) => {
  const userdetails = new Users(req.body);
  //Password hashing
  bcrypt.genSalt(12, (err, salt) =>
    bcrypt.hash(userdetails.password, salt, (err, hash) => {
      if (err) throw err;

      userdetails.password = hash;
      // Save user
      userdetails.save(function (err) {
        if (err) {
          return res
            .status(422)
            .json({
              status: "error",
              message: "Registration  Failed",
              details: userdetails,
            });
        } else {
          return res
            .status(200)
            .json({
              status: "success",
              message: "Registered Successfully",
              details: userdetails,
            });
        }
      });
    })
  );
};

exports.loginUser = (req, res) => {
  res.render('pages/common/login');
  // res.render('pages/admin/dashboard');
  // User.findOne({ email: req.body.email }, function (err, user) {
  // if(err)
  // {
  //   return res.status(503).json({ status: "error", errors:"Server Error"});
  // }
  // else
  // {
  //   let jwtSecretKey = process.env.JWT_SECRET_KEY;
  //   let data = {
  //     time: Date(),
  //     userId: user._id,
  //   };
  //   const token = jwt.sign(data, jwtSecretKey);
  //   res.json({status:"success", message: "Logged in successfully", login_token: token });
  // }
  // });
};
