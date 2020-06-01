const damn = "AAAAAAA";

module.exports = {
    name: "game",
    description: "",
    execute(client, message, args) {
        message.channel.send(damn);
        return damn;
    },
};