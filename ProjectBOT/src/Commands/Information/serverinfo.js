const Discord = require('discord.js');
const { version } = require('../../../package.json');
const Command = require('../../Structures/Command');

module.exports = class extends Command {
	constructor(...args) {
		super(...args, {
			name: "serverinfo",
			aliases: ['serverinfo'],
			description: 'Display serverinfo',
			category: 'Information'
		});
	}
	async run(message, [target]) {
		const embed = new Discord.MessageEmbed()
			.setThumbnail(message.guild.iconURL({dynamic:true}))
			.addField("Server Name", message.guild.name, true)
			.addField("Id", message.guild.id, true)
			.addField("Members", message.guild.members.cache.size, true)
			.addField("Server Owner", message.guild.owner, true)
			.addField("Channels", message.guild.channels.size, true)
			.addField("Roles", message.guild.roles.cache.size, true)
			.addField("Emojis", message.guild.emojis.cache.size, true)
		message.channel.send(embed)
	}
};
