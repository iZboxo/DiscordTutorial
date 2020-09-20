module.exports = class Command {
	constructor(client, name, options = {}) {
		this.client = client;
		this.name = options.name || name;
		this.aliases = options.aliases || [];
		this.description = options.description || 'No description provided.';
		this.category = options.category || 'Miscellaneous';
		this.usage = options.usage || 'No usage provided.';
	}

	async run(message, args) {
		throw new Error(`Command ${this.name} doesn't provide a run method!`);
	}

};
