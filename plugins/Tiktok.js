/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - RAMIYA-YT
*/

const Asena = require('../events');
const {MessageType,mimetype,Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Alexa = require('../config');
const Language = require('../language');
const Lang = Language.getString('scrapers');
const ALang = Language.getString('amazone');
let typea = Alexa.WORKTYPE == 'public' ? false : true
let typeb = Alexa.WORKTYPE == 'public' ? true : false
const capt = "🦹‍♀️ *ALEXA Tiktok Downloader* 🕊\n"

 // ===============================================================================================================
 
  Asena.addCommand({ pattern: 'tiktok ?(.*)', fromMe: typea, dontaddCommandList:false, desc: ALang.TIKTOK}, async (message, match) => {

    const link = match[1]

    if (!link) return await message.sendMessage(" *Give Vaild Tiktok Link* ")

    await message.sendMessage('👻 *Tiktok Video Downloader* 🕊 \n'+Lang.DOWNLOADING_VIDEO)

		var url = `${Alexa.RSITE}tiktok?url=${link}`
// උස්සන්න එපා
				await axios
					.get(`${url}`)
					.then(async(response) => {
						const {
							nowm
						} = response.data.result

						const linkdata = await axios.get(nowm, {
							responseType: 'arraybuffer'
						})

						await message.sendMessage(Buffer.from(linkdata.data), MessageType.video, {
								caption: capt,
						})
							.catch(
								async(err) => await message.sendMessage("⛔️ *INVALID TIKTOK LINK*"),
							)
					})
					
}) //pattern close
 
 // ===============================================================================================================
 
 Asena.addCommand({ pattern: 'tiktok ?(.*)', fromMe: typeb, dontaddCommandList:true}, async (message, match) => {

    const link = match[1]

    if (!link) return await message.sendMessage(" *Give Vaild Tiktok Link* ")

    await message.sendMessage('👻 *Tiktok Video Downloader* 🕊 \n'+Lang.DOWNLOADING_VIDEO)
// උස්සන්න එපා
		var url = `${Alexa.RSITE}tiktok?url=${link}`

				await axios
					.get(`${url}`)
					.then(async(response) => {
						const {
							nowm
						} = response.data.result

						const linkdata = await axios.get(nowm, {
							responseType: 'arraybuffer'
						})

						await message.sendMessage(Buffer.from(linkdata.data), MessageType.video, {
								caption: capt,
						})
							.catch(
								async(err) => await message.sendMessage("⛔️ *INVALID TIKTOK LINK*"),
							)
					})
					
}) //pattern close
