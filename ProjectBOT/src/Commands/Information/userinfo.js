const Discord = require('discord.js');
const { version } = require('../../../package.json');
const Command = require('../../Structures/Command');

module.exports = class extends Command {
	constructor(...args) {
		super(...args, {
			name: "userinfo",
			aliases: ['whois'],
			description: 'Display userinfo',
			category: 'Information'
		});
	}
	async run(message, [target]) {
		const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;
		const embed = new Discord.MessageEmbed()
			.setThumbnail(member.user.avatarURL({dynamic:true}))
			.setColor(member.displayHexColor || 'RED')

			.addField("Username", member.user.username, true)
			.addField("Tag", member.user.discriminator, true)
			.addField("Id", member.user.id, true)
			.addField("Created At", member.user.createdTimestamp, true)
			.addField("Game", member.user.presence.game || 'Not playing a game.', true)
			.addField("Status", member.user.presence.status, true)
		message.channel.send(embed)
	}
};
