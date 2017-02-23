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

## License

MIT © Fabio Spampinato
