'use client'

import React, { useState } from 'react'
import { PaperClipIcon } from '@heroicons/react/20/solid'
import AssessmentLayout from '../AssessmentLayout'
import { getNotesByApplicationId } from '@/lib/mock-data/notes'
import { mockUsers } from '@/lib/mock-data/users'

export default function NotesPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = React.use(params)
  const applicationId = resolvedParams.id
  const [newComment, setNewComment] = useState('')

  // Get notes for this application
  const notes = getNotesByApplicationId(applicationId)

  // Get current user
  const currentUser = mockUsers[0]!

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Add note submission logic
    console.log('New note:', newComment)
    setNewComment('')
  }

  return (
    <AssessmentLayout
      applicationId={applicationId}
      pageTitle="Notes"
      currentPage="notes"
      pageDescription="Discussion and comments related to this planning application."
    >
      <div className="space-y-8">
        {/* New comment form - Constrained width for readability */}
        <div className="max-w-3xl">
          <h3 className="text-lg font-semibold text-zinc-900 mb-4">Add a note</h3>
          {/* Comment form */}
          <form onSubmit={handleSubmit} className="relative">
              <div className="overflow-hidden rounded-lg border border-zinc-300 bg-white shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                <label htmlFor="comment" className="sr-only">
                  Add your note
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  rows={3}
                  placeholder="Add your note..."
                  className="block w-full resize-none border-0 bg-transparent px-3 py-2 text-base text-zinc-900 placeholder:text-zinc-400 focus:ring-0"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
              </div>

              <div className="flex justify-between items-center mt-3">
                <button
                  type="button"
                  className="inline-flex items-center gap-x-1.5 rounded-md px-2.5 py-1.5 text-base font-semibold text-zinc-700 hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  <PaperClipIcon aria-hidden="true" className="-ml-0.5 size-5 text-zinc-400" />
                  Attach file
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Post note
                </button>
              </div>
            </form>
        </div>

        {/* Activity Feed - Constrained width for readability */}
        <div className="max-w-3xl border-t border-zinc-100 pt-8">
          <div className="divide-y divide-zinc-100">
            {notes.map((note) => (
              <div key={note.id} className="py-6 first:pt-0">
                <div className="flex items-start space-x-3">
                  {/* Avatar with initials */}
                  <div className="relative flex-shrink-0">
                    <div className={`flex size-10 items-center justify-center rounded-full text-sm font-semibold ${
                      note.isRead ? 'bg-zinc-100 text-zinc-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {note.author.initials}
                    </div>
                  </div>
                  {/* Comment content */}
                  <div className="min-w-0 flex-1">
                    <div>
                      <div className="text-base flex items-center gap-2">
                        <span className="font-medium text-zinc-900">
                          {note.author.name}
                        </span>
                        {!note.isRead && (
                          <span className="inline-flex items-center rounded-md bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20">
                            NEW
                          </span>
                        )}
                      </div>
                      <p className="mt-0.5 text-base text-zinc-500">Commented {note.date}</p>
                    </div>
                    <div className={`mt-2 text-base ${note.isRead ? 'text-zinc-700' : 'text-zinc-900 font-medium'}`}>
                      <p>{note.comment}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AssessmentLayout>
  )
}
