// CaseStudyPopup.jsx
import React, { useState, useEffect } from 'react';

/**
 * Props:
 * - isOpen: boolean
 * - onClose: () => void
 * - caseData: { logo, description, imageSrc, keyResults }
 * - onNextCase: () => void
 */
export default function CaseStudyPopup({
  isOpen,
  onClose,
  caseData = {},
  onNextCase,
}) {
  const {
    logo = null,
    description = '',
    imageSrc = '',
    // keyResults = [],
  } = caseData;

  // 'enter' or 'exit'
  const [animState, setAnimState] = useState(isOpen ? 'enter' : 'exit');

  // When isOpen flips, trigger the right animation
  useEffect(() => {
    setAnimState(isOpen ? 'enter' : 'exit');
  }, [isOpen]);

  // After exit anim finishes, actually unmount via onClose
  const handleAnimEnd = () => {
    if (animState === 'exit') onClose();
  };

  // Keep in DOM during exit animation
  if (!isOpen && animState === 'exit') return null;

  // NEW: Open Calendly in a new tab
  const handleScheduleCall = () => {
    window.open(
      'https://calendly.com/ingversionsdigital/30min?month=2025-02'
    );
  };

  return (
    <div className="popup-overlay">
      <div
        className={`popup-container ${animState}`}
        onAnimationEnd={handleAnimEnd}
      >
        <div className="popup-header">
          <div className="popup-logo">{logo}</div>
          <button
            className="close-btn"
            onClick={() => setAnimState('exit')}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="popup-body">
          <div className="popup-content">
            <p className="popup-description">{description}</p>
            <div className="popup-buttons">
              {/* Updated to use local handler */}
              <button className="btn-schedule" onClick={handleScheduleCall}>
                Schedule introduction call →
              </button>
              {/* <button className="btn-next" onClick={onNextCase}>
                Next case
              </button> */}
            </div>
          </div>
          <div className="popup-image-wrapper">
            <img
              src={imageSrc}
              alt="Case Screenshot"
              className="popup-image"
            />
          </div>
        </div>

        {/* {keyResults.length > 0 && (
          <div className="popup-key-results">
            <h3 className="key-results-title">Key Results:</h3>
            <div className="key-results-list">
              {keyResults.map((r, i) => (
                <div key={i} className="key-result-item">
                  <span className="key-result-value">{r.value}</span>
                  <span className="key-result-label">{r.label}</span>
                </div>
              ))}
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}
