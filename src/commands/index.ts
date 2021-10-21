import { Composer } from "grammy";

import hello from "./hello";

const composer = new Composer();

composer.command("hello", hello);

export default composer;
