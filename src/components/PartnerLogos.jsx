import React from "react";

// Branch Specialists Logo SVG Component
const BranchSpecialists = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full max-h-32" aria-label="Branch Specialists Logo">
    <rect width="200" height="200" rx="16" fill="#8b1c1c" />
    {/* Tree Outline */}
    <g transform="translate(100, 110)">
      {/* Trunk */}
      <path d="M-4,15 C-4,5 -2,-5 -2,-25 C-2,-30 -3,-35 -5,-40 C-3,-42 -1,-42 1,-40 C-1,-35 0,-30 0,-25 C0,-5 2,5 2,15 Z" fill="#ffffff" />
      {/* Major Branch Left */}
      <path d="M-2,-20 C-10,-25 -20,-28 -28,-22 C-32,-20 -35,-15 -32,-18 C-25,-25 -15,-25 -2,-22" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M-15,-24 C-20,-35 -30,-40 -40,-35 C-42,-34 -45,-30 -42,-33 C-35,-38 -25,-35 -15,-27" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
      {/* Major Branch Right */}
      <path d="M2,-20 C10,-25 20,-28 28,-22 C32,-20 35,-15 32,-18 C25,-25 15,-25 2,-22" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M15,-24 C20,-35 30,-40 40,-35 C42,-34 45,-30 42,-33 C35,-38 25,-35 15,-27" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
      {/* Center Branches */}
      <path d="M-1,-28 C-5,-42 -5,-55 0,-65 C5,-55 5,-42 1,-28" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Leaves Group */}
      <g fill="#ffffff" opacity="0.95">
        {/* Left side leaves */}
        <path d="M-28,-22 C-34,-25 -32,-30 -28,-27 C-24,-30 -22,-25 -28,-22 Z" />
        <path d="M-32,-18 C-38,-20 -36,-25 -32,-23 C-28,-25 -26,-20 -32,-18 Z" />
        <path d="M-40,-35 C-46,-38 -44,-43 -40,-40 C-36,-43 -34,-38 -40,-35 Z" />
        <path d="M-25,-38 C-29,-45 -25,-48 -23,-43 C-21,-48 -17,-45 -25,-38 Z" />
        {/* Right side leaves */}
        <path d="M28,-22 C34,-25 32,-30 28,-27 C24,-30 22,-25 28,-22 Z" />
        <path d="M32,-18 C38,-20 36,-25 32,-23 C28,-25 26,-20 32,-18 Z" />
        <path d="M40,-35 C46,-38 44,-43 40,-40 C36,-43 34,-38 40,-35 Z" />
        <path d="M25,-38 C29,-45 25,-48 23,-43 C21,-48 17,-45 25,-38 Z" />
        {/* Top/Center leaves */}
        <path d="M0,-65 C-5,-72 0,-76 0,-70 C0,-76 5,-72 0,-65 Z" />
        <path d="M-8,-55 C-15,-62 -10,-66 -8,-60 C-6,-66 -1,-62 -8,-55 Z" />
        <path d="M8,-55 C15,-62 10,-66 8,-60 C6,-66 1,-62 8,-55 Z" />
      </g>
    </g>
    {/* Text */}
    <text x="100" y="160" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="600" letterSpacing="1.5" fontFamily="Cinzel, Georgia, serif">BRANCH</text>
    <text x="100" y="176" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="400" letterSpacing="2" fontFamily="Cinzel, Georgia, serif">SPECIALISTS</text>
  </svg>
);

