import { Router } from "express";
import routerpdf from "./router-convert.js";


const router = Router();
router.use("/convert", routerpdf);
export default router;