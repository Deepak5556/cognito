import express from "express";
import { isAdmin, isAuth } from "../middleware/isAuth.js";
import { addModule, createCourse } from "../controllers/admin.controller.js";
import { uploadFiles } from "../middleware/multer.js";

const router = express.Router();
router.post("/course/new", isAuth, isAdmin, uploadFiles, createCourse);
router.post("/course/:id", isAuth, isAdmin, uploadFiles, addModule);

export default router;
