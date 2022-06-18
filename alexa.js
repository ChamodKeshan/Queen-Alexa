/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('alexa.env')) require('dotenv').hatzu({ path: './alexa.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './Amazone.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'v7.3.6',
    ZRUN: "zenzapi",
    LANG: process.env.LANGUAGE === undefined ? 'EN' : process.env.LANGUAGE.toUpperCase(),
    BOT_NAME: process.env.BOT_NAME === undefined ? 'Amazone Alexa' : process.env.BOT_NAME,
    HNLOCK: 'hadi-api',
    ZLOCK: 'zeks',
    ZNLOCK: 'zenzapi.xyz',
    ALIVE1: process.env.ALIVE1 === undefined ?'alive' : process.env.ALIVE1,
    MENU1: process.env.MENU1 === undefined ?'menu' : process.env.MENU1,
    MENU3: process.env.MENU3 === undefined ?'xpanel' : process.env.MENU3,
    DEVELOPER: 'HATZU TEAM',
    AUTHOR: 'QUEEN ALEXA',
    GIT: 'https://github.com/ChamodKeshan/Queen-Alexa.git',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    ONE: "hunter",
    CCN: "Ikyy69",
    ON: "hunter",
    HLOCK: "hadi-api",
    ZTH: "d537895142",
    DATABASE: DATABASE_URL === './Amazone.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ?'rjVLfqfPmpytoDDqvGt7kRbx' : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    DEBUG: DEBUG,
    COFFEEHOUSE_API_KEY: process.env.COFFEEHOUSE_API_KEY === undefined ? false : process.env.COFFEEHOUSE_API_KEY,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
};
 
