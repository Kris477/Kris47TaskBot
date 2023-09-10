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
client.commands.ping = () => "pong";
client.commands.repeat = (reply, ...args) => {
    return args.join(" ");
};
client.commands.update = () => "No updates found"
client.commands.botinfo = () => "Node.js on Linux. Uses ECMAScript modules? Yes, it's actually the framework for MsgRoom bots. Remember: the server only has 0.6 CPU so don't abuse"
client.commands.bored = () => "That's okay! You can play games, chat on MsgRoom, and more!"
client.commands.sendGETtoBotWebsite = () => axios.get('https://kris47taskbot.kris477.repl.co')
  .then(response => {
    // Handle the response data here
    client.sendMessage("Sended GET!")
  })
  .catch(error => {
    // Handle any errors here
  });