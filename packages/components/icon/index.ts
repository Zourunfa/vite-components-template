import { withInstall } from '@af-ui/utils'
import Icon from './src/icon.vue'
// 通过 withInstall 方法给 Icon 添加了一个 install 方法
const AfIcon = withInstall(Icon)
export default AfIcon
// 导出 Icon 组件的 props
export * from './src/icon'
