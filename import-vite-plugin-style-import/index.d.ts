import { Lib } from 'vite-plugin-style-import'

export function VxeTableResolve(options?: {
  /**
   * 是否导入样式
   */
  importStyle?: boolean
}): Lib

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
