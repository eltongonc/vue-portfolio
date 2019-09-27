<template>
	<section class="section contact__content">
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<h2 class="section-title text-center">Let’s get in tough</h2>
					<p class="section-subtitle text-center">Leave your contact behind and I will contact you A.S.A.P</p>
					<h4 class="section-subtitle text-center"><a class="link" href="mailto:eltongonc@gmail.com"><span class="lnr lnr-envelope"></span> eltongonc@gmail.com</a></h4>
					<p class="section-subtitle text-center">- or -</p>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-12">
					<form class="form-area contact-form text-right" id="myForm" action="/static/contact.php" method="post">
						<div class="row">	
							<div class="col-lg-6 form-group">
								<input 
									name="name"
									placeholder="Enter your name"
									onFocus="this.placeholder = ''"
									onBlur="this.placeholder = 'Enter your name'"
									class="common-input mb-20 form-control"
									required
									type="text"
								/>
								<input 
									name="email"
									placeholder="Enter email address"
									pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
									onFocus="this.placeholder = ''"
									onBlur="this.placeholder = 'Enter email address'"
									class="common-input mb-20 form-control"
									required
									type="email"
								/>
							</div>

							<div class="col-lg-6 form-group">
								<input 
									name="phone"
									placeholder="Enter your phone number"
									onFocus="this.placeholder = ''"
									onBlur="this.placeholder = 'Enter subject'"
									class="common-input mb-20 form-control"
									type="tel"
									defaultValue={subject[1]}
								/>
								<select name="subject" class="common-input mb-20 form-control">
									<option value="" disabled selected>Select a type op project</option>
									<option value="websites">Websites</option>
									<option value="webshops">Webshops</option>
									<option value="webapps">Webapps</option>
									<option value="prototyping">Prototyping</option>
								</select>
							</div>
							<div class="col-lg-12 form-group">
								<textarea
									class="common-textarea form-control"
									name="message" placeholder="Enter Messege"
									onFocus="this.placeholder = ''"
									onBlur="this.placeholder = 'Enter Messege'"
									required=""
								></textarea>				
							</div>
							<div class="col-lg-12">
								<div class="alert-msg" style="textAlign: 'left'"></div>
								<button class="genric-btn primary" style="float: 'right'">Send Message</button>											
							</div>
						</div>
					</form>	
				</div>
			</div>

		</div>	
	</section>
</template>

<script>
export default {

}
</script>

<style>

</style>