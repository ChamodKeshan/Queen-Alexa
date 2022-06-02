/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/ 

const Amazone = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const translatte = require('translatte');
const Tenu = require('apk-downloader');
const config = require('../config');
const Config = require('../config');
let tn = Config.WORKTYPE == 'public' ? false : true
const LanguageDetect = require('languagedetect');
const lngDetector = new LanguageDetect();
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;
//============================== LYRICS =============================================
const axios = require('axios');
const { requestLyricsFor, requestAuthorFor, requestTitleFor, requestIconFor } = require("solenolyrics");
const solenolyrics= require("solenolyrics"); 
//============================== CURRENCY =============================================
const { exchangeRates } = require('exchange-rates-api');
const ExchangeRatesError = require('exchange-rates-api/src/exchange-rates-error.js')
//============================== TTS ==================================================
const fs = require('fs');
const https = require('https');
const googleTTS = require('google-translate-tts');
//=====================================================================================
//============================== YOUTUBE ==============================================
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const yts = require( 'yt-search' )
const got = require("got");
const ID3Writer = require('browser-id3-writer');
const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
    clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',
    clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009'
});
//=====================================================================================
const Language = require('../language');
const Lang = Language.getString('scrapers');
const Glang = Language.getString('github');
const Slang = Language.getString('lyrics');
const Clang = Language.getString('covid');
const Dlang = Language.getString('amazone');
const wiki = require('wikijs').default;
var gis = require('g-i-s');

var dlang_dsc = ''
var closer_res = ''
var dlang_lang = ''
var dlang_similarity = ''
var dlang_other = ''
var dlang_input = ''

if (config.LANG == 'EN') {
    dlang_dsc = 'Guess the language of the replied message.'
    closer_res = 'Closest Result:'
    dlang_lang = 'Language:'
    dlang_similarity = 'Similarity:'
    dlang_other = 'Other Languages'
    dlang_input = 'Processed Text:'
}
if (config.LANG == 'SI') {
    dlang_dsc = 'පිළිතුරු දුන් පණිවිඩයේ භාශාව උපකල්පනය කරයි.'
    closer_res = 'ආශ්‍රිතම ප්‍රතිඵලය:'
    dlang_lang = 'භාශාව:'
    dlang_similarity = 'සමානාත්මතාව:'
    dlang_other = 'වෙනත් භාශා'
    dlang_input = 'පණිවිඩය:'
}

//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X

    Amazone.addCommand({pattern: 'trt(?: |$)(\\S*) ?(\\S*)', desc: Lang.TRANSLATE_DESC, usage: Lang.TRANSLATE_USAGE, fromMe: tn}, (async (message, match) => {

        if (!message.reply_message) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY,MessageType.text);
        }

        ceviri = await translatte(message.reply_message.message, {from: match[1] === '' ? 'auto' : match[1], to: match[2] === '' ? config.LANG : match[2]});
        if ('text' in ceviri) {
            return await message.reply('*▶️ ' + Lang.LANG + ':* ```' + (match[1] === '' ? 'auto' : match[1]) + '```\n'
            + '*◀️ ' + Lang.FROM + '*: ```' + (match[2] === '' ? config.LANG : match[2]) + '```\n'
            + '*🔎 ' + Lang.RESULT + ':* ```' + ceviri.text + '```');
        } else {
            return await message.client.sendMessage(message.jid,Lang.TRANSLATE_ERROR,MessageType.text)
        }
    }));

//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X

    var l_dsc = ''
    var alr_on = ''
    var alr_off = ''
    var succ_on = ''
    var succ_off = ''
    if (config.LANG == 'SI') {
        l_dsc = 'Antilink පද්ධතිය ක්‍රියත්මක කිරීම.'
        alr_on = 'Antilink කලින්ම ක්‍රියාත්මකයි!'
        alr_off = 'Antilink කලින්ම අක්‍රියයි!'
        succ_on = 'Antilink ක්‍රියාත්මක විය!'
        succ_off = 'Antilink අක්‍රිය විය!'
    }
    if (config.LANG == 'EN') {
        l_dsc = 'Activates the Antilink tool.'
        alr_on = 'Antilink is already open!'
        alr_off = 'Antilink is currently closed!'
        succ_on = 'Antilink Opened Successfully!'
        succ_off = 'Antilink Closed Successfully!'
    }

