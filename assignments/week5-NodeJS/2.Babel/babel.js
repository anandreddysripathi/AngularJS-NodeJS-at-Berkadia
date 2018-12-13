// Babel is a tool that helps to write code in the latest version of JavaScript.
//  When supported environments don't support certain features natively,
//   Babel will help compile those features down to a supported version.

// $ npm install --global babel-cli
// Babel 6 ships without any default transforms,
//  so when you run Babel on a file it will just print it back out to you without changing anything.

// In order to start compiling various features you need to install plugins.
//  For example if you want to use arrow functions:

// First install the arrow functions plugin:

// $ npm install --save-dev babel-plugin-transform-es2015-arrow-functions

// ES2015 arrow function
[1, 2, 3].map((n) => n + 1);