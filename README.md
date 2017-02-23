# Fifo

![Issues](https://img.shields.io/github/issues/fabiospampinato/fifo.svg)
[![NPM version](https://img.shields.io/npm/v/@fabiospampinato/fifo.svg)](https://www.npmjs.com/package/@fabiospampinato/fifo)

Simple FIFO queue implementation.

## Install

```shell
$ npm install --save @fabiospampinato/fifo
```

## Usage

```js
import FIFO from '@fabiospampinato/fifo';

const queue = new FIFO ();

queue.add ( 'foo' ).add ( 'bar' ).add ( 'baz' );

queue.next (); // foo
queue.next (); // bar
queue.next (); // baz
queue.next (); // undefined
```

## API

### `new FIFO ( queue? )`

Returns an instance of FIFO. If `queue` is passed the queue will be setted to that.

### `.get (): queue`

Returns the queue.

### `.next (): any`

Returns the next element in the queue.

### `.set ( queue: queue = [] ): this`

Sets the queue to `queue`.

### `.reset (): this`

Empties the queue.

### `.add ( element: any ): this`

Adds an element to the queue.

## License

MIT © Fabio Spampinato
