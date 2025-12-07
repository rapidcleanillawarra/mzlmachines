<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	// ============================================
	// IMAGE CONFIGURATION - Replace paths as needed
	// ============================================
	const images = {
		hero: {
			main: 'https://www.rapidsupplies.com.au/assets/images/mzl_f30.png',
			environment: '/f30/f30-hero-environment-retail.png'
		},
		highlights: {
			coverage: '/f30/f30-highlights-coverage.png',
			runtime: '/f30/f30-highlights-runtime.png',
			compact: '/f30/f30-highlights-size-format.png',
			controls: '/f30/f30-highlights-ease-of-use.png',
			quiet: '/f30/f30-highlights-safety-noise.png',
			facilities: '/f30/f30-highlights-best-for.png'
		},
		usecases: {
			supermarket: '/f30/f30-usecase-supermarket.png',
			schools: '/f30/f30-usecase-schools.png',
			healthcare: '/f30/f30-usecase-healthcare.png',
			hospitality: '/f30/f30-usecase-hospitality.png',
			warehouse: '/f30/f30-usecase-warehouse.png',
			office: '/f30/f30-usecase-office.png'
		},
		performance: {
			scrubbing: '/f30/f30-performance-scrubbing-power.png',
			water: '/f30/f30-performance-water-chemical.png',
			vacuum: '/f30/f30-performance-vacuum-drying.png',
			beforeAfter: '/f30/f30-performance-before-after-strip.png'
		},
		battery: {
			pack: '/f30/f30-battery-pack.png',
			charging: '/f30/f30-battery-charging.png',
			runtime: '/f30/f30-battery-runtime-graphic.png'
		},
		easeOfUse: {
			controlPanel: '/f30/f30-easeofuse-control-panel.png',
			operator: '/f30/f30-easeofuse-operator.png',
			callouts: '/f30/f30-easeofuse-control-callouts.png'
		},
		safety: {
			dryFloor: '/f30/f30-safety-dry-floor.png',
			tankCleaning: '/f30/f30-hygiene-tank-cleaning.png',
			certifications: '/f30/f30-compliance-certifications.png'
		},
		dimensions: {
			top: '/f30/f30-dimensions-top.png',
			side: '/f30/f30-dimensions-side.png',
			narrowAisle: '/f30/f30-footprint-narrow-aisle.png'
		},
		included: {
			kit: '/f30/f30-included-kit.png'
		},
		accessories: {
			brushes: '/f30/f30-accessories-brushes-pads.png',
			squeegee: '/f30/f30-accessories-squeegee-blades.png',
			chemicals: '/f30/f30-accessories-chemicals.png',
			handling: '/f30/f30-accessories-handling-storage.png'
		}
	};

	// Key specifications
	const keyStats = [
		{ label: 'Cleaning width', value: '460 mm' },
		{ label: 'Productivity', value: 'up to 1,600 m²/h' },
		{ label: 'Tanks', value: '27 L / 30 L' },
		{ label: 'Runtime (ECO)', value: 'up to 5.5 hours' }
	];

	// Highlights data
	const highlights = [
		{
			title: 'Coverage',
			subtitle: 'Up to 1,600 m²/h',
			description: 'Clean up to 1,600 m² per hour, ideal for keeping medium-size facilities looking fresh with fewer passes.',
			image: images.highlights.coverage
		},
		{
			title: 'Runtime',
			subtitle: 'Up to 5.5 hours runtime',
			description: 'Up to 5.5 hours of runtime in ECO mode lets operators cover multiple zones on a single charge.',
			image: images.highlights.runtime
		},
		{
			title: 'Compact Design',
			subtitle: 'Walk-behind format',
			description: 'Slim body and 460 mm cleaning width make it easy to pass through standard internal doorways and work in narrow aisles.',
			image: images.highlights.compact
		},
		{
			title: 'Simple Controls',
			subtitle: 'Intelligent operation',
			description: 'One-click start and an intelligent control panel help new operators get productive with minimal training.',
			image: images.highlights.controls
		},
		{
			title: 'Quiet Operation',
			subtitle: 'Battery powered cleaning',
			description: 'Maintenance-free battery power eliminates trailing cords and supports low-noise daytime cleaning.',
			image: images.highlights.quiet
		},
		{
			title: 'Built for Business',
			subtitle: 'Busy facilities',
			description: 'Designed for frequent use in supermarkets, schools, healthcare, hospitality venues, warehouses and office buildings.',
			image: images.highlights.facilities
		}
	];

	// Use cases data
	const usecases = [
		{
			title: 'Supermarkets & retail stores',
			description: 'Entrances, supermarket aisles, checkout lanes and back-of-house storage areas.',
			image: images.usecases.supermarket
		},
		{
			title: 'Schools, universities & training centres',
			description: 'Corridors, classrooms, staff rooms and cafeterias.',
			image: images.usecases.schools
		},
		{
			title: 'Healthcare & aged care facilities',
			description: 'Patient rooms, corridors and common areas where dry, safe floors are essential.',
			image: images.usecases.healthcare
		},
		{
			title: 'Hotels, hospitality & cafés',
			description: 'Lobbies, function rooms, dining spaces and back-of-house service corridors.',
			image: images.usecases.hospitality
		},
		{
			title: 'Warehouses, light industrial & workshops',
			description: 'Cleaning around racking, production zones, packing benches and loading areas.',
			image: images.usecases.warehouse
		},
		{
			title: 'Offices & public buildings',
			description: 'Foyers, amenities, circulation spaces and shared staff areas.',
			image: images.usecases.office
		}
	];

	// Technical specifications
	const specifications = {
		performance: [
			{ label: 'Cleaning width', value: '460 mm' },
			{ label: 'Theoretical productivity', value: 'up to 1,600 m²/h' }
		],
		tanks: [
			{ label: 'Solution tank capacity', value: '27 L' },
			{ label: 'Recovery tank capacity', value: '30 L' }
		],
		power: [
			{ label: 'System voltage', value: '24 V (2 × 12 V)' },
			{ label: 'Battery type & capacity', value: 'Maintenance-free, 85 Ah' },
			{ label: 'Max runtime (ECO)', value: 'up to 5.5 hours' }
		],
		motors: [
			{ label: 'Brush motor power', value: '350 W' },
			{ label: 'Vacuum motor power', value: '310 W' }
		],
		brush: [
			{ label: 'Brush type', value: 'Disc' },
			{ label: 'Brush width', value: '460 mm' },
			{ label: 'Squeegee width', value: '620 mm' },
			{ label: 'Approx. brush pressure', value: '23 kg' }
		],
		dimensions: [
			{ label: 'Dimensions (L × W × H)', value: '900 × 575 × 1,200 mm' },
			{ label: 'Weight (with batteries)', value: '116 kg' }
		],
		warranty: [
			{ label: 'Machine warranty', value: '1 year warranty with ongoing service support' }
		]
	};

	// Accessories data
	const accessories = [
		{
			title: 'Brushes & pads',
			description: 'Soft, medium and more aggressive brush and pad options for different floor types and soil levels.',
			image: images.accessories.brushes
		},
		{
			title: 'Squeegee blades',
			description: 'Standard blades for everyday sites and oil-resistant options for workshops and industrial environments.',
			image: images.accessories.squeegee
		},
		{
			title: 'Cleaning chemicals',
			description: 'Neutral detergents and degreasers formulated for auto-scrubbers on tiles, vinyl and sealed concrete.',
			image: images.accessories.chemicals
		},
		{
			title: 'Handling & storage',
			description: 'Ramps, covers and other accessories to make transport and storage between sites easier.',
			image: images.accessories.handling
		}
	];

	onMount(() => {
		// Hero animations
		const heroTl = gsap.timeline();
		heroTl
			.fromTo('.hero-badge', 
				{ opacity: 0, y: 20 }, 
				{ opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
			.fromTo('.hero-title', 
				{ opacity: 0, y: 40 }, 
				{ opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.3')
			.fromTo('.hero-tagline', 
				{ opacity: 0, y: 30 }, 
				{ opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5')
			.fromTo('.key-stat', 
				{ opacity: 0, y: 20 }, 
				{ opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: 'power3.out' }, '-=0.4')
			.fromTo('.hero-cta-group', 
				{ opacity: 0, y: 20 }, 
				{ opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
			.fromTo('.hero-image', 
				{ opacity: 0, scale: 0.9 }, 
				{ opacity: 1, scale: 1, duration: 1, ease: 'power3.out' }, '-=0.6');

		// Section header animations with ScrollTrigger
		const sections = document.querySelectorAll('.animate-section');
		sections.forEach((section) => {
			const items = section.querySelectorAll('.animate-item');
			if (items.length > 0) {
				gsap.fromTo(items,
					{ opacity: 0, y: 50 },
					{
						opacity: 1,
						y: 0,
						stagger: 0.1,
						duration: 0.8,
						ease: 'power3.out',
						scrollTrigger: {
							trigger: section,
							start: 'top 85%',
							once: true
						}
					}
				);
			}
		});

		// Highlight cards animation
		gsap.fromTo('.highlight-card',
			{ opacity: 0, y: 60 },
			{
				opacity: 1,
				y: 0,
				stagger: 0.08,
				duration: 0.7,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: '.highlights-grid',
					start: 'top 85%',
					once: true
				}
			}
		);

		// Use case cards animation
		gsap.fromTo('.usecase-card',
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				stagger: 0.1,
				duration: 0.7,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: '.usecases-grid',
					start: 'top 85%',
					once: true
				}
			}
		);

		// Performance blocks animation
		document.querySelectorAll('.performance-block').forEach((block) => {
			gsap.fromTo(block,
				{ opacity: 0, y: 40 },
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: block,
						start: 'top 85%',
						once: true
					}
				}
			);
		});

		// Battery specs animation
		gsap.fromTo('.battery-spec',
			{ opacity: 0, y: 30 },
			{
				opacity: 1,
				y: 0,
				stagger: 0.1,
				duration: 0.6,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: '.battery-specs',
					start: 'top 85%',
					once: true
				}
			}
		);

		// Ease of use cards animation
		gsap.fromTo('.easeofuse-card',
			{ opacity: 0, y: 40 },
			{
				opacity: 1,
				y: 0,
				stagger: 0.1,
				duration: 0.6,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: '.easeofuse-grid',
					start: 'top 85%',
					once: true
				}
			}
		);

		// Safety cards animation
		gsap.fromTo('.safety-card',
			{ opacity: 0, y: 40 },
			{
				opacity: 1,
				y: 0,
				stagger: 0.1,
				duration: 0.6,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: '.safety-grid',
					start: 'top 85%',
					once: true
				}
			}
		);

		// Dimension items animation
		gsap.fromTo('.dimension-item',
			{ opacity: 0, x: -30 },
			{
				opacity: 1,
				x: 0,
				stagger: 0.1,
				duration: 0.6,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: '.dimensions-content',
					start: 'top 85%',
					once: true
				}
			}
		);

		// Accessory cards animation
		gsap.fromTo('.accessory-card',
			{ opacity: 0, y: 40 },
			{
				opacity: 1,
				y: 0,
				stagger: 0.1,
				duration: 0.6,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: '.accessories-grid',
					start: 'top 85%',
					once: true
				}
			}
		);

		// Spec table animation
		gsap.fromTo('.spec-category',
			{ opacity: 0, x: -30 },
			{
				opacity: 1,
				x: 0,
				stagger: 0.1,
				duration: 0.6,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: '.specs-table',
					start: 'top 85%',
					once: true
				}
			}
		);

		// CTA section animation
		gsap.fromTo('.cta-section > *',
			{ opacity: 0, y: 40 },
			{
				opacity: 1,
				y: 0,
				stagger: 0.15,
				duration: 0.8,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: '.cta-section',
					start: 'top 85%',
					once: true
				}
			}
		);

		// Cleanup
		return () => {
			ScrollTrigger.getAll().forEach(t => t.kill());
		};
	});
