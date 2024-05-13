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

export default VxeTableResolve
