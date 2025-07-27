<script setup lang="ts">
import { useTaskStore } from '@/stores/taskStore';
import { storeToRefs } from 'pinia';
import { ref, computed, type Ref } from 'vue';


const store = useTaskStore()
const { taskList } = storeToRefs(store)

store.initTaskList()

const newTaskTextBuffer = ref<string>('')
const newTaskText = computed({
  get() {
    return newTaskTextBuffer.value
  },
  set(val: string) {
    newTaskTextBuffer.value = val
    if (val)
      isAlert.value = false
  }
})

const isAlert = ref<boolean>(false)

const inputPlaceholder = 'Enter a new task'

function onAddTask() {
  if (!newTaskTextBuffer.value) {
    isAlert.value = true
    return
  }

  store.addTask(newTaskTextBuffer.value)
  newTaskTextBuffer.value = ''
}

function onItemHolderForDelete(ev: any) {
  if (ev.target?.dataset?.index) {
    const index: number = +ev.target.dataset.index
    taskList.value[index].deleteSelf_binded()
  }
}


</script>

<template>
  <div class="font-bold uppercase text-center text-2xl py-4">
    things to do:
  </div>

  <div class="w-full px-12 border-t-1 border-solid border-t-gray-300 py-4" @click="onItemHolderForDelete">
    <div v-for="(item, ind) of taskList" :key="item.id" v-memo="[item.isDone]" class="flex items-center justify-between"
      v-if="taskList.length">
      <label
        class="flex flex-1 items-center cursor-pointer mr-2 py-2 hover:bg-green-200 transition-colors duration-200">
        <input type="checkbox" v-model="item.isDone" class="mr-2">
        <span :class="{ 'line-through': item.isDone }" class="flex-1">
          {{ item.text }}
        </span>
      </label>
      <button
        class="cursor-pointer p-2 transition-colors duration-100  bg-gray-400 opacity-75 hover:bg-gray-300 w-6 h-6 flex items-center justify-center"
        :data-index="ind">
        &times;
      </button>
    </div>

    <div v-else class="empty-list">
      Looks like you are done.
    </div>
  </div>

  <div class="w-full px-12 border-t-1 border-solid border-t-gray-300 py-4">
    <div class="font-bold uppercase text-center text-2xl py-4">
      done: {{ store.doneCount }}
    </div>
    <div class="text-red-600" v-if="isAlert">
      Please enter the Task
    </div>

    <div class="flex">
      <input type="text" v-model="newTaskText" :placeholder="inputPlaceholder" @keyup.enter="onAddTask"
        :required="isAlert" class="block flex-1 p-2 mr-1 border border-gray-400
              focus:outline-lime-600 invalid:border-red-600">
      <button class="text-white cursor-pointer p-2 transition-colors bg-blue-600 hover:bg-blue-400 duration-100"
        @click="onAddTask">
        add the task
      </button>
    </div>
  </div>
</template>

<style scoped></style>