// KD Fence & Deck Services Logo SVG Component
const KDFenceAndDeck = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full max-h-32" aria-label="KD Fence and Deck Services Logo">
    {/* Clean background container */}
    <rect width="200" height="200" rx="16" fill="#ffffff" />
    
    <g transform="translate(10, 15)">
      {/* Icon: House with Fence */}
      <g stroke="#4a121a" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="translate(15, 20)">
        {/* House outline */}
        <path d="M10,35 L10,15 L25,5 L40,15 L40,35 Z" />
        {/* Chimney */}
        <path d="M32,10 L32,6 L36,6 L36,13" />
        {/* Roof line details */}
        <path d="M5,17 L25,2 L45,17" />
        {/* Fence details */}
        <path d="M0,35 L50,35" />
        <path d="M5,35 L5,28 L10,25 L15,28 L15,35" />
        <path d="M20,35 L20,28 L25,25 L30,28 L30,35" />
        <path d="M35,35 L35,28 L40,25 L45,28 L45,35" />
        <path d="M0,30 L50,30" />
      </g>

      {/* Large KD letters */}
      <text x="120" y="58" fill="#4a121a" fontSize="48" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="-1">KD</text>

      {/* Bottom Banner */}
      <rect x="0" y="85" width="180" height="26" rx="4" fill="#4a121a" />
      <text x="90" y="102" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="800" letterSpacing="0.5" fontFamily="system-ui, sans-serif">KD FENCE & DECK SERVICES</text>
    </g>
  </svg>
);

// KD Tree Service Logo SVG Component
const KDTreeService = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full max-h-32" aria-label="KD Tree Service Logo">
    <rect width="200" height="200" rx="16" fill="#ffffff" />
    
    <g transform="translate(15, 20)">
      {/* KD Text & Leaf */}
      <g transform="translate(10, 20)">
        {/* K */}
        <text x="5" y="70" fill="#15803d" fontSize="64" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif">K</text>
        {/* D */}
        <text x="52" y="70" fill="#15803d" fontSize="64" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif">D</text>
        
        {/* Leaf on top right of D */}
        <path d="M96,22 C115,20 120,35 110,48 C100,52 86,46 96,22 Z" fill="#15803d" />
        <path d="M96,22 Q105,37 110,48" stroke="#ffffff" strokeWidth="1.5" fill="none" />
      </g>

      {/* House outline under KD */}
      <path d="M22,96 L85,96 M32,96 L32,90 L40,84 L48,90 L48,96" stroke="#15803d" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* Subtext Tree Service */}
      <text x="85" y="118" textAnchor="middle" fill="#111827" fontSize="16" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.5">Tree Service</text>
    </g>
  </svg>
);

// All Pro Shinning Logo SVG Component
const AllProShinning = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full max-h-32" aria-label="All Pro Shinning Logo">
    <rect width="200" height="200" rx="16" fill="#ffffff" />
    
    <g transform="translate(10, 5)">
      {/* Sparkles */}
      <path d="M125,25 L127,32 L134,34 L127,36 L125,43 L123,36 L116,34 L123,32 Z" fill="#38bdf8" />
      <path d="M35,62 L36,66 L40,67 L36,68 L35,72 L34,68 L30,67 L34,66 Z" fill="#38bdf8" />

      {/* Cloud & Cleaner Graphic */}
      <g transform="translate(30, 20)">
        {/* Cloud Outline */}
        <path d="M25,50 C15,50 10,42 15,32 C12,20 25,10 40,15 C48,5 65,10 70,22 C82,22 88,32 82,42 C85,50 75,55 68,52" 
              stroke="#0ea5e9" strokeWidth="4.5" fill="none" strokeLinecap="round" />
        
        {/* House inside cloud */}
        <path d="M42,50 L42,42 L50,36 L58,42 L58,50 Z" stroke="#38bdf8" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
        <rect x="47" y="44" width="6" height="6" fill="#38bdf8" rx="1" />
        
        {/* Squeegee Wiper */}
        <path d="M12,52 L48,22" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
        {/* Blue streak from squeegee */}
        <path d="M22,46 L65,12" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
      </g>

      {/* Text group */}
      <g transform="translate(0, 102)">
        <text x="90" y="20" textAnchor="middle" fill="#0284c7" fontSize="18" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="1">ALL PRO</text>
        <text x="90" y="38" textAnchor="middle" fill="#1e3a8a" fontSize="16" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="0.8">SHINNING</text>
      </g>
    </g>
  </svg>
);

