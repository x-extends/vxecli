# @vxecli/import-vite-plugin-style-import

用于 Vxe 系组件中使用 [vite-plugin-style-import](https://www.npmjs.com/package/vite-plugin-style-import) 来按需加载

## Insert

```shell
npm install vite-plugin-style-import @vxecli/import-vite-plugin-style-import
```

## Use

### vite

修改文件 vite.config

```javascript
// ...
import { createStyleImportPlugin } from 'vite-plugin-style-import'
import { VxeResolve } from '@vxecli/import-vite-plugin-style-import'

export default defineConfig({
  plugins: [
    // ...,
    createStyleImportPlugin({
      resolves: [
        VxeResolve({
          libraryName: 'vxe-table'
          // importStyle: true
        }),
        VxeResolve({
          libraryName: 'vxe-pc-ui'
          // importStyle: true
        })
      ]
    })
  ]
})
```

## License

[MIT](LICENSE) © 2017-present, Xu Liangzhan
