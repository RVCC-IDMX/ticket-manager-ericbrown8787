const chalk = require('chalk');

const { log } = console;

class EmailService {
  static send(email) {
    log(chalk.magenta(`Sending email to ${email}`));
  }
}

module.exports = EmailService;
