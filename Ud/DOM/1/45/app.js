// console.log(document.body)
// console.log(document.body.childNodes); возвращает все ноды
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('[data-current="3"]').previousElementSibling);

for(let node of document.body.childNodes){
  if(node.nodeName === "#text"){
    continue;
  }
  console.log(node);
}

