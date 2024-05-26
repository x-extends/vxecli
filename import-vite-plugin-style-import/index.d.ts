import { Lib } from 'vite-plugin-style-import'

/**
 * 请使用 VxeResolve({ libraryName: 'vxe-table' })
 * @deprecated
 * @param options
 */
export function VxeTableResolve(options?: {
  /**
   * 是否导入样式
   */
  importStyle?: boolean
}): Lib

/**
 * 按需加载 Vxe 组件
 */
export function VxeResolve(options: {
  /**
   * 包名
   */
  libraryName: 'vxe-table' | 'vxe-pc-ui'
  /**
   * 是否导入样式
   */
  importStyle?: boolean
}): Lib

export default VxeTableResolve
