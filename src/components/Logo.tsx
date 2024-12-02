import React from 'react';
import { Wand2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 text-xl font-bold text-gray-900">
      <div className="animate-[wave_2s_ease-in-out_infinite]">
        <Wand2 className="h-6 w-6" />
      </div>
      <span>JobFantastic</span>
    </Link>
  );
}