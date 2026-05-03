export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Section 174 Compliance
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Stop Overpaying on R&amp;D Taxes.<br />
          <span className="text-[#58a6ff]">Know Your Section 174 Exposure.</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Section 174 now requires software companies to amortize R&amp;D costs over 5–15 years instead of expensing them immediately. Track every legislative update and calculate your exact tax impact — automatically.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Tracking — $199/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Trusted by 200+ software companies.</p>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 text-left">
          {[
            { title: 'Real-Time Legislative Updates', desc: 'Get notified the moment Section 174 rules change in Congress or the IRS issues new guidance.' },
            { title: 'Automated Cost Calculations', desc: 'Input your R&D payroll and contractor spend — we calculate your amortization schedule and tax liability instantly.' },
            { title: 'Accountant-Ready Reports', desc: 'Export clean PDF and CSV reports your CPA can use directly for tax filings and planning.' },
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-bold mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-20">
        <h2 className="text-3xl font-extrabold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <span className="bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Pro Plan</span>
          <div className="mt-6 mb-2">
            <span className="text-5xl font-extrabold text-white">$199</span>
            <span className="text-[#8b949e] ml-1">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-8">Everything you need to stay compliant and minimize your Section 174 tax burden.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited R&D cost entries',
              'Real-time Section 174 legislative alerts',
              'Automated amortization schedules',
              'Multi-year tax impact projections',
              'Accountant-ready PDF & CSV exports',
              'Priority email support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Get Started Now
          </a>
          <p className="mt-4 text-xs text-[#8b949e]">No contracts. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-extrabold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: 'What is Section 174 and why does it matter for software companies?',
              a: 'Section 174 of the US tax code governs how R&D expenses are deducted. Starting in 2022, the Tax Cuts and Jobs Act eliminated immediate expensing — software companies must now amortize domestic R&D costs over 5 years (15 years for foreign). This significantly increases taxable income for companies with large engineering teams.',
            },
            {
              q: 'How does the tracker calculate my tax impact?',
              a: 'You enter your software development costs — salaries, contractors, cloud infrastructure used for R&D — and we apply the current IRS amortization rules to generate your deduction schedule, estimated tax liability increase, and cash flow impact year by year.',
            },
            {
              q: 'Will I be notified if Section 174 is repealed or changed?',
              a: 'Yes. We monitor IRS guidance, Treasury regulations, and Congressional activity daily. If Section 174 rules change — including any retroactive relief — you receive an immediate email alert with a plain-English summary and updated calculations.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Section 174 Tracker. Not legal or tax advice. Consult a qualified CPA.
      </footer>
    </main>
  )
}
