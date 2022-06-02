/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/

const Neotro = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');
const got = require("got");
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('webss');

if (Config.WORKTYPE == 'private') {

    Neotro.addCommand({pattern: 'ss ?(.*)', fromMe: true, desc: Lang.SS_DESC}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.LİNK);

        var webimage = await axios.get(`https://shot.screenshotapi.net/screenshot?&full_page=true&url=${match[1]}&fresh=true&output=image&file_type=png&dark_mode=true&wait_for_event=load&delay=2000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTIONS})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Neotro.addCommand({pattern: 'ss ?(.*)', fromMe: false, desc: Lang.SS_DESC}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.LİNK);

        var webimage = await axios.get(`https://shot.screenshotapi.net/screenshot?&full_page=true&url=${match[1]}&fresh=true&output=image&file_type=png&dark_mode=true&wait_for_event=load&delay=2000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTIONS})

    }));
}
