const chalk = require('chalk');

const { log } = console;

class EmailService {
  static send(email) {
    log(chalk.green.italic(`Sending email to ${email}`));
  }
}

module.exports = EmailService;
