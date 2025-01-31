import onChange from '../../node_modules/on-change/index.js';

const app = () => {
  const state = {
    activeTab: null,
  };

  const render = () => {
    if (!state.activeTab) return;
    const tabLinks = document.querySelectorAll('[data-bs-toggle="list"]');
    const tabContents = document.querySelectorAll('.tab-pane');

    // tabLinks.forEach((tab) => {
    //   const targetId = tab.getAttribute('href').substring(1);
    //   tab.classList.toggle('active', targetId === state.activeTab);
    // });
    tabLinks.forEach((tab) => {
      const targetId = tab.getAttribute('href').substring(1);
      tab.classList.remove('active');
      if (targetId === state.activeTab) {
        tab.classList.add('active');
      }
    });

    //   tabContents.forEach((content) => {
    //     content.classList.toggle('active', content.id === state.activeTab);
    //     content.classList.toggle('show', content.id === state.activeTab);
    //   });
    // };
    tabContents.forEach((content) => {
      content.classList.remove('active', 'show');
      if (content.id === state.activeTab) {
        content.classList.add('active', 'show');
      }
    });
  };

  const watchedState = onChange(state, render);

  document.querySelectorAll('[data-bs-toggle="list"]').forEach((tab) => {
    tab.addEventListener('click', (event) => {
      event.preventDefault();
      watchedState.activeTab = tab.getAttribute('href').substring(1);
    });
  });
  render();
};

app();
