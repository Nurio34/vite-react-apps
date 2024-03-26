import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/openai", (req, res) => {
    res.status(200).json({ msg: "Hey" });
});
app.listen(port, () => {
    console.log(`Server runs at ${port}`);
});
