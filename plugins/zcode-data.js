const Neotro = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const tenu = require('../hatzu');
const Language = require('../language');
let tn = Config.WORKTYPE == 'public' ? false : true
const XN_UP = "*Please Wait Little Bit Im Uploding Your Ehi⏱*"
const DESC = "Free data( EHI ලැයිස්තුව)"
const NEED_WORD = "*ඔබ Ebook URL එකක් ඇතුළත් කළ යුතුය*"
const XN_D = "*Downloading Your EHI📑*"
const TXN_D = "*💎Downloading Your APK*"
const TXN_UP = "*Uploading Your APK🔅*"
const W_D = "*🔴Downloading ALL Whatsapp  EHI*"
const Y_D = "*⚪Downloading ALL Youtube  EHI*"
const F_D = "*🔵Downloading ALL Facebook  EHI*"
const T_D = "*⚫Downloading ALL Twitter  EHI*"
const Z_D = "*🔘Downloading ALL Zoom EHI*"

Neotro.addCommand({pattern: '1apk ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,TXN_D,MessageType.text);
       var webimage = await axios.get(`https://netfile2link.herokuapp.com/89722`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,TXN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/vnd.android.package-archive', quoted: message.data})
      }));
Neotro.addCommand({pattern: '2apk ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,TXN_D,MessageType.text);
       var webimage = await axios.get(`https${tenu.AMAZONE_SITEE}89720`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,TXN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/vnd.android.package-archive', quoted: message.data})
      }));
Neotro.addCommand({pattern: '3apk ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,TXN_D,MessageType.text);
       var webimage = await axios.get(`https${tenu.AMAZONE_SITEE}89694`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,TXN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/vnd.android.package-archive', quoted: message.data})
      }));
Neotro.addCommand({pattern: '4apk ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,TXN_D,MessageType.text);
       var webimage = await axios.get(`https${tenu.AMAZONE_SITEE}89700`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,TXN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/vnd.android.package-archive', quoted: message.data})
      }));
Neotro.addCommand({pattern: '5apk ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,TXN_D,MessageType.text);
       var webimage = await axios.get(`https${tenu.AMAZONE_SITEE}89701`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,TXN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/vnd.android.package-archive', quoted: message.data})
      }));
Neotro.addCommand({pattern: '6apk ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,TXN_D,MessageType.text);
       var webimage = await axios.get(`https${tenu.AMAZONE_SITEE}89702`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,TXN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/vnd.android.package-archive', quoted: message.data})
      }));
Neotro.addCommand({pattern: '7apk ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,TXN_D,MessageType.text);
       var webimage = await axios.get(`https${tenu.AMAZONE_SITEE}89706`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,TXN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/vnd.android.package-archive', quoted: message.data})
      }));
Neotro.addCommand({pattern: '8apk ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,TXN_D,MessageType.text);
       var webimage = await axios.get(`https${tenu.AMAZONE_SITEE}89728`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,TXN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/vnd.android.package-archive', quoted: message.data})
      }));
Neotro.addCommand({pattern: '9apk ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,TXN_D,MessageType.text);
       var webimage = await axios.get(`https${tenu.AMAZONE_SITEE}89709`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,TXN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/vnd.android.package-archive', quoted: message.data})
      }));
Neotro.addCommand({pattern: '10apk ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,TXN_D,MessageType.text);
       var webimage = await axios.get(`https${tenu.AMAZONE_SITEE}89710`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,TXN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/vnd.android.package-archive', quoted: message.data})
      }));
Neotro.addCommand({pattern: '11apk ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,TXN_D,MessageType.text);
       var webimage = await axios.get(`https${tenu.AMAZONE_SITE}89711`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,TXN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/vnd.android.package-archive', quoted: message.data})
      }));
Neotro.addCommand({pattern: '12apk ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,TXN_D,MessageType.text);
       var webimage = await axios.get(`https${tenu.AMAZONE_SITE}`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,TXN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/vnd.android.package-archive', quoted: message.data})
      }));

//=====================================================================================
//=====================================================================================

Neotro.addCommand({pattern: 'WEHI ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,W_D,MessageType.text);
       var webimage = await axios.get(`https${tenu.AMAZONE_SITE}90613`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`https${tenu.AMAZONE_SITE}90615`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`https${tenu.AMAZONE_SITE}90617`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
        }));
Neotro.addCommand({pattern: 'FEHI ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,F_D,MessageType.text);
       var webimage = await axios.get(`https${tenu.AMAZONE_SITE}90619`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`https${tenu.AMAZONE_SITE}90621`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`https${tenu.AMAZONE_SITE}90623`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
        }));
Neotro.addCommand({pattern: 'YEHI ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,Y_D,MessageType.text);
       var webimage = await axios.get(`https${tenu.AMAZONE_SITE}90625`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`https${tenu.AMAZONE_SITE}90627`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`https${tenu.AMAZONE_SITE}90629`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
        }));
Neotro.addCommand({pattern: 'TEHI ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,T_D,MessageType.text);
       var webimage = await axios.get(`https${tenu.AMAZONE_SITE}90637`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`https${tenu.AMAZONE_SITE}90639`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`https${tenu.AMAZONE_SITE}90641`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
        }));
