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
    var BGM_on = ''
    var BGM_off = ''
    if (config.LANG == 'EN') {
        l_dsc = 'turn on Inbox Command block. -bot owner command'
        alr_on = 'inblock is already open!'
        alr_off = 'inbox block is currently closed!'
        BGM_on = 'inbox block option turned on!'
        BGM_off = 'imbox block option turned off'
    }
    if (config.LANG == 'SI') {
        l_dsc = 'INBOX BLOCK system  ක්‍රියාත්මක කිරීම.'
        alr_on = 'කලින්ම ක්‍රියාත්මකයි!'
        alr_off = 'කලින්ම අක්‍රියයි!'
        BGM_on = '*inbox block ක්‍රියාත්මයි.*'
        BGM_off = '*inbox block අක්‍රියයි.*'
    }
    Neotro.addCommand({pattern: 'inblock ?(.*)', fromMe: true, desc: l_dsc, usage: '.inblock on / off' }, (async (message, match) => {
        if (match[1] == 'off') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['INBOX_BLOCK']: 'false'
                    } 
                });
                await message.sendMessage(BGM_off)
        } else if (match[1] == 'on') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['INBOX_BLOCK']: 'true'
                    } 
                });
                await message.sendMessage(BGM_on)
        }
    }));
