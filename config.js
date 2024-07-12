//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "234906628353";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "254793842291";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0NYYkw4VTgyejg4V2t0K3VHWE5lZGE2UFRpQUJLTXB4cGg3QzNFY2FrOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTGI0REVXMWhWK2RabjVkUiswQ044TVNlNUtHdHUvTmNqZVBvM0tDdC94QT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQnF6SDAyQ0JmQTJiY0JOSFRYU056NVhhL1lKRXI2V3hwTDZDeGQ3SEhFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXcGI1b0dCUXY5WUhSb2FpTzBsb2lQS3JDR1hHY1FUaFBRMi9ma25zK2lzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJNQXk4d2lPOVBqam5OaHlmdFB0a3ljWHQ1MVdpMGgwYkh4OUdQQUpBMUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxMQ2h2WWhWZVk0TzVqL3ZJUzFPcTcxNnRXQWFGY1RvMzlKUDkzQVdaQW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0x2OHBPNjA4L0R1WFJWb0VlT1kyYzhSclFrd01NQ1pienFLeG5GU0lHdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidndJM3dkODhtbHRMaSs0ZEhVUGFKbzdjUDIwNHZqOXZRN2JqS1hsUmREMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndPUmEyYmZpQlU2SWdaaTlrYTVRQ2FKYXhrOU9xdzlZL2E2YnVMOEYzQzF0WEJIekk5S0JXbiszNERXazRlS0JRbDc1Z2NmZVg0M2RKcW9ubStrN2lRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE2LCJhZHZTZWNyZXRLZXkiOiJIcGlCS1lvWHdKUG5UM01pL0NZbGhNQXl1UjhNTm0xUk5YZ2NRc3lkV2RZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ2MlBraFQxM1RqNmtlRmJiSnhKS0N3IiwicGhvbmVJZCI6ImU1NTRkYmIzLTRjYmQtNDViNy1hZWY5LWFkYWMxYzcxYWUwOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPUGl2TFpUSGY3WkVWTUh5VWJKeXFCZmZOWFU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOGQ3bGN5ZHNkajRnNTFDT255cGNDcWs0c0hjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJUSkFXUENCIiwibWUiOnsiaWQiOiIyNTQ3OTM4NDIyOTE6MjRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pycis3Z0JFTVhmdzdRR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IitCdUNDSTI3cTVmcDBqWWpBemFtSWFUT3d5Q1ZMYWlBc3M3NVhRT05ISFU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlgzamZMS0ptYnJQOHhQanc5OGdSRlJDME5TaEFpTVN4NHQzM2I5cStzVWR3V3pRYlRWanpCekk5YVpXOCtiaW12MndsR3JhY3ZWUzRjRE5ZZExRMEJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJWcy80SlRlUTRTcUx3UXNCZkJ0L3pleTJYOXVSYng0T3phM2ZMTHVnSnJLc3VCak83NkNiT21IYnptWHlqOSsyM3dGcndZNk9ZdURhTk9NaFNDb1Nndz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc5Mzg0MjI5MToyNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmZ2JnZ2lOdTZ1WDZkSTJJd00ycGlHa3pzTWdsUzJvZ0xMTytWMERqUngxIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwNzc0NjEwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUM1SyJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`SHELBY ™`",
  author: process.env.PACK_AUTHER || "SHELBY",
  packname: process.env.PACK_NAME || "SHELBY",
  botname: process.env.BOT_NAME || "Shelby",
  ownername: process.env.OWNER_NAME || "Shelby-MD",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
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
