<template>
    <q-item 
        clickable
        :class = "!task.completed ? 'bg-grey-1' : 'bg-grey-6'"
        v-ripple
        @click = "updateTask({ id: id, updates: { completed: !task.completed } })">
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label
            :class="{ 'text-strikethrough' : task.completed }" > 
            {{task.name}} 
          </q-item-label>
        </q-item-section>

        <q-item-section 
            v-if="task.dueDate"
            side>
          <div class = "row">
            <div class = "column justify-center">
              <q-icon 
                name = "event" 
                size = "18px" 
                class = "q-mr-xx"/>
            </div>
              <div class = "column">  
              <q-item-label 
                caption 
                class = "row justify-end"> 
                {{task.dueDate}} 
              </q-item-label>
              <q-item-label 
                caption 
                class = "row justify-end"> 
                {{task.dueTime}} 
              </q-item-label>
            </div>
          </div>
        </q-item-section>
        
        <q-item-section side> 
            <div class="row">
              <q-btn
                @click.stop="promptToDelete(id)"
                dense 
                round color="black" 
                icon="delete" 
              />
              <q-btn
                @click.stop="showEditTask = true"
                dense 
                round color="black" 
                icon="edit" 
              />
            </div>
        </q-item-section>

      <q-dialog v-model="showEditTask">
        <edit-task @close="showEditTask = false" :task="task" :id="id"/>
      </q-dialog>

      </q-item>
</template>

<script>
    import { mapActions } from 'vuex'
export default {
    props: ['task', 'id', 'pdateTask'],
    data() {
      return{
        showEditTask: false
      }
    },
    methods: {
        ...mapActions('tasks', ['updateTask', 'deleteTask']),
        
        promptToDelete(id){
            this.$q.dialog({
                dark: true,
                title: 'Confirm',
                message: 'Would you like to delete this task?',
                cancel: true,
                persistent: true
            }).onOk(() => {
                this.deleteTask(id)
            }).onCancel(() => {

            })
        }
    },
    components: {
      'edit-task': require('components/Tasks/Modals/EditTask.vue').default
    }
}
</script>

<style>

</style>