<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	// ============================================
	// IMAGE & VIDEO CONFIGURATION - Replace paths as needed
	// ============================================
	
	// Video embed URL - Replace VIDEO_ID with your actual YouTube video ID
	// Example: 'https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1'
	const videoEmbedUrl = 'https://www.youtube.com/embed/VIDEO_ID?rel=0&modestbranding=1';

	// Ensure asset paths are absolute (hosted remotely) to avoid missing files in static build
	const assetHost = 'https://coywobndzyvslurwqtdt.supabase.co/storage/v1/object/public/mzl';
	const prefixAssets = (value: unknown): unknown => {
		if (typeof value === 'string' && value.startsWith('/f30/')) {
			return `${assetHost}${value}`;
		}
		if (Array.isArray(value)) return value.map(prefixAssets);
		if (value && typeof value === 'object') {
			return Object.fromEntries(Object.entries(value).map(([key, val]) => [key, prefixAssets(val)]));
		}
		return value;
	};

	// ============================================
	// PRODUCT GALLERY - Add your product photos here
	// ============================================
	const galleryImages = [
		{ src: 'https://coywobndzyvslurwqtdt.supabase.co/storage/v1/object/public/mzl/f30-hero-main.png', alt: 'MZL F30 Floor Scrubber - Front View', caption: 'Front view' },
		{ src: 'https://coywobndzyvslurwqtdt.supabase.co/storage/v1/object/public/mzl/f30-hero-main.png', alt: 'MZL F30 Floor Scrubber - Angle View', caption: 'Angle view' },
		{ src: 'https://coywobndzyvslurwqtdt.supabase.co/storage/v1/object/public/mzl/f30-hero-main.png', alt: 'MZL F30 Floor Scrubber - Side View', caption: 'Side view' },
		{ src: 'https://coywobndzyvslurwqtdt.supabase.co/storage/v1/object/public/mzl/f30-hero-main.png', alt: 'MZL F30 Floor Scrubber - Control Panel', caption: 'Control panel' },
		{ src: 'https://coywobndzyvslurwqtdt.supabase.co/storage/v1/object/public/mzl/f30-hero-main.png', alt: 'MZL F30 Floor Scrubber - Tank Detail', caption: 'Tank detail' },
		{ src: 'https://coywobndzyvslurwqtdt.supabase.co/storage/v1/object/public/mzl/f30-hero-main.png', alt: 'MZL F30 Floor Scrubber - Brush System', caption: 'Brush system' },
		{ src: 'https://coywobndzyvslurwqtdt.supabase.co/storage/v1/object/public/mzl/f30-hero-main.png', alt: 'MZL F30 Floor Scrubber - In Action', caption: 'In action' }
	];

	// Lightbox state
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

	const rawImages = {
		hero: {
			main: 'https://coywobndzyvslurwqtdt.supabase.co/storage/v1/object/public/mzl/f30-hero-main.png',
			environment: '/f30/f30-hero-environment-retail.png'
		},
		highlights: {
			runtime: '/f30/f30-highlights-runtime.png',
			threeInOne: '/f30/f30-highlights-3in1.png',
			handleFold: '/f30/f30-highlights-handle-fold.png',
			autoBrush: '/f30/f30-highlights-auto-brush.png',
			oneKey: '/f30/f30-highlights-onekey.png',
			efficiency: '/f30/f30-highlights-efficiency.png'
		},
		usecases: {
			factory: '/f30/f30-usecase-factory.png',
			supermarket: '/f30/f30-usecase-supermarket.png',
			dininghall: '/f30/f30-usecase-dininghall.png',
			shoppingmall: '/f30/f30-usecase-shoppingmall.png',
			hospital: '/f30/f30-usecase-hospital.png',
			garage: '/f30/f30-usecase-garage.png',
			schools: '/f30/f30-usecase-schools.png',
			hospitality: '/f30/f30-usecase-hospitality.png',
			office: '/f30/f30-usecase-office.png'
		},
		performance: {
			scrubbing: '/f30/f30-performance-scrubbing-power.png',
			water: '/f30/f30-performance-water-chemical.png',
			vacuum: '/f30/f30-performance-vacuum-drying.png',
			beforeAfter: '/f30/f30-performance-before-after-strip.png'
		},
		floors: {
			epoxy: '/f30/f30-floor-epoxy.png',
			pvc: '/f30/f30-floor-pvc.png',
			marble: '/f30/f30-floor-marble.png',
			ceramic: '/f30/f30-floor-ceramic.png',
			cement: '/f30/f30-floor-cement.png',
			wood: '/f30/f30-floor-wooden.png'
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
		quality: {
			detachableTank: '/f30/f30-quality-detachable-tank.png',
			foldingArmrest: '/f30/f30-quality-folding-armrest.png',
			antiSkidWheel: '/f30/f30-quality-anti-skid-wheel.png',
			largeWaterIntake: '/f30/f30-quality-large-water-intake.png',
			waterFilter: '/f30/f30-quality-water-filter.png'
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

	const images = prefixAssets(rawImages) as typeof rawImages;

	// Key specifications
	const keyStats = [
		{ label: 'Cleaning width', value: '430 mm' },
		{ label: 'Theoretical productivity', value: 'up to 1,600 m²/h' },
		{ label: 'Solution / recovery tanks', value: '27 L / 30 L' },
		{ label: 'Max runtime (ECO)', value: 'up to 5.5 hours' }
	];

	// Highlights data
	const highlights = [
		{
			title: '5.5h continuous work (ECO mode)',
			subtitle: 'Work multiple zones on one charge',
			description: 'Up to 5.5 hours of continuous runtime in ECO mode so operators can clean multiple zones on a single charge.',
			image: images.highlights.runtime
		},
		{
			title: 'Clean, brush and vacuum in one',
			subtitle: 'One-pass cleaning',
			description: 'Scrubs and vacuums in a single pass, leaving floors clean and ready to use with minimal downtime.',
			image: images.highlights.threeInOne
		},
		{
			title: 'Handle folds 170°',
			subtitle: 'Easy steering & storage',
			description: 'A 170° adjustable handle makes the machine easier to steer for different operators and folds down for compact storage.',
			image: images.highlights.handleFold
		},
		{
			title: 'Automatic brush lift',
			subtitle: 'Simplified start-up',
			description: 'The brush automatically raises and lowers, simplifying start-up and transport while reducing wear on pads and brushes.',
			image: images.highlights.autoBrush
		},
		{
			title: 'One-key start & intelligent panel',
			subtitle: 'Fast onboarding',
			description: 'One-key start and an intelligent control panel make operation simple, reducing training time for new users.',
			image: images.highlights.oneKey
		},
		{
			title: 'High cleaning efficiency',
			subtitle: 'Up to 1,600 m²/h',
			description: 'Efficient 430 mm scrub path and squeegee system deliver fast coverage in supermarkets, factories and other busy facilities.',
			image: images.highlights.efficiency
		}
	];

	// Use cases data
	const usecases = [
		{
			title: 'Factory',
			description: 'Cleans production floors, epoxy and concrete surfaces, corridors and loading areas in light industrial sites.',
			image: images.usecases.factory
		},
		{
			title: 'Supermarket',
			description: 'Ideal for grocery aisles, fresh produce sections, checkout lanes and back-of-house service corridors.',
			image: images.usecases.supermarket
		},
		{
			title: 'Dining hall',
			description: 'Keeps canteens, cafeterias and food courts clean between meal services and throughout the day.',
			image: images.usecases.dininghall
		},
		{
			title: 'Shopping mall',
			description: 'Suitable for entrances, walkways, escalator landings and polished mall concourses with constant pedestrian traffic.',
			image: images.usecases.shoppingmall
		},
		{
			title: 'Hospital',
			description: 'Supports hygienic cleaning in corridors, nursing stations and support areas requiring frequent maintenance.',
			image: images.usecases.hospital
		},
		{
			title: 'Garage',
			description: 'Handles sealed concrete in basement car parks, garages and access ramps where safety and presentation are important.',
			image: images.usecases.garage
		},
		{
			title: 'Schools & education',
			description: 'Corridors, classrooms, assembly halls, libraries and student amenities.',
			image: images.usecases.schools
		},
		{
			title: 'Hotels & hospitality',
			description: 'Hotel corridors, lobbies, function rooms, restaurants and back-of-house traffic areas.',
			image: images.usecases.hospitality
		},
		{
			title: 'Offices & public buildings',
			description: 'Reception areas, foyers, shared spaces, amenities and back-of-house corridors.',
			image: images.usecases.office
		}
	];

	const floorTypes = [
		{ title: 'Epoxy floor', image: images.floors.epoxy },
		{ title: 'PVC floor', image: images.floors.pvc },
		{ title: 'Marble floor', image: images.floors.marble },
		{ title: 'Ceramic tile', image: images.floors.ceramic },
		{ title: 'Cement floor', image: images.floors.cement },
		{ title: 'Wooden floor', image: images.floors.wood }
	];

	// Technical specifications
	const specifications = {
		performance: [
			{ label: 'Cleaning width', value: '430 mm' },
			{ label: 'Theoretical productivity', value: 'up to 1,600 m²/h' }
		],
		tanks: [
			{ label: 'Solution tank capacity', value: '27 L' },
			{ label: 'Recovery tank capacity', value: '30 L' }
		],
		power: [
			{ label: 'System voltage', value: '24 V DC (2 × 12 V)' },
			{ label: 'Battery type & capacity', value: 'Maintenance-free gel batteries, 12 V × 2 – 83 Ah' },
			{ label: 'Max runtime (ECO)', value: 'up to 5.5 hours' }
		],
		motors: [
			{ label: 'Brush motor power', value: '350 W' },
			{ label: 'Vacuum motor power', value: '310 W' }
		],
		brush: [
			{ label: 'Brush type', value: 'Disc' },
			{ label: 'Brush width', value: '430 mm' },
			{ label: 'Squeegee width', value: '620 mm' },
			{ label: 'Approx. brush pressure', value: 'about 23 kg' }
		],
		dimensions: [
			{ label: 'Overall dimensions (L × W × H)', value: 'approx. 900 × 575 × 1200 mm' },
			{ label: 'Net weight (with batteries)', value: 'approx. 116 kg' }
		],
		noise: [
			{ label: 'Noise level', value: 'Not specified by manufacturer' }
		],
		warranty: [
			{ label: 'Machine warranty', value: '12 months (standard commercial use, conditions apply)' },
			{ label: 'Battery warranty', value: '12 months (subject to battery supplier terms)' }
		]
	};

	const qualityFeatures = [
		{
			title: 'Detachable water tank',
			description: 'The large-capacity water tank lifts out for quick emptying, rinsing and inspection, reducing turnaround times between jobs.',
			image: images.quality.detachableTank
		},
		{
			title: 'Integrated folding armrest',
			description: 'A strong, integrated armrest folds up to 170 degrees to suit different operators and reduce space when the machine is stored or transported.',
			image: images.quality.foldingArmrest
		},
		{
			title: 'Thickened anti-skid wheel',
			description: 'Durable, thickened anti-skid wheels provide safer manoeuvring, flexible steering and long service life on busy commercial floors.',
			image: images.quality.antiSkidWheel
		},
		{
			title: 'Large size water intake',
			description: 'A wide-mouth fill port allows quick, convenient refilling of the solution tank with less spillage and mess.',
			image: images.quality.largeWaterIntake
		},
		{
			title: 'Clean water filter',
			description: 'An integrated clean-water filter traps debris from the solution tank, helping protect valves and jets and maintain consistent water flow.',
			image: images.quality.waterFilter
		}
	];

	// Accessories data
	const accessories = [
		{
			title: 'Brushes & pads',
			description: 'Range of brushes and pads for different floor types and soil levels, from light maintenance cleaning through to more aggressive scrubbing.',
			image: images.accessories.brushes
		},
		{
			title: 'Squeegee blades',
			description: 'Replacement front and rear squeegee blades, including blade options suitable for oily or greasy floors.',
			image: images.accessories.squeegee
		},
		{
			title: 'Cleaning chemicals',
			description: 'Neutral cleaners, degreasers and sanitising detergents matched to commercial hard floor maintenance.',
			image: images.accessories.chemicals
		},
		{
			title: 'Handling & storage',
			description: 'Ramps, covers and other accessories to move, protect and store the machine between sites or shifts.',
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
			.fromTo('.hero-image-wrapper', 
				{ opacity: 0, scale: 0.95, y: 30 }, 
				{ opacity: 1, scale: 1, y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.5')
			.fromTo('.hero-thumbnail', 
				{ opacity: 0, y: 15 }, 
				{ opacity: 0.6, y: 0, stagger: 0.05, duration: 0.4, ease: 'power3.out' }, '-=0.4');

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

		// Video section animation
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
				duration: 0.5,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: '.video-features',
					start: 'top 90%',
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
		content="MZL F30 mini battery walk-behind floor scrubber – compact 30L scrubber for daily cleaning. 430 mm cleaning width, up to 1,600 m²/h productivity and up to 5.5h runtime in ECO mode."
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
				MZL F30 Mini<br />
				<span class="accent">Battery Walk-Behind</span><br />
				Floor Scrubber
			</h1>
			<p class="hero-tagline">Compact 30L scrubber for fast, daily cleaning of busy floors.</p>
			
			<div class="key-stats">
				{#each keyStats as stat}
					<div class="key-stat">
						<span class="stat-value">{stat.value}</span>
						<span class="stat-label">{stat.label}</span>
					</div>
				{/each}
			</div>

			<div class="hero-cta-group">
				<a href={`${base}/support`} class="btn-primary">Get a Quote</a>
				<a href={`${base}/support`} class="btn-secondary">Book a Demo</a>
				<a href={`${base}/support`} class="btn-ghost">
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
						<polyline points="7,10 12,15 17,10"/>
						<line x1="12" y1="15" x2="12" y2="3"/>
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

<!-- Section 2: Highlights Strip -->
<section class="section highlights-section animate-section">
	<div class="section-container">
		<div class="section-header animate-item">
			<span class="section-eyebrow">Key Features</span>
			<h2 class="section-title">Key features of the MZL F30 floor scrubber</h2>
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

<!-- Section 2.5: Video Section -->
<section class="section video-section animate-section">
	<div class="video-bg">
		<div class="gradient-orb orb-video"></div>
	</div>
	
	<div class="section-container">
		<div class="section-header animate-item">
			<span class="section-eyebrow">See It In Action</span>
			<h2 class="section-title">Watch the MZL F30 at work</h2>
			<p class="section-subtitle">
				See how the MZL F30 delivers efficient, one-pass cleaning across commercial and industrial floors.
			</p>
		</div>

		<div class="video-wrapper animate-item">
			<div class="video-container">
				<iframe 
					src={videoEmbedUrl}
					title="MZL F30 Floor Scrubber Demo Video"
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
					<span>Easy operation walkthrough</span>
				</div>
				<div class="video-feature">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
						<polyline points="22 4 12 14.01 9 11.01"/>
					</svg>
					<span>Real-world results</span>
				</div>
			</div>
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
			<h2 class="section-title">Where the MZL F30 scrubber works best</h2>
			<p class="section-subtitle">
				The MZL F30 is a compact mini walk-behind scrubber built for regular cleaning of medium-size floor areas. 
				Its 27/30 L tank set, long ECO runtime and one-pass cleaning performance make it ideal for daily maintenance across commercial, industrial and public facilities.
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
			<h2 class="section-title">Cleaning performance: deep clean in a single pass</h2>
		</div>

		<!-- 4.1 Scrubbing Power -->
		<div class="performance-block">
			<div class="performance-content animate-item">
				<h3 class="performance-title">Scrubbing power</h3>
				<ul class="performance-list">
					<li>Brush type: disc brush</li>
					<li>Cleaning width: 430 mm scrub path for efficient coverage in mid-sized zones.</li>
					<li>Brush motor power: 350 W for strong mechanical action on daily soil and more stubborn marks.</li>
					<li>Approx. brush pressure: about 23 kg for consistent contact on smooth and lightly textured floors.</li>
					<li>Suitable floor types: epoxy floors, PVC floors, marble floors, ceramic tiles, cement floors and wooden floors.</li>
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
					<li>Solution tank capacity: 27 L.</li>
					<li>Recovery tank capacity: 30 L.</li>
					<li>The detachable twin-tank design reduces trips to fill and empty, helping crews maintain productivity in larger areas.</li>
					<li>Standard and ECO working modes support controlled solution flow and help optimise chemical usage over long shifts.</li>
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
					<li>Vacuum motor power: 310 W for reliable recovery of dirty solution from the floor.</li>
					<li>Squeegee width: 620 mm, capturing the scrub path and leaving a dry, safe surface behind the machine.</li>
					<li>One-pass cleaning and drying reduce slip risk and allow quick return-to-service for high-traffic spaces.</li>
				</ul>
			</div>
			<div class="performance-image">
				<img src={images.performance.vacuum} alt="Vacuum and drying" />
				<img src={images.performance.beforeAfter} alt="Before and after cleaning strip" style="margin-top: 1rem; border-radius: var(--radius-sm); background: var(--glass);" />
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
			<h2 class="section-title">Battery and power: compact machine, long runtime</h2>
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
						<span class="battery-spec-value">83 Ah</span>
						<span class="battery-spec-label">Battery capacity</span>
					</div>
					<div class="battery-spec">
						<span class="battery-spec-value">5.5 hrs</span>
						<span class="battery-spec-label">Max runtime (ECO)</span>
					</div>
				</div>
				<p class="battery-description">
					Battery system: 24 V (2 × 12 V) maintenance-free gel battery pack. Battery capacity: 83 Ah gel batteries sized for everyday commercial cleaning workloads.
					Typical runtime: up to 5.5 hours in ECO mode on a full charge, depending on floor type, soil level and operator technique.
					Charging method: supplied 24 V charger – simply park the machine, connect the charger and allow it to replenish between shifts.
				</p>
			</div>
			<div class="battery-images animate-item">
				<img src={images.battery.pack} alt="Battery pack" class="battery-main-image" />
				<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; margin-top: 1rem;">
					<img src={images.battery.charging} alt="Battery charging" style="border-radius: var(--radius-sm); background: var(--glass); padding: 0.5rem;" />
					<img src={images.battery.runtime} alt="Battery runtime graphic" style="border-radius: var(--radius-sm); background: var(--glass); padding: 0.5rem;" />
				</div>
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
				<p>One-key start and an intelligent control panel make it simple for operators to select modes and begin cleaning with minimal training.</p>
			</div>
			<div class="easeofuse-card animate-item">
				<div class="easeofuse-icon">
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
						<path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
						<path d="M6 12v5c6 3 12 0 12 0v-5"/>
					</svg>
				</div>
				<h3>Quick training</h3>
				<p>Straightforward operation and familiar walk-behind layout help new staff become confident quickly and maintain consistent results.</p>
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
				<p>Push-behind configuration, balanced weight distribution and a comfortable handle help reduce operator fatigue over longer shifts.</p>
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
				<p>The F30’s compact body and 430 mm deck make it easy to manoeuvre in aisles, corridors and between fixtures while still delivering strong coverage.</p>
			</div>
		</div>

		<div class="easeofuse-image animate-item">
			<img src={images.easeOfUse.controlPanel} alt="F30 Control Panel" />
		</div>
	</div>
</section>

<!-- Section 7: Supported Floor Types -->
<section class="section floor-section animate-section">
	<div class="section-container">
		<div class="section-header animate-item">
			<span class="section-eyebrow">Floor Compatibility</span>
			<h2 class="section-title">Supported floor types</h2>
			<p class="section-subtitle">
				The MZL F30 is designed to handle a wide range of commercial floor surfaces, delivering consistent cleaning performance across different materials.
			</p>
		</div>

		<div class="floor-grid">
			{#each floorTypes as floor, i}
				<div class="floor-card animate-item" style="animation-delay: {i * 0.05}s">
					<div class="floor-image">
						<img src={floor.image} alt={floor.title} />
					</div>
					<h3 class="floor-title">{floor.title}</h3>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Section 7: Machine Quality & Maintenance-Friendly Design -->
<section class="section quality-section animate-section">
	<div class="section-container">
		<div class="section-header animate-item">
			<span class="section-eyebrow">Machine Quality</span>
			<h2 class="section-title">Machine quality and operator-friendly design</h2>
		</div>

		<div class="usecases-grid">
			{#each qualityFeatures as feature, i}
				<div class="usecase-card" style="animation-delay: {i * 0.05}s">
					<div class="usecase-image">
						<img src={feature.image} alt={feature.title} />
					</div>
					<h3 class="usecase-title">{feature.title}</h3>
					<p class="usecase-description">{feature.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Section 8: Safety, Hygiene & Compliance -->
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
				<img src={images.safety.dryFloor} alt="Dry floors" class="safety-image" />
				<h3>Drier floors, reduced slip risk</h3>
				<p>The 310 W vacuum motor and 620 mm squeegee work together to leave floors clean and dry in a single pass, helping reduce slip hazards in public spaces.</p>
			</div>
			<div class="safety-card animate-item">
				<img src={images.hero.environment} alt="Low-noise cleaning" class="safety-image" />
				<h3>Low-noise daytime cleaning</h3>
				<p>Battery power and efficient drive components support low-noise operation, suitable for use during trading hours and in occupied facilities.</p>
			</div>
			<div class="safety-card animate-item">
				<img src={images.safety.tankCleaning} alt="Hygienic tanks" class="safety-image" />
				<h3>Hygienic tank design</h3>
				<p>Detachable tanks with large openings make it easier to empty, rinse and inspect solution and recovery tanks after use.</p>
			</div>
			<div class="safety-card animate-item">
				<img src={images.safety.certifications} alt="Certifications" class="safety-image" />
				<h3>Quality and certifications</h3>
				<p>Built to commercial standards with CE, RoHS and related certifications for the machine platform.</p>
			</div>
		</div>
	</div>
</section>

<!-- Section 9: Dimensions & Footprint -->
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
					<span class="dimension-value">approx. 900 × 575 × 1,200 mm</span>
				</div>
				<div class="dimension-item">
					<span class="dimension-label">Squeegee width</span>
					<span class="dimension-value">620 mm</span>
				</div>
				<p class="dimensions-note">
					The F30’s compact footprint makes it suitable for standard commercial corridors, storerooms and service areas. 
					The 430 mm scrub path lets it work neatly between racking, around obstacles and in congested zones.
				</p>
			</div>
			<div class="dimensions-image animate-item">
				<img src={images.dimensions.side} alt="F30 Dimensions" />
			</div>
		</div>
	</div>
</section>

<!-- Section 10: What's Included & Optional Accessories -->
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
					<li>MZL F30 mini walk-behind floor scrubber</li>
					<li>Maintenance-free gel batteries installed</li>
					<li>24 V charger</li>
					<li>Standard disc brush or pad driver (model-dependent)</li>
					<li>Squeegee assembly complete with blades</li>
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

<!-- Section 11: Technical Specifications -->
<section class="section specs-section animate-section">
	<div class="section-container">
		<div class="section-header animate-item">
			<span class="section-eyebrow">Technical Specifications</span>
			<h2 class="section-title">Technical specifications – MZL F30 mini walk-behind floor scrubber</h2>
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
				<h3 class="spec-category-title">Noise</h3>
				{#each specifications.noise as spec}
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
		<a href={`${base}/support`} class="btn-primary btn-large">Request a Quote</a>
		<a href={`${base}/support`} class="btn-secondary btn-large">Book a Demo</a>
	</div>
</section>

<!-- Lightbox Modal -->
<svelte:window on:keydown={handleKeydown} />

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
		background: rgba(45, 212, 191, 0.9);
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
		box-shadow: 0 0 15px rgba(45, 212, 191, 0.3);
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
		border-color: rgba(45, 212, 191, 0.4);
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
		background: radial-gradient(circle, rgba(34, 211, 238, 0.1), transparent 60%);
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
	   FLOOR TYPES SECTION
	   ======================== */
	.floor-section {
		background: var(--bg-section);
	}

	.floor-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 1.25rem;
		margin-top: 1rem;
	}

	.floor-card {
		padding: 1.25rem;
		background: var(--glass);
		border: 1px solid var(--glass-border);
		border-radius: var(--radius-sm);
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		transition: all 0.3s ease;
	}

	.floor-card:hover {
		transform: translateY(-3px);
		border-color: rgba(45, 212, 191, 0.3);
	}

	.floor-image {
		background: #f3f4f6;
		border-radius: var(--radius-sm);
		padding: 0.75rem;
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 140px;
	}

	.floor-image img {
		max-width: 100%;
		max-height: 110px;
		object-fit: contain;
	}

	.floor-title {
		font-size: 1rem;
		font-weight: 700;
		color: var(--text-primary);
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

	.safety-image {
		width: 100%;
		display: block;
		border-radius: var(--radius-sm);
		margin-bottom: 1rem;
		background: var(--glass);
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
		border-color: rgba(45, 212, 191, 0.4);
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
		border-color: rgba(45, 212, 191, 0.4);
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
		box-shadow: 0 0 20px rgba(45, 212, 191, 0.3);
	}

	.lightbox-thumbnail img {
		width: 100%;
		height: 100%;
		object-fit: contain;
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

