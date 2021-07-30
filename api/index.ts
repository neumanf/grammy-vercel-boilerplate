require("../src/index");

import bot from "../src/core/bot";

import express from "express";
import { webhookCallback } from "grammy";

const app = express();

app.use(express.json());
app.use(`/api/${process.env.SECRET_PATH}`, webhookCallback(bot, "express"));

export default app;