//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X

    Amazone.addCommand({pattern: 'antilink ?(.*)', fromMe: true , desc: l_dsc, usage: '.antilink on / off' }, (async (message, match) => {
        const anti_status = `${config.ANTİLİNK}`
        if (match[1] == 'on') {
            if (anti_status == 'true') {
                return await message.client.sendMessage(message.jid, '*' + alr_on + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ANTİ_LİNK']: 'true'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + succ_on + '*', MessageType.text)
            }
        }
        else if (match[1] == 'off') {
            if (anti_status !== 'true') {
                return await message.client.sendMessage(message.jid, '*' + alr_off + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ANTİ_LİNK']: 'false'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + succ_off + '*', MessageType.text)
            }
        }
    }));

//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X

    var auto_dsc = ''
    var alr_on_bio = ''
    var alr_off_bio = ''
    var succ_on_bio = ''
    var succ_off_bio = ''
    if (config.LANG == 'SI') {
        auto_dsc = 'සජීවි ලෙස වේලව ඔබේ About හි පෙන්වයි.!'
        alr_on_bio = 'Autobio කලින්ම ක්‍රියාත්මකයි!'
        alr_off_bio = 'Autobio කලින්ම අක්‍රියයි!'
        succ_on_bio = 'Autobio සාර්තකව ක්‍රියාත්මක විය.!'
        succ_off_bio = 'Autobio සාර්තකව අක්‍රිය විය.!'
    }
    if (config.LANG == 'EN') {
        auto_dsc = 'Add live clock to your bio!'
        alr_on_bio = 'Autobio is already open!'
        alr_off_bio = 'Autobio is currently closed!'
        succ_on_bio = 'Autobio Opened Successfully!'
        succ_off_bio = 'Autobio Closed Successfully!'
    }

//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X

    Amazone.addCommand({pattern: 'autobio ?(.*)', fromMe: true , desc: auto_dsc, usage: '.autobio on / off' }, (async (message, match) => {
        const bio_status = `${config.AUTOBİO}`
        if (match[1] == 'on') {
            if (bio_status == 'true') {
                return await message.client.sendMessage(message.jid, '*' + alr_on_bio + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['AUTO_BİO']: 'true'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + succ_on_bio + '*', MessageType.text)
            }
        }
        else if (match[1] == 'off') {
            if (bio_status !== 'true') {
                return await message.client.sendMessage(message.jid, '*' + alr_off_bio + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['AUTO_BİO']: 'false'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + succ_off_bio + '*', MessageType.text)
            }
        }
    }));

//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X

    Amazone.addCommand({pattern: 'detectlang$', fromMe: tn, desc: dlang_dsc}, (async (message, match) => {

        if (!message.reply_message) return await message.client.sendMessage(message.jid,Lang.NEED_REPLY, MessageType.text)
        const msg = message.reply_message.text
        var ldet = lngDetector.detect(msg)
        async function upperfirstLetter(letter) {
            return letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase();
        }
        var cls1 = await upperfirstLetter(ldet[0][0])
        var cls2 = ldet[0][1].toString()
        var cls3 = await upperfirstLetter(ldet[1][0])
        var cls4 = ldet[1][1].toString()
        var cls5 = await upperfirstLetter(ldet[2][0])
        var cls6 = ldet[2][1].toString()
        var cls7 = await upperfirstLetter(ldet[3][0])
        var cls8 = ldet[3][1].toString()
        const res_1 = '*' + dlang_input + '* ' + '_' + msg + '_ \n'
        const res_2 = '*' + closer_res + '* ' + '_' + cls1 + '_\n*' + dlang_similarity + '* ' + '_' + cls2 + '_ \n\n'
        const res_3 = '```[ ' + dlang_other + ' ]```\n\n'
        const res_4 = '#2 *' + dlang_lang + '* ' + '_' + cls3 + '_\n*' + dlang_similarity + '* ' + '_' + cls4 + '_ \n'
        const res_5 = '#3 *' + dlang_lang + '* ' + '_' + cls5 + '_\n*' + dlang_similarity + '* ' + '_' + cls6 + '_ \n'
        const res_6 = '#4 *' + dlang_lang + '* ' + '_' + cls7 + '_\n*' + dlang_similarity + '* ' + '_' + cls8 + '_'
        const rep_7 = res_1 + res_2 + res_3 + res_4 + res_5 + res_6
        await message.client.sendMessage(message.jid,rep_7,MessageType.text);
    }));

//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X


    Amazone.addCommand({pattern: 'currency(?: ([0-9.]+) ([a-zA-Z]+) ([a-zA-Z]+)|$|(.*))', fromMe: tn}, (async (message, match) => {

        if(match[1] === undefined || match[2] == undefined || match[3] == undefined) {
            return await message.client.sendMessage(message.jid,Lang.CURRENCY_ERROR,MessageType.text);
        }
        let opts = {
            amount: parseFloat(match[1]).toFixed(2).replace(/\.0+$/,''),
            from: match[2].toUpperCase(),
            to: match[3].toUpperCase()
        }
        try {
            result = await exchangeRates().latest().symbols([opts.to]).base(opts.from).fetch()
            result = parseFloat(result).toFixed(2).replace(/\.0+$/,'')
            await message.reply(`\`\`\`${opts.amount} ${opts.from} = ${result} ${opts.to}\`\`\``)
        }
        catch(err) {
            if (err instanceof ExchangeRatesError) 
                await message.client.sendMessage(message.jid,Lang.INVALID_CURRENCY,MessageType.text)
            else {
                await message.client.sendMessage(message.jid,Lang.UNKNOWN_ERROR,MessageType.text)
                console.log(err)
            }
        }
    }));

//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X


    if (config.LANG == 'SI' || config.LANG == 'AZ') {

        Amazone.addCommand({pattern: 'tts (.*)', fromMe: tn, desc: Lang.TTS_DESC}, (async (message, match) => {

            if(match[1] === undefined || match[1] == "")
                return;
    
            let 
                LANG = 'si',
                ttsMessage = match[1],
                SPEED = 1.0

            if(langMatch = match[1].match("\\{([a-z]{2})\\}")) {
                LANG = langMatch[1]
                ttsMessage = ttsMessage.replace(langMatch[0], "")
            } 
            if(speedMatch = match[1].match("\\{([0].[0-9]+)\\}")) {
                SPEED = parseFloat(speedMatch[1])
                ttsMessage = ttsMessage.replace(speedMatch[0], "")
            }
    
            var buffer = await googleTTS.synthesize({
                text: ttsMessage,
                voice: LANG
            });
            await message.client.sendMessage(message.jid,buffer, MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true});
        }));
    }
    else {
        Amazone.addCommand({pattern: 'tts (.*)', fromMe: tn, desc: Lang.TTS_DESC}, (async (message, match) => {

            if(match[1] === undefined || match[1] == "")
                return;
    
            let 
                LANG = config.LANG.toLowerCase(),
                ttsMessage = match[1],
                SPEED = 1.0

            if(langMatch = match[1].match("\\{([a-z]{2})\\}")) {
                LANG = langMatch[1]
                ttsMessage = ttsMessage.replace(langMatch[0], "")
            } 
            if(speedMatch = match[1].match("\\{([0].[0-9]+)\\}")) {
                SPEED = parseFloat(speedMatch[1])
                ttsMessage = ttsMessage.replace(speedMatch[0], "")
            }
    
            var buffer = await googleTTS.synthesize({
                text: ttsMessage,
                voice: LANG
            });
            await message.client.sendMessage(message.jid,buffer, MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true});
        }));
    }

