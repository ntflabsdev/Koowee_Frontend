"use strict";

var mongoose = require("mongoose"),
  Users = mongoose.model("Users"),
  Notifications = mongoose.model("Notifications"),
  Business_type = mongoose.model("Business_type"),
  Staff = mongoose.model("Staff"),
  Booking = mongoose.model("Booking"),
  Category = mongoose.model("Category"),
  Service = mongoose.model("Service"),
  Package = mongoose.model("Package"),
  Chat = mongoose.model("ChatModel"),
  Country = mongoose.model("Countries"),
  Invite = mongoose.model("Invite"),
  Favplace = mongoose.model("Favplace"),
  Emergancycontact = mongoose.model("Emergancycontact"),
  Interestes = mongoose.model("Interestes"),
  Usertypes = mongoose.model("Usertypes"),
  Card = mongoose.model("Card"),
  Trip = mongoose.model("Trip"),
  Review = mongoose.model("Review"),
  Assistance = mongoose.model("Assistance"),
  Product_category = mongoose.model("Product_category"),
  Brand = mongoose.model("Brand"),
  Product = mongoose.model("Product"),
  Userimage = mongoose.model("Userimage"),
  path = require("path"),
  fs = require("fs"),
  multer = require("multer"),
  arraySort = require("array-sort"),
  //sharp = require('sharp'),
  constants = require("../constants/constants");
var Cryptr = require("cryptr"),
  cryptr = new Cryptr(constants.ENCRYPTION_SALT);
var sg = require("sendgrid")(constants.SENDGRID_ID);
var errors = ["", null, undefined];
const accountSid = constants.TWILIO_ACCOUNT_SID;
const authToken = constants.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

const NodeGeocoder = require("node-geocoder");

const googlePlace = require("place-search-sdk");
const clients = new googlePlace("AIzaSyClPs2zvGmKov5da3jqGJ-Si_M0ta6Gxso");

var moment = require("moment");

const Places = require("google-places-web").default;
Places.apiKey = "AIzaSyClPs2zvGmKov5da3jqGJ-Si_M0ta6Gxso";
Places.debug = true; // boolean;
const branchio = require("branchio-sdk");
var ObjectId = require("mongodb").ObjectID;

exports.registeruser = function (req, res) {
 
  Users.findOne(
    { email: req.body.email, status: { $ne: "3" } },
    function (err, check) {
      if (check == null) {
        Users.findOne(
          { phone: req.body.phone, status: { $ne: "3" } },
          function (err, check2) {
            if (check2 == null) {
              var new_Users = new Users({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                phone: req.body.phone,
                dob:req.body.dob,
                gender:req.body.gender,
                sdcode: req.body.sdcode,
                password: cryptr.encrypt(req.body.password),
                status: 1,
                notification_setting: 1,
                country:req.body.country,
                lat:req.body.lat,
                lon:req.body.lon,
                created_at: new Date(),
                cords: {
                  type: "Point",
                  coordinates: 
                  [
                    req.body.lat,
                   req.body.lon
                ]
                },
              });
              console.log(new_Users)
              //lng, lat
              new_Users.save(function (err, User) {
                if (User == null) {
                  res.send({
                    error: err,
                    status: 0,
                    data: null,
                  });
                  console.log(err)
                } else {
                  var new_Users = new Notifications({
                    to_id: User._id,
                    from_id: "Admin",
                    message:
                      "<b> Hi, " +
                      req.body.firstname +
                      "</b> your account has been registered with <b>" +
                      req.body.email,
                    title:
                      "<b> Hi, " +
                      req.body.firstname +
                      "</b> your account has been registered with <b>" +
                      req.body.email,
                    status: "0",
                    table: "users",
                    created_at: new Date(),
                  });
                  new_Users.save(function (err, notify) {
                    if (notify == null) {
                      res.send({
                        error: err,
                        status: 0,
                        data: null,
                      });
                    } else {
                      res.send({
                        error: null,
                        status: 1,
                        data: { _id: User._id },
                      });
                    }
                  });
                }
              });
            } else {
              res.send({
                error: null,
                status: 3,
                data: "Phone number is already exists",
              });
            }
          }
        );
      } else {
        res.send({
          error: null,
          status: 3,
          data: "Email address is already exists",
        });
      }
    }
  );
};

exports.loginuser = function (req, res) {
  Users.findOne(
    { email: req.body.email, status: { $ne: "3" } },
    function (err, User) {
      if (User == null) {
        res.send({
          error: err,
          status: 2,
          data: null,
        });
      } else {
        if (User.status == "4") {
          res.send({
            error: null,
            status: 3,
            data: null,
          });
        } else {
          if (cryptr.decrypt(User.password) == req.body.password) {
            res.send({
              error: null,
              msg: "null",
              status: 1,
              data: User,
            });
          } else {
            res.send({
              error: null,
              status: 2,
              data: null,
            });
          }
        }
      }
    }
  );
};

exports.saloon_email_verify = function (req, res) {
  Users.findOne(
    { email_otp: req.body.otp, _id: req.body.otp_id },
    function (err, check) {
      if (check == null) {
        res.send({
          error: null,
          status: 0,
          data: null,
        });
      } else {
        var new_otp = {
          email_verified: 1,
        };
        Users.update(
          { _id: check._id },
          new_otp,
          { new: true },
          function (err, Usersss) {
            res.send({
              error: null,
              status: 1,
              data: Usersss,
            });
          }
        );
      }
    }
  );
};

exports.saloon_mobile_verify = function (req, res) {
  Users.findOne(
    { mobile_otp: req.body.otp, _id: req.body.otp_id },
    function (err, check) {
      if (check == null) {
        res.send({
          error: null,
          status: 0,
          data: null,
        });
      } else {
        var new_otp = {
          mobile_verified: 1,
          status: 1,
        };
        Users.update(
          { _id: check._id },
          new_otp,
          { new: true },
          function (err, Usersss) {
            res.send({
              error: null,
              status: 1,
              data: Usersss,
            });
          }
        );
      }
    }
  );
};

exports.get_user_profile = function (req, res) {
  Users.findOne({ _id: req.body._id, status: 1 }, function (err, Users) {
    if (errors.indexOf(Users) == -1) {
      res.send({
        error: null,
        status: 1,
        data: Users,
      });
    } else {
      res.json(null);
    }
  });
};

exports.get_business_type = function (req, res) {
  Business_type.find({ status: 1 }, function (err, Users) {
    res.send({
      error: null,
      status: 1,
      data: Users,
    });
  });
};

exports.add_staff = function (req, res) {
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "images/staff/");
    },
    filename: function (req, file, cb) {
      var efile = file.originalname.replace(/ /g, "_");
      efile = efile.replace(/[&\/\\#,+()$~%'":*?<>{}]/g, "");
      cb(null, new Date().getTime() + efile);
    },
  });
  var upload = multer({ storage: storage }).any("uploadedImages");

  upload(req, res, function (err) {
    if (err) {
      res.send({
        error: err,
        status: 0,
        data: null,
      });
    } else {
      let newarray = req.files;
      let result = newarray.map((a) => a.filename);

      Staff.findOne(
        { email: req.body.email, status: { $ne: "3" } },
        function (err, check) {
          if (check == null) {
            Staff.findOne(
              { phone: req.body.phone, status: { $ne: "3" } },
              function (err, check2) {
                if (check2 == null) {
                  var new_Users = new Staff({
                    fullname: req.body.fullname,
                    vendorid: req.body._id,
                    gender: req.body.gender,
                    email: req.body.email,
                    description: req.body.description,
                    phone: req.body.phone,
                    status: "1",
                    shift: "0",
                    created_at: new Date(),
                  });

                  if (req.files.length > 0) {
                    new_Users["images"] = result;
                  }
                  new_Users.save(function (err, Users) {
                    if (Users == null) {
                      res.send({
                        error: err,
                        status: 0,
                        data: null,
                      });
                    } else {
                      res.send({
                        error: null,
                        status: 1,
                        data: { _id: Users._id },
                      });
                    }
                  });
                } else {
                  res.send({
                    error: null,
                    status: 3,
                    data: "Phone number is already exists",
                  });
                }
              }
            );
          } else {
            res.send({
              error: null,
              status: 2,
              data: "Email address is already exists",
            });
          }
        }
      );

      return;
    }
  });
  return;
};

exports.get_staff = function (req, res) {
  Staff.find(
    { status: 1, shift: 0, vendorid: req.body._id },
    function (err, Users) {
      res.send({
        error: null,
        status: 1,
        data: Users,
      });
    }
  );
  /*Users.aggregate([{
     $lookup:
       {
         from: "Staff",
         localField: "_id",
         foreignField: "vendorid",
         as: "inventory_docs"
       }
  }], function (err, saloon) {
			res.send({
			error: null,
			status: 1,
			data: saloon
			});
  });*/
};

exports.add_shift = function (req, res) {
  var new_Users = {
    start_time: new Date(req.body.start_time),
    end_time: new Date(req.body.end_time),
    shift_cycle: req.body.shift_cycle,
    weekoff: req.body.weekoff,
    multiple_shifts: req.body.multiple_shifts != null ? "1" : "0",
    shift: "1",
  };
  Staff.update(
    { _id: req.body.staff_id },
    { $set: new_Users },
    { new: true },
    function (err, staf) {
      res.send({
        error: null,
        status: 1,
        data: staf,
      });
    }
  );
};

exports.get_allstaff = function (req, res) {
  Staff.find({ status: 1, vendorid: req.body._id }, function (err, Users) {
    res.send({
      error: null,
      status: 1,
      data: Users,
    });
  });
};

exports.get_staff_detail = function (req, res) {
  Staff.findOne({ _id: req.body.staff_id }, function (err, Users) {
    Users.findOne({ _id: Users.vendorid }, function (err, Users) {
      res.send({
        error: null,
        status: 1,
        data: Users,
        Users: Users,
      });
    });
  });
};

exports.edit_staff = function (req, res) {
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "images/staff/");
    },
    filename: function (req, file, cb) {
      var efile = file.originalname.replace(/ /g, "_");
      efile = efile.replace(/[&\/\\#,+()$~%'":*?<>{}]/g, "");
      cb(null, new Date().getTime() + efile);
    },
  });
  var upload = multer({ storage: storage }).any("uploadedImages");

  upload(req, res, function (err) {
    if (err) {
      res.send({
        error: err,
        status: 0,
        data: null,
      });
    } else {
      let newarray = req.files;
      let result = newarray.map((a) => a.filename);

      Staff.findOne(
        {
          email: req.body.email,
          status: { $ne: "3" },
          _id: { $ne: req.body.staff_id },
        },
        function (err, check) {
          if (check == null) {
            Staff.findOne(
              {
                phone: req.body.phone,
                status: { $ne: "3" },
                _id: { $ne: req.body.staff_id },
              },
              function (err, check2) {
                if (check2 == null) {
                  var new_Users = {
                    fullname: req.body.fullname,
                    vendorid: req.body._id,
                    gender: req.body.gender,
                    email: req.body.email,
                    description: req.body.description,
                    phone: req.body.phone,
                  };

                  if (
                    req.body.oldimages != undefined &&
                    req.body.oldimages.length > 0
                  ) {
                    result.push(req.body.oldimages);
                  }

                  if (req.files.length == 0) {
                    new_Users["images"] = result;
                  }

                  if (req.files.length > 0) {
                    new_Users["images"] = result;
                  }

                  Staff.update(
                    { _id: req.body.staff_id, vendorid: req.body._id },
                    { $set: new_Users },
                    { new: true },
                    function (err, staf) {
                      if (staf == null) {
                        res.send({
                          error: err,
                          status: 0,
                          data: null,
                        });
                      } else {
                        res.send({
                          error: null,
                          status: 1,
                          data: staf,
                        });
                      }
                    }
                  );
                } else {
                  res.send({
                    error: null,
                    status: 3,
                    data: "Phone number is already exists",
                  });
                }
              }
            );
          } else {
            res.send({
              error: null,
              status: 2,
              data: "Email address is already exists",
            });
          }
        }
      );

      return;
    }
  });
  return;
};

exports.del_staff = function (req, res) {
  var new_Users = {
    status: "3",
  };
  Staff.update(
    { _id: req.body._id, vendorid: req.body.vendorid },
    { $set: new_Users },
    { new: true },
    function (err, staf) {
      res.send({
        error: null,
        status: 1,
        data: staf,
      });
    }
  );
};

exports.del_brand = function (req, res) {
  var new_Users = {
    status: "3",
  };
  Brand.update(
    { _id: req.body._id, saloon_id: req.body.saloon_id },
    { $set: new_Users },
    { new: true },
    function (err, staf) {
      res.send({
        error: null,
        status: 1,
        data: staf,
      });
    }
  );
};

exports.del_product = function (req, res) {
  var new_Users = {
    status: "3",
  };
  Product.update(
    { _id: req.body._id, saloon_id: req.body.saloon_id },
    { $set: new_Users },
    { new: true },
    function (err, staf) {
      res.send({
        error: null,
        status: 1,
        data: staf,
      });
    }
  );
};

exports.del_product_category = function (req, res) {
  var new_Users = {
    status: "3",
  };
  Product_category.update(
    { _id: req.body._id, saloon_id: req.body.saloon_id },
    { $set: new_Users },
    { new: true },
    function (err, staf) {
      res.send({
        error: null,
        status: 1,
        data: staf,
      });
    }
  );
};

exports.get_clients = function (req, res) {
  Booking.find({ status: 1, saloon_id: req.body._id }, function (err, Users) {
    var counter2 = 0,
      all_comments = [],
      dict = {};
    Users.forEach(function (staf) {
      Users.findOne({ _id: staf.Users_id, status: 1 }, function (err, service) {
        all_comments.push(service);
        counter2 = counter2 + 1;
        if (counter2 == Users.length) {
          res.send({
            error: null,
            status: 1,
            data: all_comments,
          });
        }
      });
    });
  });
};

exports.del_booking = function (req, res) {
  var new_Users = {
    status: "3",
  };
  Booking.update(
    { Users_id: req.body._id, saloon_id: req.body.vendorid },
    { $set: new_Users },
    { new: true },
    function (err, staf) {
      res.send({
        error: null,
        status: 1,
        data: staf,
      });
    }
  );
};

