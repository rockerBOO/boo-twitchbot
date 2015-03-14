var irc = require('twitch-irc');
var bot = require('./bot/bot');

var clientOptions = {
    options: {
        debug: true,
        debugDetails: true,
        //debugIgnore: ['ping', 'chat', 'action']
    },
    identity: {
        username: 'rockerboo',
        password: 'oauth:srm53kj46nve0agoqyfgtb0vvhvspz'
    },
    channels: ['rockerboo']
}

var client = new irc.client(clientOptions);

function findCommand(message) {
	parts = message.match(/\!([A-Za-z0-9]+)/);

	if (parts) {
        return parts[1]
	}

    return ""
}

client.connect();

client.addListener('connecting', function (address, port) {
    client.logger.info('Connecting to ' + address + ' on port ' + port);
});

client.addListener('connected', function (address, port) {
    client.logger.info('Connected to ' + address + ' on port ' + port);
});


client.addListener('join', function (channel, nick) {
    client.logger.info('Welcome ' + nick + ' on ' + channel);
});

client.addListener('pong', function (latency) {
	client.say()
    client.logger.info("Sweet pong bru." + client.latency)
});

client.addListener('hosting', function (latency) {
    client.logger.info("We on this host train to no where fast. " + client.latency);
});

client.addListener('chat', function (channel, user, message) {
    client.logger.info(channel + ' ' + user.username + ': ' + message);

    if (command = findCommand(message)) {
        bot.run(command)
    }
});