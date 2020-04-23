const Discord = require('discord.js');
const { players } = require('../config.json');
const { inspect } = require("util");
const owners = ["413539001140772867","396025342411669515","301600695776313344"]
const owner = "396025342411669515"

module.exports.run = async (client, message, args) => {
    if(!players.includes(message.author.id)) return message.reply(" you are not the bot owner!").then(msg => msg.delete({timeout: 5000}))
        try {
            let toEval = args.join(" ")
            let evaluated = inspect(eval(toEval, { depth: 0 }));
            console.log(toEval)
            message.delete()
            if (!toEval) {
                return message.channel.send(`Error while evaluating: Cannot evaluate \`air\``);
            } else {
                let hrStart = process.hrtime()
                let hrDiff;
                hrDiff = process.hrtime(hrStart);
                return message.channel.send(`*Executed in ${hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ``}${hrDiff[1] / 1000000}ms.*\n\`\`\`javascript\n${evaluated}\n\`\`\``, { maxLength: 1900 })
            }
            
        } catch (e) {
            console.log(e)
            return message.channel.send(`Error while evaluating: \`${e.message}\``);
        }

      } 
    


module.exports.config = {
    command: "eval",
}