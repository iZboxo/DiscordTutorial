const Discord = require('discord.js');
const { version } = require('../../../package.json');
const Command = require('../../Structures/Command');

module.exports = class extends Command {
	constructor(...args) {
		super(...args, {
			name: "botinfo",
			aliases: ['botstats'],
			description: 'Display bot stats',
			category: 'Information'
		});
	}
	async run(message) {
		const embed = new Discord.MessageEmbed()
			.setThumbnail(this.client.user.displayAvatarURL())
			.addField("Servers",this.client.guilds.cache.size)
			.addField("Users",this.client.users.cache.size)
			.addField("Channels",this.client.channels.cache.size)
			.addField("\u200b","\u200b")
			.addField("Commands",this.client.commands.size)
			.addField("Aliases",this.client.aliases.size)
			.addField("\u200b","\u200b")
			.addField("Discord.js",Discord.version)
			.addField("Node.js",process.version)
			.addField("Platform",process.platform)
			.setTimestamp();
		message.channel.send(embed);
	}

};
