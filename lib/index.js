// Import util
const util = require("util");

// Import indent manager
const indentManager = require("./indent-manager");

/**
 * Joins given parameters and returns it.
 * @param {arguments} args arguments to join
 */
function join(args) {
	return util.format(...args);
}

function getPrefix() {
	return "\t".repeat(indentManager.count());
}

/**
 * Prints log message to console.
 */
function log() {
	// Call actual log message
	originalFunctions.log(getPrefix() + join(arguments));
}

/**
 * Prints error message to cosole.
 */
function error() {
	// Call actual error message
	originalFunctions.error(getPrefix() + join(arguments));
}

/**
 * Prints warn message to cosole.
 */
function warn() {
	// Call actual warn message
	originalFunctions.warn(getPrefix() + join(arguments));
}

/**
 * Prints info message to cosole.
 */
function info() {
	// Call actual info message
	originalFunctions.info(getPrefix() + join(arguments));
}

/**
 * Creates a output group.
 */
function group() {
	// Declare message
	let message = join(arguments) + ": {";

	// Print log
	log(message);

	// Increase indent
	indentManager.push(message.length);
}

/**
 * Deletes a output group.
 */
function groupEnd() {
	// Decrease indent
	indentManager.pop();

	// Print log
	log("}");
}

/**
 * Keeps attach state.
 */
var attached = false;

/**
 * Keeps original console functions.
 */
var originalFunctions = {
	log: null,
	error: null,
	warn: null,
	info: null,
	group: null,
	groupEnd: null
};

/**
 * Attachs the library.
 * After calling this method your console.group outputs will be pretty.
 */
function attach() {
	if (attached) {
		throw new Error("library is already attached");
	}

	// Store original console functions
	originalFunctions.log = console.log;
	originalFunctions.error = console.error;
	originalFunctions.warn = console.warn;
	originalFunctions.info = console.info;
	originalFunctions.group = console.group;
	originalFunctions.groupEnd = console.groupEnd;

	// Redirect console functions
	console.log = log;
	console.error = error;
	console.warn = warn;
	console.info = info;
	console.group = group;
	console.groupEnd = groupEnd;

	// Set attached flag to true
	attached = true;
}

/**
 * Detachs the library.
 * After calling this method your console.group outputs will be as original.
 */
function detach() {
	// Throw exception if library is already detached
	if (!attached) {
		throw new Error("library is already detached");
	}

	// Revert console functions
	console.log = originalFunctions.log;
	console.error = originalFunctions.error;
	console.warn = originalFunctions.warn;
	console.info = originalFunctions.info;
	console.group = originalFunctions.group;
	console.groupEnd = originalFunctions.groupEnd;

	// Delete stored original console functions
	originalFunctions.log = null;
	originalFunctions.error = null;
	originalFunctions.warn = null;
	originalFunctions.info = null;
	originalFunctions.group = null;
	originalFunctions.groupEnd = null;

	// Set attached flag to false
	attached = false;
}

/**
 * Module export.
 */
module.exports = {
	attach: attach,
	detach: detach
};
