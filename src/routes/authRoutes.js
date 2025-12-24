import { celebrate } from "celebrate";
import { Router } from "express";
import { loginUser, logoutUser, refreshUserSession, registerUser, requestResetEmail, resetPassword } from "../controllers/authController.js";
import { loginUserSchema, registerUserSchema, requestResetEmailSchema, resetPasswordShema } from "../validations/authValidation.js";

const router = Router();

router.post('/auth/register', celebrate(registerUserSchema), registerUser);
router.post('/auth/login', celebrate(loginUserSchema), loginUser);
router.post('/auth/logout', logoutUser);
router.post('/auth/refresh', refreshUserSession);

router.post('/auth/request-reset-email', celebrate(requestResetEmailSchema), requestResetEmail,
);

router.post('/auth/reset-password', celebrate(resetPasswordShema), resetPassword);


export default router;

