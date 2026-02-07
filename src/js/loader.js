let pending = 0;

function getLoaderEl() {
  return document.querySelector('[data-loader="global"]');
}

export function showLoader() {
  pending += 1;
  getLoaderEl()?.classList.remove('is-hidden');
}

export function hideLoader() {
  pending -= 1;
  if (pending <= 0) {
    pending = 0;
    getLoaderEl()?.classList.add('is-hidden');
  }
}
