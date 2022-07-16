const db = require("quick.db");
const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  if (!message.guild) {
    return;
  }
  if (message.author.id != ayarlar.sahip)
    return message.channel.send("Bu Komutu Sadece Botun Sahibi Kullanabilir!");

  let nesne = args[0];
  if (!nesne)
    return message.channel.send("Bir kullanıcının IDsini girmelisin");

  db.set(`gold_${nesne}`, "gold");

  client.channels
    .get("910917830164246588")
    .send(`\`${nesne}\` ID Kullanıcı Artık Pre Üye`);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "goldyap",
  description: "Gold üye yaparsınız",
  usage: "goldyap <ID>"
};
