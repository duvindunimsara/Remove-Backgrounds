import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import {
  Upload, Download, RefreshCw, AlertCircle, CheckCircle,
  Sparkles, Image as ImageIcon, Loader2, X
} from 'lucide-react';
import SEO from '../components/SEO';
import AdBanner from '../components/AdBanner';

type Status = 'idle' | 'uploading' | 'processing' | 'done' | 'error';

const Tool: React.FC = () => {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');

  const processImage = useCallback(async (file: File) => {
    setStatus('uploading');
    setErrorMsg('');
    setResultImage(null);
    setFileName(file.name.replace(/\.[^.]+$/, ''));

    // Preview original
    const reader = new FileReader();
    reader.onload = (e) => setOriginalImage(e.target?.result as string);
    reader.readAsDataURL(file);

    setStatus('processing');

    try {
      const apiKey = process.env.REACT_APP_REMOVE_BG_API_KEY;

      if (!apiKey || apiKey === 'your_api_key_here') {
        // Demo mode: simulate processing delay and return original with a mock message
        await new Promise(resolve => setTimeout(resolve, 2500));
        throw new Error('API key not configured. Set REACT_APP_REMOVE_BG_API_KEY in your .env file to enable background removal.');
      }

      const formData = new FormData();
      formData.append('image_file', file);
      formData.append('size', 'auto');

      const response = await fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
          'X-Api-Key': apiKey,
        },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const msg = errorData?.errors?.[0]?.title || `API Error: ${response.status}`;
        throw new Error(msg);
      }

      const blob = await response.blob();
      const resultUrl = URL.createObjectURL(blob);
      setResultImage(resultUrl);
      setStatus('done');
    } catch (err: any) {
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  }, []);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      setErrorMsg('File too large. Maximum size is 10MB.');
      setStatus('error');
      return;
    }

    processImage(file);
  }, [processImage]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.jpg', '.jpeg', '.png', '.webp'] },
    multiple: false,
    disabled: status === 'processing' || status === 'uploading',
  });

  const handleDownload = () => {
    if (!resultImage) return;
    const a = document.createElement('a');
    a.href = resultImage;
    a.download = `${fileName}_no_bg.png`;
    a.click();
  };

  const handleReset = () => {
    setOriginalImage(null);
    setResultImage(null);
    setStatus('idle');
    setErrorMsg('');
    setFileName('');
  };

  const isProcessing = status === 'uploading' || status === 'processing';

  return (
    <>
      <SEO
        title="Background Remover Tool — BGRemover"
        description="Upload your image and remove the background instantly with AI. Free online tool — no sign-up needed. Download transparent PNG in seconds."
        canonical="https://bgremover.app/tool"
      />

      <div className="min-h-screen pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center pt-10 pb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-violet-500/20 text-sm text-violet-300 mb-6">
              <Sparkles size={14} />
              AI-Powered Background Removal
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Background Remover
            </h1>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Upload your image below. Our AI will remove the background in seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main Tool Area */}
            <div className="lg:col-span-3 space-y-6">

              {/* Upload Zone */}
              {status === 'idle' && (
                <div
                  {...getRootProps()}
                  className={`gradient-border rounded-2xl p-12 text-center cursor-pointer transition-all duration-300 ${
                    isDragActive
                      ? 'bg-violet-500/10 scale-[1.01]'
                      : 'hover:bg-violet-500/5 hover:scale-[1.005]'
                  }`}
                >
                  <input {...getInputProps()} />
                  <div className="flex flex-col items-center gap-4">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isDragActive
                        ? 'bg-violet-500/20 scale-110'
                        : 'bg-violet-500/10'
                    }`}>
                      <Upload size={32} className={isDragActive ? 'text-violet-300' : 'text-violet-400'} />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-xl mb-1">
                        {isDragActive ? 'Drop it here!' : 'Drag & drop your image'}
                      </p>
                      <p className="text-slate-500 text-sm">
                        or click to select — JPG, PNG, WEBP up to 10MB
                      </p>
                    </div>
                    <button className="mt-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 text-white font-semibold hover:from-violet-500 hover:to-cyan-500 transition-all duration-300">
                      Choose Image
                    </button>
                  </div>
                </div>
              )}

              {/* Processing State */}
              {isProcessing && (
                <div className="glass rounded-2xl p-12 text-center">
                  <div className="flex flex-col items-center gap-6">
                    {originalImage && (
                      <div className="relative w-40 h-40 rounded-xl overflow-hidden">
                        <img
                          src={originalImage}
                          alt="Processing"
                          className="w-full h-full object-cover opacity-50"
                        />
                        <div className="absolute inset-0 shimmer" />
                      </div>
                    )}
                    <div className="flex items-center gap-3">
                      <Loader2 size={24} className="text-violet-400 animate-spin" />
                      <div className="text-left">
                        <p className="text-white font-semibold">
                          {status === 'uploading' ? 'Uploading image...' : 'AI removing background...'}
                        </p>
                        <p className="text-slate-500 text-sm">This usually takes 2–5 seconds</p>
                      </div>
                    </div>
                    {/* Loading steps */}
                    <div className="flex flex-col gap-2 text-sm w-full max-w-xs">
                      {[
                        { label: 'Analyzing image', done: true },
                        { label: 'Detecting subject edges', done: status === 'processing' },
                        { label: 'Removing background', done: false },
                      ].map((step, i) => (
                        <div key={i} className="flex items-center gap-2 text-left">
                          {step.done ? (
                            <CheckCircle size={14} className="text-green-400 flex-shrink-0" />
                          ) : (
                            <Loader2 size={14} className="text-violet-400 animate-spin flex-shrink-0" />
                          )}
                          <span className={step.done ? 'text-slate-400' : 'text-slate-500'}>
                            {step.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Error State */}
              {status === 'error' && (
                <div className="glass rounded-2xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                      <AlertCircle size={20} className="text-red-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-1">Something went wrong</h3>
                      <p className="text-slate-400 text-sm mb-4">{errorMsg}</p>
                      <button
                        onClick={handleReset}
                        className="flex items-center gap-2 px-5 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-white text-sm font-medium transition-all"
                      >
                        <RefreshCw size={14} />
                        Try Again
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Result State */}
              {status === 'done' && originalImage && resultImage && (
                <div className="space-y-4">
                  {/* Compare slider */}
                  <div className="glass rounded-2xl p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-white font-semibold flex items-center gap-2">
                        <CheckCircle size={18} className="text-green-400" />
                        Background Removed
                      </h3>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={handleReset}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-white/[0.1] text-slate-400 hover:text-white text-sm transition-all"
                        >
                          <X size={14} />
                          New Image
                        </button>
                        <button
                          onClick={handleDownload}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-cyan-500 text-white text-sm font-semibold transition-all"
                        >
                          <Download size={14} />
                          Download PNG
                        </button>
                      </div>
                    </div>

                    <div className="rounded-xl overflow-hidden" style={{ height: '400px' }}>
                      <ReactCompareSlider
                        itemOne={
                          <ReactCompareSliderImage
                            src={originalImage}
                            alt="Original image"
                            style={{ objectFit: 'contain', background: '#1a1a2e' }}
                          />
                        }
                        itemTwo={
                          <ReactCompareSliderImage
                            src={resultImage}
                            alt="Background removed"
                            style={{
                              objectFit: 'contain',
                              backgroundImage: 'linear-gradient(45deg, #374151 25%, transparent 25%), linear-gradient(-45deg, #374151 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #374151 75%), linear-gradient(-45deg, transparent 75%, #374151 75%)',
                              backgroundSize: '20px 20px',
                              backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
                              backgroundColor: '#1f2937',
                            }}
                          />
                        }
                        style={{ height: '100%' }}
                      />
                    </div>
                    <p className="text-slate-600 text-xs text-center mt-3">← Drag the slider to compare before and after →</p>
                  </div>

                  {/* Side-by-side download options */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass rounded-xl p-4">
                      <p className="text-slate-500 text-xs mb-2 uppercase tracking-wider">Original</p>
                      <div className="rounded-lg overflow-hidden bg-dark-700 h-32">
                        <img src={originalImage} alt="Original" className="w-full h-full object-contain" />
                      </div>
                    </div>
                    <div className="glass rounded-xl p-4">
                      <p className="text-slate-500 text-xs mb-2 uppercase tracking-wider">No Background</p>
                      <div className="rounded-lg overflow-hidden checker-bg h-32">
                        <img src={resultImage} alt="Result" className="w-full h-full object-contain" />
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleDownload}
                    className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold text-lg hover:scale-[1.01] transition-transform shadow-2xl shadow-violet-500/25"
                  >
                    <Download size={20} />
                    Download Transparent PNG
                  </button>
                </div>
              )}

              {/* Ad after tool */}
              <AdBanner variant="horizontal" />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Sidebar Ad */}
              <AdBanner variant="sidebar" />

              {/* Tips panel */}
              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <Sparkles size={16} className="text-violet-400" />
                  Tips for Best Results
                </h3>
                <ul className="space-y-3">
                  {[
                    'Use high contrast images for cleaner edges',
                    'JPEG or PNG files work best',
                    'Keep subjects well-lit and in focus',
                    'Avoid heavily patterned backgrounds',
                    'Max file size is 10MB',
                  ].map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-500">
                      <span className="text-violet-400 mt-0.5">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Supported formats */}
              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <ImageIcon size={16} className="text-cyan-400" />
                  Supported Formats
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['JPG', 'JPEG', 'PNG', 'WEBP'].map(fmt => (
                    <span key={fmt} className="px-3 py-1 rounded-lg bg-dark-600 text-slate-400 text-xs font-mono">
                      .{fmt.toLowerCase()}
                    </span>
                  ))}
                </div>
              </div>

              {/* Second sidebar ad */}
              <AdBanner variant="square" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tool;
