Sample Repo Demonstrating error with next-transpile-modules

See nextjs config for options I played around with
https://github.com/max-pod/next-mdx-attempted-transpile-4/blob/b89156fc2cc386915b02ee883ddc14c20991fa15/next.config.js#L1

Testing our `yarn build`
Look at commit history to see tests

Attempted to use transpile to get:

```
Failed to compile.

./node_modules/next-mdx-remote/dist/serialize.js
Module not found: ESM packages (@mdx-js/mdx) need to be imported. Use 'import' to reference the package instead. https://nextjs.org/docs/messages/import-esm-externals

Import trace for requested module:
./node_modules/next-mdx-remote/serialize.js
./pages/posts/[slug].js

./node_modules/next-mdx-remote/dist/serialize.js
Module not found: ESM packages (vfile) need to be imported. Use 'import' to reference the package instead. https://nextjs.org/docs/messages/import-esm-externals

Import trace for requested module:
./node_modules/next-mdx-remote/serialize.js
./pages/posts/[slug].js

./node_modules/next-mdx-remote/dist/serialize.js
Module not found: ESM packages (vfile-matter) need to be imported. Use 'import' to reference the package instead. https://nextjs.org/docs/messages/import-esm-externals

Import trace for requested module:
./node_modules/next-mdx-remote/serialize.js
./pages/posts/[slug].js
```

Attempted to use esmExternals to get:

```
Error occurred prerendering page "/posts/example-post". Read more: https://nextjs.org/docs/messages/prerender-error
TypeError: _vfile.VFile is not a constructor
```

