# @vxecli/import-vite-plugin-style-import

用于 vxe-table 中使用 [vite-plugin-style-import](https://www.npmjs.com/package/vite-plugin-style-import) 来按需加载

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
import VxeTableResolve from '@vxecli/import-vite-plugin-style-import'

export default defineConfig({
  plugins: [
    // ...,
    createStyleImportPlugin({
      resolves: [
        VxeTableResolve({
          // importStyle: false
        })
      ]
    })
  ]
})
```

## License

[MIT](LICENSE) © 2017-present, Xu Liangzhan
