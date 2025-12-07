<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	const products = [
		{
			id: 'm5',
			name: 'M5',
			tagline: 'Compact Powerhouse',
			description: 'Entry-level excellence. Perfect for small to medium spaces with uncompromising cleaning performance.',
			size: '51cm',
			image: '/m5/m5-w-b-51cm.png',
			gallery: ['/m5/m5-w-b-51cm-1.png', '/m5/m5-w-b-51cm-2.png', '/m5/m5-w-b-51cm-3.png'],
			specs: {
				'Cleaning Width': '51 cm',
				'Tank Capacity': '40L Clean / 45L Recovery',
				'Runtime': 'Up to 3 hours',
				'Coverage': '2,000 m²/hr'
			},
			color: '#2dd4bf'
		},
		{
			id: 'f30',
			name: 'F30',
			tagline: 'Precision Control',
			description: 'Ergonomic handlebar system with intuitive controls. Maneuverability meets power.',
			size: '43cm',
			image: '/f30/f30-w-b-43cm.png',
			gallery: ['/f30/f30-w-b-43cm-1.png', '/f30/f30-w-b-43cm-2.png', '/f30/f30-w-b-43cm-3.png'],
			specs: {
				'Cleaning Width': '43 cm',
				'Tank Capacity': '35L Clean / 40L Recovery',
				'Runtime': 'Up to 2.5 hours',
				'Coverage': '1,700 m²/hr'
			},
			color: '#22d3ee'
		},
		{
			id: 'f60',
			name: 'F60',
			tagline: 'Professional Grade',
			description: 'Built for demanding environments. Industrial reliability with commercial efficiency.',
			size: '51cm',
			image: '/f60/f60-a-w-bt-51cm.png',
			gallery: ['/f60/f60-a-w-bt-51cm-1.png', '/f60/f60-a-w-bt-51cm-2.png', '/f60/f60-a-w-bt-51cm-3.png'],
			specs: {
				'Cleaning Width': '51 cm',
				'Tank Capacity': '55L Clean / 60L Recovery',
				'Runtime': 'Up to 4 hours',
				'Coverage': '2,500 m²/hr'
			},
			color: '#a78bfa'
		},
		{
			id: 'm80',
			name: 'M80',
			tagline: 'Industrial Titan',
			description: 'Our flagship machine. Maximum coverage, maximum power, maximum results.',
			size: '66cm',
			image: '/m80/m80-a-r-o-66cm.png',
			gallery: ['/m80/m80-a-r-o-66cm-1.png', '/m80/m80-a-r-o-66cm-4.png'],
			specs: {
				'Cleaning Width': '66 cm',
				'Tank Capacity': '80L Clean / 90L Recovery',
				'Runtime': 'Up to 5 hours',
				'Coverage': '4,000 m²/hr'
			},
			color: '#f472b6'
		}
	];

	const comparisonSpecs = [
		{ label: 'Cleaning Width', m5: '51 cm', f30: '43 cm', f60: '51 cm', m80: '66 cm' },
		{ label: 'Clean Tank', m5: '40L', f30: '35L', f60: '55L', m80: '80L' },
		{ label: 'Recovery Tank', m5: '45L', f30: '40L', f60: '60L', m80: '90L' },
		{ label: 'Runtime', m5: '3 hrs', f30: '2.5 hrs', f60: '4 hrs', m80: '5 hrs' },
		{ label: 'Coverage', m5: '2,000 m²/hr', f30: '1,700 m²/hr', f60: '2,500 m²/hr', m80: '4,000 m²/hr' },
		{ label: 'Best For', m5: 'Small-Medium', f30: 'Tight Spaces', f60: 'Commercial', m80: 'Industrial' }
	];

	onMount(() => {
		// Hero animations
		const heroTl = gsap.timeline();
		heroTl
			.from('.hero-eyebrow', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' })
			.from('.hero-title span', { opacity: 0, y: 60, duration: 1, stagger: 0.1, ease: 'power3.out' }, '-=0.4')
			.from('.hero-subtitle', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' }, '-=0.6')
			.from('.hero-cta', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out' }, '-=0.4')
			.from('.hero-products img', { opacity: 0, y: 100, scale: 0.8, duration: 1, stagger: 0.15, ease: 'power3.out' }, '-=0.8')
			.from('.scroll-indicator', { opacity: 0, y: -20, duration: 0.6, ease: 'power3.out' }, '-=0.3');

		// Product section animations
		products.forEach((product, index) => {
			const section = document.getElementById(product.id);
			if (!section) return;

			// Parallax effect on product image
			gsap.to(section.querySelector('.product-image'), {
				yPercent: -20,
				ease: 'none',
				scrollTrigger: {
					trigger: section,
					start: 'top bottom',
					end: 'bottom top',
					scrub: 1
				}
			});

			// Content reveal animation
			gsap.from(section.querySelectorAll('.product-content > *'), {
				opacity: 0,
				y: 60,
				stagger: 0.1,
				duration: 1,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: section,
					start: 'top 70%',
					toggleActions: 'play none none reverse'
				}
			});

			// Specs animation
			gsap.from(section.querySelectorAll('.spec-item'), {
				opacity: 0,
				x: -30,
				stagger: 0.08,
				duration: 0.6,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: section.querySelector('.specs-grid'),
					start: 'top 80%',
					toggleActions: 'play none none reverse'
				}
			});

			// Scale effect on scroll
			gsap.from(section.querySelector('.product-image img'), {
				scale: 1.2,
				ease: 'none',
				scrollTrigger: {
					trigger: section,
					start: 'top bottom',
					end: 'top top',
					scrub: 1
				}
			});
		});

		// Comparison section animations
		gsap.from('.comparison-header', {
			opacity: 0,
			y: 50,
			duration: 1,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '#compare',
				start: 'top 70%',
				toggleActions: 'play none none reverse'
			}
		});

		gsap.from('.comparison-row', {
			opacity: 0,
			y: 30,
			stagger: 0.1,
			duration: 0.6,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: '.comparison-table',
				start: 'top 70%',
				toggleActions: 'play none none reverse'
			}
		});

		// CTA section animation
		gsap.from('.cta-section > *', {
			opacity: 0,
			y: 40,
			stagger: 0.15,
			duration: 0.8,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.cta-section',
				start: 'top 75%',
				toggleActions: 'play none none reverse'
			}
		});

		// Cleanup
		return () => {
			ScrollTrigger.getAll().forEach(t => t.kill());
		};
	});
