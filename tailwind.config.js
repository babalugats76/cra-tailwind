module.exports = {
  purge: [],
  theme: {
    extend: {
      gridTemplateColumns: {
        // autosize grids
        "auto-min-w-180": "repeat(auto-fill, minmax(180px, 1fr))",
      },
      inset: {
        // add 50% as an option to positioning classes
        '1/2': '50%',
      },
      translate: {
        '-1/2': '-50%'
      }
    },
  },
  plugins: [],
};
