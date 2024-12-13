const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "
mongodb+srv://Mikey:H1Nn1F6KiNGkkNY3@cluster0.l364o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "
mongodb+srv://Mikey:H1Nn1F6KiNGkkNY3@cluster0.l364o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349021235197";




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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_26_12_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDMxLFxuICAgICAgICA5OSxcbiAgICAgICAgOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc5LFxuICAgICAgICA0MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM3LFxuICAgICAgICA2MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDU4LFxuICAgICAgICA4MixcbiAgICAgICAgOTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAzOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNyxcbiAgICAgICAgNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDM0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNixcbiAgICAgICAgNjksXG4gICAgICAgIDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjksXG4gICAgICAgIDQwLFxuICAgICAgICA4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA0NixcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDk1LFxuICAgICAgICA3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUwLFxuICAgICAgICA2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDk0LFxuICAgICAgICA3NixcbiAgICAgICAgMTYsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDc0LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTMsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjM1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNixcbiAgICAgICAgMjQ2LFxuICAgICAgICA1MCxcbiAgICAgICAgODUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAzOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDU3LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDksXG4gICAgICAgIDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDcwLFxuICAgICAgICAzNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTYzLFxuICAgICAgICA4NixcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUHZXUmRLdTdkRkNpTExKc2d5VUVCTFVtNk0yZnA0NEMvbURGREFjRytGQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDIxMjM1MTk3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxRDY1MTAxNDAwMDdDMjIzRTJDQTg0RTM1NTFBMUYzRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzQwODU1NzVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwia2FzaUVQSnZSd2FnU1lZUThXSXZFd1wiLFxuICBcInBob25lSWRcIjogXCJmNjkwMjIwZS1lYjIwLTQzZmYtYjU2Ny02ZDQzYThjMmFhN2VcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA2LFxuICAgICAgNTQsXG4gICAgICAyMTIsXG4gICAgICAxODUsXG4gICAgICAyMzQsXG4gICAgICAyMjEsXG4gICAgICA3MSxcbiAgICAgIDI1MyxcbiAgICAgIDQsXG4gICAgICAxNDMsXG4gICAgICAxMjUsXG4gICAgICAxMTUsXG4gICAgICAxMSxcbiAgICAgIDEyMixcbiAgICAgIDEwNSxcbiAgICAgIDUsXG4gICAgICAxODYsXG4gICAgICAxODEsXG4gICAgICAxMzMsXG4gICAgICAxMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMyLFxuICAgICAgMTE3LFxuICAgICAgMTEyLFxuICAgICAgMjI0LFxuICAgICAgNDcsXG4gICAgICAxNDcsXG4gICAgICA2MSxcbiAgICAgIDEwLFxuICAgICAgNzgsXG4gICAgICAyMTAsXG4gICAgICAxOTEsXG4gICAgICAxMTYsXG4gICAgICA0LFxuICAgICAgMTg0LFxuICAgICAgMjAsXG4gICAgICAxOTksXG4gICAgICAyNDEsXG4gICAgICAxMjQsXG4gICAgICAyMzgsXG4gICAgICAyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJORzZORldHSlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAyMTIzNTE5NzozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuG0jcmq4bSL4bSHIOqcsOqcsFwiLFxuICAgIFwibGlkXCI6IFwiMzQ5NTI5ODA3NTA0OTg6MzJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTG50dmRzQ0VNR1g4TG9HR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJrREd2YThnUXdIU1BBeTVVRkpBSWJob0RNWmxKYnJFbUVFa2RSbnBHL0V3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImtyN05WdGFaSnVCVm1FSytKZjBWajZaZE1EbTFKdGdub01TdHVMUnlxTnFYWE41OEIrell3QUxoUkdiOExKcGZwVk1BWjQzZGZEekFLRTFlZGJjWkRBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkozbk9MREhQamErMWp5VWRlMkdxUnZ1NHZlUVdIN0VCYUU5ekt6cFJucERhVHJaa01UUjBNcE9uY3MzRjg2QkloY3lkMy9RYU1BdXNtcVFSbCtIdkN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMjEyMzUxOTc6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQwODU1NzMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBM2xcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUEzbC5qc29uIjogIntcImtleURhdGFcIjpcInBycmZia3hhT3RCME55dnZzd29XOVRObTgvc2I5L3h6S2pBWGk3bnhUbjg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzI4NzI1MTc3LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQwODUwNDMyNDJcIn0iCn0="  // PUT your SESSION_ID 


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
