import { Client, EmbedBuilder } from "discord.js";
import { TOKEN, QRCode, GoogleQRCodeURLRoot } from "./constants"

(async () => {
    const BOT = new Client({
        intents: [],
    });
    BOT.on("ready", () => console.log("Connected to Discord!"));
    BOT.on('interactionCreate', async interaction => {
        if (!interaction.isChatInputCommand()) return;
      
        if (interaction.commandName === QRCode) {
            const input  = interaction.options.getString('input');
            const width = 177
            const height = 177
            const color = '000000'

            const url = encodeURI(`${GoogleQRCodeURLRoot}&chco=${color}&chs=${width}x${height}&chl=${JSON.stringify(input)}`);
            const response = new EmbedBuilder()
                .setTitle("QR Code Response")
                .setColor(`#${color}`)
                .setImage(url)
                .setTimestamp();
          await interaction.reply({ embeds: [response]});
        }
      });
    await BOT.login(TOKEN);
})();