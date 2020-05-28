module.exports = {
    name: "role",
    description: "",
    args: true,
    execute(client, message, args) {
        const list_of_roles = message.guild.roles.cache.map(roles => roles.name);
        const array = args.filter(role => list_of_roles.includes(role));

        const roles = message.guild.roles.cache.filter((role) => array.includes(role.name));
        const member = message.mentions.members.first();
        member.roles.add(roles);
    },
};