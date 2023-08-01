interface IContentNumber {
  min: number
  max: number
}

interface IContentOther {
  name: string
}

export interface IContent extends IContentNumber, IContentOther {
  cost: number
}

export interface IProperties {
  name: string
  type: 'radio' | 'checkbox' | 'number'
  required: boolean
  content: IContent[]
}

export interface IPosition {
  _id: string
  name: string
  desc: string
  properties: IProperties[]
}

export type TMenuCategories = string[]
