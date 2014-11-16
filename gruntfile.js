module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'public/stylesheets/master.css' : 'public/stylesheets/master.scss'
        }
      }
    },
    watch: {
      ejs: {
        files: ['**/*.html', '**/*.css'],
        options: {
          livereload: true,
        }
      },
      scss: {
        files: ['**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['watch']);
  
}