# node-console-pretty-group
better console.group

# Quick Start
To install this package and add it to your `package.json` execute following command.
You can remove `--save` argument if you don't want to save it as dependency for your package.
```
npm install console-pretty-group --save
```

# Enabling Package
To enable formatting for your console commands you need to attach package.
Execute following command to do this.
```
require("console-pretty-group").attach();
```

Also you can detach package with following command.
```
require("console-pretty-group").detach();
```

# Examples
After attaching the library you can start using it.

### Basic Usage
```
console.group("group 1");
console.log("test");
console.groupEnd();
```

#### This block will display this in your console,
```
group 1: {
	test
}
```

### Nested Usage
```
console.group("group 1");
console.group("group 2");
console.log("test");
console.log("test 2");
console.groupEnd();
console.groupEnd();
```

#### This block will display this in your console,
```
group 1: {
	group 2: {
		test
		test 2
	}
}
```

# Contribution
I think there is not much to add to this package but of course I'm welcome to pull requests.

Please make sure you read this before contributing,
[Contribution guidelines for this project](CONTRIBUTING.md)

## License
[MIT](LICENSE)
