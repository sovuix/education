/*
<div class="btn-group" role="group">
    <button type="button" class="btn mb-3 btn-primary">English</button>
    <button type="button" class="btn mb-3 btn-outline-primary">Русский</button>
</div>
<button type="button" class="btn btn-info mb-3 align-self-center">0 clicks</button>
<button type="button" class="btn btn-warning">Reset</button>
*/

document.addEventListener('DOMContentLoaded', ()=> {
    document.querySelector('.container');

    const state = {
        lenguage: 'English',
        clickCounter: 0,
    }


    const btnGroup = document.createElement('div');
    btnGroup.className = 'btn-group';
    btnGroup.setAttribute('role','group');
    container.append(btnGroup);

    const btnEnglish = document.createElement('button');
    btnEnglish.setAttribute('type','button');
    btnEnglish.className = 'btn mb-3 btn-primary'
    btnEnglish.textContent = 'English'

    const btnRussian = document.createElement('button');
    btnEn 


    
})
