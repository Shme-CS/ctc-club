import { CertificateBadge, CompletionBadge } from '@/components/ui/floating-badge';

function LaptopImage() {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-900/20">
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
        <div className="absolute left-0 top-0 bottom-0 w-14 bg-gray-900/80 backdrop-blur-sm flex flex-col items-center py-4 gap-2.5 z-10">
          {[...Array(9)].map((_, i) => (
            <div 
              key={i} 
              className={`w-10 h-10 rounded-lg ${
                i === 3 ? 'bg-orange-600/60' : 'bg-gray-700/50'
              } backdrop-blur-sm`}
            />
          ))}
        </div>
        
        {/* Main Content - 3 Colored Squares */}
        <div className="absolute inset-0 flex items-center justify-center ml-14">
          <div className="grid grid-cols-3 gap-6 p-8">
            {/* Blue Square */}
            <div className="w-32 h-32 rounded-2xl bg-blue-600/30 border-2 border-blue-500/50 backdrop-blur-sm shadow-lg" />
            {/* Purple Square */}
            <div className="w-32 h-32 rounded-2xl bg-purple-600/30 border-2 border-purple-500/50 backdrop-blur-sm shadow-lg" />
            {/* Blue Square */}
            <div className="w-32 h-32 rounded-2xl bg-blue-600/30 border-2 border-blue-500/50 backdrop-blur-sm shadow-lg" />
          </div>
        </div>

        {/* Bottom toolbar */}
        <div className="absolute bottom-0 left-14 right-0 h-12 bg-gray-900/90 backdrop-blur-sm border-t border-gray-700/50" />
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
      <LaptopImage />
      <FloatingBadges />
    </div>
  );
}
