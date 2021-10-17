document.addEventListener('scroll', function() {
	$("#main1").css({
		"color":"rgba(255,255,255,"+(1-window.scrollY/250)+")"
	})
});