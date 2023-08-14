<template>
  <i :class="bem.b()" :style="style" v-bind="$attrs">
    <slot />
  </i>
</template>

<script setup lang="ts">
import { useNamespace } from '@af-ui/hooks'
import { iconProps } from './icon'
import type { CSSProperties } from 'vue'
import { computed } from 'vue'
import { addUnit, isUndefined } from '@af-ui/utils'

defineOptions({
  name: 'AfIcon',
})
const props = defineProps(iconProps)
const bem = useNamespace('icon')

const style = computed<CSSProperties>(() => {
  if (!props.size && !props.color) return {}

  return {
    fontSize: isUndefined(props.size) ? undefined : addUnit(props.size),
    '--color': props.color, // 通过 CSS 变量方式进行设置 color
  }
})
</script>
