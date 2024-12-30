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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_59_12_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ1LFxuICAgICAgICAzMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIsXG4gICAgICAgIDY5LFxuICAgICAgICA5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDk2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTcxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI3LFxuICAgICAgICAzNCxcbiAgICAgICAgMzksXG4gICAgICAgIDk3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDY5LFxuICAgICAgICA4MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjEzLFxuICAgICAgICA3MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc5LFxuICAgICAgICAyNCxcbiAgICAgICAgMixcbiAgICAgICAgOTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI2LFxuICAgICAgICA1MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjksXG4gICAgICAgIDE4MixcbiAgICAgICAgNjAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODAsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDY0LFxuICAgICAgICA4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDM5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjMwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1OSxcbiAgICAgICAgOCxcbiAgICAgICAgMjIxLFxuICAgICAgICA3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDYwLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQwLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODAsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjM4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjEwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTYxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjExLFxuICAgICAgICAyNTEsXG4gICAgICAgIDcxLFxuICAgICAgICA0NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0LFxuICAgICAgICAzLFxuICAgICAgICA1MCxcbiAgICAgICAgODgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDMwLFxuICAgICAgICAxNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjExLFxuICAgICAgICA0OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSE9oMmEwcHZCTkFDekxJTXliRUhmbi81M2hOcHgveWd1bEVDUWdrdGUvcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNURWNV9IcGtRN0NzNVVPUTF2akdRQVwiLFxuICBcInBob25lSWRcIjogXCI3MTMzOTU0Yi1kYTU1LTQyNmQtYWUxMy1lOWNhODM2ZWNlODRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUzLFxuICAgICAgMjI4LFxuICAgICAgMTMyLFxuICAgICAgNzAsXG4gICAgICAyMCxcbiAgICAgIDEwNyxcbiAgICAgIDI0NSxcbiAgICAgIDcxLFxuICAgICAgNDEsXG4gICAgICAxMTYsXG4gICAgICAyMzQsXG4gICAgICAyNDUsXG4gICAgICAyMjYsXG4gICAgICA0MyxcbiAgICAgIDE2NyxcbiAgICAgIDE3OCxcbiAgICAgIDE2NSxcbiAgICAgIDAsXG4gICAgICAyMjEsXG4gICAgICAxN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTksXG4gICAgICAyNDksXG4gICAgICAyMCxcbiAgICAgIDI0MyxcbiAgICAgIDEyNSxcbiAgICAgIDIyOSxcbiAgICAgIDE0NixcbiAgICAgIDEzNixcbiAgICAgIDI0OSxcbiAgICAgIDI0NyxcbiAgICAgIDEwNSxcbiAgICAgIDEyNSxcbiAgICAgIDIyMyxcbiAgICAgIDE2LFxuICAgICAgOTQsXG4gICAgICAxODQsXG4gICAgICAyMDQsXG4gICAgICAyMzQsXG4gICAgICAxMDcsXG4gICAgICAyNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR0M4TDFBUkJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMjEyMzUxOTc6NTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLhtI3JquG0i+G0hyDqnLDqnLBcIixcbiAgICBcImxpZFwiOiBcIjM0OTUyOTgwNzUwNDk4OjU1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BiMWtNY0dFSTJ5eXJzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTWdldEZUZWM5ZW10d2NGYjMxb3hzalpvSmlveHVSQXkxOWQraWtRQVhnQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJkRmxPcWpRK3dZYmJKc2tIbXVaM25pMkp6U2VIUkZPYUFqRmc5Uy8ra3JDdVAzSkh5czEyVHpCZVRsNkxtYWlOdDBBaEFJRWtJeTRELzBLTnJ2aDdDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ6U3dmOEhTUHhTQmQzU3BXS3M0dlU2OGR0TlpDOUNaZlcvNGl1d0oxSEhBWnhXbTMzd2svUVNXZGJzZmVRckEzYWM0N2lXNFNsM3JFVUJwMzB1ZlFnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDIxMjM1MTk3OjU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTU2MzUzNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUd6SVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR3pJLmpzb24iOiAie1wia2V5RGF0YVwiOlwiY0VUT0doWnlWMFJVbk95YlEyYUlteE8xQUppc2RDWG5scDNLSTVzeHFZUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzU5Nzg3NzY2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzU1NjM1NDM1MzBcIn0iCn0="  // PUT your SESSION_ID 


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
