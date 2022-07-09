module.exports = {
  presets: [ 
    '@babel/preset-env',
    '@babel/presect-typescript', 
    ['@babel/preset-react', {
      runtime: 'automatic'
    }]
  ]
}