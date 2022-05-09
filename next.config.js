const withTM = require('next-transpile-modules')(['@mdx-js/mdx','next-mdx-remote']);

module.exports = withTM({
  experimental: {
    // esmExternals: 'loose'
  }
});