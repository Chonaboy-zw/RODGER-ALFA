const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/OnfzyAE.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*RODGER ALFA Bot Created By AKSHAY SER AND RODGER ALFA*
This a Private bot 
*PUBLIC BOT (LINK)  :    https://github.com/4K5H475ER/RODGER-ALFA*
 PUBLIC BOT 2 (LINK)   :  https://github.com/4K5H475ER/RODGER-ALFA

`}) 

}));
