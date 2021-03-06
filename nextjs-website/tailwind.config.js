module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'about-us': "url('/images/about-us-section.svg')",
        'people': "url('/images/people-bg.svg')",
        'footer': "url('/images/footer-bg.svg')",
        'slider-1': "url('/images/slider-img.jpg')",
        'engine': "url('/images/engine-parts.png')",
        'suspension': "url('/images/suspension-parts.png')",
        'brake': "url('/images/break-parts.png')",
        'exhaust': "url('/images/exhaust-parts.png')",
        'bodykit': "url('/images/body-kits.png')",
        'motor': "url('/images/motor-oils.png')",
        'steering': "url('/images/steering-parts.png')",
        'transmission': "url('/images/transmission-parts.jpg')",
        'prof': "url('/images/prof-image.svg')",
        'trap-black': "url('/images/trap-black.svg')",
        'trap-grey': "url('/images/trap-grey.svg')",
        'lp': "url('/images/light-products.jpg')",
        'tp': "url('/images/tire-products.jpg')",
        'bp': "url('/images/brake-products.jpg')",
        'gnf': "url('/images/gnf-header-image.png')",
        'gnf-freequote': "url('/images/free-quote.jpg')",
        'gnf-hd': "url('/images/cta-header.png')",
        'gnf-abstract1': "url('/images/abstract1.jpg')",
        'gnf-abstract2': "url('/images/abstract2.png')",
        'gnf-abstract3': "url('/images/testimonials.png')",
        'gnf-com-box': "url('/images/comment-box.png')",
        'uat-head': "url('/images/uat-header.jpg')",
        'uat-hive': "url('/images/hive-background.png')",
        'uat-hive2': "url('/images/uat-hive2.png')",
        'uat-deg': "url('/images/our-degrees.jpg')",
        'uat-hack': "url('/images/hacker.jpg')",
        'uat-grey': "url('/images/grey-uat.png')",
        'uat-request': "url('/images/request-background.jpg')",
        'yale-header': "url('/images/hive-header.jpg')",
        'pj-header-nav': "url('/images/pennyjuice-green-background.svg')",
        'pj-header': "url('/images/pj-fruit.png')",
        'pj-torn': "url('/images/green-torn-border.png')",
        'pj-w-cirle': "url('/images/white-circle.svg')",
        'paradise-slider': "url('/images/slide-paradise.jpg')",
        'paradise-trans': "url('/images/trans-pic.png')",
        'paradise-trans2': "url('/images/trans-pic2.png')",
        'paradise-property': "url('/images/property.jpg')",
        'lucas-header': "url('/images/lucas-building.jpg')",
        'lucas-top-header': "url('/images/top-lucas-trans.png')",
        'pm-header': "url('/images/pm-slider-image.jpg')",
        'pm-cut-btn-border': "url('/images/button-cut-border.png')",
        'pm-whatwedo': "url('/images/what-we-image.png')",
        'pm-ourservices': "url('/images/our-services-bg.png')",
        'pm-projects': "url('/images/projects-background.png')",
        'pm-industries': "url('/images/industries-bg.png')",
        'pm-team': "url('/images/ourteam-bg.jpg')",
        }),

      backgroundColor: theme => ({
        'as-grey': '#E1E2E2',
        'theme-color': '#1C1C1C',
        'ass-theme-color': '#E1E2E2',
        'ass-background-color': '#CACCC9',
        'ass-bgcolor-orange': '#FB8122',
        'ass-bgcolor-black': '#1D2228',
        'mgbd-red': '#EC221C',
        'mgbd-grey': '#2e2e2e',
        'gnf-primary': '#1B232A',
        'gnf-secondary': '#F9A34F',
        'uat-primary': '#1A1A1A',
        'yale-primary': '#FBE82D',
        'yale-grey': '#464646',
        'pj-orange': '#F07A18',
        'pj-orange-fruit': '#ED8E40',
        'pj-yellow-fruit': '#F8D25A',
        'pj-green-fruit': '#A5D15D',
        'pj-grey': '#E1E1E1',
        'pj-primary': '#F6F5FA',
        'pj-secondary': '#575757',
        'paradise-primary': '#F2B846',
        'paradise-primary-light': '#F8DBA2',
        'paradise-secondary': '#013953',
        'lucas-grey': '#AAAAAA',
        'lucas-blue': '#2D3A66',
        'pm-orange': '#FF6138',
        'pm-blue': '#141733',
      }),

      textColor: theme => ({
        'ass-primary': '#FB8122',
        'gnf-primary': '#F9A34F',
        'gnf-grey': '#999999',
        'mgbd-red':'#EC221C',
        'mgbd-grey': '#939292',
        'yale-grey': '#777777',
        'paradise-orange': '#F2B846',
        'paradise-grey': '#616161',
        'pm-orange': '#FF6138',
    }), 

      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
        '10xl': '8rem',
        '11xl': '9rem',
      },

      fontFamily:{
        'ass-modern': ['MOD20'],
        'ass-brittany': ['BrittanySignatureRegular, Brittany Signature'],
        'ass-raleway': ['Raleway'],
        'pj-varela' : ['Varela Round'],
        'pm-varela' : ['Varela Round'],
      },

      minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '4/6': '60%',
        '3/4': '75%',
        'full': '100%',
       },

      width:{
        '6per': '6%',
        '8per': '8%',
        '10per': '10%',
        '12per': '12%',
        '35per': '35%',
        '20per': '20%',
        '24' : '24rem',
        '20' : '20rem',
        '18' : '18rem',
      },

      height: {
        '1080xl': '67.5rem',
        '1/5': '20%',
        '24' : '24rem',
        '20' : '20rem',
        '18' : '18rem',
            }


    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
