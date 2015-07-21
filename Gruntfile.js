
module.exports = function (grunt) {

  grunt.initConfig({

    mochaTest: {
      test: {
        options: {
          reporter: 'mocha-unfunk-reporter',
          timeout: 5000
        },
        src: [
          'tests/*.js'
        ]
      }
    },

    bump: {
      options: {
        files: ['package.json'],
        commit: true,
        commitFiles: ['package.json'],
        createTag: true,
        push: false,
      }
    },

    shell: {
      options: {
        stderr: true,
        stout: true
      },
      release: {
        command: 'npm publish'
      }
    }

  });

  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['mochaTest']);

  grunt.registerTask('release', ['mochaTest', 'bump', 'shell:release']);

};