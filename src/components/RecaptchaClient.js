import React, { useEffect } from "react";

export default function RecaptchaClient() {
	useEffect(() => {
		const renderCaptcha = () => {
			const container = document.getElementById("recaptcha-container");
			if (
				window.grecaptcha &&
				container &&
				container.childNodes.length === 0
			) {
				window.grecaptcha.render("recaptcha-container", {
					sitekey: "6Ld1p4ArAAAAAPcqUMRFmI9AEJrZ94wfv2Br0BA9",
				});
			}
		};

		window.onRecaptchaLoadCallback = () => {
			let attempts = 0;
			const interval = setInterval(() => {
				attempts++;
				if (window.grecaptcha) {
					renderCaptcha();
					clearInterval(interval);
				}
				if (attempts > 10) clearInterval(interval);
			}, 200);
		};

		if (!document.querySelector('script[src*="recaptcha/api.js"]')) {
			const script = document.createElement("script");
			script.src = "https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoadCallback&render=explicit";
			script.async = true;
			script.defer = true;
			document.body.appendChild(script);
		} else {
			window.onRecaptchaLoadCallback();
		}
	}, []);

	return <div id="recaptcha-container" style={{ marginTop: "10px" }} />;
}