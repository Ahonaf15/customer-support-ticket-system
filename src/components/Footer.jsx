export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-14 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          <div className="lg:col-span-2 space-y-3">
            <h2 className="text-xl font-bold text-white">CS — Ticket System</h2>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Track, manage, and resolve customer support requests smoothly with clear status updates and priority handling.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#mission" className="hover:text-white transition-colors">Our Mission</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Sales</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href="#products" className="hover:text-white transition-colors">Products &amp; Services</a></li>
              <li><a href="#stories" className="hover:text-white transition-colors">Customer Stories</a></li>
              <li><a href="#apps" className="hover:text-white transition-colors">Download Apps</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Information &amp; Social Links
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors">Terms &amp; Conditions</a></li>
              <li><a href="#join" className="hover:text-white transition-colors">Join Us</a></li>
              <li className="pt-1 text-slate-300">CS — Ticket System</li>
              <li className="text-slate-400">support@csticket.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 text-center text-xs sm:text-sm text-slate-400">
          Copyright © 2026 CS — Ticket System. All rights reserved.
        </div>
      </div>
    </footer>
  );
}