</script>

<svelte:head>
	<title>MZL Machines | Industrial Floor Cleaning Solutions</title>
	<meta
		name="description"
		content="Professional floor scrubbers and cleaning machines. Engineered for pristine results. Explore M5, F30, F60, and M80 series."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="hero">
	<div class="hero-bg">
		<div class="gradient-orb orb-1"></div>
		<div class="gradient-orb orb-2"></div>
		<div class="gradient-orb orb-3"></div>
		<div class="grid-overlay"></div>
	</div>
	
	<div class="hero-content">
		<p class="hero-eyebrow">Introducing the MZL Series</p>
		<h1 class="hero-title">
			<span>Engineered</span>
			<span>for</span>
			<span class="accent">Pristine.</span>
		</h1>
		<p class="hero-subtitle">
			Professional floor cleaning machines designed for exceptional results.
			From compact workhorses to industrial titans.
		</p>
		<div class="hero-cta">
			<a href="#m5" class="btn-primary">Explore Products</a>
			<a href="#compare" class="btn-secondary">Compare Models</a>
		</div>
	</div>

	<div class="hero-products">
		{#each products as product}
			<img src={product.image} alt={product.name} />
		{/each}
	</div>

	<div class="scroll-indicator">
		<span>Scroll to explore</span>
		<div class="scroll-line"></div>
	</div>
</section>

<!-- Product Sections -->
{#each products as product, index}
	<section id={product.id} class="product-section" style="--accent-color: {product.color}">
		<div class="product-bg">
			<div class="product-glow" style="background: radial-gradient(ellipse at center, {product.color}15, transparent 70%)"></div>
		</div>
		
		<div class="product-grid">
			<div class="product-image">
				<img src={product.image} alt={product.name} />
			</div>
			
			<div class="product-content">
				<span class="product-badge">{product.size} cleaning width</span>
				<h2 class="product-name">{product.name}</h2>
				<p class="product-tagline">{product.tagline}</p>
				<p class="product-description">{product.description}</p>
				
				<div class="specs-grid">
					{#each Object.entries(product.specs) as [key, value]}
						<div class="spec-item">
							<span class="spec-label">{key}</span>
							<span class="spec-value">{value}</span>
						</div>
					{/each}
				</div>

				<div class="product-actions">
					<a href="/support" class="btn-primary">Get a Quote</a>
					<a href="#compare" class="btn-ghost">Compare</a>
				</div>
			</div>
		</div>

		<div class="product-gallery">
			{#each product.gallery as img, i}
				<div class="gallery-item" style="animation-delay: {i * 0.1}s">
					<img src={img} alt="{product.name} view {i + 1}" />
				</div>
			{/each}
		</div>
	</section>
{/each}

<!-- Comparison Section -->
<section id="compare" class="comparison-section">
	<div class="comparison-bg">
		<div class="gradient-orb orb-compare"></div>
	</div>

	<div class="comparison-container">
		<div class="comparison-header">
			<span class="section-eyebrow">Find Your Machine</span>
			<h2 class="section-title">Compare Models</h2>
			<p class="section-subtitle">Every MZL machine is built to deliver. Choose the one that fits your space.</p>
		</div>

		<div class="comparison-table">
			<div class="comparison-row header-row">
				<div class="comparison-cell label-cell"></div>
				{#each products as product}
					<div class="comparison-cell product-cell" style="--accent: {product.color}">
						<img src={product.image} alt={product.name} />
						<span class="model-name">{product.name}</span>
						<span class="model-tagline">{product.tagline}</span>
					</div>
				{/each}
			</div>

			{#each comparisonSpecs as spec}
				<div class="comparison-row">
					<div class="comparison-cell label-cell">{spec.label}</div>
					<div class="comparison-cell">{spec.m5}</div>
					<div class="comparison-cell">{spec.f30}</div>
					<div class="comparison-cell">{spec.f60}</div>
					<div class="comparison-cell">{spec.m80}</div>
				</div>
			{/each}

			<div class="comparison-row cta-row">
				<div class="comparison-cell label-cell"></div>
				{#each products as product}
					<div class="comparison-cell">
						<a href="/support" class="btn-small" style="--accent: {product.color}">Get Quote</a>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="cta-section">
	<div class="cta-bg">
		<div class="cta-gradient"></div>
	</div>
	
	<span class="cta-eyebrow">Ready to upgrade your cleaning operation?</span>
	<h2 class="cta-title">Find Your Machine</h2>
	<p class="cta-description">
		Our team will help you choose the perfect MZL machine for your facility.
		Get personalized recommendations and competitive pricing.
	</p>
	<div class="cta-buttons">
		<a href="/support" class="btn-primary btn-large">Request a Quote</a>
		<a href="/support" class="btn-secondary btn-large">Contact Sales</a>
	</div>
</section>

<style>
	/* Hero Section */
	.hero {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		padding: 8rem 2rem 8rem;
		overflow: hidden;
	}

	.hero-bg {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}

	.gradient-orb {
		position: absolute;
		border-radius: 50%;
		filter: blur(80px);
		opacity: 0.5;
	}

	.orb-1 {
		width: 600px;
		height: 600px;
		background: radial-gradient(circle, rgba(45, 212, 191, 0.3), transparent 70%);
		top: -200px;
		left: -200px;
	}

	.orb-2 {
		width: 400px;
		height: 400px;
		background: radial-gradient(circle, rgba(167, 139, 250, 0.25), transparent 70%);
		top: 30%;
		right: -100px;
	}

	.orb-3 {
		width: 500px;
		height: 500px;
		background: radial-gradient(circle, rgba(34, 211, 238, 0.2), transparent 70%);
		bottom: -200px;
		left: 30%;
	}

	.grid-overlay {
		position: absolute;
		inset: 0;
		background-image: 
			linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
			linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
		background-size: 60px 60px;
		mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
	}

	.hero-content {
		text-align: center;
		max-width: 900px;
		z-index: 1;
	}

	.hero-eyebrow {
		font-size: 0.875rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.2em;
		color: var(--accent-teal);
		margin-bottom: 1.5rem;
	}

	.hero-title {
		font-size: clamp(3rem, 10vw, 7rem);
		font-weight: 800;
		line-height: 1;
		letter-spacing: -0.03em;
		margin-bottom: 1.5rem;
	}

	.hero-title span {
		display: inline-block;
	}

	.hero-title .accent {
		background: linear-gradient(135deg, var(--accent-teal), var(--accent-mint));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.hero-subtitle {
		font-size: clamp(1rem, 2vw, 1.25rem);
		color: var(--text-secondary);
		max-width: 600px;
		margin: 0 auto 2.5rem;
		line-height: 1.6;
	}

	.hero-cta {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.hero-products {
		display: flex;
		justify-content: center;
		gap: clamp(1rem, 4vw, 3rem);
		margin-top: 4rem;
		margin-bottom: 6rem;
		z-index: 1;
		flex-wrap: wrap;
	}

	.hero-products img {
		width: clamp(100px, 15vw, 180px);
		height: auto;
		object-fit: contain;
		background: rgba(255, 255, 255, 0.95);
		border-radius: 16px;
		padding: 1rem;
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
		transition: transform 0.4s ease, box-shadow 0.4s ease;
	}

	.hero-products img:hover {
		transform: translateY(-10px) scale(1.05);
		box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2);
	}

	.scroll-indicator {
		position: absolute;
		bottom: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
		color: var(--text-muted);
		font-size: 0.75rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		z-index: 2;
	}

	.scroll-line {
		width: 1px;
		height: 40px;
		background: linear-gradient(to bottom, var(--accent-teal), transparent);
		animation: scroll-pulse 2s ease-in-out infinite;
	}

	@keyframes scroll-pulse {
		0%, 100% { opacity: 0.3; transform: scaleY(1); }
		50% { opacity: 1; transform: scaleY(1.2); }
	}

	/* Buttons */
	.btn-primary {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.875rem 2rem;
		font-size: 1rem;
		font-weight: 600;
		text-decoration: none;
		border-radius: 999px;
		background: var(--accent-teal);
		color: #050505;
		transition: all 0.3s ease;
		border: none;
		cursor: pointer;
	}

	.btn-primary:hover {
		background: var(--accent-mint);
		transform: translateY(-2px);
		box-shadow: 0 10px 40px rgba(45, 212, 191, 0.3);
	}

	.btn-secondary {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.875rem 2rem;
		font-size: 1rem;
		font-weight: 600;
		text-decoration: none;
		border-radius: 999px;
		background: transparent;
		color: var(--text-primary);
		border: 1px solid var(--glass-border);
		transition: all 0.3s ease;
	}

	.btn-secondary:hover {
		background: var(--glass);
		border-color: rgba(255, 255, 255, 0.15);
	}

	.btn-ghost {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.875rem 2rem;
		font-size: 1rem;
		font-weight: 600;
		text-decoration: none;
		color: var(--text-secondary);
		transition: all 0.3s ease;
	}

	.btn-ghost:hover {
		color: var(--text-primary);
	}

	.btn-large {
		padding: 1rem 2.5rem;
		font-size: 1.1rem;
	}

	.btn-small {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.5rem 1.25rem;
		font-size: 0.875rem;
		font-weight: 600;
		text-decoration: none;
		border-radius: 999px;
		background: var(--accent, var(--accent-teal));
		color: #050505;
		transition: all 0.3s ease;
	}

	.btn-small:hover {
		filter: brightness(1.1);
		transform: translateY(-1px);
	}

	/* Product Sections */
	.product-section {
		min-height: 100vh;
		position: relative;
		padding: 8rem 2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow: hidden;
	}

	.product-bg {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}

	.product-glow {
		position: absolute;
		inset: 0;
		opacity: 0.6;
	}

	.product-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		max-width: 1400px;
		margin: 0 auto;
		align-items: center;
	}

	.product-image {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.product-image img {
		max-width: 100%;
		max-height: 500px;
		object-fit: contain;
		filter: drop-shadow(0 30px 60px rgba(0, 0, 0, 0.5));
	}

	.product-content {
		padding: 2rem 0;
	}

	.product-badge {
		display: inline-block;
		padding: 0.5rem 1rem;
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		background: var(--glass);
		border: 1px solid var(--glass-border);
		border-radius: 999px;
		color: var(--accent-color);
		margin-bottom: 1.5rem;
	}

	.product-name {
		font-size: clamp(4rem, 12vw, 8rem);
		font-weight: 900;
		letter-spacing: -0.04em;
		line-height: 0.9;
		margin-bottom: 0.5rem;
		background: linear-gradient(135deg, var(--text-primary), var(--accent-color));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.product-tagline {
		font-size: clamp(1.5rem, 4vw, 2.5rem);
		font-weight: 600;
		color: var(--text-secondary);
		margin-bottom: 1rem;
		letter-spacing: -0.02em;
	}

	.product-description {
		font-size: 1.125rem;
		color: var(--text-muted);
		line-height: 1.7;
		margin-bottom: 2rem;
		max-width: 500px;
	}

	.specs-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		margin-bottom: 2.5rem;
	}

	.spec-item {
		padding: 1rem;
		background: var(--glass);
		border: 1px solid var(--glass-border);
		border-radius: var(--radius-sm);
	}

	.spec-label {
		display: block;
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--text-muted);
		margin-bottom: 0.25rem;
	}

	.spec-value {
		font-size: 1.125rem;
		font-weight: 600;
		color: var(--text-primary);
	}

	.product-actions {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.product-gallery {
		display: flex;
		justify-content: center;
		gap: 1.5rem;
		margin-top: 4rem;
		flex-wrap: wrap;
	}

	.gallery-item {
		width: 150px;
		height: 150px;
		padding: 1rem;
		background: rgba(255, 255, 255, 0.95);
		border: 1px solid var(--glass-border);
		border-radius: var(--radius);
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.3s ease;
	}

	.gallery-item:hover {
		transform: translateY(-5px);
		border-color: var(--accent-color);
		box-shadow: 0 10px 40px rgba(45, 212, 191, 0.1);
	}

	.gallery-item img {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
	}

	/* Comparison Section */
	.comparison-section {
		position: relative;
		padding: 8rem 2rem;
		overflow: hidden;
	}

	.comparison-bg {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}

	.orb-compare {
		width: 800px;
		height: 800px;
		background: radial-gradient(circle, rgba(45, 212, 191, 0.1), transparent 60%);
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.comparison-container {
		max-width: 1200px;
		margin: 0 auto;
		position: relative;
		z-index: 1;
	}

	.comparison-header {
		text-align: center;
		margin-bottom: 4rem;
	}

	.section-eyebrow {
		display: block;
		font-size: 0.875rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.2em;
		color: var(--accent-teal);
		margin-bottom: 1rem;
	}

	.section-title {
		font-size: clamp(2.5rem, 6vw, 4rem);
		font-weight: 800;
		letter-spacing: -0.03em;
		margin-bottom: 1rem;
	}

	.section-subtitle {
		font-size: 1.125rem;
		color: var(--text-muted);
		max-width: 600px;
		margin: 0 auto;
	}

	.comparison-table {
		background: var(--glass);
		border: 1px solid var(--glass-border);
		border-radius: var(--radius);
		overflow: hidden;
	}

	.comparison-row {
		display: grid;
		grid-template-columns: 1.2fr repeat(4, 1fr);
		border-bottom: 1px solid var(--glass-border);
	}

	.comparison-row:last-child {
		border-bottom: none;
	}

	.comparison-row.header-row {
		background: rgba(255, 255, 255, 0.02);
	}

	.comparison-cell {
		padding: 1.25rem 1rem;
		text-align: center;
		font-size: 0.95rem;
		color: var(--text-secondary);
		border-right: 1px solid var(--glass-border);
	}

	.comparison-cell:last-child {
		border-right: none;
	}

	.comparison-cell.label-cell {
		text-align: left;
		font-weight: 600;
		color: var(--text-primary);
		background: rgba(255, 255, 255, 0.02);
	}

	.comparison-cell.product-cell {
		padding: 2rem 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
	}

	.comparison-cell.product-cell img {
		width: 80px;
		height: 80px;
		object-fit: contain;
		mix-blend-mode: multiply;
		border-radius: var(--radius-sm);
	}

	.model-name {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--accent);
	}

	.model-tagline {
		font-size: 0.8rem;
		color: var(--text-muted);
	}

	.cta-row .comparison-cell {
		padding: 1.5rem 1rem;
	}

	/* CTA Section */
	.cta-section {
		position: relative;
		padding: 8rem 2rem;
		text-align: center;
		overflow: hidden;
	}

	.cta-bg {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}

	.cta-gradient {
		position: absolute;
		inset: 0;
		background: 
			radial-gradient(ellipse at 30% 50%, rgba(45, 212, 191, 0.15), transparent 50%),
			radial-gradient(ellipse at 70% 50%, rgba(167, 139, 250, 0.1), transparent 50%);
	}

	.cta-eyebrow {
		display: block;
		font-size: 0.875rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: var(--accent-teal);
		margin-bottom: 1.5rem;
	}

	.cta-title {
		font-size: clamp(2.5rem, 6vw, 4.5rem);
		font-weight: 800;
		letter-spacing: -0.03em;
		margin-bottom: 1rem;
	}

	.cta-description {
		font-size: 1.125rem;
		color: var(--text-muted);
		max-width: 600px;
		margin: 0 auto 2.5rem;
		line-height: 1.7;
	}

	.cta-buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	/* Responsive */
	@media (max-width: 1024px) {
		.product-grid {
			grid-template-columns: 1fr;
			gap: 3rem;
		}

		.product-image {
			order: -1;
		}

		.product-content {
			text-align: center;
		}

		.product-description {
			margin-left: auto;
			margin-right: auto;
		}

		.specs-grid {
			max-width: 400px;
			margin-left: auto;
			margin-right: auto;
		}

		.product-actions {
			justify-content: center;
		}
	}

	@media (max-width: 768px) {
		.hero {
			padding: 6rem 1.5rem 6rem;
		}

		.hero-products {
			gap: 1rem;
			margin-bottom: 5rem;
		}

		.hero-products img {
			width: 80px;
			padding: 0.75rem;
			border-radius: 12px;
		}

		.product-section {
			padding: 5rem 1.5rem;
		}

		.comparison-row {
			grid-template-columns: 1fr;
		}

		.comparison-cell {
			border-right: none;
			border-bottom: 1px solid var(--glass-border);
		}

		.comparison-cell.label-cell {
			background: rgba(45, 212, 191, 0.1);
			text-align: center;
		}

		.header-row {
			display: none;
		}

		.cta-row {
			display: none;
		}

		.specs-grid {
			grid-template-columns: 1fr;
		}

		.gallery-item {
			width: 100px;
			height: 100px;
		}

		.cta-section {
			padding: 5rem 1.5rem;
		}
	}
</style>
