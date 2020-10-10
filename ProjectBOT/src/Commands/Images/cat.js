const Discord = require('discord.js');
const Command = require('../../Structures/Command');
const fetch = require("node-fetch")

module.exports = class extends Command {
	constructor(...args) {
		super(...args, {
			name: "cat",
			aliases: ['cat'],
			description: 'Display cat',
			category: 'Images'
		});
	}
	async run(message) {
        var json = await (await fetch("https://api.hyrousek.tk/images/cat")).json();
        if(!json.url) return;
        
        var embed = new Discord.MessageEmbed()
          .setImage(json.url)
        message.channel.send(embed)
	}
};
