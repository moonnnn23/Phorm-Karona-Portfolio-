import React, { useState, useRef } from 'react';
import { X, Upload, Camera, Image, Check, Sparkles, RefreshCw, Trash2 } from 'lucide-react';
import { addEventPhoto, addActivityPhoto } from '../utils/mediaStore';
import { compressImage } from '../utils/imageCompressor';

interface PhotoUploadModalProps {
  isOpen: boolean;
  targetType: 'event' | 'activity';
  targetId: string;
  targetTitle: string;
  onClose: () => void;
}

export const PhotoUploadModal: React.FC<PhotoUploadModalProps> = ({
  isOpen,
  targetType,
  targetId,
  targetTitle,
  onClose
}) => {
  const [photoInput, setPhotoInput] = useState<string>('');
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [isCompressing, setIsCompressing] = useState<boolean>(false);
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);
  const fileRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const processFile = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file (JPG, PNG, WEBP, etc.)');
      return;
    }
    try {
      setIsCompressing(true);
      const compressed = await compressImage(file, 1000, 1000, 0.8);
      setPhotoInput(compressed);
    } catch (err) {
      console.error('Error compressing photo:', err);
    } finally {
      setIsCompressing(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
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

  const handleSave = async () => {
    if (!photoInput) return;
    try {
      setIsCompressing(true);
      let finalPhoto = photoInput;
      if (finalPhoto.length > 500000 && finalPhoto.startsWith('data:image')) {
        finalPhoto = await compressImage(finalPhoto, 1000, 1000, 0.8);
      }

      if (targetType === 'event') {
        addEventPhoto(targetId, finalPhoto);
      } else {
        addActivityPhoto(targetId, finalPhoto);
      }
      setSaveSuccess(true);
      setTimeout(() => {
        setSaveSuccess(false);
        setPhotoInput('');
        onClose();
      }, 700);
    } catch (e) {
      console.error('Error saving event photo:', e);
    } finally {
      setIsCompressing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-[#0A0E18] border border-cyan-500/40 rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-6 relative shadow-2xl text-white">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold uppercase font-sans text-white">
                Upload {targetType === 'event' ? 'Event Photo' : 'Activity Photo'}
              </h3>
              <p className="text-xs text-cyan-400 font-mono truncate max-w-[220px]">
                {targetTitle}
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

        {/* Preview Frame if loaded */}
        {photoInput ? (
          <div className="h-48 rounded-2xl overflow-hidden border border-cyan-500/40 relative shadow-inner group">
            <img src={photoInput} alt="Uploaded Photo Preview" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute top-2 right-2 px-2.5 py-1 rounded-full bg-black/80 border border-cyan-500/50 text-[10px] text-cyan-300 font-mono flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>Ready to Upload</span>
            </div>
            <button
              onClick={() => setPhotoInput('')}
              className="absolute bottom-2 right-2 p-2 rounded-xl bg-red-500/80 text-white hover:bg-red-600 text-xs font-mono font-bold transition-all shadow-lg flex items-center gap-1"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear</span>
            </button>
          </div>
        ) : (
          /* Drag & Drop Upload Zone */
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => fileRef.current?.click()}
            className={`py-8 px-4 rounded-2xl border-2 border-dashed cursor-pointer transition-all flex flex-col items-center justify-center gap-3 text-center ${
              dragActive
                ? 'border-cyan-400 bg-cyan-500/20 scale-[1.02]'
                : 'border-cyan-500/30 hover:border-cyan-400 hover:bg-[#0E162A] bg-[#080E1D]'
            }`}
          >
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Upload className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <p className="text-xs font-mono font-bold text-white">
                Drag & drop picture here or <span className="text-cyan-400 underline">browse files</span>
              </p>
              <p className="text-[10px] font-mono text-neutral-400">
                Supports JPG, PNG, WEBP (Auto-compressed for high speed)
              </p>
            </div>
          </div>
        )}

        {/* Hidden File Input */}
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />

        {/* Paste URL Option */}
        <div className="space-y-1">
          <label className="text-[10px] font-mono uppercase text-neutral-400 flex items-center gap-1">
            <Image className="w-3 h-3 text-cyan-400" />
            <span>Or paste photo URL</span>
          </label>
          <input
            type="url"
            placeholder="https://example.com/event-photo.jpg"
            value={photoInput}
            onChange={(e) => setPhotoInput(e.target.value)}
            className="w-full bg-[#060913] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 font-mono"
          />
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
          <button
            onClick={() => fileRef.current?.click()}
            className="px-3 py-2 rounded-xl bg-neutral-900 border border-white/10 text-neutral-300 text-xs font-mono hover:text-white flex items-center gap-1.5"
          >
            <Upload className="w-3.5 h-3.5 text-cyan-400" />
            <span>Select File</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-neutral-900 text-neutral-300 text-xs font-mono hover:text-white"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={!photoInput || isCompressing}
              className={`px-6 py-2.5 rounded-xl text-black font-extrabold text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
                photoInput && !isCompressing
                  ? 'bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 hover:opacity-95 shadow-lg shadow-cyan-500/20'
                  : 'bg-neutral-800 text-neutral-500 cursor-not-allowed'
              }`}
            >
              {isCompressing ? (
                <>
                  <RefreshCw className="w-4 h-4 text-black animate-spin" />
                  <span>Processing...</span>
                </>
              ) : saveSuccess ? (
                <>
                  <Check className="w-4 h-4 text-black stroke-[3]" />
                  <span>Added!</span>
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4 text-black stroke-[3]" />
                  <span>Add Photo</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
