import type Icon from '@af-ui/components/icon'

// For this project development
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    AfIcon: typeof Icon
  }
}

export {}
