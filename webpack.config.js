module.exports = {
  mode: "development", // production, none
  entry: "./src/index.js", // defaults to './src'
  output: {
    path: __dirname+'/public',
    filename: "bundle.js"
  }
};
