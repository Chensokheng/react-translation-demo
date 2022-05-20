import React from "react";
import { useTranslation } from "react-i18next";

export default function App() {
	const { t, i18n } = useTranslation();

	const handleChangeLng = (lng) => {
		i18n.changeLanguage(lng);
		localStorage.setItem("lng", lng);
	};

	return (
		<div>
			<button onClick={() => handleChangeLng("en")}>English</button>
			<button onClick={() => handleChangeLng("jp")}>Jp</button>

			<h1>{t("hello")}</h1>
			<h1>{t("how are you?")}</h1>
		</div>
	);
}
