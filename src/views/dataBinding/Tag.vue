<template>
  <div>
    <div>
      {{ htmlString }}
    </div>
    <div v-html="htmlString"></div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      htmlString: '<p style="color:red;">This is a red String.</p>'
    };
  },
  setup() {
  },
  create() {
  },
  mounted() {
  },
  unmounted() {
  },
  methods: {}
}
</script>

<style>

</style>