exports.get_client_detail = function (req, res) {
  Booking.findone(
    { status: 1, saloon_id: req.body.id, Users_id: req.body.staff_id },
    function (err, Users) {
      if (Users != null) {
        res.send({
          error: null,
          status: 0,
        });
      } else {
        Users.findOne(
          { _id: staf.staff_id, status: 1 },
          function (err, service) {
            res.send({
              error: null,
              status: 1,
              data: service,
              Users: Users,
            });
          }
        );
      }
    }
  );
};

exports.add_category = function (req, res) {
  Category.findOne(
    { category_name: req.body.category_name, status: { $ne: "3" } },
    function (err, check2) {
      if (check2 == null) {
        var new_Users = new Category({
          saloon_id: req.body._id,
          category_name: req.body.category_name,
          category_description: req.body.category_description,
          services: req.body.services,
          status: "1",
        });
        new_Users.save(function (err, Users) {
          if (Users == null) {
            res.send({
              error: err,
              status: 0,
              data: null,
            });
          } else {
            res.send({
              error: null,
              status: 1,
            });
          }
        });
      } else {
        res.send({
          error: null,
          status: 2,
        });
      }
    }
  );
};

exports.get_categories = function (req, res) {
  Category.find({ status: 1, saloon_id: req.body._id }, function (err, Users) {
    res.send({
      error: null,
      status: 1,
      data: Users,
    });
  });
};

exports.get_category_detail = function (req, res) {
  Category.findOne(
    { saloon_id: req.body._id, _id: req.body.category_id },
    function (err, Users) {
      res.send({
        error: null,
        status: 1,
        data: Users,
      });
    }
  );
};

exports.edit_category = function (req, res) {
  Category.findOne(
    {
      category_name: req.body.category_name,
      saloon_id: req.body.saloon_id,
      status: { $ne: "3" },
      _id: { $ne: req.body._id },
    },
    function (err, check2) {
      if (check2 == null) {
        var new_Users = {
          category_name: req.body.category_name,
          category_description: req.body.category_description,
          services: req.body.services,
        };
        Category.update(
          { _id: req.body._id },
          { $set: new_Users },
          { new: true },
          function (err, staf) {
            res.send({
              error: null,
              status: 1,
            });
          }
        );
      } else {
        res.send({
          error: null,
          status: 2,
        });
      }
    }
  );
};

exports.add_service = function (req, res) {
  Service.findOne(
    { service_name: req.body.service_name, status: { $ne: "3" } },
    function (err, check2) {
      if (check2 == null) {
        var new_Users = new Service({
          saloon_id: req.body._id,
          service_name: req.body.service_name,
          service_type: req.body.service_type,
          duration: req.body.duration,
          price: req.body.price,
          discount: req.body.discount,
          staff: req.body.staff,
          status: "1",
        });
        new_Users.save(function (err, Users) {
          if (Users == null) {
            res.send({
              error: err,
              status: 0,
              data: null,
            });
          } else {
            res.send({
              error: null,
              status: 1,
            });
          }
        });
      } else {
        res.send({
          error: null,
          status: 2,
        });
      }
    }
  );
};

exports.get_services = function (req, res) {
  Service.find({ status: 1, saloon_id: req.body._id }, function (err, Users) {
    res.send({
      error: null,
      status: 1,
      data: Users,
    });
  });
};

exports.get_services_detail = function (req, res) {
  Service.findOne({ _id: req.body._id }, function (err, Users) {
    res.send({
      error: null,
      status: 1,
      data: Users,
    });
  });
};

exports.edit_service = function (req, res) {
  Service.findOne(
    {
      service_name: req.body.service_name,
      status: { $ne: "3" },
      _id: { $ne: req.body._id },
    },
    function (err, check2) {
      if (check2 == null) {
        var new_Users = {
          service_name: req.body.service_name,
          service_type: req.body.service_type,
          duration: req.body.duration,
          price: req.body.price,
          discount: req.body.discount,
          staff: req.body.staff,
        };
        Service.update(
          { saloon_id: req.body.saloon_id, _id: req.body._id },
          { $set: new_Users },
          { new: true },
          function (err, staf) {
            res.send({
              error: null,
              status: 1,
            });
          }
        );
      } else {
        res.send({
          error: null,
          status: 2,
        });
      }
    }
  );
};

exports.add_package = function (req, res) {
  Package.findOne(
    { package_name: req.body.package_name, status: { $ne: "3" } },
    function (err, check2) {
      if (check2 == null) {
        var new_Users = new Package({
          saloon_id: req.body._id,
          package_name: req.body.package_name,
          schedule_type: req.body.schedule_type,
          price: req.body.price,
          discount: req.body.discount,
          services_include: req.body.services_include,
          status: "1",
        });
        new_Users.save(function (err, Users) {
          if (Users == null) {
            res.send({
              error: err,
              status: 0,
              data: null,
            });
          } else {
            res.send({
              error: null,
              status: 1,
            });
          }
        });
      } else {
        res.send({
          error: null,
          status: 2,
        });
      }
    }
  );
};

exports.get_packages = function (req, res) {
  Package.find({ status: 1, saloon_id: req.body._id }, function (err, Users) {
    res.send({
      error: null,
      status: 1,
      data: Users,
    });
  });
};

exports.get_package_detail = function (req, res) {
  Package.findOne({ _id: req.body._id }, function (err, Users) {
    res.send({
      error: null,
      status: 1,
      data: Users,
    });
  });
};

exports.edit_package = function (req, res) {
  Package.findOne(
    {
      package_name: req.body.package_name,
      saloon_id: req.body.saloon_id,
      status: { $ne: "3" },
      _id: { $ne: req.body._id },
    },
    function (err, check2) {
      if (check2 == null) {
        var new_Users = {
          package_name: req.body.package_name,
          schedule_type: req.body.schedule_type,
          price: req.body.price,
          discount: req.body.discount,
          services_include: req.body.services_include,
        };
        Package.update(
          { saloon_id: req.body.saloon_id, _id: req.body._id },
          { $set: new_Users },
          { new: true },
          function (err, staf) {
            res.send({
              error: null,
              status: 1,
            });
          }
        );
      } else {
        res.send({
          error: null,
          status: 2,
        });
      }
    }
  );
};

exports.add_product_category = function (req, res) {
  Product_category.findOne(
    {
      category_name: req.body.category_name,
      saloon_id: req.body.saloon_id,
      status: { $ne: "3" },
    },
    function (err, check2) {
      if (check2 == null) {
        var new_Users = new Product_category({
          saloon_id: req.body.saloon_id,
          category_name: req.body.category_name,
          status: "1",
        });
        new_Users.save(function (err, Users) {
          if (Users == null) {
            res.send({
              error: err,
              status: 0,
              data: null,
            });
          } else {
            res.send({
              error: null,
              status: 1,
            });
          }
        });
      } else {
        res.send({
          error: null,
          status: 2,
        });
      }
    }
  );
};

exports.add_brand = function (req, res) {
  Brand.findOne(
    {
      brand_name: req.body.brand_name,
      saloon_id: req.body.saloon_id,
      status: { $ne: "3" },
    },
    function (err, check2) {
      if (check2 == null) {
        var new_Users = new Brand({
          saloon_id: req.body.saloon_id,
          brand_name: req.body.brand_name,
          status: "1",
        });
        new_Users.save(function (err, Users) {
          if (Users == null) {
            res.send({
              error: err,
              status: 0,
              data: null,
            });
          } else {
            res.send({
              error: null,
              status: 1,
            });
          }
        });
      } else {
        res.send({
          error: null,
          status: 2,
        });
      }
    }
  );
};

exports.add_product = function (req, res) {
  Product.findOne(
    {
      product_name: req.body.product_name,
      saloon_id: req.body.saloon_id,
      status: { $ne: "3" },
    },
    function (err, check2) {
      if (check2 == null) {
        var new_Users = new Product({
          saloon_id: req.body.saloon_id,
          product_name: req.body.product_name,
          category: req.body.category,
          brand: req.body.brand,
          barcode: req.body.barcode,
          sku: req.body.sku,
          description: req.body.description,
          retail_price: req.body.retail_price,
          special_price: req.body.special_price,
          tax: req.body.special_price,
          supply_price: req.body.supply_price,
          initial_stock: req.body.initial_stock,
          supplier: req.body.supplier,
          reorder_point: req.body.reorder_point,
          reorder_quantity: req.body.reorder_quantity,
          status: "1",
        });
        new_Users.save(function (err, Users) {
          if (Users == null) {
            res.send({
              error: err,
              status: 0,
              data: null,
            });
          } else {
            res.send({
              error: null,
              status: 1,
            });
          }
        });
      } else {
        res.send({
          error: null,
          status: 2,
        });
      }
    }
  );
};

exports.get_product_category = function (req, res) {
  Product_category.find(
    { saloon_id: req.body._id, status: 1 },
    function (err, Users) {
      res.send({
        error: null,
        status: 1,
        data: Users,
      });
    }
  );
};

exports.get_brands = function (req, res) {
  Brand.find({ saloon_id: req.body._id, status: 1 }, function (err, Users) {
    res.send({
      error: null,
      status: 1,
      data: Users,
    });
  });
};
exports.get_product = function (req, res) {
  Product.find({ saloon_id: req.body._id, status: 1 }, function (err, Users) {
    if (Users != undefined && Users.length > 0) {
      var counter = 0,
        all_comments = [],
        dict = {};
      Users.forEach(function (comm) {
        Product_category.findOne(
          { _id: comm.category },
          function (err, category) {
            Brand.findOne({ _id: comm.brand }, function (err, brand) {
              dict = {
                product: comm,
                category: category.category_name,
                brand: brand.brand_name,
              };
              counter = counter + 1;
              all_comments.push(dict);
              if (counter == Users.length) {
                res.send({
                  error: null,
                  status: 1,
                  data: arraySort(all_comments),
                });
              }
            });
          }
        );
      });
    } else {
      res.send({
        error: null,
        status: 1,
        data: [],
      });
    }
  });
};

exports.add_paymentcard = function (req, res) {
  var new_Users = new Card({
    saloon_id: req.body.saloon_id,
    cardholder_name: req.body.cardholder_name,
    card_number: req.body.card_number,
    exp_date: req.body.exp_date,
    cvv: req.body.cvv,
    default: req.body.default,
  });
  new_Users.save(function (err, Users) {
    if (Users == null) {
      res.send({
        error: err,
        status: 0,
        data: null,
      });
    } else {
      res.send({
        error: null,
        status: 1,
      });
    }
  });
};

exports.get_paymentcard = function (req, res) {
  Card.find({ saloon_id: req.body._id }, function (err, Users) {
    res.send({
      error: null,
      status: 1,
      data: Users,
    });
  });
};

exports.del_paymentcard = function (req, res) {
  Card.remove(
    { _id: req.body._id, saloon_id: req.body.saloon_id },
    function (err, staf) {
      res.send({
        error: null,
        status: 1,
      });
    }
  );
};

exports.get_payment_detail = function (req, res) {
  Card.findOne({ _id: req.body._id }, function (err, Users) {
    res.send({
      error: null,
      status: 1,
      data: Users,
    });
  });
};

exports.get_product_detail = function (req, res) {
  Product.findOne({ _id: req.body._id }, function (err, Users) {
    res.send({
      error: null,
      status: 1,
      data: Users,
    });
  });
};

exports.get_brand_detail = function (req, res) {
  Brand.findOne({ _id: req.body._id }, function (err, Users) {
    res.send({
      error: null,
      status: 1,
      data: Users,
    });
  });
};

exports.get_product_catgeory_detail = function (req, res) {
  Product_category.findOne({ _id: req.body._id }, function (err, Users) {
    res.send({
      error: null,
      status: 1,
      data: Users,
    });
  });
};

exports.edit_paymentcard = function (req, res) {
  var new_Users = {
    cardholder_name: req.body.cardholder_name,
    card_number: req.body.card_number,
    exp_date: req.body.exp_date,
    cvv: req.body.cvv,
    default: req.body.default,
  };
  Card.update(
    { saloon_id: req.body.saloon_id, _id: req.body._id },
    { $set: new_Users },
    { new: true },
    function (err, staf) {
      res.send({
        error: null,
        status: 1,
      });
    }
  );
};

exports.edit_brand = function (req, res) {
  Brand.findOne(
    {
      brand_name: req.body.brand_name,
      saloon_id: req.body.saloon_id,
      status: { $ne: "3" },
      _id: { $ne: req.body._id },
    },
    function (err, check2) {
      if (check2 == null) {
        var new_Users = {
          brand_name: req.body.brand_name,
        };
        Brand.update(
          { saloon_id: req.body.saloon_id, _id: req.body._id },
          { $set: new_Users },
          { new: true },
          function (err, staf) {
            res.send({
              error: null,
              status: 1,
            });
          }
        );
      } else {
        res.send({
          error: null,
          status: 2,
        });
      }
    }
  );
};

exports.edit_product_category = function (req, res) {
  Product_category.findOne(
    {
      category_name: req.body.category_name,
      saloon_id: req.body.saloon_id,
      status: { $ne: "3" },
      _id: { $ne: req.body._id },
    },
    function (err, check2) {
      if (check2 == null) {
        var new_Users = {
          category_name: req.body.category_name,
        };
        Product_category.update(
          { saloon_id: req.body.saloon_id, _id: req.body._id },
          { $set: new_Users },
          { new: true },
          function (err, staf) {
            res.send({
              error: null,
              status: 1,
            });
          }
        );
      } else {
        res.send({
          error: null,
          status: 2,
        });
      }
    }
  );
};

exports.edit_product = function (req, res) {
  Product.findOne(
    {
      product_name: req.body.product_name,
      saloon_id: req.body.saloon_id,
      status: { $ne: "3" },
      _id: { $ne: req.body._id },
    },
    function (err, check2) {
      if (check2 == null) {
        var new_Users = {
          product_name: req.body.product_name,
          category: req.body.category,
          brand: req.body.brand,
          barcode: req.body.barcode,
          sku: req.body.sku,
          description: req.body.description,
          retail_price: req.body.retail_price,
          special_price: req.body.special_price,
          tax: req.body.special_price,
          supply_price: req.body.supply_price,
          initial_stock: req.body.initial_stock,
          supplier: req.body.supplier,
          reorder_point: req.body.reorder_point,
          reorder_quantity: req.body.reorder_quantity,
        };
        Product.update(
          { saloon_id: req.body.saloon_id, _id: req.body._id },
          { $set: new_Users },
          { new: true },
          function (err, staf) {
            res.send({
              error: null,
              status: 1,
            });
          }
        );
      } else {
        res.send({
          error: null,
          status: 2,
        });
      }
    }
  );
};

