console.log("Script started")
import Client from "msgroom";
import express from 'express';
import axios from 'axios';
const app = express();
const port = 443;

app.get('/', (req, res) => {
  res.send('Welcome! This is Kris47TaskBot server. Thank you for visiting! The bot will stay online longer');
});
app.listen(3000, '0.0.0.0');
const client = new Client("[&] Kris47TaskBot", [ "&" ]);
await client.connect()
client.commands.ping = {
        description: "Replies with Pong!",
        handler    : () => "Pong!",
    };
client.commands.msgroom = {
        description: "This chat you're in",
        handler    : () => "this chat.",
    };
client.commands.funfact = {
        description: "Shows fun facts",
        handler    : () => "**What is SpamHook**? It's a bot by æ which logs stuff to a Discord server",
    };
client.commands.bug = {
        description: "Found a bug or wanna suggest something? Execute it",
        handler    : () => "Have a issue or bug or suggestion? Use [this](https://github.com/Kris477/Kris47TaskBot/issues)",
    };
const webhookUrl = 'https://discord.com/api/webhooks/1151182695926353981/YGnqORaUlptX7cGn_h2ga-zy4ZaNUqNvaZP9M3H8G_EICT2sLmrmYx92rL5VaSTqvRKL';

const sendWebhookMessage = async (message) => {
  try {
    await axios.post(webhookUrl, { content: message });
    console.log('Webhook message sent successfully');
  } catch (error) {
    console.error('Error sending webhook message:', error);
  }
};

// Example usage
sendWebhookMessage('Bot just went online!');