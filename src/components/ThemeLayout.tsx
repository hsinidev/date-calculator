import React, { useState, ReactNode } from 'react';

type ModalType = 'About' | 'Contact' | 'Guide' | 'Privacy' | 'Terms' | 'DMCA' | null;

const Modal: React.FC<{ isOpen: boolean; onClose: () => void; title: string; children: ReactNode }> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex justify-center items-center z-50 p-4 animate-fade-in" onClick={onClose}>
      <div className="bg-gray-900 border border-purple-500/50 rounded-2xl shadow-[0_0_50px_rgba(168,85,247,0.2)] w-full max-w-3xl text-gray-200 flex flex-col max-h-[85vh] relative" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="p-6 border-b border-gray-800 flex justify-between items-center bg-gray-900/50 rounded-t-2xl">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">{title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-6 text-gray-300 leading-relaxed custom-scrollbar">
          {children}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-800 bg-gray-900/50 rounded-b-2xl flex justify-end">
            <button onClick={onClose} className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all shadow-lg shadow-purple-900/20 font-medium">
                Close
            </button>
        </div>
      </div>
    </div>
  );
};


const ThemeLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const openModal = (modal: ModalType) => setActiveModal(modal);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="relative min-h-screen bg-[#050510] text-white font-sans overflow-x-hidden flex flex-col">
      {/* Immersive Galaxy Background */}
      <div className="fixed inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          {/* Deep Space Base */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-[#050510] to-black opacity-80"></div>
          
          {/* Nebula 1 */}
          <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-purple-900/20 rounded-full blur-[120px] animate-pulse-slow"></div>
          
          {/* Nebula 2 */}
          <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-pink-900/10 rounded-full blur-[100px] animate-pulse-slower"></div>
          
          {/* Stars/Dust layer simulation */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
          
          {/* Moving Gradient Accent */}
          <div className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] bg-gradient-to-tr from-transparent via-purple-500/5 to-transparent animate-gradient-spin"></div>
      </div>

      <style>{`
        @keyframes gradient-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-gradient-spin {
          animation: gradient-spin 60s linear infinite;
        }
        .animate-pulse-slow {
            animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-pulse-slower {
            animation: pulse 12s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes fade-in {
            from { opacity: 0; transform: scale(0.98); }
            to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
            animation: fade-in 0.2s ease-out forwards;
        }
        /* Custom Scrollbar for modals */
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.2);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(168, 85, 247, 0.3);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(168, 85, 247, 0.5);
        }
      `}</style>
      
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/10 backdrop-blur-md border-b border-white/5 z-40 transition-all duration-300">
        <nav className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/30">D</div>
             <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white">
               Doodax
             </h1>
          </div>
          
          <div className="flex flex-wrap justify-center gap-1 md:gap-2">
            {['About', 'Guide', 'Privacy', 'Terms', 'DMCA', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => openModal(item as ModalType)} 
                className="px-3 py-1.5 text-xs md:text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
              >
                {item === 'Privacy' ? 'Privacy' : item === 'Terms' ? 'Terms' : item}
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* Main Content Spacer for fixed header */}
      <div className="h-24"></div>

      <main className="relative z-10 flex-grow flex flex-col items-center justify-start w-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-black/40 backdrop-blur-lg border-t border-white/5 mt-20 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
                <h4 className="text-lg font-bold text-white mb-2">Doodax</h4>
                <p className="text-sm text-gray-400 max-w-xs">Precise temporal calculations for developers, planners, and the curious.</p>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-2 text-sm text-gray-400">
               <p>
                  Powered by <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors">HSINI MOHAMED</a>
               </p>
               <div className="flex items-center gap-4">
                 <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">doodax.com</a>
                 <span className="text-gray-600">•</span>
                 <a href="mailto:hsini.web@gmail.com" className="hover:text-white transition-colors">hsini.web@gmail.com</a>
               </div>
               <p className="text-xs text-gray-600 mt-2">© {new Date().getFullYear()} Doodax. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals with Extended "Professional" Content */}
      <Modal isOpen={activeModal === 'About'} onClose={closeModal} title="About Doodax">
        <div className="prose prose-invert max-w-none">
          <p className="lead text-lg text-purple-200">Doodax is a premier digital utility dedicated to the precision measurement of time.</p>
          <p>Founded on the principle that time is our most valuable resource, Doodax was created to provide a seamless, aesthetically pleasing, and mathematically rigorous tool for calculating date differences. Unlike standard calculators that often overlook leap years or month-end irregularities, Doodax utilizes a custom-engineered algorithm ensuring 100% accuracy.</p>
          <h3 className="text-xl font-bold text-white mt-6 mb-2">Our Mission</h3>
          <p>To empower users—from project managers and software developers to event planners—with reliable temporal data presented in a clear, actionable format.</p>
          <h3 className="text-xl font-bold text-white mt-6 mb-2">The Technology</h3>
          <p>Doodax is built using the latest web technologies, including React 18, TypeScript for type safety, and Tailwind CSS for a responsive, modern design. Our calculations are performed entirely client-side, ensuring instant results and maximum privacy.</p>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'Contact'} onClose={closeModal} title="Contact Support">
        <p className="mb-4">We are dedicated to providing exceptional support. Whether you have found a bug, have a feature request, or just want to say hello, we are here to listen.</p>
        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 space-y-4">
            <div>
                <h4 className="text-sm uppercase tracking-wide text-gray-500 font-bold mb-1">Official Email</h4>
                <a href="mailto:hsini.web@gmail.com" className="text-xl text-purple-400 hover:text-purple-300 font-medium">hsini.web@gmail.com</a>
            </div>
            <div>
                <h4 className="text-sm uppercase tracking-wide text-gray-500 font-bold mb-1">Website</h4>
                <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="text-xl text-purple-400 hover:text-purple-300 font-medium">www.doodax.com</a>
            </div>
            <div>
                <h4 className="text-sm uppercase tracking-wide text-gray-500 font-bold mb-1">Developer</h4>
                <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-300 hover:text-white transition-colors">HSINI MOHAMED</a>
            </div>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'Guide'} onClose={closeModal} title="User Manual">
        <div className="space-y-6">
            <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                    <h4 className="font-bold text-white mb-1">Input Selection</h4>
                    <p className="text-sm">Select your <strong>Start Date</strong> and <strong>End Date</strong> using the calendar interface. You can click on the year or month in the calendar popup to navigate quickly through time.</p>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                    <h4 className="font-bold text-white mb-1">Inclusivity Toggle</h4>
                    <p className="text-sm">Use the <strong>"Include End Date"</strong> toggle switch. By default, date differences are calculated as duration (Start to End). Enabling this adds +1 day to the total count, treating the period as a closed interval [Start, End].</p>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                    <h4 className="font-bold text-white mb-1">Understanding Results</h4>
                    <p className="text-sm">The dashboard displays:
                        <ul className="list-disc list-inside mt-2 text-gray-400">
                            <li><strong>Full Breakdown:</strong> Years, Months, and Days.</li>
                            <li><strong>Total Days:</strong> The absolute number of days elapsed.</li>
                            <li><strong>Weeks:</strong> Total weeks (decimal precision).</li>
                            <li><strong>Hours:</strong> Total hours elapsed.</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'Privacy'} onClose={closeModal} title="Privacy Policy">
        <div className="text-sm space-y-4">
            <p><strong>Last Updated: May 20, 2024</strong></p>
            <p>At Doodax ("we", "us", "our"), accesible from doodax.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Doodax and how we use it.</p>
            
            <h4 className="font-bold text-white">1. Data Collection</h4>
            <p>Doodax operates as a <strong>client-side application</strong>. This means that when you input dates into our calculator, that data is processed exclusively within your web browser using JavaScript. We do not transmit your input data to any external server, database, or cloud storage. Your calculations remain strictly on your device.</p>

            <h4 className="font-bold text-white">2. Log Files</h4>
            <p>Doodax follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>

            <h4 className="font-bold text-white">3. Cookies and Web Beacons</h4>
            <p>Like any other website, Doodax may use "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>

            <h4 className="font-bold text-white">4. Third Party Privacy Policies</h4>
            <p>Doodax's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information.</p>

            <h4 className="font-bold text-white">5. GDPR Data Protection Rights</h4>
            <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following: The right to access, rectification, erasure, restrict processing, object to processing, and data portability.</p>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'Terms'} onClose={closeModal} title="Terms of Service">
        <div className="text-sm space-y-4">
            <p><strong>Effective Date: May 20, 2024</strong></p>
            
            <h4 className="font-bold text-white">1. Agreement to Terms</h4>
            <p>By accessing our website at doodax.com, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>

            <h4 className="font-bold text-white">2. Use License</h4>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on Doodax's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>

            <h4 className="font-bold text-white">3. Disclaimer</h4>
            <p>The materials on Doodax's website are provided on an 'as is' basis. Doodax makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            <p>Further, while we strive for mathematical perfection, Doodax does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website.</p>

            <h4 className="font-bold text-white">4. Limitations</h4>
            <p>In no event shall Doodax or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Doodax's website.</p>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'DMCA'} onClose={closeModal} title="DMCA Notice">
        <div className="text-sm space-y-4">
            <p>Doodax respects the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the Service infringes the copyright or other intellectual property infringement of any person.</p>
            <p>If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement that is taking place through the Service, you must submit your notice in writing to the attention of "Copyright Agent" via email to <strong>hsini.web@gmail.com</strong> and include in your notice a detailed description of the alleged infringement.</p>
            <p>You may be held accountable for damages (including costs and attorneys' fees) for misrepresenting that any Content is infringing your copyright.</p>
        </div>
      </Modal>

    </div>
  );
};

export default ThemeLayout;