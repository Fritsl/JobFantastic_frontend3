import React from 'react';
import { LanguageSelector } from './LanguageSelector';
import { Logo } from './Logo';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Header() {
  const location = useLocation();
  const { t } = useTranslation();
  const isHomePage = location.pathname === '/';

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
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-6">
          {!isHomePage && (
            <h2 className="text-lg font-semibold text-gray-100 hidden md:block">
              {getPageTitle()}
            </h2>
          )}
          {isHomePage && <LanguageSelector />}
        </div>
      </div>
    </header>
  );
}