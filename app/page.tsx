export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold mb-4">Prototype BOPS</h1>
        <p className="text-lg text-gray-600">
          UK back office planning system for processing planning applications
        </p>
        <div className="mt-8 p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Next.js 16 with Turbopack</li>
            <li>TypeScript 5.1+ (strict mode)</li>
            <li>Tailwind CSS v4.1</li>
            <li>Catalyst UI Components</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
