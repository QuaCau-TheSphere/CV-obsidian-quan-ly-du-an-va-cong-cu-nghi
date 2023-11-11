---
created: 2023-07-22T12:07
updated: 2023-10-06T16:09
---
Imagine a robot is playing a music:

- The JavaScript code would be the music notes to the robot.
- TheJavaScript engine would be the robot which can understand the notes and act on it.
- The JavaScript runtime would be the instruments the robot can use in order to play the music.

Imagine a robot is putting out a fire:

- The JavaScript code would be the instructions to the robot to put out a fire.
- The JavaScript engine would be the robot which can understand the instructions and act on it.
- The JavaScript runtime would be the fire truck, and the water gun.

---

Unlike C and other compiled languages, Javascript runs in a container - a program that reads your js codes and runs them. This program must do two things

- parse your code and convert it to runnable commands
- provide some objects to javascript so that it can interact with the outside world.

The first part is called Engine and the second is Runtime.

For example, the Chrome Browser and node.js use the same Engine - V8, but their Runtimes are different: in Chrome you have the `window`, DOM objects etc, while node gives you `require`, Buffers and processes.

---

## Javascript Runtime Environment

1. **Provide various features/API's to build Javascript based software.**
2. It also includes a JS Engine(Interpreter + JIT compiler(for optimization purpose)).

_Here is the List of Runtime Environments_

- **Browser**: Provides **DOM** API, **Fetch** API, Timer(**setTimeout & setInterval**), Storage(like Local Storage) etc.

> _Example: Chrome, Firefox, Safari, Opera, Edge_ etc

- **Server Environment**: Provides **File System** Access, **Network** Access, Console etc.

> _Example: NodeJS, Deno_

- **Desktop Environment**: Provides **GUI API**, **File System** Access, **Network** Access, Console etc.

> _Example: Electron etc._

- **Mobile Environment**:

> _Example: NativeScript, Ionic, PhoneGap, React Native etc_

## _NOTE: Event Loop is implemented in **Runtime Environment**_

---

---

## Javascript Engine(Interpreter/JIT compiler(for optimization purpose))

---

1. **Converts your Javascript code into machine language/code so that your computer(CPU) will execute it :)**

_Here is the List of Engines_

- **Chrome V8** : From Google

> _Used In: Used in Chrome Browser, NodeJS & in android based mobiles_

- **SpiderMonkey** : From Mozilla

> _Used In: Used in Firefox Browser_

- **Nitro / JavascriptCore** : From Apple

> _Used In: Used in Safari Browser & in iOS based mobiles_

- **Chakra & CharkraCore** : From Microsoft

> _Used In: Used in Microsoft Edge Browser_

---

---

[Excellent Link for More Infomation](http://dolszewski.com/javascript/javascript-runtime-environment/)

Nguồn:: [[Stack Overflow]], [What is the difference between JavaScript Engine and JavaScript Runtime Environment - Stack Overflow](https://stackoverflow.com/questions/29027845/what-is-the-difference-between-javascript-engine-and-javascript-runtime-environm)
