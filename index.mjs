import { Client, Intents } from "discord.js";
import fetch from "node-fetch";

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.once("ready", () => {
  console.log("Bot is ready!");
})

const url = "https://api.github.com/repos/";

client.on("messageCreate", async (message) => {
  const regex = /https?:\/\/github.com\/([\d\w-\.]+\/[\d\w-\.]+)/;
  const matches = message.content.match(regex);
  if (matches !== null) {
    const repo = await fetch(url + matches[1]).then(b => b.json()).catch(err => console.log(err));
    console.log(repo);
    if (repo.license === null) {
      message.reply("You don't have a license!");
    }
  }
})

client.login("ODkzMjYzNTUyMjg5MzM3NDE1.YVY6gg.8_xV9PDlA_mqdTLD8z60vEO_1Sc");

console.log('hello');
