var controlCheckbox = document.getElementById("mainCheckbox"),
    addBtn          = document.getElementById("btn_add"),
    container       = document.getElementById("observers");
// 具体目标，用Subject扩展controlcheckbox
extend(new Subject(), controlCheckbox);

// 目标将指定的属性广播出去,触发通知到观察者上。
controlCheckbox.onclick = function () {
    this.Notify(controlCheckbox.checked)
};
//controlCheckbox.onclick=new Function("this.Notify(controlCheckbox.checked)");
addBtn.onclick = AddNewObserver;

//具体观察者
function AddNewObserver() {
    var check = document.createElement("input"),
        label = document.createElement("label"),
        text  = document.createTextNode("New Checkbox");
    check.type = "checkbox";
    // 用Oberver类扩展checkbox
    extend(new Observer(), check);

    check.Update = function (value) {
        console.info(value);
        this.checked = value;
    };
    // 为主subject的观察者列表添加新的观察者
    controlCheckbox.AddObserver(check);

    label.appendChild(check);
    label.appendChild(text);
    container.appendChild(label);
}
