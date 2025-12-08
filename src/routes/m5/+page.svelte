<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

// Video embed URL (replace VIDEO_ID with actual ID)
const videoEmbedUrl = 'https://www.youtube.com/embed/VIDEO_ID?rel=0&modestbranding=1';

	const images = {
		hero: {
			main: '/m5/m5-hero-main.png',
			environment: '/m5/m5-hero-environment.png'
		},
		highlights: {
			tanks: '/m5/m5-performance-water-chemical.png',
			onePass: '/m5/m5-performance-before-after-strip.png',
			autoBrush: '/m5/m5-easeofuse-control-panel.png',
			battery: '/m5/m5-battery-pack.png',
			controls: '/m5/m5-easeofuse-control-panel.png',
			wheels: '/m5/m5-maintenance-anti-skid-wheel.png'
		},
		usecases: {
			supermarket: '/m5/m5-environment-supermarket.png',
			office: '/m5/m5-environment-office.png',
			warehouse: '/m5/m5-environment-warehouse.png',
			hospital: '/m5/m5-environment-hospital.png',
			school: '/m5/m5-environment-school.png',
			hotel: '/m5/m5-environment-hotel.png'
		},
		performance: {
			scrubbing: '/m5/m5-performance-scrubbing.png',
			water: '/m5/m5-performance-water-chemical.png',
			vacuum: '/m5/m5-performance-vacuum-drying.png',
			beforeAfter: '/m5/m5-performance-before-after-strip.png'
		},
		floors: {
			ceramic: '/m5/m5-floor-ceramic.png',
			pvc: '/m5/m5-floor-pvc.png',
			concrete: '/m5/m5-floor-concrete.png',
			marble: '/m5/m5-floor-marble.png'
		},
		battery: {
			pack: '/m5/m5-battery-pack.png',
			charging: '/m5/m5-battery-charging.png',
			runtime: '/m5/m5-battery-runtime-graphic.png'
		},
		easeOfUse: {
			controlPanel: '/m5/m5-easeofuse-control-panel.png',
			operator: '/m5/m5-easeofuse-operator.png',
			callouts: '/m5/m5-easeofuse-control-callouts.png'
		},
		safety: {
			dryFloor: '/m5/m5-safety-dry-floor.png',
			tankCleaning: '/m5/m5-hygiene-tank-cleaning.png',
			certifications: '/m5/m5-compliance-certifications.png'
		},
		dimensions: {
			top: '/m5/m5-dimensions-top.png',
			side: '/m5/m5-dimensions-side.png',
			narrowAisle: '/m5/m5-footprint-narrow-aisle.png'
		},
		included: {
			kit: '/m5/m5-included-kit.png'
		},
		accessories: {
			brushes: '/m5/m5-accessories-brushes-pads.png',
			squeegee: '/m5/m5-accessories-squeegee-blades.png',
			chemicals: '/m5/m5-accessories-chemicals.png',
			handling: '/m5/m5-accessories-handling-storage.png'
		}
	};

	const galleryImages = [
		{ src: images.hero.main, alt: 'MZL M5 walk-behind floor scrubber - front view', caption: 'Front view' },
		{ src: images.hero.environment, alt: 'MZL M5 scrubber in operation', caption: 'In operation' },
		{ src: images.performance.scrubbing, alt: 'MZL M5 scrubbing performance', caption: 'Scrubbing power' },
		{ src: images.performance.water, alt: 'MZL M5 water and chemical control', caption: 'Water & chemical control' },
		{ src: images.performance.vacuum, alt: 'MZL M5 vacuum and drying performance', caption: 'Vacuum & drying' },
		{ src: images.performance.beforeAfter, alt: 'MZL M5 cleaning results', caption: 'Before & after results' }
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
		{ label: 'Cleaning width', value: '560 mm' },
		{ label: 'Theoretical productivity', value: 'approx. 2,000 m²/h' },
		{ label: 'Solution / recovery tanks', value: '50 L / 50 L' },
		{ label: 'Typical runtime (standard mode)', value: '≈4.5 hours' }
	];

	const highlights = [
		{
			title: 'Dual 50 L tanks',
			subtitle: 'Longer cleaning runs',
			description: '50 L solution and 50 L recovery tanks reduce refills and dumps, extending cleaning cycles.',
			image: images.highlights.tanks
		},
		{
			title: '3-in-1 cleaning',
			subtitle: 'Scrub, vacuum, dry',
			description: 'Disc brush, suction motor and squeegee clean and dry in one pass, reducing downtime and slip risk.',
			image: images.highlights.onePass
		},
		{
			title: 'Automatic brush control',
			subtitle: 'Brush down / up',
			description: 'Brush deck lowers at start and lifts when cleaning stops—no manual deck handling needed.',
			image: images.highlights.autoBrush
		},
		{
			title: 'Battery-powered mobility',
			subtitle: 'Cord-free cleaning',
			description: 'Walk-behind, battery-powered design improves manoeuvrability around fixtures and corridors.',
			image: images.highlights.battery
		},
		{
			title: 'Intuitive controls',
			subtitle: 'Quick start',
			description: 'Simple control layout with one-click start keeps operation straightforward for any team.',
			image: images.highlights.controls
		},
		{
			title: 'Anti-skid wheels',
			subtitle: 'Stable movement',
			description: 'Thickened anti-skid wheels improve steering stability and safety on wet floors.',
			image: images.highlights.wheels
		}
	];

	const usecases = [
		{
			title: 'Retail & Supermarkets',
			description: 'Efficient cleaning of store aisles, floors under shelves and checkout areas.',
			image: images.usecases.supermarket
		},
		{
			title: 'Offices & Public Buildings',
			description: 'Maintains clean corridors, lobbies and common areas in offices and public institutions.',
			image: images.usecases.office
		},
		{
			title: 'Warehouses & Light Industrial',
			description: 'Effective on concrete and sealed industrial floors for general maintenance.',
			image: images.usecases.warehouse
		},
		{
			title: 'Hospitals & Healthcare',
			description: 'Hygienic cleaning of corridors, waiting areas and common spaces.',
			image: images.usecases.hospital
		},
		{
			title: 'Schools & Education',
			description: 'Keeps hallways, classrooms and communal areas safe and clean.',
			image: images.usecases.school
		},
		{
			title: 'Hotels & Hospitality',
			description: 'Ideal for lobbies, banquet halls, corridors and guest-area floors.',
			image: images.usecases.hotel
		}
	];

	const floorTypes = [
		{ title: 'Ceramic / Tile floors', image: images.floors.ceramic },
		{ title: 'Vinyl / PVC / Sealed floors', image: images.floors.pvc },
		{ title: 'Sealed concrete / cement', image: images.floors.concrete },
		{ title: 'Marble / Stone / Terrazzo (sealed)', image: images.floors.marble }
	];

	const specifications = {
		performance: [
			{ label: 'Cleaning width', value: '560 mm' },
			{ label: 'Cleaning productivity', value: 'approx. 2,000 m²/h' }
		],
		tanks: [
			{ label: 'Solution tank', value: '50 L' },
			{ label: 'Recovery tank', value: '50 L' }
		],
		power: [
			{ label: 'Battery', value: '12 V × 2 (maintenance-free gel or lead-acid)' },
			{ label: 'Runtime', value: 'approx. 4.5 hours continuous work' }
		],
		motors: [
			{ label: 'Brush motor', value: '500 W' },
			{ label: 'Suction / vacuum motor', value: '310 W' }
		],
		brush: [
			{ label: 'Brush type', value: 'Disc-type, medium hardness' },
			{ label: 'Brush width', value: '560 mm' },
			{ label: 'Squeegee width', value: '800 mm' }
		],
		dimensions: [
			{ label: 'Dimensions (L × W × H)', value: '1,308 × 800 × 1,050 mm' },
			{ label: 'Weight (with battery)', value: 'approx. 137.5 kg' }
		],
		other: [
			{ label: 'Controls', value: 'One-click start, simple panel, automatic brush down/up, 3-in-1 cleaning' }
		]
	};

	const accessories = [
		{
			title: 'Brushes & pads',
			description: 'Alternate brush or pad types for different floor surfaces like vinyl or sealed concrete.',
			image: images.accessories.brushes
		},
		{
			title: 'Squeegee blades',
			description: 'Replacement or specialised blades for better drying on varied floor types.',
			image: images.accessories.squeegee
		},
		{
			title: 'Cleaning chemicals',
			description: 'Compatible detergents, degreasers or disinfectants to boost cleaning performance.',
			image: images.accessories.chemicals
		},
		{
			title: 'Handling & storage',
			description: 'Optional trolleys, covers or racks for easier storage and transport.',
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
	<title>MZL M5 Battery-Powered Walk-Behind Floor Scrubber | MZL Machines</title>
	<meta
		name="description"
		content="MZL M5 - Compact 50 L-tank, battery-powered walk-behind scrubber. 560 mm cleaning width, ~2,000 m²/h productivity, dual 50 L tanks, ~4.5h runtime for daily hard-floor cleaning."
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
			<span class="hero-badge animate-item">MZL M5 Series</span>
			<h1 class="hero-title">
				Battery-Powered<br />
				<span class="accent">Walk-Behind</span><br />
				Floor Scrubber
			</h1>
			<p class="hero-tagline">
				Compact 50 L-tank scrubber for efficient daily cleaning of medium to large hard-floor areas.
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
			<h2 class="section-title">Key features of the MZL M5 floor scrubber</h2>
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
			<h2 class="section-title">Watch the MZL M5 at work</h2>
			<p class="section-subtitle">
				See how the MZL M5 battery-powered scrubber delivers one-pass cleaning for medium and large floors.
			</p>
		</div>

		<div class="video-wrapper animate-item">
			<div class="video-container">
				<iframe 
					src={videoEmbedUrl}
					title="MZL M5 Floor Scrubber Demo Video"
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
					<span>One-pass cleaning demo</span>
				</div>
				<div class="video-feature">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
						<polyline points="22 4 12 14.01 9 11.01"/>
					</svg>
					<span>Traction-assisted manoeuvring</span>
				</div>
				<div class="video-feature">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
						<polyline points="22 4 12 14.01 9 11.01"/>
					</svg>
					<span>Real-world daily cleaning</span>
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
			<h2 class="section-title">Where the MZL M5 scrubber works best</h2>
			<p class="section-subtitle">
				The M5 is a compact commercial floor scrubber designed for regular cleaning of medium to large floor areas across retail, offices, warehouses, healthcare and education.
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
			<h2 class="section-title">Efficient daily cleaning</h2>
		</div>

		<div class="performance-block">
			<div class="performance-content animate-item">
				<h3 class="performance-title">Scrubbing power</h3>
				<ul class="performance-list">
					<li>Disc-type, medium-hardness brush with 560 mm cleaning width for daily maintenance</li>
					<li>500 W brush motor delivers consistent scrubbing to lift dust, dirt and light soil</li>
					<li>Suitable for ceramic tile, vinyl/PVC, sealed concrete and sealed stone/terrazzo</li>
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
					<li>50 L solution and 50 L recovery tanks reduce refill cycles for continuous cleaning</li>
					<li>Water-flow system supports consistent solution delivery and cleaning results</li>
					<li>Generous capacity enables longer runs for daily maintenance and scheduled deep cleans</li>
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
					<li>310 W suction motor captures dirty water efficiently</li>
					<li>800 mm squeegee collects slurry and leaves floors ready for foot traffic</li>
					<li>Scrub, vacuum and dry in one pass to lower slip risk and reduce downtime</li>
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
			<span class="section-eyebrow">Battery & Power</span>
			<h2 class="section-title">Battery and power: simple, reliable operation</h2>
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
						<span class="battery-spec-label">Gel / lead-acid</span>
					</div>
					<div class="battery-spec">
						<span class="battery-spec-value">≈4.5h</span>
						<span class="battery-spec-label">Typical runtime</span>
					</div>
				</div>
				<p class="battery-description">
					12 V × 2 maintenance-free gel or lead-acid battery system delivers about 4.5 hours of continuous cleaning—ideal for routine retail, office or institutional shifts. External charging is straightforward between runs.
				</p>
			</div>
			<div class="battery-images animate-item">
				<img src={images.battery.pack} alt="Battery pack" class="battery-main-image" />
			</div>
		</div>
	</div>
</section>

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
						<circle cx="12" cy="12" r="10" />
						<polyline points="12,6 12,12 16,14" />
					</svg>
				</div>
				<h3>One-click start</h3>
				<p>Simple one-click start and intuitive layout reduce training time.</p>
			</div>
			<div class="easeofuse-card animate-item">
				<div class="easeofuse-icon">
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
						<path d="M22 10v6M2 10l10-5 10 5-10 5z" />
						<path d="M6 12v5c6 3 12 0 12 0v-5" />
					</svg>
				</div>
				<h3>Automatic brush down/up</h3>
				<p>Brush lowers at start and lifts when stopped—no manual deck handling.</p>
			</div>
			<div class="easeofuse-card animate-item">
				<div class="easeofuse-icon">
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
						<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
						<line x1="16" y1="8" x2="2" y2="22" />
						<line x1="17.5" y1="15" x2="9" y2="15" />
					</svg>
				</div>
				<h3>Compact, mobile design</h3>
				<p>Battery-powered mobility makes it easy to manoeuvre through aisles and corridors.</p>
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
				<h3>Ergonomic handle</h3>
				<p>Comfortable handle and manageable weight help reduce operator fatigue.</p>
			</div>
			<div class="easeofuse-card animate-item">
				<div class="easeofuse-icon">
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
						<path d="M4 7h16" />
						<path d="M4 17h16" />
						<path d="M9 3v18" />
						<path d="M15 3v18" />
					</svg>
				</div>
				<h3>Battery-powered convenience</h3>
				<p>Cord-free operation for flexible cleaning around fixtures and in tight spaces.</p>
			</div>
		</div>

		<div class="easeofuse-image animate-item">
			<img src={images.easeOfUse.controlPanel} alt="M5 Control Panel" />
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
			<h2 class="section-title">Safety and hygiene built into the design</h2>
		</div>

		<div class="safety-grid">
			<div class="safety-card animate-item">
				<div class="safety-icon safe"></div>
				<h3>Slip-risk reduction</h3>
				<p>Combined scrubbing, vacuuming and drying leave floors safe for immediate use.</p>
			</div>
			<div class="safety-card animate-item">
				<div class="safety-icon cable"></div>
				<h3>Low-noise cleaning</h3>
				<p>Battery-powered, low-noise operation suits offices, schools and healthcare.</p>
			</div>
			<div class="safety-card animate-item">
				<div class="safety-icon tanks"></div>
				<h3>Hygienic maintenance</h3>
				<p>Easy-to-clean tanks and filters support hygienic upkeep in sensitive sites.</p>
			</div>
			<div class="safety-card animate-item">
				<div class="safety-icon certified"></div>
				<h3>Certified quality</h3>
				<p>Built to meet commercial standards (e.g. CE/RoHS) for professional environments.</p>
			</div>
			<div class="safety-card animate-item">
				<div class="safety-icon certified"></div>
				<h3>Anti-skid stability</h3>
				<p>Thickened anti-skid wheels support controlled movement on wet floors.</p>
			</div>
		</div>
	</div>
</section>

<section class="section dimensions-section animate-section">
	<div class="section-container">
		<div class="section-header animate-item">
			<span class="section-eyebrow">Dimensions & Footprint</span>
			<h2 class="section-title">Compact dimensions to fit tight spaces</h2>
		</div>

		<div class="dimensions-grid">
			<div class="dimensions-content animate-item">
				<div class="dimension-item">
					<span class="dimension-label">Overall product size (L × W × H)</span>
					<span class="dimension-value">1,308 × 800 × 1,050 mm</span>
				</div>
				<div class="dimension-item">
					<span class="dimension-label">Squeegee width</span>
					<span class="dimension-value">800 mm</span>
				</div>
				<p class="dimensions-note">
					Compact build allows navigation of narrow corridors, retail aisles and confined spaces—ideal for supermarkets, schools, hospitals and offices.
				</p>
			</div>
			<div class="dimensions-image animate-item">
				<img src={images.dimensions.side} alt="M5 Dimensions" />
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
			<h2 class="section-title">What's included with the MZL M5 scrubber</h2>
		</div>

		<div class="included-grid">
			<div class="included-list animate-item">
				<ul>
					<li>Base machine</li>
					<li>Batteries (maintenance-free gel / lead-acid)</li>
					<li>Charger / charging cable</li>
					<li>Standard brush / pad driver</li>
					<li>Squeegee assembly</li>
					<li>Manual / quick-start guide</li>
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
			<h2 class="section-title">Technical specifications – MZL M5 walk-behind floor scrubber</h2>
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
				<h3 class="spec-category-title">Motors</h3>
				{#each specifications.motors as spec}
					<div class="spec-row">
						<span class="spec-label">{spec.label}</span>
						<span class="spec-value">{spec.value}</span>
					</div>
				{/each}
			</div>

			<div class="spec-category">
				<h3 class="spec-category-title">Brush / Pad & Recovery</h3>
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
	
	<span class="cta-eyebrow">Ready to see the M5 in action?</span>
	<h2 class="cta-title">Get Your Quote Today</h2>
	<p class="cta-description">
		Our team will help you determine if the MZL M5 is the right fit for your facility.
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
		--accent-teal: #2dd4bf;
		--accent-mint: #5eead4;
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
		background: radial-gradient(circle, rgba(45, 212, 191, 0.3), transparent 70%);
		top: -200px;
		right: -200px;
	}

	.orb-2 {
		width: 400px;
		height: 400px;
		background: radial-gradient(circle, rgba(94, 234, 212, 0.25), transparent 70%);
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
		max-width: 520px;
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
		background: rgba(94, 234, 212, 0.9);
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
		box-shadow: 0 0 15px rgba(94, 234, 212, 0.3);
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
		0%,
		100% {
			opacity: 0.3;
			transform: scaleY(1);
		}
		50% {
			opacity: 1;
			transform: scaleY(1.2);
		}
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
		box-shadow: 0 10px 40px rgba(94, 234, 212, 0.3);
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
		max-width: 700px;
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
		border-color: rgba(94, 234, 212, 0.4);
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
		background: radial-gradient(circle, rgba(45, 212, 191, 0.1), transparent 60%);
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
		background: radial-gradient(circle at 20% 20%, rgba(45, 212, 191, 0.08), transparent 30%),
			radial-gradient(circle at 80% 20%, rgba(94, 234, 212, 0.08), transparent 25%);
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
		border-color: rgba(94, 234, 212, 0.25);
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
		background: linear-gradient(180deg, rgba(45, 212, 191, 0.03), transparent);
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
		grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
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
		background: rgba(45, 212, 191, 0.1);
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
		background: rgba(45, 212, 191, 0.12);
	}

	.dimensions-section {
		background: radial-gradient(circle at 80% 20%, rgba(94, 234, 212, 0.12), transparent 30%);
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
		background: radial-gradient(circle at 30% 30%, rgba(45, 212, 191, 0.15), transparent 35%),
			radial-gradient(circle at 70% 20%, rgba(94, 234, 212, 0.15), transparent 30%),
			linear-gradient(135deg, rgba(45, 212, 191, 0.08), rgba(94, 234, 212, 0.08));
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
		border-color: rgba(94, 234, 212, 0.4);
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
		border-color: rgba(94, 234, 212, 0.4);
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
		box-shadow: 0 0 20px rgba(94, 234, 212, 0.3);
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

