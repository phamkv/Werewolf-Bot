module.exports = {
    name: "ping",
    description: "",
    execute(client, message, args) {
        message.channel.send("Pong.");
        // console.log(message.guild.roles);
        const bot = message.guild.members.cache.get('715190093119357010');

        const role = message.guild.roles.cache.get('715659536861757471');
        bot.roles.add(role);
        return "Alter Sack";
    },
};