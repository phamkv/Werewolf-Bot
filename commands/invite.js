module.exports = {
    name: "invite",
    description: "Invites the mentioned user to the text channel.",
    args: true,
    execute(client, message, args) {
        const member = message.mentions.members.first();
        message.channel.updateOverwrite(member, { VIEW_CHANNEL: true });
    },
};