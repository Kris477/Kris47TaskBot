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
client.commands.faq = {
        description: "Shows FAQ",
        handler    : () => "**What is SpamHook**? It's a bot by æ which logs stuff to a Discord server",
    };
client.commands.bug = {
        description: "Found a bug or wanna suggest something? Execute it",
        handler    : () => "Have a issue or bug? Use [this](https://github.com/Kris477/Kris47TaskBot/issues)",
    };