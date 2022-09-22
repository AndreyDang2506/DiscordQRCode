import { REST, SlashCommandBuilder, Routes } from 'discord.js';
import { QRCode, TOKEN, CLIENT_ID, GUILD_ID } from './constants';

const commands = [
    new SlashCommandBuilder()
        .setName(QRCode)
        .setDescription('Replies with qrcode!')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('Enter the input to encode and send back as qr code')
                .setRequired(true)),
]
    .map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(TOKEN);

rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands })
    .then((data: any) => console.log(`Successfully registered ${data.length} application commands.`))
    .catch(console.error);
