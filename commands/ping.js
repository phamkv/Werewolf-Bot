module.exports = {
    name: "ping",
    description: "",
    execute(client, message, args) {
        message.channel.send("Pong.");
        return "Alter Sack";
    },
};