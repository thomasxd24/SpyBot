const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        /**
         * Any default options can be omitted completely.
         * if all options are default, you can omit the constructor completely
         */
        super(...args, {
            enabled: true,
            runIn: ['text', 'dm', 'group'],
            requiredPermissions: [],
            requiredSettings: [],
            aliases: [],
            autoAliases: true,
            bucket: 1,
            cooldown: 0,
            promptLimit: 0,
            promptTime: 30000,
            deletable: false,
            guarded: false,
            nsfw: false,
            permissionLevel: 0,
            description: '',
            extendedHelp: 'No extended help available.',
            usage: '',
            usageDelim: ' ',
            quotedStringSupport: false,
            subcommands: false
        });
    }

    async run(message, [...params]) {
      await this.client.schedule.create('refreshMsg', "*/5 * * * *", {
        data: {
            guild: message.guild.id
        }
        // This task will try to run again (catch up) if the bot was off when it was meant to fire
    });
    var task = this.client.tasks.resolve('refreshMsg')
    task.run({guild: message.guild.id})
    message.send("✅ Now posting, please don't do the command again. Type `!stop` to , well, stop xD")
    }

    async init() {
        /*
         * You can optionally define this method which will be run when the bot starts
         * (after login, so discord data is available via this.client)
         */
    }

};
