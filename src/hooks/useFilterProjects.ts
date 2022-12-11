import { useEffect, useState } from 'react'

import { projects as allProjects } from '@data'

export enum WorksFilers {
  // eslint-disable-next-line no-unused-vars
  PRIVATES_PROJECTS = 'PRIVATES_PROJECTS',
  // eslint-disable-next-line no-unused-vars
  PUBLIC_PROJECTS = 'PUBLIC_PROJECTS',
  // eslint-disable-next-line no-unused-vars
  BLOGS = 'BLOGS'
}

export const useFilterProjects = (initialState = WorksFilers.PRIVATES_PROJECTS) => {
  const [filter, setFilter] = useState<WorksFilers>(initialState)
  const [projects, setProjects] = useState(allProjects.filter(p => p.filter === filter))

  useEffect(() => {
    const projectsToShow = allProjects.filter(project => project.filter === filter)
    setProjects(projectsToShow)
  }, [filter])

  return {
    projects: projects.length ? projects : allProjects,
    filter,
    setFilter
  }
}
