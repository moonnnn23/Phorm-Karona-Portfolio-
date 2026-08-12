import { useState, useEffect } from 'react';

// Default generated profile photo
import defaultProfileImg from '../assets/images/phorm_profile_photo_1786512291999.jpg';
import aeonRoadshowImg from '../assets/images/aeon_roadshow_event_1786512307148.jpg';
import keynoteLaunchImg from '../assets/images/keynote_launch_event_1786512317912.jpg';

const PROFILE_PHOTO_KEY = 'phorm_profile_photo_v1';
const BRAND_LOGOS_KEY = 'phorm_brand_logos_v1';
const EVENT_PHOTOS_KEY = 'phorm_event_photos_v1';
const DELETED_EVENT_PHOTOS_KEY = 'phorm_deleted_event_photos_v1';
const ACTIVITY_PHOTOS_KEY = 'phorm_activity_photos_v1';

export const MEDIA_EVENT_NAME = 'phorm_media_updated';

export const getDefaultProfilePhoto = () => defaultProfileImg;

export const getStoredProfilePhoto = (): string => {
  try {
    const stored = localStorage.getItem(PROFILE_PHOTO_KEY);
    if (stored) return stored;
  } catch (e) {
    console.error('Error reading profile photo:', e);
  }
  return defaultProfileImg;
};

export const saveProfilePhoto = (dataUrl: string) => {
  try {
    localStorage.setItem(PROFILE_PHOTO_KEY, dataUrl);
    window.dispatchEvent(new CustomEvent(MEDIA_EVENT_NAME, { detail: { type: 'profile' } }));
  } catch (e) {
    console.error('Error saving profile photo:', e);
  }
};

export const resetProfilePhoto = () => {
  try {
    localStorage.removeItem(PROFILE_PHOTO_KEY);
    window.dispatchEvent(new CustomEvent(MEDIA_EVENT_NAME, { detail: { type: 'profile' } }));
  } catch (e) {
    console.error('Error resetting profile photo:', e);
  }
};

// Brand Logos & Custom Images
const inMemoryBrandMedia: Record<string, { logoUrl?: string; imageUrl?: string }> = {};

export const getStoredBrandMedia = (): Record<string, { logoUrl?: string; imageUrl?: string }> => {
  try {
    const stored = localStorage.getItem(BRAND_LOGOS_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return { ...parsed, ...inMemoryBrandMedia };
    }
  } catch (e) {
    console.error('Error reading brand media:', e);
  }
  return { ...inMemoryBrandMedia };
};

export const saveBrandMedia = (brandId: string, media: { logoUrl?: string; imageUrl?: string }) => {
  try {
    const current = getStoredBrandMedia();
    const updated = {
      ...current,
      [brandId]: {
        ...current[brandId],
        ...(media.logoUrl !== undefined ? { logoUrl: media.logoUrl } : {}),
        ...(media.imageUrl !== undefined ? { imageUrl: media.imageUrl } : {})
      }
    };
    
    // Update memory
    inMemoryBrandMedia[brandId] = updated[brandId];

    try {
      localStorage.setItem(BRAND_LOGOS_KEY, JSON.stringify(updated));
    } catch (quotaError) {
      console.warn('localStorage quota reached, keeping in memory for active session:', quotaError);
    }

    window.dispatchEvent(new CustomEvent(MEDIA_EVENT_NAME, { detail: { type: 'brand', brandId } }));
  } catch (e) {
    console.error('Error saving brand media:', e);
  }
};

export const saveBrandLogo = (brandId: string, logoUrl: string) => {
  saveBrandMedia(brandId, { logoUrl });
};

export const saveBrandImage = (brandId: string, imageUrl: string) => {
  saveBrandMedia(brandId, { imageUrl });
};

export const resetBrandMedia = (brandId: string) => {
  try {
    const current = getStoredBrandMedia();
    delete current[brandId];
    delete inMemoryBrandMedia[brandId];
    try {
      localStorage.setItem(BRAND_LOGOS_KEY, JSON.stringify(current));
    } catch (e) {
      console.error('Error updating localStorage on reset:', e);
    }
    window.dispatchEvent(new CustomEvent(MEDIA_EVENT_NAME, { detail: { type: 'brand', brandId } }));
  } catch (e) {
    console.error('Error resetting brand media:', e);
  }
};

