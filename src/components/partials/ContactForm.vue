<template>
	<section class="section contact__content">
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<h2 class="section-title text-center">Let’s get in tough</h2>
					<p class="section-subtitle text-center">Send me a message on:</p>
					<h4 class="section-subtitle text-center"><a class="link" href="mailto:eltongonc@gmail.com"><span class="lnr lnr-envelope"></span> eltongonc@gmail.com</a></h4>
					<p class="section-subtitle text-center">- or -</p>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-12">
					<form class="form-area contact-form" id="myForm" action="/static/contact.php" method="post" v-on:submit="handleSubmit">
						<div class="row">	
							<div class="col-lg-6 form-group">
								<label>
									<span>Name</span>
									<input 
										id="name"
										name="name"
										placeholder="Enter your name"
										onFocus="this.placeholder = ''"
										onBlur="this.placeholder = 'Enter your name'"
										class="common-input mb-20 form-control"
										
										type="text"
									/>
								</label>
								<label>
									<span>Email</span>
									<input 
										id="email"
										name="email"
										placeholder="Enter email address"
										onFocus="this.placeholder = ''"
										onBlur="this.placeholder = 'Enter email address'"
										class="common-input mb-20 form-control"
										
										type="email"
									/>
									
								</label>
							</div>

							<div class="col-lg-6 form-group">
								<label>
									<span>Phone</span>
									<input 
										id="phone"
										name="phone"
										placeholder="Enter your phone number"
										onFocus="this.placeholder = ''"
										onBlur="this.placeholder = 'Enter subject'"
										class="common-input mb-20 form-control"
										type="tel"
										defaultValue={subject[1]}
									/>
									
								</label>
								<label>
									<span>Subject</span>
									<select id="subject" name="subject"  class="common-input mb-20 form-control">
										<option value="" disabled selected>Select a type op project</option>
										<option value="websites">Websites</option>
										<option value="webshops">Webshops</option>
										<option value="webapps">Webapps</option>
										<option value="prototyping">Prototyping</option>
									</select>
									
								</label>
							</div>
							<div class="col-lg-12 form-group">
								<label>
									<span>Message</span>
									<textarea
										id="message"
										class="common-textarea form-control"
										name="message" placeholder="Enter Messege"
										onFocus="this.placeholder = ''"
										onBlur="this.placeholder = 'Enter Messege'"
										
									></textarea>
								</label>
							</div>
							<div class="col-lg-12 text-right">
								<div class="alert-msg" style="textAlign: 'left'"></div>
								<button class="genric-btn primary">Send Message</button>
							</div>
						</div>
					</form>	
				</div>
			</div>

		</div>	
	</section>
</template>

<script>
import _ from 'lodash';
import validate from "validate.js";
import serialize from "../../assets/serialize";

export default {
	data() {
		return {
			constraints: {
				name: {
					presence: true,
					length: {
						minimum: 2
					}
				},
				email: {
					email: true,
					presence: true,
				},
				phone: {
					presence: true,
					format: {
						pattern: /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9])((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$/gm,
					},
				},
				subject: {
					presence: true,
				},
				message: {
					presence: true,
					format: {
						pattern: /^[a-zA-Z0-9?$@#()'!,+\-=_:.&€£*%\s]+$/
					}
				}
			}
		}
	},
	methods: {

		handleSubmit(e) {
			e.preventDefault();
			const data = serialize(e.target);
			const errors = validate(data, this.constraints);

			this.toggleInvalid(false, data);
			this.toggleInvalid(true, errors);
		},

		toggleInvalid(isInvalid, errors) {
			// Display the errors
			for (const key in errors) {
				if (errors.hasOwnProperty(key)) {
					const el = document.getElementById(key);
					if (isInvalid) {
						el.classList.add('is-invalid');
					} else {
						el.classList.remove('is-invalid');
					}
				}
			}
		},
	}

}
</script>

<style>

</style>