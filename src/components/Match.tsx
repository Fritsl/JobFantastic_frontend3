import React from 'react';
import { useTranslation } from 'react-i18next';
import { Credits } from './Credits';
import { JobMatchList } from './JobMatchList';

export function Match() {
  const { t } = useTranslation();
  const credits = 250; // This should come from your state management system

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">{t('match')}</h2>
      <div className="space-y-6">
        <Credits credits={credits} />
        <JobMatchList />
      </div>
    </div>
  );
}