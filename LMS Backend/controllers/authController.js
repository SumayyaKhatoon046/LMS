const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");

// ===============================
// Register User
// ===============================

exports.register = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        console.log("Email:", email);
console.log("Existing User:", existingUser);

        if (existingUser) {

            return res.status(400).json({
                success: false,
                message: "User already exists"
            });

        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({

            name,
            email,
            password: hashedPassword

        });

        // Generate Verification Token
        const verificationToken = user.getVerificationToken();

        await user.save({ validateBeforeSave: false });

        // Verification URL
        const verificationUrl =
            `http://localhost:5000/api/auth/verify-email/${verificationToken}`;

        // Email Message
        const message = `
Welcome to SkillForge AI 🎉

Please verify your email by clicking the link below:

${verificationUrl}

This verification link will expire in 24 hours.
`;

        // Send Email
        await sendEmail({

            email: user.email,

            subject: "Email Verification",

            message

        });

        res.status(201).json({

            success: true,

            message:
                "Registration Successful. Please check your email to verify your account."

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }
    

};

// ===============================
// Login User
// ===============================

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("========== LOGIN REQUEST ==========");
    console.log("Email:", email);
    console.log("Password from Frontend:", password);

    // Check Email
    const user = await User.findOne({ email });

    console.log("User Found:", !!user);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    console.log("User Email:", user.email);
    console.log("Is Verified:", user.isVerified);
    console.log("Stored Password Hash:", user.password);

    // Email Verification Check
    if (!user.isVerified) {
      return res.status(401).json({
        success: false,
        message: "Please verify your email before logging in.",
      });
    }

    // Check Password
    const isMatch = await bcrypt.compare(password, user.password);

    console.log("Password Match:", isMatch);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid Password",
      });
    }

    // Generate JWT Token
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    console.log("Login Successful");

    // Success Response
    return res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error) {
    console.error("Login Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// ===============================
// Verify Email
// ===============================

exports.verifyEmail = async (req, res) => {

    try {

        const verificationToken = crypto

            .createHash("sha256")

            .update(req.params.token)

            .digest("hex");

        const user = await User.findOne({

            verificationToken,

            verificationTokenExpire: {

                $gt: Date.now()

            }

        });

        if (!user) {

            return res.status(400).json({

                success: false,

                message:
                    "Invalid or Expired Verification Token"

            });

        }

        user.isVerified = true;

        user.verificationToken = undefined;

        user.verificationTokenExpire = undefined;

        await user.save();

        res.status(200).json({

            success: true,

            message:
                "Email Verified Successfully. You can now login."

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};
    // ===============================
// Resend Verification Email
// ===============================

exports.resendVerification = async (req, res) => {

    try {

        const { email } = req.body;

        const user = await User.findOne({ email });

        if (!user) {

            return res.status(404).json({

                success: false,

                message: "User not found"

            });

        }

        if (user.isVerified) {

            return res.status(400).json({

                success: false,

                message: "Email is already verified"

            });

        }

        // Generate New Verification Token
        const verificationToken = user.getVerificationToken();

        await user.save({ validateBeforeSave: false });

        const verificationUrl =
            `http://localhost:5000/api/auth/verify-email/${verificationToken}`;

        const message = `
Hello ${user.name},

Click the link below to verify your email.

${verificationUrl}

This verification link will expire in 24 hours.
`;

        await sendEmail({

            email: user.email,

            subject: "Resend Email Verification",

            message

        });

        res.status(200).json({

            success: true,

            message: "Verification email sent successfully."

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// ===============================
// Forgot Password
// ===============================

exports.forgotPassword = async (req, res) => {

    try {

        const { email } = req.body;

        const user = await User.findOne({ email });

        if (!user) {

            return res.status(404).json({

                success: false,

                message: "User not found"

            });

        }

        const resetToken =
            user.getResetPasswordToken();

        await user.save({

            validateBeforeSave: false

        });

        const resetUrl =
            `http://localhost:5000/api/auth/reset-password/${resetToken}`;

        const message = `
You requested a password reset.

Click the link below to reset your password:

${resetUrl}

This link will expire in 10 minutes.
`;

        await sendEmail({

            email: user.email,

            subject: "Password Reset Request",

            message

        });

        res.status(200).json({

            success: true,

            message:
                "Password reset email sent successfully"

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// ===============================
// Reset Password
// ===============================

exports.resetPassword = async (req, res) => {

    try {

        const resetPasswordToken = crypto

            .createHash("sha256")

            .update(req.params.token)

            .digest("hex");

        const user = await User.findOne({

            resetPasswordToken,

            resetPasswordExpire: {

                $gt: Date.now()

            }

        });

        if (!user) {

            return res.status(400).json({

                success: false,

                message:
                    "Invalid or Expired Token"

            });

        }

        const hashedPassword =
            await bcrypt.hash(
                req.body.password,
                10
            );

        user.password = hashedPassword;

        user.resetPasswordToken = undefined;

        user.resetPasswordExpire = undefined;

        await user.save();

        res.status(200).json({

            success: true,

            message:
                "Password Reset Successfully"

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};