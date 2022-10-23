const chalk = require('chalk');

const { log } = console;

class DatabaseService {
  static save(email, price, timestamp) {
    log(chalk.cyan.italic(`Running query: INSERT INTO orders VALUES
    (email, price, created) VALUES (${email}, ${price}, ${timestamp})`));
  }
}
module.exports = DatabaseService;
