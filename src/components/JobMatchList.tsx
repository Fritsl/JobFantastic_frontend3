import React, { useState, useRef, useEffect } from 'react';
import { JobMatch } from './JobMatch';
import { mockJobMatches } from '../data/mockJobMatches';

export function JobMatchList() {
  const [expandedJobId, setExpandedJobId] = useState<number | null>(null);
  const jobRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleExpand = (index: number) => {
    const isExpanding = expandedJobId !== index;
    
    if (expandedJobId !== null && isExpanding) {
      setExpandedJobId(null);
      setTimeout(() => {
        setExpandedJobId(index);
        scrollToCompanyInfo(index);
      }, 100);
    } else {
      setExpandedJobId(isExpanding ? index : null);
      if (isExpanding) {
        scrollToCompanyInfo(index);
      }
    }
  };

  const scrollToCompanyInfo = (index: number) => {
    if (jobRefs.current[index]) {
      setTimeout(() => {
        const jobCard = jobRefs.current[index];
        if (jobCard) {
          // Find the company info section by looking for the element containing "Company Contact Information"
          const companyInfoSection = Array.from(jobCard.querySelectorAll('div')).find(
            el => el.textContent?.includes('Company Contact Information')
          );

          if (companyInfoSection) {
            const headerOffset = -400; // Changed from -200 to -400
            const elementPosition = companyInfoSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      }, 150);
    }
  };

  return (
    <div className="space-y-4">
      {mockJobMatches.map((job, index) => (
        <div
          key={index}
          ref={el => jobRefs.current[index] = el}
        >
          <JobMatch
            {...job}
            isExpanded={expandedJobId === index}
            onToggleExpand={() => handleExpand(index)}
          />
        </div>
      ))}
    </div>
  );
}