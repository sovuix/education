import onChange from 'on-change';

/*
<div class="btn-group" role="group">
    <button type="button" class="btn mb-3 btn-primary">English</button>
    <button type="button" class="btn mb-3 btn-outline-primary">Русский</button>
</div>
<button type="button" class="btn btn-info mb-3 align-self-center">0 clicks</button>
<button type="button" class="btn btn-warning">Reset</button>
*/

const app = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const container = document.querySelector('.container');

        const state = onChange({
            language: 'English',
            clickCount: 0,
        }, render)

        function render () {
            container.innerHTML = ''; // Здесь я очищаю перед обновлением, правильный подход?


            const btnGroup = document.createElement('div');
            btnGroup.className = 'btn-group';
            btnGroup.setAttribute('role', 'group');

            const btnEnglish = document.createElement('button');
            btnEnglish.type = 'button';
            btnEnglish.className = state.language === 'English' ? 'btn mb-3 btn-primary' : 'btn mb-3 btn-outline-primary';
            btnEnglish.textContent = 'English';
            btnEnglish.addEventListener('click', () => {
                state.language = 'English';
            });

            const btnRussian = document.createElement('button');
            btnRussian.type = 'button';
            btnRussian.className = state.language === 'Русский' ? 'btn mb-3 btn-primary' : 'btn mb-3 btn-outline-primary';
            btnRussian.textContent = 'Русский';
            btnRussian.addEventListener('click', () => {
                state.language = 'Русский';
            });

            btnGroup.append(btnEnglish, btnRussian);

            const btnCounter = document.createElement('button');
            btnCounter.type = 'button';
            btnCounter.className = 'btn btn-info mb-3 align-self-center';
            btnCounter.textContent = `${state.clickCount} clicks`;
            btnCounter.addEventListener('click', () => {
                state.clickCount += 1;
            });

            const btnReset = document.createElement('button');
            btnReset.type = 'button';
            btnReset.className = 'btn btn-warning';
            btnReset.textContent = 'Reset';
            btnReset.addEventListener('click', () => {
                state.clickCount = 0;
            });

            container.append(btnGroup, btnCounter, btnReset);
        }

        render();
    });
}

export default app;



