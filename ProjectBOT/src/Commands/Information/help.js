const Discord = require('discord.js');
const { version } = require('../../../package.json');
const Command = require('../../Structures/Command');
const { stripIndents } = require("common-tags");
const fs = require("fs")
const categories = fs.readdirSync("./src/Commands/");

module.exports = class extends Command {
	constructor(...args) {
		super(...args, {
			name: "help",
			aliases: ['commands'],
			description: 'Display bot commands',
			category: 'Information'
		});
	}
	async run(message) {
        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
        
        const commands = (category) => {
            return this.client.commands.filter(cmd => cmd.category === category).map(cmd => `\`${cmd.name}\` | `).join("")
        }
        
        const info = categories
            .map(cat => stripIndents`${cat[0].toUpperCase() + cat.slice(1)} \n${commands(cat)}`)
            .reduce((string, category) => string + "\n" + category);

        
        return message.channel.send(embed.setDescription(info));
	}
};
