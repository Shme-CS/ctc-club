import { CertificateBadge, CompletionBadge } from '@/components/ui/floating-badge';

function LaptopImage() {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-900/20">
      {/* Laptop Screen */}
      <div className="aspect-[16/10] relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Ubuntu Sidebar */}
        <div className="absolute left-0 top-0 bottom-0 w-14 bg-gray-900/60 backdrop-blur-sm flex flex-col items-center py-4 gap-2.5">
          {[...Array(9)].map((_, i) => (
            <div 
              key={i} 
              className={`w-10 h-10 rounded-lg ${i === 3 ? 'bg-orange-500/40' : 'bg-gray-700/40'} backdrop-blur-sm`}
            />
          ))}
        </div>
        
        {/* Design Grid Content */}
        <div className="absolute inset-0 flex items-center justify-center ml-14">
          <div className="grid grid-cols-3 gap-4 p-8">
            <div className="w-24 h-24 rounded-lg bg-blue-500/20 border-2 border-blue-400/40 backdrop-blur-sm" />
            <div className="w-24 h-24 rounded-lg bg-purple-500/20 border-2 border-purple-400/40 backdrop-blur-sm" />
            <div className="w-24 h-24 rounded-lg bg-blue-500/20 border-2 border-blue-400/40 backdrop-blur-sm" />
          </div>
        </div>

        {/* Bottom toolbar simulation */}
        <div className="absolute bottom-0 left-14 right-0 h-12 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700/50" />
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
