let Singleton = require('./Singleton');

// singletonInstance 1 and 2 indicate same static private Singleton instance in the Class. 
let singletonInstance1 = Singleton.getInstance();
let singletonInstance2 = Singleton.getInstance();


let callSingletonConstructor = Singleton();
console.log(callSingletonConstructor); //undefined

singletonInstance1.addCount(); // 1
singletonInstance2.addCount(); // 2
singletonInstance1.addCount(); // 3

