import * as env from "dotenv"
env.config()


export const server = {
    port: process.env.PORT,
};