Neotro.addCommand({pattern: 'ZEHI ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,Z_D,MessageType.text);
       var webimage = await axios.get(`https${tenu.AMAZONE_SITE}90631`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`https${tenu.AMAZONE_SITE}90633`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`https${tenu.AMAZONE_SITE}90635`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
        }));


//=======================🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣==============================================================
//=====================================================================================


 Neotro.addCommand({pattern: 'iapk', fromMe: tn, dontaddCommandList:true}, (async (message, match) => {
            var image = await axios.get (`https://telegra.ph/file/23a41831a5cc8d78314a1.jpg`, {responseType: 'arraybuffer'})
        await message.sendMessage (Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `*⊰᯽⊱┈──╌❊  ❊╌──┈⊰᯽⊱*

*🚀INJECTOR PANEL*

_____________
📦NO CONFIG APP
────────

(1)🛸Cyber Inject Pro🛸
*🔎 .1apk*

(2)⚙️Cyber V2Ray[NEW]⚙️
*🔎 .2apk*

────────
📦CONFIG APPS
────────

(3)🔥 Http Injector 🔥
*🔎 .3apk*

(4)💕 Http Injector Lite 💕
*🔎 .4apk*

(5)💙 TLS Tunnel App 💙
*🔎 .5apk*

(6)🚀 Http Custom 🚀
*🔎 .6apk*

(7)🍕 Stocks Http 🍕
*🔎 .7apk*

───────
 📦WINDOWS
───────

(8)🔰 GlassWire 🔰
*🔎 .8apk*

(9)⚙️ ProxyChecker ⚙️
*🔎 .9apk*

(10)🌺  TCP Over SSL Tunnel 🌺
*🔎 .10apk*

(11)🌷  SVI Injector 🌷
*🔎 .11apk*

 `}) 
 }));

Neotro.addCommand({pattern: 'ehelp', fromMe: tn, dontaddCommandList:true}, (async (message, match) => {
            var image = await axios.get (`https://telegra.ph/file/23a41831a5cc8d78314a1.jpg`, {responseType: 'arraybuffer'})
        await message.sendMessage (Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `*⊰᯽⊱┈──╌❊  ❊╌──┈⊰᯽⊱*

*💰මොනවද මේ හැමෝම කතාවෙන Ehi ෆයිල්*

Ehi ෆයිල් කියන්නෙ Https injector app (isp ලාගේ ෆ්‍රි පැකෙජ් , සයිට් මගින්  ෆ්‍රි ඉන්ටනෙට් යන්න පුලුවන් vpn App එකක්.)

එක යූස් කරලා සාදා ගන්නා ෆයිල් එකක් ehi යනුවෙන් හදුන්වන්නෙ එහි ෆයිල් ෆෝමැට් එකයි. ( සාදාගන්නා හැටි කියලා දිමට යන්නෙ නෑ  අපි හදල දෙනව ඒව යුස් කරන්න තියෙන්නෙ 😊)  මේ දවස් වල ඉන්ටනෙට් යන්න මෙම යිල් භාවිතා කරන ආකාරය පමනයි පෝස්ට් එකේ ඇතුලත් කරන්නෙ.

ගොඩක් අය පාවිච්චි කරලා ඇති ඒත් සමහර අය ඉන්නවා මේක ගැන නොදන්න ඒ අයටයි මේ පෝස්ට් එක.

කොහොමද ඔයාලා මේකෙන් ඉන්ටනෙට් යන්නෙ ...

🔵ඔයාලට කරන්න තියෙන්නෙ ඔයාල ලග  තියෙන සිම් සමාගමේ  වට්සැප් ෆේස්බුක් යූටියුබ් සූම් වැනි පැකේජ් තියෙනව නම්  ඒකෙන් එකක් ඇක්ටිව් කර ගන්න.

🔵දැන් injector  ඇප් එකක් මාර්ගයෙන් අපි ක්‍රියාත්මක කර ඇති පැකේජයෙන් අන්තර්ජාලයට පිවිසිය හැක.

 `}) 
 }));

Neotro.addCommand({pattern: 'connect', fromMe: tn, dontaddCommandList:true}, (async (message, match) => {
            var image = await axios.get (`https://telegra.ph/file/23a41831a5cc8d78314a1.jpg`, {responseType: 'arraybuffer'})
        await message.sendMessage (Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `*⊰᯽⊱┈──╌❊  ❊╌──┈⊰᯽⊱*

*🤔කොහොමද Connect කරගන්නෙ?*

🔘ඉස්සෙලම ඔයාගෙ සිම් එකට අදාළ පැකේජ් එකක් Active කරගන්න. whatsapp facebook etc:

🔵VPN මගින් අන්තර්ජාලයට සම්බන්ධ වීමට Injecter APP එකක් ඔබ Install කරගන්න ඕන. http injector recommend

🔵දැන් ඔයා Active කරපු පැකේජ් එකට අදාල EHI FILE එක Download කරලා Open කරන්න. (install කරපු injector එකෙන්)

🔵APP එක open උනාම Start CLICK කරන්න Vpn on කරන්න අදාළ permission ඉල්ලයි ඒවා දෙන්න..
දැන් ඔයාට පැකේජ් එක මගින් අන්තර්ජාලය පිවිසිය හැකියි...

💰📦

 `}) 
 }));