exports.add_assistance = function (req, res) {
  var new_Users = new Assistance({
    saloon_id: req.body.saloon_id,
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
    status: "1",
  });
  new_Users.save(function (err, Users) {
    if (Users == null) {
      res.send({
        error: err,
        status: 0,
        data: null,
      });
    } else {
      res.send({
        error: null,
        status: 1,
      });
    }
  });
};



exports.update_profile = function (req, res) {
  console.log("req body>>>>",req.body)
  console.log("req file???>>>>",req.file)
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "images/profile");
    },
    filename: function (req, file, cb) {
      var efile = file.originalname.replace(/ /g, "_");
      efile = efile.replace(/[&\/\\#,+()$~%'":*?<>{}]/g, "");
      cb(null, new Date().getTime() + efile);
    },
  });
   
    // filename: function (req, file, cb) {
    //   var efile = file.originalname
    //   // efile = efile.replace(/[&\/\\#,+()$~%'":*?<>{}]/g, "");
    //   cb(null, efile);
    // },
  // });
  // console.log("storage",storage)
  console.log("req body>>>>",req.body)
  var upload = multer({ storage: storage }).single("profile_picture");

  upload(req, res, function (err) {
    if (err) {
      res.send({
        error: err,
        status: 0,
        data: null,
      });
    } else {
      
      Users.findOne(
        {
          email: req.body.email,
          _id: { $ne: req.body._id },
          status: { $ne: "3" },
        },
        function (err, check) {

         
          if (check == null) {
            Users.findOne(
              {
                phone: req.body.phone,
                _id: { $ne: req.body._id },
                status: { $ne: "3" },
              },
              
              function (err, check2) {
                console.log("check2>>>",check2)
                if (check2 == null) {
                  var interests = req.body.interests;
                  // interests = interests.split(",");

                  var setters = {
                    sdcode: req.body.sdcode,
                    phone: req.body.phone,
                    email: req.body.email,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    about_me: req.body.about_me,
                    profile_picture:req.body.profile_picture,   
                    // address: req.body.address,
                    gender: req.body.gender,
                    dob: req.body.dob,
                    interests: req.body.interests,
                    usertype: req.body.usertype,
                    country: req.body.country,
                    lat: req.body.lat,
                    lon: req.body.lon,
                    // locations: JSON.parse(req.body.location),
                    cords: {
                      type: "Point",
                      coordinates: [Number(req.body.lon), Number(req.body.lat)],
                    },
                  };
                  console.log("req.file>>>>>>",req.file)

                  if (errors.indexOf(req.file) == -1) {
                   
                   
                    req.body.profile_picture =`${constants.PROFILE_PIC_BASE_URL}`+req.file.originalname;
                    console.log(" req.body.profile_picture>>>>", req.body)
                  }
                  Users.findOne({ _id: req.body._id }, function (err, check) {
                    Users.updateMany(
                      { _id: req.body._id },
                      { $set: setters },
                      { new: true },
                      function (err, user) {
                        if (user == null) {
                          res.send({
                            error: err,
                            status: 0,
                            data: null,
                          });
                        } else {
                          res.send({
                            error: null,
                            status: 1,
                            data: req.file,
                            data1:req.body

                          });
                        }
                      }
                    );
                  });
                } else {
                  res.send({
                    error: null,
                    status: 3,
                    data: null,
                  });
                }
              }
            );
          } else {
            res.send({
              error: null,
              status: 2,
              data: null,
            });
          }
        }
      );
    }
  });
};

exports.update_password = function (req, res) {
  Users.findOne({ _id: req.body._id }, function (err, User) {
    if (User == null) {
      res.send({
        error: [],
        status: 0,
        data: null,
      });
    } else {
      if (cryptr.decrypt(User.password) == req.body.oldpassword) {
        var setters = {
          password: cryptr.encrypt(req.body.newpassword),
        };
        Users.update(
          { _id: req.body._id },
          setters,
          { new: true },
          function (err, userss) {
            res.send({
              error: null,
              status: 1,
              data: userss,
            });
          }
        );
      } else {
        res.send({
          error: [],
          status: 0,
          data: null,
        });
      }
    }
  });
};

exports.test_lookup = function (req, res) {
  Users.aggregate(
    [
      {
        $lookup: {
          from: "countries",
          localField: "country", // id under user
          foreignField: "name",
          as: "countrydata",
        },
      },
    ],
    function (err, saloon) {
      Users.aggregate(
        [
          {
            $lookup: {
              from: "countries",
              localField: "country", // id under user
              foreignField: "name",
              as: "countrydata",
            },
          },
          {
            $lookup: {
              from: "usertypes",
              localField: "usertype",
              foreignField: "_id",
              as: "usertypesdata",
            },
          },

          {
            $project: {
              items: {
                $concatArrays: ["$countrydata", "$usertypesdata"],
              },
            },
          },
        ],
        function (err, saloon2) {
          res.send({
            error: null,
            status: 1,
            data: saloon,
            saloon2: saloon2,
          });
        }
      );
    }
  );
};

exports.get_user_profile_detail = function (req, res) {
  Users.findOne({ _id: req.body._id }, function (err, user_dt) {
    if (user_dt.interests != undefined && user_dt.interests != null) {
      Interestes.find(
        { _id: { $in: user_dt.interests } },
        function (err, interestss) {
          Usertypes.findOne(
            { _id: user_dt.usertype },
            function (err, usersstypes) {
              Userimage.find(
                { userId: req.body._id },
                function (err, user_imgs) {
                  res.send({
                    error: null,
                    status: 1,
                    data: user_dt,
                    interestss: interestss,
                    usersstypes: usersstypes,
                    user_imgs: user_imgs,
                  });
                }
              );
            }
          );
        }
      );
    } else {
      Usertypes.findOne({ _id: user_dt.usertype }, function (err, usersstypes) {
        Userimage.find({ userId: req.body._id }, function (err, user_imgs) {
          res.send({
            error: null,
            status: 1,
            data: user_dt,
            interestss: [],
            usersstypes: usersstypes,
            user_imgs: user_imgs,
          });
        });
      });
    }
  });
};

exports.upload_img = function (req, res) {
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "images/gallery/");
    },
    filename: function (req, file, cb) {
      var efile = file.originalname.replace(/ /g, "_");
      efile = efile.replace(/[&\/\\#,+()$~%'":*?<>{}]/g, "");
      cb(null, new Date().getTime() + efile);
    },
  });
  var upload = multer({ storage: storage }).single("file");

  upload(req, res, function (err) {
    if (err) {
      res.send({
        error: err,
        status: 0,
        data: null,
      });
    } else {
      if (errors.indexOf(req.file) == -1) {
        var type = req.body.type;
        type = type.split("/");
        var setters = Userimage({
          userId: req.body._id,
          file_type: type[0],
          type: type[1],
          images: req.file.filename,
          created_at: new Date(),
        });
        setters.save(function (err, User) {
          if (User == null) {
            res.send({
              error: err,
              status: 0,
              data: null,
            });
          } else {
            Userimage.find({ userId: req.body._id }, function (err, user_dt) {
              res.send({
                error: null,
                status: 1,
                data: user_dt,
              });
            });
          }
        });
      } else {
        res.send({
          error: null,
          status: 0,
        });
      }
    }
  });
};
exports.delete_img = function (req, res) {
  Userimage.remove({ _id: req.body.id }, function (err, contact) {
    res.send({
      error: null,
      status: 1,
      data: contact,
    });
  });
};

exports.get_imgs = function (req, res) {
  var pageNo = parseInt(req.body.skip);
  var size = 6;
  var skip = size * (pageNo - 1);
  //Userimage.find({userId: req.body._id}, function (err, user_dt) {
  Userimage.aggregate(
    [
      // {match: {userId: req.body._id}},
      { $match: { userId: req.body._id } },
      { $group: { _id: null, myCount: { $sum: 1 } } },
      // { $project: { _id: 0 } }
    ],
    function (err, user_dt) {
      //});
      Userimage.find({ userId: req.body._id })
        .limit(size)
        .skip(skip)
        .sort({ created_at: -1 })
        .exec(function (err, doc) {
          //pageNo += 6;
          pageNo += 1;
          res.send({
            error: null,
            status: 1,
            data: user_dt[0] != undefined ? user_dt[0].myCount : 0,
            data2: doc,
            pageNo: parseInt(pageNo),
          });
        });
    }
  );
};

exports.get_my_trips = function (req, res) {
  var pageNo = parseInt(req.body.skip);
  var size = 100;
  var skip = size * (pageNo - 1);
  Trip.aggregate(
    [
      { $match: { userId: ObjectId(req.body._id), trip_id: "0" } },
      { $group: { _id: null, myCount: { $sum: 1 } } },
    ],
    function (err, user_dt) {
      console.log("user_dt = ", user_dt);
      Trip.find({ userId: req.body._id, trip_id: "0" })
        .limit(size)
        .skip(skip)
        .sort({ created_at: -1 })
        .exec(function (err, doc) {
          pageNo += 6;
          res.send({
            error: null,
            status: 1,
            data: user_dt[0] != undefined ? user_dt[0].myCount : 0,
            data2: doc,
            pageNo: parseInt(pageNo),
          });
        });
    }
  );
};

exports.add_emergancy_contacts = function (req, res) {
  Emergancycontact.findOne(
    { contact_array: req.body.contact_array, userId: { $ne: req.body._id } },
    function (err, check2) {
      if (check2 == null) {
        var setters = Emergancycontact({
          userId: req.body._id,
          contact_array: req.body.contact_array,
          displayName: req.body.displayName,
          phoneNumbers: req.body.phoneNumbers,
          created_at: new Date(),
        });
        setters.save(function (err, User) {
          if (User == null) {
            res.send({
              error: err,
              status: 0,
              data: null,
            });
          } else {
            res.send({
              error: null,
              status: 1,
              data: User,
            });
          }
        });
      } else {
        res.send({
          error: null,
          status: 2,
          data: null,
        });
      }
    }
  );
};

exports.delete_step = function (req, res) {
  Trip.remove(
    { _id: req.body.step_id, userId: req.body.user_id },
    function (err, staf) {
      res.send({
        error: err,
        status: 1,
      });
    }
  );
};

exports.get_emergancy_contacts = function (req, res) {
  Emergancycontact.find(
    { userId: req.body._id },
    null,
    { sort: { created_at: -1 } },
    function (err, contacts) {
      res.send({
        error: null,
        status: 1,
        data: contacts,
      });
    }
  );
};

exports.delete_emergancy_contacts = function (req, res) {
  Emergancycontact.remove(
    { _id: req.body.id, userId: req.body.userId },
    function (err, contact) {
      res.send({
        error: null,
        status: 1,
        data: contact,
      });
    }
  );
};

exports.add_trip = function (req, res) {
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "images/trips/");
    },
    filename: function (req, file, cb) {
      var efile = file.originalname.replace(/ /g, "_");
      efile = efile.replace(/[&\/\\#,+()$~%'":*?<>{}]/g, "");
      cb(null, new Date().getTime() + efile);
    },
  });
  var upload = multer({ storage: storage }).any("uploadedImages");

  upload(req, res, function (err) {
    if (err) {
      res.send({
        error: err,
        status: 0,
        data: null,
      });
    } else {
      let newarray = req.files;
      let result = newarray.map((a) => a.filename);
      var location = JSON.parse(req.body.starting_location);
      var new_user = new Trip({
        userId: req.body._id,
        trip_name: req.body.trip_name,
        start_date: new Date(req.body.start_date),
        Start_time: req.body.Start_time,
        starting_point: req.body.starting_point,
        trip_summary: req.body.trip_summary,
        location: JSON.parse(req.body.starting_location),
        weather: JSON.parse(req.body.weather),
        status: req.body.status,
        images: JSON.parse(req.body.files),
        trip_id: "0",
        country: location.country,
        state: location.state,
        lat: location.lat,
        lon: location.lng,
        cords: {
          type: "Point",
          coordinates: [location.lng, location.lat],
        },
        created_at: new Date(),
      });

      new_user.save(function (err, Users) {
        if (Users == null) {
          res.send({
            error: err,
            status: 0,
            data: null,
          });
        } else {
          if (errors.indexOf(req.body.step_data) == -1) {
            var stepdata = JSON.parse(req.body.step_data);
            var total = 0;
            var trips = [];
            stepdata.forEach(function (steps, index) {
              total = total + 1;
              var tripdetails = {
                userId: req.body._id,
                trip_name: steps.step_name,
                start_date: new Date(steps.arrival_date),
                Start_time: steps.arrival_time,
                starting_point: steps.location.location,
                trip_summary: steps.what_to_do,
                location: steps.location,
                weather: steps.weather,
                status: req.body.status,
                images: steps.files,
                trip_id: Users._id,
                acitvities: steps.acitvities,
                country: steps.location.country,
                state: steps.location.state,
                lat: steps.location.lat,
                lon: steps.location.lng,
                cords: {
                  type: "Point",
                  coordinates: [steps.location.lng, steps.location.lat],
                },
                created_at: new Date(),
              };
              trips.push(tripdetails);
              if (stepdata.length == total) {
                Trip.insertMany(trips).then(function (err, trips) {
                  res.send({
                    error: err,
                    status: 1,
                    data: trips,
                  });
                });
              }
            });
          } else {
            res.send({
              error: null,
              status: 1,
            });
          }
        }
      });
    }
  });
};

exports.update_trip_status = function (req, res) {
  var new_otp = {
    status: 1,
  };
  Trip.update(
    { _id: req.body._id },
    new_otp,
    { new: true },
    function (err, Usersss) {
      res.send({
        error: null,
        status: 1,
        data: Usersss,
      });
    }
  );
};

