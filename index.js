var resultado = 0;
const displayText = document.getElementById('resultado');

const datos = [
    {
        nem: 20,
        ranking: 20,
        lectora: 15,
        m1: 30,
        historia: 0,
        ciencias: 15,
        m2:0
    },
    {
        nem: 20,
        ranking: 30,
        lectora: 30,
        m1: 10,
        historia: 10,
        ciencias: 0,
        m2:0
    },
]

function calcular() {
    const nem = parseFloat(document.getElementById('nem').value) || 0;
    const ranking = parseFloat(document.getElementById('ranking').value) || 0;
    const lectora = parseFloat(document.getElementById('lectora').value) || 0;
    const m1 = parseFloat(document.getElementById('matematica1').value) || 0;
    const ciencias = parseFloat(document.getElementById('ciencias').value) || 0;
    const m2 = parseFloat(document.getElementById('matematica2').value) || 0;
    const historia = parseFloat(document.getElementById('historia').value) || 0;
    const input = parseInt(document.getElementById('input').value);

    if(input == -1){
        displayText.textContent = 0;
        return;
    }

    resultado = (datos[input].nem*nem)/100 + (datos[input].ranking*ranking)/100 + (datos[input].lectora*lectora)/100 + (datos[input].m1*m1)/100 + (datos[input].ciencias*ciencias)/100 + (datos[input].m2*m2)/100 + (datos[input].historia* historia)/100
    displayText.textContent = resultado;
}