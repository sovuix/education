import onChange from 'on-change';
import i18next from 'i18next';
import resources from './locales/index.js';

i18next.init({
  lng: 'en',
  resources,
});

const app = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');

    const state = onChange(
      {
        language: i18next.language,
        clickCount: 0,
      },
      async (path, value) => {
        if (path === 'language') {
          await i18next.changeLanguage(value);
        }
        render(container, state, i18next);
      }
    );

    render(container, state, i18next);
  });
};

const render = (container, state, i18n) => {
  container.innerHTML = '';

  const btnGroup = document.createElement('div');
  btnGroup.className = 'btn-group';
  btnGroup.setAttribute('role', 'group');

  Object.keys(i18n.options.resources).forEach((lang) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className =
      state.language === lang
        ? 'btn mb-3 btn-primary'
        : 'btn mb-3 btn-outline-primary';
    btn.textContent = i18n.t(`button_${lang}`);
    btn.addEventListener('click', () => {
      state.language = lang;
    });
    btnGroup.append(btn);
  });

  const btnCounter = document.createElement('button');
  btnCounter.type = 'button';
  btnCounter.className = 'btn btn-info mb-3 align-self-center';
  btnCounter.textContent = i18n.t('key', { count: state.clickCount });
  btnCounter.addEventListener('click', () => {
    state.clickCount += 1;
  });

  const btnReset = document.createElement('button');
  btnReset.type = 'button';
  btnReset.className = 'btn btn-warning';
  btnReset.textContent = i18n.t('button_reset');
  btnReset.addEventListener('click', () => {
    state.clickCount = 0;
  });

  container.append(btnGroup, btnCounter, btnReset);
};

export default app;
