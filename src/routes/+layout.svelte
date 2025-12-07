<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import favicon from '$lib/assets/favicon.svg';

	const productLinks = [
		{ href: '/#m5', label: 'M5' },
		{ href: '/#f30', label: 'F30' },
		{ href: '/#f60', label: 'F60' },
		{ href: '/#m80', label: 'M80' },
		{ href: '/#compare', label: 'Compare' },
		{ href: '/support', label: 'Support' }
	];

	let { children } = $props();
	let scrolled = $state(false);
	let activeSection = $state('');

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 50;
			
			// Update active section based on scroll position
			const sections = ['m5', 'f30', 'f60', 'm80', 'compare'];
			for (const section of sections) {
				const el = document.getElementById(section);
				if (el) {
					const rect = el.getBoundingClientRect();
					if (rect.top <= 150 && rect.bottom >= 150) {
						activeSection = section;
						break;
					}
				}
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
	<title>MZL Machines | Industrial Floor Cleaning Solutions</title>
	<meta
		name="description"
		content="Professional floor scrubbers and cleaning machines. Engineered for pristine results."
	/>
</svelte:head>

<div class="page">
	<header class="topbar" class:scrolled>
		<a class="brand" href="/">
			<span class="brand-icon"></span>
			MZL
		</a>
		
		<nav class="product-nav">
			{#each productLinks as link}
				<a
					href={link.href}
					class:active={activeSection === link.href.replace('/#', '')}
					data-sveltekit-preload-data
				>
					{link.label}
				</a>
			{/each}
		</nav>

		<div class="actions">
			<a class="cta-nav" href="/support">Get a Quote</a>
		</div>
	</header>

	<main class="content">
		{@render children()}
	</main>

	<footer class="footer">
		<div class="footer-inner">
			<div class="footer-brand">
				<div class="brand mark">
					<span class="brand-icon"></span>
					MZL Machines
				</div>
				<p class="footer-tagline">Engineered for pristine.</p>
			</div>
			
			<div class="footer-grid">
				<div class="footer-col">
					<h4>Products</h4>
					<a href="/#m5">M5 Series</a>
					<a href="/#f30">F30 Series</a>
					<a href="/#f60">F60 Series</a>
					<a href="/#m80">M80 Series</a>
				</div>
				<div class="footer-col">
					<h4>Company</h4>
					<a href="/support">Support</a>
					<a href="/support">Contact</a>
					<a href="/#compare">Compare Models</a>
				</div>
				<div class="footer-col">
					<h4>Resources</h4>
					<a href="/support">Documentation</a>
					<a href="/support">Warranty</a>
					<a href="/support">Service Centers</a>
				</div>
			</div>
			
			<div class="footer-bottom">
				<p>&copy; 2025 MZL Machines. All rights reserved.</p>
			</div>
		</div>
	</footer>
</div>

<style>
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(:root) {
		--bg-dark: #050505;
		--bg-section: #0a0a0a;
		--bg-card: #111111;
		--accent-teal: #2dd4bf;
		--accent-mint: #5eead4;
		--accent-glow: rgba(45, 212, 191, 0.4);
		--text-primary: #fafafa;
		--text-secondary: #d4d4d8;
		--text-muted: #71717a;
		--glass: rgba(255, 255, 255, 0.03);
		--glass-border: rgba(255, 255, 255, 0.06);
		--radius: 16px;
		--radius-sm: 8px;
		
		font-family: 'Outfit', system-ui, -apple-system, sans-serif;
	}

	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body) {
		margin: 0;
		background: var(--bg-dark);
		color: var(--text-primary);
		min-height: 100vh;
		overflow-x: hidden;
	}

	.page {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	/* Apple-style Navigation */
	.topbar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 clamp(1rem, 4vw, 3rem);
		height: 52px;
		background: transparent;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.topbar.scrolled {
		background: rgba(10, 10, 10, 0.8);
		backdrop-filter: saturate(180%) blur(20px);
		-webkit-backdrop-filter: saturate(180%) blur(20px);
		border-bottom: 1px solid var(--glass-border);
	}

	.brand {
		font-weight: 700;
		font-size: 1.25rem;
		letter-spacing: -0.02em;
		color: var(--text-primary);
		text-decoration: none;
		display: inline-flex;
		gap: 0.5rem;
		align-items: center;
	}

	.brand-icon {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: var(--accent-teal);
		box-shadow: 0 0 20px var(--accent-glow), 0 0 40px var(--accent-glow);
		animation: pulse-glow 2s ease-in-out infinite;
	}

	@keyframes pulse-glow {
		0%, 100% { opacity: 1; transform: scale(1); }
		50% { opacity: 0.8; transform: scale(1.1); }
	}

	.product-nav {
		display: flex;
		gap: 0.25rem;
		align-items: center;
	}

	.product-nav a {
		color: var(--text-muted);
		text-decoration: none;
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
		font-weight: 500;
		border-radius: 999px;
		transition: all 0.2s ease;
		position: relative;
	}

	.product-nav a:hover {
		color: var(--text-primary);
	}

	.product-nav a.active {
		color: var(--text-primary);
		background: var(--glass);
	}

	.actions {
		display: flex;
		align-items: center;
	}

	.cta-nav {
		text-decoration: none;
		font-weight: 600;
		font-size: 0.875rem;
		padding: 0.5rem 1.25rem;
		border-radius: 999px;
		background: var(--accent-teal);
		color: #050505;
		transition: all 0.2s ease;
	}

	.cta-nav:hover {
		background: var(--accent-mint);
		transform: scale(1.02);
	}

	.content {
		flex: 1;
	}

	/* Footer */
	.footer {
		background: var(--bg-section);
		border-top: 1px solid var(--glass-border);
		padding: 4rem 0 2rem;
	}

	.footer-inner {
		width: min(1200px, 90vw);
		margin: 0 auto;
	}

	.footer-brand {
		margin-bottom: 3rem;
	}

	.footer-brand .mark {
		font-size: 1.5rem;
		font-weight: 700;
		margin-bottom: 0.5rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.footer-tagline {
		color: var(--text-muted);
		font-size: 1rem;
	}

	.footer-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
		gap: 2rem;
		margin-bottom: 3rem;
	}

	.footer-col h4 {
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--text-muted);
		margin-bottom: 1rem;
	}

	.footer-col a {
		display: block;
		color: var(--text-secondary);
		text-decoration: none;
		font-size: 0.9rem;
		padding: 0.35rem 0;
		transition: color 0.2s ease;
	}

	.footer-col a:hover {
		color: var(--text-primary);
	}

	.footer-bottom {
		padding-top: 2rem;
		border-top: 1px solid var(--glass-border);
	}

	.footer-bottom p {
		color: var(--text-muted);
		font-size: 0.8rem;
	}

	/* Mobile Responsiveness */
	@media (max-width: 768px) {
		.topbar {
			padding: 0 1rem;
		}

		.product-nav {
			display: none;
		}

		.brand {
			font-size: 1.1rem;
		}

		.footer-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
