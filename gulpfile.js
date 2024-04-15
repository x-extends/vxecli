const gulp = require('gulp')
const del = require('del')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const rename = require('gulp-rename')
const replace = require('gulp-replace')
const sourcemaps = require('gulp-sourcemaps')
const merge = require('merge-stream')
const ts = require('gulp-typescript')
const pack = require('./package.json')
const tsconfig = require('./tsconfig.json')

const demandPlugins = ['import-vite-plugin-style-import', 'import-unplugin-vue-components']

gulp.task('build_clean', () => {
  return del(demandPlugins.map(name => `${name}/dist`))
})

gulp.task('build_demand_ts', () => {
  return merge(
    demandPlugins.map(pluginName => {
      return gulp.src(`${pluginName}/index.d.ts`)
        .pipe(rename({
          basename: 'index',
          extname: '.d.mts'
        }))
        .pipe(gulp.dest(`${pluginName}/dist`))
        .pipe(rename({
          basename: 'index',
          extname: '.d.cts'
        }))
        .pipe(gulp.dest(`${pluginName}/dist`))
    })
  )
})

gulp.task('build_demand_cli', gulp.series('build_clean', () => {
  return merge(
    demandPlugins.map(pluginName => {
      return gulp.src(`${pluginName}/index.ts`)
        .pipe(ts(tsconfig.compilerOptions))
        .pipe(rename({
          basename: 'index',
          extname: '.mjs'
        }))
        .pipe(gulp.dest(`${pluginName}/dist`))
        .pipe(babel({
          presets: ['@babel/env'],
          plugins: [['@babel/plugin-transform-modules-commonjs']]
        }))
        .pipe(rename({
          basename: 'index',
          extname: '.cjs'
        }))
        .pipe(gulp.dest(`${pluginName}/dist`))
        .pipe(babel({
          presets: ['@babel/env'],
          plugins: [['@babel/transform-modules-umd']]
        }))
        .pipe(rename({
          basename: 'index',
          extname: '.js'
        }))
        .pipe(gulp.dest(`${pluginName}/dist`))
    })
  )
}))

gulp.task('build_import_cli', gulp.series('build_demand_cli', 'build_demand_ts'))
