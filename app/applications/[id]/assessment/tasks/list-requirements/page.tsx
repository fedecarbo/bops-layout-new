'use client'

import { use } from 'react'
import AssessmentLayout from '../../AssessmentLayout'

interface PageProps {
  params: Promise<{ id: string }>
}

export default function ListRequirementsPage({ params }: PageProps) {
  const { id } = use(params)

  return (
    <AssessmentLayout
      applicationId={id}
      pageTitle="List of Requirements"
      currentTaskId={12}
    >
      <div className="rounded-lg border border-zinc-100 bg-zinc-50 p-12 min-h-[480px] flex items-center justify-center">
        <p className="text-lg text-zinc-400">Content coming soon</p>
      </div>
    </AssessmentLayout>
  )
}
