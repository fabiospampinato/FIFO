
/* IMPORT */

import * as _ from 'lodash';
import {describe} from 'ava-spec';
import FIFO from '../dist';
import {entryExtra, queue} from './mocks';

/* FIFO */

describe ( 'FIFO', it => {

  it.beforeEach ( t => {

    t.context.F = new FIFO ( _.cloneDeep ( queue ) );

  });

  describe ( 'constructor', it => {

    it ( 'Creates an empty queue array', t => {

      const F = new FIFO ();

      t.deepEqual ( [], F.get () );

    });

    it ( 'Sets the provided queue array', t => {

      t.deepEqual ( queue, t.context.F.get () );

    });

  });

  describe ( 'get', it => {

    it ( 'Gets the entire queue array', t => {

      t.deepEqual ( queue, t.context.F.get () );

    });

  });

  describe ( 'next', it => {

    it ( 'Returns the next element to precess in the queue', t => {

      const queueClone = _.cloneDeep ( t.context.F.get () );

      queueClone.forEach ( entry => t.deepEqual ( entry, t.context.F.next () ) );

    });

    it ( 'Returns undefined if the queue array is empty', t => {

      t.context.F.reset ();

      t.is ( t.context.F.next (), undefined );

    });

  });

  describe ( 'set', it => {

    it ( 'Replaces the current queue array with a provided one', t => {

      const F = new FIFO ();

      F.set ( _.cloneDeep ( queue ) );

      t.deepEqual ( queue, F.get () );

    });

  });

  describe ( 'reset', it => {

    it ( 'Replace the current queue array with an empty one', t => {

      t.context.F.reset ();

      t.deepEqual ( [], t.context.F.get () );

    });

  });

  describe ( 'add', it => {

    it ( 'Adds an action to the queue array', t => {

      t.context.F.add ( entryExtra );

      t.deepEqual ( queue.concat ( entryExtra ), t.context.F.get () );

    });

  });

});
