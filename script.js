(function () {
  const logo = document.querySelector(".logo-glitch");
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const interactionQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

  if (!logo || motionQuery.matches || !interactionQuery.matches) {
    return;
  }

  let pointerX = 0;
  let pointerY = 0;
  let currentX = 0;
  let currentY = 0;
  let activity = 0;
  let frame = 0;

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function scheduleUpdate() {
    if (frame) {
      return;
    }

    frame = window.requestAnimationFrame(() => {
      currentX += (pointerX - currentX) * 0.24;
      currentY += (pointerY - currentY) * 0.24;
      activity *= 0.9;

      logo.style.setProperty("--glitch-x", currentX.toFixed(3));
      logo.style.setProperty("--glitch-y", currentY.toFixed(3));
      logo.style.setProperty("--glitch-activity", activity.toFixed(3));

      frame = 0;

      if (Math.abs(pointerX - currentX) > 0.002 || Math.abs(pointerY - currentY) > 0.002 || activity > 0.01) {
        scheduleUpdate();
      }
    });
  }

  function handlePointerMove(event) {
    if (motionQuery.matches) {
      return;
    }

    const rect = logo.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const range = Math.max(rect.width, rect.height, 1);

    pointerX = clamp((event.clientX - centerX) / range, -1, 1);
    pointerY = clamp((event.clientY - centerY) / range, -1, 1);
    activity = 1;

    scheduleUpdate();
  }

  window.addEventListener("pointermove", handlePointerMove, { passive: true });
  window.addEventListener("mousemove", handlePointerMove, { passive: true });

  motionQuery.addEventListener("change", (event) => {
    if (event.matches) {
      window.cancelAnimationFrame(frame);
      frame = 0;
      logo.style.removeProperty("--glitch-x");
      logo.style.removeProperty("--glitch-y");
      logo.style.removeProperty("--glitch-activity");
    }
  });

  interactionQuery.addEventListener("change", (event) => {
    if (!event.matches) {
      window.cancelAnimationFrame(frame);
      frame = 0;
      logo.style.removeProperty("--glitch-x");
      logo.style.removeProperty("--glitch-y");
      logo.style.removeProperty("--glitch-activity");
    }
  });
})();
