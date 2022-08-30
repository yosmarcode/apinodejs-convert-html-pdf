import { Router } from "express";
import { converthtmlpdf } from "../controllers/convert-html-pdf.js";

const routerpdf = Router();

routerpdf.post("/convert-html-pdf", converthtmlpdf);

export default routerpdf;