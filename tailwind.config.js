module.exports = {
  purge: [],
  theme: {
    extend: {
      backgroundColor: {
        success: {
          '100': '#0AFF6C',
          '200': '#00F562',
          '300': '#00E05A',
          '400': '#00CC52',
          '500': '#00B849',
          '600': '#00A341',
          '700': '#008F39',
          '800': '#007A31',
          '900': '#006629'
        },
      },
      borderOpacity: {
        10: '0.1',
      },
      borderRadius: {
        xl: '0.75rem',
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        neutral: {
          light: 'var(--color-neutral-light)',
          default: 'var(--color-neutral)',
        },
        'theme-indigo': 'var(--color-indigo)',
        'theme-blue': 'var(--color-blue)',
        'theme-teal': 'var(--color-teal)',
        'theme-purple': 'var(--color-purple)',
      },
      fontFamily: {
        hind: '"Hind", sans-serif',
        'lexend-deca': '"Lexend Deca", sans-serif',
        montserrat: 'Montserrat, sans-serif',
      },
      fontSize: {
        md: '0.9375rem',
        'base-em': '1em',
      },
      inset: {
        // add 50% as an option to positioning classes
        '1/2': '50%',
      },
      lineHeight: {
        'extra-tight': '1.125',
      },
      spacing: {
        '0-em': '0',
        'xs-em': '0.125em',
        '1-em': '0.25em',
        '2-em': '0.5em',
        '3-em': '0.75em',
        '4-em': '1em',
        '5-em': '1.25em',
        '6-em': '1.5em',
        '7-em': '1.75em',
        '8-em': '2em',
        '10-em': '2.5em',
        '12-em': '3em',
        '16-em': '4em',
        '20-em': '5em',
        xs: '0.125rem',
        sm: '0.375rem',
        7: '1.75rem',
      },
      textColor: {
        inherit: 'inherit',
      },
      translate: {
        '-1/2': '-50%',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  plugins: [],
};
