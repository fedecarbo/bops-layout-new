'use client'

import { use, useState } from 'react'
import { PlusIcon, TrashIcon } from '@heroicons/react/20/solid'
import AssessmentLayout from '../../AssessmentLayout'
import { Button } from '@/components/catalyst/button'

type AdviceStatus = 'complies' | 'needs-changes' | 'does-not-comply'

interface AdviceItem {
  id: string
  element: string
  policyReferences: string
  status: AdviceStatus
  advice: string
}

interface Consideration {
  id: string
  title: string
  adviceItems: AdviceItem[]
}

const statusConfig = {
  'complies': {
    label: 'Complies',
    classes: 'bg-green-100 text-green-800 ring-green-600/20'
  },
  'needs-changes': {
    label: 'Needs Changes',
    classes: 'bg-amber-100 text-amber-800 ring-amber-600/20'
  },
  'does-not-comply': {
    label: 'Does Not Comply',
    classes: 'bg-red-100 text-red-800 ring-red-600/20'
  }
}

interface PageProps {
  params: Promise<{ id: string }>
}

export default function PlanningAdvicePage({ params }: PageProps) {
  const { id } = use(params)

  const [considerations, setConsiderations] = useState<Consideration[]>([
    {
      id: '1',
      title: 'Design Consideration',
      adviceItems: [
        {
          id: '1a',
          element: 'Building Height',
          policyReferences: 'Policy DES1, Policy DES4',
          status: 'needs-changes',
          advice: 'The proposed 4-storey building exceeds the 3-storey limit set in the local development plan. Consider reducing the height to comply with Policy DES1, or provide exceptional circumstances justification.'
        },
        {
          id: '1b',
          element: 'Materials and Finishes',
          policyReferences: 'Policy DES2, Conservation Area Guidelines',
          status: 'complies',
          advice: 'The use of traditional brick and slate materials is appropriate for the conservation area setting and complies with Policy DES2.'
        }
      ]
    },
    {
      id: '2',
      title: 'Safety Consideration',
      adviceItems: [
        {
          id: '2a',
          element: 'Pedestrian Access',
          policyReferences: 'Policy TRA3, Manual for Streets',
          status: 'does-not-comply',
          advice: 'The proposed access does not meet minimum visibility splay requirements. The application should be refused unless the access is redesigned to comply with Policy TRA3 and Manual for Streets guidance.'
        }
      ]
    },
    {
      id: '3',
      title: 'Environmental Consideration',
      adviceItems: [
        {
          id: '3a',
          element: 'Tree Preservation',
          policyReferences: 'Policy ENV5, TPO 123/2023',
          status: 'needs-changes',
          advice: 'Two Category A trees within the TPO zone will be impacted by the proposed development. An arboricultural impact assessment is required, and the site layout should be revised to retain these significant trees.'
        }
      ]
    }
  ])

  const [editingAdvice, setEditingAdvice] = useState<{
    considerationId: string
    adviceId?: string
  } | null>(null)

  const [formData, setFormData] = useState({
    element: '',
    policyReferences: '',
    status: 'complies' as AdviceStatus,
    advice: ''
  })

  const addConsideration = () => {
    const title = prompt('Enter consideration title:')
    if (title) {
      const newConsideration: Consideration = {
        id: Date.now().toString(),
        title,
        adviceItems: []
      }
      setConsiderations([...considerations, newConsideration])
    }
  }

  const deleteConsideration = (considerationId: string) => {
    if (confirm('Are you sure you want to delete this consideration?')) {
      setConsiderations(considerations.filter(c => c.id !== considerationId))
    }
  }

  const startAddingAdvice = (considerationId: string) => {
    setEditingAdvice({ considerationId })
    setFormData({
      element: '',
      policyReferences: '',
      status: 'complies',
      advice: ''
    })
  }

  const startEditingAdvice = (considerationId: string, adviceId: string) => {
    const consideration = considerations.find(c => c.id === considerationId)
    const advice = consideration?.adviceItems.find(a => a.id === adviceId)
    if (advice) {
      setEditingAdvice({ considerationId, adviceId })
      setFormData({
        element: advice.element,
        policyReferences: advice.policyReferences,
        status: advice.status,
        advice: advice.advice
      })
    }
  }

  const saveAdvice = () => {
    if (!editingAdvice) return

    const { considerationId, adviceId } = editingAdvice

    setConsiderations(considerations.map(consideration => {
      if (consideration.id === considerationId) {
        if (adviceId) {
          // Edit existing
          return {
            ...consideration,
            adviceItems: consideration.adviceItems.map(item =>
              item.id === adviceId ? { ...item, ...formData } : item
            )
          }
        } else {
          // Add new
          const newAdvice: AdviceItem = {
            id: Date.now().toString(),
            ...formData
          }
          return {
            ...consideration,
            adviceItems: [...consideration.adviceItems, newAdvice]
          }
        }
      }
      return consideration
    }))

    setEditingAdvice(null)
    setFormData({
      element: '',
      policyReferences: '',
      status: 'complies',
      advice: ''
    })
  }

  const cancelEditing = () => {
    setEditingAdvice(null)
    setFormData({
      element: '',
      policyReferences: '',
      status: 'complies',
      advice: ''
    })
  }

  const deleteAdvice = (considerationId: string, adviceId: string) => {
    if (confirm('Are you sure you want to delete this advice?')) {
      setConsiderations(considerations.map(consideration => {
        if (consideration.id === considerationId) {
          return {
            ...consideration,
            adviceItems: consideration.adviceItems.filter(item => item.id !== adviceId)
          }
        }
        return consideration
      }))
    }
  }

  return (
    <AssessmentLayout
      applicationId={id}
      pageTitle="Planning Advice"
      currentTaskId={8}
      pageDescription="Provide planning advice based on policy and material considerations organized by topic areas."
    >
      <div className="space-y-8">
        {/* Considerations */}
        <div className="space-y-8">
          {considerations.map((consideration) => (
            <div key={consideration.id} className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm">
              {/* Card Header - Consideration Title */}
              <div className="px-4 py-5 sm:px-6">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {consideration.title}
                  </h3>
                  <button
                    type="button"
                    onClick={() => deleteConsideration(consideration.id)}
                    className="text-gray-400 hover:text-red-600"
                    title="Delete consideration"
                  >
                    <TrashIcon className="size-4" />
                  </button>
                </div>
              </div>

              {/* Card Body - Advice Items */}
              <div className="px-4 py-5 sm:p-6">
                {/* Advice Items - using UI Block description list pattern */}
                {consideration.adviceItems.length > 0 && (
                  <dl className="divide-y divide-gray-200">
                    {consideration.adviceItems.map((item) => (
                      <div key={item.id} className="py-6 space-y-4 first:pt-0">
                        {/* Element of Proposal */}
                        <div>
                          <dt className="text-lg/7 font-bold text-gray-900">Element of Proposal</dt>
                          <dd className="mt-1 text-lg/7 text-gray-700">
                            {item.element}
                          </dd>
                        </div>

                        {/* Policy References */}
                        <div>
                          <dt className="text-lg/7 font-bold text-gray-900">Policy References</dt>
                          <dd className="mt-1 text-lg/7 text-gray-700">
                            {item.policyReferences}
                          </dd>
                        </div>

                        {/* Status */}
                        <div>
                          <dt className="text-lg/7 font-bold text-gray-900">Status</dt>
                          <dd className="mt-1 text-lg/7 text-gray-700">
                            <span
                              className={`inline-flex items-center px-2.5 py-1.5 text-base font-medium ring-1 ring-inset ${statusConfig[item.status].classes}`}
                            >
                              {statusConfig[item.status].label}
                            </span>
                          </dd>
                        </div>

                        {/* Advice */}
                        <div>
                          <dt className="text-lg/7 font-bold text-gray-900">Advice</dt>
                          <dd className="mt-1 text-lg/7 text-gray-700 whitespace-pre-wrap">
                            {item.advice}
                          </dd>
                        </div>

                        {/* Actions */}
                        <div className="border-t border-gray-100 pt-4">
                          <div className="flex justify-end space-x-4">
                            <button
                              type="button"
                              onClick={() => startEditingAdvice(consideration.id, item.id)}
                              className="rounded-md bg-transparent text-lg font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Edit
                            </button>
                            <span aria-hidden="true" className="text-gray-300">
                              |
                            </span>
                            <button
                              type="button"
                              onClick={() => deleteAdvice(consideration.id, item.id)}
                              className="rounded-md bg-transparent text-lg font-medium text-gray-600 hover:text-gray-900"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </dl>
                )}

                {/* Add Advice - Right-aligned action */}
                {consideration.adviceItems.length > 0 && (
                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      onClick={() => startAddingAdvice(consideration.id)}
                      className="inline-flex items-center gap-x-2 rounded-lg bg-white px-4 py-2.5 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      <PlusIcon aria-hidden="true" className="size-5 text-gray-400" />
                      Add Advice
                    </button>
                  </div>
                )}

                {/* Show Add Advice button when no items exist - Full-width dashed */}
                {consideration.adviceItems.length === 0 && (
                  <button
                    type="button"
                    onClick={() => startAddingAdvice(consideration.id)}
                    className="w-full flex items-center justify-center gap-x-2 rounded-lg border-2 border-dashed border-gray-300 px-4 py-3 text-base font-semibold text-gray-900 hover:border-gray-400 hover:bg-gray-50"
                  >
                    <PlusIcon aria-hidden="true" className="size-5 text-gray-400" />
                    Add Advice
                  </button>
                )}

                {/* Editing Form - using UI Block input patterns */}
                {editingAdvice?.considerationId === consideration.id && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {editingAdvice.adviceId ? 'Edit Advice' : 'Add New Advice'}
                  </h3>

                  <div className="space-y-6">
                    {/* Element - UI Block input with label */}
                    <div>
                      <label htmlFor="element" className="block text-lg/7 font-bold text-gray-900">
                        Element of Proposal
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          id="element"
                          name="element"
                          value={formData.element}
                          onChange={(e) => setFormData({ ...formData, element: e.target.value })}
                          placeholder="e.g., Building height, Materials, Landscaping"
                          className="block w-full rounded-md bg-white px-3 py-2 text-lg text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                        />
                      </div>
                    </div>

                    {/* Policy References - UI Block input with label */}
                    <div>
                      <label htmlFor="policy" className="block text-lg/7 font-bold text-gray-900">
                        Policy References
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          id="policy"
                          name="policy"
                          value={formData.policyReferences}
                          onChange={(e) => setFormData({ ...formData, policyReferences: e.target.value })}
                          placeholder="e.g., Policy DES1, Policy DES2"
                          className="block w-full rounded-md bg-white px-3 py-2 text-lg text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                        />
                      </div>
                    </div>

                    {/* Status - native select (simple) */}
                    <div>
                      <label htmlFor="status" className="block text-lg/7 font-bold text-gray-900">
                        Status
                      </label>
                      <div className="mt-2">
                        <select
                          id="status"
                          name="status"
                          value={formData.status}
                          onChange={(e) => setFormData({ ...formData, status: e.target.value as AdviceStatus })}
                          className="block w-full rounded-md bg-white px-3 py-2 text-lg text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                        >
                          <option value="complies">Complies</option>
                          <option value="needs-changes">Needs Changes</option>
                          <option value="does-not-comply">Does Not Comply</option>
                        </select>
                      </div>
                    </div>

                    {/* Advice - UI Block textarea */}
                    <div>
                      <label htmlFor="advice" className="block text-lg/7 font-bold text-gray-900">
                        Advice
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="advice"
                          name="advice"
                          rows={4}
                          value={formData.advice}
                          onChange={(e) => setFormData({ ...formData, advice: e.target.value })}
                          placeholder="Provide detailed planning advice..."
                          className="block w-full rounded-md bg-white px-3 py-2 text-lg text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 justify-end">
                    <Button outline onClick={cancelEditing}>
                      Cancel
                    </Button>
                    <Button onClick={saveAdvice}>
                      {editingAdvice.adviceId ? 'Update Advice' : 'Add Advice'}
                    </Button>
                  </div>
                </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Add Consideration Button - Primary action */}
        <div className="pt-6">
          <button
            type="button"
            onClick={addConsideration}
            className="inline-flex items-center gap-x-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-indigo-500"
          >
            <PlusIcon aria-hidden="true" className="size-5" />
            Add Consideration
          </button>
        </div>
      </div>
    </AssessmentLayout>
  )
}
