/* IMPORT */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* FIFO */
var FIFO = (function () {
    /* CONSTRUCTOR */
    function FIFO(queue) {
        this.set(queue);
    }
    /* GET */
    FIFO.prototype.get = function () {
        return this.queue;
    };
    FIFO.prototype.next = function () {
        return this.get().splice(0, 1)[0];
    };
    /* SET */
    FIFO.prototype.set = function (queue) {
        if (queue === void 0) { queue = []; }
        this.queue = queue;
        return this;
    };
    /* RESET */
    FIFO.prototype.reset = function () {
        return this.set([]);
    };
    /* ADD */
    FIFO.prototype.add = function (element) {
        this.queue.push(element);
        return this;
    };
    return FIFO;
}());
/* EXPORT */
exports.default = FIFO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsWUFBWTs7O0FBSVosVUFBVTtBQUVWO0lBTUUsaUJBQWlCO0lBRWpCLGNBQWMsS0FBYTtRQUV6QixJQUFJLENBQUMsR0FBRyxDQUFHLEtBQUssQ0FBRSxDQUFDO0lBRXJCLENBQUM7SUFFRCxTQUFTO0lBRVQsa0JBQUcsR0FBSDtRQUVFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBRXBCLENBQUM7SUFFRCxtQkFBSSxHQUFKO1FBRUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUcsQ0FBQyxNQUFNLENBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXhDLENBQUM7SUFFRCxTQUFTO0lBRVQsa0JBQUcsR0FBSCxVQUFNLEtBQWlCO1FBQWpCLHNCQUFBLEVBQUEsVUFBaUI7UUFFckIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFbkIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUVkLENBQUM7SUFFRCxXQUFXO0lBRVgsb0JBQUssR0FBTDtRQUVFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFHLEVBQUUsQ0FBRSxDQUFDO0lBRXpCLENBQUM7SUFFRCxTQUFTO0lBRVQsa0JBQUcsR0FBSCxVQUFNLE9BQU87UUFFWCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBRyxPQUFPLENBQUUsQ0FBQztRQUU1QixNQUFNLENBQUMsSUFBSSxDQUFDO0lBRWQsQ0FBQztJQUVILFdBQUM7QUFBRCxDQUFDLEFBeERELElBd0RDO0FBRUQsWUFBWTtBQUVaLGtCQUFlLElBQUksQ0FBQyJ9