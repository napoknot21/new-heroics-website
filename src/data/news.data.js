// src/data/news.data.js

const NEWS = [

	{
		id : "bfm-business-april-2025",
		date : "2025-04",
		title : "BFM Business – Paroles d'Entreprises",
		type : "media",
		contentHtml : `
			<p>In this special feature, Heroics Capital Partners shared insights on innovation and entrepreneurship.</p>
			<details class="mt-2">
				<summary class="text-blue-600 underline cursor-pointer">Watch the video</summary>
				<div class="mt-4">
				<iframe
					width="100%"
					height="315"
					src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE"
					title="BFM Business Interview"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen>
				</iframe>
				</div>
			</details>
			`,
	},

	{
		id: "heroics-aegis-release",
		date: "2025-02",
		title: "Release of Heroics Aegis",
		type: "product",
		content: "In July 2024, Heroics released a front-to-middle, compliance and board management platform - Heroics Aegis - for data centralization.",
	},

	{
		id : "structured-products-escp",
		date : "2024-10",
		title : "The Fundamentals of the Structured Products Industry",
		type : "event",
		content : "<a href='https://www.linkedin.com/posts/fahmi-ben-abdelkader-6111a64_luxembourg-ugcPost-7253125773098643456-AsBI?utm_source=share&utm_medium=member_desktop' target='_blank' rel='noopener noreferrer'>Cyril Nahabedian – CEO & Co-Founder of Heroics Capital Partners – attended an enlightening seminar on structured products with ESCP Business School students. Click to see more</a>",
	},

	{
		id : "btc-otc-goldman-sachs",
		date : "2024-07",
		title : "First European hedge fund to trade a BTC OTC derivative with Goldman Sachs Europe",
		type : "milestone",
		content : "In July 2024, Heroics Global Strategy SICAV-RAIF made a historic milestone by becoming the first European hedge fund to execute an OTC derivative product on Bitcoin with Goldman Sachs Europe.",
	},

	{
		id : "heroics-sentinelle-release",
		date : "2024-07",
		title : "Release of Heroics Sentinelle",
		type : "product",
		content : "In July 2024, Heroics released a risk analytics platform - Heroics Sentinelle - for daily monitoring of positions and risks.",
	},
	
];

export default NEWS;
