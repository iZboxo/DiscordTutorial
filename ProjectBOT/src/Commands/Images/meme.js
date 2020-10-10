const Discord = require('discord.js');
const Command = require('../../Structures/Command');
const fetch = require("node-fetch")

module.exports = class extends Command {
	constructor(...args) {
		super(...args, {
			name: "meme",
			aliases: ['meme'],
			description: 'Display meme',
			category: 'Images'
		});
	}
	async run(message) {
        var json = await (await fetch("https://api.hyrousek.tk/images/meme")).json();
        if(!json.url) return;
        
        var embed = new Discord.MessageEmbed()
          .setImage(json.url)
        message.channel.send(embed)
	}
};
