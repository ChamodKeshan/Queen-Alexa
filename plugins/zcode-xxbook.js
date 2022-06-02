/* උස්සන්න එපා බේසිකෙ කොල්ලො අහලා ගනිම්
Codded BY teenuX
Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
Wa.me/+94766598862
*/

const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Language = require('../language');
const XN_DESC = "NSFU වීඩියෝ බාගත කරයි"
const XN_NEED = "*Link අවශ්‍යයි!*"
const XN_D = "*🙇Downloading Your PDF wait Little Bit⏱*"
const XN_UP = "*TITLE:* *🔞නදී - සම්පූර්ණ කතාව*\n*📂TYPE:* *Pdf*\n*Uploading..📵*"
const XXN_UP = "*TITLE:* *🔞සමන්ති - සම්පූර්ණ කතාව*\n*📂TYPE:* *Pdf*\n*Uploading..📵*"
const XXXN_UP = "*TITLE:* *🔞කින්නරාවි - සම්පූර්ණ කතාව*\n*📂TYPE:* *Pdf*\n*Uploading..📵*"
const XXXXN_UP = "*TITLE:* *🔞December Holiday - සම්පූර්ණ කතාව*\n*📂TYPE:* *Pdf*\n*Uploading..📵*"
const XXXXXN_UP = "*TITLE:* *🔞Xmas - සම්පූර්ණ කතාව*\n*📂TYPE:* *Pdf*\n*Uploading..📵*"
const XXXXXXN_UP = "*TITLE:* *🔞යදම් - සම්පූර්ණ කතාව*\n*📂TYPE:* *Pdf*\n*Uploading..📵*"
const XXXXXXXN_UP = "*TITLE:* *🔞පට්ටන්දර - සම්පූර්ණ කතාව*\n*📂TYPE:* *Pdf*\n*Uploading..📵*"
const EFFECT_DESC = "Text effective රූප බවට පරිවර්තනය කිරීම සඳහා විධාන කට්ටලයක්."
const NEED_WORD = "*ඔබ Ebook URL එකක් ඇතුළත් කළ යුතුය*"
let tn = Config.WORKTYPE == 'public' ? false : true
let ad = Config.WORKTYPE == 'public' ? true : true   

if (Config.ADULT_MODE == 'on') {

Asena.addCommand({pattern: '1xst ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://drive.google.com/file/d/1OXf9HC06_wf_-JPeb_8KP7SywGNv4gHo/view`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Asena.addCommand({pattern: '2xst ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://drive.google.com/file/d/135yyPWBxqOqhcwW4jpUo1iggp6qyAl3W/view`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XXN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Asena.addCommand({pattern: '3xst ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://drive.google.com/file/d/1ODuCrUMQy-_m2kWxVYIWYJVT-M0T50xy/view`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XXXN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Asena.addCommand({pattern: '4xst ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://drive.google.com/file/d/1kpJw7haKQ1FM5XfpqOCpQmifLlElmDk8/view`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XXXXN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Asena.addCommand({pattern: '5xst ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://drive.google.com/file/d/17L7C5tI_HNSbhv8ETT6RFJnfENctWRdo/view`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XXXXXN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Asena.addCommand({pattern: '6xst ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://drive.google.com/file/d/1XVyE62KxR8T8jLR8f3SgHma8Pok8qE2_/view`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XXXXXXN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Asena.addCommand({pattern: '7xst ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(``, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XXXXXXXN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
}
