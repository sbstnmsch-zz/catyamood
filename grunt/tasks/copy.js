module.exports = {
  app: {
    files: [
      {
        cwd: '<%= paths.src.images %>',
        src: '**/*',
        dest: '<%= paths.dist.images %>',
        expand: true
      },
      {
        cwd: '<%= paths.src.sounds %>',
        src: '**/*',
        dest: '<%= paths.dist.sounds %>',
        expand: true
      }
    ]
  }
};
