import { useEffect, useState } from 'react'

import { projects as allProjects } from '@data'

export const useFilterProjects = (initialState = true) => {
  const [isPrivate, setIsPrivate] = useState(initialState)
  const [projects, setProjects] = useState(allProjects.filter(p => p.isPrivate === isPrivate))

  useEffect(() => {
    const projectsToShow = allProjects.filter(project => project.isPrivate === isPrivate)
    setProjects(projectsToShow)
  }, [isPrivate])

  return {
    projects: projects.length ? projects : allProjects,
    isPrivate,
    setIsPrivate
  }
}
