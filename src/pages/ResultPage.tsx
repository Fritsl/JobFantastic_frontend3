import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Profile } from '../components/Profile';
import { Match } from '../components/Match';

export function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { initialText, additionalText } = location.state || {};
  const [allowContact, setAllowContact] = useState(true);

  const handleEdit = () => {
    navigate('/dataenter', { 
      state: { 
        text: initialText,
        additionalText: additionalText 
      } 
    });
  };

  const handleAllowContactChange = (checked: boolean) => {
    setAllowContact(checked);
  };

  return (
    <Layout>
      <div className="space-y-8 max-w-3xl mx-auto">
        <div className="space-y-8">
          <Profile
            initialText={initialText}
            additionalText={additionalText}
            onEdit={handleEdit}
            allowContact={allowContact}
            onAllowContactChange={handleAllowContactChange}
          />
          <Match />
        </div>
      </div>
    </Layout>
  );
}