exports.add_trip_single_without_parent = function (req, res) {
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "images/trips/");
    },
    filename: function (req, file, cb) {
      var efile = file.originalname.replace(/ /g, "_");
      efile = efile.replace(/[&\/\\#,+()$~%'":*?<>{}]/g, "");
      cb(null, new Date().getTime() + efile);
    },
  });
  var upload = multer({ storage: storage }).any("uploadedImages");

  upload(req, res, function (err) {
    if (err) {
      res.send({
        error: err,
        status: 0,
        data: null,
      });
    } else {
      console.log("whole array = ", req.body);
      var location = JSON.parse(req.body.starting_location);
      var new_user = new Trip({
        userId: req.body._id,
        trip_name: req.body.trip_name,
        start_date: new Date(req.body.start_date),
        Start_time: req.body.Start_time,
        starting_point: req.body.starting_point,
        trip_summary: req.body.trip_summary,
        location: JSON.parse(req.body.starting_location),
        weather: JSON.parse(req.body.weather),
        status: req.body.status,
        images: JSON.parse(req.body.files),
        trip_id: "0",
        country: location.country,
        state: location.state,
        lat: location.lat,
        lon: location.lng,
        cords: {
          type: "Point",
          coordinates: [location.lng, location.lat],
        },
        created_at: new Date(),
      });

      new_user.save(function (err, Users) {
        if (Users == null) {
          res.send({
            error: err,
            status: 0,
            data: null,
          });
        } else {
          res.send({
            error: err,
            status: 1,
            data: Users,
          });
        }
      });
    }
  });
};

exports.add_trip_single = function (req, res) {
  var new_user = new Trip({
    userId: req.body._id,
    trip_name: req.body.step_name,
    start_date: new Date(req.body.arrival_date),
    Start_time: req.body.arrival_time,
    starting_point: req.body.location.location,
    trip_summary: req.body.what_to_do,
    location: req.body.location,
    weather: req.body.weather,
    status: req.body.status,
    images: req.body.files,
    trip_id: req.body.trip_id,
    acitvities: req.body.acitvities,
    country: req.body.location.country,
    state: req.body.location.state,
    lat: req.body.location.lat,
    lon: req.body.location.lng,
    cords: {
      type: "Point",
      coordinates: [req.body.location.lng, req.body.location.lat],
    },
    created_at: new Date(),
  });

  new_user.save(function (err, Users) {
    if (Users == null) {
      res.send({
        error: err,
        status: 0,
        data: null,
      });
    } else {
      res.send({
        error: err,
        status: 1,
        data: Users,
      });
    }
  });
};

exports.edit_trip_single = function (req, res) {
  var new_user = {
    trip_name: req.body.step_name,
    start_date: new Date(req.body.arrival_date),
    Start_time: req.body.arrival_time,
    starting_point: req.body.location.location,
    trip_summary: req.body.what_to_do,
    location: req.body.location,
    weather: req.body.weather,
    status: req.body.status,
    images: req.body.files,
    trip_id: req.body.trip_id,
    acitvities: req.body.acitvities,
    country: req.body.location.country,
    state: req.body.location.state,
    lat: req.body.location.lat,
    lon: req.body.location.lng,
    cords: {
      type: "Point",
      coordinates: [req.body.location.lng, req.body.location.lat],
    },
  };

  Trip.update(
    { _id: req.body._id, userId: req.body.userId },
    { $set: new_user },
    { new: true },
    function (err, task) {
      res.send({
        error: err,
        status: 1,
        data: Users,
      });
    }
  );
};

exports.upload_img_trip = function (req, res) {
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "images/trips/");
    },
    filename: function (req, file, cb) {
      var efile = file.originalname.replace(/ /g, "_");
      efile = efile.replace(/[&\/\\#,+()$~%'":*?<>{}]/g, "");
      cb(null, new Date().getTime() + efile);
    },
  });
  var upload = multer({ storage: storage }).any("uploadedImages");

  upload(req, res, function (err) {
    if (err) {
      res.send({
        error: err,
        status: 0,
        data: null,
      });
    } else {
      let newarray = req.files;
      let result = newarray.map((a) => a.filename);
      res.send({
        error: null,
        status: 1,
        data: result,
      });
    }
  });
};

exports.get_trip_detail = function (req, res) {
  Trip.find(
    { $or: [{ _id: req.body.trip_id }, { trip_id: req.body.trip_id }] },
    null,
    { sort: { start_date: 1 } },
    function (err, trips) {
      if (trips != undefined && trips.length > 0) {
        var counter = 0;
        var result = [];
        trips.forEach(function (trip, index) {
          Review.count({ step_id: trip._id }, function (err, count) {
            let data = {
              count: count,
              trip: trip,
            };

            result.push(data);
            counter = counter + 1;
            if (trips.length == counter) {
              res.send({
                error: null,
                status: 1,
                data: result,
              });
            }
          });
        });
      } else {
        res.send({
          error: null,
          status: 0,
          data: [],
        });
      }
    }
  );
};

exports.get_trip_detail_edit = function (req, res) {
  Trip.findOne(
    { _id: req.body.trip_id, userId: req.body._id },
    function (err, trips) {
      res.send({
        error: null,
        status: 1,
        data: trips,
      });
    }
  );
};

exports.search_trip2 = function (req, res) {
  var pageNo = parseInt(req.body.skip);
  var size = 100;
  var skip = size * (pageNo - 1);
  var conditions = { status: 1 };
  if (errors.indexOf(req.body.lat) == -1) {
    conditions["cords"] = {
      $near: {
        $minDistance: 0,
        // $maxDistance: 100*1.609*1000,
        $maxDistance: 50000,
        $geometry: {
          type: "Point",
          coordinates: [req.body.lng, req.body.lat],
        },
      },
    };
  }
  /*Trip.aggregate( [
   { $match: { }},
   { $group: { _id: null, myCount: { $sum: 1 } } }
],function(err, user_dt){*/
  /*

	Trip.aggregate([
	 { "$geoNear": {"near": {"type": "Point","coordinates": [ req.body.lng, req.body.lat ]}, "maxDistance": 500 * 1609,"spherical": true,"distanceField": "distance","distanceMultiplier": 0.000621371}},
	 {$match: { "status": 1, $or : [{title: { $regex: regex, $options:"$i" }}, {description: { $regex: regex, $options:"$i" }}]}}]).cursor().exec().toArray(function(err, data)

*/

  Trip.aggregate(
    [
      {
        $geoNear: {
          near: { type: "Point", coordinates: [req.body.lng, req.body.lat] },
          distanceField: "dist.calculated",
          maxDistance: 100 * 1.609 * 1000,
          query: { status: 1 },
          includeLocs: "dist.location",
          spherical: true,
        },
      },
      //this is working
      //{ $group: { _id: {"trip_id": "$trip_id"}, myCount: { $sum: 1 }} }],function(err, doc2){
      {
        $group: {
          _id: null,
          count: {
            $push: "$_id.trip_id",
          },
          myCount: { $sum: 1 },
        },
      },
    ],
    function (err, doc2) {
      Trip.aggregate(
        [
          {
            $geoNear: {
              near: {
                type: "Point",
                coordinates: [req.body.lng, req.body.lat],
              },
              distanceField: "dist.calculated",
              maxDistance: 100 * 1.609 * 1000,
              query: { status: 1 },
              includeLocs: "dist.location",
              spherical: true,
            },
          },
          //this is working
          //{ $group: { _id: {"trip_id": "$trip_id"}, myCount: { $sum: 1 }} }],function(err, doc2){
          {
            $group: {
              _id: {
                _id: "$_id",
                trip_id: "$trip_id",
              },
              bookCount: { $sum: 1 },
            },
          },
          {
            $group: {
              _id: "$_id._id",
              trip_ids: {
                $push: {
                  trip_id: "$_id.trip_id",
                  count: "$bookCount",
                },
              },
              count: { $sum: "$bookCount" },
            },
          },
        ],
        function (err, doc5) {
          Trip.aggregate(
            [
              {
                $geoNear: {
                  near: {
                    type: "Point",
                    coordinates: [req.body.lng, req.body.lat],
                  },
                  distanceField: "dist.calculated",
                  maxDistance: 100 * 1.609 * 1000,
                  query: { status: 1 },
                  includeLocs: "dist.location",
                  spherical: true,
                },
              },
              {
                $project: {
                  _id: { $ifNull: ["$trip_id", "$_id"] },
                  trip_name: 1,
                  start_date: 1,
                  starting_point: 1,
                  trip_id: { $ifNull: ["$trip_id", false] },
                },
              },
              { $sort: { _id: 1, trip_id: -1, start_date: 1 } },
              {
                $group: {
                  _id: "$_id",
                  count: {
                    $push: "$_id._id",
                  },
                  trip_name: {
                    $min: { $cond: ["$trip_id", false, "$trip_name"] },
                  },
                  start_date: {
                    $max: {
                      $cond: ["$trip_id", false, "$start_date"],
                    },
                  },
                  childCount: {
                    $sum: {
                      $cond: ["$trip_id", 1, 0],
                    },
                  },
                  lastContent: { $last: "$starting_point" },
                  name: { $last: "$trip_name" },
                  lastDate: { $last: "$start_date" },
                  mmid: { $last: "$_id" },
                  trip_id: { $last: "$trip_id._id" },
                },
              },
              {
                $project: {
                  trip_name: 1,
                  start_date: 1,
                  name: 1,
                  mmid: 1,
                  count: 1,
                  trip_id: 1,
                  children: {
                    count: "$childCount",
                    lastContent: "$lastContent",
                    start_date: "$lastDate",
                  },
                },
              },
            ],
            function (err, doc6) {
              Trip.aggregate(
                [
                  {
                    $group: {
                      _id: {
                        _id: "$_id",
                        trip_id: "$trip_id",
                        trip_name: "$trip_name",
                      },
                      starting_point: { $addToSet: "$starting_point" },
                    },
                  },
                  {
                    $group: {
                      _id: { trip_id: "$_id.trip_id", _id: "$_id" },
                      children: {
                        $addToSet: {
                          trip_name: "$_id.trip_name",
                          starting_point: "$starting_point",
                        },
                      },
                    },
                  },
                ],
                function (err7, doc7) {
                  Trip.find(conditions)
                    .limit(size)
                    .skip(skip)
                    .sort({ created_at: -1 })
                    .exec(function (err, doc) {
                      var _ids = [];
                      var counts = 0;
                      doc.forEach(function (uses, index) {
                        counts = counts + 1;

                        if (uses.trip_id == "0") {
                          if (!_ids.includes(uses._id)) {
                            _ids.push(uses._id);
                          }
                        } else {
                          if (uses.trip_id != "0") {
                            if (!_ids.includes(uses.trip_id)) {
                              _ids.push(uses.trip_id);
                            }
                          }
                        }

                        if (counts == doc.length) {
                          var clickId = [];

                          _ids.forEach(function (value, indexs) {
                            console.log("click id before", clickId);
                            if (clickId.indexOf(value) === -1) {
                              clickId.push(value);
                            }
                            console.log("click id after", clickId);
                          });

                          var outputArray = [];

                          var count = 0;

                          var start = false;

                          for (var j = 0; j < clickId.length; j++) {
                            for (var k = 0; k < outputArray.length; k++) {
                              if (clickId[j] == outputArray[k]) {
                                start = true;
                              }
                            }
                            count++;
                            if (count == 1 && start == false) {
                              outputArray.push(clickId[j]);
                            }
                            start = false;
                            count = 0;
                          }

                          res.send({
                            error: null,
                            status: 1,
                            data: doc, //(user_dt[0] != undefined) ? user_dt[0].myCount : 0 ,
                            data2: doc2,
                            count: doc6,
                            doc5: doc5,
                            doc6: doc6,
                            doc7: doc7,
                            pageNo: parseInt(pageNo),
                            err7: err7,
                            _ids: clickId,
                            unique: outputArray,
                          });
                        }
                      });
                    });
                }
              );
            }
          );
        }
      );
    }
  );
};

