const chalk = require('chalk');
const TicketManager = require('./ticketManager');

const { log } = console;
const ticketManager = new TicketManager(10);

ticketManager.on('buy', () => { log(chalk.green('Someone bought a ticket!')); });
ticketManager.once('buy', () => {
  log(chalk.cyanBright('This is only called once'));
});
ticketManager.buy('test@email.com', 20);
ticketManager.buy('test@email.com', 20);

ticketManager.once('buy', () => {
  log(chalk.cyanBright('This is only called once'));
});
