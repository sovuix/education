const btn = document.querySelectorAll('button');

// btn.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     const target = e.target;
//     target.style.backgroundColor = 'yellow';
//   });
// });

// btn[0].addEventListener('click', () => {
//   alert('click')
// })
//
// btn[1].addEventListener('click', () => {
//   alert('secondClick')
// })

// btn.forEach((item) => {
//   item.addEventListener('click', (e) => {
//     // e.preventDefault();
//     const target = e.target;
//     alert(target.innerText);
//   })
// })

// btn.forEach((item) => {
//   item.addEventListener('click', (e) => {
//     // e.preventDefault();
//     const target = e.target;
//     e.target.remove();
//   })
// })

const deleteElement = (e) => e.target.remove();

// btn.forEach((item) => {
//   item.addEventListener('click', deleteElement);
// })

// const link = document.querySelectorAll('a');
const a = document.createElement('a');
a.classList.add('a');
a.textContent = 'youTube';
a.href = 'https://youtube.com';
document.body.append(a);
console.dir(a);

a.addEventListener('click', (e) =>{
  e.preventDefault();
  console.log(e.target);
},{once:true});
