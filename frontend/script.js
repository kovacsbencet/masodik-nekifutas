const fooldalszoveg = `
    <div id="content">
        <span id="cim"><img class="logo" src="logo.jpg"/></span>
        <div class="kepek">
            <div class="kepszoveg">
                <img src="placeholder.jpg"/>
                <span class="kepalatt">Keresztes Mirella</span>
            </div>
            <div class="kepszoveg">
                <img src="mr.jpg"/>
                <span class="kepalatt">Márta Richárd</span>
            </div>
            <div class="kepszoveg">
                <img src="BB.jpg"/>
                <span class="kepalatt">Buczkó Balázs</span>
            </div>
            <div class="kepszoveg">
                <img src="kovacsbencet.png"/>
                <span class="kepalatt">Kovács Bence</span>
            </div>
        </div>
    </div>`

const kmnev = 'Keresztes Mirella'
const kmszoveg = `
    <div id="content">
        <span id="cim">Keresztes Mirella</span>
        <span id="alcim">Education</span>

        <span id="alcim">Working Field</span>

        <span id="alcim">Motivation</span>

        <span id="alcim">One Special</span>

        <span id="alcim">Craziest story</span>
    </div>
`

const mrnev = 'Márta Richárd'
const mrszoveg =`
    <div id="content">
        <span id="cim">Márta Richárd</span>
        <span id="alcim">Education</span>
        <span id="szoveg">Informatikai gimnázium</span>
        <span id="alcim">Working Field</span>

        <span id="alcim">Motivation</span>

        <span id="alcim">One Special</span>

        <span id="alcim">Craziest story</span>
    </div>
`

const bbnev = 'Buczkó Balázs'
const bbszoveg = `
    <div id="content">
        <span id="cim">Buczkó Balázs</span>
        <span id="alcim">Education</span>
        <span id="szoveg">Budapesti Közgazdaságtudományi Egyetem</span>
        <span id="alcim">Working Field</span>
        <span id="szoveg">Flextronics - Tervezés/Belső vevői kapcsolattartás</span>
        <span id="szoveg">Siemens Zrt. - Beszerzés (Operatív és Stratégiai)</span>
        <span id="szoveg">Ganz - Stratégiai beszerzés</span>
        <span id="alcim">Motivation</span>
        <span id="szoveg">Belekezdeni valamibe, ami teljesn más, mint a gépgyártás iparág.</span>
        <span id="alcim">One Special</span>
        <span id="szoveg">Elvégeztem egy koktéltanfolyamot.</span>
        <span id="alcim">Craziest story</span>
        <span id="szoveg">Kislányom (Bori) cseperedését megélni.</span>  
    </div>
`

const kbnev = 'Kovács Bence'
const kbszoveg = `
    <div id="content">
        <span id="cim">Kovács Bence</span>
        <span id="alcim">Education</span>
        <span id="szoveg">Soproni Egyetem közgáz</span>
        <span id="alcim">Working Field</span>
        <span id="szoveg">Pannon Business Network - Junior projektmenedzser</span>
        <span id="szoveg">Egyéni vállalkozás - Weboldal készítés, Grafikai tervezés, Hirdetéskezelés</span>
        <span id="alcim">Motivation</span>
        <span id="szoveg"></span>
        <span id="alcim">3 thins about me</span>
        <span id="szoveg"></span>
        <span id="alcim">3 celebrities to: have sex with, marry, or punch - (don't tell which is which)</span>
    </div>
`

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

function masikcsapat() {
    const fo = document.getElementById("main")
    fo.innerHTML = ""
    fo.insertAdjacentHTML("beforeend", masikcsapatszoveg)
}

function bemutatkozo(szoveg) {
    const fo = document.getElementById("main")
    fo.innerHTML = ""
    fo.insertAdjacentHTML("beforeend", szoveg)
}

function km() {
    bemutatkozo(kmszoveg)
}

function mr() {
    bemutatkozo(mrszoveg)
}

function bb() {
    bemutatkozo(bbszoveg)
}

function kb() {
    bemutatkozo(kbszoveg)
}

var betuszam = 0;

function betu() {
    if (betuszam == 0) {
        var betutipus = document.getElementById("main")
        var betutipus2 = document.getElementById("menu")
        betutipus.style.fontFamily = "Montserrat"
        betutipus.style.color = "magenta"
        betutipus2.style.fontFamily = "Montserrat"
        betutipus2.style.color = "magenta"
        betuszam++
    }
    else {
        var betutipus = document.getElementById("main")
        var betutipus2 = document.getElementById("menu")
        betutipus.style.fontFamily = "Metal Mania"
        betutipus.style.color = "black"
        betutipus2.style.fontFamily = "Metal Mania"
        betutipus2.style.color = "white"
        betuszam--
    }
}