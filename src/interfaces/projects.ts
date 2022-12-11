import { WorksFilers } from '@hooks'

export interface Project {
  id: string | number
  picture: string
  backgroundColor: string
  title: string
  company?: string
  description: string
  filter: WorksFilers
  link: {
    live: string
    repo?: string
  }
}
