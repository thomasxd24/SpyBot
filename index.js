const { Client } = require('klasa');
const { Collection } = require('discord.js')
const { config, token } = require('./config');

class MyKlasaClient extends Client {

    constructor(...args) {
        super(...args);

        this.embedMessages = new Collection();
    }

    // Add any methods to your Klasa Client

}

new MyKlasaClient(config).login(token);
