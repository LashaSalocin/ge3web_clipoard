import { Client } from "discord.js-selfbot-v13";
import clipboardy from "clipboardy";
import "dotenv/config";

const client = new Client({
  checkUpdate: false,
});

client.on("ready", async () => {
  console.log("client is ready");
});

const startApp = (channelId) => {
  client.on("messageCreate", async (message) => {
    if (message.channelId === channelId) {
      const tokenAddress = message.embeds[0].description.replace(
        /^`+|`+$/g,
        ""
      );

      clipboardy.writeSync(tokenAddress);
      console.log("copied", `${tokenAddress}`);
    }
  });
};

client.login(process.env.TOKEN);

const channelId = "1217404754880102420";
startApp(channelId);
