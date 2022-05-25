<template>
  <div class="lato-text" :class="[typeClass, weightClass]">
    Lato {{type ? type.replaceAll('-', ' ') : ''}}
  </div>
</template>

<script>
import './typography.scss';

export default {
  name: 'lato-text-block',

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
      typeClass: `lato-text--${this.type}`,
      weightClass: `lato-text--${this.type}_${this.weight}`
    }
  }
}
</script>