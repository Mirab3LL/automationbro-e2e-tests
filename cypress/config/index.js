const dotenv = require('dotenv')

dotenv.config()

const TARGET = process.env.TARGET || 'prod'

module.exports = {
  TARGET,
  env: require(`./env/${TARGET}.json`)
}
