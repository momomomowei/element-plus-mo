const fs = require('fs')
const path = require('path')

const modulesDir = path.join(__dirname, 'modules')
const COMPONENTS = {}

fs.readdirSync(modulesDir).forEach((file) => {
  if (file.endsWith('.js')) {
    // 文件名如 el-button.js => el-button
    const key = file.replace(/\.js$/, '')
    COMPONENTS[key] = require(`./modules/${file}`)
  }
})

module.exports = COMPONENTS
