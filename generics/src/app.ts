function add(a: number) {
    return a;
  }
  
  const names: Array<string> = [];
  
  const promises: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello");
    }, 2000);
  });
  
  promises.then((data) => {
    console.log(data);
  });
  
  function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
    return Object.assign(objA, objB);
  }
  
  const mergeObj = merge({ name: "sagar", Hobbies: ["sports"] }, { age: 20 });
  console.log(mergeObj.name);
  
  // console.log(merge({ name: "sagar" }, { age: 20 }));
  
  interface lengthy {
    length: number;
  }
  
  function countAndDescribe<T extends lengthy>(element: T): [T, string] {
    let description = "get no value";
    if (element.length === 1) {
      description = "get 1 element";
    } else if (element.length > 1) {
      description = `get ${element.length} elements`;
    }
    return [element, description];
  }
  
  console.log(countAndDescribe("hyy there"));
  
  function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
  ) {
    return "value : " + obj[key];
  }
  
  console.log(extractAndConvert({ name: "sagar", age: 20 }, "name"));
  
  class DataStore<T extends number|string|boolean> {
    private data: T[] = [];
    addItem(item: T) {
      this.data.push(item);
    }
    removeItem(item: T) {
      this.data.splice(this.data.indexOf(item), 1);
    }
    getItem() {
      return this.data;
    }
  }
  
  const testStorage = new DataStore<string>();
  testStorage.addItem("maxi");
  // testStorage.addItem(89);  // error
  testStorage.addItem("mini");
  testStorage.removeItem("mini");
  
  console.log(testStorage.getItem());
  
  
  const testStorage1 = new DataStore<number>()
  // const testStorage2 = new DataStore<object>()  // !!errror\
  
  