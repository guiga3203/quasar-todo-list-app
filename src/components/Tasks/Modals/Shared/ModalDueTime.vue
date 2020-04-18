<template>
  <div 
                v-if="date"
                class="row q-mb-sm">
                <q-input 
                    clearable
                    clear-icon="close"
                    label="Due Time"
                    outlined
                    @input = "$emit('update:time', $event)" 
                    :value="time" 
                    class="col"
                >
                    <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer">
                            <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <q-time 
                            :value="time" 
                            @input = "$emit('update:time', $event)" 
                        />
                    </q-popup-proxy>
                </q-icon>
            </template>
        </q-input>
    </div>
</template>

<script>
    export default {
        props: ['time', 'date']
    }
</script>

<style>

</style>