/*Button that switches between site thremes. Potential updates: Options, better interface (overall overhaul)*/
const codeSwitcher = document.querySelector(".codeswitcher")
const head = document.head
console.log(localStorage.getItem('currentThemeStorage'))

function codeSwitch() {
    if (localStorage.getItem('currentThemeStorage') != 'cas') {
        document.querySelector(".cssLink").setAttribute("href","css/crewPro.css")
        document.querySelector(".profileImage").setAttribute("src","images/profile2.jpg")
        document.querySelector(".header").innerHTML = '<h1>Crew Bittner</h1>'
        document.querySelector(".introParagraph").innerHTML = 'Crew Bittner is a writer and analyst working in San Francisco. He got his degree in mathematics from UC Berkeley (with a minor in journalism), and built this website to improve his SEO and build an online portfolio. This website includes an archive of arts writing and a collection of data science projects that he has worked on in the past.'
        localStorage.setItem('currentThemeStorage','pro')
    } else {
        document.querySelector(".cssLink").setAttribute("href","css/crew.css")
        document.querySelector(".profileImage").setAttribute("src","images/profile.jpg")
        document.querySelector(".header").innerHTML = '<h1>Crew</h1>'
        document.querySelector(".introParagraph").innerHTML =  'This is the homepage of Crew Bittner\'s website. On the left, you can view a dated index of my work, the projects I\'ve worked on, and an online copy of my resume. On the right, you can read my blog, visit the Mountain, or listen to my music. You can contact me at the information below. Thanks for coming by – enjoy your stay!'
        localStorage.setItem('currentThemeStorage','cas')
    }  
}

function initialization() {
    if (localStorage.getItem('currentThemeStorage') == 'pro') {
        document.querySelector(".cssLink").setAttribute("href","css/crewPro.css")
        document.querySelector(".profileImage").setAttribute("src","images/profile2.jpg")
        document.querySelector(".header").innerHTML = '<h1>Crew Bittner</h1>'
        document.querySelector(".introParagraph").innerHTML = 'Crew Bittner is a writer and analyst working in San Francisco. He got his degree in mathematics from UC Berkeley (with a minor in journalism), and built this website to improve his SEO and build an online portfolio. This website includes an archive of arts writing and a collection of data science projects that he has worked on in the past.'
    }
    else {
        console.log("This sheet is using the Casual setting.")
        document.querySelector(".cssLink").setAttribute("href","css/crew.css")
        document.querySelector(".profileImage").setAttribute("src","images/profile.jpg")
        document.querySelector(".header").innerHTML = '<h1>Crew</h1>'
        document.querySelector(".introParagraph").innerHTML =  'This is the homepage of Crew Bittner\'s website. On the left, you can view a dated index of my work, the projects I\'ve worked on, and an online copy of my resume. On the right, you can read my blog, visit the Mountain, or listen to my music. You can contact me at the information below. Thanks for coming by – enjoy your stay!'
    }
}

initialization()

codeSwitcher.addEventListener("click", codeSwitch)