///<reference path="ObserverSubject.ts"/>
var controlCheckbox = document.getElementById("mainCheckbox"), addBtn = document.getElementById("btn_add"), container = document.getElementById("observers");
//ObserverSubject.extend(new ObserverSubject.Subject(), controlCheckbox);
var controlCheckboxExtend = ObserverSubject.extend(new ObserverSubject.Subject(), controlCheckbox);
var AddNewObserver = function () {
    var check = document.createElement("input"), label = document.createElement("label"), text = document.createTextNode("New Checkbox");
    check.type = "checkbox";
    var checkExtend = ObserverSubject.extend(new ObserverSubject.Observer(), check);
    checkExtend.Update = function (value) {
        this.checked = value;
    };
    controlCheckboxExtend.AddObserver(checkExtend);
    label.appendChild(checkExtend);
    label.appendChild(text);
    container.appendChild(label);
};
controlCheckboxExtend.onclick = function () {
    this.Notify(controlCheckboxExtend.checked);
};
addBtn.onclick = AddNewObserver;