/*** main ***/
exports.search_trip = function (req, res) {
  var pageNo = parseInt(req.body.skip);
  var size = 100;
  var skip = size * (pageNo - 1);
  var conditions = { status: 1, userId: { $ne: req.body._id } };
  if (errors.indexOf(req.body.lat) == -1) {
    conditions["cords"] = {
      $near: {
        $minDistance: 0,
        $maxDistance: 50000,
        $geometry: {
          type: "Point",
          coordinates: [Number(req.body.lon), Number(req.body.lat)],
        },
      },
    };
  }

  if (errors.indexOf(req.body.search_by) == -1) {
    conditions["$or"] = [
      { trip_name: req.body.search_by },
      { trip_name: { $regex: req.body.search_by, $options: "/i/" } },
      { trip_summary: req.body.search_by },
      { trip_summary: { $regex: req.body.search_by, $options: "/i/" } },
      { acitvities: req.body.search_by },
    ];
  }

  Trip.find(conditions)
    .limit(size)
    .skip(skip)
    .sort({ created_at: -1 })
    .exec(function (err, doc) {
      if (
        doc.length > 0 ||
        (doc.length != undefined &&
          doc.length > 0 &&
          req.body.condition2 == "false")
      ) {
        if (doc.length > 0) {
          var _ids = [];
          var counts = 0;
          doc.forEach(function (uses, index) {
            counts = counts + 1;
            if (uses.trip_id == "0") {
              if (!_ids.includes(uses._id)) {
                _ids.push(uses._id);
              }
            } else {
              if (uses.trip_id != "0") {
                if (!_ids.includes(uses.trip_id)) {
                  _ids.push(uses.trip_id);
                }
              }
            }
            if (counts == doc.length) {
              var outputArray = [];
              var count = 0;
              var start = false;

              for (var j = 0; j < _ids.length; j++) {
                for (var k = 0; k < outputArray.length; k++) {
                  if (_ids[j] == outputArray[k]) {
                    start = true;
                  }
                }
                count++;
                if (count == 1 && start == false) {
                  outputArray.push(_ids[j]);
                }
                start = false;
                count = 0;
              }
              var result = [];
              Trip.find({ _id: { $in: outputArray } })
                .limit(size)
                .skip(skip)
                .sort({ created_at: -1 })
                .exec(function (err, maindata) {
                  var dict = {};
                  var counter = 0;
                  maindata.forEach(function (datas, index) {
                    Users.find({ _id: { $in: outputArray } })
                      .limit(size)
                      .skip(skip)
                      .sort({ created_at: -1 })
                      .exec(function (err, maindata) {});

                    Users.find({ _id: datas.userId }).exec(function (
                      err,
                      userdata
                    ) {
                      datas.userdata = userdata;
                      let dict = {
                        datas: datas,
                        userdata: userdata,
                        distance:
                          Number(
                            getDistanceFromLatLonInKm2(
                              req.body.lat,
                              req.body.lng,
                              datas.lat,
                              datas.lon
                            )
                          ).toFixed(1) + "kms",
                      };
                      result.push(dict);
                      counter = counter + 1;
                      if (counter == maindata.length) {
                        res.send({
                          error: null,
                          status: 1,
                          data: arraySort(result, "datas.created_at", {
                            reverse: true,
                          }),
                          pageNo: parseInt(pageNo),
                          //unique: outputArray
                        });
                      }
                    });
                  });
                });
            }
          });
        } else {
          res.send({
            error: null,
            status: 1,
            data: [],
            pageNo: 0,
            //unique: outputArray
          });
        }
      } else {
        Trip.find({ status: 1, userId: { $ne: req.body._id } })
          .limit(size)
          .skip(skip)
          .sort({ created_at: -1 })
          .exec(function (err, doc) {
            if (doc.length > 0) {
              var _ids = [];
              var counts = 0;
              doc.forEach(function (uses, index) {
                counts = counts + 1;
                if (uses.trip_id == "0") {
                  if (!_ids.includes(uses._id)) {
                    _ids.push(uses._id);
                  }
                } else {
                  if (uses.trip_id != "0") {
                    if (!_ids.includes(uses.trip_id)) {
                      _ids.push(uses.trip_id);
                    }
                  }
                }
                if (counts == doc.length) {
                  var outputArray = [];
                  var count = 0;
                  var start = false;

                  for (var j = 0; j < _ids.length; j++) {
                    for (var k = 0; k < outputArray.length; k++) {
                      if (_ids[j] == outputArray[k]) {
                        start = true;
                      }
                    }
                    count++;
                    if (count == 1 && start == false) {
                      outputArray.push(_ids[j]);
                    }
                    start = false;
                    count = 0;
                  }
                  var result = [];
                  Trip.find({ _id: { $in: outputArray } })
                    .limit(size)
                    .skip(skip)
                    .sort({ created_at: -1 })
                    .exec(function (err, maindata) {
                      var dict = {};
                      var counter = 0;
                      maindata.forEach(function (datas, index) {
                        Users.find({ _id: datas.userId }).exec(function (
                          err,
                          userdata
                        ) {
                          datas.userdata = userdata;
                          let dict = {
                            datas: datas,
                            userdata: userdata,
                            distance:
                              Number(
                                getDistanceFromLatLonInKm2(
                                  req.body.lat,
                                  req.body.lng,
                                  datas.lat,
                                  datas.lon
                                )
                              ).toFixed(1) + "kms",
                          };
                          result.push(dict);
                          counter = counter + 1;
                          if (counter == maindata.length) {
                            res.send({
                              error: null,
                              status: 1,
                              data: arraySort(result, "datas.created_at", {
                                reverse: true,
                              }),
                              pageNo: parseInt(pageNo),
                              condition: 2,
                              //unique: outputArray
                            });
                          }
                        });
                      });
                    });
                }
              });
            } else {
              res.send({
                error: null,
                status: 1,
                data: [],
                pageNo: 0,
                //unique: outputArray
              });
            }
          });
      }
    });

  function getDistanceFromLatLonInKm2(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad2(lat2 - lat1); // deg2rad below
    var dLon = deg2rad2(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad2(lat1)) *
        Math.cos(deg2rad2(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }

  function deg2rad2(deg) {
    return deg * (Math.PI / 180);
  }
};

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

exports.forgetpassword = function (req, res) {
  Users.findOne(
    { email: req.body.email, status: { $ne: "3" } },
    function (err, user) {
      if (user != null) {
        if (user.status == 1) {
          var new_otp = {
            reset_otp: randomString(4),
          };
          Users.update(
            { _id: user._id },
            new_otp,
            { new: true },
            function (err, userss) {
              var readStream = fs.createReadStream(
                path.join(__dirname, "../templates") + "/forgot_otp.html",
                "utf8"
              );
              let email_content = "";
              readStream
                .on("data", function (chunk) {
                  email_content += chunk;
                })
                .on("end", function () {
                  var helper = require("sendgrid").mail;
                  var fromEmail = new helper.Email(
                    constants.APP_EMAIL,
                    constants.APP_NAME
                  );
                  var toEmail = new helper.Email(user.email);
                  var subject = "OTP for verify account";
                  email_content = email_content.replace(
                    "#user#",
                    user.firstname + " " + user.lastname
                  );
                  email_content = email_content.replace(
                    "#OTP#",
                    new_otp.reset_otp
                  );
                  var content = new helper.Content("text/html", email_content);
                  var mail = new helper.Mail(
                    fromEmail,
                    subject,
                    toEmail,
                    content
                  );
                  var request = sg.emptyRequest({
                    method: "POST",
                    path: "/v3/mail/send",
                    body: mail.toJSON(),
                  });

                  sg.API(request, function (error, response) {
                    if (error) {
                      res.send({
                        error: error,
                        status: 4,
                        data: new_otp.reset_otp,
                      });
                    } else {
                      res.send({
                        error: null,
                        status: 1,
                      });
                    }
                  });
                });
            }
          );
        } else {
          res.send({
            error: null,
            status: 3,
          });
        }
      } else {
        res.send({
          error: null,
          status: 2,
        });
      }
    }
  );
};

exports.verify_otp = function (req, res) {
  Users.findOne(
    { reset_otp: req.body.otp, email: req.body.email },
    function (err, check) {
      if (check == null) {
        res.send({
          error: null,
          status: 0,
          data: null,
        });
      } else {
        res.send({
          error: null,
          status: 1,
          data: check,
        });
      }
    }
  );
};

exports.reset_password = function (req, res) {
  Users.findOne(
    { reset_otp: req.body.otp, _id: req.body._id },
    function (err, check) {
      if (check == null) {
        res.send({
          error: null,
          status: 0,
          data: null,
        });
      } else {
        var setters = {
          password: cryptr.encrypt(req.body.newpassword),
          reset_otp: 0,
        };
        Users.update(
          { _id: req.body._id },
          setters,
          { new: true },
          function (err, userss) {
            res.send({
              error: null,
              status: 1,
              data: userss,
            });
          }
        );
      }
    }
  );
};

exports.send_review = function (req, res) {
  var review = new Review({
    review: req.body.review,
    step_id: req.body.step_id,
    user_id: req.body.user_id,
    status: 0,
    created_on: new Date(),
  });
  review.save(function (err, user) {
    if (user == null) {
      res.send({
        error: err,
        status: 0,
        data: null,
      });
    } else {
      Trip.findOne({ _id: req.body.step_id }, function (err, tripss) {
        Users.findOne({ _id: tripss.userId }, function (err, saloons_user) {
          Users.findOne(
            { _id: req.body.user_id },
            function (err, customer_user) {
              var new_user = new Notifications({
                to_id: saloons_user._id,
                from_id: req.body.user_id,
                message:
                  "<b> Hi, " +
                  saloons_user.firstname +
                  " " +
                  saloons_user.lastname +
                  "</b> user <b>" +
                  customer_user.firstname +
                  " " +
                  customer_user.lastname +
                  "</b> has been sent a review on your trip step <b>",
                title:
                  "<b> Hi, " +
                  saloons_user.firstname +
                  " " +
                  saloons_user.lastname +
                  "</b> user <b>" +
                  customer_user.firstname +
                  " " +
                  customer_user.lastname +
                  "</b> has been sent a review on your trip step <b>",
                status: "0",
                table: "trips",
                created_at: new Date(),
                redirct_url_table_id: req.body.step_id,
                redirect_table: "review",
                from_type: "user",
                to_type: "saloon",
              });
              new_user.save(function (err, notify) {
                res.send({
                  error: err,
                  status: 1,
                });
              });
            }
          );
        });
      });
    }
  });
};

exports.get_review = function (req, res) {
  Review.find(
    { step_id: req.body.step_id },
    null,
    { sort: { created_on: -1 } },
    function (err, user) {
      if (user != undefined && user.length > 0) {
        var counter = 0;
        var result = [];
        user.forEach(function (uses, index) {
          Users.findOne({ _id: uses.user_id }, function (err, saloon_usr) {
            let dict = {
              review: uses,
              saloon_usr: saloon_usr != null ? saloon_usr : [],
            };
            result.push(dict);
            counter = counter + 1;
            if (counter == user.length) {
              res.json(
                arraySort(result, "review.created_on", { reverse: true })
              );
            }
          });
        });
      } else {
        res.json([]);
      }
    }
  );
};

exports.get_notificatons = function (req, res) {
  var pageNo = parseInt(req.body.skip);
  var size = 1;
  var skip = size * (pageNo - 1);
  Notifications.aggregate(
    [
      { $match: { to_id: req.body._id } },
      { $group: { _id: null, myCount: { $sum: 1 } } },
    ],
    function (err, user_dt) {
      Notifications.find({ to_id: req.body._id })
        .limit(size)
        .skip(skip)
        .sort({ created_at: -1 })
        .exec(function (err, doc) {
          if (doc != undefined && doc.length > 0) {
            var counter = 0;
            var result = [];
            doc.forEach(function (uses, index) {
              if (uses.from_id != "Admin") {
                Users.findOne(
                  { _id: uses.from_id },
                  function (err, saloon_usr) {
                    let dict = {
                      notifications: uses,
                      saloon_usr: saloon_usr != null ? saloon_usr : [],
                      status: 1,
                      data: user_dt[0] != undefined ? user_dt[0].myCount : 0,
                    };
                    result.push(dict);
                    counter = counter + 1;
                    if (counter == doc.length) {
                      res.json(
                        arraySort(result, "result.created_at", {
                          reverse: true,
                        })
                      );
                    }
                  }
                );
              } else {
                let dict = {
                  notifications: uses,
                  saloon_usr: [],
                  status: 1,
                  data: user_dt[0] != undefined ? user_dt[0].myCount : 0,
                };
                result.push(dict);
                counter = counter + 1;
                if (counter == doc.length) {
                  res.json(
                    arraySort(result, "created_at.created_at", {
                      reverse: true,
                    })
                  );
                }
              }
            });
          } else {
            res.json([]);
          }
        });
    }
  );
};

exports.search_users = function (req, res) {
  var pageNo = parseInt(req.body.skip);
  var size = 100;
  var skip = size * (pageNo - 1);
  var conditions = { status: 1, _id: { $ne: req.body._id } };
  if (errors.indexOf(req.body.lat) == -1) {
    conditions["cords"] = {
      $near: {
        $minDistance: 0,
        $maxDistance: 70000,
        $geometry: {
          type: "Point",
          coordinates: [req.body.lng, req.body.lat],
        },
      },
    };
  }

  if (errors.indexOf(req.body.search_by) == -1) {
    conditions["$or"] = [
      { firstname: req.body.search_by },
      { firstname: { $regex: req.body.search_by, $options: "/i/" } },
      { lastname: req.body.search_by },
      { lastname: { $regex: req.body.search_by, $options: "/i/" } },
      //{acitvities: req.body.search_by }
    ];
  }

  Users.find(conditions)
    .limit(size)
    .skip(skip)
    .sort({ created_at: -1 })
    .exec(function (err, doc) {
      if (
        doc.length > 0 ||
        (doc.length != undefined &&
          doc.length > 0 &&
          req.body.condition2 == "false")
      ) {
        if (doc.length > 0) {
          var counter = 0;
          var result = [];
          doc.forEach(function (uses, index) {
            Userimage.findOne({ userId: uses._id }, function (err, saloon_usr) {
              if (saloon_usr != "") {
                let dict = {
                  userinfo: uses,
                  image: saloon_usr != null ? saloon_usr : [],
                };
                result.push(dict);
                counter = counter + 1;
                if (counter == doc.length) {
                  res.json(
                    arraySort(result, "result.created_at", { reverse: true })
                  );
                }
              } else {
                let dict = {
                  userinfo: uses,
                  image: [],
                };
                result.push(dict);
                counter = counter + 1;
                if (counter == doc.length) {
                  res.json(
                    arraySort(result, "userinfo.created_at", { reverse: true })
                  );
                }
              }
            });
          });
        } else {
          res.send([]);
        }
      } else {
        Users.find({ status: 1, _id: { $ne: req.body._id } })
          .limit(size)
          .skip(skip)
          .sort({ created_at: -1 })
          .exec(function (err, doc) {
            if (doc.length > 0) {
              var counter = 0;
              var result = [];
              doc.forEach(function (uses, index) {
                Userimage.findOne(
                  { userId: uses._id },
                  function (err, saloon_usr) {
                    if (saloon_usr != "") {
                      let dict = {
                        userinfo: uses,
                        image: saloon_usr != null ? saloon_usr : [],
                        condition: 2,
                      };
                      result.push(dict);
                      counter = counter + 1;
                      if (counter == doc.length) {
                        res.json(
                          arraySort(result, "result.created_at", {
                            reverse: true,
                          })
                        );
                      }
                    } else {
                      let dict = {
                        userinfo: uses,
                        image: [],
                        condition: 2,
                      };
                      result.push(dict);
                      counter = counter + 1;
                      if (counter == doc.length) {
                        res.json(
                          arraySort(result, "userinfo.created_at", {
                            reverse: true,
                          })
                        );
                      }
                    }
                  }
                );
              });
            } else {
              res.send([]);
            }
          });
      }
    });
};

exports.get_all_users = function (req, res) {
  Users.find({})
    .sort({ created_at: -1 })
    .exec(function (err, doc) {
      res.send(doc);
    });
};

exports.get_near_users = function (req, res) {
  console.log("req body>>>", req.body)
  var pageNo = parseInt(req.body.skip);
  var size = 6;
  var skip = size * (pageNo - 1);
  var conditions = { status: 1, _id: { $ne: req.body._id } };
  console.log("conditionsssss ======>", conditions);
  if (errors.indexOf(req.body.lat) == -1) {
    conditions["cords"] = {
      $near: {
        $minDistance: 0,
        $maxDistance:
          errors.indexOf(req.body.discovery) == -1 &&
          req.body.discovery == "true" &&
          errors.indexOf(req.body.distance) &&
          req.body.distance != null
            ? Number(req.body.distance) * 1000
            : 70000,
        $geometry: {
          type: "Point",
          coordinates: [Number(req.body.lon), Number(req.body.lat)],
          
          
        },
      },
    };
  }

  if (
    errors.indexOf(req.body.discovery) == -1 &&
    req.body.discovery == "true"
  
  ) 
  {
    if (req.body.discovery == "true") {
      if(req.body.country){
        conditions["country"] = req.body.country;
      }
      if (req.body.gender != "Both") {
        if (req.body.gender == "Male") {
          conditions["gender"] = "Male";
        } else if(req.body.gender=="Female"){
          conditions["gender"] = "Female";
        }
      }
    }

    console.log("req.body.age",req.body.age==-1)
    if (errors.indexOf(req.body.age) == -1) {
      var date = new Date();
      
      date.setDate(date.getDate() - 6);
      var date2 = new Date();
      date2.setDate(date2.getDate() - 6);
      var start_date = new Date(
        date2.setFullYear(date2.getFullYear() - req.body.age.upper)
      );
      var end_date = new Date(
        date.setFullYear(date.getFullYear() - req.body.age.lower)
      );
      console.log("start date>>>",start_date)
      console.log("conditon age>>>",new Date(start_date).toISOString())
      console.log("condtion end_date>>>>>",end_date)
      conditions["$and"] = [
        { dob: { $gte: new Date(start_date).toISOString() } },
        { dob: { $lte: new Date(end_date).toISOString() } },
      ];
    }
  }
 
  console.log("condtions>>",conditions)
  Users.count(conditions, function (err, total) {
    console.log("total>>>>",total)
    // console.log(total.length + "--------" + req.body.condition2);
    if (
      total > 0 ||
      (total != undefined &&
        total > 0 &&
        req.body.condition2 == "false")
    ) {
      Users.find(conditions)
        .limit(size)
        .skip(skip)
        .sort({ created_at: -1 })
        .exec(function (err, doc) {
          console.log("doc for conditons", doc)
          pageNo += 1;
          if (doc != undefined && doc.length > 0) {
            var counter = 0;
            var result = [];
            doc.forEach(function (uses, index) {
              Trip.findOne(
                { userId: uses._id, status: 1 },
                function (err, saloon_usr) {
                  if (saloon_usr != "") {
                    var timeDiff = Math.abs(new Date() - new Date(uses.dob));
                    let age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365);
                    let dict = {
                      userinfo: uses,
                      trip: saloon_usr != null ? saloon_usr : [],
                      total: total,
                      age: age,
                      pageNo: parseInt(pageNo),
                    };
                    result.push(dict);
                    counter = counter + 1;
                    if (counter == doc.length) {
                      res.json(
                        arraySort(result, "result.created_at", {
                          reverse: true,
                        })
                      );
                    }
                  } else {
                    console.log("data>>>>>>>>",Math.abs(new Date() - new Date(uses.dob)))
                    var timeDiff = Math.abs(new Date() - new Date(uses.dob));
                    console.log("timeDiff>>>>>",timeDiff)
                    let age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365);
                    let dict = {
                      userinfo: uses,
                      trip: [],
                      total: total,
                      age: age,
                      pageNo: parseInt(pageNo),
                    };
                    result.push(dict);
                    counter = counter + 1;
                    if (counter == doc.length) {
                      res.json(
                        arraySort(result, "userinfo.created_at", {
                          reverse: true,
                        })
                      );
                    }
                  }
                }
              );
            });
          } else {
            res.send({ condition: 1 });
          }
        });
    } else {
      var pageNo = parseInt(req.body.skip);
      var size = 6;
      var skip = size * (pageNo - 1);
      var conditions1 = { status: 1, _id: { $ne: req.body._id } };
      if (
        errors.indexOf(req.body.discovery) == -1 &&
        req.body.discovery == "true"
      ) {
        if (req.body.discovery == "true") {
          if(req.body.country){
            conditions1["country"] = req.body.country
          }
          if (req.body.gender != "Both") {
            if (req.body.gender == "Male") {
              conditions1["gender"] = "Male";
            } else if(req.body.gender=="Female"){
              conditions1["gender"] = "Female";
            }
          }
        }
        

        if (errors.indexOf(req.body.age) == -1) {
          var date = new Date();
          date.setDate(date.getDate() - 6);
          var date2 = new Date();
          date2.setDate(date2.getDate() - 6);
          var start_date = new Date(
            date2.setFullYear(date2.getFullYear() - req.body.age.upper)
          );
          var end_date = new Date(
            date.setFullYear(date.getFullYear() - req.body.age.lower)
          );
          conditions1["$and"] = [
            { dob: { $gte: new Date(start_date).toISOString() } },
            { dob: { $lte: new Date(end_date).toISOString() } },
          ];
        }
      }
      Users.count(conditions1, function (err, total) {
      console.log("conditons1>>>", conditions1)
        console.log("total1", total)
        Users.find(conditions1)
          .limit(size)
          .skip(skip)
          .sort({ created_at: -1 })
          .exec(function (err, doc) {
            console.log("doc for conditions1>>>>>",doc)
            pageNo += 1;
            if (doc != undefined && doc.length > 0) {
              var counter = 0;
              var result = [];
              doc.forEach(function (uses, index) {
                Trip.findOne(
                  { userId: uses._id, status: 1 },
                  function (err, saloon_usr) {
                    if (saloon_usr != "") {
                      var timeDiff = Math.abs(new Date() - new Date(uses.dob));
                      let age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365);
                      let dict = {
                        userinfo: uses,
                        trip: saloon_usr != null ? saloon_usr : [],
                        total: total,
                        age: age,
                        pageNo: parseInt(pageNo),
                        condition: 2,
                      };
                      result.push(dict);
                      counter = counter + 1;
                      if (counter == doc.length) {
                        res.json(
                          arraySort(result, "result.created_at", {
                            reverse: true,
                          })
                        );
                      }
                    } else {
                      var timeDiff = Math.abs(new Date() - new Date(uses.dob));
                      let age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365);
                      let dict = {
                        userinfo: uses,
                        trip: [],
                        total: total,
                        age: age,
                        pageNo: parseInt(pageNo),
                        condition: 2,
                      };
                      result.push(dict);
                      counter = counter + 1;
                      if (counter == doc.length) {
                        res.json(
                          arraySort(result, "userinfo.created_at", {
                            reverse: true,
                          })
                        );
                      }
                    }
                  }
                );
              });
            } else {
              res.send({ condition: 11 });
            }
          });
      });
    }
  });
};

