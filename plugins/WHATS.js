/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/

const Neotro = require('../events');
const config = require('../config');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;

   var l_dsc = ''
    var alr_on = ''
    var alr_off = ''
    var TLINK_on = ''
    var TLINK_off = ''
   
    if (config.LANG == 'EN') {
        l_dsc = 'Remove Whatsapp group link'
        alr_on = '!'
        alr_off = '!'
        LINKT_on = '*TURNED ON*'
        LINKT_off = 'TURNED OFF*'
    }
    if (config.LANG == 'SI') {
        l_dsc = '*Whatsapp Group Link දමන්නන් ඔබේ සමූහයෙන් ඉවත් කරයි.*'
        alr_on = '⛔කලින්ම ක්‍රියාත්මකයි'
        alr_off = '⛔කලින්ම අක්‍රියයි.'
        LINKT_on = 'සාර්තකව ක්‍රියාත්මක විය.'
        LINKT_off = 'සාර්තකව අක්‍රිය විය.'
    }
   
    Neotro.addCommand({pattern: 'whatsblock ?(.*)', fromMe: true, desc: l_dsc, usage: '.blocklink on / of' }, (async (message, match) => {
        if (match[1] == 'off') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['WHATS_LINK_BLOCK']: 'false'
                    } 
                });
                await message.sendMessage(LINKT_off)
        } else if (match[1] == 'on') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['WHATS_LINK_BLOCK']: 'true'
                    } 
                });
                await message.sendMessage(LINKT_on)
        }
    }));
