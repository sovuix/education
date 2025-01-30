import onChange from '../../node_modules/on-change/index.js';

// const app = () => {

//   const state = {
//     activeLeng: '',
//     // activeSecLeng: 'javascript' 
//   }

//   const listLeng = document.querySelectorAll('.list-group-item');

//   listLeng.forEach((item) => {
//     if(item.classList.contains('active')) {
//       state.activeLeng = item.textContent.trim();
//     }
//     item.addEventListener('click', (e) => {
//       e.preventDefault();
//       const target = e.target;
//       const targetLang = target.textContent.trim();
//       if(targetLang !== state.activeLeng){
//         // item.classList.remove('active');
//         console.log(item);
//         console.log(state.activeLeng);

        
//         target.classList.add('active');
//       }
      
//     })
//   })
    

  
// }


// app();

const app = () => {
  const state = {
    activeLeng: '',
  };

  const listLeng = document.querySelectorAll('.list-group-item');
  const content = document.querySelectorAll('.card body tab-pane');

  listLeng.forEach((item) => {
    if (item.classList.contains('active')) {
      state.activeLeng = item.textContent.trim();
    }

    item.addEventListener('click', (e) => {
      e.preventDefault();
    
      const target = e.target;
      const targetLang = target.textContent.trim();
    
      if (targetLang !== state.activeLeng) {
        listLeng.forEach((el) => el.classList.remove('active'));
    
        target.classList.add('active');
    
        state.activeLeng = targetLang;
        console.log(`${state.activeLeng}`);
      }
    });
  })

content.forEach((item) => console.log(item));

};

app();

const content = document.querySelectorAll('.tab-pane');

  content.forEach((item) => {
    const dataId = item.getAttribute('data-testid'); // Получаем значение атрибута data-id
    if (dataId === 'list-python') { // Замените 'ваше_значение' на нужное вам значение
        // Здесь выполняем нужные действия с элементом
        console.log('Элемент найден:', item);
    }
});





