var command = function () {

};

command.prototype.Hello = function(channel, user, message) {
    client.say(channel, 'Hello, ' + user.username + '!');
};

command.prototype.Host = function(channel, host, message) {
	client.host(channel, host).then(function() {
		client.say(channel, 'Now hosting '+ host + '.');
	});

	client.logger.info('Hosting '+ host);
};

command.prototype.Ping = function(channel, user, message) {	
	client.ping().then(function() {
		client.say(channel, 'Reporting! Checking Twitch...');
	});
};

command.prototype.Ping = function(channel, user, message) { 
    client.ping().then(function() {
        
    });
};

module.exports = command