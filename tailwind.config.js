/** @type {import('tailwindcss').Config} */

const _ =require('lodash')
const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode:'class',
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        btn:'#32445a',
        twitter:'#1da1f2',
        php:'#787CB4',
        bootstrap: '#8913FC',
        react:'#61DAFB',
        js:'#F7DF1E',
        nodejs:'#75B160',
        css:'#254BDD',
        html:'#E44D26'
        
      },
      spacing:{
        '15':'3.75rem'
      }
    },
  },
  plugins: [
    plugin(function({addUtilities,theme,e}){
      const calcUltities= _.map(theme('spacing'), (value, key) => {
        return{
          [`.${e(`calc-h-full-${key}`)}`]:{
            height:`calc(100% - ${value})`
          },
          [`.${e(`calc-w-full-${key}`)}`]:{
            width:`calc(100% - ${value})`
          }
        }
      })

      addUtilities(calcUltities, {
        varriants:['responsive', 'hover'],
      })
    })
  ],
}
