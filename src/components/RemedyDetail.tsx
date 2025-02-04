import React from 'react';
import { ArrowLeft } from 'lucide-react';
import type { Remedy } from '../types';

interface RemedyDetailProps {
  remedy: Remedy;
  onBack: () => void;
}

export function RemedyDetail({ remedy, onBack }: RemedyDetailProps) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      <button
        onClick={onBack}
        className="flex items-center text-gray-600 hover:text-amber-600 transition-colors mb-8"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to search
      </button>

      <h1 className="text-4xl font-semibold text-gray-900 mb-4">{remedy.title}</h1>
      <p className="text-xl text-gray-600 mb-8">{remedy.description}</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ingredients</h2>
        <ul className="space-y-2">
          {remedy.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-600">• {ingredient}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Instructions</h2>
        <ol className="space-y-4">
          {remedy.instructions.map((instruction, index) => (
            <li key={index} className="text-gray-600">
              <span className="inline-block w-6 h-6 rounded-full bg-amber-500 text-white text-center mr-3">
                {index + 1}
              </span>
              {instruction}
            </li>
          ))}
        </ol>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Benefits</h2>
          <ul className="space-y-2">
            {remedy.pros.map((pro, index) => (
              <li key={index} className="text-gray-600">• {pro}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Considerations</h2>
          <ul className="space-y-2">
            {remedy.cons.map((con, index) => (
              <li key={index} className="text-gray-600">• {con}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}