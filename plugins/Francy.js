const Neotro = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('amazone');
let tk = Config.WORKTYPE == 'public' ? false : true

Neotro.addCommand({ pattern: 'ftext ?(.*)', desc: Lang.FRANCY, fromMe: tk }, async (message, match) => {

const word = match[1]
if (!word) return await message.sendMessage(" *Please Input Word* ")

await message.sendMessage('👻 *Text Converting* 🕊')

await axios
      .get(`https:///api/fancytext?text=${word}&apikey=`)
      .then(async (response) => {
        const {
         result,
	status,	
        } = response.data

   
	const msg = `**◁◉◉◉◉Fancy Text◉◉◉▷* \n             *👩‍🦰ᴀᴍᴀᴢᴏɴᴇ ᴀʟᴇxᴀ* * \n              \n\n ${result} \n\n                 *◄◉◉◉◉◉◉◉◉◉◉ᴀʟᴇxᴀ◉◉◉◉◉◉◉◉►*`
	
	 await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })
	})    

})
 
	
	Neotro.addCommand({ pattern: 'ftext ?(.*)', dontAddCommandList: true, fromMe: true }, async (message, match) => {

const word = match[1]
if (!word) return await message.sendMessage(" *Please Input Word* ")

await message.sendMessage('👻 *Text Converting* 🕊')

await axios
      .get(`https://.herokuapp.com/api/fancytext?text=${word}&apikey=`)
      .then(async (response) => {
        const {
         result,
	status,	
        } = response.data

   
	const msg = `*◁◉◉◉◉Fancy Text◉◉◉▷* \n             *👩‍🦰ᴀᴍᴀᴢᴏɴᴇ ᴀʟᴇxᴀ* \n\n ${result} \n\n                \n*◄◉◉◉◉◉◉◉◉◉◉ᴀʟᴇxᴀ◉◉◉◉◉◉◉◉►*`
	
	 await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })
	})    

})
 
