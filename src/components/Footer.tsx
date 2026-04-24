const columns = [
  {
    title: 'Services',
    links: ['Web Applications', 'Mobile Apps', 'Shopify & Commerce', 'Cloud & DevOps', 'AI & Data'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Press', 'Partners'],
  },
  {
    title: 'Resources',
    links: ['Case Studies', 'Engineering Blog', 'Open Source', 'Changelog'],
  },
  {
    title: 'Contact',
    links: ['hello@vex.dev', '+1 (415) 555-0199', 'San Francisco', 'Berlin'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2">
            <div className="text-3xl font-semibold tracking-tight mb-4">VEX</div>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              A software studio for companies that need to move faster than their
              competitors and ship higher quality than their customers expect.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
                {col.title}
              </p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-white hover:text-gray-400 transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8 border-t border-white/10">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} VEX Labs, Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
