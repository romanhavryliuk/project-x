import loaderMarkup from '../partials/loader.html?raw';

const pendingByContainer = new Map();

export function mountLoader(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  if (container.querySelector('[data-loader]')) return;

  container.insertAdjacentHTML('afterbegin', loaderMarkup);
}

function getLoaderEl(containerSelector) {
  return document.querySelector(`${containerSelector} [data-loader]`);
}

export function showLoader(containerSelector) {
  const pending = (pendingByContainer.get(containerSelector) ?? 0) + 1;
  pendingByContainer.set(containerSelector, pending);

  getLoaderEl(containerSelector)?.classList.remove('is-hidden');
}

export function hideLoader(containerSelector) {
  const pending = (pendingByContainer.get(containerSelector) ?? 0) - 1;

  if (pending <= 0) {
    pendingByContainer.set(containerSelector, 0);
    getLoaderEl(containerSelector)?.classList.add('is-hidden');
  } else {
    pendingByContainer.set(containerSelector, pending);
  }
}
