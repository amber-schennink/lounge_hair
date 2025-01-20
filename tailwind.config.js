/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      width: {
      'miniImagesZaak': 'calc(25% - 3px)',
      },
      height: {
        '15' : '60px'
      },
      transitionProperty: {
        'max-height': 'max-height',
        'max-heightPadding': 'max-height, padding',
        'rotate' : 'rotate'
      },
      colors: {
        'mainYellow' : '#fbbf24'
      },
      backgroundColor: {
        'bgGray' : '#252724',
        'mainGray' : '#131414',
        'lightGray' : '#474b46'
      },
      fontSize: {
        '2.5xl': ['1.6875rem', {
          lineHeight: '2.125rem',
        }],
        '0.5xl': ['22px', {
          lineHeight: '30px',
        }]
      },
      borderWidth: {
        '3' : '3px'
      },
      margin: {
        'mainSide' : '100px',
        'tabletSide' : '75px',
        'mobileSide' : '50px'
      },
      padding: {
        'mainSide' : '100px',
        'tabletSide' : '75px',
        'mobileSide' : '50px'
      },
      screens: {
        'ssm': {'max': '374px'},
        'sm': {'max': '767px'},
        'smMd': {'max': '1023px'},
        'md': {'min': '768px', 'max': '1023px'},
        'mdLg': {'min': '768px'},
        'lg': {'min': '1024px'},
        'xl': {'min': '1280px', 'max': '1535px'},
        '2xl': {'min': '1536px'},
      },
    },
  },
  plugins: [],
}

