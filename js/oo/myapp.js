/**
 * Created by zzp on 11/7/16.
 */
var MYAPP = MYAPP || {};

MYAPP.commonMethod = {
    regExForName: "\\b[A-Z][a-z]+\\s[A-Z][a-z]+\\b",
    regExForPhone: "1[3-9][0-9]{9}]",
    validateName: function (name) {
        var regex = new RegExp(this.regExForName);
        return regex.test(name);
    },
    validatePhoneNo: function (phoneNo) {
        var regex = new RegExp(this.regExForPhone);
        return regex.test(phoneNo);
    }
};

MYAPP.event = {
    addListener: function (el, type, fn) {
        // do sth.
    },
    removeListener: function (el, type, fn) {
        // do sth.
    },
    getEvent: function (e) {
        // do sth.
    }
};


// use
function callback(e) {
    // do sth.
}
MYAPP.event.addListener("myEl", "myType", callback);