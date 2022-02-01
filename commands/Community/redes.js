const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const { duration } = require("../../handlers/functions")
module.exports = {
    name: "redes",
    category: "Community",
    aliases: ["r", "redes", "cmds", "cmd"],
    cooldown: 10,
    usage: "redes",
    description: "Obtén información mis redes sociales",
    run: async (client, message, args, user, text, prefix) => {
    try{
      message.channel.send(new MessageEmbed()
        .setColor(ee.color)
        .setTitle(`:twisted_rightwards_arrows: **Estas son mis redes sociales:**`)
        .addFields(
            { name: '**Twitter:**', value: 'https://twitter.com/osirixplayer', inline: false },
            { name: '**Instagram:**', value: 'https://www.instagram.com/osirix_player', inline: false },
            { name: '**Youtube:**', value: 'https://www.youtube.com/channel/UCx6L05WvSwZoJkpZK2qRS0w', inline: false },
            { name: '**Twitch:**', value: 'https://twitch.tv/osirixplayer', inline: false },
        )
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
