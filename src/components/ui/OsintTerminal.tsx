import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Terminal, Shield, CheckCircle } from 'lucide-react';

export const OsintTerminal: React.FC = () => {
  return (
    <div className="w-full bg-[#07090e] border border-cyan-500/30 rounded-2xl overflow-hidden font-mono text-xs shadow-[0_0_50px_rgba(0,240,255,0.15)] backdrop-blur-xl">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/90 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_6px_rgba(239,68,68,0.5)]" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_6px_rgba(234,179,8,0.5)]" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_6px_rgba(16,185,129,0.5)]" />
          </div>
          <span className="text-zinc-400 text-[11px] font-bold ml-2 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            f1ndx@draft-osint:~ (Investigation Environment)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/40 text-[10px] text-emerald-300 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            LIVE VERIFICATION
          </span>
        </div>
      </div>
      
      {/* Terminal Body */}
      <div className="p-5 text-emerald-400 space-y-2 min-h-[290px] bg-black/40 overflow-x-auto selection:bg-cyan-500/30">
        <TypeAnimation
          sequence={[
            1000,
            '$ # Início da auditoria forense de arquivo e inteligência OSINT\n$ wget -q https://draftcreative.com.br/assets/evidence_source.raw',
            700,
            '$ # Início da auditoria forense de arquivo e inteligência OSINT\n$ wget -q https://draftcreative.com.br/assets/evidence_source.raw\n[+] Status: 200 OK | Hash: SHA-256 Validado\n\n$ exiftool evidence_source.raw | grep -E "(Camera|GPS|Date|Author)"',
            1000,
            '$ # Início da auditoria forense de arquivo e inteligência OSINT\n$ wget -q https://draftcreative.com.br/assets/evidence_source.raw\n[+] Status: 200 OK | Hash: SHA-256 Validado\n\n$ exiftool evidence_source.raw | grep -E "(Camera|GPS|Date|Author)"\n> Camera Model Name             : Cinema 6K Full Frame Sensor\n> Date/Time Original            : 2026:09:11 15:42:19-03:00\n> GPS Position                   : 15°47\'38.0"S 47°52\'58.0"W (Brasília/DF)\n> Author / Investigator          : Daniel Rodrigues (DRT)\n\n$ md5sum evidence_source.raw',
            800,
            '$ # Início da auditoria forense de arquivo e inteligência OSINT\n$ wget -q https://draftcreative.com.br/assets/evidence_source.raw\n[+] Status: 200 OK | Hash: SHA-256 Validado\n\n$ exiftool evidence_source.raw | grep -E "(Camera|GPS|Date|Author)"\n> Camera Model Name             : Cinema 6K Full Frame Sensor\n> Date/Time Original            : 2026:09:11 15:42:19-03:00\n> GPS Position                   : 15°47\'38.0"S 47°52\'58.0"W (Brasília/DF)\n> Author / Investigator          : Daniel Rodrigues (DRT)\n\n$ md5sum evidence_source.raw\n> 7f4a9b2184d08ec39f50e930129a0c18  evidence_source.raw\n\n[✓ OSINT CHAIN OF CUSTODY VERIFIED - PROVA FACTUAL ASSEGURADA]',
            5000,
            ''
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          className="whitespace-pre-wrap leading-relaxed font-mono"
          style={{ whiteSpace: 'pre-wrap' }}
        />
      </div>

      {/* Terminal Footer Status Bar */}
      <div className="px-4 py-2 bg-zinc-950 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500">
        <div className="flex items-center gap-2">
          <Shield className="w-3.5 h-3.5 text-cyan-400" />
          <span>F1NDX Forensics • Arch Linux Kernel • Chain of Custody</span>
        </div>
        <div className="text-cyan-400/80 font-bold">
          DRAFT CREATIVE STUDIO
        </div>
      </div>
    </div>
  );
};
