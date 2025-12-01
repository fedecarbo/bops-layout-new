'use client'

import React, { useState, useRef, useEffect, ReactNode } from 'react'
import Link from 'next/link'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  UserGroupIcon,
  InboxIcon,
  BellIcon,
  DocumentTextIcon,
  DocumentChartBarIcon,
} from '@heroicons/react/24/outline'
import {
  ChevronRightIcon,
  CalendarIcon,
  MapPinIcon,
  UserIcon,
  ClockIcon as ClockIconSolid,
  PencilIcon,
  DocumentTextIcon as DocumentTextIconSolid,
  CheckIcon as CheckIconSolid,
} from '@heroicons/react/20/solid'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { mockPlanningApplications } from '@/lib/mock-data/planning-applications'
import { mockUsers } from '@/lib/mock-data/users'
import { Button } from '@/components/catalyst/button'
import { getUnreadNotesCount } from '@/lib/mock-data/notes'
import { useAssessment, getTaskHref } from './AssessmentContext'
import { NotificationCenter } from '@/components/notifications/NotificationCenter'
import { cn } from '@/lib/utils'
import './sidebar-themes.css'

// Planning assessment navigation (function to generate hrefs)
const getNavigation = (applicationId: string) => [
  { name: 'Overview', href: `/applications/${applicationId}/assessment`, icon: HomeIcon, current: true },
  { name: 'Meetings', href: '#meetings', icon: UserGroupIcon, count: '2', current: false },
  { name: 'Requests', href: '#requests', icon: InboxIcon, count: '5', current: false },
  { name: 'Activity feed', href: `/applications/${applicationId}/assessment/activity`, icon: BellIcon, current: false },
  { name: 'Notes', href: `/applications/${applicationId}/assessment/notes`, icon: DocumentTextIcon, current: false },
  { name: 'Preview report', href: '#preview-report', icon: DocumentChartBarIcon, current: false },
]

interface AssessmentLayoutProps {
  children: ReactNode
  applicationId: string
  currentTaskId?: number
  pageTitle?: string
  pageDescription?: string
  onComplete?: () => void
  currentPage?: 'overview' | 'notes' | 'meetings' | 'requests' | 'activity feed' | 'preview report'
}

