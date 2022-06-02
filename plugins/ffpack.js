/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/

const Amazone = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const fs = Config.WORKTYPE == 'public' ? false : true
const ll ="*```Enter a word```"
const Ln = "Free Fire logo maker"
const code = "*_50 FF LOGO PACK_*\n\n*🧞‍♂️.ff01 : Makes FF logo*\n\n🧞‍♂️.ff02 : Makes FF logo**\n\n*🧞‍♂️.ff03 : Makes FF logo*\n\n🧞‍♂️.ff04 : Makes FF logo*\n\n🧞‍♂️.ff5 : Makes FF logo*\n\n🧞‍♂️.ff6 : Makes FF logo*\n\n🧞‍♂️.ff07 : Makes FF logo*\n\n🧞‍♂️.ff08 : Makes FF logo*\n\n🧞‍♂️.ff09 : Makes FF logo*\n\n🧞‍♂️.ff10 : Makes FF logo*\n\n🧞‍♂️.ff12 : Makes FF logo*\n\n🧞‍♂️.ff13 : Makes FF logo*\n\n🧞‍♂️.ff14 : Makes FF logo*\n\n🧞‍♂️.ff15 : Makes FF logo*\n\n🧞‍♂️.ff16 : Makes FF logo*\n\n🧞‍♂️.ff17 : Makes FF logo*\n\n🧞‍♂️.ff18 : Makes FF logo*\n\n🧞‍♂️.ff19 : Makes FF logo*\n\n🧞‍♂️.ff20 : Makes FF logo*\n\n🧞‍♂️.ff21 : Makes FF logo*\n\n🧞‍♂️.ff22 : Makes FF logo*\n\n🧞‍♂️.ff23 : Makes FF logo*\n\n🧞‍♂️.ff24 : Makes FF logo*\n\n🧞‍♂️.ff25 : Makes FF logo*\n\n🧞‍♂️.ff26 : Makes FF logo*\n\n🧞‍♂️.ff27 : Makes FF logo*\n\n🧞‍♂️.ff28 : Makes FF logo*\n\n🧞‍♂️.ff29 : Makes FF logo*\n\n🧞‍♂️.ff30 : Makes FF logo*\n\n🧞‍♂️.ff31 : Makes FF logo*\n\n🧞‍♂️.ff32 : Makes FF logo*\n\n🧞‍♂️.ff33 : Makes FF logo*\n\n🧞‍♂️.ff34 : Makes FF logo*\n\n🧞‍♂️.ff35 : Makes FF logo*\n\n🧞‍♂️.ff36 : Makes FF logo*\n\n🧞‍♂️.ff37 : Makes FF logo*\n\n🧞‍♂️.ff38 : Makes FF logo*\n\n🧞‍♂️.ff39 : Makes FF logo*\n\n🧞‍♂️.ff40 : Makes FF logo*\n\n🧞‍♂️.ff41 : Makes FF logo*\n\n🧞‍♂️.ff42 : Makes FF logo*\n\n🧞‍♂️.ff43 : Makes FF logo*\n\n🧞‍♂️.ff44 : Makes FF logo*\n\n🧞‍♂️.ff45 : Makes FF logo*\n\n🧞‍♂️.ff46 : Makes FF logo*\n\n🧞‍♂️.ff47 : Makes FF logo*\n\n🧞‍♂️.ff48 : Makes FF logo*\n\n🧞‍♂️.ff49 : Makes FF logo*\n\n🧞‍♂️.ff50 : Makes FF logo*\n\n"
//thanks to saidali & shadow


      Amazone.addCommand({pattern: 'ffpack', fromMe: fs, desc: Ln,}, (async (message, match) => {

    await message.client.sendMessage(
  
      message.jid,code, MessageType.text);
  
  }));
 
 Amazone.addCommand({ pattern: 'ff02 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/ecf60ef31d7e75c2620fd.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
 
 Amazone.addCommand({ pattern: 'ff01 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/db68993a2656b4748a16a.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
 
  Amazone.addCommand({ pattern: 'ff03 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/4cc2fe3ca2a712d3b14cc.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by DARK KNIGHT' })
    
    }));
 
 Amazone.addCommand({ pattern: 'ff04 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/0a25356767c7833bbd9ca.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
 
  Amazone.addCommand({ pattern: 'ff05 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/33eb446f4132e76a2fd58.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
 
  Amazone.addCommand({ pattern: 'ff06 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/2f7de65a46ed366a63676.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
 
  Amazone.addCommand({ pattern: 'ff07 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/e5f8d6f2e9f9000ebe3d9.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
 
  Amazone.addCommand({ pattern: 'ff08 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/6090aadefff57762e8b35.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
 
  Amazone.addCommand({ pattern: 'ff09 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/6ad8890337f9f2ea3b92a.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
 
  Amazone.addCommand({ pattern: 'ff10 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/244312383300b34f99bcc.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
 
  Amazone.addCommand({ pattern: 'ff11 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/b670c4eca0fafdb88a7f0.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
 
  Amazone.addCommand({ pattern: 'ff12 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/95a088f7b0453d4d82b7a.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
 
  Amazone.addCommand({ pattern: 'ff13 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/fd7500684c9ae986befc3.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
 
  Amazone.addCommand({ pattern: 'ff14 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/1e962653c4412f5271844.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
 
  Amazone.addCommand({ pattern: 'ff15 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/24483aa07e99edad88b4c.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
 
  Amazone.addCommand({ pattern: 'ff16 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/129a6861e1efdfd0f7bca.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
 
  Amazone.addCommand({ pattern: 'ff17 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/deab8459bd6d06b4f9421.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
 
  Amazone.addCommand({ pattern: 'ff18 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/696f93289f32687d3b4f7.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
 
  Amazone.addCommand({ pattern: 'ff19 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/f0145f46d111ed493e62b.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
 
  Amazone.addCommand({ pattern: 'ff20 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/f577262bce9b3733402ea.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
 
  Amazone.addCommand({ pattern: 'ff21 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/099f8580a45433eb6688c.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
 
  Amazone.addCommand({ pattern: 'ff22 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/a1fe3fe9e295c24256ede.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
 
  Amazone.addCommand({ pattern: 'ff23 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/2056e2cdd3a30971da0a6.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
 
  Amazone.addCommand({ pattern: 'ff24 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/c730c8c57cfccb7756dc4.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
 
  Amazone.addCommand({ pattern: 'ff25 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/d3749dfe51e3f13012e8e.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
 
  Amazone.addCommand({ pattern: 'ff26 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/f376a881b40c1e994d75d.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
 
  Amazone.addCommand({ pattern: 'ff27 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/1d307457e0778ae9b0d44.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
 
   Amazone.addCommand({ pattern: 'ff28 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/bf886fc083f66fb404ff1.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
   Amazone.addCommand({ pattern: 'ff29 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/d60199bc191c261497813.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
   Amazone.addCommand({ pattern: 'ff30 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/a4c9fa2db7598d876345b.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
   Amazone.addCommand({ pattern: 'ff31 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/0c87d73846b138193b203.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
   Amazone.addCommand({ pattern: 'ff32 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/c41f0c5ec4a3874dfd7fe.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
   Amazone.addCommand({ pattern: 'ff33 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/8c082e45671f2726c4010.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
   Amazone.addCommand({ pattern: 'ff34 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/dd660681c36a3126c590f.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
   Amazone.addCommand({ pattern: 'ff35 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/6c1412d523455abb2677a.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
   Amazone.addCommand({ pattern: 'ff36 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/a421f4d85a38545be4926.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
   Amazone.addCommand({ pattern: 'ff37 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/f0568921ca66fc0b01b83.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
   Amazone.addCommand({ pattern: 'ff38 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/816aaa82629bfa202f3d4.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
   Amazone.addCommand({ pattern: 'ff39 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/91ec01a9b6375b414803c.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
   Amazone.addCommand({ pattern: 'ff40 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/5e0c5e4999b8aa21c021f.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
   Amazone.addCommand({ pattern: 'ff41 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/0a9ae825b02db2cc591bb.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
   Amazone.addCommand({ pattern: 'ff42 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/0df898e2ad77b8f69f91c.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
   Amazone.addCommand({ pattern: 'ff43 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/e354930c0989a3077485e.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
   Amazone.addCommand({ pattern: 'ff44 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/b41fc723da2d9835f0151.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
   Amazone.addCommand({ pattern: 'ff45 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/bc64365aa73d60de3dcfd.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
   Amazone.addCommand({ pattern: 'ff46 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/b82196ba630383df9da76.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
   Amazone.addCommand({ pattern: 'ff47 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/8013933a6603cf2d75f94.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
   Amazone.addCommand({ pattern: 'ff48 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/4cd1004d8c8f3a800138f.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
   Amazone.addCommand({ pattern: 'ff49 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/7e9911e44f490fd5ba4bf.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
   Amazone.addCommand({ pattern: 'ff50 ?(.*)', fromMe: fs, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/816aaa82629bfa202f3d4.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.CAPTIONS})

    }));
