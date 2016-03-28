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
Math.guid = function () {
    return 'xxxxxxxx-xxxx-4xxxx-yxxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    }).toUpperCase();
};


var Model = {
    records  : {},
    inherited: function () {
        console.log('inherited');
    },
    created  : function () {
        this.records = {};
    },
    prototype: {
        init     : function () {
            console.log('init');
        },
        newRecord: true,
        create   : function () {
            if (!this.id) this.id = Math.guid();
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
        }
    },
    find     : function (id) {
        if (!this.records[id]) throw('无此ID的记录');
        return this.records[id];

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
