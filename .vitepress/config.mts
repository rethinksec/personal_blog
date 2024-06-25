import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "RethinkSec",
	description: "Rethink Cybersecurity",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Cybersecurity Fundamental', link: '/cybersecurity-fundamentals' },
			{ text: 'Digital Forensics & Incident Response', link: '/digital-forensics-incident-response' },
			{ text: 'Penetration Testing', link: '/penetration-testing' },
			{ text: 'Cybersecurity Career', link: '/cybersecurity-career' }
		],

		sidebar: {
			"cybersecurity-fundamentals": [
				{
					text: 'Cybersecurity Fundamental',
					items: [
						{ text: 'OverTheWire Bandit', link: '/cybersecurity-fundamentals/bandit' }
					]
				}
			],
		},

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/rethinksec' },
			{ icon: 'linkedin', link: 'https://www.linkedin.com/in/cheeyuen-teng' }
		]
	}
})
