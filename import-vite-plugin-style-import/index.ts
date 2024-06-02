export function VxeTableResolve (options?: {
  /**
   * 是否导入样式
   */
  importStyle?: boolean
}) {
  const opts = Object.assign({ importStyle: true }, options)
  const conf: {
    ensureStyleFile: boolean
    libraryName: string
    esModule: boolean
    resolveStyle?: (name: string) => string
  } = {
    ensureStyleFile: true,
    libraryName: 'vxe-table',
    esModule: true
  }
  if (opts.importStyle) {
    conf.resolveStyle = (name: string) => {
      return `vxe-table/es/${name}/style.css`
    }
  }
  return conf
}

export function VxeResolve (options: {
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
  const conf: {
    ensureStyleFile: boolean
    libraryName: string
    esModule: boolean
    resolveStyle?: (name: string) => string
  } = {
    ensureStyleFile: true,
    libraryName: opts.libraryName,
    esModule: true
  }
  if (opts.importStyle) {
    conf.resolveStyle = (name: string) => {
      return `${opts.libraryName}/es/${name}/style.css`
    }
  }
  return conf
}

const ImportPlugin = {
  VxeTableResolve,
  VxeResolve
}

export default ImportPlugin
