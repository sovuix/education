
export default() => {
    const form = document.querySelector('.form-inline');
    let result = document.getElementById('result');
    

    const state = {
        count: 0,
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let formdata = new FormData(e.target);
        let num = parseInt(formdata.get('number'));
        state.count += num;
        result.textContent = state.count;

        
    })

    console.log(result);
    
    
}

