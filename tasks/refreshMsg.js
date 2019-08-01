const { Task } = require('klasa');
const {MessageEmbed} = require('discord.js')
const fetch = require('node-fetch');

module.exports = class extends Task {

    constructor(...args) {
        /**
         * Any default options can be omitted completely.
         * if all options are default, you can omit the constructor completely
         */
        super(...args, { enabled: true });
    }

    async run(data) {
        var guild = await this.client.guilds.resolve(data.guild)
            var res = await fetch('https://tmi.twitch.tv/group/user/speedy_tmp/chatters').then(res => res.json())
            const embed = new MessageEmbed(
                {
                    "color": 9673566,
                    "timestamp": Date.now(),
                    "footer": {
                      "text": "footer text"
                    },
                    "thumbnail": {
                      "url": "https://static-cdn.jtvnw.net/jtv_user_pictures/dbef57ac-3847-43b7-ba80-20c86cf57183-profile_image-70x70.png"
                    },
                    "author": {
                      "name": "Speedy_TMP Twitch",
                      "url": "https://www.twitch.tv/speedy_tmp",
                      "icon_url": "https://static-cdn.jtvnw.net/jtv_user_pictures/dbef57ac-3847-43b7-ba80-20c86cf57183-profile_image-70x70.png"
                    },
                    "fields": [
                      {
                        "name": "Viewer Name",
                        "value": res.chatters.viewers.join("\n")
                      }
                    ]
                  }
            )
            var now = new Date();
            var format = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();

            var channel;
            if(guild.channels.some(channel => channel.name == format))
            {
               channel = guild.channels.find(channel => channel.name == format)
            }
            else
            {
               channel = await guild.channels.create(format,{parent:"606441225779675169"})
            }
            var theMsg = await channel.send(embed);
    }

    async init() {
        /*
         * You can optionally define this method which will be run when the bot starts
         * (after login, so discord data is available via this.client)
         */
    }

};
