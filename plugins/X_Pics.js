/* Copyright (C) 2021 RAMIYA - ALEXA
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
RAMIYA - ALEXA Team
*/
// 😡 අදත් ආවද Code එක උස්සන්න තිරිසනො  😖

// ලොකු මහන්සියකින් හදපු Code එකක් මේක, උස්සන්න එපා

// Don't Steal this Code. I worked so hard to make this.

/* 


░█████╗░░█████╗░██████╗░███████╗██████╗░  ██████╗░██╗░░░██╗  ██████╗░░█████╗░███╗░░░███╗██╗██╗░░░██╗░█████╗░
██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔══██╗  ██╔══██╗╚██╗░██╔╝  ██╔══██╗██╔══██╗████╗░████║██║╚██╗░██╔╝██╔══██╗
██║░░╚═╝██║░░██║██║░░██║█████╗░░██║░░██║  ██████╦╝░╚████╔╝░  ██████╔╝███████║██╔████╔██║██║░╚████╔╝░███████║
██║░░██╗██║░░██║██║░░██║██╔══╝░░██║░░██║  ██╔══██╗░░╚██╔╝░░  ██╔══██╗██╔══██║██║╚██╔╝██║██║░░╚██╔╝░░██╔══██║
╚█████╔╝╚█████╔╝██████╔╝███████╗██████╔╝  ██████╦╝░░░██║░░░  ██║░░██║██║░░██║██║░╚═╝░██║██║░░░██║░░░██║░░██║
░╚════╝░░╚════╝░╚═════╝░╚══════╝╚═════╝░  ╚═════╝░░░░╚═╝░░░  ╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░░░░╚═╝╚═╝░░░╚═╝░░░╚═╝░░╚═╝
 */

// -----------------------------------------------------------------------------------------------------------------------------
//  ---- ALEXA BOT ---- ALEXA BOT ---- ALEXA BOT ---- ALEXA BOT ---- ALEXA BOT ---- ALEXA BOT ---- ALEXA BOT ---- ALEXA BOT ----
// -----------------------------------------------------------------------------------------------------------------------------

const Azure = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "Type some word after command"
let tp1 = Config.WORKTYPE == 'public' ? false : true
let tp2 = Config.WORKTYPE == 'public' ? true : false
var ruq = { cd: 'Li4vY29uZmln', encrypt: 'Code Encrypted BY RAMIYA' }  
var code = Buffer.from(ruq.cd, 'base64')
var file = code.toString('utf-8')
const xAzure = require(file);

//==================================================M=E=N=U==================================================================
var menulist = `🔞 *18+ Picture Commands*
• Random Pictures Given
• Thousand of Pictures Available

*.xneko*
*.xass*
*.xbdsm*
*.xblowjob*
*.xcum*
*.xfeet*
*.xfemdom*
*.xfoxgirl*
*.xglasses*
*.xhentai*
*.xntr*
*.xmaid*
*.xgirlmb*
*.xorgy*
*.xpanties*
*.xpussy*
*.xschool*
*.xsdemon*
*.xoctopus*
*.xthighs*
*.xbastard*
*.xuniform*
*.xyuri*

« _CREATED BY RAMIYA_ »

══════════════════
       *Copyright © ALEXA*
     POWERED BY RAMIYA
══════════════════`
if (Config.ADULT_MODE == 'on') {
	
Azure.addCommand({pattern: 'xpics', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

    await message.client.sendMessage(message.jid, menulist , MessageType.text)

}));

Azure.addCommand({pattern: 'xpics', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

    await message.client.sendMessage(message.jid, menulist , MessageType.text)

}));
//=============================================P=U=B=L=I=C==M=O=D=E==========================================================
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xneko', fromMe: tp1,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}neko`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xass', fromMe: tp1,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}ass`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xbdsm', fromMe: tp1,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}bdsm`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xblowjob', fromMe: tp1,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}blowjob`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xcum', fromMe: tp1,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}cum`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xfeet', fromMe: tp1,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}feet`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xfemdom', fromMe: tp1,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}femdom`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xfoxgirl', fromMe: tp1,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}foxgirl`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xglasses', fromMe: tp1,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}glasses`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xhentai', fromMe: tp1,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}hentai`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xntr', fromMe: tp1,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}netorare`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xmaid', fromMe: tp1,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}maid`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xgirlmb', fromMe: tp1,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}masturbation`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xorgy', fromMe: tp1,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}orgy`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xpanties', fromMe: tp1,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}panties`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xpussy', fromMe: tp1,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}pussy`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xschool', fromMe: tp1,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}school`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xsdemon', fromMe: tp1,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}succubus`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xoctopus', fromMe: tp1,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}tentacles`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xthighs', fromMe: tp1,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}thighs`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xbastard', fromMe: tp1,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}uglyBastard`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xuniform', fromMe: tp1,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}uniform`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xyuri', fromMe: tp1,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}yuri`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------


//=============================================P=R=I=V=A=T=E==M=O=D=E========================================================

Azure.addCommand({ pattern: 'xneko', fromMe: tp2,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}neko`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xass', fromMe: tp2,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}ass`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xbdsm', fromMe: tp2,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}bdsm`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xblowjob', fromMe: tp2,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}blowjob`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xcum', fromMe: tp2,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}cum`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xfeet', fromMe: tp2,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}feet`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xfemdom', fromMe: tp2,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}femdom`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xfoxgirl', fromMe: tp2,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}foxgirl`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xglasses', fromMe: tp2,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}glasses`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xhentai', fromMe: tp2,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}hentai`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xntr', fromMe: tp2,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}netorare`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xmaid', fromMe: tp2,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}maid`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xgirlmb', fromMe: tp2,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}masturbation`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xorgy', fromMe: tp2,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}orgy`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xpanties', fromMe: tp2,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}panties`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xpussy', fromMe: tp2,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}pussy`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xschool', fromMe: tp2,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}school`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xsdemon', fromMe: tp2,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}succubus`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xoctopus', fromMe: tp2,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}tentacles`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xthighs', fromMe: tp2,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}thighs`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xbastard', fromMe: tp2,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}uglyBastard`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xuniform', fromMe: tp2,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}uniform`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------
Azure.addCommand({ pattern: 'xyuri', fromMe: tp2,dontAddCommandList: true }, (async (message, match) => {
		var url = `${xAzure.SITE14}yuri`
        var ttinullimage = await axios.get(`${url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//---------------------------------------------------------------------------------------------------------------------------

} //adult mode close
