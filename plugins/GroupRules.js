/* Copyright (C) 2021 RAMIYA-ALEXA TEAM.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
ALEXA TEAM - RAMIYA
*/

const Neotro = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const sql = require('./sql/greetings');
const Language = require('../language');
const Lang = Language.getString('greetings');
const hd = "*◄ ●●● Group Rules ●●●►* \n\n"
const pw = "◄●👩‍🦰 *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʟᴇxᴀ* ●►"

Neotro.addCommand({pattern: 'rules', fromMe: true, desc: Lang.RULE_DESC}, (async (message, match) => {
    var rg = await sql.getMessage(message.jid, 'rule');
    if (rg === false) {
        await message.client.sendMessage(message.jid,Lang.NOT_SET_RULE,MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,hd + rg.message + '\n\n' + pw,MessageType.text);
    }
}));

Neotro.addCommand({pattern: 'setrules (.*)', fromMe: true, desc: Lang.SETRULE_DESC}, (async (message, match) => {
    if (match[1] === '') {
        return await message.client.sendMessage(message.jid,Lang.NEED_RULE_TEXT,MessageType.text);
    } else {
        if (match[1] === 'delete') { await message.client.sendMessage(message.jid,Lang.RULE_DELETED,MessageType.text); return await sql.deleteMessage(message.jid, 'rule'); }
        await sql.setMessage(message.jid, 'rule', match[1].replace(/#/g, '\n'));
        return await message.client.sendMessage(message.jid,Lang.RULE_SETTED,MessageType.text)
    }
}));

Neotro.addCommand({pattern: 'rules', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    var rg = await sql.getMessage(message.jid, 'rule');
    if (rg === false) {
        await message.client.sendMessage(message.jid,Lang.NOT_SET_RULE,MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,hd + rg.message + '\n\n' + pw,MessageType.text);
    }
}));

Neotro.addCommand({pattern: 'setrules (.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
	await message.sendMessage("Only Admins can Set Rules in this Group.")
}));
