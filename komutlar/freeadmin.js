const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('683581431829757976') 

exports.run = (client, message, args) => {
    const codemarefi = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('0x36393E')
        .setTitle(`${client.user.username} - Komutlar`)
        .setDescription(``)
        .setThumbnail(client.user.avatarURL)
        .addField(``)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
    return message.channel.sendEmbed(codemarefi);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: ''
};