const chalk = require('chalk');
const TicketManager = require('./ticketManager');
const EmailService = require('./emailService');
const DatabaseService = require('./databaseService');

const { log, error } = console;
const ticketManager = new TicketManager(3);
// const emailService = new EmailService();
// const databaseService = new DatabaseService();

const countBuyListeners = () => {
  log(chalk.blue.dim.italic(`We have ${ticketManager.listenerCount('buy')} listener(s) for the buy event`));
};

const countErrorListeners = () => {
  log(chalk.blue.dim.italic(`We have ${ticketManager.listenerCount('error')} listener(s) for the error event`));
};

const countListeners = () => {
  countBuyListeners();
  countErrorListeners();
  log('');
};

ticketManager.on('buy', (email, price, timestamp) => {
  EmailService.send(email);
  DatabaseService.save(email, price, timestamp);
  log('');
});

ticketManager.on('error', (err) => {
  error(`Gracefully handling our error: ${err}`);
});

countListeners();

const onBuy = () => {
  log(chalk.bold.redBright.inverse(' This is your listener speaking. I will be removed soon. '));
};

ticketManager.on('buy', onBuy);
log(chalk.bgHex('#66CC88').hex('#000000').bold(` We added a new event listener bringing our total count for the buy event to: ${chalk.bold(`${ticketManager.listenerCount('buy')} `)}`));

ticketManager.buy('test@email', 20);

// Removing a listener
ticketManager.off('buy', onBuy);
countListeners();

ticketManager.buy('test@email', 20);

// Removing all listeners for the buy event
ticketManager.removeAllListeners('buy');
countListeners();

ticketManager.buy('test@email', 20);

log(chalk.red.bold('The last ticket was bought'));
