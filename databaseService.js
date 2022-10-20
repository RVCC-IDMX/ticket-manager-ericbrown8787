const chalk = require('chalk');

const { log } = console;

class DatabaseService {
  static save(email, price, timestamp) {
    log(chalk.blue(`Running query: INSERT INTO orders VALUES
    (email, price, created) VALUES (${email}, ${price}, ${timestamp})`));
  }
}
module.exports = DatabaseService;
