<template>
  <q-route-tab
    :icon = "icon"
    :label = "title"
    :to = "link"
    exact
  >
  </q-route-tab>
</template>

<script>
export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
}
</script>
