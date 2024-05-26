import { ComponentResolver } from 'unplugin-vue-components'

/**
 * 请使用 VxeResolver({ libraryName: 'vxe-table' })
 * @deprecated
 * @param options
 */
export function VxeTableResolver(options?: {
  /**
   * 是否导入样式
   */
  importStyle?: boolean
}): ComponentResolver

/**
 * 按需加载 Vxe 组件
 */
export function VxeResolver(options: {
  /**
   * 包名
   */
  libraryName: 'vxe-table' | 'vxe-pc-ui'
  /**
   * 是否导入样式
   */
  importStyle?: boolean
}): ComponentResolver

export default VxeTableResolver
