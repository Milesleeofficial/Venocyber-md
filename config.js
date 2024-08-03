//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "263718985684";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUlheGUybE1LbTVGdElOWXJWOXRjajQrbDJjcXFQaHFYdjh1NG4wZUcwMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWnJKMVNuOURRQ1AwbmlYcHl1WG1pZlc2QTJDSkE4cjZZZmNMbnUrck54RT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlSUxmNmp5d3duN1JPaEprVXI3TXloZ1RZcEw2TzVDZDJTa0Zra1haQkhNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLL3NjNGhwL21JUkpkLzVGdEJmOHltSG4yK1YvV05idzlMMDJ4WVptQnkwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFKcDdHN2dnUUJMbHovSkJtRzFUZmdmeWV3UWFFK0pZUFYrdFMzNjNjWGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNuWVE5YUo4NlhQZ2dhT0k1d05DWVVhWjlTdVBFb1JoNmNEeE1qMWVrQUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUJlTFFCNnJlREV4M3NxeUR0WngvbXA0RE5RTC84RWZ2UGpOa2RoK2hsWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNUh6QUZpNlU0c1V2MnRzc09VWnRZWFZkN3BORmdwTzRiNkdISlRGK2JCYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik8rMEIrc3RTdmRpQjNucmduVmJNa05KUVJOZ1k4QnVvb2ZwUnRCSENlc0RsMVlocHVhcWpSay9iS01rM3I1M0lFeTVDZkxoQnR4eGpDMlNFbmQyVWd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ0LCJhZHZTZWNyZXRLZXkiOiJXWTNoSkRFYzlTMCtHdHM0N0FxSGpER2tUbGw5ZVFlVmVjUVpUUXIvQnl3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJKZF9DLWZkY1I4Vzk2Qzl3dHFUR1FnIiwicGhvbmVJZCI6IjE4NDQwOTM1LWU4N2EtNGJlYS04NTZhLTY5ODJlOTA0Y2JiZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZY0FvSUZqMzBJbC8ySUxHU2VxNXRkZG5pSnM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZjVWVzk0MGE1SmNSR3hFVlpzek9ZbTlBdDNnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IloxN1M0WlpZIiwibWUiOnsiaWQiOiIyNjM3MTg5ODU2ODQ6NDVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiUGljdHVyZXNxdWUgUGhvdG9ncmFwaHkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xtVjB0SUhFTlhRazdVR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InhSdWVZSGdGWk1wSldpWm9DY2tnMDJRRGswTDBISWlhVENnU2xkanRRRTQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlE3NDYrM1AwYmxZeWdvTjdxejB4a1pvMVJDUEF5YlN4d3dsNE9Wc2ltUE9MZnl0ejVWV21rT1hHSmpTR2hOWjEvY2hqSi9NcHNtZFBVOFREcEhhMkNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJzSzFybUQ5V2tLRjdwS1B0TU9uNVVWM0FEZ3ppYXJ5NEtjekpJVGNUbjlWN0c4Q09TYktCMzZrYjZpODZNQ1picnAwdEZMV0xKMlB6WXI1bU1pbXRqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MzcxODk4NTY4NDo0NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjVWJubUI0QldUS1NWb21hQW5KSU5Oa0E1TkM5QnlJbWt3b0VwWFk3VUJPIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMDgzNDI2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURRUSJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Zimbabwe| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "Picturesque",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "Picturesque-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "Picturesque",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "Picturesque").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
