import XEUtils from 'xe-utils'

export function loadResolver (options?: {
  importStyle?: boolean
}) {
  const opts = Object.assign({ importStyle: true }, options)
  return {
    type: 'component',
    resolve (name: string) {
      const vxeRest = name.match(/^Vxe(\w+)$/)
      if (vxeRest) {
        const dirName = XEUtils.kebabCase(vxeRest[1])
        const path = 'vxe-table/es'
        const conf: {
          name: string
          from: string
          sideEffects?: string | string[]
        } = {
          name,
          from: `${path}/${dirName}/index.js`
        }
        if (opts.importStyle) {
          conf.sideEffects = `${path}/${dirName}/style.css`
        }
        return conf
      }
    }
  }
}

export default loadResolver