</script>

<svelte:head>
	<title>MZL F30 Mini Battery Walk-Behind Floor Scrubber | MZL Machines</title>
	<meta
		name="description"
		content="MZL F30 - Big scrubber performance in a compact 460 mm footprint. Up to 1,600 m²/h productivity with 5.5 hours runtime. Perfect for retail, healthcare, hospitality and more."
	/>
</svelte:head>

<!-- Section 1: Hero -->
<section class="hero">
	<div class="hero-bg">
		<div class="gradient-orb orb-1"></div>
		<div class="gradient-orb orb-2"></div>
		<div class="grid-overlay"></div>
	</div>

	<div class="hero-container">
		<div class="hero-content">
			<span class="hero-badge animate-item">MZL F30 Series</span>
			<h1 class="hero-title">
				Mini Battery<br />
				<span class="accent">Walk-Behind</span><br />
				Floor Scrubber
			</h1>
			<p class="hero-tagline">Big scrubber performance in a compact 460 mm footprint.</p>
			
			<div class="key-stats">
				{#each keyStats as stat}
					<div class="key-stat">
						<span class="stat-value">{stat.value}</span>
						<span class="stat-label">{stat.label}</span>
					</div>
				{/each}
			</div>

			<div class="hero-cta-group">
				<a href="/support" class="btn-primary">Get a Quote</a>
				<a href="/support" class="btn-secondary">Book a Demo</a>
				<a href="/support" class="btn-ghost">
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
						<polyline points="7,10 12,15 17,10"/>
						<line x1="12" y1="15" x2="12" y2="3"/>
					</svg>
					Download Brochure
				</a>
			</div>
		</div>

		<div class="hero-image">
			<img src={images.hero.main} alt="MZL F30 Floor Scrubber" />
		</div>
	</div>

	<div class="scroll-indicator">
		<span>Scroll to explore</span>
		<div class="scroll-line"></div>
	</div>
</section>

<!-- Section 2: Highlights Strip -->
<section class="section highlights-section animate-section">
	<div class="section-container">
		<div class="section-header animate-item">
			<span class="section-eyebrow">Key Features</span>
			<h2 class="section-title">Key features of the MZL F30 mini floor scrubber</h2>
		</div>

		<div class="highlights-grid">
			{#each highlights as highlight, i}
				<div class="highlight-card" style="animation-delay: {i * 0.05}s">
					<div class="highlight-image">
						<img src={highlight.image} alt={highlight.title} />
					</div>
					<div class="highlight-content">
						<h3 class="highlight-title">{highlight.title}</h3>
						<span class="highlight-subtitle">{highlight.subtitle}</span>
						<p class="highlight-description">{highlight.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Section 3: Who This Machine Is For -->
<section class="section usecases-section animate-section">
	<div class="usecases-bg">
		<div class="gradient-orb orb-usecase"></div>
	</div>

	<div class="section-container">
		<div class="section-header animate-item">
			<span class="section-eyebrow">Industries & Applications</span>
			<h2 class="section-title">Where the MZL F30 mini scrubber works best</h2>
			<p class="section-subtitle">
				The MZL F30 is a compact commercial scrubber-dryer for everyday cleaning of hard and resilient floors. 
				It suits sites that need regular, reliable cleaning in tight spaces and busy walkways.
			</p>
		</div>

		<div class="usecases-grid">
			{#each usecases as usecase, i}
				<div class="usecase-card" style="animation-delay: {i * 0.05}s">
					<div class="usecase-image">
						<img src={usecase.image} alt={usecase.title} />
					</div>
					<h3 class="usecase-title">{usecase.title}</h3>
					<p class="usecase-description">{usecase.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Section 4: Cleaning Performance -->
<section class="section performance-section animate-section">
	<div class="section-container">
		<div class="section-header animate-item">
			<span class="section-eyebrow">Cleaning Performance</span>
			<h2 class="section-title">Deep clean in a single pass</h2>
		</div>

		<!-- 4.1 Scrubbing Power -->
		<div class="performance-block">
			<div class="performance-content animate-item">
				<h3 class="performance-title">Scrubbing power</h3>
				<ul class="performance-list">
					<li>Disc brush configuration for consistent contact on smooth and lightly textured hard floors</li>
					<li>460 mm scrubbing width for productive cleaning in medium-size spaces</li>
					<li>350 W brush motor delivers strong mechanical agitation for everyday soils</li>
					<li>Approx. 23 kg brush pressure helps lift embedded dirt from tiles, vinyl, epoxy and sealed concrete</li>
				</ul>
			</div>
			<div class="performance-image">
				<img src={images.performance.scrubbing} alt="Scrubbing power" />
			</div>
		</div>

		<!-- 4.2 Water and Chemical Control -->
		<div class="performance-block reverse">
			<div class="performance-content animate-item">
				<h3 class="performance-title">Water and chemical control</h3>
				<ul class="performance-list">
					<li>27 L solution tank for extended cleaning runs between refills</li>
					<li>30 L recovery tank to capture dirty water and keep wastewater separate</li>
					<li>Standard and ECO modes to match solution flow to soil level and extend run time on maintenance cleans</li>
				</ul>
			</div>
			<div class="performance-image">
				<img src={images.performance.water} alt="Water and chemical control" />
			</div>
		</div>

		<!-- 4.3 Vacuum and Drying -->
		<div class="performance-block">
			<div class="performance-content animate-item">
				<h3 class="performance-title">Vacuum and drying</h3>
				<ul class="performance-list">
					<li>310 W vacuum motor for consistent water pickup</li>
					<li>620 mm squeegee follows the cleaning path and collects slurry in one pass</li>
					<li>Leaves floors dry quickly to support slip-risk reduction in high-traffic zones</li>
				</ul>
			</div>
			<div class="performance-image">
				<img src={images.performance.vacuum} alt="Vacuum and drying" />
			</div>
		</div>
	</div>
</section>

<!-- Section 5: Battery & Powertrain -->
<section class="section battery-section animate-section">
	<div class="battery-bg">
		<div class="gradient-orb orb-battery"></div>
	</div>

	<div class="section-container">
		<div class="section-header animate-item">
			<span class="section-eyebrow">Battery & Power</span>
			<h2 class="section-title">Ready for long shifts</h2>
		</div>

		<div class="battery-grid">
			<div class="battery-content animate-item">
				<div class="battery-specs">
					<div class="battery-spec">
						<span class="battery-spec-value">24V</span>
						<span class="battery-spec-label">System voltage</span>
					</div>
					<div class="battery-spec">
						<span class="battery-spec-value">2 × 12V</span>
						<span class="battery-spec-label">Battery configuration</span>
					</div>
					<div class="battery-spec">
						<span class="battery-spec-value">85 Ah</span>
						<span class="battery-spec-label">Battery capacity</span>
					</div>
					<div class="battery-spec">
						<span class="battery-spec-value">5.5 hrs</span>
						<span class="battery-spec-label">Max runtime (ECO)</span>
					</div>
				</div>
				<p class="battery-description">
					24 V battery system using 2 × 12 V, 85 Ah maintenance-free batteries. 
					Dedicated charger for simple "plug in and charge" operation at the end of each shift.
				</p>
			</div>
			<div class="battery-images animate-item">
				<img src={images.battery.pack} alt="Battery pack" class="battery-main-image" />
			</div>
		</div>
	</div>
</section>

<!-- Section 6: Ease of Use & Training -->
<section class="section easeofuse-section animate-section">
	<div class="section-container">
		<div class="section-header animate-item">
			<span class="section-eyebrow">Ease of Use</span>
			<h2 class="section-title">Easy to use for in-house and contract cleaners</h2>
		</div>

		<div class="easeofuse-grid">
			<div class="easeofuse-card animate-item">
				<div class="easeofuse-icon">
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
						<circle cx="12" cy="12" r="10"/>
						<polyline points="12,6 12,12 16,14"/>
					</svg>
				</div>
				<h3>Intuitive controls</h3>
				<p>One-click start and clear panel layout</p>
			</div>
			<div class="easeofuse-card animate-item">
				<div class="easeofuse-icon">
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
						<path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
						<path d="M6 12v5c6 3 12 0 12 0v-5"/>
					</svg>
				</div>
				<h3>Quick training</h3>
				<p>Simple walk-behind operation helps new staff become confident quickly</p>
			</div>
			<div class="easeofuse-card animate-item">
				<div class="easeofuse-icon">
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
						<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/>
						<line x1="16" y1="8" x2="2" y2="22"/>
						<line x1="17.5" y1="15" x2="9" y2="15"/>
					</svg>
				</div>
				<h3>Ergonomic design</h3>
				<p>Compact body and balanced weight help reduce push force and operator fatigue</p>
			</div>
			<div class="easeofuse-card animate-item">
				<div class="easeofuse-icon">
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
						<rect x="3" y="3" width="18" height="18" rx="2"/>
						<path d="M9 3v18"/>
						<path d="M15 3v18"/>
						<path d="M3 9h18"/>
						<path d="M3 15h18"/>
					</svg>
				</div>
				<h3>Compact footprint</h3>
				<p>Overall size around 900 × 575 mm makes it easy to manoeuvre in corridors and storerooms</p>
			</div>
		</div>

		<div class="easeofuse-image animate-item">
			<img src={images.easeOfUse.controlPanel} alt="F30 Control Panel" />
		</div>
	</div>
</section>

<!-- Section 7: Safety, Hygiene & Compliance -->
<section class="section safety-section animate-section">
	<div class="safety-bg">
		<div class="gradient-orb orb-safety"></div>
	</div>

	<div class="section-container">
		<div class="section-header animate-item">
			<span class="section-eyebrow">Safety & Hygiene</span>
			<h2 class="section-title">Safety and hygiene built into the design</h2>
		</div>

		<div class="safety-grid">
			<div class="safety-card animate-item">
				<div class="safety-icon safe"></div>
				<h3>Drier floors</h3>
				<p>Strong vacuum pickup and 620 mm squeegee work together to remove solution in one pass</p>
			</div>
			<div class="safety-card animate-item">
				<div class="safety-icon cable"></div>
				<h3>No trailing power cable</h3>
				<p>Battery operation removes the trip hazard of cords on the floor</p>
			</div>
			<div class="safety-card animate-item">
				<div class="safety-icon tanks"></div>
				<h3>Separate tanks</h3>
				<p>27 L solution and 30 L recovery tanks make filling and emptying simple and help keep the machine hygienic</p>
			</div>
			<div class="safety-card animate-item">
				<div class="safety-icon certified"></div>
				<h3>Certified construction</h3>
				<p>Built with internationally recognised safety and quality certifications, including CE and RoHS</p>
			</div>
		</div>
	</div>
</section>

<!-- Section 8: Dimensions & Footprint -->
<section class="section dimensions-section animate-section">
	<div class="section-container">
		<div class="section-header animate-item">
			<span class="section-eyebrow">Dimensions & Footprint</span>
			<h2 class="section-title">Compact dimensions to fit tight spaces</h2>
		</div>

		<div class="dimensions-grid">
			<div class="dimensions-content animate-item">
				<div class="dimension-item">
					<span class="dimension-label">Overall dimensions (L × W × H)</span>
					<span class="dimension-value">900 × 575 × 1,200 mm</span>
				</div>
				<div class="dimension-item">
					<span class="dimension-label">Squeegee width</span>
					<span class="dimension-value">620 mm</span>
				</div>
				<div class="dimension-item">
					<span class="dimension-label">Body width</span>
					<span class="dimension-value">Under 600 mm</span>
				</div>
				<p class="dimensions-note">
					Width under 600 mm so it fits comfortably through standard internal doors. 
					Compact wheelbase and walk-behind design make turning in narrow aisles, storerooms and around obstacles straightforward.
				</p>
			</div>
			<div class="dimensions-image animate-item">
				<img src={images.dimensions.side} alt="F30 Dimensions" />
			</div>
		</div>
	</div>
</section>

<!-- Section 9: What's Included & Optional Accessories -->
<section class="section included-section animate-section">
	<div class="included-bg">
		<div class="gradient-orb orb-included"></div>
	</div>

	<div class="section-container">
		<div class="section-header animate-item">
			<span class="section-eyebrow">What's Included</span>
			<h2 class="section-title">What's included with the MZL F30 mini scrubber</h2>
		</div>

		<div class="included-grid">
			<div class="included-list animate-item">
				<ul>
					<li>MZL F30 mini walk-behind floor scrubber with batteries installed</li>
					<li>Standard disc brush or pad driver (configuration dependent)</li>
					<li>Squeegee assembly with blades</li>
					<li>Dedicated battery charger</li>
					<li>Operator manual and quick-start guide</li>
				</ul>
			</div>
			<div class="included-image animate-item">
				<img src={images.included.kit} alt="What's included" />
			</div>
		</div>

		<!-- Optional Accessories -->
		<div class="accessories-header animate-item">
			<h3 class="accessories-title">Optional accessories and compatible chemicals</h3>
		</div>

		<div class="accessories-grid">
			{#each accessories as accessory, i}
				<div class="accessory-card animate-item" style="animation-delay: {i * 0.05}s">
					<div class="accessory-image">
						<img src={accessory.image} alt={accessory.title} />
					</div>
					<h4 class="accessory-title">{accessory.title}</h4>
					<p class="accessory-description">{accessory.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Section 10: Technical Specifications -->
<section class="section specs-section animate-section">
	<div class="section-container">
		<div class="section-header animate-item">
			<span class="section-eyebrow">Technical Specifications</span>
			<h2 class="section-title">MZL F30 mini battery walk-behind floor scrubber</h2>
		</div>

		<div class="specs-table">
			<div class="spec-category">
				<h3 class="spec-category-title">Performance</h3>
				{#each specifications.performance as spec}
					<div class="spec-row">
						<span class="spec-label">{spec.label}</span>
						<span class="spec-value">{spec.value}</span>
					</div>
				{/each}
			</div>

			<div class="spec-category">
				<h3 class="spec-category-title">Tanks</h3>
				{#each specifications.tanks as spec}
					<div class="spec-row">
						<span class="spec-label">{spec.label}</span>
						<span class="spec-value">{spec.value}</span>
					</div>
				{/each}
			</div>

			<div class="spec-category">
				<h3 class="spec-category-title">Power</h3>
				{#each specifications.power as spec}
					<div class="spec-row">
						<span class="spec-label">{spec.label}</span>
						<span class="spec-value">{spec.value}</span>
					</div>
				{/each}
			</div>

			<div class="spec-category">
				<h3 class="spec-category-title">Motors</h3>
				{#each specifications.motors as spec}
					<div class="spec-row">
						<span class="spec-label">{spec.label}</span>
						<span class="spec-value">{spec.value}</span>
					</div>
				{/each}
			</div>

			<div class="spec-category">
				<h3 class="spec-category-title">Brush / Pad</h3>
				{#each specifications.brush as spec}
					<div class="spec-row">
						<span class="spec-label">{spec.label}</span>
						<span class="spec-value">{spec.value}</span>
					</div>
				{/each}
			</div>

			<div class="spec-category">
				<h3 class="spec-category-title">Dimensions & Weight</h3>
				{#each specifications.dimensions as spec}
					<div class="spec-row">
						<span class="spec-label">{spec.label}</span>
						<span class="spec-value">{spec.value}</span>
					</div>
				{/each}
			</div>

			<div class="spec-category">
				<h3 class="spec-category-title">Warranty</h3>
				{#each specifications.warranty as spec}
					<div class="spec-row">
						<span class="spec-label">{spec.label}</span>
						<span class="spec-value">{spec.value}</span>
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
	
	<span class="cta-eyebrow">Ready to see the F30 in action?</span>
	<h2 class="cta-title">Get Your Quote Today</h2>
	<p class="cta-description">
		Our team will help you determine if the MZL F30 is the right fit for your facility.
		Get personalized recommendations and competitive pricing.
	</p>
	<div class="cta-buttons">
		<a href="/support" class="btn-primary btn-large">Request a Quote</a>
		<a href="/support" class="btn-secondary btn-large">Book a Demo</a>
	</div>
</section>

<style>
	/* ========================
	   HERO SECTION
	   ======================== */
	.hero {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		position: relative;
		padding: 8rem 2rem 4rem;
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
		background: radial-gradient(circle, rgba(34, 211, 238, 0.3), transparent 70%);
		top: -200px;
		right: -200px;
	}

	.orb-2 {
		width: 400px;
		height: 400px;
		background: radial-gradient(circle, rgba(45, 212, 191, 0.25), transparent 70%);
		bottom: 10%;
		left: -100px;
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

	.hero-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		max-width: 1400px;
		margin: 0 auto;
		align-items: center;
		flex: 1;
		z-index: 1;
	}

	.hero-content {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.hero-badge {
		display: inline-block;
		width: fit-content;
		padding: 0.5rem 1rem;
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		background: var(--glass);
		border: 1px solid var(--glass-border);
		border-radius: 999px;
		color: var(--accent-teal);
	}

	.hero-title {
		font-size: clamp(2.5rem, 6vw, 4.5rem);
		font-weight: 800;
		line-height: 1.1;
		letter-spacing: -0.03em;
	}

	.hero-title .accent {
		background: linear-gradient(135deg, var(--accent-teal), var(--accent-mint));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.hero-tagline {
		font-size: clamp(1rem, 2vw, 1.25rem);
		color: var(--text-secondary);
		line-height: 1.6;
		max-width: 500px;
	}

	.key-stats {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		margin: 1rem 0;
	}

	.key-stat {
		padding: 1rem;
		background: var(--glass);
		border: 1px solid var(--glass-border);
		border-radius: var(--radius-sm);
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.stat-value {
		font-size: 1.125rem;
		font-weight: 700;
		color: var(--accent-teal);
	}

	.stat-label {
		font-size: 0.75rem;
		color: var(--text-muted);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.hero-cta-group {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin-top: 0.5rem;
	}

	.hero-image {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.hero-image img {
		max-width: 100%;
		max-height: 550px;
		object-fit: contain;
		filter: drop-shadow(0 30px 60px rgba(0, 0, 0, 0.5));
	}

	.scroll-indicator {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
		color: var(--text-muted);
		font-size: 0.75rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		margin-top: auto;
		padding-top: 2rem;
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

	/* ========================
	   BUTTONS
	   ======================== */
	.btn-primary {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
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
		gap: 0.5rem;
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
		gap: 0.5rem;
		padding: 0.875rem 1.5rem;
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

	/* ========================
	   SECTION COMMON STYLES
	   ======================== */
	.section {
		position: relative;
		padding: 6rem 2rem;
		overflow: hidden;
	}

	.section-container {
		max-width: 1200px;
		margin: 0 auto;
		position: relative;
		z-index: 1;
	}

	.section-header {
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
		font-size: clamp(2rem, 5vw, 3rem);
		font-weight: 800;
		letter-spacing: -0.03em;
		margin-bottom: 1rem;
	}

	.section-subtitle {
		font-size: 1.125rem;
		color: var(--text-muted);
		max-width: 700px;
		margin: 0 auto;
		line-height: 1.7;
	}

	/* ========================
	   HIGHLIGHTS SECTION
	   ======================== */
	.highlights-section {
		background: var(--bg-section);
	}

	.highlights-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 1.5rem;
	}

	.highlight-card {
		background: var(--glass);
		border: 1px solid var(--glass-border);
		border-radius: var(--radius);
		padding: 1.5rem;
		transition: all 0.3s ease;
	}

	.highlight-card:hover {
		transform: translateY(-4px);
		border-color: rgba(45, 212, 191, 0.3);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
	}

	.highlight-image {
		width: 100%;
		height: 160px;
		background: rgba(255, 255, 255, 0.95);
		border-radius: var(--radius-sm);
		margin-bottom: 1.25rem;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.highlight-image img {
		max-width: 90%;
		max-height: 90%;
		object-fit: contain;
	}

	.highlight-content {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.highlight-title {
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--text-primary);
	}

	.highlight-subtitle {
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--accent-teal);
	}

	.highlight-description {
		font-size: 0.9rem;
		color: var(--text-muted);
		line-height: 1.6;
	}

	/* ========================
	   USE CASES SECTION
	   ======================== */
	.usecases-section {
		position: relative;
	}

	.usecases-bg {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}

	.orb-usecase {
		width: 800px;
		height: 800px;
		background: radial-gradient(circle, rgba(45, 212, 191, 0.08), transparent 60%);
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.usecases-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1.5rem;
	}

	.usecase-card {
		background: var(--glass);
		border: 1px solid var(--glass-border);
		border-radius: var(--radius);
		padding: 1.5rem;
		transition: all 0.3s ease;
	}

	.usecase-card:hover {
		transform: translateY(-4px);
		border-color: rgba(45, 212, 191, 0.3);
	}

	.usecase-image {
		width: 100%;
		height: 140px;
		background: rgba(255, 255, 255, 0.95);
		border-radius: var(--radius-sm);
		margin-bottom: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.usecase-image img {
		max-width: 90%;
		max-height: 90%;
		object-fit: contain;
	}

	.usecase-title {
		font-size: 1.1rem;
		font-weight: 700;
		color: var(--text-primary);
		margin-bottom: 0.5rem;
	}

	.usecase-description {
		font-size: 0.9rem;
		color: var(--text-muted);
		line-height: 1.6;
	}

	/* ========================
	   PERFORMANCE SECTION
	   ======================== */
	.performance-section {
		background: var(--bg-section);
	}

	.performance-block {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
		margin-bottom: 4rem;
	}

	.performance-block.reverse {
		direction: rtl;
	}

	.performance-block.reverse > * {
		direction: ltr;
	}

	.performance-block:last-child {
		margin-bottom: 0;
	}

	.performance-title {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--text-primary);
		margin-bottom: 1.5rem;
	}

	.performance-list {
		list-style: none;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.performance-list li {
		position: relative;
		padding-left: 1.5rem;
		font-size: 1rem;
		color: var(--text-secondary);
		line-height: 1.6;
	}

	.performance-list li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.5em;
		width: 6px;
		height: 6px;
		background: var(--accent-teal);
		border-radius: 50%;
	}

	.performance-image {
		background: rgba(255, 255, 255, 0.95);
		border-radius: var(--radius);
		padding: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.performance-image img {
		max-width: 100%;
		max-height: 300px;
		object-fit: contain;
	}

	/* ========================
	   BATTERY SECTION
	   ======================== */
	.battery-section {
		position: relative;
	}

	.battery-bg {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}

	.orb-battery {
		width: 600px;
		height: 600px;
		background: radial-gradient(circle, rgba(34, 211, 238, 0.1), transparent 60%);
		top: 0;
		right: -200px;
	}

	.battery-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
	}

	.battery-specs {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.battery-spec {
		padding: 1.5rem;
		background: var(--glass);
		border: 1px solid var(--glass-border);
		border-radius: var(--radius-sm);
		text-align: center;
	}

	.battery-spec-value {
		display: block;
		font-size: 2rem;
		font-weight: 800;
		color: var(--accent-teal);
		margin-bottom: 0.25rem;
	}

	.battery-spec-label {
		font-size: 0.75rem;
		color: var(--text-muted);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.battery-description {
		font-size: 1rem;
		color: var(--text-secondary);
		line-height: 1.7;
	}

	.battery-images {
		background: rgba(255, 255, 255, 0.95);
		border-radius: var(--radius);
		padding: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.battery-main-image {
		max-width: 100%;
		max-height: 300px;
		object-fit: contain;
	}

	/* ========================
	   EASE OF USE SECTION
	   ======================== */
	.easeofuse-section {
		background: var(--bg-section);
	}

	.easeofuse-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
		margin-bottom: 3rem;
	}

	.easeofuse-card {
		padding: 2rem;
		background: var(--glass);
		border: 1px solid var(--glass-border);
		border-radius: var(--radius);
		text-align: center;
		transition: all 0.3s ease;
	}

	.easeofuse-card:hover {
		transform: translateY(-4px);
		border-color: rgba(45, 212, 191, 0.3);
	}

	.easeofuse-icon {
		width: 64px;
		height: 64px;
		margin: 0 auto 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(45, 212, 191, 0.1);
		border-radius: 50%;
		color: var(--accent-teal);
	}

	.easeofuse-card h3 {
		font-size: 1.125rem;
		font-weight: 700;
		color: var(--text-primary);
		margin-bottom: 0.5rem;
	}

	.easeofuse-card p {
		font-size: 0.9rem;
		color: var(--text-muted);
		line-height: 1.6;
	}

	.easeofuse-image {
		background: rgba(255, 255, 255, 0.95);
		border-radius: var(--radius);
		padding: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.easeofuse-image img {
		max-width: 100%;
		max-height: 350px;
		object-fit: contain;
	}

	/* ========================
	   SAFETY SECTION
	   ======================== */
	.safety-section {
		position: relative;
	}

	.safety-bg {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}

	.orb-safety {
		width: 700px;
		height: 700px;
		background: radial-gradient(circle, rgba(45, 212, 191, 0.08), transparent 60%);
		bottom: -200px;
		left: -200px;
	}

	.safety-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
	}

	.safety-card {
		padding: 2rem;
		background: var(--glass);
		border: 1px solid var(--glass-border);
		border-radius: var(--radius);
		transition: all 0.3s ease;
	}

	.safety-card:hover {
		transform: translateY(-4px);
		border-color: rgba(45, 212, 191, 0.3);
	}

	.safety-icon {
		width: 48px;
		height: 48px;
		margin-bottom: 1rem;
		background: var(--accent-teal);
		border-radius: 50%;
		opacity: 0.8;
	}

	.safety-card h3 {
		font-size: 1.125rem;
		font-weight: 700;
		color: var(--text-primary);
		margin-bottom: 0.5rem;
	}

	.safety-card p {
		font-size: 0.9rem;
		color: var(--text-muted);
		line-height: 1.6;
	}

	/* ========================
	   DIMENSIONS SECTION
	   ======================== */
	.dimensions-section {
		background: var(--bg-section);
	}

	.dimensions-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
	}

	.dimensions-content {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.dimension-item {
		padding: 1rem 1.5rem;
		background: var(--glass);
		border: 1px solid var(--glass-border);
		border-radius: var(--radius-sm);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.dimension-label {
		font-size: 0.9rem;
		color: var(--text-secondary);
	}

	.dimension-value {
		font-size: 1rem;
		font-weight: 700;
		color: var(--accent-teal);
	}

	.dimensions-note {
		font-size: 0.95rem;
		color: var(--text-muted);
		line-height: 1.7;
		margin-top: 0.5rem;
	}

	.dimensions-image {
		background: rgba(255, 255, 255, 0.95);
		border-radius: var(--radius);
		padding: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.dimensions-image img {
		max-width: 100%;
		max-height: 350px;
		object-fit: contain;
	}

	/* ========================
	   INCLUDED SECTION
	   ======================== */
	.included-section {
		position: relative;
	}

	.included-bg {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}

	.orb-included {
		width: 600px;
		height: 600px;
		background: radial-gradient(circle, rgba(34, 211, 238, 0.08), transparent 60%);
		top: 0;
		left: -200px;
	}

	.included-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
		margin-bottom: 4rem;
	}

	.included-list {
		padding: 2rem;
		background: var(--glass);
		border: 1px solid var(--glass-border);
		border-radius: var(--radius);
	}

	.included-list ul {
		list-style: none;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.included-list li {
		position: relative;
		padding-left: 2rem;
		font-size: 1rem;
		color: var(--text-secondary);
		line-height: 1.6;
	}

	.included-list li::before {
		content: '✓';
		position: absolute;
		left: 0;
		color: var(--accent-teal);
		font-weight: 700;
	}

	.included-image {
		background: rgba(255, 255, 255, 0.95);
		border-radius: var(--radius);
		padding: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.included-image img {
		max-width: 100%;
		max-height: 300px;
		object-fit: contain;
	}

	.accessories-header {
		margin-bottom: 2rem;
	}

	.accessories-title {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--text-primary);
		text-align: center;
	}

	.accessories-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
	}

	.accessory-card {
		background: var(--glass);
		border: 1px solid var(--glass-border);
		border-radius: var(--radius);
		padding: 1.5rem;
		transition: all 0.3s ease;
	}

	.accessory-card:hover {
		transform: translateY(-4px);
		border-color: rgba(45, 212, 191, 0.3);
	}

	.accessory-image {
		width: 100%;
		height: 120px;
		background: rgba(255, 255, 255, 0.95);
		border-radius: var(--radius-sm);
		margin-bottom: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.accessory-image img {
		max-width: 90%;
		max-height: 90%;
		object-fit: contain;
	}

	.accessory-title {
		font-size: 1rem;
		font-weight: 700;
		color: var(--text-primary);
		margin-bottom: 0.5rem;
	}

	.accessory-description {
		font-size: 0.85rem;
		color: var(--text-muted);
		line-height: 1.6;
	}

	/* ========================
	   SPECS SECTION
	   ======================== */
	.specs-section {
		background: var(--bg-section);
	}

	.specs-table {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 1.5rem;
	}

	.spec-category {
		background: var(--glass);
		border: 1px solid var(--glass-border);
		border-radius: var(--radius);
		padding: 1.5rem;
	}

	.spec-category-title {
		font-size: 0.85rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--accent-teal);
		margin-bottom: 1rem;
		padding-bottom: 0.75rem;
		border-bottom: 1px solid var(--glass-border);
	}

	.spec-row {
		display: flex;
		justify-content: space-between;
		padding: 0.75rem 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.03);
	}

	.spec-row:last-child {
		border-bottom: none;
	}

	.spec-label {
		font-size: 0.9rem;
		color: var(--text-muted);
	}

	.spec-value {
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--text-primary);
		text-align: right;
	}

	/* ========================
	   CTA SECTION
	   ======================== */
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
			radial-gradient(ellipse at 70% 50%, rgba(34, 211, 238, 0.1), transparent 50%);
	}

	.cta-eyebrow {
		display: block;
		font-size: 0.875rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: var(--accent-teal);
		margin-bottom: 1.5rem;
		position: relative;
		z-index: 1;
	}

	.cta-title {
		font-size: clamp(2.5rem, 6vw, 4.5rem);
		font-weight: 800;
		letter-spacing: -0.03em;
		margin-bottom: 1rem;
		position: relative;
		z-index: 1;
	}

	.cta-description {
		font-size: 1.125rem;
		color: var(--text-muted);
		max-width: 600px;
		margin: 0 auto 2.5rem;
		line-height: 1.7;
		position: relative;
		z-index: 1;
	}

	.cta-buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
		position: relative;
		z-index: 1;
	}

	/* ========================
	   RESPONSIVE
	   ======================== */
	@media (max-width: 1024px) {
		.hero-container {
			grid-template-columns: 1fr;
			text-align: center;
		}

		.hero-content {
			align-items: center;
		}

		.hero-cta-group {
			justify-content: center;
		}

		.hero-image {
			order: -1;
		}

		.hero-image img {
			max-height: 350px;
		}

		.performance-block,
		.performance-block.reverse {
			grid-template-columns: 1fr;
			gap: 2rem;
			direction: ltr;
		}

		.battery-grid,
		.dimensions-grid,
		.included-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
	}

	@media (max-width: 768px) {
		.hero {
			padding: 6rem 1.5rem 3rem;
		}

		.section {
			padding: 4rem 1.5rem;
		}

		.key-stats {
			grid-template-columns: 1fr;
		}

		.highlights-grid,
		.usecases-grid,
		.easeofuse-grid,
		.safety-grid,
		.accessories-grid,
		.specs-table {
			grid-template-columns: 1fr;
		}

		.battery-specs {
			grid-template-columns: repeat(2, 1fr);
		}

		.cta-section {
			padding: 5rem 1.5rem;
		}
	}
</style>