// 10X Tree Services Logo SVG Component
const TenXTreeServices = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full max-h-32" aria-label="10X Tree Services Logo">
    <rect width="200" height="200" rx="16" fill="#ffffff" />
    
    <g transform="translate(15, 20)">
      {/* 10X styled text */}
      <g transform="translate(25, 20)">
        {/* 10 */}
        <text x="0" y="55" fill="#111827" fontSize="62" fontWeight="900" fontStyle="italic" fontFamily="'Arial Black', sans-serif">10</text>
        {/* X */}
        <text x="80" y="55" fill="#dc2626" fontSize="62" fontWeight="900" fontStyle="italic" fontFamily="'Arial Black', sans-serif">X</text>
      </g>

      {/* Bottom Subtext */}
      <text x="85" y="112" textAnchor="middle" fill="#111827" fontSize="13" fontWeight="800" letterSpacing="3" fontFamily="system-ui, sans-serif">TREE SERVICES</text>
    </g>
  </svg>
);

// Prime Landscapers Logo SVG Component
const PrimeLandscapers = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full max-h-32" aria-label="Prime Landscapers Logo">
    <rect width="200" height="200" rx="16" fill="#ffffff" />
    
    <g transform="translate(10, 10)">
      {/* Red flower petals */}
      <g fill="#d32f2f" transform="translate(90, 68)">
        {/* Center circle */}
        <circle cx="0" cy="0" r="10" />
        {/* Top petal */}
        <path d="M-8,-12 C-16,-34 0,-44 0,-44 C0,-44 16,-34 8,-12 C4,-6 -4,-6 -8,-12 Z" />
        {/* Left petal 1 */}
        <path d="M-13,-5 C-33,-17 -37,-1 -37,-1 C-37,-1 -25,12 -9,7 C-4,5 -8,0 -13,-5 Z" />
        {/* Right petal 1 */}
        <path d="M13,-5 C33,-17 37,-1 37,-1 C37,-1 25,12 9,7 C4,5 8,0 13,-5 Z" />
        {/* Left petal 2 (lower) */}
        <path d="M-10,7 C-26,20 -18,33 -18,33 C-18,33 -2,29 -1,12 C-1,7 -6,5 -10,7 Z" />
        {/* Right petal 2 (lower) */}
        <path d="M10,7 C26,20 18,33 18,33 C18,33 2,29 1,12 C1,7 6,5 10,7 Z" />
      </g>

      {/* Text details */}
      <text x="90" y="132" textAnchor="middle" fill="#d32f2f" fontSize="16" fontWeight="700" letterSpacing="2" fontFamily="Georgia, serif">PRIME</text>
      
      {/* Decorative dividing line */}
      <line x1="45" y1="140" x2="135" y2="140" stroke="#d32f2f" strokeWidth="1.5" />
      
      <text x="90" y="152" textAnchor="middle" fill="#d32f2f" fontSize="9" fontWeight="600" letterSpacing="1.5" fontFamily="Georgia, serif">LANDSCAPERS</text>
    </g>
  </svg>
);

// Soil and Seed Landscaping Logo SVG Component
const SoilAndSeed = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full max-h-32" aria-label="Soil and Seed Landscaping Logo">
    <rect width="200" height="200" rx="16" fill="#ffffff" />
    
    <g transform="translate(10, 12)">
      {/* Sprout Icon */}
      <g transform="translate(90, 56)">
        {/* Outer Ring */}
        <circle cx="0" cy="0" r="32" fill="none" stroke="#22c55e" strokeWidth="3" />
        {/* Break in ring at top right */}
        <circle cx="21" cy="-21" r="7" fill="#ffffff" />
        
        {/* Soil curve */}
        <path d="M-22,15 C-10,20 10,20 22,15 C20,25 -20,25 -22,15 Z" fill="#4b5563" />
        
        {/* Sprout stems and leaves */}
        <path d="M-1,16 L-1,-10 C-1,-18 -10,-24 -15,-20 C-20,-16 -12,-8 -5,-10" fill="none" stroke="#22c55e" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M1,-12 C10,-28 25,-26 22,-16 C19,-6 10,-8 2,-12" fill="none" stroke="#22c55e" strokeWidth="3.5" strokeLinecap="round" />
        {/* Stem center connection */}
        <path d="M0,16 L0,-12" fill="none" stroke="#22c55e" strokeWidth="3.5" />
      </g>

      {/* Text block */}
      <text x="90" y="125" textAnchor="middle" fill="#1f2937" fontSize="13" fontWeight="700" letterSpacing="0.5" fontFamily="system-ui, sans-serif">SOIL AND SEED</text>
      <text x="90" y="141" textAnchor="middle" fill="#4b5563" fontSize="11" fontWeight="600" letterSpacing="1.2" fontFamily="system-ui, sans-serif">LANDSCAPING</text>
    </g>
  </svg>
);

