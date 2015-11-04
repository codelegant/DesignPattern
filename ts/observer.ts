///<reference path="ObserverSubject.ts"/>
var controlCheckbox = <HTMLInputElement>document.getElementById("mainCheckbox"),
	addBtn = document.getElementById("btn_add"),
	container = document.getElementById("observers");

//ObserverSubject.extend(new ObserverSubject.Subject(), controlCheckbox);
var controlCheckboxExtend = ObserverSubject.extend<ObserverSubject.Subject, HTMLInputElement>(new ObserverSubject.Subject(), controlCheckbox);

var AddNewObserver = function() {
	var check: HTMLInputElement = document.createElement("input"),
		label: HTMLLabelElement = document.createElement("label"),
		text: Text = document.createTextNode("New Checkbox");
	check.type = "checkbox";
	var checkExtend = ObserverSubject.extend<ObserverSubject.Observer, HTMLInputElement>(new ObserverSubject.Observer(), check);
	checkExtend.Update = function(value) {
		this.checked = value;
	}
	controlCheckboxExtend.AddObserver(checkExtend);

	label.appendChild(checkExtend);
	label.appendChild(text);
	container.appendChild(label);
}

controlCheckboxExtend.onclick = function() {
	this.Notify(controlCheckboxExtend.checked);
}
addBtn.onclick = AddNewObserver;

