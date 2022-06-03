require('dotenv').config();
const { Client, Intents, Collection } = require('discord.js');

const linkGrandeFamilia = 'https://www.youtube.com/watch?v=JtANtnDxEyk';
const linkMila = 'https://www.tiktok.com/@owo.mila/video/7104339955895291141';
const linkBia = 'https://www.youtube.com/c/Froid/videos';
const linkMari = 'https://www.youtube.com/results?search_query=como+formatar+pc';
const linkTati = '';
const coracao = '♥';
const linkBuga = 'https://twitch.tv/gamerbugadona';
const linkStark = 'https://www.twitch.tv/starksna_';
const linkAmeixa = '';
const linkTrivor = 'https://www.twitch.tv/trivorr';
const linkPhill = '';
const linkMadluga = 'https://www.twitch.tv/madluga';

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ],
});

['commands', 'aliases'].forEach(f => client[f] = new Collection());
['commands', 'events'].forEach(f => require(`./handlers/${f}`)(client));

client.on('ready', () => {
    console.log('o bot está no ar!');
});

client.on('messageCreate', (message) => {
    // se o autor da mensagem for um bot, retorna/cancela a função (evita loop/spam de mensagens)
    if (message.author.bot) return;
    //se a mensagem for ping, envia mensagem no canal mostrando o ping em ms
    if (message.content === 'ping') {
        message.channel.send(`Pong! O ping do bot é de estimados ${client.ws.ping} ms`)
    }
    if (message.content === 'guto') {
        message.channel.send(`salve gutinn, ja assistiu a musica da grande família hoje? lembra q é sexta mano! ${linkGrandeFamilia}`);
    }
    if (message.content === 'bia') {
        message.channel.send(`bodiaaa biaa, ja assistiu a musica nova do froid? ${linkBia}`);
    }
    if (message.content === 'mila') {
        message.channel.send(`bom dia milazinhaaa! tá ficando fera nas edits do tok tok hein!!! ${linkMila}`);
    }
    if (message.content === 'mari') {
        message.channel.send(`bom dia marizinhaaa! bó formatar um pc hoje?? KKKK ${linkMari}`);
    }
    if (message.content === 'tati') {
        message.channel.send(`bom dia tatiizinhaaa! bão bisurdo?  ${linkTati}`);
    }
    if (message.content === 'buga') {
        message.channel.send(`bom dia duozinhooo!  ${linkBuga}`);
    }
    if (message.content === 'stark') {
        message.channel.send(`aiin starkzinhuuu!  ${linkStark}`);
    }
    if (message.content === 'ameixa') {
        message.channel.send(`bom dia ameixaaa, como tá o stark?  ${linkAmeixa}`);
    }
    if (message.content === 'trivor') {
        message.channel.send(`aiin trivinhuuu!  ${linkTrivor}`);
    }
    if (message.content === 'phill') {
        message.channel.send(`saalve PhillZera radiante!  ${linkPhill}`);
    }
    if (message.content === 'madluga') {
        message.channel.send(`saalve Madluguinhaaa!  ${linkMadluga}`);
    }
    if (message.content === 'amo') {
        message.channel.send(`Amo você ${message.author}! ${coracao}`);
    }
    if (message.content === '.') {
        message.channel.send(`q?`);
    }
});

client.login(process.env.token);