/************* get user from same destination but from different location ***/
exports.get_distance_users = function (req, res) {
  var pageNo = parseInt(req.body.skip);
  var size = 6;
  var skip = size * (pageNo - 1);
  var count = 0;
  var result = [];
  console.log(req.body)
  Trip.find(
    { userId: req.body._id, status: 1 },
    function (err, my_trips) {
      //res.json(my_trips);
      var results = [];
      var all_trips = [];
      var count = 0;
      var user_ids = [];
      if (my_trips != undefined && my_trips.length > 0) {
        my_trips.forEach(function (uses, index) {
          var conditions2 = {
            status: 1,
            userId: { $ne: req.body._id },
            lat: uses.lat,
            lon: uses.lon,
          };

          var condition3 = { "userinfo.status": 1 };
          if (
            errors.indexOf(req.body.discovery) == -1 &&
            req.body.discovery == "true"
          ) {
            if (req.body.discovery == "true") {
              if (req.body.gender != "both" && req.body.gender != null) {
                if (req.body.gender == "male") {
                  condition3["userinfo.gender"] = "Male";
                } else {
                  condition3["userinfo.gender"] = "Female";
                }
              }
            }

            if (
              errors.indexOf(req.body.age) == -1 &&
              errors.indexOf(req.body.lower) == -1 &&
              errors.indexOf(req.body.upper) == -1
            ) {
              var date = new Date();
              date.setDate(date.getDate() - 6);
              var date2 = new Date();
              date2.setDate(date2.getDate() - 6);
              var start_date = new Date(
                date2.setFullYear(date2.getFullYear() - req.body.age.upper)
              );
              var end_date = new Date(
                date.setFullYear(date.getFullYear() - req.body.age.lower)
              );
              condition3["$and"] = [
                {
                  "userinfo.dob": { $gte: new Date(start_date).toISOString() },
                },
                { "userinfo.dob": { $lte: new Date(end_date).toISOString() } },
              ];
            }
          }

          console.log(condition3);

          Trip.aggregate(
            [
              //{ "$geoNear": {"near": {"type": "Point","coordinates": [ uses.lon, uses.lat]}, "maxDistance": 10000,"spherical": true,"distanceField": "distance","distanceMultiplier": 0.000621371}},
              { $match: conditions2 },
              { $limit: 20 },
              {
                $lookup: {
                  localField: "userId",
                  from: "users",

                  foreignField: "_id",
                  as: "userinfo",
                },
              },
              { $unwind: "$userinfo" },
              {
                $project: {
                  trip_name: 1,
                  starting_point: 1,
                  "userinfo.firstname": 1,
                  "userinfo.lastname": 1,
                  "userinfo.email": 1,
                  "userinfo.gender": 1,
                  "userinfo.dob": 1,
                  "userinfo.status": 1,
                  "userinfo._id": 1,
                  "userinfo.profile_picture": 1,
                  "userinfo.status": 1,
                  trips: "$$ROOT",
                },
                
              },
              { $match: condition3 },
              { $sort: { "userinfo.created_at": -1 } },
              {
                $group: {
                  _id: "$userinfo._id",
                  name: { $first: "$userinfo.firstname" },
                  email: { $first: "$userinfo.email" },
                  trip_name: { $first: "$trip_name" },
                  starting_point: { $first: "$starting_point" },
                  userId: { $first: "$userinfo._id" },
                  gender: { $first: "$userinfo.gender" },
                  userinfo: { $first: "$userinfo" },
                  trip: { $first: "$trips" },
                },
              },
            ],
            function (err, saloon) {
              console.log(err);

              if (saloon != undefined && saloon.length > 0) {
                count = count + 1;
                var count2 = 0;
                saloon.forEach(function (saldetail, index) {
                  count2 = count2 + 1;
                  result.push(saldetail);
                  if (count == my_trips.length && count2 == saloon.length) {
                    res.send({
                      error: 2,
                      status: 1,
                      data: result,
                      total: result.length,
                      pageno: 2,
                    });
                  }
                });
              } else {
                count = count + 1;
                if (count == my_trips.length) {
                  res.send({
                    error: 3,
                    status: 1,
                    data: result,
                    total: result.length,
                    pageno: 2,
                  });
                }
              }
            }
          );
        });
      } else {
        res.send({
          error: null,
          status: 0,
          data: [],
          total: 0,
          pageno: 2,
        });
      }
    }
  );
};

exports.get_distance_users_bkp = function (req, res) {
  var pageNo = parseInt(req.body.skip);
  var size = 6;
  var skip = size * (pageNo - 1);
  var conditions = { status: 1 };
  var conditions = { status: 1 };
  if (errors.indexOf(req.body.lat) == -1) {
    conditions["cords"] = {
      $near: {
        $minDistance: 0,
        $maxDistance:
          errors.indexOf(req.body.discovery) == -1 &&
          req.body.discovery == "true" &&
          errors.indexOf(req.body.distance) &&
          req.body.distance != null
            ? Number(req.body.distance) * 1000
            : 70000,
        $geometry: {
          type: "Point",
          coordinates: [req.body.lng, req.body.lat],
        },
      },
    };
  }

  if (
    errors.indexOf(req.body.discovery) == -1 &&
    req.body.discovery == "true"
  ) {
    if (req.body.discovery == "true") {
      if (req.body.gender != "both") {
        if (req.body.gender == "male") {
          conditions["gender"] = "Male";
        } else {
          conditions["gender"] = "Female";
        }
      }
    }

    if (errors.indexOf(req.body.age) == -1) {
      var date = new Date();
      date.setDate(date.getDate() - 6);
      var date2 = new Date();
      date2.setDate(date2.getDate() - 6);
      var start_date = new Date(
        date2.setFullYear(date2.getFullYear() - req.body.age.upper)
      );
      var end_date = new Date(
        date.setFullYear(date.getFullYear() - req.body.age.lower)
      );
      conditions["$and"] = [
        { dob: { $gte: new Date(start_date).toISOString() } },
        { dob: { $lte: new Date(end_date).toISOString() } },
      ];
    }
  }
  Trip.find(
    { userId: ObjectId(req.body._id), status: 1 },
    function (err, my_trips) {
      //res.json(my_trips);
      var results = [];
      var all_trips = [];
      var count = 0;
      var user_ids = [];
      if (my_trips != undefined && my_trips.length > 0) {
        my_trips.forEach(function (uses, index) {
          var conditions2 = {
            status: 1,
            userId: { $ne: ObjectId(req.body._id) },
          };
          conditions2["cords"] = {
            $near: {
              $minDistance: 0,
              $maxDistance: 10000,
              $geometry: {
                type: "Point",
                coordinates: [uses.lon, uses.lat],
              },
            },
          };

          Trip.find(conditions2).exec(function (err, others_trips) {
            count = count + 1;
            if (others_trips != undefined && others_trips.length > 0) {
              others_trips.forEach(function (uses, index) {
                if (user_ids.indexOf(uses.userId) == -1) {
                  user_ids.push(uses.userId);
                  all_trips.push(uses);
                  if (count == my_trips.length) {
                    var counter2 = 0;
                    var result2 = [];
                    all_trips.forEach(function (users2, index) {
                      conditions["_id"] = users2.userId;
                      Users.findOne(
                        { _id: users2.userId },
                        function (err, total) {
                          if (total != null) {
                            var timeDiff = Math.abs(
                              new Date() - new Date(total.dob)
                            );
                            let age = Math.floor(
                              timeDiff / (1000 * 3600 * 24) / 365
                            );
                            let datas = {
                              userinfo: total,
                              trip: users2 != null ? users2 : [],
                              age: age,
                              total: all_trips.length,
                              pageNo: 2,
                            };
                            result2.push(datas);
                            counter2 = counter2 + 1;
                            if (counter2 == all_trips.length) {
                              res.json(
                                arraySort(result2, "userinfo.created_at", {
                                  reverse: true,
                                })
                              );
                              /*res.send({
							error: 1,
							status: 1,
							data: result2
							});*/
                            }
                          } else {
                            counter2 = counter2 + 1;
                            if (counter2 == all_trips.length) {
                              res.json(
                                arraySort(result2, "userinfo.created_at", {
                                  reverse: true,
                                })
                              );
                            }
                          }
                        }
                      );
                    });
                  }
                }
              });
            } else {
              count = count + 1;
              if (count == my_trips.length) {
                var counter2 = 0;
                var result2 = [];
                all_trips.forEach(function (users2, index) {
                  conditions["_id"] = users2.userId;
                  Users.findOne(conditions, function (err, total) {
                    if (total != null) {
                      var timeDiff = Math.abs(new Date() - new Date(total.dob));
                      let age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365);
                      let datas = {
                        userinfo: total,
                        trip: users2 != null ? users2 : [],
                        age: age,
                        total: all_trips.length,
                        pageNo: 2,
                      };
                      result2.push(datas);
                      counter2 = counter2 + 1;
                      if (counter2 == all_trips.length) {
                        res.json(
                          arraySort(result2, "userinfo.created_at", {
                            reverse: true,
                          })
                        );
                      }
                    } else {
                      counter2 = counter2 + 1;
                      if (counter2 == all_trips.length) {
                        res.json(
                          arraySort(result2, "userinfo.created_at", {
                            reverse: true,
                          })
                        );
                      }
                    }
                  });
                });
              }
            }
          });
        });
      } else {
        res.send({
          error: null,
          status: 0,
          data: [],
        });
      }
    }
  );
};

