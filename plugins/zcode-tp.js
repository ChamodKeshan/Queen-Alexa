/*
const Neotro = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const config = require('../hatzu');
const Language = require('../language');
const Lang = Language.getString('amazone');
let tn = Config.WORKTYPE == 'public' ? false : true
const NEED_WORD = '🍭Type Word'


   Neotro.addCommand({ pattern: '1ttp ?(.*)', fromMe: tn, dontAddCommandList:true}, (async (message, match) => {
if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD, MessageType.text);
var XX = match[1]
var teenumg = await axios.get(`${config.LOCKH}${config.LOCKB}-${config.LOCKHU}.herokuapp.com/api/flamingtext/blackbird?text=${encodeURIComponent(match[1])}&apikey=${config.LOCKA}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(teenumg.data), MessageType.image, { mimetype: Mimetype.png })

    }));

Neotro.addCommand({ pattern: '2ttp ?(.*)', fromMe: tn, dontAddCommandList:true}, (async (message, match) => {
if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD, MessageType.text);
var XX = match[1]
var teenumg = await axios.get(`${config.LOCKH}${config.LOCKB}-${config.LOCKHU}.herokuapp.com/api/flamingtext/alien?text=${encodeURIComponent(match[1])}&apikey=${config.LOCKA}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(teenumg.data), MessageType.image, { mimetype: Mimetype.png })

    }));

Neotro.addCommand({ pattern: '3ttp ?(.*)', fromMe: tn, dontAddCommandList:true}, (async (message, match) => {
if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD, MessageType.text);
var XX = match[1]
var teenumg = await axios.get(`${config.LOCKH}${config.LOCKB}-${config.LOCKHU}.herokuapp.com/api/flamingtext/wroom?text=${encodeURIComponent(match[1])}&apikey=${config.LOCKA}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(teenumg.data), MessageType.image, { mimetype: Mimetype.png })

    }));

Neotro.addCommand({ pattern: '4ttp ?(.*)', fromMe: tn, dontAddCommandList:true}, (async (message, match) => {
if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD, MessageType.text);
var XX = match[1]
var teenumg = await axios.get(`${config.LOCKH}${config.LOCKB}-${config.LOCKHU}.herokuapp.com/api/flamingtext/.cereal?text=${encodeURIComponent(match[1])}&apikey=${config.LOCKA}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(teenumg.data), MessageType.image, { mimetype: Mimetype.png })

    }));

Neotro.addCommand({ pattern: '5ttp ?(.*)', fromMe: tn, dontAddCommandList:true}, (async (message, match) => {
if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD, MessageType.text);
var XX = match[1]
var teenumg = await axios.get(`${config.LOCKH}${config.LOCKB}-${config.LOCKHU}.herokuapp.com/api/flamingtext/.sound?text=${encodeURIComponent(match[1])}&apikey=${config.LOCKA}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(teenumg.data), MessageType.image, { mimetype: Mimetype.png })

    }));
Neotro.addCommand({ pattern: '6ttp ?(.*)', fromMe: tn, dontAddCommandList:true}, (async (message, match) => {
if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD, MessageType.text);
var XX = match[1]
var teenumg = await axios.get(`${config.LOCKH}${config.LOCKB}-${config.LOCKHU}.herokuapp.com/api/flamingtext/.star?text=${encodeURIComponent(match[1])}&apikey=${config.LOCKA}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(teenumg.data), MessageType.image, { mimetype: Mimetype.png })

    }));

Neotro.addCommand({ pattern: '7ttp ?(.*)', fromMe: tn, dontAddCommandList:true}, (async (message, match) => {
if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD, MessageType.text);
var XX = match[1]
var teenumg = await axios.get(`${config.LOCKH}${config.LOCKB}-${config.LOCKHU}.herokuapp.com/api/flamingtext/.zilch?text=${encodeURIComponent(match[1])}&apikey=${config.LOCKA}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(teenumg.data), MessageType.image, { mimetype: Mimetype.png })

    }));

Neotro.addCommand({ pattern: '8ttp ?(.*)', fromMe: tn, dontAddCommandList:true}, (async (message, match) => {
if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD, MessageType.text);
var XX = match[1]
var teenumg = await axios.get(`${config.LOCKH}${config.LOCKB}-${config.LOCKHU}.herokuapp.com/api/flamingtext/.casino?text=${encodeURIComponent(match[1])}&apikey=${config.LOCKA}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(teenumg.data), MessageType.image, { mimetype: Mimetype.png })

    }));

Neotro.addCommand({ pattern: '9ttp ?(.*)', fromMe: tn, dontAddCommandList:true}, (async (message, match) => {
if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD, MessageType.text);
var XX = match[1]
var teenumg = await axios.get(`${config.LOCKH}${config.LOCKB}-${config.LOCKHU}.herokuapp.com/api/flamingtext/.army?text=${encodeURIComponent(match[1])}&apikey=${config.LOCKA}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(teenumg.data), MessageType.image, { mimetype: Mimetype.png })

    }));

Neotro.addCommand({ pattern: '01ttp ?(.*)', fromMe: tn, dontAddCommandList:true}, (async (message, match) => {
if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD, MessageType.text);
var XX = match[1]
var teenumg = await axios.get(`${config.LOCKH}${config.LOCKB}-${config.LOCKHU}.herokuapp.com/api/flamingtext/.fun?text=${encodeURIComponent(match[1])}&apikey=${config.LOCKA}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(teenumg.data), MessageType.image, { mimetype: Mimetype.png })

    }));

Neotro.addCommand({ pattern: '02ttp ?(.*)', fromMe: tn, dontAddCommandList:true}, (async (message, match) => {
if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD, MessageType.text);
var XX = match[1]
var teenumg = await axios.get(`${config.LOCKH}${config.LOCKB}-${config.LOCKHU}.herokuapp.com/api/flamingtext/.neon?text=${encodeURIComponent(match[1])}&apikey=${config.LOCKA}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(teenumg.data), MessageType.image, { mimetype: Mimetype.png })

    }));

Neotro.addCommand({ pattern: '03ttp ?(.*)', fromMe: tn, dontAddCommandList:true}, (async (message, match) => {
if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD, MessageType.text);
var XX = match[1]
var teenumg = await axios.get(`${config.LOCKH}${config.LOCKB}-${config.LOCKHU}.herokuapp.com/api/flamingtext/.trance?text=${encodeURIComponent(match[1])}&apikey=${config.LOCKA}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(teenumg.data), MessageType.image, { mimetype: Mimetype.png })

    }));

Neotro.addCommand({ pattern: '04ttp ?(.*)', fromMe: tn, dontAddCommandList:true}, (async (message, match) => {
if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD, MessageType.text);
var XX = match[1]
var teenumg = await axios.get(`${config.LOCKH}${config.LOCKB}-${config.LOCKHU}.herokuapp.com/api/flamingtext/.glow?text=${encodeURIComponent(match[1])}&apikey=${config.LOCKA}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(teenumg.data), MessageType.image, { mimetype: Mimetype.png })

    }));
Neotro.addCommand({ pattern: '05ttp ?(.*)', fromMe: tn, dontAddCommandList:true}, (async (message, match) => {
if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD, MessageType.text);
var XX = match[1]
var teenumg = await axios.get(`${config.LOCKH}${config.LOCKB}-${config.LOCKHU}.herokuapp.com/api/flamingtext/.prime?text=${encodeURIComponent(match[1])}&apikey=${config.LOCKA}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(teenumg.data), MessageType.image, { mimetype: Mimetype.png })

    }));
*/
