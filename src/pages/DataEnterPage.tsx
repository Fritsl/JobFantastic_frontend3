import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TextInput } from '../components/TextInput';
import { Layout } from '../components/Layout';
import { PageTitle } from '../components/PageTitle';
import { AiFeedback } from '../components/AiFeedback';
import { PrivacyNotice } from '../components/PrivacyNotice';

export function DataEnterPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [usersOwnText, setUsersOwnText] = useState('');
  const [additionalText, setAdditionalText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [shouldFocusInput, setShouldFocusInput] = useState(false);
  const { t } = useTranslation();

  // Initialize state from location state if available
  useEffect(() => {
    if (location.state?.text) {
      setUsersOwnText(location.state.text);
    }
    if (location.state?.additionalText) {
      setAdditionalText(location.state.additionalText);
    }
  }, [location.state]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleTypingComplete = () => {
    setShouldFocusInput(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/result', {
      state: {
        initialText: usersOwnText,
        additionalText,
      },
    });
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">
        <div className="space-y-2">
          <PageTitle>{t('dataEnterPageTitle')}</PageTitle>
        </div>

        <div className="space-y-8">
          <div className="relative pl-12">
            <AiFeedback 
              message={t('aiFeedbackPlaceholder')}
              isLoading={isLoading}
              onTypingComplete={handleTypingComplete}
            />
          </div>
          
          <TextInput
            value={usersOwnText}
            onChange={setUsersOwnText}
            placeholder={t('enterAdditionalInfo')}
            autoFocus={shouldFocusInput}
          />
        </div>

        <div className="flex items-center justify-between gap-8">
          <PrivacyNotice>
            {t('privacyNote')}
          </PrivacyNotice>
          <button
            type="submit"
            className="px-8 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
          >
            {t('viewResult')}
          </button>
        </div>
      </form>
    </Layout>
  );
}