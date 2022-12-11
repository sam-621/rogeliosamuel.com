export interface Project {
  id: string | number
  picture: string
  backgroundColor: string
  title: string
  company?: string
  description: string
  link: {
    live: string
    repo?: string
  }
}
