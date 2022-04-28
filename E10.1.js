var myLib = {
	math: {
		real: {
			add: function (a, b) {/*code goes here*/ },
			sub: function (a, b) {/*code goes here*/ },
			mul: function (a, b) {/*code goes here*/ }
		},
		complex: {
			Num: function (real, img) {/*code goes here*/ },
			add: function (a, b) { /*code goes here*/ },
			sub: function (a, b) { /*code goes here*/ },
			mul: function (a, b) { /*code goes here*/ }
		},
		matrix: {
			add: function (a, b) { /*matrix addition*/ },
			sub: function (a, b) { /*matrix subtraction*/ },
			mul: function (a, b) { /*matrix multiplication*/ },
			eye: function (size) { /*identity matrix*/ },
			dot: function (m, a) { /*dot product*/ },
			times: function (a, b) { /*element-wise multiplication*/ }
		}
	}
};

var answer = myLib.math.real.sub(
	myLib.math.real.add(20, 22),
	myLib.math.real.mul(2, 5));

//Simplifying  using "with" statement
with (myLib.math.real) {
	answer = sub(add(20, 22), mul(2, 5));
}

//Simplifying without using "with" statement
var a = myLib["math"]["real"];
answer = a.sub(a.add(20, 22), a.mul(2, 5));

var ans = myLib.math.matrix.times(
	myLib.math.matrix.eye(4),
	myLib.math.complex.sub(
		new myLib.math.complex.Num(
			myLib.math.real.add(5, 2),
			-3),
		new myLib.math.complex.Num(3, 4)
	)
);

//Simplifying using "with" statement
with (myLib.math) {
	ans = matrix.times(
		matrix.eye(4),
		complex.sub(
			new complex.Num(
				real.add(5, 2),
				-3),
			new complex.Num(3, 4)
		)
	);
}

//Simplifying without using "with" statement
var b = myLib["math"]["matrix"];
var c = myLib["math"]["complex"];
ans = b.times(b.eye(4),
	c.sub(
		new c.Num(
			a.add(5, 2), -3),
		new c.Num(3, 4)
	)
);
