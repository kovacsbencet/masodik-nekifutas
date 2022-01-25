const kiirando = `<p><button id="visszagomb" onclick="vissza()">←</button><button id="eloregomb">→</button> proba szoveg </p>`

const kmnev = 'Keresztes Mirella'
const kmszoveg = 'km szovegek'

const mrnev = 'Márta Richárd'
const mrszoveg ='ide fogom irni a dolgokat'

const bbnev = 'Buczkó Balázs'
const bbszoveg = 'bb szoveg'

const kbnev = 'Kovács Bence'
const kbszoveg = 'kb szoveg'

function prezi() {
    const fo = document.getElementById("main")
    fo.innerHTML = ""
    fo.insertAdjacentHTML("beforeend", kiirando)
}

function bemutatkozo(nev, szoveg) {
    const fo = document.getElementById("main")
    fo.innerHTML = ""
    fo.insertAdjacentHTML("beforeend", `<p><button id="visszagomb" onclick="vissza()">←</button><button id="eloregomb">→</button><span id="nev">${nev}</span><span>${szoveg}</span></p>`)
}

function vissza() {
    const fo = document.getElementById("main")
    fo.innerHTML = ""
    fo.insertAdjacentHTML("beforeend", kiirando)
}

function km() {
    bemutatkozo(kmnev, kmszoveg)
}

function mr() {
    bemutatkozo(mrnev, mrszoveg)
}

function bb() {
    bemutatkozo(bbnev, bbszoveg)
}

function kb() {
    bemutatkozo(kbnev, kbszoveg)
}