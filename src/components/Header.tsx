import React from 'react';
import { LanguageSelector } from './LanguageSelector';
import { Logo } from './Logo';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Header() {
  const location = useLocation();
  const { t } = useTranslation();

  const getPageTitle = () => {
    const path = location.pathname;
    switch (path) {
      case '/':
        return t('frontPage');
      case '/dataenter':
        return t('dataEnterPage');
      case '/result':
        return t('resultPage');
      default:
        return '';
    }
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-6">
          <h2 className="text-lg font-semibold text-gray-700">
            {getPageTitle()}
          </h2>
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
}