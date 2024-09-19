module.exports = {
  pageExtensions: ["tsx"],
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
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
