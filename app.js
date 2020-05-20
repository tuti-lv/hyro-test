const { App } = require('@slack/bolt');
const dotenv = require('dotenv');

dotenv.config();

// Initializes app
const app = new App({
	token: process.env.SLACK_BOT_TOKEN,
	signingSecret: process.env.SLACK_SIGNING_SECRET
});

// Listens to incoming dm messages
app.message(async ({ message, say }) => {
	// say() sends a message to the channel where the event was triggered
	await say(message.text);
});

(async () => {
	// Starting the server
	await app.start(process.env.PORT || 3000);
	console.log('⚡️ someCompany server is running!');
})();
