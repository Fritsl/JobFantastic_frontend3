import React, { useState } from 'react';
import { DocumentGenerator } from './DocumentGenerator';
import { JobNotes } from './JobNotes';

interface JobMatchDetailsProps {
  title: string;
  company: string;
}

export function JobMatchDetails({ title, company }: JobMatchDetailsProps) {
  const [activeTab, setActiveTab] = useState('description');
  const [notes, setNotes] = useState('');

  const jobDescription = `About the position:
We are looking for a talented developer to join our team. You will be working on exciting projects using cutting-edge technologies.

Requirements:
• 5+ years of experience with modern web technologies
• Strong knowledge of React and TypeScript
• Experience with cloud platforms (AWS/Azure/GCP)
• Excellent communication skills
• Fluent in English

We offer:
• Competitive salary
• Flexible working hours
• Remote work options
• Health insurance
• Pension scheme
• Professional development opportunities`;

  return (
    <div className="mt-6 border-t border-gray-100 pt-6 transition-all duration-300">
      {/* Company contact info - always visible */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        {/* Hidden element for scroll anchor */}
        <div className="sr-only">Company Contact Information</div>
        <div className="whitespace-pre-wrap text-gray-700">
          <div className="text-xl font-bold text-gray-900 mb-2">{company} A/S</div>
          <div className="mt-2">
            Hovedgaden 123<br />
            2100 København Ø<br />
            Denmark<br />
            <br />
            Contact: John Doe<br />
            Email: jobs@{company.toLowerCase().replace(/\s+/g, '')}.dk<br />
            Phone: +45 12 34 56 78
          </div>
        </div>
      </div>

      {/* Menu tabs - now responsive */}
      <div className="flex flex-col sm:flex-row border-b border-gray-100 bg-gray-50 p-2 gap-2">
        <button
          onClick={() => setActiveTab('description')}
          className={`px-6 py-3 rounded-lg font-medium transition-all ${
            activeTab === 'description' 
              ? 'bg-white text-blue-600 shadow-lg scale-[1.02] transform' 
              : 'text-gray-600 hover:bg-white/50'
          }`}
        >
          <span className="text-base">Job Description</span>
        </button>
        <button
          onClick={() => setActiveTab('coverLetter')}
          className={`px-6 py-3 rounded-lg font-medium transition-all ${
            activeTab === 'coverLetter'
              ? 'bg-white text-blue-600 shadow-lg scale-[1.02] transform'
              : 'text-gray-600 hover:bg-white/50'
          }`}
        >
          <span className="text-base">Generate Cover Letter</span>
        </button>
        <button
          onClick={() => setActiveTab('cv')}
          className={`px-6 py-3 rounded-lg font-medium transition-all ${
            activeTab === 'cv'
              ? 'bg-white text-blue-600 shadow-lg scale-[1.02] transform'
              : 'text-gray-600 hover:bg-white/50'
          }`}
        >
          <span className="text-base">Generate CV</span>
        </button>
        <button
          onClick={() => setActiveTab('notes')}
          className={`px-6 py-3 rounded-lg font-medium transition-all ${
            activeTab === 'notes'
              ? 'bg-white text-blue-600 shadow-lg scale-[1.02] transform'
              : 'text-gray-600 hover:bg-white/50'
          }`}
        >
          <span className="text-base">My Notes</span>
        </button>
      </div>

      {/* Content area */}
      <div className="p-4 sm:p-6">
        {activeTab === 'description' && (
          <div className="space-y-6">
            <div className="whitespace-pre-wrap text-gray-700">{jobDescription}</div>
          </div>
        )}
        {activeTab === 'coverLetter' && (
          <DocumentGenerator 
            type="coverLetter"
            jobTitle={title}
            company={company}
          />
        )}
        {activeTab === 'cv' && (
          <DocumentGenerator 
            type="cv"
            jobTitle={title}
            company={company}
          />
        )}
        {activeTab === 'notes' && (
          <JobNotes
            value={notes}
            onChange={setNotes}
          />
        )}
      </div>
    </div>
  );
}