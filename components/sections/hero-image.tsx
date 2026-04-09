import { CertificateBadge, CompletionBadge } from '@/components/ui/floating-badge';

function LaptopImage() {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-900/20">
      {/* Laptop Screen */}
      <div className="aspect-[16/10] relative bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
        {/* Ubuntu Sidebar */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gray-900/80 backdrop-blur-sm flex flex-col items-center py-6 gap-3">
          {/* Orange active icon */}
          <div className="w-9 h-9 rounded-lg bg-orange-600/80 backdrop-blur-sm" />
          {/* Other icons */}
          {[...Array(8)].map((_, i) => (
            <div 
              key={i} 
              className="w-9 h-9 rounded-lg bg-gray-700/40 backdrop-blur-sm"
            />
          ))}
        </div>
        
        {/* Design Grid Content - 3 Large Squares */}
        <div className="absolute inset-0 flex items-center justify-center ml-12 p-12">
          <div className="grid grid-cols-3 gap-6 w-full max-w-2xl">
            {/* Blue Square */}
            <div className="aspect-square rounded-2xl bg-blue-600/30 border-2 border-blue-500/50 backdrop-blur-sm" />
            {/* Purple Square */}
            <div className="aspect-square rounded-2xl bg-purple-600/30 border-2 border-purple-500/50 backdrop-blur-sm" />
            {/* Blue Square */}
            <div className="aspect-square rounded-2xl bg-blue-600/30 border-2 border-blue-500/50 backdrop-blur-sm" />
          </div>
        </div>

        {/* Bottom toolbar */}
        <div className="absolute bottom-0 left-12 right-0 h-10 bg-gray-900/90 backdrop-blur-sm border-t border-gray-700/50" />
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
