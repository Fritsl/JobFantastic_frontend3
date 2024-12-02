import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TextInput } from '../components/TextInput';
import { Layout } from '../components/Layout';
import { ArrowRight } from 'lucide-react';
import { LogoTitle } from '../components/LogoTitle';

export function FrontPage() {
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      navigate('/dataenter', { state: { text } });
    }
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit} className="space-y-6">
        <LogoTitle />
        <TextInput
          value={text}
          onChange={setText}
          placeholder={t('enterInitialText')}
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {t('continue')}
            <ArrowRight size={20} />
          </button>
        </div>
      </form>
    </Layout>
  );
}