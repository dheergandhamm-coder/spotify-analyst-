export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-400 py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#0E5A52] flex items-center justify-center">
                <span className="text-white font-bold text-xs">CF</span>
              </div>
              <span className="font-semibold text-white text-lg">ClinFierce</span>
            </div>
            <p className="text-sm leading-relaxed">
              Strategic healthcare consulting built on clinical expertise and bold vision.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm">
              {['Revenue Cycle', 'Clinical Operations', 'Regulatory Advisory', 'Digital Health', 'Financial Strategy', 'M&A Advisory'].map((s) => (
                <li key={s}><a href="#services" className="hover:text-white transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm">
              {['About Us', 'Leadership', 'Case Studies', 'Insights', 'Careers', 'Press'].map((s) => (
                <li key={s}><a href="#about" className="hover:text-white transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:hello@clinfierce.com" className="hover:text-white transition-colors">hello@clinfierce.com</a></li>
              <li><a href="tel:+18005246332" className="hover:text-white transition-colors">1-800-CLINFC</a></li>
              <li className="text-gray-500 pt-1">Chicago, IL · New York, NY<br />San Francisco, CA</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>&copy; {year} ClinFierce Consulting, LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
