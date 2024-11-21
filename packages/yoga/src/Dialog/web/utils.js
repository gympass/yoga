export function focusOnFirstProgrammaticFocusableElement(container) {
  const element = container.querySelector('[tabindex="-1"]');

  element?.focus();
}
