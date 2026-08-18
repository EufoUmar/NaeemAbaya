// ─────────────────────────────────────────────────────────────
//  src/utils/mediaUtils.js
//  Frontend utilities for downloading & copying product images
// ─────────────────────────────────────────────────────────────

/**
 * Downloads an image directly to the user's device
 */
export const downloadImage = async (imgSrc, fileName = 'NaeemAbaya_Design.jpg') => {
  try {
    const response = await fetch(imgSrc);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    return true;
  } catch (err) {
    console.warn('Direct blob download failed, trying fallback link trigger:', err);
    try {
      const link = document.createElement('a');
      link.href = imgSrc;
      link.download = fileName;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return true;
    } catch (fallbackErr) {
      console.error('Download failed:', fallbackErr);
      return false;
    }
  }
};

/**
 * Copies an image binary blob (or fallback URL) to clipboard
 */
export const copyImageToClipboard = async (imgSrc) => {
  try {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imgSrc;

    await new Promise((resolve, reject) => {
      if (img.complete) resolve();
      else {
        img.onload = resolve;
        img.onerror = () => reject(new Error('Failed to load image element'));
      }
    });

    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth || img.width || 400;
    canvas.height = img.naturalHeight || img.height || 600;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);

    const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));

    if (blob && navigator.clipboard && window.ClipboardItem) {
      await navigator.clipboard.write([
        new ClipboardItem({ 'image/png': blob })
      ]);
      return true;
    }
  } catch (err) {
    console.warn('Image blob copy failed, falling back to URL copy:', err);
  }

  // Fallback: Copy absolute URL to clipboard
  try {
    const fullUrl = imgSrc.startsWith('http') ? imgSrc : new URL(imgSrc, window.location.href).href;
    await navigator.clipboard.writeText(fullUrl);
    return true;
  } catch (err) {
    console.error('Clipboard copy failed:', err);
    return false;
  }
};
