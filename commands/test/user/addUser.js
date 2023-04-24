const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('agregar-usuario')
        .setDescription('Agrega un usuario a nuestro bot!'),
    async execute(interaction) {
        await interaction.reply('Chao!');
    },
};