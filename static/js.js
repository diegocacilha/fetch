window.onload = () => {
    var form = document.getElementById('myForm');

    form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        var myHeader = new Headers();
        // myHeader.append('Content-type', 'application/x-www-form-urlencoded');
        // myHeader.append('Content-type', 'multipart/form-data');
        
        var myFormData = new FormData(form);
        fetch('/teste', {
            method: 'POST',
            // headers: myHeader,
            body: myFormData
        }).then((retorno) => {
            console.log(retorno);
        }).catch();
    });
}