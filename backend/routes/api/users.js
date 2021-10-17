const express = require("express");
const asyncHandler = require("express-async-handler");
const { setTokenCookie, restoreUser, requireAuth } = require("../../utils/auth");
const { User } = require("../../db/models");
const { singlePublicFileUpload, singleMulterUpload } = require('../../awsS3')
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const router = express.Router();


const validateSignup = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("username")
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage("Please provide a username with at least 4 characters."),
  check("username").not().isEmail().withMessage("Username cannot be an email."),
  check("password")
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage("Password must be 6 characters or more."),
  handleValidationErrors,
];

router.post(
  "/",
  singleMulterUpload("image"),
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, username, password, image } = req.body;
    const user = await User.signup({
      email,
      username,
      password,
      image,
    });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  })
);

router.get(
  '/:userId(\\d+)'
)
module.exports = router;
