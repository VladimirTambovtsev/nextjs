const path = require('path')

/**
 * Create path alias at import:
 * replaces:
 *  import something from '../../../../something'
 * to:
 *  import something from '@/something'
 */
const defaultConfig = {
  webpack: config => {
    config.resolve.alias['@'] = path.resolve(__dirname)
    return config
  },
}

module.exports = defaultConfig
