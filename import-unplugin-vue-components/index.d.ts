import { ComponentResolver } from 'unplugin-vue-components'

export default function loadResolver(options?: {
  /**
   * 是否导入样式
   */
  importStyle?: boolean
}): ComponentResolver
