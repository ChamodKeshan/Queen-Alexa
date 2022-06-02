/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/

const Asena = require('../events');
const Heroku = require('heroku-client');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const fs = require('fs');
const Db = require('./sql/plugin');

const Language = require('../language');
const Lang = Language.getString('_plugin');
const NLang = Language.getString('updater');
const ALang = Language.getString('amazone');

let msg = Config.LANG == 'SI' || Config.LANG == 'AZ' ? '*Neotro වෙතින් අනුමත කරන ලද ප්ලගීනයකි.* ✅' : '*Officialy Approved* ✅'
let inmsg = Config.LANG == 'SI' || Config.LANG == 'AZ' ? '*අනුමත නොකරන ලද ප්ලගීනයකි!* ❌' : '*Not Approved* ❌'

const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});


let baseURI = '/apps/' + Config.HEROKU.APP_NAME;

Asena.addCommand({pattern: 'pkg ?(.*)', fromMe: true, desc: ALang.PKG, warn: Lang.WARN}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(Lang.NEED_URL + '.pkg https://paste-bin.xyz/paste.php?raw&id=2416&password')
    try {
        var url = new URL(match[1]);
    } catch {
        return await message.sendMessage(Lang.INVALID_URL);
    }

    if (url.host === 'paste-bin.xyz') {
        url.host = 'paste-bin.xyz/paste.php?';
        url = url.toString() + Config.PKGPS
    } else {
        url = url.toString()
    }

    var response = await got(url);
    if (response.statusCode == 200) {
        
        var plugin_name = response.body.match(/addCommand\({.*pattern: ["'](.*)["'].*}/);
        if (plugin_name.length >= 1) {
            plugin_name = "__" + plugin_name[1];
        } else {
            plugin_name = "__" + Math.random().toString(36).substring(8);
        }

        fs.writeFileSync('./plugins/' + plugin_name + '.js', response.body);
        try {
            require('./' + plugin_name);
        } catch (e) {
            fs.unlinkSync('/root/amazonex/plugins/' + plugin_name + '.js')
            return await message.sendMessage(Lang.INVALID_PLUGIN + ' ```' + e + '```');
        }

        await Db.installPlugin(url, plugin_name);
        await message.client.sendMessage(message.jid, Lang.INSTALLED, MessageType.text);
        if (!match[1].includes('paste-bin.xyz')) {
            await new Promise(r => setTimeout(r, 400));
            await message.client.sendMessage(message.jid, Lang.UNOFF, MessageType.text);
        }
    }
}));

Asena.addCommand({pattern: 'plugs', fromMe: true, desc: ALang.PLUG }, (async (message, match) => {
    var mesaj = Lang.INSTALLED_FROM_REMOTE;
    var plugins = await Db.PluginDB.findAll();
    if (plugins.length < 1) {
        return await message.sendMessage(Lang.NO_PLUGIN);
    } else {
        plugins.map(
            (plugin) => {
                let vf = plugin.dataValues.url.includes('Neotro23') ? msg : inmsg
                mesaj += '```' + plugin.dataValues.name + '```: ' + '👩‍🦰 \n' + vf + '\n\n';
            }
        );
        return await message.client.sendMessage(message.jid, mesaj, MessageType.text);
    }
}));

Asena.addCommand({pattern: 'rpkg(?: |$)(.*)', fromMe: true, desc: ALang.REMOVE}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(Lang.NEED_PLUGIN);
    if (!match[1].startsWith('__')) match[1] = '__' + match[1];
    var plugin = await Db.PluginDB.findAll({ where: {name: match[1]} });
    if (plugin.length < 1) {
        return await message.sendMessage(message.jid, Lang.NOT_FOUND_PLUGIN, MessageType.text);
    } else {
        await plugin[0].destroy();
        delete require.cache[require.resolve('./' + match[1] + '.js')]
        fs.unlinkSync('./plugins/' + match[1] + '.js');
        await message.client.sendMessage(message.jid, Lang.DELETED, MessageType.text);

        await new Promise(r => setTimeout(r, 1000));

        await message.sendMessage(NLang.AFTER_UPDATE);

        console.log(baseURI);
        await heroku.delete(baseURI + '/dynos').catch(async (error) => {
            await message.sendMessage(error.message);

        });
    }

}));
