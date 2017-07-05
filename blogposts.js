module.exports = [
	{
		id: 1,
		title: "UX is Frontend Development? ",
		date: {
			day: "07",
			month: "feb",
			year: "2017",
			full: "2017-02-07T16:00",
		},
		image: "/img/blog/1.JPG",
		lead: "<p class='lead'>User experience(UX) is the heart and soul of any site. It determines whether you hit or miss your audience. But a good UX is not easily achieved, especially if you’re just making a design. But why should a frontender learn UX, why not hire a UX-designer?</p>",
		content: `<p class='lead'>User experience(UX) is the heart and soul of any site. It determines whether you hit or miss your audience. But a good UX is not easily achieved, especially if you’re just making a design. But why should a frontender learn UX, why not hire a UX-designer?</p>
		<h2>Introduction</h2>
		<p>Stephen Hay is senior UX Design Lead at Catawiki. He is known of his book Responsive design workflow. He ended up with Responsive webdesign out of frustration of CSS. He mentioned ways to perfect your web design to be responsive during his talk about responsive web design he mentioned.</p>

		<h2>Why learn UX? I’m frontender!</h2>
		<p>As a frontend developer you have responsibility to deliver a beautiful product. Often you will receive a design for desktop and you are expected to fill in the blank. In some other cases you will receive designs that won’t work in older or even current browsers.</p>

		<p>Imagine the following scenario: The visual designer draws this amazing illustration of what he thinks is perfect for the client. He then sells his design for a good amount of money. The client is happy with the design and want it done. The client contacts a frontend developer and discovered that most of the illustrations will not look the same due to the many browsers available</p>

		<h2>Six ways to optimize your UX </h2>
		<h3>Experiment with combinations of colors.</h3>
		<p>Colors can guide your users  through your site
		When you find a desirable result save it -> create rules on how to use it -> document those rules so everybody in your team can use it.</p>

		<h3>Don’t follow rules of others blindly.</h3>
		<p>See what context your project is in and make decisions based on that.<p>

		<h3>Communicate with your team from the beginning.</h3>
		<p>Front-enders have the knowledge on what is possible, visual artists have the vision of what is good for the project.</p>

		<h3>A good responsive website comes from a well-thought design.</h3>
		<p>Start with the smallest screen you’re aiming for and work your way to bigger screens.</p>

		<h3>Test everything.</h3>
		<p>With so many devices on the market its good to have tested your site. While it’s impossible to test all devices you should at least test the most common screens. As mentioned on the previous tip, if you have a responsive webdesign you will cover about 80% of all screens.</p>

		<h3>Dare to be creative.</h3>
		<p>Put your digital equipment aside, grab a pen and paper and start doodling around for at least 5min. “Creativity comes after the 20 first sketches”
		It’s important to not use any erasable tool, why? Well if there is a possibility to erase your mistakes you will do so, thus limiting your creativity by only “perfect” sketches. A mistake on one sketch can be the missing link to your revolutionary idea.</p>
		`,
		author: "Elton Gonçalves Gomes",
		link: function(){return "/blog/"+this.id;}
	},
	{
		id: 2,
		title: "Sketchnoting",
		date: {
			day: "14",
			month: "feb",
			year: "2017",
			full: "2017-02-14T16:00",
		},

		image: "/img/blog/2.JPG",
		lead: "<p class='lead'>Sketchnoting  is a great way to take notes while paying attention during a lecture or meeting. A mixture of sketches and text will ensure you take the most important notes.</p>",
		content: `
		<p class='lead'>Sketchnoting  is a great way to take notes while paying attention during a lecture or meeting. A mixture of sketches and text will ensure you take the most important notes.</p>

		<h2>Introduction</h2>
		<p>Justus Sturkenboom is a teacher at Hogeschool van Amsterdam(HvA). He gave a talk about sketchnoting and tips on how to improve.</p>

		<h2>Hand-lettering</h2>
		<p>By simply switching font-size, font-weight or font-style, you will give an indication of importance. Thickening a letter  will make it stand out from the rest. Go through a letter multiple times to make it bold.</p>

		<p>If you need to take a note but don’t have time to write everything down, just go through some outline. Make basic shapes of letters you can remember, you don’t need to fully write the letters. Complete the words later when you have time.</p>

		<h2>Basic shapes</h2>
		<p>Keep the shapes you draw simple. No need to draw a pie in detail, if you can draw a piece and with a candle.</p>

		<h2>Use arrows</h2>
		<p>By using arrow you can indicate what order your notes should be read.</p>

		<h2>Gear up</h2>
		<ul>Using the right equipment can help taking the best sketches. A minimal toolset can consist of:
		<li>Black, red & green fineliner (Steadler 0.5mm).</li>
		<li>Grey & orange highlighter (CG1 Letraset Promarker).</li>
		<li>Black marker (Sharpie permanent marker).</li>
		</ul>

		<h2>Four steps to perfect sketchnoting</h2>
		<ol>
		<li><strong>Plan</strong> Sometimes you already know what subjects the talk will be about. Planning ahead will come in handy. In example: draw a layout of sections. Each section is a placeholder for a part of the talk.</li>
		<li><strong>Capture</strong> Pay attention to what is being said. Draw simple shapes and write basic things of the highlights. Make sure to write/sketch in a way you will understand later.</li>
		<li><strong>Refine</strong> Go through your notes and make sure everything is correct. You may even want to redraw a digital copy in Illustrator or another drawing program.</li>
		<li><strong>Repeat</strong> Keep practicing this method and you will become great at sketchnoting.</li>
		</ol>

		<p>Practice to become pro at sketchnoting </p>
		`,
		author: "Elton Gonçalves Gomes",
		link: function(){return "/blog/"+this.id;}
	},
	{
		id: 3,
		title: "The browser bloats we are creating",
		date: {
			day: "28",
			month: "feb",
			year: "2017",
			full: "2017-02-28T16:00",
		},
		image: "/img/blog/3.JPG",
		lead: `<p class="lead"> Peter – Paul Koch is the founder of Fronteers. According to Quirksmode (an online platform for browser compatibility information)  Peter-Paul Koch has been a professional front-end engineer since 1998. He focused on HTML, CSS, JavaScript, and browser compatibility even when doing so was not yet fashionable.</p>`,
		content: `
		<p class="lead"> Peter – Paul Koch is the founder of Fronteers. According to Quirksmode (an online platform for browser compatibility information)  Peter-Paul Koch has been a professional front-end engineer since 1998. He focused on HTML, CSS, JavaScript, and browser compatibility even when doing so was not yet fashionable.</p>

		<h2>Why do these problem accure</h2>
		<h3>We want to emulate too much native apps.</h3>
		<p>At some point we noticed that native application could also run online. From this point out we started to build every app online. This came with pros and cons.</p>
		<ul>Pros:
		<li>No more computer storage required</li>
		<li>Al you needed was an internet connection and a decent device</li>
		</ul>
		<ul>
		Cons:
			<li>We wanted more control over the browser</li>
			<li>Not all browsers work the same</li>
			<li>On mobile browser you will have a click delay. Whenever you tap the screen, on a mobile device, it will trigger a touch event, which will check on the device where it was touched, then continues to the mobile browser to trigger a click event.</li>
		</ul>

		<h3>We want too many features in every browser.</h3>
		<p>Yes, we want to do anything and everything on the web. This means that the browser should do everything we want it to do. We sometimes use polyfills to force browsers to do what it doesn’t support.</p>

		<h3>We are lazy and rely on to many frameworks/library.</h3>
		<p>There is a Javascript framework/library for anything. A library like jQuery comes with a lot of functionalities you will never use. Extra unused code is not needed and should be removed. The chances are, you will use a bunch of libraries that do a specific task that could be easily written by yourself.</p>

		<h3>A lack of self-esteem.</h3>
		<p>Well, we want  to be taken seriously by developers who know a “real” programming language. We want to show them that Javascript is indeed a programming language and is capable of doing anything on the web. A web developer does not always get the credits they deserve.</p>

		<h3>Everybody can be a developer.</h3>
		<p>Nowadays anyone can be a web developer. No need for school, just open a youtube video and you will be taught how to build a webapp.</p>

		<h2>A few tips of PPK</h3>
		<ul>
			<li>“Understand tools, but understand browsers better”</li>
			<li>You should understand what new and old browser are capable of and design for that.</li>
			<li>Install different versions of browsers on your device and test on all of them.</li>
			<li>Do not repeat yourself.</li>
			<li>Use libraries only when needed, study them and try to use one per project</li>
		</ul>
		`,
		author: "Elton Gonçalves Gomes",
		link: function(){return "/blog/"+this.id;}
	},
	{
		id: 4,
		title: "Advanced Git Tips & Tricks",
		date: {
			day: "14",
			month: "Mar",
			year: "2017",
			full: "2017-03-14T16:00",
		},
		lead: `<h2>What is Git/Github</h2>
		<p>Github is the online (social?) platform that holds all your code and codes of others. You are not restricted on posting only code though.
		Git is the command-line interface that lets you manage your projects locally on your computer or online, this requires Github.</p>`,
		image: "/img/blog/4.JPG",
		content: `
		<h2>What is Git/Github</h2>
		<p>Github is the online (social?) platform that holds all your code and codes of others. You are not restricted on posting only code though.
		Git is the command-line interface that lets you manage your projects locally on your computer or online, this requires Github.</p>

		<ol>A basic usage would be:
			<li>Create a repository(what projects are called) online on github.com.</li>
			<li>Clone this repository with git.</li>
			<li>Make changes on your computer.</li>
			<li>Use git to save these changes and update your repo on github.</li>
			<li>Place issues on github.</li>
		</ol>

		<h2>Why should you use it</h2>
		<p>Because we won’t be sitting next to our colleagues working on one pc. We need some way to keeping track of who did what. Sending our code to our colleagues is not very productive. Here is where github comes to play. Github is very handy platform when it comes to working together. By using github you will automatically have a backup of your code online, so if your computer dies you can continue where you left off.</p>

		<h2>Basic Git commands</h2>
		<p>You don’t need to know everything to use Git. These are a few basic commands you should know when working with git:</p>

		<ul>
			<li><strong>Git init</strong>	Initialize the current folder as a git project.</li>
			<li><strong>Git add <filename> or .</strong>	After you made changes to files in your git project you can add a single file or all files to commit.</li>
			<li><strong>Git commit -m “message of what you did”</strong>	If files are added to the commit, use command to commit these changes.</li>
			<li><strong>Git push</strong>  (you will have to set a remote the first time you use this command. Your terminal will tell you what command to use)	If your git project is connected to <a href="github.com">Github</a>, you can use this command to push everything to your online repository</li>
			<li><strong>Git pull</strong>	Get the latest online repository version if it is newer than your local files.</li>
			<li><strong>Git checkout <branch name></strong>	Use this command to switch between branches.</li>
			<li><strong>Git checkout -b <branch name></strong>	Use this command to create a branch.</li>
			<li><strong>Git merge <branch name></strong>	To use this command you first need to go to a branch you want to merge on to (git checkout branch1, then use git merge branche2. All the changes from branche2 will go to branch 1. Conflicts may occur and need to be fixed before you can git push to update your online repository.</li>
		</ul>
		<p>Here is a <a href="https://www.git-tower.com/blog/git-cheat-sheet/">cheat sheet</a> of git commands </p>

		<h2>Golden rule</h2>
		<p>A rule of thumb when working with Git and Github is to make sure that your master branch is a stable version. All commits should be done on a branch, tested and merged later on to the master branch. Ideally you would want to make a branch per feature. This is called feature branching.</p>

		<h2>Contribute to open source</h2>
		<p>If you are using projects of others, consider contributing to a project by placing issues, making pull requests or donating to a project even though it is free to use software. The code are public so whenever you see an opportunity to make changes for the better, do so. Oh and also. You should  contribute instead of making a new copy. Less duplicates makes a bigger community!</p>

		<h2>You need licenses at some point</h2>
		<p>If you post code on Github you have the right to copywrite your code. You will need a license for it.  Choosing the right license can be tricky, but if you do your homework  you will have no problems later on.</p>
		<p>At <a href='https://choosealicense.com/'>choosealicense.com</a> you can get more information about choosing the right license for your projects.</p>

		<h2>Conclusion</h2>
		<p>Basically github is a diary for your code, it keeps track and lets you view the history of your code. You should create a github account right now if you haven’t got one.</p>
		`,
		author: "Elton Gonçalves Gomes",
		link: function(){return "/blog/"+this.id;}
	},
	{
		id: 5,
		title: "Accessibility",
		date: {
			day: "28",
			month: "feb",
			year: "2017",
			full: "2017-03-21T16:00",
		},
		image: "/img/blog/5.JPG",
		lead: `	<p class="lead">Most of the time we make amazing looking websites that are pretty much useless for those visually impaired. Bram Duvigneau is a blind developer and gives accessibility advices. He talked about how he experiences the web and how it should be.</p>`,
		content: `
		<p class="lead">Most of the time we make amazing looking websites that are pretty much useless for those visually impaired. Bram Duvigneau is a blind developer and gives accessibility advices. He talked about how he experiences the web and how it should be.</p>

		<h2>Tips for accessible sites</h2>
		<p>There is a thing called the accessibility tree, which is similar to the HTML DOM tree.  This accessibility tree renders the DOM tree in a specific order. It lets screen readers go through your site as if it was a book. This only happens if the HTML is well written.</p>

		<h3>Place a lan attribute to your html tag</h3>
		<p>The screen reader will recognize the text and adapt to it. I.e: If the content is Spanish and the language is set to Spanish, a Spanish voice will read the content or else an English voice will try to pronounce Spanish words.</p>

		<h3>H1 tag should contain the most important information about your page</h3>
		<p>Use the heading tags in the order 1 to 6. Never skip one heading tag.
		You can use multiple heading tags.</p>

		<h3>Use the nav tag or attribute role=”navigation”</h3>
		<p>Having a nav element in your page helps the screen readers navigate through the page. Note! that all links should have unique text explaining where it links to and should never be empty.</p>

		<h3>All input fields should be accessible.</h3>
		<p>If you write a checkbox without a label, the screen reader will read: “checkbox unchecked”. No context is provided so the user will not know what the checkbox is for.</p>

		<h3>Leave alt attribute empty if it’s not important</h3>
		<p>If you are using images on your site you could describe what’s on the image or leaving it empty if it does not add value to the overall user experience.</p>

		<h3>Aria-hidden</h3>
		<p>If you want some content to be ignored by screen readers, use the aria-hidden attribute <p>
		`,
		author: "Elton Gonçalves Gomes",
		link: function(){return "/blog/"+this.id;}
	},
	{
		id: 6,
		title: "Developers love Design",
		date: {
			day: "21",
			month: "Mar",
			year: "2017",
			full: "2017-03-21T16:00",
		},

		image: "/img/blog/6.JPG",
		lead: `<p class="lead">Most of the time we make amazing looking websites that are pretty much useless for those visually impaired. Bram Duvigneau is a blind developer and gives accessibility advices. He talked about how he experiences the web and how it should be.</p>`,
		content: `
		<p class="lead">Most of the time we make amazing looking websites that are pretty much useless for those visually impaired. Bram Duvigneau is a blind developer and gives accessibility advices. He talked about how he experiences the web and how it should be.</p>

		<h2>Tips for accessible sites</h2>
		<p>There is a thing called the accessibility tree, which is similar to the HTML DOM tree.  This accessibility tree renders the DOM tree in a specific order. It lets screen readers go through your site as if it was a book. This only happens if the HTML is well written.</p>

		<h3>Place a lan attribute to your html tag</h3>
		<p>The screen reader will recognize the text and adapt to it. I.e: If the content is Spanish and the language is set to Spanish, a Spanish voice will read the content or else an English voice will try to pronounce Spanish words.</p>

		<h3>H1 tag should contain the most important information about your page</h3>
		<p>Use the heading tags in the order 1 to 6. Never skip one heading tag.
		You can use multiple heading tags.</p>

		<h3>Use the nav tag or attribute role=”navigation”</h3>
		<p>Having a nav element in your page helps the screen readers navigate through the page. Note! that all links should have unique text explaining where it links to and should never be empty.</p>

		<h3>All input fields should be accessible.</h3>
		<p>If you write a checkbox without a label, the screen reader will read: “checkbox unchecked”. No context is provided so the user will not know what the checkbox is for.</p>

		<h3>Leave alt attribute empty if it’s not important</h3>
		<p>If you are using images on your site you could describe what’s on the image or leaving it empty if it does not add value to the overall user experience.</p>

		<h3>Aria-hidden</h3>
		<p>If you want some content to be ignored by screen readers, use the aria-hidden attribute <p>
		`,
		author: "Elton Gonçalves Gomes",
		link: function(){return "/blog/"+this.id;}
	},
	{
		id: 7,
		title: "Realtime web and GraphQL",
		date: {
			day: "14",
			month: "Apr",
			year: "2017",
			full: "2017-04-14T16:00",
		},
		image: "/img/blog/7.JPG",
		lead: `<p class="lead">Peter works at Lively and during his talk he spoke of a Case for startdashboard.nl. He went from a Drupal site to a Realtime Meteor.js app and here is why it was a great success.</p>`,
		content: `
		<p class="lead">Peter works at Lively and during his talk he spoke of a Case for startdashboard.nl. He went from a Drupal site to a Realtime Meteor.js app and here is why it was a great success.</p>

		<p>The Drupal site allowed him to do many thing but he soon discovered that it was time for an update. At that moment Meteor.js was hip and happening so they decided to ride along the Meteor.js train.</p>

		<p>By taking this step it allowed him to build the chat module that would update realtime to the server. This was due to the data distribution protocal build-in meteor.js. The way it works is via websockets that sends data back and forth from server to client.</p>

		<p>Check out the npm module ddp-client for more information on the usage.</p>

		<h2>GraphQL</h2>
		<p>When doing an API call to a REST API the structure looks similar like this : /api/location. The response will be everything that belongs to the location.</p>

		<p>GraphQL makes sure you get only what you need. The response depends on the fields that you include to you API call</p>
		`,
		author: "Elton Gonçalves Gomes",
		link: function(){return "/blog/"+this.id;}
	},
	{
		id: 8,
		title: "Realtime web and GraphQL",
		date: {
			day: "14",
			month: "Apr",
			year: "2017",
			full: "2017-04-14T16:00",
		},
		image: "/img/blog/7.jpg",
		lead: `<p class="lead">Peter works at Lively and during his talk he spoke of a Case for startdashboard.nl. He went from a Drupal site to a Realtime Meteor.js app and here is why it was a great success.</p>`,
		content: `
		<p class="lead">Peter works at Lively and during his talk he spoke of a Case for startdashboard.nl. He went from a Drupal site to a Realtime Meteor.js app and here is why it was a great success.</p>

		<p>The Drupal site allowed him to do many thing but he soon discovered that it was time for an update. At that moment Meteor.js was hip and happening so they decided to ride along the Meteor.js train.</p>

		<p>By taking this step it allowed him to build the chat module that would update realtime to the server. This was due to the data distribution protocal build-in meteor.js. The way it works is via websockets that sends data back and forth from server to client.</p>

		<p>Check out the npm module ddp-client for more information on the usage.</p>

		<h2>GraphQL</h2>
		<p>When doing an API call to a REST API the structure looks similar like this : /api/location. The response will be everything that belongs to the location.</p>

		<p>GraphQL makes sure you get only what you need. The response depends on the fields that you include to you API call</p>
		`,
		author: "Elton Gonçalves Gomes",
		link: function(){return "/blog/"+this.id;}
	},
	{
		id: 9,
		title: "Obscure browsers",
		date: {
			day: "18",
			month: "Apr",
			year: "2017",
			full: "2017-04-18T16:00",
		},

		image: "/img/blog/8.JPG",
		lead: `<p class="lead">Everything is turning smart these days, so why not a smart house. Niels tries to connect everthing in his house to the internet. During his talk about obscure browsers he gave some tips how to connect anything to the web.</p>`,
		content: `
		<p class="lead">Everything is turning smart these days, so why not a smart house. Niels tries to connect everthing in his house to the internet. During his talk about obscure browsers he gave some tips how to connect anything to the web.</p>

		<h2>Niels projects</h2>
		<ul>
		<li>A washing machine that tells when it’s done washing so you’ll never forget to dry your clothes. Niels talked about how he used the browser to check the energy consumption of the washing machine and made an webapp that would notify him when it was done.</li>
		<li>A mailbox that sends notification to his phone whenever there is mail. This mailbox had a sensor that notified Niels every time the mailbox opened.</li>
		<li>Niels has chicken that need water. During the winter the water bowl of the chicken freezes. He build a heater that checks the temperature and unfreezes the bowl if it’s frozen.</li>
		<li>To combine all these projects he build led frame that makes pixel monsters and receive notifications</li>
		</ul>

		<h2>Requirements</h2>
		<ul>All you need to reproduce these projects are:
			<li>An iot device like the Arduino + ESP or Node.mcu</li>
			<li>Websockets</li>
			<li>And a server</li>
		</ul>

		<p>The iot device should connect to an API set by your server and a computer should make request to the server.</p>
		`,
		author: "Elton Gonçalves Gomes",
		link: function(){return "/blog/"+this.id;}
	},
	{
		id: 9,
		title: "Your own company by and with CMD",
		date: {
			day: "16",
			month: "May",
			year: "2017",
			full: "2017-05-16T16:00",
		},

		image: "/img/blog/9.JPG",
		lead: `<p class="lead">Nick de Bruin is owner of Lively and gave a talk on how he started Lively. Nick used to be a Communication and Multimedia design student.</p>`,
		content: `
		<p class="lead">Nick de Bruin is owner of Lively and gave a talk on how he started Lively. Nick used to be a Communication and Multimedia design student.</p>

		<h2>Everybody can build an app</h2>
		<p>Making an app is easy, but you won’t always have the rights to build and publish it.</p>

		<h2>Solve one problem at a time and earn money out of it.</h2>
		<p>If you start building things that nobody is willing to pay for you are wasting your time.</p>

		<p>Get all idea’s you have out of your head. Use SCRUM or a similar way of checking on your progress</p>

		`,
		author: "Elton Gonçalves Gomes",
		link: function(){return "/blog/"+this.id;}
	},
	{
		id: 10,
		title: "Interaction Engineer",
		date: {
			day: "23",
			month: "May",
			year: "2017",
			full: "2017-05-23T16:00",
		},
		image: "/img/blog/10.JPG",
		lead: `<h2>A basic setup for Internet of Things</h2>
		<p>To set up your own internet of things project you will need:</p>
		<ul>
			<li>IOT devices</li>
			<li>Database API</li>
			<li>A server</li>
			<li>A server</li>
			<li>And clients</li>
		</ul>`,
		content: `
		<h2>A basic setup for Internet of Things</h2>
		<p>To set up your own internet of things project you will need:</p>

		<h3>IOT devices</h3>
		<p>These devices should never store data, but only send and receive messages. An internet connection on these devices are required. Check out LOR. This is a free 3g connection for IOT.</p>

		<h3>Database API</h3>
		<p>Services like Firebase google cloud, Pub/Sub are ideal for this task. They serve as message bin to store and send the messages</p>

		<h3>A server</h3>
		<p>This could be set by yourself. It allows a connection to the database API and the IOT device</p>

		<h3>And clients</h3>
		<p>These are the devices that will communicate with the server to send messages.</p>
		`,
		author: "Elton Gonçalves Gomes",
		link: function(){return "/blog/"+this.id;}
	},
	{
		id: 11,
		title: "Inclusive design",
		date: {
			day: "31",
			month: "May",
			year: "2017",
			full: "2017-05-23T16:00",
		},

		image: "/img/blog/11.JPG",
		lead: `<p class="lead">Leonie is a blind developer and gave a talk  about screen readers during the icons</p>`,
		content: `
		<p class="lead">Leonie is a blind developer and gave a talk  about screen readers during the icons</p>

		<h3>4 things about screen readers</h3>

		<h3>What is it</h3
		<p>Speech interface
		Some screen readers refresh braille software
		Windows has one build in
		Screen reader hardware are very pricy</p>

		<h3>Who is it for</h3>
		<p>Screen readers aren’t just for blind people. They are used by partially impaired .
		People with autism, dyslexia also use screen readers to help them focus.</p>

		<h3>When does it</h3>
		<p>It reads the DOM tree and renders a accessibility tree, making it accessible for incapable people browsing the web.</p>

		<h3>Why should I design for accessibility</h3>
		<p>Feels good, people will enjoy it
		It is your responsibility as a developer
		You have a choice while people with motoric disabilities don’t
		Accessibility doesn’t have to be perfect</p>
		`,
		author: "Elton Gonçalves Gomes",
		link: function(){return "/blog/"+this.id;}
	},
	{
		id: 12,
		title: "Using npm as task runner",
		date: {
			day: "10",
			month: "Jun",
			year: "2017",
			full: "2017-06-10T16:00",
		},
		image: "",
		lead: `<p class="lead">I was a bit late on learning Gulp and I am doing my best to let it go, here is why you should do so too.<p>`,
		content: `
		<p class="lead">I was a bit late on learning Gulp and I am doing my best to let it go, here is why you should do so too.<p>

		<p>After I just started getting comfortable with Gulp people told me I should let it go. But, why? Its doing its job well and helping me getting my projects done. I soon discovered that those people were right and this is why.</p>

		<h2>Common problems with task runners</h2>
		<p>Just like Grunt, Gulp might be abandoned in a few years. Another task runner will come along and take its place. According to Cory House, Principal at reactjsconsulting.com, there are three issues on using task runners like Gulp and Grunt:</p>

		<h3>You depend on plugins made by others</h3>
		<p>If the creator of the plugin decides to stop maintaining the plugin, you might get yourself in trouble.</p>

		<h3>It is very frustrating to debug errors</h3>
		<p>So basically when using a task runner, you are adding an extra layer to your project that may cause bugs. Debugging it means you have one extra concern: “Is my task runner causing the problem?”</p>

		<h3>You have to learn the tool and the plugins</h3>
		<p>Every plugin has its own way of installing. You will have to take your time to learn the task runner, then some extra time to search a plugin and then some more time to figure out how to installing it in your gulpfile.</p>

		<p>Another issue on using a task runner is that you’ll learn how to use the tool and not what it does. </p>

		<h2>Use npm instead</h2>
		<p>If you are using Node.js you already have a task runner. Why not use NPM as task runner.  Node allows you to run any file by using node file.js. Add this to you npm scripts and you have yourself a task.  Node will execute anything that is in the file, easy right?.</p>

		<p>You can even use pre and post scripts to run with the script you want.</p>
		<p>Your package.json script should look something like this:</p>
		<code>"scripts": {
		        "prestart": "code to run before",
		        "start": "code to run",
		        "poststart": "code to run after"
		    }
		</code>
		<p>Then using the npm start command, you’ll run prestart then start and then  poststart.</p>

		<h2>Conclusion</h2>
		<p>Npm is great, npm scripts can take over task runners. The task runner rely on plugins, which most have an independent npm version anyway. I encourage you to try npm as a task runner, you wont be disappointed.</p>
		`,
		author: "Elton Gonçalves Gomes",
		link: function(){return "/blog/"+this.id;}
	},
	{
		id: 13,
		title: "Keeping up with the ECMAScripts",
		date: {
			day: "10",
			month: "Jun",
			year: "2017",
			full: "2017-06-10T16:00",
		},
		image: "",

		lead: `<p class="heading">So Javascript es3000 is around the corner and you don’t even know what version of JavaScript you are writing in, whatever should you do?</p>`,
		content: `
		<p class="heading">So Javascript es3000 is around the corner and you don’t even know what version of JavaScript you are writing in, whatever should you do?</p>

		<p>Well you don’t have to do anything and here is why based on some mistakes and misinterpretation I had:</p>

		<h2>Most of the code won’t run on the browser.</h2>
		<p>It’s great that it makes your code smaller, readable and adds new features, but you will need something to transform it into browser friendly code. Finding the best tool to do so is a burden. The community has mixed feelings on how to convert newer JavaScript functionalities, just google es6 transpiler and you’ll see what I mean. If you are a beginner this might even be overwhelming.</p>

		<h2>Not everyone knows and uses it</h2>
		<p>While working on group projects you make across a person that doesn’t know any of the new stuff. At this point you can go two ways:</p>
		<ol>
			<li>You try to teach that person the basics, costing time and effort. Knowing that people will most likely fall back to their old habbits, you’ll be rewriting a lot of code.</li>
			<li>You’ll go back to writing browser friendly code, making your newly learned ECMAScript knowledge useless for this project.</li>
		</ol>

		<h2>You will mix thing up in the  beginning</h2>
		<p>A little bit of const here, a little bit of let here and to top it off why not some var here, seems correct. As valid as that may be, if another developer looks at your code he will tell you to be consistent. And you should, if your planning on working together on projects.</p>

		<h2>Some stuff may not work how you want them to</h2>
		<p>When I just learned the arrow function, I would use it everywhere. I soon figured the arrow function does not go hand in hand with the “this” keyword. When using an arrow function this !== this.</p>

		<h2>You’ll never use all of it</h2>
		<p>As great as it may be to learn all ECMAScript features, you will use some of the features and ignore the others.</p>

		<h2>Conclusion</h2>
		<p>Even though you don’t need to  learn the new features of the ECMAscripts, it may come in handy to know some of it. Learn just a bit so you can hang out with the cool kids. So If you want to challenge yourself, learn the ECMAScript versions. Here is a link to get you started <a href="https://webapplog.com/es6/">webapplog</a></p>
		`,
		author: "Elton Gonçalves Gomes",
		link: function(){return "/blog/"+this.id;}
	},
	{
		id: 14,
		title: "Realtime web and why you should use it",
		date: {
			day: "24",
			month: "Jun",
			year: "2017",
			full: "2017-06-24T16:00",
		},
		image: "",
		lead: `<p class="lead">Realtime web has been around for a long time, enabling connection between multiple devices in realtime. Here is a reason why you should start using this technology.</p>`,
		content: `
		<p class="lead">Realtime web has been around for a long time, enabling connection between multiple devices in realtime. Here is a reason why you should start using this technology.</p>

		<h2>What is realtime web</h2>
		<p>Realtime web is a technology that enables an almost realtime connection between multiple webclients and a webserver, sending requests across multiple devices.</p>
		<p>Don’t let the term scare you. RTW (Realtime Web) have been around for a long time. Social media platform like Facebook and Twitter both use real-time data to update user’s activity streams, resulting in an experience that feels less static.</p>

		<h2>How does it work</h2>
		<p>The way RTW used to work was via polling. According to Cloudflare, clients would send a request to the server in an interval. The server would gather all the information and wait for the request to come in. When the request came in, the server would continue to send the requested data to the client. This adds a lot of extra latency.</p>
		<p>Nowadays Realtime web can be done via Websockets. Websockets creates a connection to clients, that stay open until while the clients disconnect. While connected, the server automatically pushes data to the clients, no need for requests.</p>

		<h2>What are the use cases</h2>
		<p>If you think of realtime web, the first thing that might come up is chatting with each other. But there are a lot of ways to implement it</p>
		<blockquote>Realtime web technologies have a number of common use cases, and newer, innovative uses are constantly being discovered. Simple use cases are things like displaying data, statistics, notifications and news as soon as it becomes available. But the technology shows its real value when interactive experiences are created - when multiple users and systems are instantly communicating with each other. Industries which are benefitting from the technology include social, broadcasting, sport, finance, e-commerce, energy, education, healthcare and gaming.
		<span>- Phil Leggetter, Creative Blog staff.</span>
		</blockquote>

		<p>Here are some examples that add a fascinating twist to the realtimeness and  utilize mobile device features.</p>

		<h2>Swip.js</h2>
		<iframe width="560" height="315" src="https://www.youtube.com/embed/qXOwT0ieOgw" frameborder="0" allowfullscreen></iframe>
		<p>Swip.js is a project that allows you to extend the screen of a device. Using swip.js you connect devices next to each other to further extend your screen.
		It uses socket.io to make a connections between multiple clients within range of each other. This connection extends the overall canvas with the device width and height. Position of an object on one client will be transferred to the other client.</p>


		<h2>Racer a chrome experiment</h2>
		<iframe width="560" height="315" src="https://www.youtube.com/embed/17P67Uz0kcw" frameborder="0" allowfullscreen></iframe>
		<p>Similar to Swip.js, Racer does an excellent job of connecting devices together. Racer is a racing game for mobile devices. Placing the devices next to each other will extend the race track. The UI looks great and is fully responsive. The team split the soundtrack of the game so each player that enters the lobby adds sound that is part of the whole soundtrack.  Racer also uses Websockets.</p>

		<h2>Conclusion</h2>
		<p>Realtime web is an interesting web technology that opens roads to creativity. By using RTW on your products you will receive instant responses to your requests.</p>
		`,
		author: "Elton Gonçalves Gomes",
		link: function(){return "/blog/"+this.id;}
	},
	{
		id: 15,
		title: "Static website FTW",
		date: {
			day: "25",
			month: "Jun",
			year: "2017",
			full: "2017-06-24T16:00",
		},
		image: "",
		lead: `<p class="lead">During a project I received feedback of from a tutor. He told me: “A server is not needed for this specific project, you could use a service like Travis to build static pages”. My curiosity rose and I decided to do some further research on this.</p>`,
		content: `
		<p class="lead">During a project I received feedback of from a tutor. He told me: “A server is not needed for this specific project, you could use a service like Travis to build static pages”. My curiosity rose and I decided to do some further research on this.</p>

		<h2>What is a static website generator</h2>
		<p>A static website generator is a tool that creates website from plain text. According to smashing magazine Static site generators are the next big thing.</p>

		<h2>What are the benefits of using one</h2>
		<p>The generators allow you to use templating, which is awesome. Write a block of code here and use it anywhere.</p>

		<p>You can use markdown for your text structure. Markdown is an easy to learn text markup and goes hand in hand with the templating.</p>

		<p>Your site will be faster, because your site requires fewer parts and isn’t connected to a data point. All that the page needs is within a generated file.</p>

		<p>It will cost you less money to get a site running. You could even host it for free on github-pages.</p>

		<h2>How do I get started</h2>
		<p>Static website generators are everywhere, Jekyll being one of them. Jekyll is a Ruby app that you install on your computer. It combines a template with content to create individual html files. These files can be uploaded to a server and viewed by others.<p>

		<p>Jekyll uses a thing called front matters. Here is where all the metadata goes. You can specify the title, type, date and more. A basic Jekyll structure looks as follows:</p>
		<code>
		---<br>
		title: Title of the document<br>
		categories:<br>
		- Category A<br>
		- Category B<br>
		---<br>
		<br>
		# Actual content<br>
		<br>
		This is the document<br>
		<br>
		</code>

		<h2>Static files vs Dynamic files</h2>
		<br>
		<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}
.tg .tg-yw4l{vertical-align:top}
.tg .tg-9hbo{font-weight:bold;vertical-align:top}
</style>
<table class="tg" style="undefined;table-layout: fixed; width: 458px">
<colgroup>
<col style="width: 54px">
<col style="width: 151px">
<col style="width: 253px">
</colgroup>
  <tr>
    <th class="tg-yw4l"></th>
    <th class="tg-9hbo">Static</th>
    <th class="tg-9hbo">Dynamic</th>
  </tr>
  <tr>
    <td class="tg-9hbo">Pro's</td>
    <td class="tg-yw4l">- Cheap to develop<br>- Cheap to host</td>
    <td class="tg-yw4l">-Dynamic content<br>-Users interaction e.g: login or submit input</td>
  </tr>
  <tr>
    <td class="tg-9hbo">Con's </td>
    <td class="tg-yw4l">- No user input</td>
    <td class="tg-yw4l">- Hosting costs a little more,<br>- Slower because of the filesize</td>
  </tr>
</table>
<br>
		`,
		author: "Elton Gonçalves Gomes",
		link: function(){return "/blog/"+this.id;}
	},

];
