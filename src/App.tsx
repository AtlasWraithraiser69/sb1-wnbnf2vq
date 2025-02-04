import React, { useState, useMemo } from 'react';
import { SearchBar } from './components/SearchBar';
import { RemedyCard } from './components/RemedyCard';
import { RemedyDetail } from './components/RemedyDetail';
import { remedies } from './data/remedies';
import type { Remedy } from './types';

function App() {
  const [query, setQuery] = useState('');
  const [selectedRemedy, setSelectedRemedy] = useState<Remedy | null>(null);

  const filteredRemedies = useMemo(() => {
    if (!query.trim()) return [];
    const searchTerms = query.toLowerCase().split(' ');
    
    return remedies.filter(remedy => 
      searchTerms.some(term =>
        remedy.keywords.some(keyword => keyword.includes(term)) ||
        remedy.title.toLowerCase().includes(term) ||
        remedy.description.toLowerCase().includes(term)
      )
    );
  }, [query]);

  if (selectedRemedy) {
    return <RemedyDetail remedy={selectedRemedy} onBack={() => setSelectedRemedy(null)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-gray-900 mb-4">
            Natural Remedies
          </h1>
          <p className="text-xl text-gray-600">
            Discover traditional remedies for natural healing
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <SearchBar query={query} onChange={setQuery} />
        </div>

        {query.trim() && (
          <div className="space-y-4">
            {filteredRemedies.length > 0 ? (
              filteredRemedies.map(remedy => (
                <RemedyCard
                  key={remedy.id}
                  remedy={remedy}
                  onClick={() => setSelectedRemedy(remedy)}
                />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">No remedies found for "{query}"</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;