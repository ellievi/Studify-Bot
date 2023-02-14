const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('playlist')
        .setDescription('Listen a study playlist'),

    async execute(interaction) {
        await interaction.reply('https://open.spotify.com/playlist/2y3igp485gzwQvN7Ezmh9v?si=c59bc513ab0f48da')
    }
}