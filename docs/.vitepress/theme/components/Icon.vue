<template>
  <component 
    :is="iconComponent" 
    v-if="iconComponent"
    :size="size || 20" 
    :stroke-width="strokeWidth || 2"
    class="lucide-icon"
    :style="{ color: resolvedColor }"
    v-bind="$attrs" 
  />
</template>

<script setup>
import { computed } from 'vue'
import * as icons from 'lucide-vue-next'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: [Number, String],
  strokeWidth: [Number, String],
  color: {
    type: String,
    default: 'base'
  }
})

const semanticColors = {
  base: 'var(--mivo-icon-base)',
  muted: 'var(--mivo-icon-muted)',
  primary: 'var(--mivo-icon-primary)',
  info: 'var(--mivo-icon-info)',
  success: 'var(--mivo-icon-success)',
  warning: 'var(--mivo-icon-warning)',
  danger: 'var(--mivo-icon-danger)'
}

const resolvedColor = computed(() => {
  return semanticColors[props.color] || props.color
})

const iconComponent = computed(() => {
  // Handle both PascalCase (Search) and kebab-case (search-icon)
  const pascalName = props.name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
  
  return icons[pascalName] || icons[props.name]
})
</script>

<style scoped>
.lucide-icon {
  display: inline-block;
  vertical-align: middle;
}
</style>
