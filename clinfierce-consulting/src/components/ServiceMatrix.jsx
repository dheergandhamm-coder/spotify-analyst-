import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    category: 'Strategy',
    title: 'Revenue Cycle Transformation',
    description:
      'End-to-end revenue cycle optimization—from charge capture to collections—driving measurable improvements in cash flow, denial rates, and net revenue yield.',
    outcomes: ['↑ 28% net revenue', '↓ 40% denials', '3-month ROI'],
    accent: 'from-[#0E5A52] to-[#1a7a70]',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    category: 'Operations',
    title: 'Clinical Operations Excellence',
    description:
      'Streamline clinical workflows, reduce administrative burden, and improve care coordination across departments—enabling clinicians to focus on what matters most.',
    outcomes: ['↑ 35% efficiency', '↓ 22% overtime', '9pt HCAHPS gain'],
    accent: 'from-[#094840] to-[#0E5A52]',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    category: 'Compliance',
    title: 'Regulatory & Quality Advisory',
    description:
      'Navigate complex regulatory landscapes with confidence. From Joint Commission readiness to value-based care contracts, we ensure you exceed compliance standards.',
    outcomes: ['99.8% compliance', 'Zero citations', 'Full accreditation'],
    accent: 'from-[#1a7a70] to-[#0E5A52]',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    category: 'Technology',
    title: 'Digital Health Acceleration',
    description:
      'Harness emerging health technologies—AI diagnostics, telehealth platforms, and EHR optimization—to deliver superior patient experiences and operational agility.',
    outcomes: ['AI-powered insights', 'EHR optimization', '↑ 50% telehealth'],
    accent: 'from-[#0E5A52] to-[#094840]',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    category: 'Finance',
    title: 'Healthcare Financial Strategy',
    description:
      'Capital planning, cost reduction, and financial modeling tailored for healthcare systems—building long-term financial resilience and margin improvement.',
    outcomes: ['↓ 18% total cost', 'Capital optimization', '5yr strategic plan'],
    accent: 'from-[#094840] to-[#1a7a70]',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    category: 'Growth',
    title: 'Market Expansion & M&A',
    description:
      'Strategic guidance through mergers, acquisitions, and market entry—identifying opportunities, conducting due diligence, and integrating for maximum value creation.',
    outcomes: ['12 successful M&As', 'Market analysis', 'Integration support'],
    accent: 'from-[#1a7a70] to-[#094840]',
  },
]

function ServiceCard({ service, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className="group relative bg-white rounded-2xl border border-gray-100 p-8 hover:border-[#0E5A52]/30 hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
    >
      {/* Hover gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />

      {/* Top accent bar */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.accent} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl`} />

      <div className="relative z-10">
        {/* Category badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0E5A52]/8 text-[#0E5A52] text-xs font-semibold rounded-full mb-5 tracking-wide uppercase">
          {service.category}
        </div>

        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-[#0E5A52]/8 text-[#0E5A52] flex items-center justify-center mb-5 group-hover:bg-[#0E5A52] group-hover:text-white transition-all duration-300 group-hover:scale-110">
          {service.icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0E5A52] transition-colors duration-200">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Outcomes */}
        <div className="flex flex-wrap gap-2">
          {service.outcomes.map((outcome) => (
            <span
              key={outcome}
              className="px-2.5 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-lg border border-gray-100 group-hover:bg-[#0E5A52]/5 group-hover:border-[#0E5A52]/20 group-hover:text-[#0E5A52] transition-all duration-200"
            >
              {outcome}
            </span>
          ))}
        </div>

        {/* Learn more arrow */}
        <div className="mt-6 flex items-center gap-2 text-[#0E5A52] text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-2 group-hover:translate-y-0">
          Learn more
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </motion.div>
  )
}

export default function ServiceMatrix() {
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-100px' })

  return (
    <section id="services" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#0E5A52]/8 text-[#0E5A52] text-sm font-semibold rounded-full mb-4 tracking-wide uppercase">
            Our Expertise
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-5">
            Comprehensive Service Matrix
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Six integrated service lines built to address the full spectrum of healthcare
            challenges—from the clinical floor to the boardroom.
          </p>
        </motion.div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
