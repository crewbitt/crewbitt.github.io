/*Button that switches between site thremes. Potential updates: Options, better interface (overall overhaul)*/

const codeSwitcher = document.querySelector(".codeswitcher")
const head = document.head
console.log(localStorage.getItem('currentThemeStorage'))

function codeSwitch() {
    if (localStorage.getItem('currentThemeStorage') == 'cas') {
        document.querySelector(".cssLink").setAttribute("href","css/crewPro.css")
        document.querySelector(".header").innerHTML = '<h1>Crew Bittner</h1>'
        localStorage.setItem('currentThemeStorage','pro')
    } else {
        document.querySelector(".cssLink").setAttribute("href","css/crew.css")
        document.querySelector(".header").innerHTML = '<h1>Crew</h1>'
        localStorage.setItem('currentThemeStorage','cas')
    }   
}

function initialization() {
    if (localStorage.getItem('currentThemeStorage') == 'pro') {
        console.log("This sheet is using the Pro setting.")
        document.querySelector(".cssLink").setAttribute("href","css/crewPro.css")
        document.querySelector(".header").innerHTML = '<h1>Crew Bittner</h1>'
    }
    else {
        console.log("This sheet is using the Casual setting.")
        document.querySelector(".cssLink").setAttribute("href","css/crew.css")
        document.querySelector(".header").innerHTML = '<h1>Crew</h1>'
    }
}

initialization()
codeSwitcher.addEventListener("click", codeSwitch)

