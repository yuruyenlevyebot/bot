//---Bu Kod komutlar klasörüne atılacaktır.
//###CodeMareFi tarafından hazırlanmıştır - - - Ekleyen //###MareFi

const Discord = require("discord.js");

exports.run = (client, message, args) => {
  var bokspuan = [
    "**Fena Değil:** `250`",
    "**Olucak Olucak Hadi:** `500`",
    "**Orta:** `1000`",
    "**Süper:** `2000`",
    "**Hassiktir Makinayı Kırdın:** `4000`",
  ];

  let boksrandom = bokspuan[Math.floor(Math.random() * bokspuan.length)];

  const codemarefi = new Discord.MessageEmbed()
    .setDescription(`Boks Makinası Sonucun;\n${boksrandom}`)
    .setColor("BLACK")
    .setFooter("codemarefi");
  message.channel.send(codemarefi);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Boksa", "BOKS"],
  permLevel: 0,
};

exports.help = {
  name: "boks",
};
