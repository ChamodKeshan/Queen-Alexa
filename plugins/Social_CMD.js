
/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - RAMIYA-YT
*/
// උස්සන්න එපා 😕
// උස්සන්න එපා 😕
// උස්සන්න එපා 😕
// උස්සන්න එපා 😕
// උස්සන්න එපා 😕

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const axios = require('axios');

var ruq = { cd: 'Li4vY29uZmln', encrypt: 'Code Encrypted BY RAMIYA' }
var code = Buffer.from(ruq.cd, 'base64')
var file = code.toString('utf-8')
const Alexa = require(file);
const Language = require('../language');
const Lang = Language.getString('scrapers');
const ALang = Language.getString('amazone');
const capt = "\n\n🧛‍♂️ *ALEXA PINTEREST DOWNLOADER* 💜"
let typea = Alexa.WORKTYPE == 'public' ? false : true
let typeb = Alexa.WORKTYPE == 'public' ? true : false
const need = "🧛‍♂️ Type some word after command"
const sch = "🧛‍♂️ *Uploading 4 photos of* "
const DOWNMSG = "🧛‍♂️ *DOWNLOADING PINTEREST IMG...* 🤍"
// ${Alexa.L001}

//-------IMG-----------------------------------------------------------------	
Asena.addCommand({ pattern: 'pimg ?(.*)', fromMe: typea, desc: Lang.PIMG_DESC}, (async (message, match) => {
	// උස්සන්න එපා 😕
    const input = match[1]

    if (!input) return await message.sendMessage(need)

    await message.sendMessage(sch+input)
	
	var url = `${Alexa.BAPIS}pinterest?text=${input}&apikey=${Alexa.BAPIKEY}`
	
	// Loop 4 times
	for (let i = 0; i < 4; i++) { // for start
		
	await axios
  .get(`${url}`)
  .then(async (response) => {
    const {image,} = response.data

    const linkdata = await axios.get(image, {responseType: 'arraybuffer'})
	
    await message.sendMessage(Buffer.from(linkdata.data), MessageType.image, {mimetype: Mimetype.png})
      .catch(
        async (err) => await message.sendMessage("⛔️ *Command Error* \n *Try again Later*"),
      )
  })
	} // for end
})); // IMG close

//-------PINTEREST Downloader-----------------------------------------------------------------	
Asena.addCommand({ pattern: 'pindown ?(.*)', fromMe: typea, desc: ALang.PTDOWN}, (async (message, match) => {
// උස්සන්න එපා 😕
    const input = match[1]

    if (!input) return await message.sendMessage(need)

    await message.sendMessage(DOWNMSG)
	
	var url = `${Alexa.JAPIS}pinterest?url=${input}`
	
	await axios
  .get(`${url}`)
  .then(async (response) => {
    const {result,} = response.data

    const linkdata = await axios.get(result, {responseType: 'arraybuffer'})
	
    await message.sendMessage(Buffer.from(linkdata.data), MessageType.image, {mimetype: Mimetype.png, caption: Alexa.BOT_NAME + capt})
      .catch(
        async (err) => await message.sendMessage("⛔️ *IMG NOT FOUND*"),
      )
  })

})); // PINTEREST close

//-------IMG-----------------------------------------------------------------	
Asena.addCommand({ pattern: 'pimg ?(.*)', fromMe: typeb, dontAddCommandList: true}, (async (message, match) => {
	// උස්සන්න එපා 😕
    const input = match[1]

    if (!input) return await message.sendMessage(need)

    await message.sendMessage(sch+input)
	
	var url = `${Alexa.BAPIS}pinterest?text=${input}&apikey=${Alexa.BAPIKEY}`
	
	// Loop 4 times
	for (let i = 0; i < 4; i++) { // for start
		
	await axios
  .get(`${url}`)
  .then(async (response) => {
    const {image,} = response.data

    const linkdata = await axios.get(image, {responseType: 'arraybuffer'})
	
    await message.sendMessage(Buffer.from(linkdata.data), MessageType.image, {mimetype: Mimetype.png})
      .catch(
        async (err) => await message.sendMessage("⛔️ *Command Error* \n *Try again Later*"),
      )
  })
	} // for end
})); // IMG close

//-------PINTEREST Downloader-----------------------------------------------------------------	
Asena.addCommand({ pattern: 'pindown ?(.*)', fromMe: typeb, dontAddCommandList: true}, (async (message, match) => {
// උස්සන්න එපා 😕
    const input = match[1]

    if (!input) return await message.sendMessage(need)

    await message.sendMessage(DOWNMSG)
	
	var url = `${Alexa.JAPIS}pinterest?url=${input}`
	
	await axios
  .get(`${url}`)
  .then(async (response) => {
    const {result,} = response.data

    const linkdata = await axios.get(result, {responseType: 'arraybuffer'})
	
    await message.sendMessage(Buffer.from(linkdata.data), MessageType.image, {mimetype: Mimetype.png, caption: Alexa.BOT_NAME + capt})
      .catch(
        async (err) => await message.sendMessage("⛔️ *IMG NOT FOUND*"),
      )
  })

})); // PINTEREST close

// උස්සන්න එපා 😕
// උස්සන්න එපා 😕
// උස්සන්න එපා 😕
// උස්සන්න එපා 😕
// උස්සන්න එපා 😕
