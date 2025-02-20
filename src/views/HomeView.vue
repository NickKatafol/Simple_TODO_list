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

const inputPlaceholder = ref<string>('Enter new task')

function onAddTask() {
  if (!newTaskTextBuffer.value) {
    isAlert.value = true
    return
  }

  store.addTask(newTaskTextBuffer.value)
  newTaskTextBuffer.value = ''
}

function onItemHolderForDelete(ev: any){
  if(ev.target?.dataset?.index){
    const index: number = +ev.target.dataset.index
    taskList.value[index].deleteSelf_binded()
  }
}


</script>

<template>
  <div class="home-wrapper">
    <div class="title">
      things to do:
    </div>

    <div class="list" @click="onItemHolderForDelete">
      <div v-for="(item, ind) of taskList" 
           :key="item.id" 
           v-memo="[item.isDone]" 
           class="list__row"
           v-if="taskList.length"
      >
        <label class="row__text-block">
          <input type="checkbox" 
                 v-model="item.isDone" 
                 class="row__chbox"
          >
          <span :class="{ 'row__text_done': item.isDone }" 
                class="row__text"
          >
            {{ item.text }}
          </span>
        </label>
        <button class="row__btn" 
                :data-index="ind"
        >
          &times;
        </button>
      </div>
      <div v-else class="empty-list">
        Looks like you are done.
      </div>
    </div>


    <div class="count">done: {{ store.doneCount }}</div>

    <div class="alert" v-if="isAlert">
      Please enter Task
    </div>

    <div class="new-task">
      <input type="text" 
             v-model="newTaskText" 
             :placeholder="inputPlaceholder"
             @keyup.enter="onAddTask"
      >
      <button class="new-task__btn" 
              @click="onAddTask"
      >
        add task
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-wrapper {
  padding: rem(20) 0;

  .title {
    @extend .title-text;
    border-bottom: $grayColor 1px solid;
  }

  .list {
    @extend .inner-container;

    &__row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: rem(6) 0;

      .row__text-block {
        display: flex;
        flex: 1;
        align-items: center;
        padding-right: rem(4);
        cursor: pointer;

        &:hover {
          background-color: $lightGray;
        }

        .row__chbox {
          width: rem(20);
          height: rem(20);
          margin-right: rem(4);
        }

        .row__text {
          flex: 1;
        }

        .row__text_done {
          text-decoration: line-through;
        }
      }

      .row__btn {
        width: rem(20);
        height: rem(20);
        font-size: rem(16);
        display: flex;
        justify-content: center;
        cursor: pointer;
        margin-left: rem(4);
      }
    }
  }

  .empty-list {
    color: $darkBlueColor;
    text-align: center;
    padding: rem(20) 0;
  }

  .count {
    @extend .title-text;
    border-top: $grayColor 1px solid;
  }

  .alert {
    width: 70%;
    margin: 0 auto;
    color: $redColor;
  }

  .new-task {
    @extend .inner-container;
    display: flex;

    & input {
      flex: 1;
      margin-right: rem(4);
    }

    &__btn {
      background: $blueColor;
      border: none;
      color: $whiteColor;
      text-transform: uppercase;
      font-weight: 700;
      text-align: center;
      padding: $commonPadding;
      cursor: pointer;
    }
  }
}

.inner-container {
  width: percent(150, 200);
  margin: 0 auto;
}

.title-text {
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  padding: $commonPadding;
}
</style>
