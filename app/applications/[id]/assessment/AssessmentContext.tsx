'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface Task {
  id: number
  name: string
  description: string
  href: string
  current: boolean
  completed: boolean
  inProgress: boolean
  lastSaved?: string
}

interface AssessmentContextType {
  tasks: Task[]
  completeTask: (taskId: number) => void
  uncompleteTask: (taskId: number) => void
  toggleTask: (taskId: number) => void
  saveTask: (taskId: number) => void
  sidebarScrollPosition: number
  setSidebarScrollPosition: (position: number) => void
}

const AssessmentContext = createContext<AssessmentContextType | undefined>(undefined)

// Generate task href based on application ID
const getTaskHref = (appId: string, taskSlug: string) => `/applications/${appId}/assessment/tasks/${taskSlug}`

// Initial task list - hrefs will be updated with actual application ID
const initialTasks: Task[] = [
  { id: 1, name: 'Pre-application details', description: 'Document any pre-application consultation details and initial discussions with the applicant.', href: 'pre-application', current: false, completed: false, inProgress: false },
  { id: 2, name: 'Proposal description', description: 'Document and review the detailed proposal description for this planning application.', href: 'proposal-description', current: false, completed: false, inProgress: false },
  { id: 3, name: 'Site map', description: 'Review and annotate the site map, identifying key features and boundaries.', href: 'site-map', current: false, completed: false, inProgress: false },
  { id: 4, name: 'Relevant site constraints', description: 'Identify and document any planning constraints affecting the site.', href: 'site-constraints', current: false, completed: false, inProgress: false },
  { id: 5, name: 'Relevant site history', description: 'Review previous planning applications and relevant site history.', href: 'site-history', current: false, completed: false, inProgress: false },
  { id: 6, name: 'Site and surroundings', description: 'Assess the site context and surrounding area characteristics.', href: 'site-surroundings', current: false, completed: false, inProgress: false },
  { id: 7, name: 'Heads of terms', description: 'Document the key terms and conditions for any planning obligations.', href: 'heads-of-terms', current: false, completed: false, inProgress: false },
  { id: 8, name: 'Planning advice', description: 'Provide planning advice based on policy and material considerations.', href: 'planning-advice', current: false, completed: false, inProgress: false },
  { id: 9, name: 'Summary of advice', description: 'Summarize the key planning advice and recommendations.', href: 'summary-of-advice', current: false, completed: false, inProgress: false },
  { id: 10, name: 'Relevant policies and guidance', description: 'Identify and assess relevant planning policies and guidance.', href: 'policies-guidance', current: false, completed: false, inProgress: false },
  { id: 11, name: 'CIL', description: 'Assess Community Infrastructure Levy requirements and implications.', href: 'cil', current: false, completed: false, inProgress: false },
  { id: 12, name: 'List of Requirements', description: 'Document any additional requirements or information needed.', href: 'list-requirements', current: false, completed: false, inProgress: false },
  { id: 13, name: 'Pre-application outcome', description: 'Record the outcome and recommendations from the pre-application assessment.', href: 'pre-app-outcome', current: false, completed: false, inProgress: false },
  { id: 14, name: 'Next steps', description: 'Outline the next steps and actions required following this assessment.', href: 'next-steps', current: false, completed: false, inProgress: false },
]

export { getTaskHref }

export function AssessmentProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [sidebarScrollPosition, setSidebarScrollPosition] = useState(0)

  const completeTask = (taskId: number) => {
    setTasks(prev => prev.map(task =>
      task.id === taskId ? { ...task, completed: true, inProgress: false } : task
    ))
  }

  const uncompleteTask = (taskId: number) => {
    setTasks(prev => prev.map(task =>
      task.id === taskId ? { ...task, completed: false } : task
    ))
  }

  const toggleTask = (taskId: number) => {
    setTasks(prev => prev.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed, inProgress: task.completed ? task.inProgress : false } : task
    ))
  }

  const saveTask = (taskId: number) => {
    const now = new Date().toISOString()
    setTasks(prev => prev.map(task =>
      task.id === taskId ? { ...task, inProgress: true, lastSaved: now } : task
    ))
  }

  return (
    <AssessmentContext.Provider value={{ tasks, completeTask, uncompleteTask, toggleTask, saveTask, sidebarScrollPosition, setSidebarScrollPosition }}>
      {children}
    </AssessmentContext.Provider>
  )
}

export function useAssessment() {
  const context = useContext(AssessmentContext)
  if (context === undefined) {
    throw new Error('useAssessment must be used within an AssessmentProvider')
  }
  return context
}
