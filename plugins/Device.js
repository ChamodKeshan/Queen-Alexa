/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/

const Neotro = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require ('axios')
const LOAD_ING = "*👩‍🦰Searching details*"
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('amazone');
let tn = Config.WORKTYPE == 'public' ? false : true

Neotro.addCommand({pattern: 'device ?(.*)', fromMe: tn, desc: Lang.DEVICE , dontAddCommandList: false}, async (message, match) => {
    
const {data} = await axios(`https://zenzapi.xyz/api/gsmarena?query=${match[1]}&apikey=a9a05974d30e`)
const { status, result } = data
if(!status) return await message.sendMessage('not found')
await message.client.sendMessage(message.jid, LOAD_ING , MessageType.text, { quoted: message.data });
let msg = '```'
msg +=  `NAME          :${result.judul}\n\n`
msg +=  `DATE          :${result.rilis}\n\n`
msg +=  `WEIGHT        :${result.ukuran}\n\n`
msg +=  `VERSION       :${result.type}\n\n`
msg +=  `ROM           :${result.storage}\n\n`
msg +=  `DISPLAY       :${result.display}\n\n`
msg +=  `RAM           :${result.ram}\n\n`
msg += `BATTERY        :${result.batrai}\n\n`
msg += `CPU            :${result.chipset}\n\n`
msg += `INCH           :${result.inchi}\n\n`
msg += `VIDEO MP       :${result.videoPixel}\n\n`
msg += `PIC            :${result.thumb}\n\n`
msg += `BATTERY BRAND  :${result.pixel}\n\n`
msg += '```'
 return await message.client.sendMessage(message.jid, msg, MessageType.text, { quoted: message.data });
});

    Neotro.addCommand({pattern: 'device ?(.*)', fromMe: true, dontAddCommandList: true, dontAddCommandList: false}, async (message, match) => {
    
        const {data} = await axios(`https://zenzapi.xyz/api/gsmarena?query=${match[1]}&apikey=a9a05974d30e`)
        const { status, result } = data
        if(!status) return await message.sendMessage('not found')
        await message.client.sendMessage(message.jid, LOAD_ING , MessageType.text, { quoted: message.data });
        let msg = '```'
        msg +=  `NAME          :${result.judul}\n\n`
        msg +=  `DATE          :${result.rilis}\n\n`
        msg +=  `WEIGHT        :${result.ukuran}\n\n`
        msg +=  `VERSION       :${result.type}\n\n`
        msg +=  `ROM           :${result.storage}\n\n`
        msg +=  `DISPLAY       :${result.display}\n\n`
        msg +=  `RAM           :${result.ram}\n\n`
        msg += `BATTERY        :${result.batrai}\n\n`
        msg += `CPU            :${result.chipset}\n\n`
        msg += `INCH           :${result.inchi}\n\n`
        msg += `VIDEO MP       :${result.videoPixel}\n\n`
        msg += `PIC            :${result.thumb}\n\n`
        msg += `BATTERY BRAND  :${result.pixel}\n\n`
        msg += '```'
         return await message.client.sendMessage(message.jid, msg, MessageType.text, { quoted: message.data });
        });
    
