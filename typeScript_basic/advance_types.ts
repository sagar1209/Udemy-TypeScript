// & intersaction type  // both are required

type Admin = {
    name: string;
    privileges: string[];
  };
  
  type Employee = {
    name: string;
    startDate: Date;
  };
  
  // interface ElevatedEmployee extends Admin , Employee
  type ElevatedEmployee = Admin & Employee;
  
  const e1: ElevatedEmployee = {
    name: "sagar",
    privileges: ["create-server"],
    startDate: new Date(),
  };
  
  type Combinable = string | number;
  type Numeric = number | boolean;
  
  type Universal = Combinable & Numeric;
  
  // const sagar : Universal = 'max'  // can not work
  
  //  type Guards
  
  type unknownEmployee = Employee | Admin;
  
  function printEmployeeInformation(emp: unknownEmployee) {
    console.log("name : " + emp.name);
    if ("privileges" in emp) console.log("privileges : " + emp.privileges);
    if ("startDate" in emp) console.log("startDate : " + emp.startDate);
  }
  
  printEmployeeInformation(e1);
  
  class Car {
    drive() {
      console.log("driving car...");
    }
  }
  class Truck {
    drive() {
      console.log("driving a Truck");
    }
    loadCargo(amount: number) {
      console.log("loading Cargo" + amount);
    }
  }
  
  const v1 = new Car();
  const v2 = new Truck();
  
  type Vehicle = Car | Truck;
  
  function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) vehicle.loadCargo(20);
  }
  
  useVehicle(v2);
  
  interface Bird {
    type: "bird";
    flyingSpeed: number;
  }
  interface Hourse {
    type: "hourse";
    runningSpeed: number;
  }
  
  type Animal = Bird | Hourse;
  
  function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
      case "bird":
        speed = animal.flyingSpeed;
        break;
      case "hourse":
        speed = animal.runningSpeed;
    }
    console.log("moving at speed : " + speed);
  }
  
  moveAnimal({ type: "bird", flyingSpeed: 20 });
  
  // const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
  const userInputElement = document.getElementById("user-input");
  
  if (userInputElement) {
    (userInputElement as HTMLInputElement).value = "hyy";
  }
  
  //  error
  interface ErrorContainer {
    [prop: string]: string;
  }
  
  const errorBag: ErrorContainer = {
    email: "not a valid Email",
    username: "Must start a capital character",
  };
  
  function add(a: number, b: number): number;
  function add(a: string, b: string): string;
  function add(a: Combinable, b: Combinable) {
    if (typeof a === "string" || typeof b === "string") {
      return a.toString() + b.toString();
    }
    return a + b;
  }
  
  const result = add("max", "min");
  result.split(" ");
  
  // option chaining
  
  const fecheduserData = {
    name : "sagar",
    job : {
      title :"CEO",
      discription : "My own Company"
    }
  }
  
  console.log(fecheduserData?.job?.title);   // in javascript work like if anytime give me undefined so not more execute
  
  // nulish operator ??
  
  const userInput = null;
  
  console.log(userInput ?? "defalut") // null or undefined comes that time print defalut