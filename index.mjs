import { Client, Intents } from "discord.js";

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.once("ready", () => {
  console.log("Bot is ready!");
})

client.on("messageCreate", (message) => {
  console.log(message.content);
})

client.login("ODkzMjYzNTUyMjg5MzM3NDE1.YVY6gg.8_xV9PDlA_mqdTLD8z60vEO_1Sc");
