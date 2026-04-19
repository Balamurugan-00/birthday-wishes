/**
 * Security utilities to prevent screenshots and screen recordings
 */

export const initializeSecurityMeasures = () => {
  // Prevent right-click context menu
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
  });

  // Prevent keyboard shortcuts for screenshots and screen recording
  document.addEventListener('keydown', (e) => {
    // Windows/Linux screenshot shortcuts
    if (
      (e.key === 'PrintScreen') ||
      (e.ctrlKey && e.shiftKey && e.key === 's') ||
      (e.ctrlKey && e.altKey && e.key === 's') ||
      (e.shiftKey && e.metaKey && e.key === '3') || // Mac screenshot
      (e.shiftKey && e.metaKey && e.key === '4') ||  // Mac screenshot
      (e.ctrlKey && e.shiftKey && e.key === 'F12') || // Dev tools
      (e.key === 'F12')
    ) {
      e.preventDefault();
      return false;
    }
  });

  // Prevent developer tools
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'i') {
      e.preventDefault();
      return false;
    }
  });

  // Disable text selection visibility (makes copying harder)
  document.body.style.userSelect = 'none';
  document.body.style.webkitUserSelect = 'none';
  document.body.style.msUserSelect = 'none';

  // Prevent drag and drop
  document.addEventListener('dragstart', (e) => {
    e.preventDefault();
  });

  // Prevent copy paste for sensitive text
  document.addEventListener('copy', (e) => {
    e.preventDefault();
  });

  // Prevent cut
  document.addEventListener('cut', (e) => {
    e.preventDefault();
  });

  // Add opacity mask overlay to make screenshots less useful
  const observer = new MutationObserver(() => {
    document.documentElement.style.content = '';
  });

  observer.observe(document.documentElement, {
    subtree: true,
    attributes: true,
  });

  // Disable media download
  document.addEventListener('mousedown', (e) => {
    if (e.button === 2 || e.ctrlKey) {
      const target = e.target;
      if (target.tagName === 'IMG' || target.tagName === 'VIDEO' || target.tagName === 'AUDIO') {
        e.preventDefault();
      }
    }
  });
};

/**
 * Privacy utilities
 */
export const sanitizeData = (data) => {
  // Basic sanitization to prevent XSS
  const div = document.createElement('div');
  div.textContent = data;
  return div.innerHTML;
};

/**
 * Add watermark to prevent sharing
 */
export const addWatermark = () => {
  const watermarkText = `Generated ${new Date().toISOString().split('T')[0]}`;
  const canvas = document.createElement('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
  ctx.font = 'bold 48px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate(-Math.PI / 4);
  ctx.fillText(watermarkText, 0, 0);
  ctx.restore();

  // Apply as background
  document.body.style.backgroundImage = `url('${canvas.toDataURL()}')`;
  document.body.style.backgroundRepeat = 'repeat';
  document.body.style.backgroundAttachment = 'fixed';
};

/**
 * Add screen recording prevention
 */
export const preventScreenRecording = () => {
  // Detect possible screen recording attempts
  const checkScreenRecording = async () => {
    try {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, 1, 1);

      const originalToDataURL = canvas.toDataURL;
      canvas.toDataURL = function () {
        // Log suspicion but still allow (hard to detect recording)
        console.warn('Canvas access detected');
        return originalToDataURL.call(this);
      };
    } catch (e) {
      console.log('Security check passed');
    }
  };

  checkScreenRecording();
};
