<template>
    <div class = "row q-mb-sm">
        <q-input
            clearable
            clear-icon = "close"
            autofocus 
            outlined 
            @input = "$emit('update:name', $event)"
            :rules = "[val => !!val || 'Field is required']"
            ref = "name"
            :value = "name"
            label = "Task name" 
            class = "col"
        />
    </div>
</template>

<script>
    export default {
        props: ['name']
    }
</script>

<style>

</style>