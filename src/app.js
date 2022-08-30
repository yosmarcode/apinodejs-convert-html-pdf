import express from 'express';
import morgan from 'morgan';
import cors from "cors";
import router from './routers/Index.js';




const app = express();

const PORT = process.env.PORT || 3001;

app.set("PORT", PORT)

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/api/v1", router);

app.get("/", (req, res) => {
    res.send("BIENVID@ API")
})


app.listen(app.get("PORT"))
console.log("listen server", app.get("PORT"));
