let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

// userName = userName;  // give me error bcz unknow first check type also  // this is more restricted more than any

if (typeof userInput === "string") {
  userName = userInput;
}

// never : this tpye mostly use case for the error function like this
// this function not return any thing bcz the code cresh and not more execute
function generateError(message: string, code: number): never {
  throw {
    message,
    code,
  };
}

const result = generateError("An error occured", 500);
