/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX උස්සන්න හදන්න එපා 😂 API search කරලා රෙපො එකටම උක්කවනවා 😂 වේසා පක්කු
🛡️QUEEN ALEXA - අව්ලක් නෑ🛡️ 😌 අනිත් එක පකෙක්වත් උස්සන්න හදන්න එපා

©️TEENUH-X
*/


const Neotro = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const hatzu = require('../hatzu');
const config = require('../Config/config');
const NEED = "*🍭YOU MUST TYPE SOME WORDS*"
const desc = "Text to image Pack";
let tn = Config.WORKTYPE == 'public' ? false : true

Neotro.addCommand({ pattern: '3dwater ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${config.HTTPS}${config.HLOCK}${config.SUP_HEROKU}${config.ENCRYPTION}${config.TOXIC_T}3d-underwater-text?teks=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));

Neotro.addCommand({ pattern: 'lcube ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${config.HTTPS}${config.HLOCK}${config.SUP_HEROKU}${config.ENCRYPTION}${config.TOXIC_T}futuristic-technology?teks=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
Neotro.addCommand({ pattern: 'blogo ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${config.HTTPS}${config.HLOCK}${config.SUP_HEROKU}${config.ENCRYPTION}${config.TOXIC_T}black-white-bear-mascot?teks=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
Neotro.addCommand({ pattern: 'dwings ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${config.HTTPS}${config.HLOCK}${config.SUP_HEROKU}${config.ENCRYPTION}${config.TOXIC_T}neon-devil-wings?teks=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//=====================================================================================
//====================================================================================

Neotro.addCommand({ pattern: 'water3d ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${config.HTTPS}${config.HK}${config.SUP_HEROKU}api/${config.TOXIC_E}water3d?text=${encodeURIComponent(match[1])}&apikey=${config.DECODE}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));

Neotro.addCommand({ pattern: 'starmetalic ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${config.HTTPS}${config.HK}${config.SUP_HEROKU}api/${config.TOXIC_E}starmetalic?text=${encodeURIComponent(match[1])}&apikey=${config.DECODE}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));

Neotro.addCommand({ pattern: 'moon ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${config.HTTPS}${config.HK}${config.SUP_HEROKU}api/${config.TOXIC_E}moon?text=${encodeURIComponent(match[1])}&apikey=${config.DECODE}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));

Neotro.addCommand({ pattern: 'halloween ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${config.HTTPS}${config.HK}${config.SUP_HEROKU}api/${config.TOXIC_E}halloween?text=${encodeURIComponent(match[1])}&apikey=${config.DECODE}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));

Neotro.addCommand({ pattern: 'galaxystyle ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${config.HTTPS}${config.HK}${config.SUP_HEROKU}api/${config.TOXIC_E}galaxystyle?text=${encodeURIComponent(match[1])}&apikey=${config.DECODE}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));

Neotro.addCommand({ pattern: 'underwater ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${config.HTTPS}${config.HK}${config.SUP_HEROKU}api/${config.TOXIC_E}underwater?text=${encodeURIComponent(match[1])}&apikey=${config.DECODE}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));

Neotro.addCommand({ pattern: 'loveshadow ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${config.HTTPS}${config.HK}${config.SUP_HEROKU}api/${config.TOXIC_E}loveshadow?text=${encodeURIComponent(match[1])}&apikey=${config.DECODE}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));

Neotro.addCommand({ pattern: 'galaxyangel ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${config.HTTPS}${config.HK}${config.SUP_HEROKU}api/${config.TOXIC_E}galaxyangel?text=${encodeURIComponent(match[1])}&apikey=${config.DECODE}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));

Neotro.addCommand({ pattern: 'prologo ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${config.HTTPS}${config.SCRAPE}${config.SUP_HEROKU}${config.QR}name=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//=====================================================================================
//=====================================================================================
