// Declare indents array
let indents = [];

/**
 * Pushes new indent to array.
 * @param {Number} indent indent amount to push
 */
function push(indent) {
	// Throw exception if given argument is not a number
	if (typeof indent !== "number") {
		throw new Error("indent type must be number");
	}

	// Push new indent value to array
	indents.push(indent);
}

/**
 * Deletes and returns the last indent.
 */
function pop() {
	// Throw exception if there is no item to pop
	if (!indents.length) {
		throw new Error("there is no item to pop");
	}

	// Pop and return
	return indents.pop();
}

/**
 * Returns the total indent.
 */
function total() {
	return indents.reduce(function (a, b) {
		return a + b;
	}, 0);
}

/**
 * Returns count of indents.
 */
function count() {
	return indents.length;
}

// Module export
module.exports = {
	push: push,
	pop: pop,
	total: total,
	count: count
};
