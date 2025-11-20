'use client'

import { use } from 'react'
import Link from 'next/link'
import { CheckCircleIcon, ClockIcon, DocumentTextIcon, CalendarIcon, InboxIcon } from '@heroicons/react/24/outline'
import AssessmentLayout from './AssessmentLayout'
import { useAssessment } from './AssessmentContext'
import { getNotesByApplicationId } from '@/lib/mock-data/notes'

interface PageProps {
  params: Promise<{ id: string }>
}

export default function AssessmentPage({ params }: PageProps) {
  const { id } = use(params)
  const { tasks } = useAssessment()

  // Calculate task statistics
  const completedTasks = tasks.filter(t => t.completed).length
  const totalTasks = tasks.length
  const progressPercentage = Math.round((completedTasks / totalTasks) * 100)

  // Get recent notes
  const notes = getNotesByApplicationId(id)
  const recentNotes = notes.slice(0, 3)

  // Mock data for other metrics
  const stats = [
    { name: 'Tasks Completed', value: `${completedTasks} / ${totalTasks}`, icon: CheckCircleIcon, description: `${progressPercentage}% complete` },
    { name: 'Pending Meetings', value: '2', icon: CalendarIcon, description: 'Scheduled this week' },
    { name: 'Open Requests', value: '5', icon: InboxIcon, description: 'Awaiting response' },
    { name: 'Recent Notes', value: notes.length.toString(), icon: DocumentTextIcon, description: `${notes.filter(n => !n.isRead).length} unread` },
  ]

  return (
    <AssessmentLayout
      applicationId={id}
      pageTitle="Assessment Overview"
      pageDescription="Track progress and manage assessment workflow for this planning application."
    >
      <div className="space-y-8">
        {/* Stats Grid - Simple Pattern */}
        <div>
          <h3 className="text-base font-semibold text-zinc-900 mb-4">Progress Summary</h3>
          <div className="grid grid-cols-1 gap-px bg-zinc-900/5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="bg-white px-4 py-6 sm:px-6 lg:px-8">
                <p className="text-sm/6 font-medium text-zinc-500">{stat.name}</p>
                <p className="mt-2 flex items-baseline gap-x-2">
                  <span className="text-4xl font-semibold tracking-tight text-zinc-900">{stat.value}</span>
                  {stat.description ? <span className="text-sm text-zinc-500">{stat.description}</span> : null}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Task Progress Bar */}
        <div className="border border-zinc-200 bg-white px-6 py-5">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div>
              <h3 className="text-base font-semibold text-zinc-900">Task Progress</h3>
              <p className="mt-1 text-sm text-zinc-500">
                {completedTasks} of {totalTasks} tasks completed
              </p>
            </div>
            <div className="mt-3 sm:ml-4 sm:mt-0">
              <span className="inline-flex items-center rounded-md bg-green-100 px-3 py-1 text-sm font-medium text-green-800 ring-1 ring-inset ring-green-600/20">
                {progressPercentage}% Complete
              </span>
            </div>
          </div>
          <div className="mt-5">
            <div className="w-full bg-zinc-200 h-2.5">
              <div
                className="bg-blue-600 h-2.5 transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Recent Notes */}
        <div className="border border-zinc-200 bg-white px-6 py-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-zinc-900">Recent Notes</h3>
            <Link
              href={`/applications/${id}/assessment/notes`}
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              View all →
            </Link>
          </div>
          <ul className="divide-y divide-zinc-200">
            {recentNotes.map((note) => (
              <li key={note.id} className="py-4">
                <div className="flex items-start gap-3">
                  <div className="flex size-10 flex-none items-center justify-center rounded-full bg-zinc-100 text-sm font-semibold text-zinc-700">
                    {note.author.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-zinc-900">{note.author.name}</p>
                      {!note.isRead && (
                        <span className="inline-flex items-center rounded-md bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20">
                          NEW
                        </span>
                      )}
                      <p className="text-sm text-zinc-500">• {note.date}</p>
                    </div>
                    <p className="mt-1 text-sm text-zinc-600 line-clamp-2">{note.comment}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="border border-zinc-200 bg-white px-6 py-5">
          <h3 className="text-base font-semibold text-zinc-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 gap-px sm:grid-cols-2 bg-zinc-200 border border-zinc-200">
            <Link
              href={`/applications/${id}/assessment/notes`}
              className="relative flex items-center space-x-3 bg-white px-6 py-4 hover:bg-zinc-50"
            >
              <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500">
                <DocumentTextIcon aria-hidden="true" className="size-6 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-zinc-900">Add Note</p>
                <p className="truncate text-sm text-zinc-500">Record observations</p>
              </div>
            </Link>
            <button
              type="button"
              className="relative flex items-center space-x-3 bg-white px-6 py-4 hover:bg-zinc-50"
            >
              <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-500">
                <CalendarIcon aria-hidden="true" className="size-6 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-zinc-900">Schedule Meeting</p>
                <p className="truncate text-sm text-zinc-500">Arrange consultation</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </AssessmentLayout>
  )
}
