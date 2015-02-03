# learninggruntplugin

> learning to set up grunt plugin with video

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install learninggruntplugin --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('learninggruntplugin');
```

## The "learninggruntplugin" task

### Overview
In your project's Gruntfile, add a section named `learninggruntplugin` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  learninggruntplugin: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.who
Type: `String`
Default value: `rabbit`

A string value that is used to determine which we use to add as the header for js files.

#### options.commentSymbol
Type: `String`
Default value: `//`

A string value that is used to determine which symbol is added between string picture.

### Usage Examples

#### Default Options


```js
grunt.initConfig({
  learninggruntplugin: {
    options: {
      'who': 'rabbit',
      'commentSymbol': '//' 
    },
    dist: ['examples/*js']
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
2015-2-3 &nbsp;&nbsp;&nbsp;&nbsp;v0.0.1&nbsp;&nbsp;&nbsp;init

## License
Copyright (c) 2015 Sophia Yin. Licensed under the MIT license.
