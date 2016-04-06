var ObserverSubject;
(function (ObserverSubject) {
  var Observer = (function () {
    function Observer() {
    }

    Observer.prototype.Update = function (value) {
    };
    return Observer;
  })();
  ObserverSubject.Observer = Observer;
  var ObserverList = (function () {
    function ObserverList() {
      this.observerList = [];
    }

    ObserverList.prototype.Add = function (obj) {
      return this.observerList.push(obj);
    };
    ObserverList.prototype.Empty = function () {
      this.observerList = [];
    };
    ObserverList.prototype.Count = function () {
      return this.observerList.length;
    };
    ObserverList.prototype.Get = function (index) {
      if (index > -1 && index < this.observerList.length) {
        return this.observerList[index];
      }
    };
    ObserverList.prototype.Insert = function (obj, index) {
      var pointer = -1;
      if (index === 0) {
        this.observerList.unshift(obj);
        pointer = index;
      }
      else if (index === this.observerList.length) {
        this.observerList.push(obj);
        pointer = index;
      }
      return pointer;
    };
    ObserverList.prototype.IndexOf = function (obj, startIndex) {
      var i = startIndex, pointer = -1;
      while (i < this.observerList.length) {
        if (this.observerList[i] === obj) {
          pointer = i;
        }
        i++;
      }
      return pointer;
    };
    ObserverList.prototype.RemoveIndexAt = function (index) {
      if (index === 0) {
        this.observerList.shift();
      }
      else if (index === this.observerList.length) {
        this.observerList.pop();
      }
      else {
        this.observerList.splice(index, 1);
      }
      return this.observerList;
    };
    return ObserverList;
  })();
  ObserverSubject.ObserverList = ObserverList;
  var Subject = (function () {
    function Subject() {
      this.observers = new ObserverList();
    }

    Subject.prototype.AddObserver = function (observer) {
      this.observers.Add(observer);
    };
    Subject.prototype.RemoverObserver = function (observer) {
      this.observers.RemoveIndexAt(this.observers.IndexOf(observer, 0));
    };
    Subject.prototype.Notify = function (context) {
      var observerCount = this.observers.Count();
      for (var i = 0; i < observerCount; i++) {
        this.observers.Get(i).Update(context);
      }
    };
    return Subject;
  })();
  ObserverSubject.Subject = Subject;
  function extend(obj, extension) {
    for (var key in obj) {
      try {
        extension[key] = obj[key];
      }
      catch (e) {
        console.error(e);
      }
    }
    return extension;
  }

  ObserverSubject.extend = extend;
})(ObserverSubject || (ObserverSubject = {}));
