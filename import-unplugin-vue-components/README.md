# @vxecli/import-unplugin-vue-components

用于 vxe-table 中使用 [unplugin-vue-components](https://www.npmjs.com/package/unplugin-vue-components) 来按需加载

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
import VxeTableResolver from '@vxecli/import-unplugin-vue-components'

export default defineConfig({
  plugins: [
    // ...,
    Components({
      resolvers: [
        VxeTableResolver()
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
import VxeTableResolver from '@vxecli/import-unplugin-vue-components'

export default defineConfig({
  plugins: [
    // ...,
    Components({
      resolvers: [
        VxeTableResolver()
      ]
    })
  ]
})
```

## License

[MIT](LICENSE) © 2017-present, Xu Liangzhan
