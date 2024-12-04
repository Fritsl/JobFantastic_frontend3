import React, { useState } from 'react';
import { Download, Mail, Globe, FileText } from 'lucide-react';
import { Slider } from './Slider';
import { RichTextEditor } from './RichTextEditor';

interface DocumentGeneratorProps {
  type: 'coverLetter' | 'cv';
  jobTitle: string;
  company: string;
}

export function DocumentGenerator({ type, jobTitle, company }: DocumentGeneratorProps) {
  const [formality, setFormality] = useState(50);
  const [length, setLength] = useState(50);

  // Mock data for demo
  const emailAddress = `jobs@${company.toLowerCase().replace(/\s+/g, '')}.dk`;
  const companyWebsite = `https://www.${company.toLowerCase().replace(/\s+/g, '')}.dk`;
  const jobPostingUrl = `${companyWebsite}/careers/${jobTitle.toLowerCase().replace(/\s+/g, '-')}`;

  const getContent = () => {
    if (type === 'coverLetter') {
      return `Dear Hiring Manager,

I am writing to express my strong interest in the ${jobTitle} position at ${company}...

[This is a demo cover letter that would be generated based on the candidate's profile and the job description, taking into account the formality (${formality}%) and length (${length}%) settings.]

Best regards,
[Your name]`;
    }

    return `CURRICULUM VITAE

[This is a demo CV that would be generated based on the candidate's profile, taking into account the formality (${formality}%) and length (${length}%) settings.]

EXPERIENCE
• Senior Developer at Previous Company
• Lead Developer at Another Company
• Full Stack Developer at First Company

EDUCATION
• Master's in Computer Science
• Bachelor's in Software Engineering`;
  };

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <Slider
          label="Formal"
          leftLabel="Casual"
          rightLabel="Professional"
          value={formality}
          onChange={setFormality}
        />
        <Slider
          label="Length"
          leftLabel="Concise"
          rightLabel="Detailed"
          value={length}
          onChange={setLength}
        />
      </div>

      <RichTextEditor
        value={getContent()}
        onChange={() => {}} // Read-only in this demo
      />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t pt-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={`mailto:${emailAddress}`}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Send email</span>
          </a>
          <a
            href={companyWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            <Globe className="w-4 h-4" />
            <span>Company website</span>
          </a>
          <a
            href={jobPostingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span>Job posting</span>
          </a>
        </div>

        <button
          onClick={() => {}} // Would trigger PDF download in production
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
        >
          <Download className="w-4 h-4" />
          <span>Download as PDF</span>
        </button>
      </div>
    </div>
  );
}