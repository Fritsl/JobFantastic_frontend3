import React from 'react';
import { useTranslation } from 'react-i18next';
import { AiSummary } from './AiSummary';
import { ResultSection } from './ResultSection';
import { ProfileMenu } from './ProfileMenu';

interface ProfileProps {
  initialText?: string;
  additionalText?: string;
  onEdit: () => void;
  allowContact: boolean;
  onAllowContactChange: (checked: boolean) => void;
}

export function Profile({
  initialText,
  additionalText,
  onEdit,
  allowContact,
  onAllowContactChange,
}: ProfileProps) {
  const { t } = useTranslation();
  const [contactDetails, setContactDetails] = React.useState('');
  const defaultProfileSummary = 'Erfaren softwareudvikler med over 8 års erfaring';

  const aiSummary = `# Professionel Profil
En erfaren softwareudvikler med over 8 års erfaring inden for webudvikling og cloud-teknologier.

## Nøglekompetencer
• Omfattende erfaring med React, Node.js og AWS
• Ekspertise i at lede tekniske projekter fra koncept til implementering
• Stærke kommunikationsevner og teamwork-orienteret tilgang

## Faglig Baggrund
Min passion ligger i at skabe brugervenlige løsninger og optimere systemers ydeevne. Gennem min karriere har jeg ledet flere succesfulde projekter og bidraget til betydelige forbedringer i systemarkitektur og brugeroplevelse.

## Karrieremål
Søger nye udfordringer hvor jeg kan:
• Bidrage med teknisk ekspertise i innovative projekter
• Fortsætte min professionelle udvikling
• Arbejde med cutting-edge teknologier

## Personlig Tilgang
Kendetegnet ved en analytisk og løsningsorienteret arbejdsmetode, kombineret med stærke samarbejdsevner og en dedikeret tilgang til kontinuerlig læring.`;

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">{t('profile')}</h2>
      <div className="space-y-6">
        <ProfileMenu onEdit={onEdit} />
        
        <AiSummary 
          summary={aiSummary} 
          onEdit={onEdit}
          contactDetails={contactDetails}
          onContactDetailsChange={setContactDetails}
        />
        
        {additionalText && (
          <ResultSection 
            additionalText={additionalText}
          />
        )}
      </div>
    </div>
  );
}