// Event Photos
const inMemoryEventPhotos: Record<string, string[]> = {};
const inMemoryDeletedEventPhotos: Record<string, string[]> = {};

export const getStoredEventPhotos = (): Record<string, string[]> => {
  try {
    const stored = localStorage.getItem(EVENT_PHOTOS_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Merge with inMemory
      const merged: Record<string, string[]> = { ...parsed };
      for (const key in inMemoryEventPhotos) {
        merged[key] = Array.from(new Set([...(inMemoryEventPhotos[key] || []), ...(merged[key] || [])]));
      }
      return merged;
    }
  } catch (e) {
    console.error('Error reading event photos:', e);
  }
  return { ...inMemoryEventPhotos };
};

export const getDeletedEventPhotos = (): Record<string, string[]> => {
  try {
    const stored = localStorage.getItem(DELETED_EVENT_PHOTOS_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      const merged: Record<string, string[]> = { ...parsed };
      for (const key in inMemoryDeletedEventPhotos) {
        merged[key] = Array.from(new Set([...(inMemoryDeletedEventPhotos[key] || []), ...(merged[key] || [])]));
      }
      return merged;
    }
  } catch (e) {
    console.error('Error reading deleted event photos:', e);
  }
  return { ...inMemoryDeletedEventPhotos };
};

export const addEventPhoto = (eventId: string, photoUrl: string) => {
  try {
    const current = getStoredEventPhotos();
    const existing = current[eventId] || [];
    const updatedList = [photoUrl, ...existing.filter(p => p !== photoUrl)];
    
    // Save to memory first
    inMemoryEventPhotos[eventId] = updatedList;

    try {
      current[eventId] = updatedList;
      localStorage.setItem(EVENT_PHOTOS_KEY, JSON.stringify(current));
    } catch (quotaError) {
      console.warn('localStorage quota reached for event photos, kept in memory:', quotaError);
    }

    // If it was in deleted list, remove from deleted
    const deleted = getDeletedEventPhotos();
    if (deleted[eventId]) {
      deleted[eventId] = deleted[eventId].filter(p => p !== photoUrl);
      inMemoryDeletedEventPhotos[eventId] = deleted[eventId];
      try {
        localStorage.setItem(DELETED_EVENT_PHOTOS_KEY, JSON.stringify(deleted));
      } catch (e) {}
    }

    window.dispatchEvent(new CustomEvent(MEDIA_EVENT_NAME, { detail: { type: 'event', eventId } }));
  } catch (e) {
    console.error('Error adding event photo:', e);
  }
};

export const removeEventPhoto = (eventId: string, photoUrl: string) => {
  try {
    // Remove from custom uploaded list if present
    const current = getStoredEventPhotos();
    const existing = current[eventId] || [];
    const updatedList = existing.filter(p => p !== photoUrl);
    
    inMemoryEventPhotos[eventId] = updatedList;

    try {
      current[eventId] = updatedList;
      localStorage.setItem(EVENT_PHOTOS_KEY, JSON.stringify(current));
    } catch (e) {
      console.error('Error updating localStorage on photo remove:', e);
    }

    // Add to deleted photos list
    const deleted = getDeletedEventPhotos();
    const currentDeleted = deleted[eventId] || [];
    const updatedDeleted = Array.from(new Set([...currentDeleted, photoUrl]));
    inMemoryDeletedEventPhotos[eventId] = updatedDeleted;

    try {
      deleted[eventId] = updatedDeleted;
      localStorage.setItem(DELETED_EVENT_PHOTOS_KEY, JSON.stringify(deleted));
    } catch (e) {
      console.error('Error saving deleted photo list:', e);
    }

    window.dispatchEvent(new CustomEvent(MEDIA_EVENT_NAME, { detail: { type: 'event', eventId } }));
  } catch (e) {
    console.error('Error removing event photo:', e);
  }
};

