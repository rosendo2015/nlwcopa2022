
const body = document.body
const buttomBlue = document.querySelector(".blue")
const buttomGreen = document.querySelector(".green")
const buttomYellow = document.querySelector(".yellow")

buttomBlue.addEventListener('click', function () {
    buttomBlue.classList.add('selectedBlue')
    buttomYellow.classList.remove('selectedYellow')
    buttomGreen.classList.remove('selectedGreen')
    body.classList.add('blue')
    body.classList.remove('green')
    body.classList.remove('yellow')
})
buttomGreen.addEventListener('click', function () {
    buttomYellow.classList.remove('selectedYellow')
    buttomGreen.classList.add('selectedGreen')
    buttomBlue.classList.remove('selectedBlue')
    body.classList.add('green')
    body.classList.remove('blue')
    body.classList.remove('yellow')
})
buttomYellow.addEventListener('click', function () {
    buttomYellow.classList.add('selectedYellow')
    buttomGreen.classList.remove('selectedGreen')
    buttomBlue.classList.remove('selectedBlue')
    body.classList.add('yellow')
    body.classList.remove('green')
    body.classList.remove('blue')
})
function createGame(player1, time1, hour, time2, player2) {
    return `
        <li>
        <div class="equip">
            <img src="./assets/icon-${player1}.svg" alt="bandeira da ${player1}">
            <i>${player1}</i>
        </div
            <strong>${hour}</strong>
        <div  class="equip">
            <img src="./assets/icon-${player2}.svg" alt="bandeira do ${player2}">
            <i>${player2}</i>
        </div>
        </li>
    `
}
let delay = -0.3;
function createCard(date, day, games) {
    delay = delay + 0.3;
    return `
<div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
        <ul>
          ${games}              
    </ul>
</div>
`
}

document.querySelector("#cards").innerHTML =

    createCard('20/11', 'Domingo', 
    createGame('cat','', '13:00', '', 'equ')) +

    createCard('21/11', 'Segunda',
        createGame('ing','', '10:00','', 'ira') +
        createGame('sen','', '13:00','', 'hol') +
        createGame('EUA','', '16:00', '', 'gal')) +

    createCard('22/11', 'terça',
        createGame('arg', '', '07:00', '', 'ara') +
        createGame('din', '', '10:00', '', 'tun') +
        createGame('mex', '', '13:00', '', 'pol') +
        createGame('fra', '', '16:00', '', 'aus')   
    ) +
    
    createCard('23/11', 'Quarta',
        createGame('mar', '', '07:00', '', 'cro') +
        createGame('ale', '', '10:00', '', 'jap') +
        createGame('esp', '', '13:00', '', 'crc') +
        createGame('bel', '', '16:00', '', 'can')
    ) +

    createCard('24/11', 'Quinta',
    createGame('sui', '', '07:00', '', 'cam') +
    createGame('uru', '', '10:00', '', 'cor') +
    createGame('por', '', '13:00', '', 'gan') +
    createGame('bra', '', '16:00', '', 'ser') 
    ) +

    createCard('25/11', 'Sexta',
        createGame('gal', '', '07:00', '', 'ira') +
        createGame('cat', '', '10:00', '', 'sen') +
        createGame('hol', '', '13:00', '', 'equ') +
        createGame('ing', '', '16:00', '', 'EUA')

    ) +
    createCard('26/11', 'sabado',
        createGame('tun', '', '07:00', '', 'aus') +
        createGame('pol', '', '10:00', '', 'ara') +
        createGame('fra', '', '13:00', '', 'din') +
        createGame('arg', '', '16:00', '', 'mex')

    ) +
    createCard('27/11', 'domingo',
        createGame('jap', '', '07:00', '', 'crc') +
        createGame('bel', '', '10:00', '', 'mar') +
        createGame('cro', '', '13:00', '', 'can') +
        createGame('esp', '', '16:00', '', 'ale')

    ) +
    createCard('28/11', 'segunda',
        createGame('cam', '', '07:00', '', 'ser') +
        createGame('cor', '', '10:00', '', 'gan') +
        createGame('bra', '', '13:00', '', 'sui') +
        createGame('por', '', '16:00', '', 'uru')

    ) +
    createCard('29/11', 'terça',
        createGame('equ','', '12:00','', 'sen') +
        createGame('hol','', '12:00','', 'cat') +
        createGame('ira','', '16:00','', 'EUA') +
        createGame('gal','', '16:00','', 'ing')

    ) +
    createCard('30/11', 'quarta',
        createGame('tun', '', '12:00', '', 'fra') +
        createGame('aus', '', '12:00', '', 'din') +
        createGame('pol', '', '16:00', '', 'arg') +
        createGame('ara', '', '16:00', '', 'mex')

    ) +
    createCard('01/12', 'quinta',
        createGame('cro', '', '12:00', '', 'bel') +
        createGame('can', '', '12:00', '', 'mar') +
        createGame('jap', '', '16:00', '', 'esp') +
        createGame('crc', '', '16:00', '', 'ale')

    ) +
    createCard('02/12', 'sexta',
        createGame('cor', '', '12:00', '', 'por') +
        createGame('gan', '', '12:00', '', 'uru') +
        createGame('ser', '', '16:00', '', 'sui') +
        createGame('cam', '', '16:00', '', 'bra')

    )
