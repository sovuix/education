
const toDoList = () => {

  const state = {
    lists: [
      {
        id: 'general',
        name: 'general',
      }
    ],
    tasks: [],
    activeList : 'general',
  }

  //view
  const render = (state) => {
      const listElement = document.querySelector('[data-container="lists"]');
      const taskElement = document.querySelector('[data-container="tasks"]');

      const ulContent = state.lists.map((item) => {
        if(state.activeList === item.id) {
          return `<li><b>${item.name}</b></li>`;
        }
        return `<li>${item.name}</li>`;
      })

      // listElement.addEventListener('click', (e) => {
      //     const listElement = e.target;
      //     listElement.classList.remove('active');
      //     listElement.classList.add('active');
      // })

      listElement.innerHTML = `<ul>${ulContent.join('')}</ul>`;

      const filteredTaskContent = state.tasks.filter((item) => {
        return item.listsId === state.activeList
      }).map((item) => {
        return `<li>${item.name}</li>`;
      })

      taskElement.innerHTML = `<ul>${filteredTaskContent.join('')}</ul>`;

  }
  render(state);

  const listForm = document.querySelector('[data-container = "new-list-form"]');
  listForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const target = e.target;
    const formData = new FormData(target);
    const newListName = formData.get('name')
    state.lists.push({id:newListName.toUpperCase(), name: newListName});
    target.reset();
    render(state);
  })
    const  taskForm = document.querySelector('[data-container="new-task-form"]');
  taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const target = e.target;
      const formData = new FormData(target);
      const newTaskName = formData.get('name');
      state.tasks.push({
          name: newTaskName,
          listsId: state.activeList,});
      target.reset();
      render(state);
  })
}


toDoList();



