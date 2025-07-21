import React, { useEffect } from "react";
import { Theme } from "@quarkly/widgets";
import theme from "../theme";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import SlideMenu from "./SlideMenu";
import { Helmet } from "react-helmet";


const Layout = ({ children, pageUrl = "index" }) => {
const ENABLE_TARTEAUCITRON = false;

useEffect(() => {
	if (!ENABLE_TARTEAUCITRON) return;

	if (!window.tarteaucitron) {
		const script = document.createElement("script");
		script.src = "/tarteaucitron/tarteaucitron.min.js";
		script.onload = () => {
			const serviceScript = document.createElement("script");
			serviceScript.src = "/tarteaucitron/tarteaucitron.services.js";
			serviceScript.onload = () => {
				window.tarteaucitron.init({
					privacyUrl: "",
					bodyPosition: "top",
					hashtag: "#tarteaucitron",
					cookieName: "tarteaucitron",
					orientation: "middle",
					groupServices: true,
					showDetailsOnClick: true,
					serviceDefaultState: "wait",
					showAlertSmall: false,
					cookieslist: false,
					cookieslistEmbed: false,
					closePopup: true,
					showIcon: true,
					iconPosition: "BottomRight",
					adblocker: false,
					DenyAllCta: true,
					AcceptAllCta: true,
					highPrivacy: true,
					alwaysNeedConsent: false,
					handleBrowserDNTRequest: false,
					removeCredit: false,
					moreInfoLink: true,
					useExternalCss: false,
					useExternalJs: false,
					mandatory: true,
					mandatoryCta: false,
					googleConsentMode: true,
					bingConsentMode: true,
					softConsentMode: false,
					dataLayer: false,
					serverSide: false,
					partnersList: true,
				});
				window.tarteaucitron.job = window.tarteaucitron.job || [];
				window.tarteaucitron.job.push("youtube");
			};
			document.body.appendChild(serviceScript);
		};
		document.body.appendChild(script);
	}
}, []);



	return (
		<Theme theme={theme}>
			<GlobalQuarklyPageStyles pageUrl={pageUrl} />
			<SlideMenu />
			{children}
		

		</Theme>
	);
};

export default Layout;
