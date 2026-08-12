import React, { useState, useRef } from 'react';
import { X, Upload, Camera, Image, Check, RefreshCw, Sparkles, UserCheck } from 'lucide-react';
import { useProfilePhoto } from '../utils/mediaStore';
import { compressImage } from '../utils/imageCompressor';

interface ProfilePhotoUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfilePhotoUploadModal: React.FC<ProfilePhotoUploadModalProps> = ({ isOpen, onClose }) => {
  const { photo, savePhoto, resetPhoto, defaultPhoto } = useProfilePhoto();
  const [selectedImage, setSelectedImage] = useState<string | null>(photo);
  const [urlInput, setUrlInput] = useState<string>('');
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [isCompressing, setIsCompressing] = useState<boolean>(false);
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      processFile(file);
    }
  };

  const processFile = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file (PNG, JPG, WEBP, etc.)');
      return;
    }
    try {
      setIsCompressing(true);
      const compressed = await compressImage(file, 800, 800, 0.85);
      setSelectedImage(compressed);
    } catch (err) {
      console.error('Error compressing profile photo:', err);
    } finally {
      setIsCompressing(false);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleApplyUrl = () => {
    if (urlInput.trim()) {
      setSelectedImage(urlInput.trim());
    }
  };

  const handleSave = () => {
    if (selectedImage) {
      savePhoto(selectedImage);
      setSaveSuccess(true);
      setTimeout(() => {
        setSaveSuccess(false);
        onClose();
      }, 1000);
    }
  };

  const handleResetToDefault = () => {
    resetPhoto();
    setSelectedImage(defaultPhoto);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-[#0A0E18] border border-cyan-500/40 rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 relative shadow-2xl text-white">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wide font-sans text-white">
                Upload Executive Profile Photo
              </h3>
              <p className="text-xs text-neutral-400 font-mono">
                Phorm Karona • Digital Marketing Manager
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Current / Preview Image Frame */}
        <div className="flex flex-col items-center justify-center space-y-3">
          <div className="relative group">
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-cyan-400/80 shadow-2xl shadow-cyan-500/30 bg-neutral-900 flex items-center justify-center">
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Phorm Karona Profile Preview"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <UserCheck className="w-12 h-12 text-cyan-400/50" />
              )}
            </div>
            <div className="absolute -bottom-1 -right-1 bg-cyan-500 text-black p-2 rounded-full shadow-lg border-2 border-[#0A0E18]">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
          <span className="text-xs font-mono text-cyan-300">
            Preview of your executive photo across all sections
          </span>
        </div>

        {/* Upload Drop Zone */}
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
            dragActive
              ? 'border-cyan-400 bg-cyan-500/10 scale-[1.01]'
              : 'border-cyan-500/30 bg-[#060913] hover:border-cyan-400 hover:bg-[#0C1222]'
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
              <Upload className="w-6 h-6" />
            </div>
            <p className="text-sm font-bold text-white">
              Click to select photo or drag & drop image file
            </p>
            <p className="text-xs text-neutral-400 font-mono">
              Supports PNG, JPG, WEBP • Max file size ~5MB
            </p>
          </div>
        </div>

        {/* Or Paste Image URL */}
        <div className="space-y-2">
          <label className="text-xs font-mono uppercase text-neutral-400 tracking-wider flex items-center gap-2">
            <Image className="w-3.5 h-3.5 text-cyan-400" />
            <span>Or paste photo URL directly</span>
          </label>
          <div className="flex gap-2">
            <input
              type="url"
              placeholder="https://example.com/phorm-profile.jpg"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              className="flex-1 bg-[#060913] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 font-mono"
            />
            <button
              onClick={handleApplyUrl}
              className="px-4 py-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold hover:bg-cyan-500/30 transition-colors"
            >
              Apply
            </button>
          </div>
        </div>

        {/* Actions Footer */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleResetToDefault}
            className="px-4 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
            <span>Reset Default</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-neutral-900 text-neutral-300 text-xs font-mono hover:text-white transition-colors"
            >
              Cancel
            </button>

            <button
              onClick={handleSave}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-black font-extrabold text-xs uppercase tracking-wider hover:opacity-95 shadow-lg shadow-cyan-500/20 transition-all flex items-center gap-2"
            >
              {saveSuccess ? (
                <>
                  <Check className="w-4 h-4 text-black stroke-[3]" />
                  <span>Saved!</span>
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4 text-black stroke-[3]" />
                  <span>Save Profile Photo</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
