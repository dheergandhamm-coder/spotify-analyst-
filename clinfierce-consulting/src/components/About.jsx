import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const values = [
  {
    icon: '⚡',
    title: 'Decisive Action',
    desc: 'We move with urgency and precision, delivering rapid results without compromising quality.',
  },
  {
    icon: '🎯',
    title: 'Clinical Depth',
    desc: 'Our consultants combine hands-on clinical backgrounds with world-class strategic frameworks.',
  },
  {
    icon: '📊',
    title: 'Data-Driven',
    desc: 'Every recommendation is backed by rigorous analysis and real-world healthcare benchmarks.',
  },
  {
    icon: '🤝',
    title: 'Embedded Partnership',
    desc: 'We work alongside your teams—not above them—ensuring lasting change and capability transfer.',
  },
]

function ScrollReveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 35 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left visual */}
          <ScrollReveal>
            <div className="relative">
              <div className="relative bg-[#0E5A52] rounded-3xl p-10 overflow-hidden">
                {/* Abstract circles */}
                <div className="absolute top-0 right-0 w-56 h-56 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10">
                  <span className="text-emerald-300 text-sm font-semibold uppercase tracking-widest">
                    Since 2006
                  </span>
                  <h3 className="text-3xl font-bold text-white mt-3 mb-6 leading-tight">
                    Trusted by the nation's most complex health systems
                  </h3>
                  <p className="text-white/70 text-base leading-relaxed mb-8">
                    From 25-bed critical access hospitals to 10,000-employee integrated
                    delivery networks—our work scales with your ambition.
                  </p>

                  {/* Clients logos placeholder */}
                  <div className="grid grid-cols-3 gap-3">
                    {['Ascension', 'HCA Health', 'Mayo Network', 'UCSF Health', 'Northwell', 'CommonSpirit'].map((name) => (
                      <div
                        key={name}
                        className="bg-white/10 border border-white/10 rounded-xl px-3 py-2.5 text-center"
                      >
                        <span className="text-white/80 text-xs font-medium">{name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl p-5 border border-gray-100 hidden lg:block">
                <div className="text-4xl font-extrabold text-[#0E5A52]">94%</div>
                <div className="text-sm text-gray-500 mt-1 max-w-[100px] leading-tight">
                  client retention rate
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right content */}
          <div>
            <ScrollReveal delay={0.1}>
              <span className="inline-block px-4 py-1.5 bg-[#0E5A52]/8 text-[#0E5A52] text-sm font-semibold rounded-full mb-4 tracking-wide uppercase">
                About Us
              </span>
              <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-5">
                Built by clinicians.{' '}
                <span className="text-[#0E5A52]">Powered by strategy.</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                ClinFierce was founded on a simple belief: the best healthcare consultants
                are those who have lived and breathed the clinical environment. Our team
                of physicians, nurses, and operators bring a fierceness to problem-solving
                that generic consultancies simply can't match.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v, i) => (
                <ScrollReveal key={v.title} delay={0.15 + i * 0.1}>
                  <div className="group p-5 rounded-2xl border border-gray-100 hover:border-[#0E5A52]/30 hover:shadow-md transition-all duration-300">
                    <div className="text-2xl mb-3">{v.icon}</div>
                    <h4 className="font-bold text-gray-900 mb-1.5 group-hover:text-[#0E5A52] transition-colors">
                      {v.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
