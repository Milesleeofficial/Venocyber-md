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
global.owner = process.env.OWNER_NUMBER || "255742862266";
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
  "VENOCYBER-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic05UQnhzMGFUOEw4ZjV4OE5RcjhCcS9tQmp2ZkFMSEZ4YUtwcTNnSGVGOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYzRCdURHdW1CdVFkWkxWM00zbStacUVpYW5rUWFGYU5PUktrM1A2MmVsbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNRGpHOWU1QmNGWWhRVGVTUEh4amFPcEkzVEtGTjdwaVJDRXprdW15Ymw4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJS21IUG1oZGpWUlp6WXF5L1gzbnI1K2p2NG0rcjFHTDlMaWFVVEpibndFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNMYnpFRDFOSjNzMkszZU85a0VCd3E3QTl6Q1Y3eUZTc3ppU245alBwMnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZUYzMyc1FWQlhRdFdNY0FmK29sazZ3cms1K2Vrc0FWWjcwaHZpc0tFakk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMktra0hjbndiRmJjOWdoSER5M1JiRVhXOFFYVXI0T2I5by9GWFo2clJXbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicEF6dTFUdHpWRE9xeUJuK0FNa1lBMmttK203Y0cwR2pLYzVSK0s0aExsVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9BRnEvODFYNi83TldlRUNCL2J6SkVNRERPZ3pJQmRxMEJYaExlT0RVMWZPMCsvN1ZpSTJSaURaWi9XOEFqWms3cTVLbThBMnpSV3FEdlNNaFQ5WWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAxLCJhZHZTZWNyZXRLZXkiOiIzcjBkV1ZFaUVqdFVLK3JyMG5YZXB1bkVHa0lmb0xpWXNpZmlkQ1ptQ2c4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2MzcxODk4NTY4NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyNjBCQUNGRTY3MTFEOURDQzkwQjI2OEMxRDFFNjEyQyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIxNjYyODQ3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjM3MTg5ODU2ODRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0IyRjBDRTJDQTdBODkxNkU0RTVGQTAzMjAwRjJEMzYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTY2Mjg0N31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiN0EzV1AyVGxRQ3E0ZjFxR2FLYlczQSIsInBob25lSWQiOiIzZTJiMzAyNC1lNzYzLTQ0ZWMtYWYwZS1kYjVkOGI3OTVmNjMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmZmK1YzTXR1NE9Hc3lkdkdHZGlDbXh4VlM4PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdWMGNsRVBxbkEvdUJRQ2F1ZmFWeHRrZ2d6az0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI5RENCOVhUOCIsIm1lIjp7ImlkIjoiMjYzNzE4OTg1Njg0OjQzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlBpY3R1cmVzcXVlIFBob3RvZ3JhcGh5In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMbVYwdElIRU83NitiUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ4UnVlWUhnRlpNcEpXaVpvQ2NrZzAyUURrMEwwSElpYVRDZ1NsZGp0UUU0PSIsImFjY291bnRTaWduYXR1cmUiOiJUdWRzNVdjOUpVR1llU1dEUlZhSEZsdXc0cEdUZnkxclV0b3Jha0JGOGZwQzRmVEliMmJtd3NSb3VLZS9QVWRIOXhlaVU5YWpYaVJncmZ0THdCUnZDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNWp2a0puTTZJZUZxZ21hS05jQXNqMEU0aHFnTWJhZVNuSmw1UkJOcThMUlgzMEVoT3JSUGZQN3MyTG85K3JpRlFRUnZRRmpTV3lSckkvaCt1YzhNaXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3MTg5ODU2ODQ6NDNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY1Vibm1CNEJXVEtTVm9tYUFuSklOTmtBNU5DOUJ5SW1rd29FcFhZN1VCTyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTY2Mjg0MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEUVEifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
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
