const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Answer "Pong!"'),

    async execute(interaction) {
        await interaction.reply('Pong!')
    }
}