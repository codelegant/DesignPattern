module ObserverSubject {
	export class Observer {
		Update(value) { }
	}
	export class ObserverList {
		private observerList: Observer[];
		constructor() {
			this.observerList = [];
		}
		Add(obj: Observer): number {
			return this.observerList.push(obj);
		}
		Empty(): void {
			this.observerList = [];
		}
		Count(): number {
			return this.observerList.length;
		}
		Get(index: number): Observer {
			if (index > -1 && index < this.observerList.length) {
				return this.observerList[index];
			}
		}
		Insert(obj: Observer, index: number): number {
			var pointer = -1;
			if (index === 0) {
				this.observerList.unshift(obj);
				pointer = index;
			} else if (index === this.observerList.length) {
				this.observerList.push(obj);
				pointer = index;
			}
			return pointer;
		}
		IndexOf(obj: Observer, startIndex: number): number {
			var i = startIndex, pointer = -1;
			while (i < this.observerList.length) {
				if (this.observerList[i] === obj) {
					pointer = i;
				}
				i++
			}
			return pointer;
		}
		RemoveIndexAt(index: number): Observer[] {
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
	export class Subject {
		private observers: ObserverList;
		constructor() {
			this.observers = new ObserverList();
		}
		AddObserver(observer: Observer): void {
			this.observers.Add(observer);
		}
		RemoverObserver(observer: Observer): void {
			this.observers.RemoveIndexAt(this.observers.IndexOf(observer, 0));
		}
		Notify(context: Object) {
			var observerCount = this.observers.Count();
			for (var i = 0; i < observerCount; i++) {
				this.observers.Get(i).Update(context);
			}
		}
	}
	export function extend<T, U>(obj: T, extension: U) {
		for (var key in obj) {
			try {
				extension[key] = obj[key];
			} catch (e) {
				console.error(e);
			}
		}
		// Object.keys(obj).forEach((key) => {
		// 	extension[key] = obj[key];
		// });
		return extension as T & U;
	}
}