exports.update_discovery = function (req, res) {
  var setters = {};
  if (errors.indexOf(req.body.discovery) == -1) {
    setters["discovery"] = req.body.discovery;
  }
  if (errors.indexOf(req.body.distance) == -1) {
    setters["distance"] = req.body.distance;
  }
  if (errors.indexOf(req.body.age) == -1) {
    setters["age"] = req.body.age;
  }
  if (errors.indexOf(req.body.gender) == -1) {
    setters["gender"] = req.body.gender;
  }
  if (errors.indexOf(req.body.area) == -1) {
    setters["area"] = req.body.area;
  }
  Users.update(
    { _id: req.body._id },
    { $set: setters },
    { new: true },
    function (err, user) {
      if (user == null) {
        res.send({
          error: err,
          status: 0,
          data: null,
        });
      } else {
        res.send({
          error: null,
          status: 1,
          data: user,
        });
      }
    }
  );
};

exports.create_message = function (req, res) {
  var message,
    registration_tokens = [],
    notification,
    counter = 0;
  var new_chat = new Chat({
    sender_id: req.body.sender_id,
    reciever_id: req.body.reciever_id,
    message: req.body.message,
    created_on: new Date(),
    read: 0,
  });

  new_chat.save(function (err, msg) {
    Users.findOne({ _id: msg.sender_id }, function (err, sender) {
      //create app notification
      var new_provider_noti = new Notifications({
        from_id: msg.sender_id,
        to_id: msg.reciever_id,
        message: sender.fullname + " sent you a message",
        type: "chat",
        item_id: msg._id,
        created_on: new Date(),
        status: 0,
      });

      new_provider_noti.save(function (err, msgss) {
        res.json({
          data: msg,
          status: 1,
          error: err,
          msg: "Message sent",
        });
      });
    });
  });
};

exports.get_chat = function (req, res) {
  var pageNo = parseInt(req.body.skip);
  var size = 8;
  var skip = size * (pageNo - 1);
  var data = [],
    counter = 0,
    allData = [],
    dict = {};
  Chat.find({
    $or: [
      {
        $and: [
          { sender_id: req.body.user_id },
          { reciever_id: req.body.user_chat_id },
        ],
      },

      {
        $and: [
          { sender_id: req.body.user_chat_id },
          { reciever_id: req.body.user_id },
        ],
      },
    ],
  })
    .limit(size)
    .skip(skip)
    .sort({ created_on: -1 })
    .exec(function (err, User) {
      Chat.count({
        $or: [
          {
            $and: [
              { sender_id: req.body.user_id },
              { reciever_id: req.body.user_chat_id },
            ],
          },

          {
            $and: [
              { sender_id: req.body.user_chat_id },
              { reciever_id: req.body.user_id },
            ],
          },
        ],
      }).exec(function (err, total) {
        Users.findOne(
          { _id: req.body.user_chat_id },
          function (err, saloon_usr) {
            pageNo += 1;

            res.json({
              error: null,
              status: 0,
              data: User,
              saloon_usr: saloon_usr,
              total: total,
              pageNo: parseInt(pageNo),
            });
          }
        );
      });
    });
};

exports.get_chat_list = function (req, res) {
  var favr;
  Chat.find(
    {
      $or: [{ sender_id: req.body.user_id }, { reciever_id: req.body.user_id }],
    },
    "",
    { sort: { created_on: -1 } },
    function (err, chatList) {
      var data = [];
      var chatList = chatList;
      var counter = 0,
        countergroup = 0,
        userId = "",
        chatList = chatList,
        totalCount = 0,
        dict = {},
        array = [],
        arrayforgroup = [];

      if (chatList.length > 0) {
        for (var i = 0; i < chatList.length; i++) {
          if (chatList[i].sender_id == req.body.user_id) {
            array.push(chatList[i].reciever_id);
          } else if (chatList[i].reciever_id == req.body.user_id) {
            array.push(chatList[i].sender_id);
          }
        }
        console.log("array", array);
        var filterarray = array.filter(onlyUnique);
        if (filterarray.length > 0) {
          console.log(filterarray);
          function getCompany() {
            Users.findOne({ _id: filterarray[counter] }, function (err, user) {
              if (user != null) {
                Chat.find(
                  {
                    $or: [
                      {
                        $and: [
                          { sender_id: filterarray[counter] },
                          { reciever_id: req.body.user_id },
                          { read: 0 },
                        ],
                      },

                      {
                        $and: [
                          { sender_id: req.body.user_id },
                          { reciever_id: filterarray[counter] },
                          { read: 0 },
                        ],
                      },
                    ],
                  },
                  function (err, chatmsg) {
                    Chat.find(
                      {
                        sender_id: filterarray[counter],
                        reciever_id: req.body.user_id,
                        read: 0,
                      },
                      function (err, chatmsgreceiver) {
                        dict = {
                          _id: user._id,
                          usr_id: filterarray[counter],
                          // available : user.available,
                          email: user.email,
                          // "registration_token" : user.registration_token,
                          image:
                            user.profile_picture != undefined &&
                            user.profile_picture != null
                              ? user.profile_picture
                              : "",
                          created_on:
                            chatmsg.length > 0
                              ? chatmsg[chatmsg.length - 1].created_on
                              : "",
                          name:
                            user.firstname != undefined
                              ? user.firstname + " " + user.lastname
                              : "",
                          message:
                            chatmsg.length == 0
                              ? ""
                              : chatmsg[chatmsg.length - 1],
                          msgCount: chatmsg,
                          msgCountReciever: chatmsgreceiver,
                        };
                        data.push(dict);
                        if (counter < filterarray.length - 1) {
                          counter = counter + 1;
                          totalCount = 0;
                          getCompany();
                        } else {
                          res.json(data);
                        }
                      }
                    );
                  }
                );
              } else {
                //increase counter value
                if (counter < filterarray.length - 1) {
                  data.push(dict);
                  counter = counter + 1;
                  totalCount = 0;
                  getCompany();
                } else {
                  res.json(data);
                }
              }
            });
          }
          //call function
          getCompany();
        }
      } else {
        res.json(data);
      }

      function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }
    }
  );
};