//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X

    Amazone.addCommand({pattern: 'song ?(.*)', fromMe: tn, desc: Lang.SONG_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_TEXT_SONG,MessageType.text);    
        let arama = await yts(match[1]);
        arama = arama.all;
        if(arama.length < 1) return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        var reply = await message.client.sendMessage(message.jid,config.SONGD,MessageType.text);

        let title = arama[0].title.replace(' ', '+');
        let stream = ytdl(arama[0].videoId, {
            quality: 'highestaudio',
        });
    
        got.stream(arama[0].image).pipe(fs.createWriteStream(title + '.jpg'));
        ffmpeg(stream)
            .audioBitrate(320)
            .save('./' + title + '.mp3')
            .on('end', async () => {
                const writer = new ID3Writer(fs.readFileSync('./' + title + '.mp3'));
                writer.setFrame('TIT2', arama[0].title)
                    .setFrame('TPE1', [arama[0].author.name])
                    .setFrame('APIC', {
                        type: 3,
                        data: fs.readFileSync(title + '.jpg'),
                        description: arama[0].description
                    });
                writer.addTag();

                reply = await message.client.sendMessage(message.jid,config.SONGU,MessageType.text);
                await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false, quoted: message.data});
            });
    }));



//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X


 Amazone.addCommand({pattern: '2video ?(.*)', fromMe: tn, desc: Lang.VIDEO_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_VIDEO,MessageType.text);    
    
        var VID = '';
        try {
            if (match[1].includes('watch')) {
                var tsts = match[1].replace('watch?v=', '')
                var alal = tsts.split('/')[3]
                VID = alal
            } else {     
                VID = match[1].split('/')[3]
            }
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        }
        var reply = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_VIDEO,MessageType.text);

        var yt = ytdl(VID, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
        yt.pipe(fs.createWriteStream('./' + VID + '.mp4'));

        yt.on('end', async () => {
            reply = await message.client.sendMessage(message.jid,Lang.UPLOADING_VIDEO,MessageType.text);
            await message.client.sendMessage(message.jid,fs.readFileSync('./' + VID + '.mp4'), MessageType.video, {mimetype: Mimetype.mp4});
        });
    }));

