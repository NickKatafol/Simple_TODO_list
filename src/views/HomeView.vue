<script setup lang="ts">
import { useTaskStore } from '@/stores/taskStore';
import { storeToRefs } from 'pinia';
import { ref, computed } from 'vue';


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
    if (val) {
      alertUp.value = false
    }
  }
})

const alertUp = ref<boolean>(false)

const inputPlaceholder = ref<string>('Enter new task')

function addTask() {
  if (!newTaskTextBuffer.value) {
    alertUp.value = true
    return
  }

  store.addTask(newTaskTextBuffer.value)
  newTaskTextBuffer.value = ''
}



</script>

<template>
  <div class="home-wrapper">
    <div class="title">
      things to do:
    </div>

    <div class="list">
      <div v-for="item of taskList" 
           :key="item.id" 
           v-memo="[item.isDone]" 
           class="list__row"
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
                @click="item.deleteSelf_binded"
        >
          &times;
        </button>
      </div>
    </div>

    <div class="count">done: {{ store.doneCount }}</div>

    <div class="alert" v-if="alertUp">
      Please enter Task
    </div>

    <div class="new-task">
      <input type="text" 
             v-model="newTaskText" 
             :placeholder="inputPlaceholder"
      >
      <button class="new-task__btn" @click="addTask">
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
    @extend .inner-conainer;

    &__row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: rem(6) 0;

      .row__text-block {
        display: flex;
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
    @extend .inner-conainer;
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

.inner-conainer {
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
