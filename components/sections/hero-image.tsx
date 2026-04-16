import { CertificateBadge, CompletionBadge } from '@/components/ui/floating-badge';

/**
 * Laptop mockup with grid background and colored squares
 */
function LaptopImage() {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-900/25 ring-1 ring-gray-900/10">
      {/* Laptop Screen */}
      <div className="aspect-[16/10] relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Grid Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-8 grid-rows-6 h-full w-full gap-px">
            {[...Array(48)].map((_, i) => (
              <div key={i} className="bg-gray-700/30" />
            ))}
          </div>
        </div>

        {/* Ubuntu Sidebar */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gray-900/80 backdrop-blur-sm flex flex-col items-center py-5 gap-3 z-10 border-r border-gray-700/50">
          {[...Array(9)].map((_, i) => (
            <div 
              key={i} 
              className={`w-11 h-11 rounded-lg ${
                i === 3 ? 'bg-orange-600/70 shadow-lg shadow-orange-600/30' : 'bg-gray-700/60 hover:bg-gray-600/60'
              } backdrop-blur-sm transition-colors duration-200`}
            />
          ))}
        </div>
        
        {/* Main Content - 3 Colored Squares */}
        <div className="absolute inset-0 flex items-center justify-center ml-16">
          <div className="grid grid-cols-3 gap-8 p-10">
            {/* Blue Square */}
            <div className="w-36 h-36 rounded-2xl bg-blue-600/40 border-2 border-blue-500/60 backdrop-blur-sm shadow-xl shadow-blue-500/20 hover:scale-105 transition-transform duration-300" />
            {/* Purple Square */}
            <div className="w-36 h-36 rounded-2xl bg-purple-600/40 border-2 border-purple-500/60 backdrop-blur-sm shadow-xl shadow-purple-500/20 hover:scale-105 transition-transform duration-300" />
            {/* Blue Square */}
            <div className="w-36 h-36 rounded-2xl bg-blue-600/40 border-2 border-blue-500/60 backdrop-blur-sm shadow-xl shadow-blue-500/20 hover:scale-105 transition-transform duration-300" />
          </div>
        </div>

        {/* Bottom toolbar */}
        <div className="absolute bottom-0 left-16 right-0 h-14 bg-gray-900/90 backdrop-blur-sm border-t border-gray-700/50" />
      </div>
    </div>
  );
}

function FloatingBadges() {
  return (
    <>
      <CertificateBadge />
      <CompletionBadge />
    </>
  );
}

export function HeroImage() {
  return (
    <div className="relative">
      <div className="relative z-0">
        <LaptopImage />
      </div>
      <div className="relative z-10">
        <FloatingBadges />
      </div>
    </div>
  );
}
