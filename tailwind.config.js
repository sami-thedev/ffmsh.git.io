module.exports = {
  mode:"jit",
  content: ['./public/**/*.html','.public/**/*.js'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('../public/images/school.jpg')",
     },
    
      colors:{
        new:'#0005',
          primary:'#FF6363',
          foot:'#333',
          
      }
    },
  },
  plugins: [],
}
