const chalk = require('chalk');
const TicketManager = require('./ticketManager');

const { log } = console;
const ticketManager = new TicketManager(10);

ticketManager.on('buy', () => { log(chalk.green('Someone bought a ticket!')); });
