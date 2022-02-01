const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const { duration } = require("../../handlers/functions")
module.exports = {
    name: "camiseta",
    category: "Community",
    aliases: ["c", "camiseta", "cmds", "cmd"],
    cooldown: 10,
    usage: "camiseta",
    description: "Obtén información sobre la tienda oficial de OsirixPlayer",
    run: async (client, message, args, user, text, prefix) => {
    try{
      message.channel.send(new MessageEmbed()
        .setColor(ee.color)
        .setFooter(`Tienda oficial de OsirixPlayer ©2021 ❤️ Encuentra productos fantasticos mientras colaboras con la comunidad.`)
        .setTitle(`:shopping_cart: **Información del producto**`)
        .addFields(
            { name: '**Nombre**', value: 'Camiseta Oficial OsirixPlayer', inline: false },
            { name: '**Precio**', value: '10€', inline: false },
            { name: '**Colores**', value: 'Blanco - Negro', inline: false },
            { name: '**Tallas**', value: 'S - M - L - XL', inline: false },
            { name: '**Stock**', value: '50', inline: false },
            { name: '**Envíos**', value: 'Toda España -> 5€', inline: false },
            { name: '**Descripción**', value: 'Consigue la camisa oficial de este calvito sexy, de manga corta hecha de algodón.', inline: false },
        )
        .setImage('https://osirixplayer.byronbutler.com/assets/img/1.png')
        .setThumbnail('https://osirixplayer.byronbutler.com/assets/img/1.png')
        .setURL('https://osirixplayer.byronbutler.com/')
        .setTimestamp('timestamp')
      );
    } catch (e) {
        console.log(String(e.stack).bgRed)
        return message.channel.send(new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(`❌ ERROR | An error occurred`)
            .setDescription(`\`\`\`${e.stack}\`\`\``)
        );
    }
  }
}
