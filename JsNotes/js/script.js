var notes = [];

function CadastrarNotas() {

    var objTitle = document.getElementById('tituloNota');
    var objItens = document.getElementById('itemNota');

    var notas = new Object();
    notas.title = objTitle.value;
    notas.item = objItens.value;

    notes.push(notas);

    objTitle.value  = '';
    objItens.value = '';

    ExibirNotas();

}

function ExibirNotas() {

    event.preventDefault();

    var listaNotas = "";

    for (var i = 0; i < notes.length; i++) {
        listaNotas += '<div id="nota">';
        listaNotas += '<h4>' + notes[i].title + '</h4>';
        listaNotas += '<span>' + notes[i].item + '</span>';
        listaNotas += '<br />';
        listaNotas += '</div>';
    }

    document.getElementById('notas').innerHTML = listaNotas;

}