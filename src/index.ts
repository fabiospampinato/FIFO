
/* IMPORT */

import {queue} from './types';

/* FIFO */

class FIFO {

  /* PROPERTIES */

  queue: queue;

  /* CONSTRUCTOR */

  constructor ( queue?: queue ) {

    this.set ( queue );

  }

  /* GET */

  get (): queue {

    return this.queue;

  }

  next () {

    return this.get ().splice ( 0, 1 )[0];

  }

  /* SET */

  set ( queue: queue = [] ): this {

    this.queue = queue;

    return this;

  }

  /* RESET */

  reset (): this {

    return this.set ( [] );

  }

  /* ADD */

  add ( element ): this {

    this.queue.push ( element );

    return this;

  }

}

/* EXPORT */

export = Object.assign ( FIFO, { default: FIFO } );
