module.exports = {
  pageExtensions: ["tsx"],
  output: "export",
  webpack: (
    config,
    {
      buildId,
      dev,
      isServer,
      defaultLoaders,
      webpack,
    }
  ) => {
    config.module.rules.push(
      ...[
        {
          test: /\.yml$/,
          type: "json",
          use: "yaml-loader",
        },
        {
          test: /\.svg$/,
          use: "@svgr/webpack",
        },
      ]
    );
    return config;
  },
};
