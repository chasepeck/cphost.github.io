function randomSubtitle() {
  var subtitles = [
	"GRAND AMAZINGNESS OF THE AMAZING™",
	"HA HA HA! YOU'VE FALLEN FOR MY TRAP! PREPARE FOR ECZEMA!",
	"i'm not a WEEB i'm a GLOBAL CITIZEN",
	"♪ na-na-na 塊魂 ♪",
	"go back to the trees",
	"fun with HTML",
	"Live Fast Die Slow; Live Slow Die Fast",
	"Everything is Everything<br>is what you're just about to say",
	"ニャ〜♥ (*´ω｀*)",
	"no, not HIM",
	"MN-8537 Fluxional Dual-rod Nanorefractor",
	"HELP I GOT MYSELF STUCK IN THE NUCLEAR REACTOR AGAIN",
	"Why don’t you Gobi Desert somewhere else",
	"Competency is determined by number of semicolons per 100 punctuation marks",
	"Carter's Babies and Kids: He doesn't want them anymore",
	"HTML written by hand",
	"Through adversity, advertisements",
	"To err is human, but to air is fan",
	"Shebang! Hebang! Theybang!",
	"GROUSE?!",
	"WonderLust - Aphrodesiac White Bread",
	"Ma musique jazzical",
	"I just farted a fracking business",
	"SUBDUE, NEUTRALIZE",
	"All of my zero friends can attest that I am normal",
	"I'm lazy because of my chronic brain disease, not other shortcomings of my character",
	"What do you call someone who despises hippos? Hippo critical",
	"As black and white as gender isn't!",
	"As not black and white as gender isn't not!",
	"naïve adolescent purple poetry",
	"Open mic and see all his organs!",
	"Yeow!",
	"photophotophotogiftmap1",
	"What's the data, theta?"
  ];
  document.getElementById("subtitle").innerHTML = subtitles[Math.floor(Math.random() * subtitles.length)];
}

fetch("/sidebar.html")
	.then(response => response.text())
	.then(text => {
		// Create sidebar
		var sidebar = document.createElement("div");
		sidebar.innerHTML = text;
		sidebar.classList.add("sidebar");
		document.body.insertBefore(sidebar, document.body.firstChild);

		// Enable subelements
		document.querySelectorAll(".sidebar .sub").forEach(function(elem) {
			if(elem.getAttribute("name") == document.body.getAttribute("name")) {
				elem.style = "display: block;";
			}
		});

		// Highlight current page
		try {
			document.getElementById(document.body.getAttribute("name")).style = "color: var(--white);";
		} catch {}
		randomSubtitle();
	});
