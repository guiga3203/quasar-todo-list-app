<template>
  <div class="row q-mb-sm">
        <q-input
            clearable
            clear-icon = "close"
            label = "Due Date" 
            outlined
            @input = "$emit('update:date', $event)" 
            :value = "date" 
            class = "col"
        >
            <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy>
                        <q-date 
                            :value="date" 
                            @input = "$emit('update:date', $event)" 
                        />
                    </q-popup-proxy>
                </q-icon>
            </template>
        </q-input>
    </div>
</template>

<script>
    export default {
        props: ['date']
    }
</script>

<style>

</style>