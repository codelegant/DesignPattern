///<reference path="ObserverSubject.ts"/>
var controlCheckbox = <HTMLInputElement>document.getElementById("mainCheckbox"),
	addBtn = document.getElementById("btn_add"),
	container = document.getElementById("observers");

ObserverSubject.extend(new ObserverSubject.Subject(), controlCheckbox);

var AddNewObserver = function() {
	var check: HTMLInputElement = document.createElement("input"),
		label: HTMLLabelElement = document.createElement("label"),
		text: Text= document.createTextNode("New Checkbox");
	check.type = "checkbox";
	ObserverSubject.extend(new ObserverSubject.Observer(), check);
	check.Update = function(value) {
		this.checked = value;
	}
	controlCheckbox.AddObserver(check);

	label.appendChild(check);
	label.appendChild(text);
	container.appendChild(label);
}

controlCheckbox.onclick = function() {
	this.Notify(controlCheckbox.checked);
}
addBtn.onclick = AddNewObserver;

