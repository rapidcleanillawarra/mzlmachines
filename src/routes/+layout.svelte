<script lang="ts">
	import { page } from '$app/stores';
	import favicon from '$lib/assets/favicon.svg';

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/features', label: 'Features' },
		{ href: '/workflows', label: 'Workflows' },
		{ href: '/pricing', label: 'Pricing' },
		{ href: '/support', label: 'Support' }
	];

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>MZL Machines | Product automation platform</title>
	<meta
		name="description"
		content="Landing and feature pages for showcasing the MZL Machines product platform."
	/>
</svelte:head>

<div class="page">
	<header class="topbar">
		<a class="brand" href="/">MZL Machines</a>
		<nav class="nav-links">
			{#each navLinks as link}
				<a
					href={link.href}
					class:selected={$page.url.pathname === link.href}
					aria-current={$page.url.pathname === link.href ? 'page' : undefined}
					data-sveltekit-preload-data
				>
					{link.label}
				</a>
			{/each}
		</nav>
		<div class="actions">
			<a class="ghost" href="/features">See product</a>
			<a class="primary" href="/pricing">Get started</a>
		</div>
	</header>

	<main class="content">
		{@render children()}
	</main>

	<footer class="footer">
		<div class="shell footer-grid">
			<div>
				<div class="brand mark">MZL Machines</div>
				<p class="muted">Build, automate, and measure the feature your users care about.</p>
			</div>
			<div class="footer-links">
				<a href="/features">Features</a>
				<a href="/workflows">Workflows</a>
				<a href="/pricing">Pricing</a>
				<a href="/support">Support</a>
			</div>
		</div>
	</footer>
</div>

<style>
	:global(:root) {
		color-scheme: light;
		--bg: #05060b;
		--card: #0c1021;
		--panel: #0f1326;
		--surface: #141a33;
		--accent: #73f3c4;
		--accent-strong: #46d69e;
		--muted: #9fb3ce;
		--text: #e9eef7;
		--border: rgba(255, 255, 255, 0.06);
		--glow: 0 20px 80px rgba(115, 243, 196, 0.12);
		--radius: 14px;
		font-family: 'Inter', 'SF Pro Display', system-ui, -apple-system, sans-serif;
	}

	:global(body) {
		margin: 0;
		background:
			radial-gradient(circle at 10% 20%, rgba(115, 243, 196, 0.08), transparent 25%),
			radial-gradient(circle at 80% 0%, rgba(87, 162, 255, 0.08), transparent 22%),
			var(--bg);
		color: var(--text);
		min-height: 100vh;
	}

	.page {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.topbar {
		position: sticky;
		top: 0;
		z-index: 10;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 1.5rem;
		backdrop-filter: blur(12px);
		background: rgba(5, 6, 11, 0.75);
		border-bottom: 1px solid var(--border);
	}

	.brand {
		font-weight: 700;
		letter-spacing: -0.01em;
		color: var(--text);
		text-decoration: none;
		display: inline-flex;
		gap: 0.35rem;
		align-items: center;
	}

	.brand::before {
		content: '';
		width: 10px;
		height: 10px;
		border-radius: 999px;
		background: var(--accent);
		box-shadow: 0 0 18px rgba(115, 243, 196, 0.7);
	}

	.nav-links {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		flex-wrap: wrap;
	}

	.nav-links a {
		color: var(--muted);
		text-decoration: none;
		padding: 0.55rem 0.75rem;
		border-radius: 999px;
		transition: color 0.15s ease, background 0.15s ease, transform 0.15s ease;
	}

	.nav-links a:hover {
		color: var(--text);
		background: rgba(255, 255, 255, 0.06);
		transform: translateY(-1px);
	}

	.nav-links a.selected {
		color: var(--text);
		background: rgba(115, 243, 196, 0.12);
		box-shadow: var(--glow);
	}

	.actions {
		display: flex;
		gap: 0.6rem;
		align-items: center;
	}

	.actions a {
		text-decoration: none;
		font-weight: 600;
		border-radius: 999px;
		padding: 0.6rem 1rem;
	}

	.actions .ghost {
		color: var(--text);
		border: 1px solid var(--border);
		background: rgba(255, 255, 255, 0.04);
	}

	.actions .ghost:hover {
		border-color: rgba(255, 255, 255, 0.18);
	}

	.actions .primary {
		background: linear-gradient(120deg, var(--accent), var(--accent-strong));
		color: #04130d;
		box-shadow: 0 12px 40px rgba(115, 243, 196, 0.4);
	}

	.actions .primary:hover {
		transform: translateY(-1px);
	}

	.content {
		flex: 1;
	}

	.footer {
		border-top: 1px solid var(--border);
		background: rgba(10, 12, 22, 0.9);
		padding: 2rem 0 2.5rem;
	}

	.shell {
		width: min(1100px, 92vw);
		margin: 0 auto;
	}

	.footer-grid {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1.5rem;
		flex-wrap: wrap;
	}

	.footer .mark {
		margin-bottom: 0.35rem;
	}

	.footer .muted {
		max-width: 360px;
	}

	.footer-links {
		display: grid;
		gap: 0.5rem;
	}

	.footer a {
		color: var(--muted);
		text-decoration: none;
	}

	.footer a:hover {
		color: var(--text);
	}

	:global(.section) {
		padding: clamp(2rem, 4vw, 3.2rem) clamp(1.25rem, 5vw, 2rem);
	}

	:global(.shell) {
		width: min(1100px, 92vw);
		margin: 0 auto;
	}

	:global(.eyebrow) {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		font-size: 0.72rem;
		color: var(--muted);
	}

	:global(.eyebrow)::before {
		content: '';
		width: 26px;
		height: 1px;
		background: var(--accent);
		opacity: 0.7;
	}

	:global(.title) {
		font-size: clamp(2rem, 4vw, 3rem);
		margin: 0.35rem 0;
		letter-spacing: -0.02em;
	}

	:global(.muted) {
		color: var(--muted);
		margin: 0;
	}

	:global(.pill) {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		padding: 0.35rem 0.7rem;
		border-radius: 999px;
		background: rgba(255, 255, 255, 0.06);
		color: var(--text);
		border: 1px solid var(--border);
	}

	:global(.badge) {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		padding: 0.5rem 0.75rem;
		border-radius: 12px;
		background: rgba(115, 243, 196, 0.12);
		color: var(--text);
		border: 1px solid rgba(115, 243, 196, 0.4);
	}

	:global(.grid) {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 1rem;
	}

	:global(.card) {
		background: linear-gradient(145deg, var(--card), var(--panel));
		border: 1px solid var(--border);
		border-radius: var(--radius);
		padding: 1.2rem;
		box-shadow: var(--glow);
	}

	:global(.card h3) {
		margin: 0 0 0.35rem;
	}

	:global(.card p) {
		margin: 0;
		color: var(--muted);
	}

	:global(.hero) {
		padding: clamp(2.5rem, 6vw, 4rem) 0 1rem;
	}

	:global(.hero-grid) {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.5rem;
		align-items: center;
	}

	:global(.cta-row) {
		display: flex;
		gap: 0.85rem;
		flex-wrap: wrap;
		margin-top: 1.25rem;
	}

	:global(.cta) {
		text-decoration: none;
		padding: 0.9rem 1.25rem;
		border-radius: 12px;
		font-weight: 650;
		border: 1px solid var(--border);
		color: var(--text);
	}

	:global(.cta.primary) {
		background: linear-gradient(120deg, var(--accent), var(--accent-strong));
		color: #04130d;
		box-shadow: var(--glow);
	}

	:global(.cta.secondary) {
		background: rgba(255, 255, 255, 0.05);
	}

	:global(.list) {
		display: grid;
		gap: 0.4rem;
		padding: 0;
		margin: 0;
		list-style: none;
	}

	:global(.list li) {
		display: flex;
		gap: 0.5rem;
		align-items: flex-start;
		color: var(--muted);
	}

	:global(.list li::before) {
		content: '•';
		color: var(--accent);
		margin-top: 0.1rem;
	}

	@media (max-width: 720px) {
		.topbar {
			flex-wrap: wrap;
			gap: 0.75rem;
		}

		.nav-links {
			width: 100%;
			justify-content: space-between;
		}

		.actions {
			width: 100%;
			justify-content: flex-start;
		}
	}
</style>
