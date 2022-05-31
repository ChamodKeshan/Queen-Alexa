/* Copyright (C) 2021 ALEXA
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
ALEXA

DON'T COPY SCRIPT
Thanks Node Fetch Developers :)
*/
const fetch = require('node-fetch')

exports.fetchJson = fetchJson = (url, options) => new Promise(async(resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})


exports.fetchText = fetchText = (url, options) => new Promise(async(resolve, reject) => {
    fetch(url, options)
        .then(response => response.text())
        .then(text => {
            resolve(text)
        })
        .catch((err) => {
            reject(err)
        })
})
