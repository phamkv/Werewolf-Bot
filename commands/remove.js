module.exports = {
    name: "remove",
    description: "Resets every permissions of the mentioned user.",
    args: true,
    execute(message, args) {
        const member = message.mentions.members.first();
        message.channel.permissionOverwrites.get(member.user.id).delete();
    },
};