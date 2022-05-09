const withTM = require('next-transpile-modules')(['next-mdx-remote']);

module.exports = withTM({
  experimental: {
    // esmExternals: 'loose'
  }
});