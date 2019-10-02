<template>
    <section id="timeline" class="timeline section">
      <div class="container">
        
        <diV class="row d-flex justify-content-center">
          <h2 class="section-title">Experience</h2>
        </div>
        
				<ul>
					<li class="timeline-item" v-for="(item) in experience" :key={item}>
            <div class="content">
              <a v-if="item.img" :href="item.link">
                <figure v-lazyload>
                  <img :data-url="item.img" class="content-img img-fluid d-block mb-30" alt="company logo">
                </figure>
              </a>
              <h5 class="section-title content-title">{{item.title}}</h5>
              <p class="section-title section-subtitle">{{item.subtitle}}</p>
              <p class="content-duration"><b>Duration:</b> {{item.startDate}} - {{item.endDate}}</p>
              <p v-if="item.description" v-html="item.description" class="content-description"></p>
              <ul v-if="item.list">
                <li v-for="(listItem, j) in item.list" :key="'item_'+ j">{{listItem}}</li>
              </ul>

              <router-link v-if="item.endProject" :to="item.endProject" class="content-link button">View Project</router-link>
            </div>
					</li>
				</ul>

      </div>
    </section>
</template>

<script>
export default {
  name: "Timeline",
  data() {
    return {
      experience: [
        {
          title: 'SAI',
          subtitle: 'Work Full-Stack Front-End Developer',
          img: '/static/img/company-logos/sai.png',
          link: 'https://www.ateliersai.com/',
          startDate: 'November 2018',
          endDate: 'Present',
          description: '',
          list: [
            'Building web applications with JavaScript and frameworks like React.js and Vue.js.',
            'Created custom WordPress and WooCommerce templates.',
            'Uploaded and maintained Web Apps and websites on client servers.',
            'Managing projects as the lead front-end developer.',
          ],
          endProject: ''
        },
        {
          title: 'Dimebox',
          subtitle: 'Internship Front-End Developer',
          img: '/static/img/company-logos/dimebox.png',
          link: 'www.dimebox.com',
          startDate: 'August 2017',
          endDate: 'June 2018',
          description: '',
          list: [
            'Worked with Angular and Typescript to visualize data.',
            'Redesigned the current website.',
            'Used ZenHub to order GitHub issues in a scrum board.',
            'Created a Vanilla JS app that allows users to modify a product of Dimebox ',
          ],
          endProject: '/portfolio/jsclient-builder'
        },
        {
          title: 'XS2',
          subtitle: 'Work Web Developer',
          img: '/static/img/company-logos/xs2.png',
          link: '',
          startDate: 'August 2016',
          endDate: 'September 2017',
          description: '',
          list: [
            'Building web applications with JavaScript and frameworks like React.js and Vue.js.',
            'Managing projects with git.',
            'Working with REST API\'s.',
            'Learned how to use Python for web applications and backend development.',

          ],
          endProject: ''
        },
        {
          title: 'Medialab',
          subtitle: 'Internship Front-End Developer',
          img: '/static/img/company-logos/medialab.png',
          link: 'https://www.medialab.co',
          startDate: 'May 2016',
          endDate: 'July 2016',
          description: '',
          list: [
            'Redesigned and rebuild the support page with WordPress.',
            'Created an internal support overview page with a SOAP API connection.',
            'Improved my PHP, HTML, CSS and JavaScript skills.',
          ],
          endProject: '/portfolio/medialab'
        },
        {
          title: 'Communication & Multimedia Design',
          subtitle: 'Bachelor\'s degree',
          img: '/static/img/company-logos/hva.png',
          link: 'https://www.cmd-amsterdam.nl/',
          startDate: 'August 2014',
          endDate: 'July 2018',
          description: 'CMD is a design bachelor program that focused on interactive digital products and services. CMD is part of the Faculty of Digital Media and Creative Industries (Amsterdam University of Applied Sciences). Hogeschool van Amsterdam',
          list: [],
          endProject: '/portfolio/jsclient-builder'
        },
      ]
    };
  },
};
</script>