function AssessmentLayoutInner({
  children,
  applicationId,
  currentTaskId,
  pageTitle = 'Planning Assessment',
  pageDescription,
  onComplete,
  currentPage = 'overview',
}: AssessmentLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { tasks, toggleTask, saveTask, sidebarScrollPosition, setSidebarScrollPosition } = useAssessment()
  const sidebarRef = useRef<HTMLDivElement>(null)

  // Get mock data for the application
  const application = mockPlanningApplications.find(app => app.id === applicationId) ?? mockPlanningApplications[0]!
  const currentUser = mockUsers[0]!

  // Get unread notes count
  const unreadNotesCount = getUnreadNotesCount(applicationId)

  // Get navigation with current page highlighted and unread count for Notes
  const navigation = getNavigation(applicationId).map(item => ({
    ...item,
    // Only mark Overview as current if we're actually on the overview page (not on a task)
    current: currentTaskId
      ? false
      : item.name.toLowerCase() === currentPage,
    // Add unread count for Notes
    count: item.name === 'Notes' && unreadNotesCount > 0 ? String(unreadNotesCount) : item.count,
  }))

  // Restore sidebar scroll position on mount
  useEffect(() => {
    if (sidebarRef.current && sidebarScrollPosition > 0) {
      sidebarRef.current.scrollTop = sidebarScrollPosition
    }
  }, [sidebarScrollPosition])

  // Save scroll position when scrolling
  useEffect(() => {
    const sidebar = sidebarRef.current
    if (!sidebar) return

    const handleScroll = () => {
      setSidebarScrollPosition(sidebar.scrollTop)
    }

    sidebar.addEventListener('scroll', handleScroll)
    return () => sidebar.removeEventListener('scroll', handleScroll)
  }, [setSidebarScrollPosition])

  // Find current task
  const currentTask = currentTaskId ? tasks.find(t => t.id === currentTaskId) : null
  const isTaskCompleted = currentTask?.completed || false
  const isTaskInProgress = currentTask?.inProgress || false
  const taskLastSaved = currentTask?.lastSaved

  const handleCompleteClick = () => {
    if (currentTaskId) {
      toggleTask(currentTaskId)
    }
    if (onComplete) {
      onComplete()
    }
  }

  const handleEditClick = () => {
    // When edit is clicked, uncomplete the task to enable editing
    if (currentTaskId && isTaskCompleted) {
      toggleTask(currentTaskId)
    }
  }

  const handleSaveClick = () => {
    if (currentTaskId) {
      saveTask(currentTaskId)
    }
  }

  // Get task status label and styling
  const getTaskStatus = () => {
    if (isTaskCompleted) return { label: 'Completed', classes: 'bg-green-100 text-green-800 ring-green-600/20' }
    if (isTaskInProgress) return { label: 'In Progress', classes: 'bg-blue-100 text-blue-800 ring-blue-600/20' }
    return { label: 'Not Started', classes: 'bg-zinc-100 text-zinc-600 ring-zinc-500/10' }
  }

  const taskStatus = getTaskStatus()

  // Format last saved timestamp
  const formatLastSaved = (timestamp: string) => {
    const date = new Date(timestamp)
    return `${date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })} at ${date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}`
  }

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Header - Sticky */}
      <header className="sticky top-0 z-50 bg-zinc-900" style={{ borderBottom: '10px solid #1d70b8' }}>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-white">
                Back Office Planning System
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <NotificationCenter userId={currentUser.id} />
              <div className="text-base text-white">
                {currentUser.name}
              </div>
              <a href="#logout" className="text-sm text-white hover:text-zinc-300">
                Log out
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Case Summary - Sticky */}
      <div
        className="sticky top-16 z-40 border-b"
        style={{
          backgroundColor: 'var(--case-summary-bg)',
          borderColor: 'var(--case-summary-border)',
        }}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <div className="flex items-center gap-3 text-base">
              <span
                className="font-bold"
                style={{ color: 'var(--case-summary-text-primary)' }}
              >
                {application.reference}
              </span>
              <span style={{ color: 'var(--case-summary-divider)' }}>|</span>
              <span style={{ color: 'var(--case-summary-text-secondary)' }}>
                {application.address}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Dialog */}
      <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 flex">
          <DialogPanel
            transition
            className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
              <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                <span className="sr-only">Close sidebar</span>
                <XMarkIcon aria-hidden="true" className="size-6 text-white" />
              </button>
            </div>

            {/* Sidebar (Mobile) */}
            <div
              className="relative flex grow flex-col gap-y-5 overflow-y-auto px-6 border-r"
              style={{
                backgroundColor: 'var(--sidebar-bg)',
                borderColor: 'var(--sidebar-border)',
              }}
            >
              <nav className="flex flex-1 flex-col pt-5">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  <li>
                    <ul role="list" className="-mx-2 space-y-1">
                      {navigation.map((item) => {
                        const isLink = item.href.startsWith('/')
                        const Component = isLink ? Link : 'a'
                        return (
                        <li key={item.name}>
                          <Component
                            href={item.href}
                            className="group flex gap-x-3 rounded-none p-2 text-sm"
                            style={{
                              backgroundColor: item.current ? 'var(--sidebar-bg-active)' : 'transparent',
                              color: item.current ? 'var(--sidebar-text-active)' : 'var(--sidebar-text-default)',
                            }}
                            onMouseEnter={(e) => {
                              if (!item.current) {
                                e.currentTarget.style.backgroundColor = 'var(--sidebar-bg-hover)'
                                e.currentTarget.style.color = 'var(--sidebar-text-hover)'
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (!item.current) {
                                e.currentTarget.style.backgroundColor = 'transparent'
                                e.currentTarget.style.color = 'var(--sidebar-text-default)'
                              }
                            }}
                          >
                            <item.icon
                              aria-hidden="true"
                              className="size-6 shrink-0"
                              style={{
                                color: item.current ? 'var(--sidebar-icon-active)' : 'var(--sidebar-icon-default)',
                              }}
                            />
                            {item.name}
                            {item.count ? (
                              <span
                                aria-hidden="true"
                                className="ml-auto w-9 min-w-max rounded-full bg-white px-2 py-0.5 text-center text-xs whitespace-nowrap text-blue-700 ring-1 ring-inset ring-blue-600/30"
                              >
                                {item.count}
                              </span>
                            ) : null}
                          </Component>
                        </li>
                      )}
                      )}
                    </ul>
                  </li>
                  <li>
                    <div className="border-t pt-7" style={{ borderColor: 'var(--sidebar-divider)' }}>
                      <div className="text-base" style={{ color: 'var(--sidebar-heading)' }}>Tasklist</div>
                    </div>
                    <ul role="list" className="-mx-2 mt-2 space-y-1">
                      {tasks.map((task) => {
                        const isCurrentTask = task.id === currentTaskId
                        return (
                          <li key={task.name}>
                            <Link
                              href={getTaskHref(applicationId, task.href)}
                              className="group flex gap-x-3 rounded-none p-2 text-sm"
                              style={{
                                backgroundColor: isCurrentTask ? 'var(--sidebar-bg-active)' : 'transparent',
                                color: isCurrentTask ? 'var(--sidebar-text-active)' : 'var(--sidebar-text-default)',
                              }}
                            >
                              <span
                                className="flex size-6 shrink-0 items-center justify-center rounded border"
                                style={{
                                  borderColor: task.completed
                                    ? (isCurrentTask ? 'var(--sidebar-checkbox-active-complete-border)' : 'var(--sidebar-checkbox-complete-border)')
                                    : 'var(--sidebar-checkbox-incomplete-border)',
                                  backgroundColor: task.completed
                                    ? (isCurrentTask ? 'var(--sidebar-checkbox-active-complete-bg)' : 'var(--sidebar-checkbox-complete-bg)')
                                    : 'var(--sidebar-checkbox-incomplete-bg)',
                                }}
                              >
                                {task.completed && (
                                  <CheckIconSolid aria-hidden="true" className="size-4" style={{
                                    color: isCurrentTask ? 'var(--sidebar-checkbox-active-complete-check)' : 'var(--sidebar-checkbox-complete-check)'
                                  }} />
                                )}
                              </span>
                              <span className="truncate">{task.name}</span>
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      {/* Mobile Top Bar - Sticky */}
      <div className="sticky top-32 z-30 flex items-center gap-x-6 bg-white border-b border-zinc-100 px-4 py-4 lg:hidden">
        <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-zinc-700">
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon aria-hidden="true" className="size-6" />
        </button>
        {/* Mobile Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex flex-1">
          <ol role="list" className="flex items-center space-x-2">
            <li>
              <Link href="/" className="text-base text-zinc-500 hover:text-zinc-700">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon aria-hidden="true" className="size-4 shrink-0 text-zinc-400" />
                <Link href={`/applications/${applicationId}`} className="ml-2 text-base text-zinc-500 hover:text-zinc-700">
                  {application.reference}
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon aria-hidden="true" className="size-4 shrink-0 text-zinc-400" />
                <Link href={`/applications/${applicationId}/assessment`} className="ml-2 text-base text-zinc-500 hover:text-zinc-700">
                  Assessment
                </Link>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* Sidebar + Main Content Container - Flex row with independent scrolling */}
      <div className="flex flex-1 overflow-hidden">
        {/* Desktop Sidebar - Full height with independent scroll */}
        <aside className="hidden lg:flex lg:w-80 lg:shrink-0 lg:flex-col">
          <div
            ref={sidebarRef}
            className="flex flex-1 flex-col overflow-y-auto px-6 py-6 border-r"
            style={{
              backgroundColor: 'var(--sidebar-bg)',
              borderColor: 'var(--sidebar-border)',
            }}
          >
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7 pb-4">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => {
                      const isLink = item.href.startsWith('/')
                      const Component = isLink ? Link : 'a'
                      return (
                      <li key={item.name}>
                        <Component
                          href={item.href}
                          className="group flex gap-x-3 rounded-md p-2 text-sm"
                          style={{
                            backgroundColor: item.current ? 'var(--sidebar-bg-active)' : 'transparent',
                            color: item.current ? 'var(--sidebar-text-active)' : 'var(--sidebar-text-default)',
                          }}
                          onMouseEnter={(e) => {
                            if (!item.current) {
                              e.currentTarget.style.backgroundColor = 'var(--sidebar-bg-hover)'
                              e.currentTarget.style.color = 'var(--sidebar-text-hover)'
                              const icon = e.currentTarget.querySelector('svg')
                              if (icon) {
                                ;(icon as SVGElement).style.color = 'var(--sidebar-icon-hover)'
                              }
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!item.current) {
                              e.currentTarget.style.backgroundColor = 'transparent'
                              e.currentTarget.style.color = 'var(--sidebar-text-default)'
                              const icon = e.currentTarget.querySelector('svg')
                              if (icon) {
                                ;(icon as SVGElement).style.color = 'var(--sidebar-icon-default)'
                              }
                            }
                          }}
                        >
                          <item.icon
                            aria-hidden="true"
                            className="size-6 shrink-0"
                            style={{
                              color: item.current ? 'var(--sidebar-icon-active)' : 'var(--sidebar-icon-default)',
                            }}
                          />
                          {item.name}
                          {item.count ? (
                            <span
                              aria-hidden="true"
                              className="ml-auto w-9 min-w-max rounded-full bg-white px-2 py-0.5 text-center text-xs whitespace-nowrap text-blue-700 ring-1 ring-inset ring-blue-600/30"
                            >
                              {item.count}
                            </span>
                          ) : null}
                        </Component>
                      </li>
                    )}
                    )}
                  </ul>
                </li>
                <li>
                  <div className="border-t pt-7" style={{ borderColor: 'var(--sidebar-divider)' }}>
                    <div className="text-base" style={{ color: 'var(--sidebar-heading)' }}>Tasklist</div>
                  </div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {tasks.map((task) => {
                      const isCurrentTask = task.id === currentTaskId
                      return (
                        <li key={task.name}>
                          <Link
                            href={getTaskHref(applicationId, task.href)}
                            className="group flex gap-x-3 rounded-none p-2 text-sm"
                            style={{
                              backgroundColor: isCurrentTask ? 'var(--sidebar-bg-active)' : 'transparent',
                              color: isCurrentTask ? 'var(--sidebar-text-active)' : 'var(--sidebar-text-default)',
                            }}
                            onMouseEnter={(e) => {
                              if (!isCurrentTask) {
                                e.currentTarget.style.backgroundColor = 'var(--sidebar-bg-hover)'
                                e.currentTarget.style.color = 'var(--sidebar-text-hover)'
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (!isCurrentTask) {
                                e.currentTarget.style.backgroundColor = 'transparent'
                                e.currentTarget.style.color = 'var(--sidebar-text-default)'
                              }
                            }}
                          >
                            <span
                              className="flex size-6 shrink-0 items-center justify-center rounded border"
                              style={{
                                borderColor: task.completed
                                  ? (isCurrentTask ? 'var(--sidebar-checkbox-active-complete-border)' : 'var(--sidebar-checkbox-complete-border)')
                                  : 'var(--sidebar-checkbox-incomplete-border)',
                                backgroundColor: task.completed
                                  ? (isCurrentTask ? 'var(--sidebar-checkbox-active-complete-bg)' : 'var(--sidebar-checkbox-complete-bg)')
                                  : 'var(--sidebar-checkbox-incomplete-bg)',
                              }}
                            >
                              {task.completed && (
                                <CheckIconSolid aria-hidden="true" className="size-4" style={{
                                  color: isCurrentTask ? 'var(--sidebar-checkbox-active-complete-check)' : 'var(--sidebar-checkbox-complete-check)'
                                }} />
                              )}
                            </span>
                            <span className="truncate">{task.name}</span>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </aside>

        {/* Main Content - Full height with independent scroll */}
        <main className="flex-1 overflow-y-auto">
          <div className="px-4 sm:px-6 lg:px-8 py-10">
            <div className="mx-auto w-full max-w-6xl">
              {/* Breadcrumbs */}
              <nav aria-label="Breadcrumb" className="hidden lg:block mb-6">
                <ol role="list" className="flex items-center space-x-2">
                  <li>
                    <Link href="/" className="text-base text-zinc-500 hover:text-zinc-700">
                      Home
                    </Link>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <ChevronRightIcon aria-hidden="true" className="size-5 shrink-0 text-zinc-400" />
                      <Link href={`/applications/${applicationId}`} className="ml-2 text-base text-zinc-500 hover:text-zinc-700">
                        {application.reference}
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <ChevronRightIcon aria-hidden="true" className="size-5 shrink-0 text-zinc-400" />
                      <Link href={`/applications/${applicationId}/assessment`} className="ml-2 text-base text-zinc-500 hover:text-zinc-700">
                        Assessment
                      </Link>
                    </div>
                  </li>
                </ol>
              </nav>

              {/* Page Heading with Meta and Actions */}
              <div className="lg:flex lg:items-center lg:justify-between">
                <div className="min-w-0 flex-1">
                  {/* Page Title */}
                  <h2 className="text-2xl font-bold text-zinc-900 sm:truncate sm:tracking-tight">
                    {pageTitle}
                  </h2>

                  {/* Page Description (for non-task pages like Notes, Overview, etc.) */}
                  {pageDescription && !currentTaskId && (
                    <p className="mt-2 text-base text-zinc-600">
                      {pageDescription}
                    </p>
                  )}

                  {/* Task Description */}
                  {currentTask && (
                    <p className="mt-2 text-base text-zinc-600">
                      {currentTask.description}
                    </p>
                  )}

                  {/* Task Status Badge and Last Saved */}
                  {currentTaskId && (
                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                      <span className={cn(
                        taskStatus.classes,
                        'inline-flex items-center rounded-none px-2 py-1 text-base font-normal ring-1 ring-inset'
                      )}>
                        {taskStatus.label}
                      </span>
                      {taskLastSaved && (
                        <span className="text-base text-zinc-500">
                          Last saved: {formatLastSaved(taskLastSaved)}
                        </span>
                      )}
                    </div>
                  )}
                </div>

              </div>

              {/* Divider */}
              {(currentTaskId || pageDescription) && (
                <div className="mt-6 border-t border-zinc-100" />
              )}

              {/* Page Content */}
              <div className="mt-8">
                {children}
              </div>

              {/* Action Buttons */}
              {currentTaskId && (
                <div className="mt-8 flex items-center gap-3 pb-10">
                  {!isTaskCompleted ? (
                    <>
                      <Button type="button" onClick={handleCompleteClick}>
                        Save and mark as complete
                      </Button>
                      <Button type="button" outline onClick={handleSaveClick}>
                        Save changes
                      </Button>
                    </>
                  ) : (
                    <Button type="button" outline onClick={handleEditClick}>
                      <PencilIcon aria-hidden="true" className="mr-1.5 -ml-0.5 size-5" />
                      Edit
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

// Export the main component directly (provider is in layout.tsx)
export default function AssessmentLayout(props: AssessmentLayoutProps) {
  return <AssessmentLayoutInner {...props} />
}
