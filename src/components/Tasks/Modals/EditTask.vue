<template>
   <q-card>
       
       <modal-header>Edit    Task</modal-header>
        
        <form @submit.prevent="submitForm">
            <q-card-section class="q-pt-none">
        
                <modal-task-name 
                :name.sync="taskToSubmit.name"
                ref="modalTaskName"/>

                <modal-due-date :date.sync="taskToSubmit.dueDate"/>
            
                <modal-due-time 
                    :time.sync="taskToSubmit.dueTime" 
                    :date="taskToSubmit.dueDate"/>

            </q-card-section>

            <modal-buttons/>
        
        </form>
    </q-card>
</template>

<script>
    import { mapActions } from 'vuex'
import ModalHeaderVue from './Shared/ModalHeader.vue';

    export default {
        props: ['task', 'id'],
        data() {
           return {
               taskToSubmit: {

               }
           }
       },
       methods: {
           ...mapActions('tasks', ['updateTask']),
           submitForm(){
               this.$refs.modalTaskName.$refs.name.validate();
               if (!this.$refs.modalTaskName.$refs.name.hasError) {
                   this.submitTask()
               }
           },
           submitTask(){
               this.updateTask({
                   id: this.id,
                   updates: this.taskToSubmit
               })
               this.$emit('close')
           }    
       },
       components: {
           'modal-header': require('components/Tasks/Modals/Shared/ModalHeader.vue').default,
           'modal-task-name': require('components/Tasks/Modals/Shared/ModalTaskName.vue').default,
           'modal-due-date': require('components/Tasks/Modals/Shared/ModalDueDate.vue').default,
           'modal-due-time': require('components/Tasks/Modals/Shared/ModalDueTime.vue').default,
           'modal-buttons': require('components/Tasks/Modals/Shared/ModalButtons.vue').default
       },
       mounted() {
           this.taskToSubmit = Object.assign({}, this.task)
       } 
    }
</script>

<style>

</style>