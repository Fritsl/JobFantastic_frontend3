import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Layout } from '../components/Layout';
import { RotateCcw } from 'lucide-react';
import { PageTitle } from '../components/PageTitle';
import { ResultCard } from '../components/ResultCard';

export function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { initialText, additionalText } = location.state || {};

  return (
    <Layout>
      <div className="space-y-6">
        <PageTitle>{t('resultPage')}</PageTitle>
        
        <div className="space-y-4">
          <ResultCard title={t('initialText')} content={initialText} />
          <ResultCard title={t('additionalText')} content={additionalText} />
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <RotateCcw size={20} />
            {t('startOver')}
          </button>
        </div>
      </div>
    </Layout>
  );
}