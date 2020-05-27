const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once("ready", () => {
    console.log("Ready!")
})

client.on("message", message => {

    if (message.member.hasPermission(["ADMINISTRATOR"])) {

        // console.log(message.content);

        if(message.content.startsWith(`${prefix}`)) {
            // message.channel.send("Kick")
            
            let member = message.mentions.members.first();
            message.channel.send(`Ich gab ${member} 'nen fetten Arschtritt.`);
        }
    }
});

client.login(token);