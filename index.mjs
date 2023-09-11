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