import type { Ref } from "vue"

export interface ITask {
  id: number
  text: string
  isDone: boolean
}

export class Task implements ITask{
  id = ~~(Math.random() * 100000)
  deleteSelf_binded: () => void


  constructor(parentArray: Ref<Task[]>, public text: string, public isDone: boolean = false) {
    this.deleteSelf_binded = this.deleteSelf.bind(parentArray, this.id)
  }

  deleteSelf(id: number) {
    //@ts-ignore
    const itemIndex = this.value.findIndex(item => item.id === id)
    //@ts-ignore
    this.value.splice(itemIndex, 1)
  }
}




