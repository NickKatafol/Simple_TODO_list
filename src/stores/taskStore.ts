import { ref, computed} from 'vue'
import { defineStore } from 'pinia'
import { Task, type ITask } from '@/Types/types'
import { initialData } from '@/assets/data/initialData'

export const useTaskStore = defineStore('counter', () => {
  const taskList = ref<Task[]>([])

  function addTask(text: string) {
    taskList.value.push(new Task(taskList, text))
  }

  function initTaskList() {
    if(!taskList.value.length)
    for(let item of initialData) {
      addTask(item.text)
    }
  }

  const doneCount = computed(() => (taskList.value.filter(item => item.isDone)).length)




  return { taskList, addTask, initTaskList, doneCount }
})
