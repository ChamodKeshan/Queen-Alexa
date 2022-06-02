const Neotro = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');
const Language = require('../language');
const Lang = Language.getString('system_stats');

if (Config.LANG == 'EN') {

    Neotro.addCommand({pattern: 'basichelp', fromMe: true, dontaddCommandList:true}, (async (message, match) => {
            
            var image = await axios.get (Config.MENU_LOGO, {responseType: 'arraybuffer'})
       
        await message.sendMessage (Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `*⊰᯽⊱┈──╌❊  ❊╌──┈⊰᯽⊱*
 *═▣══❖⦁⦁⦁👽⦁⦁⦁❖══▣═*
*🚀Neotro-x BASIC Help*

 Nootro-x Bot If you are using (Public) mode then you are only running admin commands.
But for others, all the commands except the admin commands are active ...

Use (.Admin) to get the admin command list
Use (.alexa) to get the complete command list.

If you are using neotro-x as Private (.neotro) you can use this command to get the command list.

Simultaneous deactivation of your bot is not the bot's fault (75%)
In that case, check your internet connection and whatsapp web.

In such a case you need to Restart Bot by Heroku to reactivate Bot ...

It is mandatory to check your Heroku Dyno.

Steps

(01) Log in to Heroku
(02) Select the app you set up Bot
(03) Click the [MORE] button at the top corner
(04) Click Restart all dynos at the end of the list
Now your Bot will restart..If using it does not activate the Bot then write to the support group with a screen shot of the logs

Did you know that Neotro-x allows you to change Alive message - Alive logo - Welcome Gif - Ban messages - Captions ..


*Command: .setvar ALIVE_MESSAGE :( Write what you want)*
Changes the BOT alive message.


*Command: .setvar LANGUAGE: SI / EN*
Translate bot functionality into Sinhala or English.


*Command: .setvar PROMOTE_MESSAGE: (Write what you want)*
 Change the message that appears when the addmin is given.


*Command: .setvar DEMOTE_MESSAGE: (Write what you want)*
Change the message that appears when removing admin.


*Command: .setvar BAN_MESSAGE: (Write what you want)*
To change the incoming message when removing someone from the group.


*Command: .setvar WORK_TYPE: public / private*
This allows you to change the way the boat works.


*Command: .setvar MUTE_MESSAGE: (Write what you want)*
Create or modify the message that comes when the group is muted.


*Command: .setvar UNMUTE_MESSAGE: (Write what you want)*
Modify or create the incoming message when the group unmutes

Follow the steps below to modify ALIVE LOGO - WELCOME GIF - BYE GIF

🌀 (01) You first upload the relevant GIF -PHOTO to one of the following tools and get the link

If you want to change the alive picture of Bot, upload your photo to the site below and get the link
https://imgbb.com/
If you use Telegram you can easily put Img on this Bot and get the link🎭 https://t.me/FnTelegraphBot

With this you can change the GIF of the Welcome msg. Upload a GIF to the site below and get the link.
Https: //www.mailboxdrive.com/upload/
If using 🔹telegram🎭 https://t.me/FnTelegraphBot

Now put the link you bought in the required Row in the Heroku Config

Steps
(01) Go to the Settings section of your heroku app ⚙ >> Press ReVeal Config vars then you can get Config Rows ..

What is this Dyno

Free to your Heroku account. Dyno receives 550 hours per month and when it expires a month ago your bot will be inactive. Wait until next month or build a new one.
Use the .dyno command to view dyno

How to turn off 🚀AI SIM?

 .adon off * Use this to deactivate the sim Bot (.bot command)
Ad * adon on * sim bot can be re-turned on by this.

How to convert your account to AI CHAT Bot?

*.Eva on* This enables AI EVA chatbots.
*Eva off* AI Disables the EVA chatbot.

What do you do when Dyno suddenly runs out?

You can get free dyno from scratch again under a gmail address

Or you can transfer the old app to a new account and move on.

Steps

_Create a new Hiroku account_
 _Log in to the Hiroku account where the Bot application already exists_
_Sign in the bot application_
*_Go to *ACCESS* in the inner panel_
 _Click on *Add collaborator* and add the e-mail address of your newly created Hiroku account there_
_Now go to *SETTINGS* in the Bot application_
_You will see *Transfer ownership* when you go down there.
_Now select the newly created* Heroku Account* and click on *Transfer App* ._
_Now you will receive the transfer acceptance message on the e-mail / G-mail related to your new Hiroku account._
_You can successfully transfer your old application to the new Hiroku account by clicking on that message._

What to do if there is a bug error ..?

ERRO Messages These are really Logo Site issues so don't worry about them.

Other Erros have received your LOG number in detail and there is a solution to this .. Follow those steps


*🚀Neotro-x Support Groups*
🛡️ https://t.me/Amazone_Neotrox_Support

🛸Neutro Bot News 01
Https: //chat.whatsapp.com/LuLTEKm22fp8gv4ltCmKMo

🚀Neotro Bot News 02
Https: //chat.whatsapp.com/LVykTrmNEU98AktU0eBNNq

🛸Neutro plugging
Https: //chat.whatsapp.com/JJs2iwfF0VKL3IWrIyr7AT

🚀Neutro Support Community 01
Https: //chat.whatsapp.com/GTgqgMTo7FoJ1GqdijshsX

🚀Neotro Support Community 02
Https: //chat.whatsapp.com/K4QouGNrNcm1iARgDaYiLj
 `}) 

 }));
 }
