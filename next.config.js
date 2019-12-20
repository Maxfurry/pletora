require("dotenv").config();

const withCSS = require("@zeit/next-css");

const { APP_GOOGLE_KEY } = process.env;

const envVariables = {
  APP_GOOGLE_KEY: APP_GOOGLE_KEY
};

module.exports = withCSS({
  distDir: "_next",
  webpack: function(config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          name: "[name].[ext]"
        }
      }
    });
    return config;
  },
  env: { ...envVariables }
});
