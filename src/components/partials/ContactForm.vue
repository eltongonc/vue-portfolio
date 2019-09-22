<template>
	<section class="contact-page-area section-gap">
		<div class="container">
			<div class="row">
				<div class="col-sm-12 pb-60">
					<h1 class="mb-10 text-center">I can help you with your project.<br/>Let&apos;s get in tough</h1>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-4 d-flex flex-column address-wrap">
					<div class="single-contact-address d-flex flex-row">
						<div class="icon">
							<span class="lnr lnr-home"></span>
						</div>
						<div class="contact-details">
							<h5>Amsterdam, The Netherlands</h5>
							<p>&nbsp;</p>
						</div>
					</div>
					<div class="single-contact-address d-flex flex-row">
						<div class="icon">
							<span class="lnr lnr-phone-handset"></span>
						</div>
						<div class="contact-details">
							<h5>00 (958) 9865 562</h5>
							<p>Mon to Fri 9am to 6 pm</p>
						</div>
					</div>
					<div class="single-contact-address d-flex flex-row">
						<div class="icon">
							<span class="lnr lnr-envelope"></span>
						</div>
						<div class="contact-details">
							<h5>eltongonc@gmail.com</h5>
							<p>Contact me anytime!</p>
						</div>
					</div>
				</div>
				<div class="col-lg-8">
					<form class="form-area contact-form text-right" id="myForm" action="mail.php" method="post">
						<div class="row">	
							<div class="col-lg-6 form-group">
								<input name="name" placeholder="Enter your name" onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Enter your name'" class="common-input mb-20 form-control" required="" type="text"/>
							
								<input name="email" placeholder="Enter email address" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Enter email address'" class="common-input mb-20 form-control" required="" type="email"/>

								<input name="subject" placeholder="Enter subject" onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Enter subject'" class="common-input mb-20 form-control" required="" type="text" defaultValue={subject[1]}/>
							</div>
							<div class="col-lg-6 form-group">
								<textarea class="common-textarea form-control" name="message" placeholder="Enter Messege" onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Enter Messege'" required=""></textarea>				
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