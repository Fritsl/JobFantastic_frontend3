import React from 'react';
import { useTranslation } from 'react-i18next';

interface ProfileMenuProps {
  onEdit: () => void;
}

export function ProfileMenu({ onEdit }: ProfileMenuProps) {
  const { t } = useTranslation();
  
  return (
    <div className="flex justify-center gap-4 text-sm">
      <button
        onClick={onEdit}
        className="text-blue-600 hover:text-blue-700 transition-colors"
      >
        {t('profileMenu.edit')}
      </button>
      <span className="text-gray-300">|</span>
      <button
        onClick={() => {}} // To be implemented
        className="text-blue-600 hover:text-blue-700 transition-colors"
      >
        {t('profileMenu.delete')}
      </button>
      <span className="text-gray-300">|</span>
      <button
        onClick={() => {}} // To be implemented
        className="text-blue-600 hover:text-blue-700 transition-colors"
      >
        {t('profileMenu.create')}
      </button>
    </div>
  );
}