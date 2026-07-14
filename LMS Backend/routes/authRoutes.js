const express = require("express");
const router = express.Router();

const {
    register,
    login,
    verifyEmail,
     resendVerification,
    forgotPassword,
    resetPassword
} = require("../controllers/authController");

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: User Authentication APIs
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: Sumayya
 *               email:
 *                 type: string
 *                 example: sumayya@gmail.com
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       201:
 *         description: User Registered Successfully
 */

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login User
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: sumayya@gmail.com
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       200:
 *         description: Login Successful
 */

/**
 * @swagger
 * /api/auth/verify-email/{token}:
 *   get:
 *     summary: Verify User Email
 *     tags: [Authentication]
 *     parameters:
 *       - in: path
 *         name: token
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Email Verified Successfully
 */

/**
 * @swagger
 * /api/auth/resend-verification:
 *   post:
 *     summary: Resend Verification Email
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 example: sumayya@gmail.com
 *     responses:
 *       200:
 *         description: Verification Email Sent
 */

/**
 * @swagger
 * /api/auth/forgot-password:
 *   post:
 *     summary: Forgot Password
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 example: sumayya@gmail.com
 *     responses:
 *       200:
 *         description: Reset Link Sent
 */

/**
 * @swagger
 * /api/auth/reset-password/{token}:
 *   put:
 *     summary: Reset Password
 *     tags: [Authentication]
 *     parameters:
 *       - in: path
 *         name: token
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - password
 *             properties:
 *               password:
 *                 type: string
 *                 example: newpassword123
 *     responses:
 *       200:
 *         description: Password Reset Successfully
 */

router.get("/test", (req, res) => {
    res.send("Auth Route Working");
});

router.post("/register", register);

router.post("/login", login);

router.get("/verify-email/:token", verifyEmail);

router.post("/forgot-password", forgotPassword);

router.put("/reset-password/:token", resetPassword);

router.post(
    "/resend-verification",
    resendVerification
);

module.exports = router;