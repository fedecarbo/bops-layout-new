import type { Metadata } from 'next'
import Link from 'next/link'
import { mockPlanningApplications } from '@/lib/mock-data/planning-applications'

export const metadata: Metadata = {
  title: 'Application Details',
}

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function ApplicationDetailsPage({ params }: PageProps) {
  // Await params (Next.js 16 requirement)
  const { id } = await params

  // Get mock data for the application
  const application = mockPlanningApplications.find(app => app.id === id) ?? mockPlanningApplications[0]!

  return (
    <main className="min-h-screen bg-zinc-50 p-8">
      <div className="mx-auto max-w-4xl">
        {/* Back to home */}
        <Link
          href="/"
          className="inline-flex items-center text-sm text-zinc-600 hover:text-zinc-900 mb-6"
        >
          ← Back to Home
        </Link>

        {/* Application Details Card */}
        <div className="rounded-lg border border-zinc-200 bg-white p-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-zinc-900">{application.reference}</h1>
            <p className="mt-2 text-lg text-zinc-600">{application.address}</p>
          </div>

          <div className="space-y-4 border-t border-zinc-200 pt-6">
            <div>
              <dt className="text-sm font-medium text-zinc-500">Applicant</dt>
              <dd className="mt-1 text-base text-zinc-900">{application.applicantName}</dd>
            </div>

            <div>
              <dt className="text-sm font-medium text-zinc-500">Description</dt>
              <dd className="mt-1 text-base text-zinc-900">{application.description}</dd>
            </div>

            <div>
              <dt className="text-sm font-medium text-zinc-500">Status</dt>
              <dd className="mt-1">
                <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                  {application.status}
                </span>
              </dd>
            </div>

            <div>
              <dt className="text-sm font-medium text-zinc-500">Submitted Date</dt>
              <dd className="mt-1 text-base text-zinc-900">{application.submittedDate}</dd>
            </div>

            <div>
              <dt className="text-sm font-medium text-zinc-500">Assigned To</dt>
              <dd className="mt-1 text-base text-zinc-900">{application.assignedTo}</dd>
            </div>
          </div>

          {/* CTA to Assessment */}
          <div className="mt-8 border-t border-zinc-200 pt-6">
            <Link
              href={`/applications/${application.id}/assessment`}
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              Go to Assessment →
            </Link>
          </div>
        </div>

        {/* Placeholder for future sections */}
        <div className="mt-6 rounded-lg border border-zinc-200 bg-white p-6">
          <p className="text-sm text-zinc-500">
            Additional sections (documents, history, etc.) will be designed later
          </p>
        </div>
      </div>
    </main>
  )
}
