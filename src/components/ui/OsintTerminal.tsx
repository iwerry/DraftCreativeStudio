import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export const OsintTerminal: React.FC = () => {
  return (
    <div className="w-full bg-zinc-950 border border-white/10 rounded-xl overflow-hidden font-mono text-[11px] sm:text-xs shadow-2xl">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="text-zinc-500 text-[10px] uppercase tracking-wider font-bold ml-2">
          f1ndx@draft-osint:~
        </div>
      </div>
      
      {/* Terminal Body */}
      <div className="p-4 sm:p-5 text-emerald-400 space-y-2 min-h-[250px]">
        <TypeAnimation
          sequence={[
            1000,
            '$ wget https://draftcreative.com.br/assets/evidence_04.jpg',
            500,
            '$ wget https://draftcreative.com.br/assets/evidence_04.jpg\n> Resolving host... 192.168.1.10\n> Connecting... connected.\n> HTTP request sent, awaiting response... 200 OK\n> Saving to: ‘evidence_04.jpg’\n\n$ ',
            1000,
            '$ wget https://draftcreative.com.br/assets/evidence_04.jpg\n> Resolving host... 192.168.1.10\n> Connecting... connected.\n> HTTP request sent, awaiting response... 200 OK\n> Saving to: ‘evidence_04.jpg’\n\n$ exiftool evidence_04.jpg | grep -i GPS',
            500,
            '$ wget https://draftcreative.com.br/assets/evidence_04.jpg\n> Resolving host... 192.168.1.10\n> Connecting... connected.\n> HTTP request sent, awaiting response... 200 OK\n> Saving to: ‘evidence_04.jpg’\n\n$ exiftool evidence_04.jpg | grep -i GPS\n> GPS Latitude                    : 23 deg 33\' 1.00" S\n> GPS Longitude                   : 46 deg 38\' 2.00" W\n> GPS Position                    : 23.5503° S, 46.6339° W\n\n$ ',
            1000,
            '$ wget https://draftcreative.com.br/assets/evidence_04.jpg\n> Resolving host... 192.168.1.10\n> Connecting... connected.\n> HTTP request sent, awaiting response... 200 OK\n> Saving to: ‘evidence_04.jpg’\n\n$ exiftool evidence_04.jpg | grep -i GPS\n> GPS Latitude                    : 23 deg 33\' 1.00" S\n> GPS Longitude                   : 46 deg 38\' 2.00" W\n> GPS Position                    : 23.5503° S, 46.6339° W\n\n$ md5sum evidence_04.jpg',
            500,
            '$ wget https://draftcreative.com.br/assets/evidence_04.jpg\n> Resolving host... 192.168.1.10\n> Connecting... connected.\n> HTTP request sent, awaiting response... 200 OK\n> Saving to: ‘evidence_04.jpg’\n\n$ exiftool evidence_04.jpg | grep -i GPS\n> GPS Latitude                    : 23 deg 33\' 1.00" S\n> GPS Longitude                   : 46 deg 38\' 2.00" W\n> GPS Position                    : 23.5503° S, 46.6339° W\n\n$ md5sum evidence_04.jpg\n> e99a18c428cb38d5f260853678922e03  evidence_04.jpg\n\n[PROCESS COMPLETED - VERIFICATION SUCCESSFUL]',
            5000, // Wait before repeating
            '' // Clear to loop (if repeat is set to Infinity)
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          className="whitespace-pre-wrap leading-relaxed"
          style={{ whiteSpace: 'pre-wrap' }}
        />
      </div>
    </div>
  );
};
