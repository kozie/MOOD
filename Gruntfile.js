module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    typescript: {
      base: {
        src: ['src/main.ts'],
        dest: 'dist/mood.js'
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-typescript');

  // Register tasks
  grunt.registerTask('default', ['typescript']);

};
