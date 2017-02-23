import { queue } from './types';
declare class FIFO {
    queue: queue;
    constructor(queue?: queue);
    get(): queue;
    next(): any;
    set(queue?: queue): this;
    reset(): this;
    add(element: any): this;
}
export default FIFO;