export const clearEventPhotos = (eventId: string) => {
  try {
    const current = getStoredEventPhotos();
    delete current[eventId];
    delete inMemoryEventPhotos[eventId];

    const deleted = getDeletedEventPhotos();
    delete deleted[eventId];
    delete inMemoryDeletedEventPhotos[eventId];

    try {
      localStorage.setItem(EVENT_PHOTOS_KEY, JSON.stringify(current));
      localStorage.setItem(DELETED_EVENT_PHOTOS_KEY, JSON.stringify(deleted));
    } catch (e) {
      console.error('Error updating localStorage on clear event photos:', e);
    }

    window.dispatchEvent(new CustomEvent(MEDIA_EVENT_NAME, { detail: { type: 'event', eventId } }));
  } catch (e) {
    console.error('Error clearing event photos:', e);
  }
};

// Activity Photos
const inMemoryActivityPhotos: Record<string, string[]> = {};

export const getStoredActivityPhotos = (): Record<string, string[]> => {
  try {
    const stored = localStorage.getItem(ACTIVITY_PHOTOS_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      const merged: Record<string, string[]> = { ...parsed };
      for (const key in inMemoryActivityPhotos) {
        merged[key] = Array.from(new Set([...(inMemoryActivityPhotos[key] || []), ...(merged[key] || [])]));
      }
      return merged;
    }
  } catch (e) {
    console.error('Error reading activity photos:', e);
  }
  return { ...inMemoryActivityPhotos };
};

export const addActivityPhoto = (activityId: string, photoUrl: string) => {
  try {
    const current = getStoredActivityPhotos();
    const existing = current[activityId] || [];
    const updatedList = [photoUrl, ...existing.filter(p => p !== photoUrl)];
    
    inMemoryActivityPhotos[activityId] = updatedList;

    try {
      current[activityId] = updatedList;
      localStorage.setItem(ACTIVITY_PHOTOS_KEY, JSON.stringify(current));
    } catch (quotaError) {
      console.warn('localStorage quota reached for activity photos, kept in memory:', quotaError);
    }

    window.dispatchEvent(new CustomEvent(MEDIA_EVENT_NAME, { detail: { type: 'activity', activityId } }));
  } catch (e) {
    console.error('Error adding activity photo:', e);
  }
};

// React Hook for dynamic media state across all components
export function useProfilePhoto() {
  const [photo, setPhoto] = useState<string>(getStoredProfilePhoto());

  useEffect(() => {
    const handleUpdate = () => {
      setPhoto(getStoredProfilePhoto());
    };
    window.addEventListener(MEDIA_EVENT_NAME, handleUpdate);
    return () => window.removeEventListener(MEDIA_EVENT_NAME, handleUpdate);
  }, []);

  return {
    photo,
    savePhoto: saveProfilePhoto,
    resetPhoto: resetProfilePhoto,
    defaultPhoto: defaultProfileImg
  };
}

export function useBrandMedia() {
  const [brandMedia, setBrandMedia] = useState(getStoredBrandMedia());

  useEffect(() => {
    const handleUpdate = () => {
      setBrandMedia(getStoredBrandMedia());
    };
    window.addEventListener(MEDIA_EVENT_NAME, handleUpdate);
    return () => window.removeEventListener(MEDIA_EVENT_NAME, handleUpdate);
  }, []);

  return {
    brandMedia,
    saveBrandLogo,
    saveBrandImage
  };
}

export function useEventPhotos() {
  const [eventPhotos, setEventPhotos] = useState(getStoredEventPhotos());
  const [deletedPhotos, setDeletedPhotos] = useState(getDeletedEventPhotos());

  useEffect(() => {
    const handleUpdate = () => {
      setEventPhotos(getStoredEventPhotos());
      setDeletedPhotos(getDeletedEventPhotos());
    };
    window.addEventListener(MEDIA_EVENT_NAME, handleUpdate);
    return () => window.removeEventListener(MEDIA_EVENT_NAME, handleUpdate);
  }, []);

  return {
    eventPhotos,
    deletedPhotos,
    addEventPhoto,
    removeEventPhoto,
    clearEventPhotos,
    aeonRoadshowImg,
    keynoteLaunchImg
  };
}

export function useActivityPhotos() {
  const [activityPhotos, setActivityPhotos] = useState(getStoredActivityPhotos());

  useEffect(() => {
    const handleUpdate = () => {
      setActivityPhotos(getStoredActivityPhotos());
    };
    window.addEventListener(MEDIA_EVENT_NAME, handleUpdate);
    return () => window.removeEventListener(MEDIA_EVENT_NAME, handleUpdate);
  }, []);

  return {
    activityPhotos,
    addActivityPhoto
  };
}
