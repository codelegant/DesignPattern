/**
 * Author:赖传峰
 * Email:laichuanfeng@hotmail.com
 */
if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        function F() {
        }

        F.prototype = o;
        return new F();
    }
}
var Model = {
    records  : {},
    inherited: function () {
        console.log('inherited');
    },
    created  : function () {
        console.log('created');
    },
    prototype: {
        init     : function () {
            console.log('init');
        },
        newRecord: true,
        create   : function () {
            this.newRecord = false;
            this.parent.records[this.id] = this;
        },
        destory  : function () {
            delete this.parent.records[this.id]
        },
        update   : function () {
            this.parent.records[this.id] = this;
        },
        save     : function () {
            this.newRecord ? this.create() : this.update();
        },
        find     : function (id) {
            if (!this.records[id]) throw('无此ID的记录');
            return this.records[id];

        }
    },
    create   : function () {
        var object = Object.create(this);
        object.parent = this;
        object.prototype = object.fn = Object.create(this.prototype);
        object.created();
        this.inherited(object);
        return object;
    },
    init     : function () {
        var instance = Object.create(this.prototype);
        instance.parent = this;
        instance.init.apply(instance, arguments);
        return instance;
    },
    extend   : function (o) {
        var extended = o.extended;
        jQuery.extend(this, o);
        if (extended) extended(this);
    },
    include  : function (o) {
        var included = o.included;
        jQuery.extend(this.prototype, o);
        if (included) included(this);
    }
};
