const bot = require('./src/bot')
const web = require('./src/web')

const loggy = require('loggy')
const mongoose = require('mongoose')

function start() {
    console.clear()

    mongoose.connect('mongodb+srv://baragas:321@cluster0.4tsahds.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        loggy.success(`Database connection established`);
    }).catch((e) => {
        loggy.error(`No database connection: ${e}`);
    })

    bot.launch().then(() => {
        loggy.success(`The bot was successfully launched`)
    }).catch((r) => {
        loggy.error(`The bot is not running: ${r}`)
    })

    web.listen(3000, () => loggy.success('The general backend was successfully launched'))
}

start()