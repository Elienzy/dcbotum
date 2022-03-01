const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {

        const yetkiyok = new Discord.MessageEmbed()
        .setAuthor("HATA !")
.setColor("ORANGE")
.setDescription(`Bu komutu kullanmak için yetkin yetersiz.`)
.setFooter(`Komutu kullanan kişi : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))

        if(!message.member.permissions.has("KICK_MEMBERS")) return message.reply({embeds:[yetkiyok]})


/////  !ban @kişi sebep

        let user = message.mentions.users.first();
        let sebep = args[1]

        const atma = new Discord.MessageEmbed()
        .setAuthor("HATA !")
.setColor("ORANGE")
.setDescription(`Kişi belirtilmemiş!`)
.setFooter(`Komutu kullanan yetkili : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))




        if(!user) return message.reply({embeds:[atma]})


        const sebepbelirt = new Discord.MessageEmbed()
        .setAuthor("HATA !")
.setColor("ORANGE")
.setDescription(`Sebep belirtilmemiş!`)
.setFooter(`Komutu kullanan yetkili : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))

        if(!sebep) return message.reply({embeds:[sebepbelirt]})


const üye = message.guild.members.cache.get(user.id)

üye.kick({reason: sebep})


const kick = new Discord.MessageEmbed()
.setAuthor("ATILDI !")
.setColor("RED")
.setDescription(`${user}, isimli kişi başarılı bir şekilde Sunucudan Atıldı
Atılma sebebi: **${sebep}**`


)
.setFooter(`Komutu kullanan yetkili : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))



message.reply({embeds:[kick]})


},

name: "kick",
description: "Belirlenen kişiyi sunucudan atarsın",
aliases: [],
kategori: "moderasyon",
usage: "",
}