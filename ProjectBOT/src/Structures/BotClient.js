const { Client, Collection } = require('discord.js');
const Util = require('./Util.js');
const { config } = require("dotenv");

config({
    path: "././.env"
})

module.exports = class BotClient extends Client {

	constructor(options = {}) {
		super({
			disableMentions: 'everyone'
		});
		this.validate(options);

		this.commands = new Collection();

		this.aliases = new Collection();

		this.events = new Collection();

		this.utils = new Util(this);

		this.owners = options.owners;
	}

	validate(options) {
		if (typeof options !== 'object') throw new TypeError('Options should be a type of Object.');

		if (!process.env.TOKEN) throw new Error('Please define token in .env');

		if (!process.env.PREFIX) throw new Error('Please define prefix in .env');
		this.prefix = process.env.PREFIX;
	}

	async start() {
		this.utils.loadCommands();
		this.utils.loadEvents();
		super.login(process.env.token);
	}

};
