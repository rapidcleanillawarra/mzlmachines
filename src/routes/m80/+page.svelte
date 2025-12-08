<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

// Video embed URL (replace VIDEO_ID with actual ID)
const videoEmbedUrl = 'https://www.youtube.com/embed/VIDEO_ID?rel=0&modestbranding=1';

	const images = {
		hero: {
			main: '/m80/m80-hero-main.png',
			environment: '/m80/m80-hero-environment.png'
		},
		highlights: {
			widePath: '/m80/m80-performance-scrubbing.png',
			tanks: '/m80/m80-performance-water-chemical.png',
			inlet: '/m80/m80-water-inlet-discharge.png',
			float: '/m80/m80-float-ball-sensor.png',
			rideOn: '/m80/m80-ride-on-ergonomics.png',
			durable: '/m80/m80-durable-wheels.png'
		},
		usecases: {
			warehouse: '/m80/m80-usecase-warehouse.png',
			factory: '/m80/m80-usecase-factory.png',
			mall: '/m80/m80-usecase-mall.png',
			airport: '/m80/m80-usecase-airport.png',
			logistics: '/m80/m80-usecase-logistics.png',
			institution: '/m80/m80-usecase-institution.png'
		},
		performance: {
			scrubbing: '/m80/m80-performance-scrubbing.png',
			water: '/m80/m80-performance-water-chemical.png',
			vacuum: '/m80/m80-performance-vacuum-drying.png',
			beforeAfter: '/m80/m80-performance-before-after-strip.png'
		},
		floors: {
			concrete: '/m80/m80-floor-concrete.png',
			sealed: '/m80/m80-floor-sealed.png',
			tile: '/m80/m80-floor-tile.png'
		},
		battery: {
			pack: '/m80/m80-battery-pack.png',
			charging: '/m80/m80-battery-charging.png',
			runtime: '/m80/m80-battery-runtime-graphic.png'
		},
		easeOfUse: {
			controlPanel: '/m80/m80-easeofuse-control-panel.png',
			operator: '/m80/m80-easeofuse-operator.png'
		},
		safety: {
			dryFloor: '/m80/m80-safety-dry-floor.png',
			tankCleaning: '/m80/m80-hygiene-tank-cleaning.png',
			certifications: '/m80/m80-compliance-certifications.png'
		},
		dimensions: {
			top: '/m80/m80-dimensions-top.png',
			side: '/m80/m80-dimensions-side.png',
			footprint: '/m80/m80-footprint-large-hall.png'
		},
		included: {
			kit: '/m80/m80-included-kit.png'
		},
		accessories: {
			brushes: '/m80/m80-accessories-brushes-pads.png',
			squeegee: '/m80/m80-accessories-squeegee-blades.png',
			chemicals: '/m80/m80-accessories-chemicals.png',
			handling: '/m80/m80-accessories-handling-storage.png'
		}
	};

	const galleryImages = [
		{ src: images.hero.main, alt: 'MZL M80 ride-on floor scrubber - front view', caption: 'Front view' },
		{ src: images.hero.environment, alt: 'MZL M80 ride-on scrubber in operation', caption: 'In operation' },
		{ src: images.performance.scrubbing, alt: 'MZL M80 scrubbing power', caption: 'Scrubbing power' },
		{ src: images.performance.water, alt: 'MZL M80 solution and recovery tanks', caption: 'Water & chemical control' },
		{ src: images.performance.vacuum, alt: 'MZL M80 vacuum and drying performance', caption: 'Vacuum & drying' },
		{ src: images.performance.beforeAfter, alt: 'MZL M80 cleaning results', caption: 'Before & after results' }
	];

	let lightboxOpen = false;
	let currentImageIndex = 0;

	function openLightbox(index: number) {
		currentImageIndex = index;
		lightboxOpen = true;
		document.body.style.overflow = 'hidden';
	}

	function closeLightbox() {
		lightboxOpen = false;
		document.body.style.overflow = '';
	}

	function nextImage() {
		currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
	}

	function prevImage() {
		currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (!lightboxOpen) return;
		if (e.key === 'Escape') closeLightbox();
		if (e.key === 'ArrowRight') nextImage();
		if (e.key === 'ArrowLeft') prevImage();
	}

	const keyStats = [
		{ label: 'Cleaning width', value: '1050 mm' },
		{ label: 'Theoretical productivity', value: 'up to 5,500 m²/h' },
		{ label: 'Solution / recovery tanks', value: '130 L / 140 L' },
		{ label: 'Typical runtime (ECO)', value: 'up to 6.5 hours' }
	];

	const highlights = [
		{
			title: 'Wide 1050 mm cleaning path',
			subtitle: 'High throughput',
			description: 'Dual-disc 1050 mm cleaning width delivers rapid coverage for warehouses, factories, malls and airports.',
			image: images.highlights.widePath
		},
		{
			title: 'Large 130 / 140 L tanks',
			subtitle: 'Fewer stops',
			description: '130 L solution and 140 L recovery tanks extend cleaning runs with fewer refill or drain interruptions.',
			image: images.highlights.tanks
		},
		{
			title: 'Big inlet & easy discharge',
			subtitle: 'Faster turnaround',
			description: 'Funnel-style inlet and convenient discharge outlet simplify filling and draining to cut downtime.',
			image: images.highlights.inlet
		},
		{
			title: 'Float-ball sensor protection',
			subtitle: 'Motor safety',
			description: 'Float-ball sensing helps prevent recovery tank overfill and protects suction components.',
			image: images.highlights.float
		},
		{
			title: 'Ride-on ergonomics',
			subtitle: 'Operator comfort',
			description: 'Seat-mounted ride-on format with simple controls reduces fatigue on long shifts.',
			image: images.highlights.rideOn
		},
		{
			title: 'Durable chassis & wheels',
			subtitle: 'Industrial-ready',
			description: 'Heavy-duty build with anti-skid wheels for reliable performance on industrial floors.',
			image: images.highlights.durable
		}
	];

	const usecases = [
		{
			title: 'Warehouses & Distribution',
			description: 'Wide concrete or sealed floors across storage zones and aisles.',
			image: images.usecases.warehouse
		},
		{
			title: 'Factories & Manufacturing',
			description: 'Heavy-duty scrubbing for industrial floors with dust, debris and high traffic.',
			image: images.usecases.factory
		},
		{
			title: 'Shopping malls & airports',
			description: 'Public-area floors, concourses and corridors with minimal downtime.',
			image: images.usecases.airport
		},
		{
			title: 'Exhibition halls & venues',
			description: 'Expansive halls and lounges needing rapid, reliable cleaning.',
			image: images.usecases.mall
		},
		{
			title: 'Logistics hubs & storage',
			description: 'High-usage floors under frequent forklift and pallet-traffic conditions.',
			image: images.usecases.logistics
		},
		{
			title: 'Large institutional buildings',
			description: 'Universities, convention centres and other large open floor areas.',
			image: images.usecases.institution
		}
	];

	const floorTypes = [
		{ title: 'Concrete / cement industrial floors', image: images.floors.concrete },
		{ title: 'Sealed / treated industrial floors', image: images.floors.sealed },
		{ title: 'Large-format tile / stone floors', image: images.floors.tile }
	];

	const specifications = {
		performance: [
			{ label: 'Cleaning width', value: '1050 mm (dual-disc)' },
			{ label: 'Cleaning productivity', value: 'up to 5,500 m²/h' }
		],
		tanks: [
			{ label: 'Solution tank', value: '130 L' },
			{ label: 'Recovery tank', value: '140 L' }
		],
		power: [
			{ label: 'Battery', value: '24 V maintenance-free battery pack' },
			{ label: 'Typical runtime', value: 'up to 6.5 hours (ECO / light-duty)' }
		],
		motors: [
			{ label: 'Brush configuration', value: 'Dual disc brushes (410 mm each)' },
			{ label: 'Suction / vacuum motor', value: 'High-power suction system for dual brushes' }
		],
		brush: [
			{ label: 'Brush / suction / dry', value: 'Integrated scrub-vac-dry single-pass system' }
		],
		dimensions: [
			{ label: 'Dimensions (L × W × H)', value: '1520 × 935 × 1270 mm (approx.)' }
		],
		other: [
			{ label: 'Controls', value: 'Ride-on operation, simple panel, automatic suction / scrubbing / drying' }
		]
	};

	const accessories = [
		{
			title: 'Alternative brushes / pads',
			description: 'Optional pad or brush types for different floor surfaces, from delicate to heavy-duty.',
			image: images.accessories.brushes
		},
		{
			title: 'Replacement squeegee blades',
			description: 'Fresh blades for optimal drying performance on varied surfaces.',
			image: images.accessories.squeegee
		},
		{
			title: 'Floor-cleaning chemicals',
			description: 'Compatible detergents, degreasers and sanitizers to match floor types and soils.',
			image: images.accessories.chemicals
		},
		{
			title: 'Maintenance & storage',
			description: 'Covers, battery care tools, racks or docking aids for safe parking and charging.',
			image: images.accessories.handling
		}
	];

	onMount(() => {
		const heroTl = gsap.timeline();
		heroTl
			.fromTo('.hero-badge', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
			.fromTo('.hero-title', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.3')
			.fromTo('.hero-tagline', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5')
			.fromTo('.key-stat', { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: 'power3.out' }, '-=0.4')
			.fromTo('.hero-cta-group', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
			.fromTo('.hero-image-wrapper', { opacity: 0, scale: 0.95, y: 30 }, { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.5')
			.fromTo('.hero-thumbnail', { opacity: 0, y: 15 }, { opacity: 0.6, y: 0, stagger: 0.05, duration: 0.4, ease: 'power3.out' }, '-=0.4');

		const sections = document.querySelectorAll('.animate-section');
		sections.forEach((section) => {
			const items = section.querySelectorAll('.animate-item');
			if (items.length > 0) {
				gsap.fromTo(
					items,
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

		gsap.fromTo(
			'.highlight-card',
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

		gsap.fromTo('.video-container',
			{ opacity: 0, y: 50, scale: 0.95 },
			{
				opacity: 1,
				y: 0,
				scale: 1,
				duration: 0.9,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: '.video-wrapper',
					start: 'top 85%',
					once: true
				}
			}
		);

		gsap.fromTo('.video-feature',
			{ opacity: 0, y: 20 },
			{
				opacity: 1,
				y: 0,
				stagger: 0.1,
				duration: 0.6,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: '.video-wrapper',
					start: 'top 85%',
					once: true
				}
			}
		);

		gsap.fromTo(
			'.usecase-card',
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

		document.querySelectorAll('.performance-block').forEach((block) => {
			gsap.fromTo(
				block,
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

		gsap.fromTo(
			'.battery-spec',
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

		gsap.fromTo(
			'.easeofuse-card',
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

		gsap.fromTo(
			'.safety-card',
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

		gsap.fromTo(
			'.dimension-item',
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

		gsap.fromTo(
			'.accessory-card',
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

		gsap.fromTo(
			'.spec-category',
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

		gsap.fromTo(
			'.cta-section > *',
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

		return () => {
			ScrollTrigger.getAll().forEach((t) => t.kill());
		};
	});
</script>

<svelte:head>
	<title>MZL M80 Ride-On Floor Scrubber Machine | MZL Machines</title>
	<meta
		name="description"
		content="MZL M80 ride-on floor scrubber: 1050 mm cleaning width, up to 5,500 m²/h, 130/140 L tanks, up to 6.5h runtime. Heavy-duty ride-on scrubber for warehouses, factories, airports, malls."
	/>
</svelte:head>

<svelte:window on:keydown={handleKeydown} />

<section class="hero">
	<div class="hero-bg">
		<div class="gradient-orb orb-1"></div>
		<div class="gradient-orb orb-2"></div>
		<div class="grid-overlay"></div>
	</div>

	<div class="hero-container">
		<div class="hero-content">
			<span class="hero-badge animate-item">MZL M80 Series</span>
			<h1 class="hero-title">
				Ride-On<br />
				<span class="accent">Floor Scrubber</span><br />
				Machine
			</h1>
			<p class="hero-tagline">
				Wide-path ride-on scrubber for high-efficiency cleaning of large commercial and industrial floors.
			</p>

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
						<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
						<polyline points="7,10 12,15 17,10" />
						<line x1="12" y1="15" x2="12" y2="3" />
					</svg>
					Download Brochure / Spec Sheet
				</a>
			</div>
		</div>

		<div class="hero-gallery">
			<div class="hero-image-wrapper">
				<img 
					src={galleryImages[currentImageIndex].src} 
					alt={galleryImages[currentImageIndex].alt} 
					class="hero-image"
				/>
				<button 
					class="hero-fullscreen-btn" 
					on:click={() => openLightbox(currentImageIndex)}
					aria-label="View fullscreen"
				>
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M8 3H5a2 2 0 0 0-2 2v3"/>
						<path d="M21 8V5a2 2 0 0 0-2-2h-3"/>
						<path d="M3 16v3a2 2 0 0 0 2 2h3"/>
						<path d="M16 21h3a2 2 0 0 0 2-2v-3"/>
					</svg>
					<span>View Gallery</span>
				</button>
				<div class="hero-image-caption">{galleryImages[currentImageIndex].caption}</div>
			</div>
			
			<div class="hero-thumbnails">
				{#each galleryImages as image, i}
					<button 
						class="hero-thumbnail" 
						class:active={i === currentImageIndex}
						on:click={() => currentImageIndex = i}
						aria-label="View {image.caption}"
					>
						<img src={image.src} alt={image.alt} />
					</button>
				{/each}
			</div>
		</div>
	</div>

	<div class="scroll-indicator">
		<span>Scroll to explore</span>
		<div class="scroll-line"></div>
	</div>
</section>

<section class="section highlights-section animate-section">
	<div class="section-container">
		<div class="section-header animate-item">
			<span class="section-eyebrow">Key Features</span>
			<h2 class="section-title">Key features of the MZL M80 floor scrubber</h2>
		</div>

		<div class="highlights-grid">
			{#each highlights as highlight, i}
				<div class="highlight-card" style="animation-delay: {i * 0.05}s; background-image: url({highlight.image});">
					<div class="highlight-overlay"></div>
					<div class="highlight-content">
						<span class="highlight-subtitle">{highlight.subtitle}</span>
						<h3 class="highlight-title">{highlight.title}</h3>
						<p class="highlight-description">{highlight.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="section video-section animate-section">
	<div class="video-bg">
		<div class="gradient-orb orb-video"></div>
	</div>
	
	<div class="section-container">
		<div class="section-header animate-item">
			<span class="section-eyebrow">See It In Action</span>
			<h2 class="section-title">Watch the MZL M80 at work</h2>
			<p class="section-subtitle">
				See how the MZL M80 ride-on scrubber delivers wide-path, one-pass cleaning in large facilities.
			</p>
		</div>

		<div class="video-wrapper animate-item">
			<div class="video-container">
				<iframe 
					src={videoEmbedUrl}
					title="MZL M80 Floor Scrubber Demo Video"
					frameborder="0" 
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
					allowfullscreen
				></iframe>
			</div>
			<div class="video-features">
				<div class="video-feature">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
						<polyline points="22 4 12 14.01 9 11.01"/>
					</svg>
					<span>Wide 1050 mm cleaning demo</span>
				</div>
				<div class="video-feature">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
						<polyline points="22 4 12 14.01 9 11.01"/>
					</svg>
					<span>Ride-on ergonomics walkthrough</span>
				</div>
				<div class="video-feature">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
						<polyline points="22 4 12 14.01 9 11.01"/>
					</svg>
					<span>Real-world throughput results</span>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="section usecases-section animate-section">
	<div class="usecases-bg">
		<div class="gradient-orb orb-usecase"></div>
	</div>

	<div class="section-container">
		<div class="section-header animate-item">
			<span class="section-eyebrow">Industries & Applications</span>
			<h2 class="section-title">Where the MZL M80 scrubber works best</h2>
			<p class="section-subtitle">
				Ride-on floor scrubber built for large-area cleaning in warehouses, factories, airports, malls and other high-traffic indoor spaces.
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

<section class="section performance-section animate-section">
	<div class="section-container">
		<div class="section-header animate-item">
			<span class="section-eyebrow">Cleaning Performance</span>
			<h2 class="section-title">Deep clean and high throughput</h2>
		</div>

		<div class="performance-block">
			<div class="performance-content animate-item">
				<h3 class="performance-title">Scrubbing power</h3>
				<ul class="performance-list">
					<li>Dual disc brushes (410 mm each) deliver a 1050 mm total cleaning width</li>
					<li>High-power dual brush motors tackle heavy soil, grime and industrial dust</li>
					<li>Effective on concrete, sealed industrial floors and large-format tile/stone</li>
				</ul>
			</div>
			<div class="performance-image">
				<img src={images.performance.scrubbing} alt="Scrubbing power" />
			</div>
		</div>

		<div class="floor-grid animate-item">
			{#each floorTypes as floor}
				<div class="floor-card">
					<img src={floor.image} alt={floor.title} />
					<span>{floor.title}</span>
				</div>
			{/each}
		</div>

		<div class="performance-block reverse">
			<div class="performance-content animate-item">
				<h3 class="performance-title">Water and chemical control</h3>
				<ul class="performance-list">
					<li>130 L solution and 140 L recovery tanks reduce refill and drain frequency</li>
					<li>Large inlet and convenient discharge streamline filling and emptying</li>
					<li>Float-ball sensing helps prevent overfill and safeguards suction components</li>
				</ul>
			</div>
			<div class="performance-image">
				<img src={images.performance.water} alt="Water and chemical control" />
			</div>
		</div>

		<div class="performance-block">
			<div class="performance-content animate-item">
				<h3 class="performance-title">Vacuum and drying</h3>
				<ul class="performance-list">
					<li>Integrated suction and squeegee system removes slurry immediately after scrubbing</li>
					<li>Single-pass scrub, vacuum and dry leaves floors ready for traffic</li>
					<li>Helps reduce slip risk in busy industrial and public environments</li>
				</ul>
			</div>
			<div class="performance-image">
				<img src={images.performance.vacuum} alt="Vacuum and drying" />
			</div>
		</div>
	</div>
</section>

<section class="section battery-section animate-section">
	<div class="battery-bg">
		<div class="gradient-orb orb-battery"></div>
	</div>

	<div class="section-container">
		<div class="section-header animate-item">
			<span class="section-eyebrow">Battery & Powertrain</span>
			<h2 class="section-title">Robust power for industrial use</h2>
		</div>

		<div class="battery-grid">
			<div class="battery-content animate-item">
				<div class="battery-specs">
					<div class="battery-spec">
						<span class="battery-spec-value">24V</span>
						<span class="battery-spec-label">System voltage</span>
					</div>
					<div class="battery-spec">
						<span class="battery-spec-value">Up to 6.5h</span>
						<span class="battery-spec-label">Typical runtime (ECO)</span>
					</div>
				</div>
				<p class="battery-description">
					24 V maintenance-free battery system sized for ride-on industrial scrubbers. Supports up to ~6.5 hours in ECO/light-duty use to cover lengthy cleaning sessions in large facilities, with straightforward external charging between shifts.
				</p>
			</div>
			<div class="battery-images animate-item">
				<img src={images.battery.pack} alt="M80 battery pack" class="battery-main-image" />
			</div>
		</div>
	</div>
</section>

<section class="section easeofuse-section animate-section">
	<div class="section-container">
		<div class="section-header animate-item">
			<span class="section-eyebrow">Ease of Use & Comfort</span>
			<h2 class="section-title">Ride-on ergonomics and simple controls</h2>
		</div>

		<div class="easeofuse-grid">
			<div class="easeofuse-card animate-item">
				<div class="easeofuse-icon">
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
						<circle cx="12" cy="12" r="10" />
						<polyline points="12,6 12,12 16,14" />
					</svg>
				</div>
				<h3>One-click start</h3>
				<p>Simple controls and one-click start keep operation straightforward across shifts.</p>
			</div>
			<div class="easeofuse-card animate-item">
				<div class="easeofuse-icon">
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
						<path d="M22 10v6M2 10l10-5 10 5-10 5z" />
						<path d="M6 12v5c6 3 12 0 12 0v-5" />
					</svg>
				</div>
				<h3>Ride-on comfort</h3>
				<p>Seat-mounted design and ergonomic steering reduce fatigue on long routes.</p>
			</div>
			<div class="easeofuse-card animate-item">
				<div class="easeofuse-icon">
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
						<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
						<line x1="16" y1="8" x2="2" y2="22" />
						<line x1="17.5" y1="15" x2="9" y2="15" />
					</svg>
				</div>
				<h3>Automatic scrub & dry</h3>
				<p>Integrated brush, suction and drying simplify workflow with minimal manual intervention.</p>
			</div>
			<div class="easeofuse-card animate-item">
				<div class="easeofuse-icon">
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
						<rect x="3" y="3" width="18" height="18" rx="2" />
						<path d="M9 3v18" />
						<path d="M15 3v18" />
						<path d="M3 9h18" />
						<path d="M3 15h18" />
					</svg>
				</div>
				<h3>Industrial maneuverability</h3>
				<p>Durable chassis and anti-skid wheels provide stable steering on industrial floors.</p>
			</div>
		</div>

		<div class="easeofuse-image animate-item">
			<img src={images.easeOfUse.controlPanel} alt="M80 Control Panel" />
		</div>
	</div>
</section>

<section class="section safety-section animate-section">
	<div class="safety-bg">
		<div class="gradient-orb orb-safety"></div>
	</div>

	<div class="section-container">
		<div class="section-header animate-item">
			<span class="section-eyebrow">Safety & Hygiene</span>
			<h2 class="section-title">Safety, hygiene and compliance</h2>
		</div>

		<div class="safety-grid">
			<div class="safety-card animate-item">
				<div class="safety-icon safe"></div>
				<h3>Slip-risk reduction</h3>
				<p>Single-pass scrub, vacuum and dry leaves floors clean and ready for traffic.</p>
			</div>
			<div class="safety-card animate-item">
				<div class="safety-icon cable"></div>
				<h3>Ride-on ergonomics</h3>
				<p>Ride-on format lowers manual strain and supports safer, consistent cleaning.</p>
			</div>
			<div class="safety-card animate-item">
				<div class="safety-icon tanks"></div>
				<h3>Hygienic maintenance</h3>
				<p>Easy-access tanks and maintenance points simplify cleaning and sanitation.</p>
			</div>
			<div class="safety-card animate-item">
				<div class="safety-icon certified"></div>
				<h3>Certified build</h3>
				<p>Built to commercial standards (e.g. CE/RoHS) for professional environments.</p>
			</div>
			<div class="safety-card animate-item">
				<div class="safety-icon certified"></div>
				<h3>Float-ball protection</h3>
				<p>Float-ball sensor helps prevent overfill and protects suction motors.</p>
			</div>
		</div>
	</div>
</section>

<section class="section dimensions-section animate-section">
	<div class="section-container">
		<div class="section-header animate-item">
			<span class="section-eyebrow">Dimensions & Footprint</span>
			<h2 class="section-title">Designed for large-area coverage</h2>
		</div>

		<div class="dimensions-grid">
			<div class="dimensions-content animate-item">
				<div class="dimension-item">
					<span class="dimension-label">Dimensions (L × W × H)</span>
					<span class="dimension-value">1520 × 935 × 1270 mm (approx.)</span>
				</div>
				<div class="dimension-item">
					<span class="dimension-label">Cleaning width</span>
					<span class="dimension-value">1050 mm</span>
				</div>
				<p class="dimensions-note">
					Wide cleaning width spans large zones efficiently, reducing labour and time across warehouses, malls and public halls.
				</p>
			</div>
			<div class="dimensions-image animate-item">
				<img src={images.dimensions.side} alt="M80 Dimensions" />
			</div>
		</div>
	</div>
</section>

<section class="section included-section animate-section">
	<div class="included-bg">
		<div class="gradient-orb orb-included"></div>
	</div>

	<div class="section-container">
		<div class="section-header animate-item">
			<span class="section-eyebrow">What's Included</span>
			<h2 class="section-title">What's included with the MZL M80 scrubber</h2>
		</div>

		<div class="included-grid">
			<div class="included-list animate-item">
				<ul>
					<li>Base ride-on scrubber (seat, chassis, drive, dual-disc brush deck, suction assembly)</li>
					<li>24 V maintenance-free battery pack</li>
					<li>Charger / charging system</li>
					<li>Dual disc brushes / pad drivers</li>
					<li>Squeegee / suction and recovery assembly</li>
					<li>Operator manual / quick-start guide</li>
				</ul>
			</div>
			<div class="included-image animate-item">
				<img src={images.included.kit} alt="What's included" />
			</div>
		</div>

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

<section class="section specs-section animate-section">
	<div class="section-container">
		<div class="section-header animate-item">
			<span class="section-eyebrow">Technical Specifications</span>
			<h2 class="section-title">Technical specifications – MZL M80 ride-on floor scrubber</h2>
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
				<h3 class="spec-category-title">Power / Battery</h3>
				{#each specifications.power as spec}
					<div class="spec-row">
						<span class="spec-label">{spec.label}</span>
						<span class="spec-value">{spec.value}</span>
					</div>
				{/each}
			</div>

			<div class="spec-category">
				<h3 class="spec-category-title">Motors / Brush & Suction</h3>
				{#each specifications.motors as spec}
					<div class="spec-row">
						<span class="spec-label">{spec.label}</span>
						<span class="spec-value">{spec.value}</span>
					</div>
				{/each}
			</div>

			<div class="spec-category">
				<h3 class="spec-category-title">Brush / Recovery</h3>
				{#each specifications.brush as spec}
					<div class="spec-row">
						<span class="spec-label">{spec.label}</span>
						<span class="spec-value">{spec.value}</span>
					</div>
				{/each}
			</div>

			<div class="spec-category">
				<h3 class="spec-category-title">Dimensions & Footprint</h3>
				{#each specifications.dimensions as spec}
					<div class="spec-row">
						<span class="spec-label">{spec.label}</span>
						<span class="spec-value">{spec.value}</span>
					</div>
				{/each}
			</div>

			<div class="spec-category">
				<h3 class="spec-category-title">Other</h3>
				{#each specifications.other as spec}
					<div class="spec-row">
						<span class="spec-label">{spec.label}</span>
						<span class="spec-value">{spec.value}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<section class="cta-section">
	<div class="cta-bg">
		<div class="cta-gradient"></div>
	</div>
	
	<span class="cta-eyebrow">Ready to see the M80 in action?</span>
	<h2 class="cta-title">Get Your Quote Today</h2>
	<p class="cta-description">
		Our team will help you determine if the MZL M80 is the right fit for your facility.
		Get personalized recommendations and competitive pricing.
	</p>
	<div class="cta-buttons">
		<a href="/support" class="btn-primary btn-large">Request a Quote</a>
		<a href="/support" class="btn-secondary btn-large">Book a Demo</a>
	</div>
</section>

{#if lightboxOpen}
	<div 
		class="lightbox" 
		on:click={closeLightbox} 
		on:keydown={(e) => e.key === 'Enter' && closeLightbox()}
		role="dialog" 
		aria-modal="true" 
		aria-label="Image viewer"
		tabindex="-1"
	>
		<div class="lightbox-backdrop"></div>
		
		<button class="lightbox-close" on:click={closeLightbox} aria-label="Close viewer">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M18 6 6 18"/>
				<path d="m6 6 12 12"/>
			</svg>
		</button>

		<div class="lightbox-content" on:click|stopPropagation role="presentation">
			<button class="lightbox-nav lightbox-prev" on:click={prevImage} aria-label="Previous image">
				<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="m15 18-6-6 6-6"/>
				</svg>
			</button>

			<div class="lightbox-image-container">
				<img 
					src={galleryImages[currentImageIndex].src} 
					alt={galleryImages[currentImageIndex].alt}
					class="lightbox-image"
				/>
				<div class="lightbox-caption">
					<span class="lightbox-caption-text">{galleryImages[currentImageIndex].caption}</span>
					<span class="lightbox-counter">{currentImageIndex + 1} / {galleryImages.length}</span>
				</div>
			</div>

			<button class="lightbox-nav lightbox-next" on:click={nextImage} aria-label="Next image">
				<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="m9 18 6-6-6-6"/>
				</svg>
			</button>
		</div>

		<div class="lightbox-thumbnails">
			{#each galleryImages as image, i}
				<button 
					class="lightbox-thumbnail" 
					class:active={i === currentImageIndex}
					on:click|stopPropagation={() => currentImageIndex = i}
					aria-label="View image {i + 1}"
				>
					<img src={image.src} alt={image.alt} />
				</button>
			{/each}
		</div>
	</div>
{/if}

<style>
	:global(:root) {
		--bg: #0b0f1a;
		--bg-section: #0f1524;
		--glass: rgba(255, 255, 255, 0.04);
		--glass-border: rgba(255, 255, 255, 0.08);
		--text-primary: #f8fafc;
		--text-secondary: #cbd5e1;
		--text-muted: #94a3b8;
		--accent-teal: #f472b6;
		--accent-mint: #f9a8d4;
		--radius: 20px;
		--radius-sm: 14px;
	}

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
		background: radial-gradient(circle, rgba(244, 114, 182, 0.3), transparent 70%);
		top: -200px;
		right: -200px;
	}

	.orb-2 {
		width: 400px;
		height: 400px;
		background: radial-gradient(circle, rgba(249, 168, 212, 0.25), transparent 70%);
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
		max-width: 560px;
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

	.hero-gallery {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.hero-image-wrapper {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 2rem;
		min-height: 400px;
	}

	.hero-image {
		max-width: 100%;
		max-height: 450px;
		object-fit: contain;
		filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.4));
		transition: opacity 0.3s ease;
	}

	.hero-fullscreen-btn {
		position: absolute;
		top: 1rem;
		right: 1rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.625rem 1rem;
		background: rgba(5, 5, 5, 0.8);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 999px;
		color: var(--text-primary);
		font-size: 0.8rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
		z-index: 5;
	}

	.hero-fullscreen-btn:hover {
		background: rgba(244, 114, 182, 0.9);
		color: #050505;
		border-color: var(--accent-teal);
	}

	.hero-image-caption {
		position: absolute;
		bottom: 1rem;
		left: 50%;
		transform: translateX(-50%);
		padding: 0.5rem 1rem;
		background: rgba(5, 5, 5, 0.8);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 999px;
		color: var(--text-secondary);
		font-size: 0.8rem;
		font-weight: 500;
		white-space: nowrap;
	}

	.hero-thumbnails {
		display: flex;
		gap: 0.625rem;
		justify-content: center;
		flex-wrap: wrap;
		padding: 0.75rem;
		background: var(--glass);
		border: 1px solid var(--glass-border);
		border-radius: var(--radius);
	}

	.hero-thumbnail {
		width: 72px;
		height: 54px;
		border-radius: var(--radius-sm);
		overflow: hidden;
		cursor: pointer;
		border: 2px solid transparent;
		background: var(--glass);
		padding: 0.25rem;
		transition: all 0.3s ease;
		opacity: 0.6;
	}

	.hero-thumbnail:hover {
		opacity: 1;
		border-color: rgba(255, 255, 255, 0.3);
	}

	.hero-thumbnail.active {
		border-color: var(--accent-teal);
		opacity: 1;
		box-shadow: 0 0 15px rgba(244, 114, 182, 0.3);
	}

	.hero-thumbnail img {
		width: 100%;
		height: 100%;
		object-fit: contain;
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
		box-shadow: 0 10px 40px rgba(244, 114, 182, 0.3);
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
		max-width: 760px;
		margin: 0 auto;
		line-height: 1.7;
	}

	.highlights-section {
		background: var(--bg-section);
	}

	.highlights-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
		gap: 1.5rem;
	}

	.highlight-card {
		position: relative;
		border-radius: var(--radius);
		overflow: hidden;
		min-height: 320px;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		border: 1px solid var(--glass-border);
		transition: all 0.4s ease;
	}

	.highlight-card:hover {
		transform: translateY(-6px);
		border-color: rgba(244, 114, 182, 0.4);
		box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
	}

	.highlight-card:hover .highlight-overlay {
		background: linear-gradient(
			to top,
			rgba(5, 5, 5, 0.98) 0%,
			rgba(5, 5, 5, 0.85) 40%,
			rgba(5, 5, 5, 0.4) 70%,
			transparent 100%
		);
	}

	.highlight-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to top,
			rgba(5, 5, 5, 0.95) 0%,
			rgba(5, 5, 5, 0.75) 35%,
			rgba(5, 5, 5, 0.3) 65%,
			transparent 100%
		);
		transition: background 0.4s ease;
	}

	.highlight-content {
		position: relative;
		z-index: 1;
		padding: 1.75rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.highlight-title {
		font-size: 1.35rem;
		font-weight: 700;
		color: var(--text-primary);
		line-height: 1.3;
	}

	.highlight-subtitle {
		font-size: 0.8rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--accent-teal);
		order: -1;
	}

	.highlight-description {
		font-size: 0.9rem;
		color: var(--text-secondary);
		line-height: 1.6;
		margin-top: 0.25rem;
	}

	/* ========================
	   VIDEO SECTION
	   ======================== */
	.video-section {
		position: relative;
	}

	.video-bg {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}

	.orb-video {
		width: 700px;
		height: 700px;
		background: radial-gradient(circle, rgba(244, 114, 182, 0.1), transparent 60%);
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.video-wrapper {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.video-container {
		position: relative;
		width: 100%;
		padding-bottom: 56.25%; /* 16:9 aspect ratio */
		background: var(--glass);
		border: 1px solid var(--glass-border);
		border-radius: var(--radius);
		overflow: hidden;
		box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
	}

	.video-container iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.video-features {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 2rem;
	}

	.video-feature {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.75rem 1.25rem;
		background: var(--glass);
		border: 1px solid var(--glass-border);
		border-radius: 999px;
		font-size: 0.9rem;
		color: var(--text-secondary);
	}

	.video-feature svg {
		color: var(--accent-teal);
		flex-shrink: 0;
	}

	.usecases-section {
		background: radial-gradient(circle at 20% 20%, rgba(244, 114, 182, 0.08), transparent 30%),
			radial-gradient(circle at 80% 20%, rgba(249, 168, 212, 0.08), transparent 25%);
	}

	.usecases-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.5rem;
	}

	.usecase-card {
		background: var(--glass);
		border: 1px solid var(--glass-border);
		border-radius: var(--radius);
		padding: 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		transition: all 0.3s ease;
		height: 100%;
	}

	.usecase-card:hover {
		transform: translateY(-4px);
		border-color: rgba(249, 168, 212, 0.25);
		box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
	}

	.usecase-image {
		border-radius: var(--radius-sm);
		overflow: hidden;
		background: rgba(255, 255, 255, 0.95);
		height: 180px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.usecase-image img {
		max-width: 100%;
		max-height: 100%;
		object-fit: cover;
	}

	.usecase-title {
		font-size: 1.1rem;
		font-weight: 700;
	}

	.usecase-description {
		color: var(--text-muted);
		line-height: 1.6;
		font-size: 0.95rem;
	}

	.performance-section {
		background: linear-gradient(180deg, rgba(244, 114, 182, 0.03), transparent);
	}

	.performance-block {
		display: grid;
		grid-template-columns: 1.2fr 1fr;
		gap: 2rem;
		align-items: center;
		padding: 2rem;
		border-radius: var(--radius);
		border: 1px solid var(--glass-border);
		background: rgba(255, 255, 255, 0.02);
		margin-bottom: 2rem;
	}

	.performance-block.reverse {
		grid-template-columns: 1fr 1.2fr;
	}

	.performance-content {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.performance-title {
		font-size: 1.5rem;
		font-weight: 700;
	}

	.performance-list {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		color: var(--text-muted);
		line-height: 1.6;
		padding: 0;
		margin: 0;
	}

	.performance-list li {
		position: relative;
		padding-left: 1.2rem;
	}

	.performance-list li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.6rem;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--accent-teal);
	}

	.performance-image {
		background: rgba(255, 255, 255, 0.95);
		border-radius: var(--radius);
		padding: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.performance-image img {
		max-width: 100%;
		object-fit: contain;
	}

	.floor-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
		margin: 1rem 0 2.5rem;
	}

	.floor-card {
		background: var(--glass);
		border: 1px solid var(--glass-border);
		border-radius: var(--radius-sm);
		padding: 1rem;
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		align-items: center;
	}

	.floor-card img {
		max-width: 100%;
		height: 120px;
		object-fit: contain;
		background: rgba(255, 255, 255, 0.95);
		border-radius: var(--radius-sm);
		padding: 0.5rem;
	}

	.floor-card span {
		color: var(--text-primary);
		font-weight: 600;
	}

	.battery-section {
		background: var(--bg-section);
	}

	.battery-grid {
		display: grid;
		grid-template-columns: 1.2fr 1fr;
		gap: 2rem;
		align-items: center;
	}

	.battery-specs {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.battery-spec {
		padding: 1rem;
		border-radius: var(--radius-sm);
		border: 1px solid var(--glass-border);
		background: var(--glass);
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.battery-spec-value {
		font-size: 1.35rem;
		font-weight: 800;
		color: var(--accent-teal);
	}

	.battery-spec-label {
		font-size: 0.9rem;
		color: var(--text-muted);
	}

	.battery-description {
		color: var(--text-secondary);
		line-height: 1.7;
		font-size: 1rem;
	}

	.battery-images {
		background: rgba(255, 255, 255, 0.95);
		border-radius: var(--radius);
		padding: 1.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.battery-main-image {
		max-width: 100%;
		object-fit: contain;
	}

	.easeofuse-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.easeofuse-card {
		padding: 1.25rem;
		border-radius: var(--radius-sm);
		border: 1px solid var(--glass-border);
		background: var(--glass);
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.easeofuse-icon {
		width: 48px;
		height: 48px;
		border-radius: 12px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background: rgba(244, 114, 182, 0.1);
		color: var(--accent-teal);
	}

	.easeofuse-card h3 {
		font-size: 1.1rem;
		margin: 0;
	}

	.easeofuse-card p {
		margin: 0;
		color: var(--text-muted);
		line-height: 1.6;
		font-size: 0.95rem;
	}

	.easeofuse-image {
		background: rgba(255, 255, 255, 0.95);
		border-radius: var(--radius);
		padding: 1.5rem;
		display: flex;
		justify-content: center;
	}

	.easeofuse-image img {
		max-width: 100%;
		object-fit: contain;
	}

	.safety-section {
		background: var(--bg-section);
	}

	.safety-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 1rem;
	}

	.safety-card {
		padding: 1.25rem;
		border-radius: var(--radius-sm);
		border: 1px solid var(--glass-border);
		background: var(--glass);
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.safety-card h3 {
		margin: 0;
		font-size: 1.05rem;
	}

	.safety-card p {
		margin: 0;
		color: var(--text-muted);
		line-height: 1.6;
		font-size: 0.95rem;
	}

	.safety-icon {
		width: 42px;
		height: 42px;
		border-radius: 10px;
		background: rgba(244, 114, 182, 0.12);
	}

	.dimensions-section {
		background: radial-gradient(circle at 80% 20%, rgba(249, 168, 212, 0.12), transparent 30%);
	}

	.dimensions-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		align-items: center;
	}

	.dimensions-content {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.dimension-item {
		display: flex;
		justify-content: space-between;
		padding: 1rem;
		border-radius: var(--radius-sm);
		border: 1px solid var(--glass-border);
		background: var(--glass);
	}

	.dimension-label {
		color: var(--text-secondary);
	}

	.dimension-value {
		font-weight: 700;
		color: var(--accent-teal);
	}

	.dimensions-note {
		color: var(--text-muted);
		line-height: 1.7;
	}

	.dimensions-image {
		background: rgba(255, 255, 255, 0.95);
		border-radius: var(--radius);
		padding: 1.5rem;
		display: flex;
		justify-content: center;
	}

	.dimensions-image img {
		max-width: 100%;
		object-fit: contain;
	}

	.included-section {
		background: var(--bg-section);
	}

	.included-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		align-items: center;
		margin-bottom: 2rem;
	}

	.included-list ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		color: var(--text-muted);
		line-height: 1.6;
	}

	.included-list li {
		position: relative;
		padding-left: 1.2rem;
	}

	.included-list li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.6rem;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--accent-teal);
	}

	.included-image {
		background: rgba(255, 255, 255, 0.95);
		border-radius: var(--radius);
		padding: 1.5rem;
		display: flex;
		justify-content: center;
	}

	.included-image img {
		max-width: 100%;
		object-fit: contain;
	}

	.accessories-title {
		font-size: 1.35rem;
		font-weight: 700;
		text-align: center;
		margin-bottom: 1.5rem;
	}

	.accessories-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 1.25rem;
	}

	.accessory-card {
		border-radius: var(--radius-sm);
		border: 1px solid var(--glass-border);
		background: var(--glass);
		padding: 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.accessory-image {
		background: rgba(255, 255, 255, 0.95);
		border-radius: var(--radius-sm);
		padding: 1rem;
		display: flex;
		justify-content: center;
	}

	.accessory-image img {
		max-width: 100%;
		object-fit: contain;
	}

	.accessory-title {
		font-size: 1.1rem;
		font-weight: 700;
	}

	.accessory-description {
		color: var(--text-muted);
		line-height: 1.6;
		font-size: 0.95rem;
	}

	.specs-section {
		background: var(--bg-section);
	}

	.specs-table {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		gap: 1rem;
	}

	.spec-category {
		border-radius: var(--radius);
		border: 1px solid var(--glass-border);
		background: var(--glass);
		padding: 1rem;
	}

	.spec-category-title {
		font-size: 1.1rem;
		font-weight: 700;
		margin-bottom: 0.75rem;
	}

	.spec-row {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		padding: 0.6rem 0.4rem;
		border-bottom: 1px solid rgba(255, 255, 255, 0.05);
	}

	.spec-row:last-child {
		border-bottom: none;
	}

	.spec-label {
		color: var(--text-muted);
		font-size: 0.95rem;
	}

	.spec-value {
		color: var(--text-primary);
		font-weight: 600;
		text-align: right;
		font-size: 0.95rem;
	}

	.cta-section {
		position: relative;
		padding: 4rem 2rem 5rem;
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
		background: radial-gradient(circle at 30% 30%, rgba(244, 114, 182, 0.15), transparent 35%),
			radial-gradient(circle at 70% 20%, rgba(249, 168, 212, 0.15), transparent 30%),
			linear-gradient(135deg, rgba(244, 114, 182, 0.08), rgba(249, 168, 212, 0.08));
	}

	.cta-eyebrow {
		display: block;
		color: var(--accent-teal);
		text-transform: uppercase;
		letter-spacing: 0.2em;
		font-weight: 600;
		margin-bottom: 0.75rem;
	}

	.cta-title {
		font-size: clamp(2rem, 5vw, 3rem);
		font-weight: 800;
		margin-bottom: 1rem;
	}

	.cta-description {
		color: var(--text-muted);
		max-width: 640px;
		margin: 0 auto 2rem;
		line-height: 1.7;
	}

	.cta-buttons {
		display: flex;
		justify-content: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	/* ========================
	   LIGHTBOX
	   ======================== */
	.lightbox {
		position: fixed;
		inset: 0;
		z-index: 9999;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 1rem;
	}

	.lightbox-backdrop {
		position: absolute;
		inset: 0;
		background: rgba(5, 5, 5, 0.95);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
	}

	.lightbox-close {
		position: absolute;
		top: 1.5rem;
		right: 1.5rem;
		z-index: 10;
		width: 48px;
		height: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--glass);
		border: 1px solid var(--glass-border);
		border-radius: 50%;
		color: var(--text-primary);
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.lightbox-close:hover {
		background: rgba(255, 255, 255, 0.15);
		border-color: rgba(244, 114, 182, 0.4);
		color: var(--accent-teal);
	}

	.lightbox-content {
		position: relative;
		z-index: 5;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
		max-width: 100%;
		max-height: calc(100vh - 180px);
		width: 100%;
	}

	.lightbox-nav {
		flex-shrink: 0;
		width: 56px;
		height: 56px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--glass);
		border: 1px solid var(--glass-border);
		border-radius: 50%;
		color: var(--text-primary);
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.lightbox-nav:hover {
		background: rgba(255, 255, 255, 0.15);
		border-color: rgba(244, 114, 182, 0.4);
		color: var(--accent-teal);
		transform: scale(1.05);
	}

	.lightbox-image-container {
		flex: 1;
		max-width: 1000px;
		max-height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.lightbox-image {
		max-width: 100%;
		max-height: calc(100vh - 260px);
		object-fit: contain;
		filter: drop-shadow(0 30px 60px rgba(0, 0, 0, 0.5));
	}

	.lightbox-caption {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		max-width: 500px;
		padding: 0.75rem 1.5rem;
		background: var(--glass);
		border: 1px solid var(--glass-border);
		border-radius: 999px;
	}

	.lightbox-caption-text {
		font-size: 0.95rem;
		font-weight: 600;
		color: var(--text-primary);
	}

	.lightbox-counter {
		font-size: 0.85rem;
		color: var(--accent-teal);
		font-weight: 500;
	}

	.lightbox-thumbnails {
		position: relative;
		z-index: 5;
		display: flex;
		gap: 0.75rem;
		margin-top: 1.5rem;
		padding: 0.75rem;
		background: var(--glass);
		border: 1px solid var(--glass-border);
		border-radius: var(--radius);
		overflow-x: auto;
		max-width: 100%;
	}

	.lightbox-thumbnail {
		flex-shrink: 0;
		width: 72px;
		height: 54px;
		border-radius: var(--radius-sm);
		overflow: hidden;
		cursor: pointer;
		border: 2px solid transparent;
		background: var(--glass);
		padding: 0.25rem;
		transition: all 0.3s ease;
		opacity: 0.6;
	}

	.lightbox-thumbnail:hover {
		opacity: 1;
	}

	.lightbox-thumbnail.active {
		border-color: var(--accent-teal);
		opacity: 1;
		box-shadow: 0 0 20px rgba(244, 114, 182, 0.3);
	}

	.lightbox-thumbnail img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

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

		.hero-gallery {
			order: -1;
		}

		.hero-image-wrapper {
			min-height: 300px;
			padding: 1.5rem;
		}

		.hero-image {
			max-height: 280px;
		}

		.hero-fullscreen-btn span {
			display: none;
		}

		.hero-fullscreen-btn {
			padding: 0.625rem;
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

		.highlights-grid {
			grid-template-columns: 1fr;
		}

		.highlight-card {
			min-height: 280px;
		}

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

		.video-features {
			flex-direction: column;
			align-items: center;
			gap: 1rem;
		}

		.video-feature {
			width: 100%;
			justify-content: center;
		}

		.hero-thumbnails {
			gap: 0.5rem;
			padding: 0.5rem;
		}

		.hero-thumbnail {
			width: 56px;
			height: 42px;
		}

		.lightbox-content {
			flex-direction: column;
			gap: 1rem;
		}

		.lightbox-nav {
			display: none;
		}

		.lightbox-image {
			max-height: calc(100vh - 300px);
			padding: 1rem;
		}

		.lightbox-caption {
			flex-direction: column;
			gap: 0.25rem;
			text-align: center;
		}

		.lightbox-thumbnails {
			padding: 0.5rem;
			gap: 0.5rem;
		}

		.lightbox-thumbnail {
			width: 56px;
			height: 42px;
		}

		.cta-section {
			padding: 5rem 1.5rem;
		}
	}
</style>

