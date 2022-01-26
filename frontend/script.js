const preziszoveg = `<div id="content"><button id="visszagomb" onclick="vissza()">←</button><button id="eloregomb">→</button> proba szoveg </div>`

const fooldalszoveg = `
    <div id="content">
        <span id="cim">A torMENTOR csapat</span>
        <div class="kepek">
            <div class="kepszoveg">
                <img src="placeholder.jpg"/>
                <span class="kepalatt">Keresztes Mirella</span>
            </div>
            <div class="kepszoveg">
                <img src="placeholder.jpg"/>
                <span class="kepalatt">Márta Richárd</span>
            </div>
            <div class="kepszoveg">
                <img src="placeholder.jpg"/>
                <span class="kepalatt">Buczkó Balázs</span>
            </div>
            <div class="kepszoveg">
                <img src="placeholder.jpg"/>
                <span class="kepalatt">Kovács Bence</span>
            </div>
        </div>
    </div>`

const kmnev = 'Keresztes Mirella'
const kmszoveg = 'km szovegek'

const mrnev = 'Márta Richárd'
const mrszoveg ='ide fogom irni a dolgokat'

const bbnev = 'Buczkó Balázs'
const bbszoveg = 'bb szoveg'

const kbnev = 'Kovács Bence'
const kbszoveg = 'kb szoveg'

const masikcsapatszoveg = `
    <div id="content">
        <span id="cim">A másik csapat</span>
        <span id="alcim">Education</span>
            <span id="szoveg">BCE Kereskedelem és Marketing</span>
            <span id="szoveg">Grafikus OKJ, Egri fősuli Elektrográfia</span>
            <span id="szoveg">ELTE Pedagógus képzés</span>
            <span id="szoveg">BGF Pénzügy és Számvitel</span>
            <span id="szoveg">Debrecen Anglisztika szak</span>
        <span id="alcim">Working Field</span>
            <span id="szoveg">Szabadúszó táncos, Pizzafutár, Marketinges (videóvágás)</span>
            <span id="szoveg">Product design (UX/UI), Research-től a termékbeveztésig</span>
            <span id="szoveg">Tanító 3 évig (6-7 éves gyerekek)</span>
            <span id="szoveg">Részvényelemző</span>
            <span id="szoveg">Pénzügyi szoftvercégnél (részvények, tőzsde, befektetések) 5 évig Research Analyst</span>
        <span id="alcim">Motivation</span>
            <span id="szoveg">"Likes to build stuff"</span>
            <span id="szoveg">Programozás és design együtt jó lehetőség (ritka)</span>
            <span id="szoveg">Olyan állást találni, aminek van jövőképe. Illetve nagy kihívás, míg a tanítás nem.</span>
            <span id="szoveg">Freelancer élet kipróbálása</span>
            <span id="szoveg">Alkotás vágy, Előző munka során jó lett volna az itt megszerzendő képesítés/tudás</span>
        <span id="alcim">One Special</span>
            <span id="szoveg">Gyerekként jégkorongozott</span>
            <span id="szoveg">???</span>
            <span id="szoveg">Könnyen barátkozik, illeszkedik be.</span>
            <span id="szoveg">9 évig kung fu-zott</span>
            <span id="szoveg">Nagyon szeret olvasni, gyorsolvasó</span>
        <span id="alcim">Craziest story</span>
            <span id="szoveg">Karácsonyi ünnepek környékén hirtelen tánc felkérés Szaud-Arábiában 10ed magával.</span>
            <span id="szoveg">10 év alatt diagnosztizálták a betegségét, amitől szenved.</span>
            <span id="szoveg">Görögországban motorcsónakozás a nyílt tengeren a tengerjáró hajók között. Medúza vadászat a csónakkal :).</span>
            <span id="szoveg">Kung fu gyakorlás télen a hóban, félmeztelenül!!!</span>
            <span id="szoveg">8 hónap ELMŰ call center egyik sztorija, hogy egy kínai lány sírt és kiabált, mert nem volt internete áramszolgáltatás kimaradása miatt</span>
    </div>
`

function fooldal() {
    const fo = document.getElementById("main")
    fo.innerHTML = ""
    fo.insertAdjacentHTML("beforeend", fooldalszoveg)
}

function prezi() {
    const fo = document.getElementById("main")
    fo.innerHTML = ""
    fo.insertAdjacentHTML("beforeend", preziszoveg)
}

function masikcsapat() {
    const fo = document.getElementById("main")
    fo.innerHTML = ""
    fo.insertAdjacentHTML("beforeend", masikcsapatszoveg)
}

function bemutatkozo(nev, szoveg) {
    const fo = document.getElementById("main")
    fo.innerHTML = ""
    fo.insertAdjacentHTML("beforeend", `<div id="content"><span id="nev">${nev}</span><span>${szoveg}</span></div>`)
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