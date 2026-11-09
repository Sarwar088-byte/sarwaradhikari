import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0b0f] text-slate-100 flex flex-col items-center justify-center px-6">
      <div className="max-w-md w-full text-center p-8 rounded-2xl bg-[#11141c] border border-white/10 shadow-xl">
        <span className="text-xs font-mono font-semibold text-sky-400 px-2.5 py-1 rounded bg-sky-500/10 mb-4 inline-block">
          404 Error
        </span>
        <h1 className="text-3xl font-extrabold text-white mb-3">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-400 leading-relaxed mb-6">
          The page you are looking for doesn&apos;t exist, was renamed, or has moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-sky-400 hover:bg-sky-300 text-slate-950 font-semibold text-xs tracking-wider transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Home</span>
        </Link>
      </div>
    </div>
  );
}
