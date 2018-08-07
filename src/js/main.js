$(document).ready(function(){
	var options = {
	  strings: ["What is your objective?",
	  	"What is your Objektiv?"
  	  ],
	  smartBackspace: true,
	  typeSpeed: 40,
	  showCursor: false
	}

	setTimeout(function(){
		var typed = new Typed("#objektiv-headline", options);
	}, 1500);

	$(document).scroll(function() {
	    var scroll_top = $(document).scrollTop();
	    var div_one_top = $('#to-the-top').position().top;
	    var div_two_top = $('#portfolio').position().top;
	    var div_three_top = $('#contact').position().top;

	    if(scroll_top > div_two_top && scroll_top < div_three_top) {
	        $('.nav-item .nav-link .sr-only').remove();
	        $('#nav-contact .nav-link').html('Contact <span class="sr-only">(current)</span>');
	        $('.nav-item').removeClass('active');
	        $('#nav-contact').addClass('active');
	    } else if(scroll_top > div_one_top && scroll_top < div_two_top) {
	        $('.nav-item .nav-link .sr-only').remove();
	        $('#nav-portfolio .nav-link').html('Portfolio <span class="sr-only">(current)</span>');
	        $('.nav-item').removeClass('active');
	        $('#nav-portfolio').addClass('active');
	    } else if( scroll_top < div_two_top) {
	        $('.nav-item .nav-link .sr-only').remove();
	        $('#nav-about .nav-link').html('About <span class="sr-only">(current)</span>');
	        $('.nav-item').removeClass('active');
	        $('#nav-about').addClass('active');
	    }
	});
});

function questionnaireStageOne(object, type){
	var options = {
	  strings: ["> What is the " + type + "\'s purpose?"],
	  typeSpeed: 40,
	  showCursor: false
	}

	switch(type){
		case "website":
			var buttonsSecondSet = `
		            <div class="row second-magic-row">
		              <div class="col-12 cta-button-container-2">
		                <button class="btn btn-md btn-dark" id="need-communication" onClick="$(this).attr('onClick','');questionnaireStageTwo($('#need-communication'), 'website');" type="button">To share ideas.</button>
		              </div>
		              <div class="col-12 cta-button-container-2">
		                <button class="btn btn-md btn-dark" id="need-marketing" onClick="$(this).attr('onClick','');questionnaireStageTwo($('#need-marketing'), 'website');" type="button">To market my business.</button>
		              </div>
		              <div class="col-12 cta-button-container-2">
		                <button class="btn btn-md btn-dark" id="need-ecommerce" onClick="$(this).attr('onClick','');questionnaireStageTwo($('#need-ecommerce'), 'ecommerce');" type="button">To sell products online.</button>
		              </div>
		            </div>`;
            break;
        case "mobile app":
			var buttonsSecondSet = `
		            <div class="row second-magic-row">
		              <div class="col-12 cta-button-container-2">
		                <button class="btn btn-md btn-dark" id="need-promotion" onClick="$(this).attr('onClick','');questionnaireStageTwo($('#need-promotion'), 'promote');" type="button">To promote something.</button>
		              </div>
		              <div class="col-12 cta-button-container-2">
		                <button class="btn btn-md btn-dark" id="need-provide-service" onClick="$(this).attr('onClick','');questionnaireStageTwo($('#need-provide-service'), 'mobile app');" type="button">A service for its users.</button>
		              </div>
		              <div class="col-12 cta-button-container-2">
		                <button class="btn btn-md btn-dark" id="need-tech-idea" onClick="$(this).attr('onClick','');questionnaireStageTwo($('#need-tech-idea'), 'mobile app');" type="button">My innovative tech idea.</button>
		              </div>
		            </div>`;
            break;
        case "server setup":
			var buttonsSecondSet = `
		            <div class="row second-magic-row">
		              <div class="col-12 cta-button-container-2">
		                <button class="btn btn-md btn-dark" id="need-single-host" onClick="$(this).attr('onClick','');questionnaireStageTwo($('#need-single-host'), 'server');" type="button">Host for all my clients.</button>
		              </div>
		              <div class="col-12 cta-button-container-2">
		                <button class="btn btn-md btn-dark" id="need-scaling" onClick="$(this).attr('onClick','');questionnaireStageTwo($('#need-scaling'), 'server');" type="button">Prepare my site for growth.</button>
		              </div>
		              <div class="col-12 cta-button-container-2">
		                <button class="btn btn-md btn-dark" id="need-cheaper" onClick="$(this).attr('onClick','');questionnaireStageTwo($('#need-cheaper'), 'server');" type="button">Migrate to cheaper hosting.</button>
		              </div>
		            </div>`;
            break;
	}

	$("section.one").css("padding-top", "96px");
	$(".cta-button-container .btn").hide();
	object.css("margin", "0px")
	object.show();
	object.parent().css("border-bottom", "3px solid #343a40");
	object.parent().css("padding-left", "0px");
	object.parent().css("padding-right", "0px");
	object.parent().addClass("text-left");
	object.parent().append('<h2 id="key-question"></h2>');
	setTimeout(function(){
		var typed = new Typed("#key-question", options);

    	$("#where-the-magic-happens").append(buttonsSecondSet);
    	$(".second-magic-row").hide();
    	$(".second-magic-row").fadeIn();
	}, 1200);
}

function questionnaireStageTwo(object, type){

	switch(type){
		case "website":
			var id = "web-design-example-two";
			break;
		case "promote":
			var id = "mobile-development-example-one";
			break;
		case "mobile app":
			var id = "mobile-development-example-two";
			break;
		case "ecommerce":
			var id = "mobile-development-example-one";
			break;
	}

	if(type == "server"){
		var options = {
		  strings: ["> That's totally Objektiv's wheelhouse! I'm a command line wizard."],
		  typeSpeed: 15,
		  showCursor: false
		}

		var buttonsThirdSet = `
	            <div class="row third-magic-row">
	              <div class="col-12 cta-button-container-3">
	                <a class="btn btn-md btn-dark" id="marketing-no" href="mailto:ian@objektiv.digital?subject=Server Administration">Let's have a chat.</a>
	              </div>
	            </div>`
	} else {
		var options = {
		  strings: ["> That's totally Objektiv's wheelhouse! Want to see a sample of work before we begin?"],
		  typeSpeed: 15,
		  showCursor: false
		}

		var buttonsThirdSet = `
	            <div class="row third-magic-row">
	              <div class="col-12 cta-button-container-3">
	                <a class="btn btn-md btn-dark" id="marketing-yes" href="#` + id + `">Yeah! Show me what you've got.</a>
	              </div>
	              <div class="col-12 cta-button-container-3">
	                <a class="btn btn-md btn-dark" id="marketing-no" href="mailto:ian@objektiv.digital?subject=Request For Proposal&body=First time writing an RFP (Request For Proposal)? Check out this article:\n https://vtldesign.com/web-strategy/web-design-web-strategy/how-to-write-a-website-design-request-for-proposal/">I'd rather have a chat.</a>
	              </div>
	            </div>`
	}

	$(".cta-button-container-2 .btn").hide();
	object.css("margin", "0px")
	object.show();
	object.parent().css("border-bottom", "3px solid #343a40");
	object.parent().css("padding-left", "0px");
	object.parent().css("padding-right", "0px");
	object.parent().addClass("text-left");
	object.parent().append('<p id="key-message"></p>');
	setTimeout(function(){
		var typed = new Typed("#key-message", options);

    	$("#where-the-magic-happens").append(buttonsThirdSet);
    	$(".third-magic-row").hide();
    	$(".third-magic-row").fadeIn();
	}, 1200);
}