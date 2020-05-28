const damn = "AAAAAAA";

module.exports = {
    name: "game",
    description: "",
    execute(client, message, args) {
        message.channel.send(damn);
        setInterval(function() {
            client.channels.fetch('715540132866031658')
                .then(channel => channel.send("Hallo!"))
                .catch(channel => console.log(channel));
        }, 3000);
    },
};