//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X


    Amazone.addCommand({pattern: 'yt ?(.*)', fromMe: tn, desc: Lang.YT_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
        var reply = await message.client.sendMessage(message.jid,Lang.GETTING_VIDEOS,MessageType.text);

        try {
            var arama = await yts(match[1]);
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NOT_FOUND,MessageType.text);
        }
    
        var mesaj = '*◄━━━━━━⦁⦁◯⦁⦁━━━━━━►*\n  👩‍🦰 *Alexa YT SEARCH* 🚀\n◄━━━━━━⦁⦁◯⦁⦁━━━━━━► \n\n ';
        arama.all.map((video) => {
            mesaj += '*🦹 ' + video.title + '* - \n⏰ Duration :- ' + video.duration + '\n' + video.url +'\n\n'
        });

        await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        await reply.delete();
    }));


//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X

    Amazone.addCommand({pattern: 'wiki ?(.*)', fromMe: tn, desc: Lang.WIKI_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
        var reply = await message.client.sendMessage(message.jid,Lang.SEARCHING,MessageType.text);

        var arama = await wiki({ apiUrl: 'https://' + config.LANG + '.wikipedia.org/w/api.php' })
            .page(match[1]);

        var info = await arama.rawContent();
        await message.client.sendMessage(message.jid, info, MessageType.text);
        await reply.delete();
    }));

//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X


    Amazone.addCommand({pattern: 'img ?(.*)', fromMe: tn, desc: Lang.IMG_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);
        gis(match[1], async (error, result) => {
            for (var i = 0; i < (result.length < 5 ? result.length : 5); i++) {
                var get = got(result[i].url, {https: {rejectUnauthorized: false}});
                var stream = get.buffer();
                
                stream.then(async (image) => {
                    await message.client.sendMessage(message.jid,image, MessageType.image);
                });
            }

            message.reply(Lang.IMG.format((result.length < 5 ? result.length : 5), match[1]));
        });
    }));

//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X

Amazone.addCommand({pattern: 'dcsong ?(.*)', fromMe: tn, desc: Dlang.SONG}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_TEXT_SONG,MessageType.text);    
        let arama = await yts(match[1]);
        arama = arama.all;
        if(arama.length < 1) return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        var reply = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_SONG,MessageType.text, {quoted: message.data});

        let title = arama[0].title.replace(' ', '+');
        let stream = ytdl(arama[0].videoId, {
            quality: 'highestaudio',
        });
    
        got.stream(arama[0].image).pipe(fs.createWriteStream(title + '.jpg'));
        ffmpeg(stream)
            .audioBitrate(320)
            .save('./' + title + '.mp3')
            .on('end', async () => {
                const writer = new ID3Writer(fs.readFileSync('./' + title + '.mp3'));
                writer.setFrame('TIT2', arama[0].title)
                    .setFrame('TPE1', [arama[0].author.name])
                    .setFrame('APIC', {
                        type: 3,
                        data: fs.readFileSync(title + '.jpg'),
                        description: arama[0].description
                    });
                writer.addTag();

                reply = await message.client.sendMessage(message.jid,Lang.UPLOADING_SONG,MessageType.text, {quoted: message.data});
                await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.document, {filename: title + '.mp3', mimetype: 'audio/mpeg', quoted: message.data});
            });
    }));

    
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X

    Amazone.addCommand({pattern: 'lyric ?(.*)', fromMe: tn, desc: Slang.LY_DESC }, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid, Slang.NEED, MessageType.text);

        var aut = await solenolyrics.requestLyricsFor(`${match[1]}`); 
        var son = await solenolyrics.requestAuthorFor(`${match[1]}`);
        var cov = await solenolyrics.requestIconFor(`${match[1]}`);
        var tit = await solenolyrics.requestTitleFor(`${match[1]}`);

        var buffer = await axios.get(cov, {responseType: 'arraybuffer'});

        await message.client.sendMessage(message.jid, Buffer.from(buffer.data),  MessageType.image, {caption: `*${Slang.ARAT}* ` + '```' + `${match[1]}` + '```' + `\n*${Slang.BUL}* ` + '```' + tit + '```' + `\n*${Slang.AUT}* ` + '```' + son + '```' + `\n*${Slang.SLY}*\n\n` + aut });

    }));


