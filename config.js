import chalk from 'chalk'
import { fileURLToPath } from 'url'
import { watchFile, unwatchFile, readFileSync } from 'fs'

global.owner = 
 [
  ['+918075116840', 'Aᴅɪᴛʜ', true]
]
// Put your number here
// [number, he creator/owner?, he developer?]

global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit

// api key here okay
global.xyro = 'LyrK9JMI7N' // https://api.xyroinee.xyz free limit unlimited
global.apilol = 'GataDios' // https://api.lolhuman.xyz free limit unlimited by @BrunoSobrino

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b'
}

 global.thumbnailUrl = [
  'https://telegra.ph/file/30020130b423b209ec808.jpg', 'https://telegra.ph/file/30020130b423b209ec808.jpg',
  'https://telegra.ph/file/30020130b423b209ec808.jpg', 'https://telegra.ph/file/30020130b423b209ec808.jpg',
  'https://telegra.ph/file/30020130b423b209ec808.jpg', 'https://telegra.ph/file/30020130b423b209ec808.jpg',
  'https://telegra.ph/file/30020130b423b209ec808.jpg', 'https://telegra.ph/file/30020130b423b209ec808.jpg',
  'https://telegra.ph/file/30020130b423b209ec808.jpg', 'https://telegra.ph/file/30020130b423b209ec808.jpg'
]

// Sticker WM
global.packname = `「 Cʀᴇᴀᴛᴇᴅ Bʏ Aᴅɪᴛʜ 」`
global.author = ''
global.thumb = readFileSync('./me.png')
global.thumb2 = readFileSync('./me2.jpeg')
global.multiplier = 69 // The higher, The harder levelup

//Text here
global.me = 'Cʀᴇᴀᴛᴇᴅ Bʏ Aᴅɪᴛʜ -2024'
global.bott = 'Rᴇxɪᴇ_ᴍᴅ'
global.nomorown = '918075116840'
// owner put this creator.js
global.str = '-------------'
global.l = '「'
global.r = '」'
global.wait = '```「▰▰▰▱▱▱▱▱▱▱」ʟ ᴏ ᴀ ᴅ ɪ ɴ ɢ...```'
global.eror = '```404 ᴇʀʀᴏʀ```'

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🧬',
      limit: '🌌',
      health: '❤️',
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈',
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.cyanBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
