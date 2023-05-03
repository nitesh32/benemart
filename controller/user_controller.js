const User = require("../models/users");
const product = require("../models/product");
// console.log(product);
module.exports.profile = function (req, res) {
  if (req.cookies.user_id) {
    User.findOne({ _id: req.cookies.user_id }, function (err, user) {
      if (user) {
        return res.render("users", {
          title: "benemart | profile",
          user: user,
        });
      }

      return res.redirect("/users/signin");
    });
  } else {
    return res.redirect("/users/signin");
  }
};
module.exports.Sign_up = function (req, res) {
  return res.render("sign_up", {
    title: "Benemart | sign_up",
  });
};
module.exports.Sign_in = function (req, res) {
  return res.render("sign_in", {
    title: "Benemart | sign_in",
  });
};

module.exports.create = function (req, res) {
  if (req.body.password != req.body.canfirmpassword) {
    return res.redirect("back");
  }
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("error in finding email in db");
      return;
    }
    if (!user) {
      User.create(req.body, function (err, user) {
        if (err) {
          console.log("error in adding data to db");
          return;
        }
        return res.redirect("/users/signin");
      });
    } else {
      return res.redirect("back");
    }
  });
};
module.exports.create_session = function (req, res) {
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("error in signing in");
      return;
    }
    if (user) {
      if (user.password != req.body.password) {
        return res.redirect("back");
      }
      res.cookie("user_id", user.id);
      return res.redirect("/users/profile");
    } else {
      return res.redirect("back");
    }
  });
};
let x = Math.random();
module.exports.out = function (req, res) {
  if (req.cookies.user_id) {
    res.cookie("user_id", x);
    return res.redirect("/users/signin");
  }
};
module.exports.post_item = function (req, res) {
  return res.render("Post_items", {
    title: "Benemart | post form",
  });
};
module.exports.item_post = function (req, res) {
  product.create(req.body, function (err, user) {
    if (err) {
      console.log("error in adding data to db");
      return res.redirect("/users/profile");
    }
    return res.redirect("/users/profile");
  });

};
