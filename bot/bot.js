var command = require('./command');

var bot = function(options) {
	var self = this;

	self.channel = '';

	self.command = new command();
};

bot.prototype.run = function(channel, command, username, message) {
    var self = this
    if (typeof(message)==='undefined') message = "";

    switch (channel) {

        case 'ping':
            self.command.Ping(channel);

        case 'host':
            self.command.Host(channel, command, message);

        case 'unhost':
            self.command.Unhost(channel);

        case 'unmod':
            self.command.Unmod(channel, user)

        case 'slowoff':
            self.command.SlowOff(channel);

        case 'reboot':
            self.command.Reboot();

        case 'leave':
        case 'part':
            self.command.Part(channel);

        case 'clearall':
            self.command.Clear(channel);

        case 'timeout':
            self.command.Timeout(channel, user);

        case 'subonly':
        case 'subsonly':
            self.command.SubscribersChat(channel);

        case 'freedom':
        case 'subsoff':
        case 'viewers':
            self.Command.SubscribersChatOff(channel);

    }
}

bot.prototype.comeOnline = function(message) {
	if (typeof(message)==='undefined') message = "";

	client.say(self.channel, message);
};

module.exports = bot