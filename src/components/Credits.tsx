import React from 'react';
import { useTranslation } from 'react-i18next';
import { Database } from 'lucide-react';

interface CreditsProps {
  credits: number;
}

export function Credits({ credits }: CreditsProps) {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm">
      <div className="flex items-center gap-2">
        <Database className="w-5 h-5 text-blue-600" />
        <span className="text-gray-700">{t('credits.amount', { count: credits })}</span>
      </div>
      <a 
        href="#" 
        className="text-blue-600 hover:text-blue-700 transition-colors text-sm"
        onClick={(e) => {
          e.preventDefault();
          // To be implemented
        }}
      >
        {t('credits.buy')}
      </a>
    </div>
  );
}