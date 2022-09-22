const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken('MTAyMjM1ODY5ODI0NjU0MTM4Mg.GLcINs._O3OWypvAc_lEmx4_Ezk437niVdpzWKFloGLiQ');

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands('1022358698246541382'), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

// https://discord.com/api/webhooks/1022350002569367604/GeGZGNnC2mz4SttFmPcPx_wZ33gYfzuIY5YJQ72jKfRzBFVY5nig8iJKeJtt2hgSQ_hx