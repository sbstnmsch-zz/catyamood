module.exports = {
  app: {
    options: {
      basePath: "dist/",
      network: ["http://*"],
      timestamp: true
    },
    src: [
      "assets/images/**/*.jpg",
      "assets/sounds/**/*.wav"
    ],
    dest: "<%= paths.dist.default %>/catyamood.appcache"
  }
};
