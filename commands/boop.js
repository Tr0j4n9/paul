module.exports = {
  main: (bot, msg, settings) => {
    
    var Discord = require("discord.js");
  	msg.channel.send("Hey " + (msg) + ", you got booped!", msg);

  },
  args: '<@mention>',
  help: 'Boop another person in your server',
  hide: false
}
