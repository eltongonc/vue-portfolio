module.exports = [
    {
        id: 1,
        title: "MediaLab",
        urlTitle: "medialab",
        date: {
            day: "07",
            month: "feb",
            year: "2017",
            full: "2017-02-07T16:00",
        },
        image_small: "/static/medialab-small.jpg",
        image: "/static/medialab.jpg",
		image_list: [
			{title: "Homepage highfi design", link: "/static/medialab/home.jpg"},
			{title: "Categorie highfi design", link: "/static/medialab/categorie.jpg"},
			{title: "Detail highfi design", link: "/static/medialab/devices.jpg"},
			{title: "FAQ highfi design", link: "/static/medialab/faq.jpg"}
		],
		summary: "Medialab is a support/faq page build for Medialab.co",
        content: "<h3>About Medialab</h3><p>Medialab is an online sharing platform started in Amsterdam in 2007. They focus on storing, transferring an sharing media online. Medialab has a support page, which is a subdomain of medialab.co. People can ask and view frequently asked questions on this page.</p><h3>The assignment</h3><p>The way that the page used to look didn’t represent Medialab: different colors and a different layout. My assignment was to rebuild the current website to match the company identity.</p><h3>Workflow</h3><ol>The assignment was split into four parts:<li>Observing the old site</li><li>Doing research on design patterns that could help improve the website</li><li>Implement the found research</li><li>Present to client</li></ol>",
		client: "Medialab.co",
        author: "Elton Gonçalves Gomes",
        externalLink: "http://support.medialab.co/",
        code_link: "",
        link: function(){return "/work/"+this.title.toLowerCase().replace(" ","-");}
    },
    {
        id: 2,
        title: "Daskas",
        urlTitle: "daskas",
        date: {
            day: "07",
            month: "feb",
            year: "2017",
            full: "2017-02-07T16:00",
        },
        image_small: "/static/daskas-small.jpg",
        image: "/static/daskas.jpg",
		image_list: [
			{title: "Concept 1: Skeuomorphism homepage", link: "/static/daskas/home.jpg"},
			{title: "Concept 2: Gift generator", link: "/static/daskas/gift-generator.jpg"}
		],
		video: "<iframe src='https://player.vimeo.com/video/153789377' width='1080' height='720' frameborder='0' webkitallowfullscreen='' mozallowfullscreen='' allowfullscreen=''></iframe>",
		summary: "Daskas is a webshop build as a redesign",
        content: "<h3>About Daskas</h3><p>Daskas started as a small glass workshop in 1990 By Rob and Eliane Dashorst in Amsterdam, The Netherlands. As Daskas aged, it become more known  and has grown to a unique/ but well known giftshop at the Haarlemmerstraat in Amsterdam.</p><h3>The assignment</h3><blockquote>“Create a new website that will improve the klandizie of a physical shop.”</blockquote><p>The clients of Daskas weren’t intrigued enough to purchase items on the webshop. They used the site only to view the opening hours.</p><h3>About the project</h3><p>For this project I worked together with a team of two skilled designers and one great content creator, to rebuild the old Daskas website. This was a project of five months and during this project we did the following tasks:</p><ul><li>Doing research on improvement for the site</li><li>Meetings with the client to discuss our progress</li><li>Meeting with an expert for guidance</li><li>Coding and styling</li><li>User testing</li></ul><p>We used OpenCart as a backend. OpenCart is an ecommerce platform design for webshops, it helped us give the client an overview of the purchases and order history.</p><h3>My Role</h3><p>During this project I took the role as the Backend and Frontend developer. I was mainly responsible for the code that was delivered, but I also played a huge parted in the concepting and testing of the project.</p><h3>Result</h3><ul>Daskas ended up consisting of  two main concepts:<li>Skeumorpism: Making a visual representation of the physical shop. We tried to recreate the way products are placed in the shop.</li><li>Gift generator: The site can generate a gift based on user input. This would help a costumer buy a gift for someone.</li></ul>",
		client: "Rob Dashorst",
        author: "Elton Gonçalves Gomes",
        externalLink: "http://www.daskas.nl/",
        code_link: "",
        link: function(){return "/work/"+this.title.toLowerCase().replace(" ","-");}
    },
    {
        id: 3,
        title: "Funda serverside",
        urlTitle: "funda-serverside",
        date: {
            day: "07",
            month: "feb",
            year: "2017",
            full: "2017-02-07T16:00",
        },
        image_small: "https://raw.githubusercontent.com/eltongonc/funda_serverside/master/screenshots/funda.png",
        image: "https://raw.githubusercontent.com/eltongonc/funda_serverside/master/screenshots/funda.png",
		image_list: [
		"https://raw.githubusercontent.com/eltongonc/funda_serverside/master/screenshots/funda.png"],
		summary: "Funda serverside is a site optimatation audit done for Funda.nl",
        content: `Funda serverside is an serverside application that runs on Node.js + Express. This project is build to illustrate a few performance patterns to optimize the speed of Funda. Funda serverside is based on the existing <a href="www.funda.nl">Funda site</a>.
		<h3>What does it do</h3>
		<p>Funda serverside allows users to search houses and get information about houses in the Netherlands are registered on Funda.</p>
		<p>A series of tests were done with the Google Chromes internet connection throttling. These internet speed-tests emulate how people with a slow connection experience a website. The connections exist of GPRS, Good 2G, Good 3G, Regular 4G and Wifi with disabled cache.</p>
		<h3>Results</h3>
		<p>The site became much faster after applying the optimatation. Rendering the files on the server will give it a boost in performance. Loading the page async helps the DOM content te be loaded much faster. I didn't succeed in making the images smaller, but I managed to score better for mobile.</p>
		<p>There isn't any live version but the code can be viewed on github`,
        author: "Elton Gonçalves Gomes",
		client: "No client",
        externalLink: "https://github.com/eltongonc/funda_serverside",
        code_link: "https://github.com/eltongonc/funda_serverside",
        link: function(){return "/work/"+this.title.toLowerCase().replace(" ","-");}
    },
    {
        id: 3,
        title: "Soundcloud explorer",
        urlTitle: "soundcloud-explorer",
        date: {
            day: "07",
            month: "feb",
            year: "2017",
            full: "2017-02-07T16:00",
        },
		image_small: "/static/soundcloud_exp-small.jpg",
        image: "/static/soundcloud_exp.jpg",
		image_list: [
			{title: "Soundcloud explorer homepage", link: "/static/soundcloud_exp-small.jpg"},
			{title: "Flowchart of the app", link: "https://camo.githubusercontent.com/6b4f472972d7c7e50bd9fefd20e834791a8f7c6b/68747470733a2f2f656c746f6e676f6e632e6769746875622e696f2f7765625f6170705f66726f6d5f736372617463682f7765656b332f696d672f666c6f7763686172742e706e67"}
		],
		summary: "Soundcloud explorer is a music search Single Page application (SPA) completely build with native Javascript. ",
        content: `It uses the Soundcloud API to search songs and plays it on the page. It was build as a three week project during a school Minor web-development. The main focus was to learn Object Oriented Programming Javascript..
		<h3>How does it work</h3>
		<p>This is a basic SPA that uses Javascript to get data from an API and navigate through the routes.</p>
		<p>This was a three week project. It still has a lot that can be done. There are still some bugs to be fixed</p>
		<h3>Features</h3>
		<ul>
			<li>Get a list of songs based on a search query.</li>
			<li>Listen to a song.</li>
			<li>Get information about a song.</li>
			<li>Login page that saves the username in the database (no database).</li>
			<li>The app checks existing routes and sends alerts if it doesn't exist.</li>
			<li>Pretty urls</li>
		</ul>
		`,
        author: "Elton Gonçalves Gomes",
		client: "No client",
        externalLink: "http://eltongoncalves.nl/minor",
        code_link: "https://github.com/eltongonc/web_app_from_scratch",
        link: function(){return "/work/"+this.title.toLowerCase().replace(" ","-");}
    },
];
