const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const { duration } = require("../../handlers/functions")
module.exports = {
    name: "tienda",
    category: "Community",
    aliases: ["t", "tienda", "cmds", "cmd"],
    cooldown: 10,
    usage: "tienda",
    description: "Obtén información sobre la tienda oficial de OsirixPlayer",
    run: async (client, message, args, user, text, prefix) => {
    try{
      message.channel.send(new MessageEmbed()
        .setColor(ee.color)
        .setFooter(`Tienda oficial de OsirixPlayer ©2021 ❤️ Encuentra productos fantasticos mientras colaboras con la comunidad.`)
        .setTitle(`:shopping_cart: **Tienda oficial de OsirixPlayer**`)
        .setDescription(`Bienvenid@ a la tienda oficial de OsirixPlayer; encuentra productos fantasticos mientras colaboras con la comunidad.`)
        .addFields(
            { name: '**?camiseta**', value: 'Camiseta Oficial OsirixPlayer', inline: false },
        )
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
