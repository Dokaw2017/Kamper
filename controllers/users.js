const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewear/async");
const User = require("../models/User");

//@desc         Get all users
//@route        GET api/vi/auth/users
//@access       Private/admin
exports.getUsers = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

//@desc         Get a user
//@route        GET api/vi/auth/users/:id
//@access       Private/admin
exports.getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).json({
    success: true,
    data: user,
  });
});

//@desc         Create user
//@route        POST api/vi/auth/users
//@access       Private/admin
exports.createUser = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);

  res.status(201).json({
    success: true,
    data: user,
  });
});

//@desc         Update user
//@route        PUT api/vi/auth/users/:id
//@access       Private/admin
exports.updateUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: user,
  });
});

//@desc         Delete user
//@route        DELETE api/vi/auth/users/:id
//@access       Private/admin
exports.deleteUser = asyncHandler(async (req, res, next) => {
  await User.findByIdAndUpdate(req.params.id);

  res.status(200).json({
    success: true,
    data: {},
  });
});
