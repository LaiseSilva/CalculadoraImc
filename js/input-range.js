'use strict'

const iniciarRange = (idRange) => {
    const range = document.getElementById(idRange) //pegar id do range
    const span = document.getElementById(`valor-${idRange}`) // pegar valor do span

    const atualizarValor = () => span.textContent = range.value; // o span irá receber o valor do range
    range.addEventListener('input', atualizarValor) // Quando mexer na barrinha o valor será atualizado
}

export {
    iniciarRange
}