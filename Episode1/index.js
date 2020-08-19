const Discord = require("discord.js") // load discord.js module
const { config } = require("dotenv") // load dotenv module

// Create discord client
const client = new Discord.Client({
    disableMentions: "everyone"
})

config({
    path: __dirname + "/.env"
})

// When bot start, executed
client.on("ready", () => {
    console.log(`Started! ID: ${client.user.id}\nTAG: ${client.user.tag}`)

    // SET BOT STATUS
    client.user.setPresence({
        status:"online",
        activity: {
            name: "tutorialbot",
            type: "WATCHING"
        }
    })
})

// When send message, executed
client.on("message", async(message) => {
    console.log(`${message.author.tag}: ${message.content}`)
})

client.login(process.env.token).catch(e => console.log("INVALID TOKEN"))
