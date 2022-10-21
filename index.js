const TicketManager = require('./ticketManager');
const EmailService = require('./emailService');
const DatabaseService = require('./databaseService');

const ticketManager = new TicketManager(3);
// const emailService = new EmailService();
// const databaseService = new DatabaseService();

ticketManager.on('buy', (email, price, timestamp) => {
  EmailService.send(email);
  DatabaseService.save(email, price, timestamp);
});

ticketManager.on('error', (error) => {
  console.error(`Gracefully handling our error: ${error}`);
});

ticketManager.buy('test@email.com', 10);
ticketManager.buy('test@email.com', 10);
ticketManager.buy('test@email.com', 10);
ticketManager.buy('test@email.com', 10);
ticketManager.buy('test@email.com', 10);
