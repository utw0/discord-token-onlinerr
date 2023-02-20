const Discord = require('discord-selfbot-bypass.js');
const wait = require('util').promisify(setTimeout);
let luhuxaskim = 0
let random = [
 "sex",
 "luhuxaskim",
 "selam arkadaşlar",
 "chatteeeeee",
 "selamm"
]

.forEach(async (token) => {
    
    const client = new Discord.Client()
    const client2 = new Discord.Client()//BÖYLE
    //
    client.login("Girdiğiniz Token Kanala Rasgele Yazı Yazar Bnu Coğaltabilirsin ctrl c ctrl v").catch(err => {})

    client.on('ready', async () => {


        setInterval(async () => {
            if(luhuxaskim === 50) luhuxaskim = 0;

            luhuxaskim++
            let randomize = random[Math.floor(Math.random() * random.length)];
            const channel = client.channels.get('YAZI KANALI')
            if(!channel) return;
            await wait(luhuxaskim * 3000)
            await channel.send(randomize).catch(err => {})

        }, 7500)

    })

})
//
process.on("uncaughtException", () => {
    return;
})
process.on("unhandledRejection", () => {
    return;
})
var items = ['Minecraft', 'Rust', 'VRChat', 'reeeee', 'MORDHAU', 'Fortnite', 'Apex Legends', 'Escape from Tarkov', 'Rainbow Six Siege', 'Counter-Strike: Global Offense', 'Sinner: Sacrifice for Redemption', 'Minion Masters', 'King of the Hat', 'Bad North', 'Moonlighter', 'Frostpunk', 'Starbound', 'Masters of Anima', 'Celeste', 'Dead Cells', 'CrossCode', 'Omensight', 'Into the Breach', 'Battle Chasers: Nightwar', 'Red Faction Guerrilla Re-Mars-tered Edition', 'Spellforce 3', 'This is the Police 2', 'Hollow Knight', 'Subnautica', 'The Banner Saga 3', 'Pillars of Eternity II: Deadfire', 'This War of Mine', 'Last Day of June', 'Ticket to Ride', 'RollerCoaster Tycoon 2: Triple Thrill Pack', '140', 'Shadow Tactics: Blades of the Shogun', 'Pony Island', 'Lost Horizon', 'Metro: Last Light Redux', 'Unleash', 'Guacamelee! Super Turbo Championship Edition', 'Brutal Legend', 'Psychonauts', 'The End Is Nigh', 'Seasons After Fall', 'SOMA', 'Trine 2: Complete Story', 'Trine 3: The Artifacts of Power', 'Trine Enchanted Edition', 'Slime-San', 'The Inner World', 'Bridge Constructor', 'Bridge Constructor Medieval', 'Dead Age', 'Risk of Rain', "Wasteland 2: Director's Cut", 'The Metronomicon: Slay The Dance Floor', 'TowerFall Ascension + Expansion', 'Nidhogg', 'System Shock: Enhanced Edition', 'System Shock 2', "Oddworld:New 'n' Tasty!", 'Out of the Park Baseball 18', 'Hob', 'Destiny 2', 'Torchlight', 'Torchlight 2', 'INSIDE', 'LIMBO', "Monaco: What's Yours Is Mine", 'Tooth and Tail', 'Dandara', 'GoNNER', 'Kathy Rain', 'Kingdom: Classic', 'Kingdom: New Lands', 'Tormentor X Punisher', 'Chaos Reborn', 'Ashes of the Singularity: Escalation', 'Galactic Civilizations III', 'Super Meat Boy', 'Super Hexagon', 'de Blob 2', 'Darksiders II Deathinitive Edition', 'Darksiders Warmastered Edition', 'de Blob', 'Red Faction 1', 'Dungeon Defenders'];
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();
client.login(`TOKEN`);
client.on('ready', () => {
	client.channels.get("SES").join()
    client.user.setStatus("idle");
    client.user.setActivity(items[Math.floor(Math.random() * items.length)], {
      });
})
client2.login(`TOKEN`);
client2.on('ready', () => {
	client2.channels.get("SES").join()
    client2.user.setStatus("idle");
    client2.user.setActivity(items[Math.floor(Math.random() * items.length)], {
      });
})
console.log("Girdimiştesesee")

//böyle böyle artırırsınız 


