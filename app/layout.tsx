import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Section 174 Tracker — R&D Tax Deduction Monitor for Software Companies',
  description: 'Track Section 174 tax law changes and calculate their impact on your software development costs. Built for software companies and their accountants.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e7c24ec9-ff56-4afe-9770-c096bc79486c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
