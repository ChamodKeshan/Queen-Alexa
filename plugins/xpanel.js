 /* Copyright (C) 2021 Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX

*/

const Neotro = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
let td = Config.WORKTYPE == 'public' ? false : true
let ad = Config.WORKTYPE == 'public' ? true : false   
let Language = require('../language');
let Lang = Language.getString('amazone');

if (Config.ADULT_MODE == 'on') {
Neotro.addCommand({pattern: 'xpanel', fromMe: ad, dontaddCommandList:true }, (async (message, match) => {
    const rows = [
        {title: '◁●●🔞වීඩියෝ ලැයිස්තුව●●▷', description: "\n\n\n◁==👩‍🦰🔞වීඩියෝ ලැයිස්තුව==▷\n\n*🔞විධානය: .x1v*\n*🔞විධානය: .x2v*\n*🔞විධානය: .x3v*\n*🔞විධානය: .x4v*\n*🔞විධානය: .x5v*\n*🔞විධානය: .x6v*\n*🔞විධානය: .x7v*\n*🔞විධානය: .x8v*\n*🔞විධානය: .x9v*\n*🔞විධානය: .10xv*\n*🔞විධානය: .xv11*\n*🔞විධානය: .xv12*\n*🔞විධානය: .xv14*\n*🔞විධානය: .xv14*\n*🔞විධානය: .xv15*\n*🔞විධානය: .xv16*\n*🔞විධානය: .xv17*\n*🔞විධානය: .xv18*\n*🔞විධානය: .xv19*\n*🔞විධානය: .xv20*\n*🔞විධානය: .xv21*\n🔞විධානය: .xv22*\n*🔞විධානය: .xv23*\n*🔞විධානය: .xv24*\n*🔞විධානය: .xv25*\n*🔞විධානය: .xv26*\n*🔞විධානය: .xv27*\n*🔞විධානය: .xv28*\n*🔞විධානය: .xv29*\n*🔞විධානය: .xv30*\n*🔞විධානය: .xv31*\n*🔞විධානය: .xv32*\n*🔞විධානය: .xv33*\n*🔞විධානය: .xv34*\n*🔞විධානය: .xv35*\n*🔞විධානය: .xv36*\n*🔞විධානය: .xv37*\n*🔞විධානය: .xv38*\n*🔞විධානය: .xv39*\n*🔞විධානය: .xv40*\n*🔞විධානය: .xv41*\n*🔞විධානය: .xv42*\n*🔞විධානය: .xv43*\n*🔞විධානය: .xv44*\n*🔞විධානය: .xv45*\n*🔞විධානය: .xv46*\n*🔞විධානය: .xv47*\n*🔞විධානය: .xv48*\n*🔞විධානය: .xv49*\n*🔞විධානය: .xv50*\n*🔞විධානය: .xv51*\n*🔞විධානය: .xv52*\n*🔞විධානය: .xv53*\n*🔞විධානය: .xv54*\n*🔞විධානය: .xv55*\n*🔞විධානය: .xv56*\n*🔞විධානය: .xv57*\n*🔞විධානය: .xv58*\n*🔞විධානය: .xv59*\n*🔞විධානය: .xv60*\n\n*🔞🧚සිංහල*\n\n*🔞විධානය: .xv61*\n*🔞විධානය: .xv62*\n*🔞විධානය: .xv63*\n*🔞විධානය: .xv64*\n*🔞විධානය: .xv65*\n*🔞විධානය: .xv66*\n*🔞විධානය: .xv67*\n*🔞විධානය: .xv68*\n*🔞විධානය: .xv69*\n*🔞විධානය: .xv70*\n*🔞විධානය: .xv71*\n*🔞විධානය: .xv72*\n*🔞විධානය: .xv73*\n*🔞විධානය: .xv74*\n*🔞විධානය: .xv75*\n🔞විධානය: .xv76*\n🔞විධානය: .xv77*\n🔞විධානය: .xv78*\n🔞විධානය: .xv79*\n*🔞විධානය: .xv80*\n*🔞විධානය: .xv81*\n*🔞විධානය: .xv82*\n*🔞විධානය: .xv83*\n*🔞විධානය: .xv84*\n*🔞විධානය: .xv85*\n*🔞විධානය: .xv86*\n*🔞විධානය: .xv87*\n*🔞විධානය: .xv88*\n*🔞විධානය: .xv89*\n*🔞විධානය: .xv90*\n", rowId:"rowid1"},
        {title: '◁●●🔞චිත්‍ර කතා Pdf ලැයිස්තුව●●▷', description: "\n\n\n*◁=👩‍🦰🔞චිත්‍ර කතා PDF ලැයිස්තුව=▷*\n\n*🔞නම* : අක්කයි මල්ලියි\n*👩‍🦰විධානය* : .x1book\n\n*🔞නම* : සිදූ\n*👩‍🦰විධානය* : .x2book\n\n*🔞නම* : නින්ද\n*👩‍🦰විධානය* : .x3book\n\n*🔞නම* : පුදුම රස්නයක්\n*👩‍🦰විධානය* : .x4book\n\n*🔞නම* : පොඩි ප්‍රශ්ණය\n*👩‍🦰විධානය* : .x5book\n\n*🔞නම* : විසේකාර ලේලි\n*👩‍🦰විධානය* : .x6book\n\n*🔞නම* : අයිස් කුමරිය\n*👩‍🦰විධානය* : .x7book\n\n*🔞නම* : නිවාඩුව\n*👩‍🦰විධානය* : .x8book\n\n*🔞නම* : බෙන් 10\n*👩‍🦰විධානය* : .x9book\n\n*🔞නම* : අසල් වැසියෝ\n*👩‍🦰විධානය* : .x10book\n\n*🔞නම* : උපන්දින තෑග්ග\n*👩‍🦰විධානය* : .x11book\n\n*🔞නම* : CARTOON MIX\n*👩‍🦰විධානය* : .x12book\n\n*🔞නම* : නන්තල් තෑග්ග\n*👩‍🦰විධානය* : .x13book\n\n*🔞නම* : කුසුම්\n*👩‍🦰විධානය* : .x14book\n\n*🔞නම* : දගයා\n*👩‍🦰විධානය* : .x15book\n\n*🔞නම* : රපුන්සල්\n*👩‍🦰විධානය* : .x16book\n\n*🔞නම* : හෙදියගේ සාත්තුව\n*👩‍🦰විධානය* : .x17book\n\n*🔞නම* : වැරදි නිවස\n*👩‍🦰විධානය* : .x18book\n\n*🔞නම* : නියම පාඩම\n*👩‍🦰විධානය* : .x19book\n\n*🔞නම* : නොසිතූ වෙලාව\n*👩‍🦰විධානය* : .x20book\n\n*🔞නම* : වැරදි වැටහීම\n*👩‍🦰විධානය* : .x21book\n\n", rowId:"rowid2"},
        {title: '◁●●🔞18+ කතා PDF ලැයිස්තුව●●▷', description: "\n\n\n*◁==👩‍🦰🔞සිංහල XXX STORIES==▷*\n\n*🚫විධානය* : .1xst\n*📂විස්තරය* : නදී - සම්පූර්ණ කතාව -Pdf\n\n*🚫විධානය* : .2xst\n*📂විස්තරය* :සමන්ති - සම්පූර්ණ කතාව - pdf\n\n*🚫විධානය* : .3xst\n*📂විස්තරය* :කින්නරාවි - සම්පූර්ණ කතාව - pdf\n\n*🚫විධානය* : .4xst\n*📂විස්තරය* :December Holiday - සම්පූර්ණ කතාව - pdf\n\n*🚫විධානය* : .5xst\n*📂විස්තරය* :Xmas - සම්පූර්ණ කතාව - pdf\n\n*🚫විධානය* : .6xst\n*📂විස්තරය* :යදම් - සම්පූර්ණ කතාව - pdf\n\n*🚫විධානය* : .7xst\n*📂විස්තරය* :පට්ටන්දර - සම්පූර්ණ කතාව - pdf\n\n*🚫විධානය* : .8xst\n*📂විස්තරය* :තරුෂි අක්කා - සම්පූර්ණ කතාව - pdf\n\n*🚫විධානය* : .9xst\n*📂විස්තරය* :බෝඩිමේ අක්කා එක්ක - සම්පූර්ණ කතාව - pdf\n\n*🚫විධානය* : .10xst\n*📂විස්තරය* :මිතුරියෝ- සම්පූර්ණ කතාව - pdf\n\n", rowId:"rowid1"},
        {title: '◁●●🔞18+ GIF ස්ටිකර් සෑදීමට\n Mp4 ෆයිල් ලැයිතුව●●▷', description: "\n\n\n◁==👩‍🦰🔞STICKER GIF (ස්ටිකර් සැකසීම)==▷\n\n*🚫විධානය* : .feetggif\n*🔞විස්තරය* : NSFU feetg Anime GIF ලබා ගැනීමට. (sticker සැකසීමට)\n\n*🚫විධානය* : .spankgif\n*🔞විස්තරය* :NSFU spnk Anime GIF ලබා ගැනීමට. (sticker සැකසීමට)\n\n*🚫විධානය* : .pussygif\n*🔞විස්තරය* :NSFU pussy Anime GIF ලබා ගැනීමට. (sticker සැකසීමට)\n\n*🚫විධානය* :  .kunigif\n*🔞විස්තරය* : NSFU kuni Anime GIF ලබා ගැනීමට. (sticker සැකසීමට)\n\n*🚫විධානය* : .analgif\n*🔞විස්තරය* : NSFU kuni Anime GIF ලබා ගැනීමට. (sticker සැකසීමට)\n\n", rowId:"rowid1"},
        {title: '◁●●🔞18+ කතා MP3 ලැයිස්තුව●●▷', description: "\n\n\n◁==👩‍🦰🔞සිංහල 18+ MP3 කතා ලැයිස්තුව==▷\n\n*🔞නම* : සදනි | සම්පූර්ණ කතාව\n*🎵විධානය* : .xvo1\n\n*🔞නම* : මල්ලි එක්ක\n*🎵විධානය* : .xvo2\n\n*🔞නම* : සඳුනිගෙ කතාව\n*🎵විධානය* : .xvo3\n\n*🔞නම* : දසුනිගෙ කතාව\n*🎵විධානය* : .xvo4\n\n*🔞නම* : නිමාශා | සම්පූර්ණ\n කතාව*🎵විධානය* : .xvo5\n\n*🔞නම* : හංසිගෙ කතාව\n*🎵විධානය* : .xvo6\n\n", rowId:"rowid1"},
        {title: '◁●●👩‍🦰භාවිතයට උපදෙස්●●▷', description: "\n\n◁==🔞සහය==▷\n\n\n⚙වීඩියෝ ලැයිස්තුව ලබාගත් පසු අදාළ විධානය භාවිතා කළ පසු වීඩියෝව බාගත වේ.100+ වීඩියො ඇත. ඉදිරියට 500+ එක් වේ.(බය වෙන්න එපා 264GB ස්ටොක් තියෙනවා🤪🤣)\n\n⚙PDF ලැයිස්තු ලබා ගැනීමට ඉහත ආකාරයටම විධානය දුන් පසු Pdf ලැබේ.සිංහල භාශාවෙන් චිත්‍ර කතා සහ වෙනත් 40+ PDF ලබා දී ඇත. (PDF STOCK එකනම් එච්චර නැ English නම් තියෙනවා 😅1000+ )\n\n⚙MP3 ගද්දි අදාල Topic එකයි Command එකයි එක්ක list එකේ ඇති ඒ අදාල Command එක ගැහුවම Mp3 Download වෙයි.\n\n⚙ස්ටිකර් ලැයිස්තුවෙ Command පාවිච්චි කරාම අදාල GIF MP4 Document එකක් විදිහට තමා එන්නෙ සමහර Phone වලට Open වෙන්නෙ නැති වෙයි. ඒත් ඒවා තියෙන්නෙ ස්ටිකර් හදන්න document එක ටැග් කරල ස්ටිකර් Command එක ගැහුවම Stickers හැදෙයි.\n\n⚙වැඩි දුර තොරතුරු ගෲප් එකට ඇවිත් කතා කරන්න 24×7 Active\nhttps://chat.whatsapp.com/DsxJcOZISvjATkTpQkIhtP\nBot කෙනෙක් නැත්තන් එන්න එපා.", rowId:"rowid1"}
       ]
       
       const sections = [{title: "Section 1", rows: rows}]
       
       const button = {
        buttonText: 'See 18+ Panel!',
        description: "*👩‍🦰Amazone Alexa 🔞+ ලැයිස්තුව*",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }));

Neotro.addCommand({pattern: 'xpanel', fromMe: td, dontAddCommandList:true}, (async (message, match) => {
    const rows = [
        {title: '◁●●🔞වීඩියෝ ලැයිස්තුව●●▷', description: "\n\n\n◁==👩‍🦰🔞වීඩියෝ ලැයිස්තුව==▷\n\n*🔞විධානය: .xv1*\n*🔞විධානය: .xv2*\n*🔞විධානය: .xv3*\n*🔞විධානය: .xv4*\n*🔞විධානය: .xv5*\n*🔞විධානය: .xv6*\n*🔞විධානය: .xv7*\n*🔞විධානය: .xv8*\n*🔞විධානය: .xv9*\n*🔞විධානය: .xv10*\n*🔞විධානය: .xv11*\n*🔞විධානය: .xv12*\n*🔞විධානය: .xv14*\n*🔞විධානය: .xv14*\n*🔞විධානය: .xv15*\n*🔞විධානය: .xv16*\n*🔞විධානය: .xv17*\n*🔞විධානය: .xv18*\n*🔞විධානය: .xv19*\n*🔞විධානය: .xv20*\n*🔞විධානය: .xv21*\n🔞විධානය: .xv22*\n*🔞විධානය: .xv23*\n*🔞විධානය: .xv24*\n*🔞විධානය: .xv25*\n*🔞විධානය: .xv26*\n*🔞විධානය: .xv27*\n*🔞විධානය: .xv28*\n*🔞විධානය: .xv29*\n*🔞විධානය: .xv30*\n*🔞විධානය: .xv31*\n*🔞විධානය: .xv32*\n*🔞විධානය: .xv33*\n*🔞විධානය: .xv34*\n*🔞විධානය: .xv35*\n*🔞විධානය: .xv36*\n*🔞විධානය: .xv37*\n*🔞විධානය: .xv38*\n*🔞විධානය: .xv39*\n*🔞විධානය: .xv40*\n*🔞විධානය: .xv41*\n*🔞විධානය: .xv42*\n*🔞විධානය: .xv43*\n*🔞විධානය: .xv44*\n*🔞විධානය: .xv45*\n*🔞විධානය: .xv46*\n*🔞විධානය: .xv47*\n*🔞විධානය: .xv48*\n*🔞විධානය: .xv49*\n*🔞විධානය: .xv50*\n*🔞විධානය: .xv51*\n*🔞විධානය: .xv52*\n*🔞විධානය: .xv53*\n*🔞විධානය: .xv54*\n*🔞විධානය: .xv55*\n*🔞විධානය: .xv56*\n*🔞විධානය: .xv57*\n*🔞විධානය: .xv58*\n*🔞විධානය: .xv59*\n*🔞විධානය: .xv60*\n\n*🔞🧚සිංහල*\n\n*🔞විධානය: .xv61*\n*🔞විධානය: .xv62*\n*🔞විධානය: .xv63*\n*🔞විධානය: .xv64*\n*🔞විධානය: .xv65*\n*🔞විධානය: .xv66*\n*🔞විධානය: .xv67*\n*🔞විධානය: .xv68*\n*🔞විධානය: .xv69*\n*🔞විධානය: .xv70*\n*🔞විධානය: .xv71*\n*🔞විධානය: .xv72*\n*🔞විධානය: .xv73*\n*🔞විධානය: .xv74*\n*🔞විධානය: .xv75*\n🔞විධානය: .xv76*\n🔞විධානය: .xv77*\n🔞විධානය: .xv78*\n🔞විධානය: .xv79*\n*🔞විධානය: .xv80*\n*🔞විධානය: .xv81*\n*🔞විධානය: .xv82*\n*🔞විධානය: .xv83*\n*🔞විධානය: .xv84*\n*🔞විධානය: .xv85*\n*🔞විධානය: .xv86*\n*🔞විධානය: .xv87*\n*🔞විධානය: .xv88*\n*🔞විධානය: .xv89*\n*🔞විධානය: .xv90*\n", rowId:"rowid1"},
        {title: '◁●●🔞චිත්‍ර කතා Pdf ලැයිස්තුව●●▷', description: "\n\n\n*◁=👩‍🦰🔞චිත්‍ර කතා PDF ලැයිස්තුව=▷*\n\n*🔞නම* : අක්කයි මල්ලියි\n*👩‍🦰විධානය* : .x1book\n\n*🔞නම* : සිදූ\n*👩‍🦰විධානය* : .x2book\n\n*🔞නම* : නින්ද\n*👩‍🦰විධානය* : .x3book\n\n*🔞නම* : පුදුම රස්නයක්\n*👩‍🦰විධානය* : .x4book\n\n*🔞නම* : පොඩි ප්‍රශ්ණය\n*👩‍🦰විධානය* : .x5book\n\n*🔞නම* : විසේකාර ලේලි\n*👩‍🦰විධානය* : .x6book\n\n*🔞නම* : අයිස් කුමරිය\n*👩‍🦰විධානය* : .x7book\n\n*🔞නම* : නිවාඩුව\n*👩‍🦰විධානය* : .x8book\n\n*🔞නම* : බෙන් 10\n*👩‍🦰විධානය* : .x9book\n\n*🔞නම* : අසල් වැසියෝ\n*👩‍🦰විධානය* : .x10book\n\n*🔞නම* : උපන්දින තෑග්ග\n*👩‍🦰විධානය* : .x11book\n\n*🔞නම* : CARTOON MIX\n*👩‍🦰විධානය* : .x12book\n\n*🔞නම* : නන්තල් තෑග්ග\n*👩‍🦰විධානය* : .x13book\n\n*🔞නම* : කුසුම්\n*👩‍🦰විධානය* : .x14book\n\n*🔞නම* : දගයා\n*👩‍🦰විධානය* : .x15book\n\n*🔞නම* : රපුන්සල්\n*👩‍🦰විධානය* : .x16book\n\n*🔞නම* : හෙදියගේ සාත්තුව\n*👩‍🦰විධානය* : .x17book\n\n*🔞නම* : වැරදි නිවස\n*👩‍🦰විධානය* : .x18book\n\n*🔞නම* : නියම පාඩම\n*👩‍🦰විධානය* : .x19book\n\n*🔞නම* : නොසිතූ වෙලාව\n*👩‍🦰විධානය* : .x20book\n\n*🔞නම* : වැරදි වැටහීම\n*👩‍🦰විධානය* : .x21book\n\n", rowId:"rowid2"},
        {title: '◁●●🔞18+ කතා PDF ලැයිස්තුව●●▷', description: "\n\n\n*◁==👩‍🦰🔞සිංහල XXX STORIES==▷*\n\n*🚫විධානය* : .1xst\n*📂විස්තරය* : නදී - සම්පූර්ණ කතාව -Pdf\n\n*🚫විධානය* : .2xst\n*📂විස්තරය* :සමන්ති - සම්පූර්ණ කතාව - pdf\n\n*🚫විධානය* : .3xst\n*📂විස්තරය* :කින්නරාවි - සම්පූර්ණ කතාව - pdf\n\n*🚫විධානය* : .4xst\n*📂විස්තරය* :December Holiday - සම්පූර්ණ කතාව - pdf\n\n*🚫විධානය* : .5xst\n*📂විස්තරය* :Xmas - සම්පූර්ණ කතාව - pdf\n\n*🚫විධානය* : .6xst\n*📂විස්තරය* :යදම් - සම්පූර්ණ කතාව - pdf\n\n*🚫විධානය* : .7xst\n*📂විස්තරය* :පට්ටන්දර - සම්පූර්ණ කතාව - pdf\n\n*🚫විධානය* : .8xst\n*📂විස්තරය* :තරුෂි අක්කා - සම්පූර්ණ කතාව - pdf\n\n*🚫විධානය* : .9xst\n*📂විස්තරය* :බෝඩිමේ අක්කා එක්ක - සම්පූර්ණ කතාව - pdf\n\n*🚫විධානය* : .10xst\n*📂විස්තරය* :මිතුරියෝ- සම්පූර්ණ කතාව - pdf\n\n", rowId:"rowid1"},
        {title: '◁●●🔞18+ GIF ස්ටිකර් සෑදීමට\n Mp4 ෆයිල් ලැයිතුව●●▷', description: "\n\n\n◁==👩‍🦰🔞STICKER GIF (ස්ටිකර් සැකසීම)==▷\n\n*🚫විධානය* : .feetggif\n*🔞විස්තරය* : NSFU feetg Anime GIF ලබා ගැනීමට. (sticker සැකසීමට)\n\n*🚫විධානය* : .spankgif\n*🔞විස්තරය* :NSFU spnk Anime GIF ලබා ගැනීමට. (sticker සැකසීමට)\n\n*🚫විධානය* : .pussygif\n*🔞විස්තරය* :NSFU pussy Anime GIF ලබා ගැනීමට. (sticker සැකසීමට)\n\n*🚫විධානය* :  .kunigif\n*🔞විස්තරය* : NSFU kuni Anime GIF ලබා ගැනීමට. (sticker සැකසීමට)\n\n*🚫විධානය* : .analgif\n*🔞විස්තරය* : NSFU kuni Anime GIF ලබා ගැනීමට. (sticker සැකසීමට)\n\n", rowId:"rowid1"},
        {title: '◁●●🔞18+ කතා MP3 ලැයිස්තුව●●▷', description: "\n\n\n◁==👩‍🦰🔞සිංහල 18+ MP3 කතා ලැයිස්තුව==▷\n\n*🔞නම* : සදනි | සම්පූර්ණ කතාව\n*🎵විධානය* : .xvo1\n\n*🔞නම* : මල්ලි එක්ක\n*🎵විධානය* : .xvo2\n\n*🔞නම* : සඳුනිගෙ කතාව\n*🎵විධානය* : .xvo3\n\n*🔞නම* : දසුනිගෙ කතාව\n*🎵විධානය* : .xvo4\n\n*🔞නම* : නිමාශා | සම්පූර්ණ\n කතාව*🎵විධානය* : .xvo5\n\n*🔞නම* : හංසිගෙ කතාව\n*🎵විධානය* : .xvo6\n\n", rowId:"rowid1"},
        {title: '◁●●👩‍🦰භාවිතයට උපදෙස්●●▷', description: "\n\n◁==🔞සහය==▷\n\n\n⚙වීඩියෝ ලැයිස්තුව ලබාගත් පසු අදාළ විධානය භාවිතා කළ පසු වීඩියෝව බාගත වේ.100+ වීඩියො ඇත. ඉදිරියට 500+ එක් වේ.(බය වෙන්න එපා 264GB ස්ටොක් තියෙනවා🤪🤣)\n\n⚙PDF ලැයිස්තු ලබා ගැනීමට ඉහත ආකාරයටම විධානය දුන් පසු Pdf ලැබේ.සිංහල භාශාවෙන් චිත්‍ර කතා සහ වෙනත් 40+ PDF ලබා දී ඇත. (PDF STOCK එකනම් එච්චර නැ English නම් තියෙනවා 😅1000+ )\n\n⚙MP3 ගද්දි අදාල Topic එකයි Command එකයි එක්ක list එකේ ඇති ඒ අදාල Command එක ගැහුවම Mp3 Download වෙයි.\n\n⚙ස්ටිකර් ලැයිස්තුවෙ Command පාවිච්චි කරාම අදාල GIF MP4 Document එකක් විදිහට තමා එන්නෙ සමහර Phone වලට Open වෙන්නෙ නැති වෙයි. ඒත් ඒවා තියෙන්නෙ ස්ටිකර් හදන්න document එක ටැග් කරල ස්ටිකර් Command එක ගැහුවම Stickers හැදෙයි.\n\n⚙වැඩි දුර තොරතුරු ගෲප් එකට ඇවිත් කතා කරන්න 24×7 Active\nhttps://chat.whatsapp.com/DsxJcOZISvjATkTpQkIhtP\nBot කෙනෙක් නැත්තන් එන්න එපා.", rowId:"rowid1"}
       ]
       
       const sections = [{title: "Section 1", rows: rows}]
       
       const button = {
        buttonText: 'See 18+ Panel!',
        description: "*👸Queen Alexa 🔞+ ලැයිස්තුව*",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }));
}
