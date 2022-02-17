module.exports = function (api) {
  api.cache(true);
  return {
  presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      ["module-resolver", {
        root: ["./src"],
        alias: {
          "@assets": "./src/assets",
          "@common": "./src/common",
          "@pages": "./src/app/pages",
          "@components": "./src/app/components",
          "@actioncreators": "./src/redux/actioncreators",
          "@reducers": "./src/redux/reducers",
          "@services": "./src/services"
        },
        extensions: [".ts", ".js", ".jsx", ".json"]
    }],
    ['@babel/plugin-proposal-export-namespace-from'],
  ],
  };
};
