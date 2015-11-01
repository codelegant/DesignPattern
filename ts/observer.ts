///<reference path="ObserverSubject.ts"/>
var controlCheckbox = <HTMLInputElement>document.getElementById("mainCheckbox"),
	addBtn = document.getElementById("btn_add"),
	container = document.getElementById("observers");
var AddNewObserver = function() {
	var check = document.createElement("input"),
		label = document.createElement("label"),
		text = document.createTextNode("New Checkbox");
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
ObserverSubject.extend(new ObserverSubject.Subject(), controlCheckbox);
controlCheckbox.onclick = function() {
	this.Notify(controlCheckbox.checked);
}
addBtn.onclick = AddNewObserver;

