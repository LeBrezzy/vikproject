// Поиск
document.getElementById('Poisk').addEventListener('input', (e) => {
    let monets = document.querySelectorAll('.moneta-info');
    let find = false;
    monets.forEach((value, key, parent) => {
        if (value.querySelector('.moneta-name h3').textContent.toLowerCase().indexOf(e.target.value.toLowerCase()) != -1) {
            find = true;
            value.style.display = ''
        }
        else value.style.display = 'none';
    })
    if (!find) document.querySelector('.not-found').style.display = 'inline-block'
    else document.querySelector('.not-found').style.display = 'none'

})