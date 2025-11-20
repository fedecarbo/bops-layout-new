'use client'

import { use } from 'react'
import AssessmentLayout from '../../AssessmentLayout'

interface PageProps {
  params: Promise<{ id: string }>
}

export default function ProposalDescriptionPage({ params }: PageProps) {
  const { id } = use(params)

  return (
    <AssessmentLayout
      applicationId={id}
      pageTitle="Proposal Description"
      currentTaskId={2}
    >
      <div className="rounded-lg border border-zinc-100 bg-zinc-50 p-12 min-h-[480px] flex items-center justify-center">
        <p className="text-lg text-zinc-400">Content coming soon</p>
      </div>
    </AssessmentLayout>
  )
}
