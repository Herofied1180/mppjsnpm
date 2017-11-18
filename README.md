# mppjsnpm

# How to install:

- First create your Node.js folder

- Run npm init

- Run npm install --save mpp.js

- Require it and your done!

# How to create an MPP bot:

- First install the library

- Insert this code into your index.js:
```js
const MPP = require("mpp.js");
```

- Use this example code to help

```js
const MPP = require("mpp.js");

MPP.client.on("a", function(msg){
  // Prefix
  var p = "!";
	var args = msg.a.split(" ");
	var cmd = args[0].toLowerCase();
	args = args.slice(1);
  
  // Commands
  if (cmd = p+"test"){
    MPP.chat.send("Hey, we're testing here!");
  }
}
```
The above code will say "Hey, we're testing here!" in chat whenever you run the command !test.

# Complete Docs:

- Coming Soon...
