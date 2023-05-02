export interface IStats {
  hp: number
  sp: number
  currentHp: number
  currentSp: number
  str: number
  dex: number
  int: number
  char: number
}

interface ILevel {
  exp: number
  level: number
}

interface ISkill {
  id: string
  name: string
  type: string
  attribute?: string
  effect?: string
  description?: string
  free: boolean
}

interface IItems {
  id: string
  name: string
  quantity: number
  description?: string
  stat?: number | string
  modifier?: string
}

export interface ICharacter {
  id: string
  name: string
  race: string
  stats: IStats
  level: ILevel
  role: string
  skills: ISkill[]
  backpack: IItems[]
  armor: IItems[]
  divinity?: string
}