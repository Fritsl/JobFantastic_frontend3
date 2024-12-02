import React from 'react';

interface ResultCardProps {
  title: string;
  content: string;
}

export function ResultCard({ title, content }: ResultCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">{title}</h2>
      <p className="text-gray-600 whitespace-pre-wrap">{content}</p>
    </div>
  );
}