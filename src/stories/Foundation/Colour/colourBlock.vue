<template>
  <div class="color-block" :key="id">
    <div
      :style="style"
      class="color-block--box"
    ></div>
    <div class="color-block--text">
      <p>{{ name }}</p>
      <p>{{ color }}</p>
    </div>
  </div>
</template>

<script>
import './colourBlock.scss';
import { reactive, computed } from 'vue';

export default {
  name: 'colour-block',
  props: {
    id: String,
    color: String,
    border: String,
    name: String,
  },

  setup(props, { emit }) {
    props = reactive(props);
    
    return {
      style: computed(() => ({
        backgroundColor: props.color,
        borderColor: props.border ? props.border : 'transparent',
      })),
    }
  },
  
}

</script>