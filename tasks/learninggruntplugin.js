/*
 * learninggruntplugin
 * 
 *
 * Copyright (c) 2015 Sophia Yin
 * Licensed under the MIT license.
 */

'use strict';
var path =require('path');

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('learninggruntplugin', 'learning to set up grunt plugin with video', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      who: 'rabbit',
      commentSymbol: '//'
    });
    var textExitstRegexMap = {
      'rabbit': /┏-┓    ┏-┓/,
      'jiong': /┏━━━━━━┓/ 
    };
    var who = options.who,
        commentSymbol = options.commentSymbol,
        commentFilepathMap = {
          'rabbit': 'assets/rabbit.txt',
          'jiong': 'assets/jiong.txt'
        },
        commentFilePath = path.join(__dirname, commentFilepathMap[who]),
        commentContent = grunt.file.read(commentFilePath),
        lineCommentArr = commentContent.split(grunt.util.normalizelf('\n'));

    lineCommentArr.forEach(function(value, index, arr){
      arr[index] = commentSymbol + value;
    });

    commentContent = lineCommentArr.join(grunt.util.normalizelf('\n'));



    // Iterate over all specified file groups.
    this.files.forEach(function (file) {
      // Concat specified files.
      file.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function (filepath) {
        // Read file source.
        var originalFileContent = grunt.file.read(filepath),
            newFileContent = commentContent + grunt.util.normalizelf('\n') + originalFileContent;
        if(textExitstRegexMap[who].test(originalFileContent)){
          return;
        }
        grunt.file.write(filepath, newFileContent);
      });


      // Print a success message.
      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });

};
