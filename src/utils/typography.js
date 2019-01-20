import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Source Sans Pro'],
  bodyFontFamily: ['Source Sans Pro', 'sans-serif'],
  googleFonts: [
    {
      name: 'Source Sans Pro',
      styles: [
        '400',
        '600',
        '700'
      ],
    },
  ],
})

export default typography
