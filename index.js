var irc = require('twitch-irc');

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
	parts = message.match(/\![A-Za-Z0-9]\s+(.*)/)

	if (parts) {
		client.logger.info('puahts'+ parts)
	}
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
    client.logger.info("We on this host train to no where fast. " + client.latency)
});

client.addListener('chat', function (channel, user, message) {
    console.log(user.username + ': ' + message);

    console.log(channel)
    console.log(user)
    console.log(message)

    console.log(client.latencyReal)

    if (message.toLowerCase() === '!hello') {
        client.say(channel, 'Hello, ' + user.username + '!');
    }
    else if (message.indexOf('!host') === 0) {
    	bot.command.Host(channel, user, message);

    } 
});

var bot = function(options) {
	var self = this

	self.channel = '';

	self.command = new command();
}

bot.prototype.comeOnline = function(message) {
	if (typeof(message)==='undefined') message = ""

	client.say(self.channel, message)
};

var command = function () {

}

command.prototype.Hello = function(channel, user, message) {
    client.say(channel, 'Hello, ' + user.username + '!');
};

command.prototype.Host = function(channel, user, message) {
	var host = message.substring(6)

	client.host(channel, host).then(function() {
		client.say(channel, 'Now hosting '+ host + '.')
	});

	client.logger.info('Hosting '+ host)
};

command.prototype.Ping = function(channel, user, message) {	
	client.ping().then(function() {
		client.say(channel, 'Reporting! Checking Twitch...')
	});
};

var bot = new bot();