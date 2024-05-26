import XEUtils from 'xe-utils'

export function VxeTableResolver (options?: {
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

const VxeTableComponentRE = /^Vxe(Table|Grid|Column|Colgroup|Toolbar)$/

function hasVxeTableComponent (name: string) {
  return name && name.match(VxeTableComponentRE)
}

export function VxeResolver (options: {
  /**
   * 包名
   */
  libraryName: 'vxe-table' | 'vxe-pc-ui'
  /**
   * 是否导入样式
   */
  importStyle?: boolean
}) {
  const opts = Object.assign({ importStyle: true }, options)
  const handleMaps = {
    'vxe-pc-ui': {
      type: 'component',
      resolve (name: string) {
        if (hasVxeTableComponent(name)) {
          return
        }
        const vxeRest = name.match(/^Vxe(\w+)$/)
        if (vxeRest) {
          const dirName = XEUtils.kebabCase(vxeRest[1])
          const path = `${opts.libraryName}/es`
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
    },
    'vxe-table': {
      type: 'component',
      resolve (name: string) {
        const vxeRest = name.match(VxeTableComponentRE)
        if (vxeRest) {
          const dirName = XEUtils.kebabCase(vxeRest[1])
          const path = `${opts.libraryName}/es`
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
  return handleMaps[opts.libraryName]
}

export default VxeTableResolver
