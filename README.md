[Adding Tailwind CSS to Create-React-App CRA](https://blog.abykal.me/adding-tailwind-css-to-create-react-app-cra-ck6ci0phe00b83cs1pm931x06)

In addition to the above, the following packages need to be installed configure 
advanced postcss capabilites:

* `npm install postcss-preset-env`
* `npm install postcss-simple-vars`

Then the `post.config.js` needs to be adjusted to reflect something like this:

```
module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("postcss-preset-env")({
      stage: 0,
      features: {
        "nesting-rules": true
      },
    }),
    require("postcss-simple-vars"),
  ],
};
```

Here is a great resource to explore the features of `postcss-preset-env`:

[postcss-preset-env](https://preset-env.cssdb.org/)