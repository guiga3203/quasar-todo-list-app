import Vue from 'vue'
import { uid } from 'quasar'

const state = {
    tasks: {
        'ID1': {
            name: 'Go to Shop',
            completed: false,
            dueDate: '12/02/2020',
            dueTime: '19:32'
        },
        'ID2': {
            name: 'Get something',
            completed: false,
            dueDate: '15/12/2020',
            dueTime: '15:50'
        },
        'ID3': {
            name: 'Go to Shop',
            completed: false,
            dueDate: '10/01/2020',
            dueTime: '10:00'
        }
    }
}

const mutations = {
    updateTask(state, payload) {
        Object.assign(state.tasks[payload.id], payload.updates);
    },
    deleteTask(state, id) {
        Vue.delete(state.tasks, id);
    },
    addTask(state, payload){
        Vue.set(state.tasks, payload.id, payload.task);
    }
}

const actions = {
    updateTask({ commit }, payload) {
        commit('updateTask', payload);
    },
    deleteTask({ commit }, id){
        commit('deleteTask', id);
    },
    addTask({ commit }, task){
        let taskId = uid();
        let payload = {
            id: taskId,
            task: task
        }
        commit('addTask', payload);
    }
}

const getters = {
    tasksTodo: (state) =>{
        let tasks = {}
        Object.keys(state.tasks).forEach(function(key) {
            let task = state.tasks[key]
            if(!task.completed) {
                tasks[key] = task
            }
        })
        return tasks
    },
    tasksCompleted: (state) =>{
        let tasks = {}
        Object.keys(state.tasks).forEach(function(key) {
            let task = state.tasks[key]
            if(task.completed) {
                tasks[key] = task
            }
        })
        return tasks
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}