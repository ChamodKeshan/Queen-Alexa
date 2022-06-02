const Neotro = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');
const Language = require('../language');
const Lang = Language.getString('system_stats');

if (Config.LANG == 'SI') {


    Neotro.addCommand({pattern: 'basichelp', fromMe: true, dontAddCommandList:true}, (async (message, match) => {
            
            var image = await axios.get (Config.MENU_LOGO, {responseType: 'arraybuffer'})
       
        await message.sendMessage (Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `*⊰᯽⊱┈──╌❊  ❊╌──┈⊰᯽⊱*
 *═▣══❖⦁⦁⦁👽⦁⦁⦁❖══▣═*

 *🚀Amazone BASIC Help*

 🛸Amazone Alexa ඔබ භාවිතා කරන්නෙ ( Public) අකාරයට නම් ඔබට ක්‍රියාත්මක වන්නෙ පරිපාලක වරුන්ගෙ විධාන පමණි.
නමුත් අන් අයට පරිපාලක විධාන හැර අනෙකුත් විධාන සියල්ල ක්‍රියාත්මක වේ...

🌀පරිපාලක විධාන ලැයිස්තුව ලබා ගැනීමට( .Admin ) භාවිතා කරන්න
🌀සම්පූර්ණ විධාන ලැයිස්තුව ලබා ගැනීමට ( .alexa ) භාවිතා කරන්න.

🛸 ඔබ amazone භාවිතා කරන්නෙ Private අකාරයටනම් ( .neotro ) මෙම විධානය භාවිතා කර විධාන ලැයිස්තුව ලබාගත හැක.

🚀ඔබේ Bot එකවරම ක්‍රියා විරහිත වීම Bot ගෙ දෝෂයක් නොවෙ ( 75%)
එවන් අවස්තාවකදි ඔබේ අන්තර්ජාල සම්බන්ධ තාවය හා whatsapp web පරීක්ෂා කරන්න..

🚀එවැනි අවස්තාවකදි නැවත Bot ක්‍රියාත්මක කිරීමට ඔබ Heroku මගින් Bot Restart කල යුතු වේ...

🚀 ඔබේ Heroku Dyno පරීක්ෂා කිරිම අනිවාර්ය වෙ..

🛸පියවර

(01 ) Heroku Log වන්න
(02) ඔබ Bot සැකසූ App එක select කරන්න
(03) ඉහල කෙලවරේ ඇති [MORE] බටනය ඔබන්න
(04) එම ලැයිස්තුවෙ අවසානයට ඇති Restart all dynos ඔබන්න
🌀දැන් ඔබේ Bot restart වෙනු ඇත..එය භාවිත කිරීමෙනුත් Bot ක්‍රියාත්මක නොවේනම් logs වල screen shot සමඟ සහය සමූහයට ලියන්න

🚀ඔබ දන්නවද Amazone ඔබට Alive  message - Alive logo - Welcome Gif - Ban messages - Captions වෙනස් කිරීමේ පහසුකම් ලබා දී ඇති බව..


🚀  *විධානය: .setvar ALIVE_MESSAGE:(ඔබට අවශ්‍ය දේ ලියන්න)*
BOT හී alive message එක වෙනස් කරයි.


🚀 *විධානය: .setvar LANGUAGE:SI/ EN*
bot ක්‍රියාකාරිත්වය සිංහල හෝ ඉංග්‍රීසි භාෂාවට හැරවීම.


🚀 *විධානය: .setvar PROMOTE_MESSAGE:(ඔබට අවශ්‍ය දේ ලියන්න)*
 Addmin ලබාදීමේදි පැමිණෙන පණිවිඩය වෙනස් කිරීම.


🚀 *විධානය: .setvar DEMOTE_MESSAGE:(ඔබට අවශ්‍ය දේ ලියන්න)*
admin ඉවත් කිරීමෙදි පැමිණෙන පණිවිඩය වෙනස් කිරීම.


🚀 *විධානය: .setvar BAN_MESSAGE:(ඔබට අවශ්‍ය දේ ලියන්න)*
කණ්ඩායමෙන් අයෙක් ඉවත් කිරීමේදී පැමිණෙන පණිවිඩය වෙනස් කිරීමට.


🚀 *විධානය: .setvar WORK_TYPE:public / private*
ඔබට බොට් ක්‍රියාකාරිත්වය වෙනස් කිරීම මෙමගින් වෙනස් කිරීමට හැකිය.


🚀 *විධානය: .setvar MUTE_MESSAGE:(ඔබට අවශ්‍ය දේ ලියන්න)*
කණ්ඩායම mute කිරීමේදී පැමිණෙන පණිවිඩය නිර්මාණ හෝ වෙනස්කිරීම.


🚀 *විධානය: .setvar UNMUTE_MESSAGE:(ඔබට අවශ්‍ය දේ ලියන්න)*
කණ්ඩායම unmute කිරීමෙදී පැමිණෙන පණිවිඩය වෙනස් හෝ නිර්මාණය කිරීම

🚀 ALIVE LOGO - WELCOME GIF - BYE GIF වෙනස් කිරීමට පහත පියවර අනුගමනය කරන්න

🌀 (01) ඔබ පළමුව මෙවට අදාළ GIF -PHOTO පහත මෙවලම් වලින් එක්කට Upload කර Link ලබා ගන්න

Bot ගෙ alive පින්තූරෙ වෙනස් කරන්න ඔනෙනම් පහල Site එකට ඔයාගෙ Photo එක Upload කරලා Link එක ගන්න
🎭 https://imgbb.com/
🔹ටෙලිග්‍රෑම් පාවිච්චි කරනවම් ලේසියෙන් මේ Bot ට Img එක දාලා link එක ගන්න පුලුවන්🎭https://t.me/FnTelegraphBot

මේකෙන් ඔයාට Welcome msg එකේ GIF එක වෙනස් කරන්න පුලුවන් එතනටත් පහල site එක්කට GIF එකක් Upload කරලා link එක ගන්න
🎭https://www.mailboxdrive.com/upload/
🔹telegram use කරනවනම්🎭https://t.me/FnTelegraphBot

🚀දැන් ඔයා මේ ගත්ත Link Heroku Config වල අවශ්‍ය Row  එකට දාන්න

🌀පියවර
(01) ඔබේ heroku app එකෙහි Setting කොටසට යන්න⚙ >> ReVeal Config vars ඔබන්න එවිට ඔබට Config Rows ලබා ගන්න පුලුවන්..

🚀 මොනවද මේ Dyno 

🔹ඔබගේ Heroku ගිනුමට නොමිලේ. මාසිකව පැය 550ක් Dyno ලැබෙන අතර එය මසකට පෙර අවසන් වූවිට ඔබගේ bot ක්‍රියා විරහිත වේ.ඊලග මාසය එනතුරු බලා හිදීම හෝ  අලුත් හෙරොකු එකක සාදාගත යුතු වේ. 
🌀dyno බැලීමට .dyno විධානය භාවිතා කරන්න

🚀AI SIM Off කරන්නෙ කොහොමද?

🔹 *.adon off* sim Bot (.bot විධානය)ක්‍රියාවිරහිත කිරීමට මෙය භාවිතා කරන්න
🔹 *adon on* sim botනැවත On කිරීම මෙය මඟින් සිදුකල හැක.

🚀 ඔබෙ ගිණුම AI CHAT Bot බවට පත්කරන්නෙ කොහොමද?

🔹 *.eva on* AI EVA චැට් බොට් ක්‍රියාත්මක කිරීම මෙය මගින් හැක.
🔹 *eva off* AI EVA චැට් බොට් ක්‍රියාවිරහිත කරයි.

🚀හදිස්සියදි Dyno ඉවර උනාම මොකද කරන්නෙ..?

🌀ඔබට gmail ලිපිනයක් යටතේ නැවත මුල සිට free dyno ලබා ගැනීමට

🌀නැතහොත් ඔබට පුලුවන් නව ගිණුමකට පරණ යෙදුම ට්‍රාන්සර් කර ඉදිරියට යාමට..

🛸පියවර

🎭 _නව හිරොකු ගිනුමක් සාදා ගන්න_
 🎭  _මේ වන විටත් Bot application එක පවතින හිරොකු ගිනුමට ලොග් වන්න_
🎭  _Bot application එක තුලට පිවිසෙන්න_
🎭  _එහි තුලවන පැනලයෙහි වන *ACCESS* යන්න වෙත පිවිසෙන්න_
 🎭 _එහි වන *Add collaborator* යන්න මත ක්ලික් කර ඔබ අලුතින් සාදාගත් හිරොකු ගිනුමේ වන E-mail ලිපිනය එහි යොදා ඇඩ් කරගන්න_
🎭  _දැන් Bot application හි *SETTINGS* වෙත යන්න_
🎭 _එහි පහලට යනවිට *Transfer ownership* යන්න ඔබට හමුවනු ඇත එහි ඇති කොටුව ක්ලික් කල විට ඔබට ඔබ Bot සදහා සම්බන්දතාවයන් ලබා දී ඇති *Heroku Account* පෙන්නුම් කරනු ඇත._
🎭 _දැන් ඔබ අලුතෙන් සාදා ගත් *Heroku Account* එක තොරා *Transfer App* යන්න මත ක්ලික් කරන්න._
🎭 _දැන් ඔබගේ නව හිරොකු ගිනුමට අදාල E-mail/G-mail හි වෙත අයිතිය පැවරීම බාරගැනීමේ පනිවිඩය පැමිනෙනු ඇත._
🎭 _එම පනිවිඩය මත ක්ලික් කි⁣රීමෙන් නව හිරොකු ගිනුම වෙත ඔබගේ පරන Application  එක සාර්ථකව හුවමාරු කරගත හැකිය._

🚀 Bot ගෙ දෝෂයක් ආවොත් මොකද කරන්නෙ..?

ERRO පණිවිඩ ඇත්තටම මේවා සාමන්‍යෙන් Logo site වල ප්‍රශ්ණ නිසා නිතරම එන්න පුලුවන් ඒවා ගැන බය වෙන්න එපා සාමාන්‍යයි..

වෙනත් Erros ඔබෙ LOG අංකයට සවිස්තාත්මකව ලැබිලා ඇති ඒත් එක්කම මේවට කරන්න ඕන විසදුමත් ඇති ..ඒ පියවර අනිගමනය කරන්න


*සහය සමූහයන්*

🛡️ https://t.me/Amazone_Neotrox_Support

🛸Neutro Bot News 01
🔹 https://chat.whatsapp.com/LuLTEKm22fp8gv4ltCmKMo

Neotro Bot News 02
🔹 https://chat.whatsapp.com/LVykTrmNEU98AktU0eBNNq

🛸Neutro plugging
🔹 https://chat.whatsapp.com/JJs2iwfF0VKL3IWrIyr7AT

🛸Neutro Support Community 01
🔹 https://chat.whatsapp.com/GTgqgMTo7FoJ1GqdijshsX

🛸Neotro Support Community 02
🔹 https://chat.whatsapp.com/K4QouGNrNcm1iARgDaYiLj
`}) 

 }));
}
