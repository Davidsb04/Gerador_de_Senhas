document.getElementById('gerar').addEventListener('click', function(){
    const size = document.getElementById('size').value;
    const res = document.getElementById('res');
    let password = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for(let i = 0; i < size; i++){
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    res.value = password
});
document.getElementById('copy').addEventListener('click', function(){
    const res = document.getElementById('res');
    navigator.clipboard.writeText(res.value).then(() => {
        alert('Copiado')
    })
});

