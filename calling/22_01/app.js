const toDoList = () => {
  const state = {
    lists: [
      {
        id: 'general',
        name: 'General',
      }
    ],
    tasks: [],
    activeList: 'general',
  };

  // view
  const render = (state) => {
    const listElement = document.querySelector('[data-container="lists"]');
    const taskElement = document.querySelector('[data-container="tasks"]');

    const ulContent = state.lists.map((item) => {
      if (state.activeList === item.id) {
        return `<li><b>${item.name}</b></li>`;
      }
      return `<li><a href="#${item.id}" data-id="${item.id}">${item.name}</a></li>`;
    });

    listElement.innerHTML = `<ul>${ulContent.join('')}</ul>`;

    const filteredTaskContent = state.tasks
      .filter((item) => item.listsId === state.activeList)
      .map((item) => `<li>${item.name}</li>`);

    taskElement.innerHTML = `<ul>${filteredTaskContent.join('')}</ul>`;
  };

  render(state);

  const listForm = document.querySelector('[data-container="new-list-form"]');
  listForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const target = e.target;
    const formData = new FormData(target);
    const newListName = formData.get('name');
    const newListId = newListName.toLowerCase();
    const existingList = state.lists.find((list) => list.id === newListId);
    if (existingList) {
      return;
    }
    state.lists.push({ id: newListId, name: newListName });
    target.reset();
    render(state);
  });

  const taskForm = document.querySelector('[data-container="new-task-form"]');
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const target = e.target;
    const formData = new FormData(target);
    const newTaskName = formData.get('name');
    state.tasks.push({
      name: newTaskName,
      listsId: state.activeList,
    });
    target.reset();
    render(state);
  });

  const listElement = document.querySelector('[data-container="lists"]');
  listElement.addEventListener(
    'click',
    (e) => {
      const target = e.target;
      const id = target.dataset.id;
      if (id) {
        state.activeList = id;
        render(state);
      }
    },
    true
  );
};

toDoList();


