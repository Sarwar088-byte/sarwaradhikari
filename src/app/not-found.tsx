import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#07090D] text-[#F4F6FA] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(103,227,245,0.08)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-md w-full text-center p-8 rounded-2xl bg-[#0D1118] border border-[rgba(255,255,255,0.08)] shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(103,227,245,0.08)] border border-[rgba(103,227,245,0.2)] text-[#67E3F5] font-mono text-xs mb-6">
          <Terminal className="w-3.5 h-3.5" />
          <span>ERROR 404 // ROUTE_NOT_FOUND</span>
        </div>

        <h1 className="text-6xl font-black font-mono tracking-tighter text-[#F4F6FA] mb-2">
          404
        </h1>

        <div className="font-mono text-xs text-[#9582FF] uppercase tracking-wider mb-4">
          Coordinates Non-Existent
        </div>

        <p className="text-sm text-[#A4ADBA] leading-relaxed mb-8">
          The requested digital vector cannot be resolved in Sarwar Adhikari&apos;s architectural index.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#67E3F5] text-[#07090D] font-mono text-xs uppercase tracking-wider font-semibold transition-all hover:bg-[#88e8f8] hover:shadow-[0_0_20px_rgba(103,227,245,0.4)]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Origin</span>
        </Link>
      </div>
    </div>
  );
}
