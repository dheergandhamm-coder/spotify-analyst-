import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0E5A52]">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0E5A52] via-[#094840] to-[#062e28]" />

      {/* Abstract pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center py-24 lg:py-0">
          {/* Left: Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-white/90 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
              Healthcare Strategy & Innovation
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight mb-6"
            >
              Fierce Clarity.{' '}
              <span className="text-emerald-300">Clinical</span>{' '}
              Precision.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-white/70 leading-relaxed mb-10 max-w-xl"
            >
              ClinFierce Consulting drives transformative outcomes for healthcare
              organizations—combining deep clinical expertise with bold strategic vision
              to navigate complexity and accelerate growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#services"
                className="px-7 py-3.5 bg-white text-[#0E5A52] font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl"
              >
                Explore Services
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 border border-white/30 text-white font-medium rounded-xl hover:bg-white/10 transition-colors"
              >
                Talk to an Expert →
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-14 flex flex-wrap gap-8"
            >
              {[
                { value: '200+', label: 'Healthcare Clients' },
                { value: '$4B+', label: 'Value Delivered' },
                { value: '18yr', label: 'Industry Expertise' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-3xl font-bold text-white">{stat.value}</span>
                  <span className="text-sm text-white/60 mt-0.5">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                  <span className="ml-2 text-white/40 text-xs font-mono">clinfierce-dashboard.app</span>
                </div>

                {/* Mock dashboard content */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white/70 text-sm">Q4 Strategic Performance</span>
                    <span className="text-emerald-300 text-sm font-semibold">↑ 34%</span>
                  </div>

                  {/* Bar chart mock */}
                  <div className="space-y-2">
                    {[
                      { label: 'Revenue Optimization', pct: 87 },
                      { label: 'Patient Outcomes', pct: 93 },
                      { label: 'Operational Efficiency', pct: 78 },
                      { label: 'Regulatory Compliance', pct: 99 },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="flex justify-between text-xs text-white/60 mb-1">
                          <span>{item.label}</span>
                          <span>{item.pct}%</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-emerald-400 to-emerald-300 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${item.pct}%` }}
                            transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom metrics */}
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {[
                      { label: 'Projects', val: '142' },
                      { label: 'Engagements', val: '38' },
                      { label: 'NPS Score', val: '94' },
                    ].map((m) => (
                      <div key={m.label} className="bg-white/5 rounded-xl p-3 text-center">
                        <div className="text-white font-bold text-lg">{m.val}</div>
                        <div className="text-white/50 text-xs">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating accent card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0E5A52]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#0E5A52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Certified Excellence</div>
                    <div className="text-xs text-gray-500">NCQA Gold Standard</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border-2 border-white/20 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
