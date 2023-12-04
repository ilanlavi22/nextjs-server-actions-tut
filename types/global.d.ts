export interface Drink {
  idDrink: string
  strDrink: string
  strDrinkThumb: string
}

export interface TaskItem {
  id: string
  content?: string
  createdAt: Date
  updatedAt?: Date
  completed: boolean
}
