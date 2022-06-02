/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/

const simpleGit = require('simple-git');
const git = simpleGit();
const amazone = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const Config = require('../config');
const exec = require('child_process').exec;
const Heroku = require('heroku-client');
const { PassThrough } = require('stream');
const heroku = new Heroku({ token: Config.HEROKU.API_KEY })
const axios = require('axios');
const Language = require('../language');
const Lang = Language.getString('updater');

//උස්සන උන්ගෙ රෙපෝ කෙලවිලාම පලයම්
var logoimage = new Array ();

logoimage[0] = "https://telegra.ph/file/a51a91c22de055d730c6e.jpg";
logoimage[1] = "https://telegra.ph/file/34ef0c8009b176cd5772d.jpg";
logoimage[2] = "https://telegra.ph/file/75433f8d2a4523e14a966.jpg";
logoimage[3] = "https://telegra.ph/file/b61382ac648c3957a62af.jpg";
logoimage[4] = "https://telegra.ph/file/a51a91c22de055d730c6e.jpg";

  var i = Math.floor(5*Math.random())

  var uplogonew = logoimage[i]    

amazone.addCommand({pattern: 'update$', fromMe: true,  desc: Lang.UPDATER_DESC}, (async (message, match) => {
    await git.fetch();
    var commits = await git.log([Config.BRANCH + '..origin/' + Config.BRANCH]);
    if (commits.total === 0) {
        
        var webimage = await axios.get(`${uplogonew}`, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg  , caption: '\n\n\n\n' + Lang.UPDATE +'\n\n\n\n *👩‍🦰powerd by amazone Alexa*' })
    
    } else {
        var newzels = Lang.NEW_UPDATE;
        commits['all'].map(
            (commit) => {
                newzels += '🔹 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' ◁◁' + commit.author_name + '▷▷\n';
            }
        );
        
        var webimage = await axios.get(`${uplogonew}`, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg  , caption: newzels + '```'+'\n\n *👩‍🦰powerd by amazone Alexa*' })
        
    }
 }));  



amazone.addCommand({pattern: 'update now$', fromMe: true, desc: Lang.UPDATE_NOW_DESC}, (async (message, match) => {
    await git.fetch();
    var commits = await git.log([Config.BRANCH + '..origin/' + Config.BRANCH]);
    if (commits.total === 0) {
        return await message.client.sendMessage(
            message.jid,
            Lang.UPDATE, MessageType.text
        );    
    } else {
        var guncelleme = await message.reply(Lang.UPDATING);
        if (Config.HEROKU.HEROKU) {
            try {
                var app = await heroku.get('/apps/' + Config.HEROKU.APP_NAME)
            } catch {
                await message.client.sendMessage(
                    message.jid,Lang.INVALID_HEROKU, MessageType.text);
                await new Promise(r => setTimeout(r, 1000));
                return await message.client.sendMessage(
                    message.jid,Lang.IN_AF, MessageType.text);
            }

            git.fetch('upstream', Config.BRANCH);
            git.reset('hard', ['FETCH_HEAD']);

            var git_url = app.git_url.replace(
                "https://", "https://api:" + Config.HEROKU.API_KEY + "@"
            )
            
            try {
                await git.addRemote('heroku', git_url);
            } catch { console.log('heroku remote ekli'); }
            await git.push('heroku', Config.BRANCH);

            await message.client.sendMessage(
                message.jid,Lang.UPDATED, MessageType.text);

            await message.sendMessage(Lang.AFTER_UPDATE);
            
        } else {
            git.pull((async (err, update) => {
                if(update && update.summary.changes) {
                    await message.client.sendMessage(
                        message.jid,Lang.UPDATED_LOCAL, MessageType.text);
                    exec('npm install').stderr.pipe(process.stderr);
                } else if (err) {
                    await message.client.sendMessage(
                        message.jid,'*❌ Have a Error write our support group get more help*\n*Hata:* ```' + err + '```', MessageType.text);
                }
            }));
            await guncelleme.delete();
        }
    }
}));
