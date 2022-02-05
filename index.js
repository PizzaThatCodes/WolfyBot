// Discord Stuff
const { Client, Attachment, Util } = require("discord.js");
const Discord = require("discord.js");
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

// Varibles Used A Lot
const prefix = "&";
const token = "OTM5MzYyODQxMjg5NDQ5NDgy.Yf3v0Q.KRBobMUbfR9rCTN_D4h35rMxElM";


client.on('ready', () => {
  console.log("Bot Is Up!")
  console.log(`Logged in as ${client.user.tag}`)
  setInterval(() => {
    client.user.setActivity("for new users!", { type: "WATCHING" })
  }, 5000); // Runs this every 5 seconds.
});



client.on("guildMemberAdd", async member => {
  const channel = client.channels.cache.find(channel => channel.name === "💬【general】");
  channel.send(`${member.user} Welcome to MCS! Hoping you enjoy your time here 😄
You can find our realms/servers and our socials in <#768260276629667850> and feel free to get yourself some ping roles in <#855158488702648350> <:MCheart:768346864612933642>
Please can you read our rules in <#768241626719977512>and introduce yourself in <#917198919983837224> ! Thank you 😄`)
})




client.login(token);
