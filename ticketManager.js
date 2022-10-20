const EventEmitter = require('events');

class TicketManager extends EventEmitter {
  constructor(supply) {
    super();
    this.supply = supply;
  }

  buy(email, price) {
    this.supply -= 1;
    this.emit('buy', email, price, Date.now());
  }
}

module.exports = TicketManager;
