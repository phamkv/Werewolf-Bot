module.exports = {
    name: "role",
    description: "",
    args: true,
    execute(message, args) {
        const role = message.guild.roles.cache.find(role => role.name === "Lulu");
        const member = message.mentions.members.first();
        member.roles.add(role);
    },
};