const tensaoSlider = document.getElementById('tensao');
const correnteSlider = document.getElementById('corrente');
const resistenciaSlider = document.getElementById('resistencia');

const valorTensaoSpan = document.getElementById('valorTensao');
const valorCorrenteSpan = document.getElementById('valorCorrente');
const valorResistenciaSpan = document.getElementById('valorResistencia');

const iconesTensaoSpan = document.getElementById('iconesTensao');
const iconesCorrenteSpan = document.getElementById('iconesCorrente');
const iconesResistenciaSpan = document.getElementById('iconesResistencia');

const mensagemVisualDiv = document.getElementById('mensagemVisual');

function atualizarVisualizacao() {
    const v = parseInt(tensaoSlider.value);
    const i = parseInt(correnteSlider.value);
    const r = parseInt(resistenciaSlider.value);

    valorTensaoSpan.textContent = v;
    valorCorrenteSpan.textContent = i;
    valorResistenciaSpan.textContent = r;

    iconesTensaoSpan.innerHTML = criarIcones(v);
    iconesCorrenteSpan.innerHTML = criarIcones(i);
    iconesResistenciaSpan.innerHTML = criarIcones(r);

    const produtoVisual = i * r;

    if (v === produtoVisual) {
        mensagemVisualDiv.textContent = "Visualmente, a relação V = I x R está consistente!";
        mensagemVisualDiv.style.color = "green";
    } else {
        mensagemVisualDiv.textContent = "Visualmente, parece que V não corresponde a I x R.";
        mensagemVisualDiv.style.color = "red";
    }
}

function criarIcones(quantidade) {
    let icones = '';
    for (let j = 0; j < quantidade; j++) {
        icones += '<span class="icone"></span>';
    }
    return icones;
}

tensaoSlider.addEventListener('input', atualizarVisualizacao);
correnteSlider.addEventListener('input', atualizarVisualizacao);
resistenciaSlider.addEventListener('input', atualizarVisualizacao);

atualizarVisualizacao();