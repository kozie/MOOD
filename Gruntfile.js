module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    typescript: {
      base: {
        src: ['src/main.ts'],
        dest: 'dist/mood.js'
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/mood.min.js': ['<%= typescript.base.dest %>']
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          hostname: '*',
          keepalive: true
        }
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Register tasks
  grunt.registerTask('default', ['typescript', 'uglify']);
  grunt.registerTask('go', ['default', 'connect']);
};
