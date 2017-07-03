module.exports = [
    {
        id: 1,
        title: "MediaLab",
        date: {
            day: "07",
            month: "feb",
            year: "2017",
            full: "2017-02-07T16:00",
        },
        image: "http://eltongoncalves.nl/werk/medialab/background.png",
        content: "<p>Voor MediaLab heb ik een redesign gemaakt voor hun huidige supportpagina. Deze pagina heb ik ontworpen en gecodeerd. De supportpagina is een aparte sub-domein die alle vragen van de bezoekers beantwoordt. De supportpagina was toe aan nieuwe uiterlijk. Het pastte niet bij de huisstijl van MediaLab en had een standaard look and feel.</p><p>Opdracht Mijn taak was het observeren van de huidige website, onderzoek doen naar design patterns die de website zou kunnen verbeteren, implementeren van de gevonden design patterns en tot slot presenteren aan MediaLab.</p>",
        summary: "Voor MediaLab heb ik een redesign gemaakt voor hun huidige supportpagina.",
        author: "Elton Gonçalves Gomes",
        externalLink: "http://support.medialab.co/",
        link: function(){return "/work/"+this.title.toLowerCase().replace(" ","-");}
    },
    {
        id: 2,
        title: "Daskas",
        date: {
            day: "07",
            month: "feb",
            year: "2017",
            full: "2017-02-07T16:00",
        },
        image: "http://eltongoncalves.nl/werk/daskas/daskas-thumb.jpg",
        content: "<p>In een groep van vier heb ik mogen werken aan een webwinkel voor Daskas. Tijdens dit project heb ik mij bezig gehouden met de frontend en backend kant van de website. Mijn team en ik hebben gebruik gemaakt van OpenCart.</p><p>Voor dit project zijn wij op zoek gegaan naar een winkel in Amsterdam die wij graag zouden willen helpen bij het verbeteren van hun webshop. We maken voor het bedrijf een nieuwe website die volgens ons de klandizie van de winkel op een positieve manier zal bevorderen. De gebruikers van de Daskas website zijn niet geïntrigeerd genoeg om op de website te blijven. Ze doen weinig tot geen aankopen omdat de site te onoverzichtelijk is en niet aantrekkelijk oogt.</p><h2>Eindresultaat</h2><p>De website heeft twee hoofdconcepten:</p><h3>Concept 1</h3><p>Skeuomorphism: We maken gebruik van skeuomorfism, dit houdt in dat de webshop er uit ziet als een vitrine kast in de winkel, of planken met spullen er op. Dit geeft een beleving alsof je echt een beetje in de winkel bent. Dit geeft de sfeer van de winkel weer waardoor het sneller vertrouwd zal aanvoelen. Ieder artikel staat op een plank en stelt een categorie voor waarmee je kan navigeren naar die categorie, met leuke animaties natuurlijk!</p><h3>Concept 2</h3><p>Cadeau Generator: Het helpen bij de keuzes van cadeau’s is ook iets waar Daskas mee kan uitblinken. Voornamelijk uit het doelgroep onderzoek is gebleken dat de gebruikers vaak niet weten wat ze moeten/ willen kopen voor een ander en daardoor vaak doelloos on- en offline zoeken naar een leuk cadeau. Gebruikers vullen de cadeau generator in en krijgen een passend cadeau met een persoonlijk gegenereerd verhaal. Eind februari gaat de site officieel online!</p>",
        summary: "In een groep van vier heb ik mogen werken aan een webwinkel voor Daskas. ",
        author: "Elton Gonçalves Gomes",
        externalLink: "http://www.daskas.nl/",
        link: function(){return "/work/"+this.title.toLowerCase().replace(" ","-");}
    },
    {
        id: 3,
        title: "Funda serverside",
        date: {
            day: "07",
            month: "feb",
            year: "2017",
            full: "2017-02-07T16:00",
        },
        image: "https://raw.githubusercontent.com/eltongonc/funda_serverside/master/screenshots/funda.png",
        content: `Funda serverside is an serverside application that runs on Node.js + Express. This project is build to illustrate a few performance patterns to optimize the speed of Funda. Funda serverside is based on the existing <a href="www.funda.nl">Funda site</a>.
		<h3>What does it do</h3>
		<p>Funda serverside allows users to search houses and get information about houses in the Netherlands are registered on Funda.</p>
		<p>A series of tests were done with the Google Chromes internet connection throttling. These internet speed-tests emulate how people with a slow connection experience a website. The connections exist of GPRS, Good 2G, Good 3G, Regular 4G and Wifi with disabled cache.</p>
		<h3>Results</h3>
		<p>The site became much faster after applying the optimatation. Rendering the files on the server will give it a boost in performance. Loading the page async helps the DOM content te be loaded much faster. I didn't succeed in making the images smaller, but I managed to score better for mobile.</p>`,
        summary: "In een groep van vier heb ik mogen werken aan een webwinkel voor Daskas.",
        author: "Elton Gonçalves Gomes",
        externalLink: "https://github.com/eltongonc/funda_serverside",
        link: function(){return "/work/"+this.title.toLowerCase().replace(" ","-");}
    },
];
