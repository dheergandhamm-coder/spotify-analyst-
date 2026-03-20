import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative bg-[#0E5A52] rounded-3xl overflow-hidden px-10 py-16 lg:px-16 lg:py-20 text-center"
        >
          {/* Background circles */}
          <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-white/5 -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-56 h-56 rounded-full bg-white/5 translate-y-1/2" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-white/15 text-white/90 text-sm font-semibold rounded-full mb-6 tracking-wide">
              Start Your Transformation
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
              Ready to elevate your organization?
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-10">
              Schedule a complimentary 60-minute strategy session with a ClinFierce
              senior consultant and discover the impact we can create together.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:hello@clinfierce.com"
                className="px-8 py-4 bg-white text-[#0E5A52] font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-lg text-base"
              >
                Book a Strategy Session
              </a>
              <a
                href="tel:+18005246332"
                className="px-8 py-4 border border-white/30 text-white font-medium rounded-xl hover:bg-white/10 transition-colors text-base"
              >
                Call Us: 1-800-CLINFC
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