// All Pro Mobile Mechanics Logo SVG Component
const AllProMobileMechanics = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full max-h-32" aria-label="All Pro Mobile Mechanics Logo">
    {/* Dark background */}
    <rect width="200" height="200" rx="16" fill="#000000" />
    
    <g transform="translate(10, 18)">
      {/* Car Silhouette in White */}
      <path d="M45,45 Q75,43 85,32 Q95,20 120,20 Q145,20 160,35 Q175,40 180,48 L180,56 L20,56 L20,48 Q25,45 45,45 Z" fill="#ffffff" />
      <circle cx="50" cy="56" r="10" fill="#000000" stroke="#ffffff" strokeWidth="3" />
      <circle cx="150" cy="56" r="10" fill="#000000" stroke="#ffffff" strokeWidth="3" />

      {/* Red Gear on the left */}
      <g transform="translate(32, 105)" fill="#dc2626">
        {/* Outer teeth */}
        <circle cx="0" cy="0" r="18" />
        {/* Cutout gear shapes */}
        {Array.from({ length: 8 }).map((_, i) => (
          <rect key={i} x="-4" y="-24" width="8" height="48" transform={`rotate(${i * 45})`} rx="1" />
        ))}
        {/* Inner circle cutout */}
        <circle cx="0" cy="0" r="11" fill="#000000" />
        <circle cx="0" cy="0" r="6" fill="#dc2626" />
      </g>

      {/* Text elements */}
      <g transform="translate(62, 90)">
        <text x="0" y="10" fill="#ffffff" fontSize="9" fontWeight="700" letterSpacing="0.5" fontFamily="sans-serif">ALL PRO</text>
        <text x="0" y="24" fill="#ffffff" fontSize="13" fontWeight="900" letterSpacing="0.8" fontFamily="sans-serif">MOBILE</text>
        <text x="0" y="38" fill="#dc2626" fontSize="12" fontWeight="900" letterSpacing="0.8" fontFamily="sans-serif">MECHANICS</text>
      </g>
    </g>
  </svg>
);

