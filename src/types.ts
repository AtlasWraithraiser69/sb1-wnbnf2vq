export interface Remedy {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  pros: string[];
  cons: string[];
  keywords: string[];
}

export interface SearchState {
  query: string;
  results: Remedy[];
}