module.exports = [
    {
        title: "MediaLab",
        urlTitle: "medialab",
        image_small: "/static/medialab/medialab-small.jpg",
        image: "/static/medialab/medialab.jpg",
        image_list: [
            {
                title: "Homepage highfi design",
                link: "/static/medialab/home.jpg"
            },
            {
                title: "Categorie highfi design",
                link: "/static/medialab/categorie.jpg"
            },
            {
                title: "Detail highfi design",
                link: "/static/medialab/devices.jpg"
            },
            { title: "FAQ highfi design", link: "/static/medialab/faq.jpg" }
        ],
        summary:
            "Medialab is a support/FAQ page build for Medialab.co. This website is built with Wordpress and gives the owner the ability to manage the website's content",
        content: `
        <h3>About Medialab</h3>
        <p>Medialab is an online sharing platform started in Amsterdam 2007. They focus on storing, transferring a sharing media online. The support page of Medialab allows people to contact Medialab or view frequently asked questions. </p>
        <h3>The assignment</h3>
        <p>The old design of the site didn’t represent the look-and-feel of Medialab. It had different colors and layout than the corporate website. My assignment was to rebuild the current website to match the identity of the company. </p>
        <h3>Workflow</h3>
        <p>The assignment was split into four parts:</p>
        <ol>
            <li>Observing the old site</li>
            <li>Doing research on design patterns that could help improve the website</li>
            <li>Implement the found research</li>
            <li>Present to client</li>
        </ol>`,
        client: "Medialab.co",
        author: "Elton Gonçalves Gomes",
        externalLink: "http://support.medialab.co/",
        code_link: "",
        tags: ["code", "visual"]
    },
    {
        title: "Funda serverside",
        urlTitle: "funda-serverside",
        image_small:
            "https://raw.githubusercontent.com/eltongonc/funda_serverside/master/screenshots/funda.png",
        image:
            "https://raw.githubusercontent.com/eltongonc/funda_serverside/master/screenshots/funda.png",
        image_list: [
            "https://raw.githubusercontent.com/eltongonc/funda_serverside/master/screenshots/funda.png"
        ],
        summary:
            "Funda server-side is a site optimization audit done for Funda.nl. Series of test were done to illustrate how the current site could be optimized",
        content: `
        <h3>About Funda server-side</h3>
        Funda server-side is an server-side application that runs on Node.js + Express. This project was built to illustrate a few performance patterns that could optimize the speed of the current Funda website. Funda server-side is based on the existing <a href="www.funda.nl">Funda site</a>.

		<h3>What does it do</h3>
		<p>Funda server-side allows users to search and get information on houses in the Netherlands that are registered on Funda. </p>
		<p>A series of tests were done with the Google Chrome internet connection throttling. This Google Chrome tool is a great way to emulate how people with slow connection experience a website. The connections on which the tests were done exist of GPRS, Good 2G, Good 3G, Regular 4G and Wi-Fi with disabled cache. </p>

        <h3>Results</h3>
		<p>The site became much faster after applying optimization. </p>
        <ul>
            <li>Rendering files on the server will give the website a boost in performance. </li>
            <li>Loading page a-sync helps the DOM content load much faster. </li>
            <li>I didn't succeed on making the images smaller, but I did manage to get a higher score on Google's <a href="https://developers.google.com/speed/pagespeed/insights/?hl=nl">PageSpeed insights</a> for mobile. </li>
		<p>There isn't any live version but the code can be viewed on GitHub. </p>`,
        author: "Elton Gonçalves Gomes",
        client: "Free project",
        colaborators: "",
        externalLink: "https://github.com/eltongonc/funda_serverside",
        code_link: "https://github.com/eltongonc/funda_serverside",
        tags: ["code"]
    },
    {
        title: "Soundcloud explorer",
        urlTitle: "soundcloud-explorer",
        image_small: "/static/soundcloud_explorer/soundcloud_exp-small.jpg",
        image: "/static/soundcloud_explorer/soundcloud_exp.jpg",
        image_list: [
            {
                title: "Soundcloud explorer homepage",
                link: "/static/soundcloud_explorer/soundcloud_exp-small.jpg"
            },
            {
                title: "Flowchart of the app",
                link:
                    "https://camo.githubusercontent.com/6b4f472972d7c7e50bd9fefd20e834791a8f7c6b/68747470733a2f2f656c746f6e676f6e632e6769746875622e696f2f7765625f6170705f66726f6d5f736372617463682f7765656b332f696d672f666c6f7763686172742e706e67"
            }
        ],
        summary:
            "Soundcloud explorer is a music exploration website build with HTML, CSS and JavaScript. It allows the user to search and play songs that are available on Soundcloud",
        content: `This website uses the Soundcloud API to search and play songs directly on the page. Soundcloud explorer was built as a three-week project during a school assignment. The main focus was to learn Object Oriented Programming JavaScript.
		<h3>How does it work</h3>
		<p>This is a basic Single page application that uses JavaScript to get data from an API and navigate through the routes. </p>
		<p>This was a three-week project and is still a little bit buggy. </p>
		<h3>Features</h3>
		<ul>
			<li>Get a list of songs based on a search query.</li>
			<li>Play a song.</li>
			<li>Get information about a song.</li>
			<li>Login page (no actual authentication yet)</li>
			<li>The app has a router that checks if a route exists and sends a corresponding message if it doesn't.</li>
			<li>Pretty urls</li>
		</ul>
		`,
        author: "Elton Gonçalves Gomes",
        client: "Free project",
        externalLink: "http://eltongoncalves.nl/minor",
        code_link: "https://github.com/eltongonc/web_app_from_scratch",
        tags: ["code"]
    },
    {
        title: "Zoku inspire",
        urlTitle: "zoku-inspire",
        image_small: "/static/zoku/zoku-compressed1.jpg",
        image: "/static/zoku/zoku.jpg",
        image_list: [
            { title: "Join workshop page", link: "/static/zoku/attend.png" },
            {
                title: "Big screen workshop  overview",
                link: "/static/zoku/big-screen.png"
            },
            {
                title: "Big screen workshop datail",
                link: "/static/zoku/workshop.png"
            },
            {
                title: "Mobile workshop  overview",
                link: "/static/zoku/mobile-wall.png"
            }
        ],
        summary:
            "Zoku Inspire is a prototype that illustrate the concept of aiding visitors of the Zoku hotel to a social connection in Amsterdam. Hotel guests can use this app to host and attend workshops.",
        content: `
        <h3>About Zoku</h3>
		<p>Hotel Zoku is a relative new concept in the hotel industry. Their goal is to bring people together under one roof. It's not just a hotel, it's a place where people can share knowledge, ideas and get to know inspiring people and companies. </p>

		<h3>Concept</h3>
		<p>Zoku Inspire is a way to familiarize the guests of the Zoku hotel with the city. By sharing knowledge, guests will meet new people with common interest. </p>

        <h3>How does it work</h3>
		<p>A visitor of the Zoku hotel can use his/her mobile phone to create a workshop and shared their expertise. This workshop will then be displayed on a bigger screen, at a central point within the hotel lobby. </p>
		`,

        author: "Elton Gonçalves Gomes",
        client: "Hotel Zoku",
        externalLink: "https://eltongonc.github.io/zoku/",
        code_link: "https://github.com/eltongonc/zoku",
        tags: ["code", "visual"]
    },
    {
        title: "Drum kit",
        urlTitle: "drum-kit",
        image_small: "/static/drumkit/drum-kit-small.jpg",
        image: "/static/drumkit/drum-kit.jpg",
        // Image_list: [
        // 	{title: "Soundcloud explorer homepage", link: "/static/soundcloud_exp-small.jpg"},
        // 	{title: "Flowchart of the app", link: "https://camo.githubusercontent.com/6b4f472972d7c7e50bd9fefd20e834791a8f7c6b/68747470733a2f2f656c746f6e676f6e632e6769746875622e696f2f7765625f6170705f66726f6d5f736372617463682f7765656b332f696d672f666c6f7763686172742e706e67"}
        // ],
        summary:
            "Drum kit is an interactive soundboard. This project was build to illustrate the capabilities of a web browser. At it's minimal the website requires basic HTML and uses browser technology to add layers of enhancements.",
        content: `
        <h3>About the project</h3>
		<p>This project is a sequencer that allows users to make sounds with 8 different instruments. The app allows users to interact by using their keyboard keys or mouse.</p>
		`,
        author: "Elton Gonçalves Gomes",
        client: "Free project",
        externalLink: "https://eltongonc.github.io/drum_kit/public/build",
        code_link: "https://github.com/eltongonc/drum-kit",
        tags: ["code"]
    },
    {
        title: "Daskas",
        urlTitle: "daskas",
        image_small: "/static/daskas/daskas-small.jpg",
        image: "/static/daskas/daskas.jpg",
        image_list: [
            {
                title: "Concept 1: Skeuomorphism homepage",
                link: "/static/daskas/home.jpg"
            },
            {
                title: "Concept 2: Gift generator",
                link: "/static/daskas/gift-generator.jpg"
            }
        ],
        video: "https://player.vimeo.com/video/153789377",
        summary:
            "Daskas.nl is a re-designed webshop build for Daskas. With skuemorphism we tried to make a visual representation of the physical shop.",
        content: `
        <h3>About Daskas</h3>
        <p>Daskas started as a small glass workshop in 1990 By Rob and Eliane Dashorst in Amsterdam, The Netherlands. As Daskas aged, it became more known and has grown to a unique but well known giftshop at the Haarlemmerstraat in Amsterdam.</p>

        <h3>The assignment</h3>
        <blockquote>Create a new website that will improve the klandizie of a physical shop.</blockquote>
        <p>The costumers of Daskas weren’t intrigued enough to purchase items on the webshop. They used the site as a way to view the opening hours.</p>

        <h3>About the project</h3>
        <p>For this project I worked together with a team of two skilled designers and one great content creator, to rebuild the old Daskas website. This was a project of five months and during this project we did the following:</p>
        <ul>
            <li>Research on improvements for the site</li>
            <li>Meetings with the client to discuss our progress</li>
            <li>Meeting with an expert for guidance</li>
            <li>Writing code and style guides</li>
            <li>User testing</li>
        </ul>

        <p>We used OpenCart as a backend platform. OpenCart is an ecommerce platform designed for webshops, it helped us give the client an overview of the purchases and order history.</p>

        <h3>My Role</h3>
        <p>During this project I took the role as the Backend and Frontend developer. I was mainly responsible for the code that was delivered, but I also played a huge part in the concepting and testing of the project.</p>

        <h3>Result</h3>
        <p>Daskas resolved into two main concepts:</p>
        <ul>
            <li>Skeumorpism: Making a visual representation of the physical shop. We tried to recreate the way products are placed in the shop.</li>
            <li>Gift generator: The site can generate a gift based on user input. This would help a costumer buy a gift for someone.</li>
        </ul>

        <h3>Colaborators</h3>
        <ul>
            <li>Dale Schnieders</li>
            <li>Evita Zethof</li>
            <li>Naomi Roos</li>
        </ul>`,
        client: "Rob Dashorst",
        author: "Elton Gonçalves Gomes",
        externalLink: "http://www.daskas.nl/",
        code_link: "",
        tags: ["code", "visual"]
    }
];
