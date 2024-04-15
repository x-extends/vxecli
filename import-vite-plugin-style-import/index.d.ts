import { Lib } from 'vite-plugin-style-import'

export default function loadResolver(options?: {
  /**
   * 是否导入样式
   */
  importStyle?: boolean
}): Lib
