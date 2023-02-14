const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');

const row = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId('select')
            .setPlaceholder('Any language selected')
            .addOptions({
                label: 'javascript',
                description: 'Acess javascript doc',
                value: 'javascript'
            },
            {
                label: 'react',
                description: 'Acess react doc',
                value: 'react'
            },
            {
                label: 'python',
                description: 'Acess python doc',
                value: 'python'
            },
            {
                label: 'discord.js',
                description: 'Acess discord.js doc',
                value: 'discord.js'
            },
            )
    )

module.exports = {
    data: new SlashCommandBuilder()
        .setName('docs')
        .setDescription('Access the documentation of the desired technology'),

    async execute(interaction) {
        await interaction.reply({content: 'Select one of the technologies below:', components: [row]})
    }
}