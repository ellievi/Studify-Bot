const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const exampleEmbed = new EmbedBuilder()
	.setColor('FFCB98')
	.setTitle('Git commands')
	.setURL('https://discord.js.org/')
	.addFields(
        { name: '\u200B', value: '\u200B' },
		{ name: '$ git init', value: 'Initialize a local git repository', inline: true },
		{ name: '$ git remote add origin [URL]', value: 'Add a remote repository to a local folder', inline: true },
		{ name: '$ git clone [URL]', value: 'Clone a remote repository to a local folder', inline: true },
		{ name: '$ git status', value: 'Show a repository status', inline: true },
		{ name: '$ git add .', value: 'Add the changes of all the modified files', inline: true },
		{ name: '$ git log', value: 'Show all modifications in a git repository', inline: true },
        { name: '$ git checkout -b nomeDaBranch ', value: 'Switch to a new branch -withouth the -b it switch to a already existed branch-', inline: true },
        { name: '$ git commit -m "commentary" ', value: 'Stage and comment the files modifications to the push ', inline: true },
        { name: '$ git commit --ammend --no-edit-n ', value: 'Commit the modified files without the permission supervisation', inline: true },
        { name: '$ git push HEAD', value: 'Carry the modification from current local branch repository to remote repository', inline: true },
		{ name: '$ git push --set-upstream origin HEAD', value: '-first push in a branch- Carry the modification from current local branch repository to remote repository', inline: true },
	);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('git')
        .setDescription('Show the most used daily git commands'),

    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] })
    }
}