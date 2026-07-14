const mongoose = require("mongoose");
const crypto = require("crypto");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["student", "teacher", "admin"],
      default: "student",
    },

    // ==========================
    // Profile Information
    // ==========================

    phone: {
      type: String,
      default: "",
    },

    profileImage: {
      type: String,
      default: "https://i.pravatar.cc/200",
    },

    specialization: {
      type: String,
      default: "MERN Stack & AI",
    },

    bio: {
      type: String,
      default: "",
    },

    location: {
      type: String,
      default: "India",
    },

    // ==========================
    // Email Verification
    // ==========================

    isVerified: {
      type: Boolean,
      default: false,
    },

    verificationToken: {
      type: String,
    },

    verificationTokenExpire: {
      type: Date,
    },

    // ==========================
    // Courses
    // ==========================

    enrolledCourses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],

    // ==========================
    // Wishlist
    // ==========================

    wishlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],

    // ==========================
    // Reset Password
    // ==========================

    resetPasswordToken: {
      type: String,
    },

    resetPasswordExpire: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// =============================
// Generate Reset Password Token
// =============================
userSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

// =============================
// Generate Email Verification Token
// =============================
userSchema.methods.getVerificationToken = function () {
  const verificationToken = crypto.randomBytes(32).toString("hex");

  this.verificationToken = crypto
    .createHash("sha256")
    .update(verificationToken)
    .digest("hex");

  this.verificationTokenExpire = Date.now() + 24 * 60 * 60 * 1000;

  return verificationToken;
};

module.exports = mongoose.model("User", userSchema);