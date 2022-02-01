const config = require("../../botconfig/config.json")
module.exports = client => {
  try{
    const stringlength = 69;
    console.log("\n")
    console.log(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`.bold.brightGreen)
    console.log(`     ┃ `.bold.brightGreen + " ".repeat(-1+stringlength-` ┃ `.length)+ "┃".bold.brightGreen)
    console.log(`     ┃ `.bold.brightGreen + `Anthony Molaines is online!`.bold.brightGreen + " ".repeat(-1+stringlength-` ┃ `.length-`Anthony Molaines is online!`.length)+ "┃".bold.brightGreen)
    console.log(`     ┃ `.bold.brightGreen + ` /--/ ${client.user.tag} /--/ `.bold.brightGreen+ " ".repeat(-1+stringlength-` ┃ `.length-` /--/ ${client.user.tag} /--/ `.length)+ "┃".bold.brightGreen)
    console.log(`     ┃ `.bold.brightGreen + " ".repeat(-1+stringlength-` ┃ `.length)+ "┃".bold.brightGreen)
    console.log(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`.bold.brightGreen)
  }catch{ /* */ }

  try{
    client.user.setActivity("twitch.tv/osirixplayer", { type: "WATCHING" });
  }catch (e) {
      console.log(String(e.stack).red);
  }
  //Change status each 10 minutes
  setInterval(()=>{
    try{
      client.user.setActivity("twitch.tv/osirixplayer", { type: "WATCHING" });
    }catch (e) {
        console.log(String(e.stack).red);
    }
  }, 10*60*1000)
}

