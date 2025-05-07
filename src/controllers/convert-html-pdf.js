/** @format */

import puppeteer from "puppeteer";
import { uuid } from "uuidv4";
import { create } from "./register.js";

const pathSave = "src/dist/upload/";

export const converthtmlpdf = async (req, res) => {
    let urlhtml = req.body.url;
    let email = req.body.email;
    console.log("url:", urlhtml);
    console.log("email:", email);

    let name_file = uuid() + ".pdf";

    try {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.setViewport({ width: 1024, height: 800 });
        await page.goto(urlhtml, { waitUntil: "networkidle2" }).catch(function () {
            console.log("Error while loading up the url.");
        });

        const pdf = await page
            .pdf({
                path: pathSave + name_file,
                format: "letter",
                printBackground: true,
                margin: { top: 20, left: 20, right: 20, bottom: 0 },
            })
            .catch(function () {
                res.status(404).json({
                    message: "Error creating pdf",
                    success: false,
                });
                console.log("Error creating pdf.");
            });
        browser.close();
        console.log('pdf ==>', pdf)
        res.status(200).json({
            success: true,
            file: {name:name_file, path:pathSave + name_file},
            base64: pdf,
            message: "ATENCION SE HA CREADO EL PDF DE MANERA CORRECTA",
        });

        // crea registro de historia archivo convertidos del usuario
       // create(email, name_file);

    } catch (error) {
        console.warn("ERROR PDF", error.message);
    }
};
