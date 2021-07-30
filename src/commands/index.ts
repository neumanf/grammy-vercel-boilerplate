import { Bot, Context } from "grammy";

import hello from "./hello";

const commands = (bot: Bot<Context>): void => {
    bot.command("hello", hello);
};

export default commands;
