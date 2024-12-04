import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface ContactDetailsProps {
  value: string;
  onChange: (value: string) => void;
}

export function ContactDetails({ value, onChange }: ContactDetailsProps) {
  const { t } = useTranslation();
  
  return (
    <div className="space-y-3">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t('contactDetailsPlaceholder')}
        className="w-full min-h-[120px] p-4 bg-white border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y transition-all duration-300 text-sm text-gray-700"
      />
      {value && (
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
          <p className="text-sm text-blue-800">
            {t('contactDetailsInfo')}
          </p>
        </div>
      )}
      <p className="text-sm text-gray-500">
        {t('profileInfo.prefix')}{' '}
        <Link to="/dataenter" className="text-blue-600 hover:text-blue-700 underline">
          {t('profileInfo.softValues')}
        </Link>
        {t('profileInfo.suffix')}
      </p>
    </div>
  );
}