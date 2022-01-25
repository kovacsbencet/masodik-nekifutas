function prezi() {
    const szoveg = document.querySelector("#main")
    szoveg.removeChild(szoveg.childNodes[0])
    szoveg.insertAdjacentHTML("beforeend",`<p><button id="visszagomb"><-</button>prezipreziprezi </p>`)

}