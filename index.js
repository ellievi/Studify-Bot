const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');

// dotenv
const dotenv = require('dotenv');
dotenv.config();
const { TOKEN } = process.env;

// import of commands
const fs = require('node:fs');
const path = require('node:path');

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if ('data' in command && 'execute' in command) {
        client.commands.set(command.data.name, command)
    } else {
        console.log(`This command in ${filePath} is missing "data" or "execute".`)
    }
}

// Bot's login
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});
client.login(TOKEN);

// Listener of interactions with bot
client.on(Events.InteractionCreate, async interaction => {
    if (interaction.isStringSelectMenu()) {
        const selected = interaction.values[0]
        if (selected === 'javascript') {
            await interaction.reply('Javascript Doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript')
        } else if (selected === 'react') {
            await interaction.reply('React Doc: https://reactjs.org/docs/getting-started.html')
        } else if (selected === 'python') {
            await interaction.reply('Python Doc: https://www.python.org/doc/')
        } else if (selected === 'discord.js'){
            await interaction.reply('Discord.js Doc: https://discordjs.guide/')
        }
    }

    if (!interaction.isChatInputCommand()) return
    const command = interaction.client.commands.get(interaction.commandName)
    if (!command) {
        console.error('Command not found.')
        return
    } try {
        await command.execute(interaction)
    } catch (error){
        console.error(error)
        await interaction.reply('Error trying to execute this command.')
    }
})