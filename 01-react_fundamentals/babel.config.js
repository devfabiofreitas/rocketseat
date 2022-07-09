module.exports = {
  presets: [ 
    '@babel/preset-env', 
    ['@babel/preset-react' '@babel/presect-typescript', {
      runtime: 'automatic'
    }]
  ]
}