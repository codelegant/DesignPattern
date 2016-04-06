function ObserverList() {
  this.observerList = [];
}

ObserverList.prototype = {
  Add: function (obj) {
    return this.observerList.push(obj);
  },
  Empty: function () {
    this.observerList = [];
  },
  Count: function () {
    return this.observerList.length;
  },
  Get: function (index) {
    if (index > -1 && index < this.observerList.length) {
      return this.observerList[index];
    }
  },
  Insert: function (obj, index) {
    var pointer = -1;
    if (index === 0) {
      this.observerList.unshift(obj);
      pointer = index;
    } else if (index === this.observerList.length) {
      this.observerList.push(obj);
      pointer = index;
    }
    return pointer;
  },
  IndexOf: function (obj, startIndex) {
    var i = startIndex, pointer = -1;
    while (i < this.observerList.length) {
      if (this.observerList[i] === obj) {
        pointer = i;
      }
      i++
    }
    return pointer;
  },
  RemoveIndexAt: function (index) {
    if (index === 0) {
      this.observerList.shift();
    } else if (index === this.observerList.length) {
      this.observerList.pop();
    } else {
      this.observerList.splice(index, 1);
    }
    return this.observerList;
  }
}
function extend(obj, extension) {
  for (var key in obj) {
    try {
      extension[key] = obj[key];
    } catch (e) {
      console.error(e);
    }
  }
}

// The Subject
function Subject() {
  this.observers = new ObserverList();
}
Subject.prototype = {
  AddObserver: function (observer) {
    this.observers.Add(observer);
  },
  RemoveObserver: function (observer) {
    this.observers.RemoveIndexAt(this.observers.indexOf(observer, 0));
  },
  Notify: function (context) {
    var observerCount = this.observers.Count();
    for (var i = 0; i < observerCount; i++) {
      this.observers.Get(i).Update(context);
    }
  }
}

// The Observer
function Observer() {
  this.Update = function (value) {
  }
}