//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X

    Amazone.addCommand({pattern: "covid ?(.*)", fromMe: tn, desc: Clang.COV_DESC}, (async (message, match) => {
        if (match[1] === "") {
            try{
                //const resp = await fetch("https://coronavirus-19-api.herokuapp.com/all").then(r => r.json());
                const respo = await got("https://coronavirus-19-api.herokuapp.com/all").then(async ok => {
                    const resp = JSON.parse(ok.body);
                    await message.reply(`🌍 *World-Wide Results:*\n🌐 *Total Cases:* ${resp.cases}\n☠️ *Total Deaths:* ${resp.deaths}\n⚕️ *Total Recovered:* ${resp.recovered}`);
 
                });

            } catch (err) {
                await message.reply(`Error :\n${err.message}`, MessageType.text)
            }

        }
        else if (match[1] === "tr" || match[1] === "Tr" || match[1] === "TR" || match[1].includes('turkiye') || match[1].includes('türkiye') || match[1].includes('türk') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Turkey").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇹🇷 *Türkiye İçin Sonuçlar:*\n😷 *Toplam Vaka:* ${resp.cases}\n🏥 *Günlük Hasta:* ${resp.todayCases}\n⚰️ *Toplam Ölü:* ${resp.deaths}\n☠️ *Günlük Ölü:* ${resp.todayDeaths}\n💊 *Toplam İyileşen:* ${resp.recovered}\n😷 *Aktif Vaka:* ${resp.active}\n🆘 *Ağır Hasta:* ${resp.critical}\n🧪 *Toplam Test:* ${resp.totalTests}`);
                });
            } catch (err) {
                await message.reply(`Bir Hata Oluştu, İşte Hata : \n${err.message}`, MessageType.text)
            }

        }
        else if (match[1] === "usa" || match[1] === "Usa" || match[1] === "USA" || match[1] === "america" || match[1] === "America") {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/USA").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇺🇲 *Datas for USA:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "de" || match[1] === "De" || match[1] === "DE" || match[1] === "Germany" || match[1] === "germany" || match[1].includes('deutschland') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Germany").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇩🇪 *Daten für Deutschland:*\n😷 *Fälle İnsgesamt:* ${resp.cases}\n🏥 *Tägliche Fälle:* ${resp.todayCases}\n⚰️ *Totale Todesfälle:* ${resp.deaths}\n☠️ *Tägliche Todesfälle:* ${resp.todayDeaths}\n💊 *Insgesamt Wiederhergestellt:* ${resp.recovered}\n😷 *Aktuelle Fälle:* ${resp.active}\n🆘 *Kritische Fälle:* ${resp.critical}\n🧪 *Gesamttests:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "az" || match[1] === "AZ" || match[1] === "Az" || match[1].includes('azerbaycan') || match[1].includes('azeri') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Azerbaijan").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇦🇿 *Azərbaycan üçün məlumatlar:*\n😷 *Ümumi Baş Tutan Hadisə:* ${resp.cases}\n🏥 *Günlük Xəstə:* ${resp.todayCases}\n⚰️ *Ümumi Ölüm:* ${resp.deaths}\n☠️ *Günlük Ölüm:* ${resp.todayDeaths}\n💊 *Ümumi Sağalma:* ${resp.recovered}\n😷 *Aktiv Xəstə Sayı:* ${resp.active}\n🆘 *Ağır Xəstə Sayı:* ${resp.critical}\n🧪 *Ümumi Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "uk" || match[1] === "Uk" || match[1] === "UK" || match[1] === "United" || match[1].includes('kingdom') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/UK").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇬🇧 *Datas for UK:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "in" || match[1] === "ın" || match[1] === "In" || match[1] === "İn" || match[1] === "IN" ||  match[1] === "İN" || match[1] === "india" || match[1] === "India" || match[1].includes('indian') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/India").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇮🇳 *भारत के लिए डेटा:*\n😷 *कुल मामले:* ${resp.cases}\n🏥 *दैनिक मामले:* ${resp.todayCases}\n⚰️ *कुल मौतें:* ${resp.deaths}\n☠️ *रोज की मौत:* ${resp.todayDeaths}\n💊 *कुल बरामद:* ${resp.recovered}\n😷 *एक्टिव केस:* ${resp.active}\n🆘 *गंभीर मामले:* ${resp.critical}\n🧪 *कुल टेस्ट:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "cn" || match[1] === "Cn" || match[1] === "CN" || match[1].includes('china') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/China").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇨🇳 *Datas for China:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "gr" || match[1] === "Gr" || match[1] === "GR" || match[1].includes('greek') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Greece").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇬🇷 *Datas for Greece:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "fr" || match[1] === "Fr" || match[1] === "FR" || match[1].includes('france') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/France").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇫🇷 *Datas for France:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "jp" || match[1] === "Jp" || match[1] === "JP" || match[1].includes('japan') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Japan").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇯🇵 *Datas for Japan:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });
 
            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "kz" || match[1] === "Kz" || match[1] === "KZ" || match[1].includes('kazakistan') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Kazakhstan").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇰🇿 *Datas for Kazakhstan:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "pk" || match[1] === "Pk" || match[1] === "PK" || match[1].includes('pakistan') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Pakistan").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇵🇰 *Datas for Pakistan:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else if (match[1] === "ru" || match[1] === "Ru" || match[1] === "RU" || match[1].includes('russia') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Russia").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇷🇺 *Datas for Russia:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else if (match[1] === "id" || match[1] === "İd" || match[1] === "İD" || match[1] === "ıd" || match[1] === "Id" || match[1] === "ID" || match[1].includes('ındonesia') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Indonesia").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇮🇩 *Datas for Indonesia:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else if (match[1] === "nl" || match[1] === "Nl" || match[1] === "NL" || match[1].includes('netherland') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Netherlands").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇳🇱 *Datas for Netherlands:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else {
            return await message.client.sendMessage(
                message.jid,
                Clang.NOT,
                MessageType.text
            );
        }
    }));
