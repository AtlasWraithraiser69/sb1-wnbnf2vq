import React from 'react';
import { ChevronRight } from 'lucide-react';
import type { Remedy } from '../types';

interface RemedyCardProps {
  remedy: Remedy;
  onClick: () => void;
}

export function RemedyCard({ remedy, onClick }: RemedyCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 group"
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
            {remedy.title}
          </h3>
          <p className="mt-2 text-gray-600">{remedy.description}</p>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-amber-600 transition-colors" />
      </div>
    </button>
  );
}