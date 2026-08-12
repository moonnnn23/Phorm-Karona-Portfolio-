import React, { useState, useEffect, useRef } from 'react';
import { X, Upload, Image, Check, Sparkles, RefreshCw, Trash2 } from 'lucide-react';
import { useBrandMedia, saveBrandMedia, resetBrandMedia } from '../utils/mediaStore';
import { compressImage } from '../utils/imageCompressor';

interface BrandLogoUploadModalProps {
  isOpen: boolean;
  brandId: string;
  brandName: string;
  onClose: () => void;
}

export const BrandLogoUploadModal: React.FC<BrandLogoUploadModalProps> = ({
  isOpen,
  brandId,
  brandName,
  onClose
}) => {
  const { brandMedia } = useBrandMedia();
  const currentMedia = brandMedia[brandId] || {};

  const [logoInput, setLogoInput] = useState<string>('');
  const [imageInput, setImageInput] = useState<string>('');
  const [isCompressing, setIsCompressing] = useState<boolean>(false);
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);

  const logoFileRef = useRef<HTMLInputElement>(null);
  const imageFileRef = useRef<HTMLInputElement>(null);

  // Sync state whenever brandId changes or modal opens
  useEffect(() => {
    if (isOpen) {
      const media = brandMedia[brandId] || {};
      setLogoInput(media.logoUrl || '');
      setImageInput(media.imageUrl || '');
      setSaveSuccess(false);
    }
  }, [isOpen, brandId, brandMedia]);

  if (!isOpen) return null;

  const handleLogoFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      try {
        setIsCompressing(true);
        const compressed = await compressImage(file, 800, 800, 0.85);
        setLogoInput(compressed);
      } catch (err) {
        console.error('Failed to compress logo file:', err);
      } finally {
        setIsCompressing(false);
      }
    }
  };

  const handleImageFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      try {
        setIsCompressing(true);
        const compressed = await compressImage(file, 1200, 1200, 0.8);
        setImageInput(compressed);
      } catch (err) {
        console.error('Failed to compress product image:', err);
      } finally {
        setIsCompressing(false);
      }
    }
  };

  const handleSave = async () => {
    try {
      setIsCompressing(true);
      let finalLogo = logoInput;
      let finalImage = imageInput;

      // Compress if it's a huge raw data URL
      if (finalLogo && finalLogo.length > 500000 && finalLogo.startsWith('data:image')) {
        finalLogo = await compressImage(finalLogo, 800, 800, 0.85);
      }
      if (finalImage && finalImage.length > 500000 && finalImage.startsWith('data:image')) {
        finalImage = await compressImage(finalImage, 1200, 1200, 0.8);
      }

      saveBrandMedia(brandId, {
        logoUrl: finalLogo || undefined,
        imageUrl: finalImage || undefined
      });

      setSaveSuccess(true);
      setTimeout(() => {
        setSaveSuccess(false);
        onClose();
      }, 800);
    } catch (e) {
      console.error('Error saving brand media:', e);
    } finally {
      setIsCompressing(false);
    }
  };

  const handleReset = () => {
    resetBrandMedia(brandId);
    setLogoInput('');
    setImageInput('');
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-[#0A0E18] border border-cyan-500/40 rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-6 relative shadow-2xl text-white">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold uppercase font-sans text-white">
                Edit Logo & Showcase Photo
              </h3>
              <p className="text-xs text-cyan-400 font-mono font-bold">
                {brandName}
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

        {/* Brand Product Showcase Photo Section */}
        <div className="space-y-3">
          <label className="text-xs font-mono uppercase text-neutral-300 font-bold flex items-center justify-between">
            <span>Product Showcase Photo</span>
            <span className="text-[10px] text-cyan-400 font-normal">HD Photo (16:9 or 4:3)</span>
          </label>

          {imageInput ? (
            <div className="h-36 rounded-2xl overflow-hidden border border-cyan-500/40 relative group">
              <img src={imageInput} alt={`${brandName} Showcase`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <button
                  onClick={() => imageFileRef.current?.click()}
                  className="px-3 py-1.5 rounded-lg bg-cyan-400 text-black text-xs font-mono font-bold shadow-lg"
                >
                  Change Photo
                </button>
                <button
                  onClick={() => setImageInput('')}
                  className="px-3 py-1.5 rounded-lg bg-red-500/80 text-white text-xs font-mono font-bold"
                >
                  Clear
                </button>
              </div>
            </div>
          ) : (
            <div
              onClick={() => imageFileRef.current?.click()}
              className="h-28 rounded-2xl border-2 border-dashed border-cyan-500/30 hover:border-cyan-400 bg-cyan-500/5 flex flex-col items-center justify-center p-4 cursor-pointer transition-colors text-center"
            >
              <Image className="w-6 h-6 text-cyan-400 mb-1" />
              <span className="text-xs font-mono font-bold text-cyan-300">Click to Select Product Photo</span>
              <span className="text-[10px] font-mono text-neutral-400">JPG, PNG, WEBP supported</span>
            </div>
          )}

          <div className="flex gap-2">
            <input
              ref={imageFileRef}
              type="file"
              accept="image/*"
              onChange={handleImageFile}
              className="hidden"
            />
            <button
              onClick={() => imageFileRef.current?.click()}
              disabled={isCompressing}
              className="flex-1 px-4 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 text-xs font-mono font-bold transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Image className="w-3.5 h-3.5" />
              <span>Upload Product Photo</span>
            </button>
          </div>

          <input
            type="url"
            placeholder="Or paste photo image URL..."
            value={imageInput}
            onChange={(e) => setImageInput(e.target.value)}
            className="w-full bg-[#060913] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 font-mono"
          />
        </div>

        {/* Brand Logo Section */}
        <div className="space-y-3 border-t border-white/10 pt-4">
          <label className="text-xs font-mono uppercase text-neutral-300 font-bold flex items-center justify-between">
            <span>Brand Logo Image / Badge</span>
            <span className="text-[10px] text-cyan-400 font-normal">PNG / SVG / JPG</span>
          </label>

          {logoInput && (
            <div className="p-3 rounded-xl bg-neutral-900 border border-cyan-500/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={logoInput} alt="Brand Logo Preview" className="h-8 w-auto object-contain max-w-[120px]" referrerPolicy="no-referrer" />
                <span className="text-xs text-cyan-300 font-mono">Custom Logo Set</span>
              </div>
              <button
                onClick={() => setLogoInput('')}
                className="p-1 rounded bg-neutral-800 text-neutral-400 hover:text-red-400 text-xs font-mono"
              >
                Clear
              </button>
            </div>
          )}

          <div className="flex gap-2">
            <input
              ref={logoFileRef}
              type="file"
              accept="image/*"
              onChange={handleLogoFile}
              className="hidden"
            />
            <button
              onClick={() => logoFileRef.current?.click()}
              disabled={isCompressing}
              className="flex-1 px-4 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 text-xs font-mono font-bold transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Upload Logo Badge</span>
            </button>
          </div>

          <input
            type="url"
            placeholder="Or paste brand logo image URL..."
            value={logoInput}
            onChange={(e) => setLogoInput(e.target.value)}
            className="w-full bg-[#060913] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 font-mono"
          />
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
          <button
            onClick={handleReset}
            className="px-3 py-2 rounded-xl bg-neutral-900 border border-white/10 text-neutral-400 hover:text-amber-400 text-xs font-mono transition-colors flex items-center gap-1.5"
            title="Reset to default brand image"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Default</span>
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
              disabled={isCompressing}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-black font-extrabold text-xs uppercase tracking-wider hover:opacity-95 shadow-lg shadow-cyan-500/20 transition-all flex items-center gap-2 disabled:opacity-50"
            >
              {isCompressing ? (
                <>
                  <RefreshCw className="w-4 h-4 text-black animate-spin" />
                  <span>Optimizing...</span>
                </>
              ) : saveSuccess ? (
                <>
                  <Check className="w-4 h-4 text-black stroke-[3]" />
                  <span>Saved!</span>
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4 text-black stroke-[3]" />
                  <span>Save Photo</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
