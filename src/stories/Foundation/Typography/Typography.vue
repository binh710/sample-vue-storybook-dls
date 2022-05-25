<template>
  <div class="lato-text" :class="[activeClass, errorClass]">
    Lato {{type ? type.replaceAll('-', ' ') : ''}}
  </div>
</template>

<script>
import './typography.scss';

export default {
  name: 'typography',

  props: {
    type: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      activeClass: `lato-text--${this.type}`,
      errorClass: `lato-text--${this.type}_${this.weight}`
    }
  }
}
</script>