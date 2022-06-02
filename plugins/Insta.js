/* Copyright (C) 2021 Alexa - RAMIYA
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Alexa - RAMIYA
FULL CODED BY RAMIYA © - KEEP CREDIT OR GET REPORTED


░█████╗░  ██╗░░░░░  ███████╗  ██╗░░██╗  ░█████╗░
██╔══██╗  ██║░░░░░  ██╔════╝  ╚██╗██╔╝  ██╔══██╗
███████║  ██║░░░░░  █████╗░░  ░╚███╔╝░  ███████║
██╔══██║  ██║░░░░░  ██╔══╝░░  ░██╔██╗░  ██╔══██║
██║░░██║  ███████╗  ███████╗  ██╔╝╚██╗  ██║░░██║
╚═╝░░╚═╝  ╚══════╝  ╚══════╝  ╚═╝░░╚═╝  ╚═╝░░╚═╝

*/

const Ramiya = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require('axios');
const Alexa = require('../config');
const Language = require('../language');
const Lang = Language.getString('amazone');
const ALang = Language.getString('scrapers');
let tp1 = Alexa.WORKTYPE == 'public' ? false : true
let tp2 = Alexa.WORKTYPE == 'public' ? true : false

/* 
░█▀▀█ ░█▀▀▀█ ░█▀▀▄ ░█▀▀▀ ░█▀▀▄ 　 ░█▀▀█ ░█──░█ 　 ░█▀▀█ ─█▀▀█ ░█▀▄▀█ ▀█▀ ░█──░█ ─█▀▀█ 
░█─── ░█──░█ ░█─░█ ░█▀▀▀ ░█─░█ 　 ░█▀▀▄ ░█▄▄▄█ 　 ░█▄▄▀ ░█▄▄█ ░█░█░█ ░█─ ░█▄▄▄█ ░█▄▄█ 
░█▄▄█ ░█▄▄▄█ ░█▄▄▀ ░█▄▄▄ ░█▄▄▀ 　 ░█▄▄█ ──░█── 　 ░█─░█ ░█─░█ ░█──░█ ▄█▄ ──░█── ░█─░█
*/

// -----------------------------------------------------------------------------------------------------------------------------
//  ---- ALEXA BOT ---- ALEXA BOT ---- ALEXA BOT ---- ALEXA BOT ---- ALEXA BOT ---- ALEXA BOT ---- ALEXA BOT ---- ALEXA BOT ----
// -----------------------------------------------------------------------------------------------------------------------------

// -------------------------------------I--N--S--T--A------P--H--O--T--O------------------------------------------------------------------------

Ramiya.addCommand({ pattern: 'igp ?(.*)', fromMe: tp1, desc: Lang.PINSTA}, async (message, match) => {

    const link = match[1]

    if (!link) return await message.sendMessage(" *Give Vaild Insta Link That Includes Photo* ")

    await message.sendMessage('👻 *Insta Downloader* 🕊 \n'+ALang.DOWNLOADING_VIDEO)
	
			var url = `${Alexa.SITE12}instagram?link=${link}`

				await axios
					.get(`${url}`)
					.then(async(response) => {
						const {link,} = response.data.result.result
						

						const linkdata = await axios.get(link, {responseType: 'arraybuffer'})

						await message.sendMessage(Buffer.from(linkdata.data), MessageType.image, {caption: Alexa.BOT_NAME,})
							.catch(
								async(err) => await message.sendMessage("⛔️ *INVALID LINK OR NO PHOTO FOUND*"),
							)
					})
					
}) /* pattern close*/

Ramiya.addCommand({ pattern: 'igp ?(.*)', fromMe: tp2, dontAddCommandList:true}, async (message, match) => {

    const link = match[1]

    if (!link) return await message.sendMessage(" *Give Vaild Insta Link That Includes Photo* ")

    await message.sendMessage('👻 *Insta Downloader* 🕊 \n'+ALang.DOWNLOADING_VIDEO)
	
			var url = `${Alexa.SITE12}instagram?link=${link}`

				await axios
					.get(`${url}`)
					.then(async(response) => {
						const {link,} = response.data.result.result
						

						const linkdata = await axios.get(link, {responseType: 'arraybuffer'})

						await message.sendMessage(Buffer.from(linkdata.data), MessageType.image, {caption: Alexa.BOT_NAME,})
							.catch(
								async(err) => await message.sendMessage("⛔️ *INVALID LINK OR NO PHOTO FOUND*"),
							)
					})
					
}) /* pattern close*/

// -------------------------------------I--N--S--T--A-----V--I--D--E--O------------------------------------------------------------------------

Ramiya.addCommand({ pattern: 'igv ?(.*)', fromMe: tp1, desc: Lang.VINSTA }, async (message, match) => {

    const link = match[1]

    if (!link) return await message.sendMessage(" *Give Vaild Insta Link That Includes Video* ")

    await message.sendMessage('👻 *Insta Downloader* 🕊 \n'+ALang.DOWNLOADING_VIDEO)

			var url = `${Alexa.SITE12}instagram?link=${link}`

				await axios
					.get(`${url}`)
					.then(async(response) => {
						const {link,} = response.data.result.result

						const linkdata = await axios.get(link, {responseType: 'arraybuffer'})

						await message.sendMessage(Buffer.from(linkdata.data), MessageType.video, {caption: Alexa.BOT_NAME,})
							.catch(
								async(err) => await message.sendMessage("⛔️ *INVALID LINK OR NO VIDEO FOUND*"),
							)
					})
					
}) /* pattern close*/

Ramiya.addCommand({ pattern: 'igv ?(.*)', fromMe: tp2, dontAddCommandList:true}, async (message, match) => {

    const link = match[1]

    if (!link) return await message.sendMessage(" *Give Vaild Insta Link That Includes Video* ")

    await message.sendMessage('👻 *Insta Downloader* 🕊 \n'+ALang.DOWNLOADING_VIDEO)

			var url = `${Alexa.SITE12}instagram?link=${link}`

				await axios
					.get(`${url}`)
					.then(async(response) => {
						const {link,} = response.data.result.result

						const linkdata = await axios.get(link, {responseType: 'arraybuffer'})

						await message.sendMessage(Buffer.from(linkdata.data), MessageType.video, {caption: Alexa.BOT_NAME,})
							.catch(
								async(err) => await message.sendMessage("⛔️ *INVALID LINK OR NO VIDEO FOUND*"),
							)
					})
					
}) /* pattern close*/

// -------------------------------------I--N--S--T--A-----S--T--A--L--K--E--R------------------------------------------------------------------------

/*
                               █▀▀ █▀█ █▀▄▀█ █ █▄░█ █▀▀   █▀ █▀█ █▀█ █▄░█
                               █▄▄ █▄█ █░▀░█ █ █░▀█ █▄█   ▄█ █▄█ █▄█ █░▀█
*/
// -----------------------------------------------------------------------------------------------------------------------------
//  ---- ALEXA BOT ---- ALEXA BOT ---- ALEXA BOT ---- ALEXA BOT ---- ALEXA BOT ---- ALEXA BOT ---- ALEXA BOT ---- ALEXA BOT ----
// -----------------------------------------------------------------------------------------------------------------------------
