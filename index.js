const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const EventEmitter = require('events');

const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// When started
client.once("ready", () => {
    console.log("Ready!")
    const members = client.users.cache.map(member => {
        return {
            id: member.id,
            name: member.username
        }
    });
    console.log(members);
})


// Consider Line 7
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}


client.on("message", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;
        
    const command = client.commands.get(commandName);

    if (command.args && !args.length) {
        let reply = `You didn't provide any arguments, ${message.author}!`;
        if (command.usage) {
            reply += `\nProper usage: \`${prefix}${command.name}${command.usage}\``;
        }
        return message.channel.send(reply);
    }

    try {
        // Empfängt das return value vom Befehl
        const fb = command.execute(client, message, args);
        console.log(fb, "Ich war hier");
        if (fb === "AAAAAAA") {
            gameState = true;
            
        }
        // Consider Line 68 
        game.emit('event', gameState);
        
    } catch (error) {
        console.error(error);
        message.reply('Oops, there was an error in executing this command!');
    }
});

// Game Section
let gameState = false;
const game = new EventEmitter();
game.on('event', (state) => {
    if (state) {
        client.channels.fetch('715540132866031658')
                    .then(channel => channel.send("Damn BOI!"))
                    .catch(channel => console.log(channel))
                    .then(() => gameState = false);
    }
    game.emit('update');
});

// The game loop
game.on('update', () => {
console.log("Game still in progress...");
setTimeout(function() {
    game.emit('update');
}, 3000);
});


// Log in, just leave it
client.login(token);