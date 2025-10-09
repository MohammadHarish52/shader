export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M20 4L4 12V28L20 36L36 28V12L20 4Z" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinejoin="round"
          fill="none"
        />
        <path 
          d="M20 4V20M20 20L4 28M20 20L36 28" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
      </svg>
      <span className="text-white text-xl font-semibold tracking-tight">Kombai</span>
    </div>
  );
}