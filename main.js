// Написать функцию throughOnce, которая ограничивает вызов функции, переданной как аргумент, через раз.

// Пример:


function throughOnce(fn) {
	let button = false;
	
	return function (text) {
  		button = !button;
  		if (button) return fn(text);
  }
}

var logThroughOnce = throughOnce(function(text) {
  console.log(text);
});

logThroughOnce("Hello World!"); // "Hello World!"
logThroughOnce("Hello World!"); //
logThroughOnce("Hello World!"); // "Hello World!"
logThroughOnce("Hello World!"); //

