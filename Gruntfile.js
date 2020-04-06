module.exports = function (grunt) {
    grunt.initConfig({
      htmlmin: {
        options: {
          removeComments: true, 
          collapseWhitespace: true
        },
        files: {
          src:'index.html',
          dest:'dist/index.html'
        }
      },
      cssmin: {
        'dist/nodepad.css':'nodepad.css'
      },
      uglify: {
         'dist/nodepad.js':'nodepad.js'
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.registerTask('release', ['uglify','cssmin','htmlmin']);
};