exports.places_of_interest = function (req, res) {
  var result = [];
  var counter = 0;
  /*clients.getGeoLocation(req.body.location)
    .then(latlong => {*/
  clients
    .nearBySearch({
      geoCode: { lat: req.body.lat, lng: req.body.lon },
      searchType: "tourist_attraction",
    })
    .then((results) => {
      if (results.length > 0) {
        results.forEach(function (uses, index) {
          let partialAddress = req.body.location;
          const radius = 6000;
          const language = "en";

          // Search with default opts
          const whiteHousePlaceID = uses.placeId;

          Places.details({ placeid: whiteHousePlaceID })
            .then((results_l) => {
              // results array of partial matches

              if (uses.photo_reference != "" && uses.photo_reference != null) {
                clients.getPlaceImage(uses.photo_reference).then((result2) => {
                  let dict = {
                    place: uses,
                    image: result2,
                    //place_detail: getdetail(uses.placeId),
                    results_l: results_l.result,
                    distance:
                      Number(
                        getDistanceFromLatLonInKm2(
                          req.body.my_lat,
                          req.body.my_lng,
                          results_l.result.geometry.location.lat,
                          results_l.result.geometry.location.lng
                        )
                      ).toFixed(1) + "kms",
                    //latlong:latlong
                  };
                  result.push(dict);
                  counter = counter + 1;
                  if (counter == results.length) {
                    res.json({
                      error: null,
                      status: 1,
                      data: result,
                    });
                  }
                });
              } else {
                let dict = {
                  place: uses,
                  image: [],
                  //place_detail: getdetail(uses.placeId),
                  results_l: results_l.result,
                  distance:
                    Number(
                      getDistanceFromLatLonInKm2(
                        req.body.my_lat,
                        req.body.my_lng,
                        results_l.result.geometry.location.lat,
                        results_l.result.geometry.location.lng
                      )
                    ).toFixed(1) + "kms",
                  //latlong:latlong
                };
                result.push(dict);
                counter = counter + 1;
                if (counter == results.length) {
                  res.json({
                    error: null,
                    status: 1,
                    data: result,
                  });
                }
              }

              //location search
            })
            .catch((e) => console.log(e));
          //location ends
        });
      } else {
        res.json({
          error: null,
          status: 0,
          data: [],
        });
      }
    })
    .catch((e) =>
      res.json({
        error: "no data found",
        status: 0,
        data: e,
      })
    );
  //});

  function getDistanceFromLatLonInKm2(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad2(lat2 - lat1); // deg2rad below
    var dLon = deg2rad2(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad2(lat1)) *
        Math.cos(deg2rad2(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }

  function deg2rad2(deg) {
    return deg * (Math.PI / 180);
  }
};

exports.places_of_interest2 = function (req, res) {
  var result = [];
  var counter = 0;
  clients.getGeoLocation(req.body.location).then((latlong) => {
    clients
      .nearBySearch({
        geoCode: { lat: latlong.lat, lng: latlong.lng },
        searchType: "tourist_attraction",
      })
      .then((results) => {
        if (results.length > 0) {
          results.forEach(function (uses, index) {
            let partialAddress = req.body.location;
            const radius = 6000;
            const language = "en";

            // Search with default opts
            const whiteHousePlaceID = uses.placeId;
            //Places.autocomplete({ input: partialAddress, radius, language })
            Places.details({ placeid: whiteHousePlaceID })
              .then((results_l) => {
                // results array of partial matches

                if (
                  uses.photo_reference != "" &&
                  uses.photo_reference != null
                ) {
                  clients
                    .getPlaceImage(uses.photo_reference)
                    .then((result2) => {
                      let dict = {
                        place: uses,
                        image: result2,
                        //place_detail: getdetail(uses.placeId),
                        results_l: results_l.result,
                        distance:
                          Number(
                            getDistanceFromLatLonInKm2(
                              req.body.my_lat,
                              req.body.my_lng,
                              results_l.result.geometry.location.lat,
                              results_l.result.geometry.location.lng
                            )
                          ).toFixed(1) + "kms",
                        latlong: latlong,
                      };
                      result.push(dict);
                      counter = counter + 1;
                      if (counter == results.length) {
                        res.json({
                          error: null,
                          status: 1,
                          data: result,
                        });
                      }
                    });
                } else {
                  let dict = {
                    place: uses,
                    image: [],
                    //place_detail: getdetail(uses.placeId),
                    results_l: results_l.result,
                    distance:
                      Number(
                        getDistanceFromLatLonInKm2(
                          req.body.my_lat,
                          req.body.my_lng,
                          results_l.result.geometry.location.lat,
                          results_l.result.geometry.location.lng
                        )
                      ).toFixed(1) + "kms",
                    latlong: latlong,
                  };
                  result.push(dict);
                  counter = counter + 1;
                  if (counter == results.length) {
                    res.json({
                      error: null,
                      status: 1,
                      data: result,
                    });
                  }
                }

                //location search
              })
              .catch((e) => console.log(e));
            //location ends
          });
        } else {
          res.json({
            error: null,
            status: 0,
            data: [],
          });
        }
      })
      .catch((e) =>
        res.json({
          error: "no data found",
          status: 0,
          data: e,
        })
      );
  });

  function getDistanceFromLatLonInKm2(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad2(lat2 - lat1); // deg2rad below
    var dLon = deg2rad2(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad2(lat1)) *
        Math.cos(deg2rad2(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }

  function deg2rad2(deg) {
    return deg * (Math.PI / 180);
  }
};

exports.make_fav_place = function (req, res) {
  var new_Users = new Favplace({
    user_id: req.body._id,
    data: JSON.parse(req.body.data),
    created_at: new Date(),
  });
  //lng, lat
  new_Users.save(function (err, User) {
    Favplace.find(
      { user_id: req.body._id },
      "",
      { sort: { created_at: -1 }, limit: 4 },
      function (err, doc) {
        res.json({
          error: null,
          status: 1,
          data: doc,
          ids: User._id,
        });
      }
    );
  });
};

exports.get_fav_places = function (req, res) {
  Favplace.find(
    { user_id: req.body._id },
    "",
    { sort: { created_at: -1 }, limit: 4 },
    function (err, doc) {
      res.json({
        error: null,
        status: 1,
        data: doc,
      });
    }
  );
};

exports.remove_fav_place = function (req, res) {
  Favplace.remove({ _id: req.body.place_id }, function (err, staf) {
    Favplace.find(
      { user_id: req.body._id },
      "",
      { sort: { created_at: -1 }, limit: 4 },
      function (err, doc) {
        res.json({
          error: null,
          status: 1,
          data: doc,
        });
      }
    );
  });
};

exports.get_photots_google = function (req, res) {
  var result = [];
  var errors = [];
  var photos = JSON.parse(req.body.photo_s);
  var counter = 0;
  var b = photos.splice(0, 2);
  if (photos.length > 0) {
    photos.forEach(function (uses, index) {
      function getdata() {
        clients
          .getPlaceImage(uses)
          .then((result2) => {
            result.push(result2);
            counter = counter + 1;
            if (counter == photos.length) {
              res.json({
                error: null,
                status: 1,
                data: result,
              });
            }
          })
          .catch(
            (e) => console.log(e)
            // errors.push(e)
            // counter = counter+1
            /*	res.json({
				error: 'no data found',
				status: 0,
				data: e
				})*/
          );
      }
      getdata();
    });
  } else {
    res.json({
      error: null,
      status: 0,
      data: [],
    });
  }
};

exports.all_fav = function (req, res) {
  Favplace.find(
    { user_id: req.body._id },
    "",
    { sort: { created_at: -1 } },
    function (err, doc) {
      res.json({
        error: null,
        status: 1,
        data: doc,
      });
    }
  );
};

exports.get_popular_destinations = function (req, res) {
  Trip.find({ popular: "1" }).exec(function (err, doc) {
    res.send({
      error: null,
      status: 1,
      data: doc,
    });
  });
};

exports.create_branch_link = function (req, res) {
  fgetfunc();

  var urls;
  async function fgetfunc() {
    const client = branchio({
      appId: "956100985111990319",
      key: "key_test_ag4qujDc3nek2cE82kg2fkocCsigpG71", // initialize branchio with either appId or branch key and branch secret but not both
      secret: "secret_test_WW9AnGFspz0Oz7VPpyNXt55AV2B2tBJR",
    });

    const { url } = await client.link({
      alias: "",
      stage: "new user",
      channel: "facebook",
      feature: "dashboard",
      campaign: "content 123",
      tags: ["tag1", "tag2", "tag3"],
      data: {
        custom_bool: true,
        $og_title: "Title",
        $og_description: "Description",
        $og_image_url: "https://lorempixel.com/400/400",
      },
    });
    console.log("url == ", url);
    urls = url;
    res.send({
      error: null,
      status: 1,
      data: url,
    });
  }
};

exports.all_chats = function (req, res) {
  var favr;
  Chat.find(
    {
      $or: [
        { sender_id: req.body.Users_id },
        { reciever_id: req.body.Users_id },
      ],
    },
    function (err, chatList) {
      var data = [];
      var chatList = chatList;
      var counter = 0,
        countergroup = 0,
        UsersId = "",
        chatList = chatList,
        totalCount = 0,
        dict = {},
        array = [],
        arrayforgroup = [];

      if (chatList.length > 0) {
        for (var i = 0; i < chatList.length; i++) {
          if (chatList[i].sender_id == req.body.Users_id) {
            array.push(chatList[i].reciever_id);
          } else if (chatList[i].reciever_id == req.body.Users_id) {
            array.push(chatList[i].sender_id);
          }
        }
        console.log("array", array);
        var filterarray = array.filter(onlyUnique);
        if (filterarray.length > 0) {
          console.log(filterarray);
          function getCompany() {
            Users.findOne({ _id: filterarray[counter] }, function (err, Users) {
              if (Users != null) {
                Chat.find(
                  {
                    $or: [
                      {
                        $and: [
                          { sender_id: filterarray[counter] },
                          { reciever_id: req.body.Users_id },
                          { read: 0 },
                        ],
                      },

                      {
                        $and: [
                          { sender_id: req.body.Users_id },
                          { reciever_id: filterarray[counter] },
                          { read: 0 },
                        ],
                      },
                    ],
                  },
                  function (err, chatmsg) {
                    Chat.find(
                      {
                        sender_id: filterarray[counter],
                        reciever_id: req.body.Users_id,
                        read: 0,
                      },
                      function (err, chatmsgreceiver) {
                        dict = {
                          _id: Users._id,
                          usr_id: filterarray[counter],
                          // available : Users.available,
                          email: Users.email,
                          // "registration_token" : Users.registration_token,
                          image: Users.image,
                          created_on:
                            chatmsg.length > 0
                              ? chatmsg[chatmsg.length - 1].created_on
                              : "",
                          name: Users.fullname,
                          contact: Users.phone,
                          type: Users.type,
                          message:
                            chatmsg.length == 0
                              ? ""
                              : chatmsg[chatmsg.length - 1],
                          msgCount: chatmsg,
                          msgCountReciever: chatmsgreceiver,
                        };
                        data.push(dict);
                        if (counter < filterarray.length - 1) {
                          counter = counter + 1;
                          totalCount = 0;
                          getCompany();
                        } else {
                          res.json(data);
                        }
                      }
                    );
                  }
                );
              } else {
                //increase counter value
                if (counter < filterarray.length - 1) {
                  data.push(dict);
                  counter = counter + 1;
                  totalCount = 0;
                  getCompany();
                } else {
                  res.json(data);
                }
              }
            });
          }
          //call function
          getCompany();
        }
      } else {
        res.json(data);
      }

      function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }
    }
  );

  function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }
  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  /*********************************************************************/
  exports.add_bookings = function (req, res) {
    var new_Users = new Booking({
      saloon_id: "5fbbb502badf9e3c5c84cfae",
      Users_id: "5fbbb691badf9e3c5c84cfb0",
      amount: 100,
      service: "5fd0c26bfa7e2c419c7c2897",
      date: new Date(),
      status: "1",
    });
    new_Users.save(function (err, Users) {
      if (Users == null) {
        res.send({
          error: err,
          status: 0,
          data: null,
        });
      } else {
        res.send({
          error: null,
          status: 1,
        });
      }
    });
  };
  exports.get_new_bookings = async function (req, res) {
    var counter = 0,
      counter2 = 1,
      arradata = [];
    var result = [];
    Booking.find({ status: 1, saloon_id: req.body._id }, function (err, Users) {
      Users.forEach(function (uses, index) {
        Users.findOne({ _id: uses.Users_id }, function (err, saloon_usr) {
          Service.findOne({ _id: uses.service }, function (err, services) {
            let dict = {
              booking: uses,
              saloon_usr: saloon_usr,
              services: services,
            };
            result.push(dict);
            counter = counter + 1;
            if (counter == Users.length) {
              res.json(result);
            }
          });
        });
      });
    });

    /*console.log("----------------------------->>Test1");
  var currentbill = await Booking.aggregate([
    {
        $lookup:{
            from : "Saloon",
            localField: "saloon_id", 
            foreignField : "_id", 
            as : "UsersData"
        }
    },
    {
        $match:{
             "saloon_id":req.body._id,
              "status":'1'
            // Bill_Status: false
        }
    }

])
  console.log("--------Test2");

return res.send({ status: true,msg: 'Current Bills List .', data: currentbill})
   */
  };

  //--------------------------------
  //exports.get_new_bookings = function(req, res){
  //exports.get_new_bookings = get_new_bookings;

  exports.get_confirmed_bookings = function (req, res) {
    var counter = 0,
      counter2 = 1,
      arradata = [];
    var result = [];
    Booking.find({ status: 2, saloon_id: req.body._id }, function (err, Users) {
      Users.forEach(function (uses, index) {
        Users.findOne({ _id: uses.Users_id }, function (err, saloon_usr) {
          Service.findOne({ _id: uses.service }, function (err, services) {
            let dict = {
              booking: uses,
              saloon_usr: saloon_usr,
              services: services,
            };
            result.push(dict);
            counter = counter + 1;
            if (counter == Users.length) {
              res.json(result);
            }
          });
        });
      });
    });
  };

  exports.change_bookingh_status = function (req, res) {
    var new_otp = {
      status: req.body.status,
    };
    Booking.update(
      { saloon_id: req.body.saloon_id, _id: req.body._id },
      new_otp,
      { new: true },
      function (err, Usersss) {
        res.send({
          error: null,
          status: 1,
          data: Usersss,
        });
      }
    );
  };

  exports.dahsboard_today_bookings = async function (req, res) {
    var counter = 0,
      counter2 = 1,
      arradata = [];
    var result = [];
    Booking.find(
      { date: new Date(), saloon_id: req.body._id, status: "2" },
      function (err, Users) {
        Users.forEach(function (uses, index) {
          Users.findOne({ _id: uses.Users_id }, function (err, saloon_usr) {
            Service.findOne({ _id: uses.service }, function (err, services) {
              let dict = {
                booking: uses,
                saloon_usr: saloon_usr,
                services: services,
              };
              result.push(dict);
              counter = counter + 1;
              if (counter == Users.length) {
                res.json(result);
              }
            });
          });
        });
      }
    );
  };

  exports.dahsboard_upcommming_bookings = async function (req, res) {
    var counter = 0,
      counter2 = 1,
      arradata = [];
    var result = [];
    Booking.find(
      { date: { $gt: new Date() }, saloon_id: req.body._id, status: "2" },
      function (err, Users) {
        Users.forEach(function (uses, index) {
          Users.findOne({ _id: uses.Users_id }, function (err, saloon_usr) {
            Service.findOne({ _id: uses.service }, function (err, services) {
              let dict = {
                booking: uses,
                saloon_usr: saloon_usr,
                services: services,
              };
              result.push(dict);
              counter = counter + 1;
              if (counter == Users.length) {
                res.json(result);
              }
            });
          });
        });
      }
    );
  };

  /*
var counter=0,counter2=1,arradata =[];
var result =[];
  var chatList = [];
Chat.find({$or: [{sender_id: req.body.Users_id},{reciever_id: req.body.Users_id}]}, function(err, Users) {
   Users.forEach(function(uses,index){
     if (uses.sender_id == req.body.Users_id) 
     {
        var usrid = uses.reciever_id;
        chatList.push(uses.reciever_id);
     }else
     {
       var usrid = uses.sender_id;
     }
   	Users.findOne({_id : usrid}, function (err, saloon_usr) {
   				let dict={
				chat:uses,
				saloon_usr:saloon_usr
				} 
				result.push(dict);
				counter = counter+1;
				if(counter==Users.length)
				{
					res.json(result); 
				}

   	});	
   });
});*/
};

exports.get_all_users2 = function (req, res) {
  console.log("inn", req.body);
  Users.find(
    { status: { $ne: "3" } },
    null,
    { sort: { created_at: -1 } },
    function (err, sub_users) {
      res.send({
        error: null,
        status: 1,
        data: sub_users,
      });
    }
  );
};

function randomString(len, charSet) {
  charSet = charSet || "0123456789";
  var randomString = "";
  for (var i = 0; i < len; i++) {
    var randomPoz = Math.floor(Math.random() * charSet.length);
    randomString += charSet.substring(randomPoz, randomPoz + 1);
  }
  return randomString;
}

/********** get interest for users***/
exports.get_all_interest_user = function (req, res) {
  Interestes.find(
    { status: req.body.status },
    null,
    { sort: { created_at: -1 } },
    function (err, sub_users) {
      res.send({
        error: null,
        status: 1,
        data: sub_users,
      });
    }
  );
};

/********* get users types for users ****/
exports.get_all_usertypes = function (req, res) {
  Usertypes.find({},
    // { status: 1 },
    null,
    { sort: { created_at: -1 } },
    function (err, sub_users) {
      res.send({
        error: null,
        status: 1,
        data: sub_users,
      });
    }
  );
};

/********* get future trip users ****/
exports.get_future_trip_users = function (req, res) {
  var conditions = {},
    counter = 0,
    counter_user = 0,
    data = [],
    dict = {};

  Trip.find({ userId: req.body._id })
    .sort({ created_at: -1 })
    .exec(function (err, doc) {
      doc.forEach((value) => {
        console.log("value =-===", value);
        conditions["cords"] = {
          $near: {
            $minDistance: 0,
            $maxDistance: 1000,
            $geometry: {
              type: "Point",
              coordinates: [parseFloat(value.lon), parseFloat(value.lat)],
            },
          },
        };

        console.log(parseFloat(value.lon), parseFloat(value.lat));
        conditions["userId"] = { $ne: req.body._id };
        // conditions['lat'] = value.lat;
        // conditions['lon'] =  value.lon;
        console.log("conditions =", conditions);

        Trip.find(conditions).exec(function (err, doc1) {
          console.log("doc1.length =-===", doc1.length);
          if (doc1.length > 0) {
            doc1.forEach((value1) => {
              Users.findOne({ _id: value1.userId }, function (err, user) {
                if (user != null) {
                  dict = {
                    user: user,
                  };
                  data.push(dict);
                }
              });
            });
          }
        });

        counter = counter + 1;
        if (counter == doc.length) {
          res.send({
            error: null,
            status: 1,
            data: data,
          });
        }
      });
    });
};

/********* get future trip users ****/
exports.create_invite = function (req, res) {
  var new_invite = new Invite({
    user_id: req.body.user_id,
    invite_user_id: req.body.invite_user_id,
    trip_id: req.body.trip_id,
    created_at: new Date(),
  });
  //lng, lat
  new_invite.save(function (err, invite) {
    res.send({
      error: null,
      status: 1,
      data: invite,
    });
  });
};
/********* get future trip users ****/
exports.invite_list = function (req, res) {
  var all_data = [],
    counter = 0,
    dict = {};
  Invite.find({ user_id: req.body.user_id, trip_id: req.body.trip_id }).exec(
    function (err, invite) {
      invite.forEach(function (staf) {
        Users.findOne({ _id: staf.invite_user_id }, function (err, user) {
          dict = {
            invite: staf,
            user: user,
          };
          all_data.push(dict);
          counter = counter + 1;
          if (counter == invite.length) {
            res.send({
              error: null,
              status: 1,
              data: all_data,
            });
          }
        });
      });
      // res.send({
      //        error: null,
      //        status: 1,
      //        data: invite
      //       });
    }
  );
};
