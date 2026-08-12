import { useState, useEffect } from 'react';
import { PHORM_INFO, MANAGED_BRANDS, CAREER_JOURNEY } from '../data/phormData';

const TEXT_STORE_KEY = 'phorm_custom_text_v1';
export const TEXT_EVENT_NAME = 'phorm_text_updated';

export interface TextStoreData {
  phormInfo?: Partial<typeof PHORM_INFO>;
  managedBrands?: Record<string, {
    name?: string;
    category?: string;
    tagline?: string;
    highlights?: string[];
  }>;
  careerJourney?: Record<number, {
    role?: string;
    company?: string;
    year?: string;
    description?: string;
  }>;
  events?: Record<string, {
    title?: string;
    brand?: string;
    location?: string;
    date?: string;
    type?: string;
    description?: string;
    highlights?: string[];
  }>;
}

export const getStoredText = (): TextStoreData => {
  try {
    const stored = localStorage.getItem(TEXT_STORE_KEY);
    if (stored) return JSON.parse(stored);
  } catch (e) {
    console.error('Error reading text store:', e);
  }
  return {};
};

export const saveTextData = (updateFn: (prev: TextStoreData) => TextStoreData) => {
  try {
    const current = getStoredText();
    const updated = updateFn(current);
    localStorage.setItem(TEXT_STORE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent(TEXT_EVENT_NAME));
  } catch (e) {
    console.error('Error saving text data:', e);
  }
};

export const resetAllCustomText = () => {
  try {
    localStorage.removeItem(TEXT_STORE_KEY);
    window.dispatchEvent(new CustomEvent(TEXT_EVENT_NAME));
  } catch (e) {
    console.error('Error resetting text data:', e);
  }
};

export function useEditableText() {
  const [textData, setTextData] = useState<TextStoreData>(getStoredText());

  useEffect(() => {
    const handleUpdate = () => {
      setTextData(getStoredText());
    };
    window.addEventListener(TEXT_EVENT_NAME, handleUpdate);
    return () => window.removeEventListener(TEXT_EVENT_NAME, handleUpdate);
  }, []);

  return {
    textData,
    saveTextData,
    resetAllCustomText
  };
}
