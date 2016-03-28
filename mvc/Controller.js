/**
 * Author:赖传峰
 * Email:laichuanfeng@hotmail.com
 */
(function ($, exports) {
    var mod = function (includes) {
        if (includes) this.include(includes);
    };
    console.log(mod);
    mod.fn = mod.prototype;
    mod.fn.proxy = function (func) {
        return $.proxy(func, this);
    };
    mod.fn.load = function (func) {
        return $($.proxy(func));
    };
    mod.fn.include = function (ob) {
        $.extend(this, ob);
    };
    exports.Controller = mod;
})(jQuery, window);