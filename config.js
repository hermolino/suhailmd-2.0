const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_28_12_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAxLFxuICAgICAgICA2MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDMzLFxuICAgICAgICAyNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAzLFxuICAgICAgICAxODUsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTksXG4gICAgICAgIDI2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDY0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTgzLFxuICAgICAgICA1MixcbiAgICAgICAgNjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDMwLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODcsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM5LFxuICAgICAgICAwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDUyLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQzLFxuICAgICAgICA2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDM1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTkxLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMSxcbiAgICAgICAgOTksXG4gICAgICAgIDUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODksXG4gICAgICAgIDE4NSxcbiAgICAgICAgNixcbiAgICAgICAgMzgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDYyLFxuICAgICAgICA1MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDU4LFxuICAgICAgICA5NixcbiAgICAgICAgODcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDc2LFxuICAgICAgICAxODksXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDg5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjAzLFxuICAgICAgICA3MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDksXG4gICAgICAgIDg5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTksXG4gICAgICAgIDc3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTYzLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgODcsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3MixcbiAgICAgICAgMTgsXG4gICAgICAgIDczLFxuICAgICAgICA3MixcbiAgICAgICAgMzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk2LFxuICAgICAgICA0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDksXG4gICAgICAgIDg0LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTcwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTc2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTg0LFxuICAgICAgICA0OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY2LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAzLFxuICBcImFkdlNlY3JldEtleVwiOiBcInRKZlUwV2w4cklYWTRpclM2WHU2NUlEbExSWVFlQXpvdWlCdUh3RWJHd0E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImZNMHN5TmNtU0tTTXA2LW5iTXBKMWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTlkMDAxN2QtMDJlNy00NTgyLWEwY2QtYjEwY2U5OTQ4ZmEyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOCxcbiAgICAgIDIyNixcbiAgICAgIDI5LFxuICAgICAgMTkxLFxuICAgICAgMTk4LFxuICAgICAgMTYwLFxuICAgICAgNzIsXG4gICAgICAxOTYsXG4gICAgICAxMTgsXG4gICAgICAxNjQsXG4gICAgICAxNCxcbiAgICAgIDgwLFxuICAgICAgMTczLFxuICAgICAgMTk4LFxuICAgICAgMjIxLFxuICAgICAgMTQwLFxuICAgICAgMjUxLFxuICAgICAgNDAsXG4gICAgICAxMjIsXG4gICAgICAyMDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI5LFxuICAgICAgMjAsXG4gICAgICA2NCxcbiAgICAgIDE4MixcbiAgICAgIDM5LFxuICAgICAgMTIzLFxuICAgICAgNDQsXG4gICAgICA3NixcbiAgICAgIDc4LFxuICAgICAgMTk2LFxuICAgICAgMCxcbiAgICAgIDIwNCxcbiAgICAgIDEwMyxcbiAgICAgIDEwMCxcbiAgICAgIDIwMixcbiAgICAgIDE1OSxcbiAgICAgIDEzNCxcbiAgICAgIDEyNixcbiAgICAgIDE2NyxcbiAgICAgIDEwOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHVkNLSlY0UlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODAzODkwMzM1Mzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1ODExNTU4ODM5OTEzMDo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xLczFad0tFTXFMMGJzR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVlNiUVNmVlRrVm9YQWtLZ21oRlZHV3dWUHpRU1RuUWE3V0dxU2lGbW9DVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJNbllpWEp1SGROSXhBTWpjUmRMTkcxQ3hoeGRLSGVsRTIyKzNwamNLM0lWOWhiVnY3OGpyc2EyV2hwb2xPWnI3VnV3TWFBNEM3bFZIYjlacFBXYXVpdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJKc3h3R3pvOHRJK0RadndRMjlUZlBMWUU0K2pabXFWNzBnVW9qYUdYN0FpWXNsaWtjNjYwRkhGNGtxNzdsZTlFSjhObStyb2E0ckdoNWhoQ01VRjBDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDM4OTAzMzUzOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1NjczMjkzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSXlJXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJeUkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJOTTF4bnlWM0J0T1VDL2IxVitlcGpqS3BsSWc4SkpqWnhLekl4d0JRWmJNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI3NDQ0NzMxMzgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTczNTU2MjE4MTA4N1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
