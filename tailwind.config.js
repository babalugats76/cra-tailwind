module.exports = {
  purge: [],
  theme: {
    extend: {    
      borderRadius: {
        'xl': '1rem',
      },
      fontFamily : {
        'hind': '"Hind", sans-serif',
        'lexend-deca': '"Lexend Deca", sans-serif',
      }, 
      fontSize: {
        'md': '0.9375rem'
      },
      gridTemplateColumns: {
        // autosize grids
        "auto-min-w-180": "repeat(auto-fill, minmax(180px, 1fr))",
      },
      inset: {
        // add 50% as an option to positioning classes
        "1/2": "50%",
      },
      lineHeight: {
        'extra-tight': '1.125',
      },
      spacing: {
        "7": "1.75rem",
      },
      textColor: {
        'inherit': 'inherit',
      },
      translate: {
        "-1/2": "-50%",
      },
    },
  },
  plugins: [],
};
