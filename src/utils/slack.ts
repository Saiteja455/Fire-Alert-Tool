var Slack = require('slack-node');
var webhookUri = process.env.WEBHOOK_URI;

var channel = "#website";
var username = "AlertBot";
var emoji = ":worried:";

export function sendMessage(message) {

    try {
        let slack = new Slack();

        slack.setWebhook(webhookUri);

        // slack emoji 
        slack.webhook({
            channel: channel,
            username: username,
            icon_emoji: emoji,
            text: `@channel *Alert* : ${emoji} ${message}`,
            link_names: 1
        }, function(err, response) {
            if (err) {
                console.log(err);
                // parse log object is undefined here
                //Parse.log.error(err)
                return;
            }
            console.log(response);
        });

    } catch (error) {

    }
}