// KD Associates Center Logo SVG Component (Premium Metallic Chrome Style)
const KDAssociatesLogo = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full max-h-36" aria-label="KD Associates Logo">
    <defs>
      {/* Ultra realistic metallic chrome gradient */}
      <linearGradient id="chrome-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f3f4f6" />
        <stop offset="20%" stopColor="#9ca3af" />
        <stop offset="40%" stopColor="#e5e7eb" />
        <stop offset="60%" stopColor="#4b5563" />
        <stop offset="80%" stopColor="#f9fafb" />
        <stop offset="100%" stopColor="#374151" />
      </linearGradient>

      {/* Shadow filter to give depth */}
      <filter id="logo-shadow" x="-10%" y="-10%" width="120%" height="125%" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#0f172a" floodOpacity="0.15" />
      </filter>
    </defs>
    
    <g transform="translate(10, 5)">
      {/* 3D Monogram symbol with drop shadow */}
      <g filter="url(#logo-shadow)">
        {/* Outer Loop of the 'D' */}
        <path d="M55,30 L115,30 C155,30 168,55 168,85 C168,115 155,140 115,140 L55,140 Z" 
              fill="none" stroke="url(#chrome-grad)" strokeWidth="15" strokeLinejoin="round" />
        
        {/* Inner vertical bar of the 'D' and 'K' base */}
        <rect x="55" y="30" width="15" height="110" rx="3" fill="url(#chrome-grad)" />
        
        {/* Vertical thin gap accent line */}
        <rect x="80" y="47" width="10" height="76" rx="2" fill="url(#chrome-grad)" />
        
        {/* Diagonal top arm of the 'K' */}
        <path d="M90,85 L135,45" stroke="url(#chrome-grad)" strokeWidth="12" strokeLinecap="round" />
        
        {/* Diagonal bottom arm of the 'K' */}
        <path d="M102,74 L142,125" stroke="url(#chrome-grad)" strokeWidth="12" strokeLinecap="round" />
      </g>

      {/* Subtext 'Associates' */}
      <text x="90" y="172" textAnchor="middle" fill="#0f172a" fontSize="20" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.5">
        Associates
      </text>
    </g>
  </svg>
);

export default function PartnerLogos() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto px-4">
      {/* Card 1: Branch Specialists */}
      <div className=" rounded-2xl  p-6 flex items-center justify-center hover:scale-105 hover:shadow-xl transition-all duration-300 min-h-[170px] select-none">
        <BranchSpecialists />
      </div>

      {/* Card 2: KD Fence & Deck */}
      <div className=" rounded-2xl  p-6 flex items-center justify-center hover:scale-105 hover:shadow-xl hover:border-slate-200 transition-all duration-300 min-h-[170px] select-none">
        <KDFenceAndDeck />
      </div>

      {/* Card 3: KD Tree Service */}
      <div className=" rounded-2xl  p-6 flex items-center justify-center hover:scale-105 hover:shadow-xl hover:border-slate-200 transition-all duration-300 min-h-[170px] select-none">
        <KDTreeService />
      </div>

      {/* Card 4: All Pro Shinning */}
      <div className=" rounded-2xl  p-6 flex items-center justify-center hover:scale-105 hover:shadow-xl hover:border-slate-200 transition-all duration-300 min-h-[170px] select-none">
        <AllProShinning />
      </div>

      {/* Card 5: KD Associates (CENTER - Elevated Host/Main Company Styling) */}
      <div className="relative rounded-2xl shadow-md  p-6 flex items-center justify-center hover:scale-[1.07] hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 min-h-[185px] z-10 before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gradient-to-tr before:from-blue-50 before:to-indigo-50/30 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 select-none">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black tracking-wider uppercase px-3 py-1 rounded-full shadow-sm">
          HQ
        </div>
        <KDAssociatesLogo />
      </div>

      {/* Card 6: 10X Tree Services */}
      <div className=" rounded-2xl  p-6 flex items-center justify-center hover:scale-105 hover:shadow-xl hover:border-slate-200 transition-all duration-300 min-h-[170px] select-none">
        <TenXTreeServices />
      </div>

      {/* Card 7: Prime Landscapers */}
      <div className=" rounded-2xl  p-6 flex items-center justify-center hover:scale-105 hover:shadow-xl hover:border-slate-200 transition-all duration-300 min-h-[170px] select-none">
        <PrimeLandscapers />
      </div>

      {/* Card 8: Soil and Seed */}
      <div className=" rounded-2xl  p-6 flex items-center justify-center hover:scale-105 hover:shadow-xl hover:border-slate-200 transition-all duration-300 min-h-[170px] select-none">
        <SoilAndSeed />
      </div>

      {/* Card 9: All Pro Mobile Mechanics */}
      <div className=" rounded-2xl  p-6 flex items-center justify-center hover:scale-105 hover:shadow-xl transition-all duration-300 min-h-[170px] select-none">
        <AllProMobileMechanics />
      </div>
    </div>
  );
}