/*
Amazone.addCommand({ pattern: 'apk ?(.*)', fromMe: tn, desc: Dlang.APK_DESC,  deleteCommand: false}, async (message, match) => {

    const pack = match[1]
          
    if (!pack) return await message.client.sendMessage(message.jid,Dlang.APK_NEED,MessageType.text, {quoted: message.data})

    if (pack.includes('=')) {
        var split = pack.split('=');
        link = split[1];
        nothing = split[0];
    }
    
    var apk = await Tenu.apk(link)
    var apkinfo = await Tenu.apk_info(link)

    const app = await axios.get(apkinfo.ic, {responseType: 'arraybuffer'})
    await message.client.sendMessage (message.jid, Buffer.from (app.data), MessageType.image, {mimetype: Mimetype.png, caption: Dlang.APK_D + Dlang.APK_N + apk.name + Dlang.APK_DEV + apk.auth + Dlang.APK_V + apk.vers + Dlang.APK_SUM + apkinfo.summ })

    var downloading = await message.client.sendMessage(message.jid,Dlang.APK_DW,MessageType.text, {quoted: message.data});
    const profileBuffer = await axios.get(apk.link, {responseType: 'arraybuffer'})
    var uploading = await message.client.sendMessage(message.jid,Dlang.APK_UP,MessageType.text, {quoted: message.data});
    await message.client.sendMessage(message.jid,Buffer.from(profileBuffer.data), MessageType.document, {filename: apk.name + '.apk', mimetype: 'application/vnd.android.package-archive', quoted: message.data})
    await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    return await message.client.deleteMessage(message.jid, {id: uploading.key.id, remoteJid: message.jid, fromMe: true})
})
*/
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
