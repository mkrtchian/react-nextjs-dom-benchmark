const isProd = process.env.NODE_ENV === "production";

module.exports = {
  trailingSlash: true,
  assetPrefix: isProd ? '/react-nextjs-dom-benchmark/next' : '',
  basePath: isProd ? '/react-nextjs-dom-benchmark/next' : '',
}
