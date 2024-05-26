# @vxecli/import-unplugin-vue-components

用于 Vxe 系组件中使用 [unplugin-vue-components](https://www.npmjs.com/package/unplugin-vue-components) 来按需加载

## Insert

```shell
npm install unplugin-vue-components @vxecli/import-unplugin-vue-components
```

## Use

### vite

修改文件 vite.config

```javascript
// ...
import Components from 'unplugin-vue-components/vite'
import { VxeResolver } from '@vxecli/import-unplugin-vue-components'

export default defineConfig({
  plugins: [
    // ...,
    Components({
      resolvers: [
        VxeResolver({
          libraryName: 'vxe-table'
          // importStyle: true
        }),
        VxeResolver({
          libraryName: 'vxe-pc-ui'
          // importStyle: true
        })
      ]
    })
  ]
})
```

### webpack

修改文件 vue.config

```javascript
// ...
import Components from 'unplugin-vue-components/webpack'
import { VxeResolver } from '@vxecli/import-unplugin-vue-components'

export default defineConfig({
  plugins: [
    // ...,
    Components({
      resolvers: [
        VxeResolver({
          libraryName: 'vxe-table'
          // importStyle: true
        }),
        VxeResolver({
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
