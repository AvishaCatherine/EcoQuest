import confetti from 'canvas-confetti';

export function triggerConfetti() {
  try {
    const end = Date.now() + 1.2 * 1000;
    const colors = ['#10b981', '#059669', '#34d399', '#6ee7b7', '#f59e0b', '#38bdf8'];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  } catch (err) {
    console.warn('Confetti effect failed or skipped:', err);
  }
}
