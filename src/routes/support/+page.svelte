<svelte:head>
	<title>Support | MZL Machines</title>
	<meta name="description" content="Contact the MZL Machines team for quotes, demos, and support." />
</svelte:head>

<section class="support">
	<div class="card">
		<h1>Support & Contact</h1>
		<p>
			Thanks for your interest in MZL Machines. For quotes, demos or service requests, please contact
			us via the details below and we’ll respond promptly.
		</p>

		<div class="grid">
			<div>
				<h2>Sales & Quotes</h2>
				<ul>
					<li>Email: <a href="mailto:sales@rapidcleanillawarra.com.au">sales@rapidcleanillawarra.com.au</a></li>
					<li>Phone: <a href="tel:+61200000000">+61 2 0000 0000</a></li>
				</ul>
			</div>
			<div>
				<h2>Service & Support</h2>
				<ul>
					<li>Email: <a href="mailto:support@rapidcleanillawarra.com.au">support@rapidcleanillawarra.com.au</a></li>
					<li>Phone: <a href="tel:+61200000000">+61 2 0000 0000</a></li>
				</ul>
			</div>
		</div>
	</div>
</section>

<style>
	.support {
		min-height: 70vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 6rem 1.5rem;
	}

	.card {
		max-width: 720px;
		width: 100%;
		background: rgba(255, 255, 255, 0.04);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 16px;
		padding: 2rem;
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
	}

	h1 {
		font-size: clamp(2rem, 4vw, 2.6rem);
		margin-bottom: 0.75rem;
	}

	p {
		color: var(--text-secondary);
		line-height: 1.6;
		margin-bottom: 2rem;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 1.5rem;
	}

	h2 {
		font-size: 1.2rem;
		margin-bottom: 0.5rem;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
	}

	a {
		color: var(--accent-teal);
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}
</style>


