const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {

        const yetkiyok = new Discord.MessageEmbed()
        .setAuthor("HATA !")
.setColor("ORANGE")
.setDescription(`Bu komutu kullanmak için yetkin yetersiz.`)
.setFooter(`Komutu kullanan yetkili : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))

if(!message.member.permissions.has("MANAGE_ROLES")) return message.reply({embeds:[yetkiyok]})

let user = message.mentions.users.first();
let rol = message.mentions.roles.first();

const kisibelirt = new Discord.MessageEmbed()
.setAuthor("HATA !")
.setColor("ORANGE")
.setDescription(`Rolün alınacağı kişi belirtilmemiş.`)
.setFooter(`Komutu kullanan yetkili : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))

if(!user) return message.reply({embeds:[kisibelirt]})
const rolbelirt = new Discord.MessageEmbed()
.setAuthor("HATA !")
.setColor("ORANGE")
.setDescription(`Alınacak rol belirtilmemiş.`)
.setFooter(`Komutu kullanan yetkili : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))
if(!rol) return message.reply({embeds:[rolbelirt]})


message.guild.members.cache.get(user.id).roles.remove(rol)

const embed = new Discord.MessageEmbed()
.setColor("RED")
.setAuthor("ROL ALINDI !")
.setDescription(`${user}, isimli kişiden ${rol} isimli rol alındı.`)
.setFooter(`Komutu kullanan yetkili : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))


message.reply({embeds:[embed]})





},

name: "rolal",
description: "Belirlediğiniz kişinin rolünü alırsınız.",
aliases: [],
kategori: "moderasyon",
usage: "",
}