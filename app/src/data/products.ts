import type { Product, AudioSample, Testimonial, FAQ, BeforeAfterImage } from '@/types';

export const products: Product[] = [
  {
    id: 'sfx-whoosh',
    name: 'Lionnn Labs Whoosh SFX Pack',
    description: 'A curated selection of 20 cinematic whooshes to add motion, energy, and impact.',
    price: 29.00,
    category: 'sfx',
    image: 'https://images.unsplash.com/photo-1511376777868-611b54f68947?w=800&q=80',
    features: ['20 cinematic whoosh sounds', 'High-quality 24-bit/48kHz WAV files', 'Drag and drop ready'],
    includes: ['20 Whoosh Sound Effects', 'PDF Installation Guide', 'Lifetime Updates']
  },
  {
    id: 'sfx-riser',
    name: 'Lionnn Labs Riser SFX Pack',
    description: '15 Powerful risers engineered to build tension and anticipation.',
    price: 29.00,
    category: 'sfx',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80',
    features: ['15 tension-building risers', 'Perfect for transitions', 'Studio-grade quality'],
    includes: ['15 Riser Sound Effects', 'PDF Installation Guide', 'Lifetime Updates']
  },
  {
    id: 'sfx-clicks',
    name: 'Lionnn Labs Clicks SFX Pack',
    description: '15 of our favorite high quality studio grade clicks to elevate any type of production.',
    price: 29.00,
    category: 'sfx',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80',
    features: ['15 click and snap sounds', 'Perfect for UI and transitions', 'Crystal clear quality'],
    includes: ['15 Click Sound Effects', 'PDF Installation Guide', 'Lifetime Updates']
  },
  {
    id: 'sfx-bundle',
    name: 'Lionnn Labs SFX Bundle',
    description: 'All 3 packs in one — Whoosh, Riser & Clicks.',
    price: 69.00,
    category: 'sfx',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80',
    features: ['50 total sound effects', 'Complete SFX library', 'Best value package'],
    includes: ['Whoosh Pack (20 sounds)', 'Riser Pack (15 sounds)', 'Clicks Pack (15 sounds)', 'Bundle Discount']
  },
  {
    id: 'color-lut',
    name: 'Lionnn Labs 16 LUT',
    description: 'Simple drag and drop the LUT for any video editing software. Works with Premiere Pro, After Effects, Final Cut and Cap Cut.',
    price: 89.00,
    category: 'color',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80',
    features: ['16mm film emulation', '7 camera profiles', 'Easy drag-and-drop'],
    includes: ['Lionnn Labs 16 LUTs (for 7 camera profiles)', '3x custom Grain Overlays', '1x Film Damage Overlay', 'Tutorial Videos', 'Example Grading Clips', 'Installation Guide (PDF)', 'Exclusive Color Settings Guide (PDF)', 'Monitoring LUTs']
  },
  {
    id: 'color-powergrade',
    name: 'Lionnn Labs 16 Powergrade',
    description: 'Our custom Davinci resolve powergrade made for even more control and customization over your final look.',
    price: 129.00,
    category: 'color',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80',
    features: ['DaVinci Resolve node tree', 'Full customization', 'Professional workflow'],
    includes: ['Lionnn Labs 16 PowerGrade (.dpx + .drx)', 'Tutorial Video', 'Full Grading Walkthrough', 'Example Grading Clips', 'Installation Guide (PDF)', 'Exclusive Color Settings Guide (PDF)', 'Monitoring LUTs']
  },
  {
    id: 'scribble-pack',
    name: 'Lionnn Labs Scribble Pack',
    description: 'Hand-drawn scribble elements and doodles for creative video overlays.',
    price: 19.00,
    category: 'scribble',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80',
    features: ['50+ scribble elements', 'Transparent PNG files', '4K resolution'],
    includes: ['50+ Scribble Elements', 'Animation Presets', 'Tutorial Video']
  },
  {
    id: 'vhs-pack',
    name: 'Lionnn Labs VHS Pack',
    description: 'Authentic VHS effects, glitches, and overlays for retro aesthetics.',
    price: 24.00,
    category: 'vhs',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80',
    features: ['VHS tape effects', 'Tracking glitches', 'Retro color shifts'],
    includes: ['VHS Overlay Collection', 'Glitch Transitions', 'Color Grade Presets']
  }
];

export const audioSamples: AudioSample[] = [
  { id: '1', name: 'Whoosh Bass', pack: 'WHOOSH PACK', duration: '0:03', waveform: [20, 40, 60, 80, 100, 80, 60, 40, 30, 50, 70, 90, 70, 50, 30, 20] },
  { id: '2', name: 'Whoosh Deep', pack: 'WHOOSH PACK', duration: '0:05', waveform: [30, 50, 70, 90, 100, 90, 70, 50, 40, 60, 80, 100, 80, 60, 40, 20] },
  { id: '3', name: 'Whoosh Wind', pack: 'WHOOSH PACK', duration: '0:02', waveform: [20, 30, 50, 70, 90, 100, 90, 70, 50, 40, 30, 20, 30, 40, 30, 20] },
  { id: '4', name: 'Riser Long Sharp Ending', pack: 'RISER PACK', duration: '0:03', waveform: [20, 25, 30, 40, 50, 60, 70, 80, 90, 100, 90, 80, 70, 60, 40, 20] },
  { id: '5', name: 'Riser Metallic Ring Low', pack: 'RISER PACK', duration: '0:02', waveform: [30, 40, 50, 60, 70, 80, 90, 100, 95, 85, 75, 65, 55, 45, 35, 25] },
  { id: '6', name: 'Riser Low Deep', pack: 'RISER PACK', duration: '0:01', waveform: [40, 50, 60, 70, 80, 90, 100, 100, 90, 80, 70, 60, 50, 40, 30, 20] },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'HUDSONFILMS_',
    handle: '@hudsonfilms_',
    role: 'VIDEO CREATOR',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    content: 'The sounds are so crisp and are high quality. Sound design is so crucial, and this pack definitely levelled up my videos and made them feel more immersive. It\'s worth the purchase :)'
  },
  {
    id: '2',
    name: 'S_AUVAGE',
    handle: '@s_auvage',
    role: 'FILMMAKER',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    content: 'This pack is epic. No fluff - no fillers - no more than you need. Just banger after banger.'
  },
  {
    id: '3',
    name: 'ALINAACKWONU',
    handle: '@alinaackwonu',
    role: 'FILMMAKER',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    content: 'My favourite part is having all essential sound effects in one place, which means I don\'t have to spend hours searching in multiple places anymore. Perfect for people wanting to start getting into sound design.'
  },
  {
    id: '4',
    name: 'BILGESUISIK',
    handle: '@bilgesuisik',
    role: 'FILMMAKER',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
    content: 'As someone who dreams of making films, I want the moments I capture to be more than just watchable, I want them to be felt. Turning them into something that looks like a film is exactly what brings those feelings to life. Lionnn Labs16 is easy to use, the results are beautiful, and most importantly - the process no longer feels like a technical struggle, but like a creative game that feeds the playful kid inside of me.'
  },
  {
    id: '5',
    name: 'KYLEMARCOE',
    handle: '@kylemarcoe',
    role: 'CINEMATOGRAPHER',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    content: 'Lionnn Labs Powergrade is awesome! I can\'t rave about it enough. I tried it on some shots from an older commercial, and it made them look WAY better than my own color grading. My favorite part? How easy it is to tweak the settings and nodes to fit your style while also providing lots of flexibility to make it unique to your own style. Everything\'s right there, super straightforward! As a cinematographer who\'s not a full-on colorist, this Powergrade makes me feel like a pro colorist in no time.'
  }
];

export const sfxFAQs: FAQ[] = [
  {
    id: '1',
    question: 'What makes these SFX packs unique?',
    answer: 'Our SFX packs are meticulously crafted by professional sound designers with years of experience in film and video production. Each sound is recorded and processed at studio-grade quality (24-bit/48kHz) to ensure crystal clear audio that elevates your productions.'
  },
  {
    id: '2',
    question: 'What\'s the difference between Lionnn Labs Whoosh, Riser, and Clicks?',
    answer: 'Whoosh sounds are perfect for adding motion and transitions, Risers build tension and anticipation for dramatic moments, and Clicks provide crisp UI sounds and accent elements. Each pack serves a different purpose in your sound design toolkit.'
  },
  {
    id: '3',
    question: 'Do they work with any software?',
    answer: 'Yes! All our SFX files are delivered as standard WAV files that work with any video editing software including Premiere Pro, Final Cut Pro, DaVinci Resolve, After Effects, and even mobile apps like CapCut.'
  }
];

export const colorFAQs: FAQ[] = [
  {
    id: '1',
    question: 'What\'s the difference between the PowerGrade and the LUT?',
    answer: 'PowerGrades are custom grading setups built specifically for DaVinci Resolve. They give you full control through node structures, allowing precise adjustments to color, contrast, grain, and more—perfect for achieving a refined film look. LUTs, on the other hand, are more universal and can be used in almost any editing software. They\'re fast and easy to apply but offer less flexibility than PowerGrades.'
  },
  {
    id: '2',
    question: 'What cameras does Lionnn Labs16 work with?',
    answer: 'Lionnn Labs16 works with any camera. For optimal results, we recommend shooting in a LOG/RAW profile and using the correct Color Space Transform (CST) settings in DaVinci Resolve. To make things even easier, we\'ve created dedicated PowerGrades/LUTs for popular camera profiles—including Blackmagic Gen 5, Sony S-Log3, DJI D-Log, Canon Log 3, Rec.709, RED Log3G10, and ARRI LogC3.'
  },
  {
    id: '3',
    question: 'I\'m new to color grading—can I still use Lionnn Labs16?',
    answer: 'Absolutely. Lionnn Labs16 is built for both beginners and experienced colorists. The LUTs are plug-and-play, while the PowerGrades come with clearly labeled nodes to guide you through the grading flow. We also include a walkthrough so you can get cinematic results with confidence, no matter your experience level.'
  }
];

export const beforeAfterImages: BeforeAfterImage[] = [
  {
    id: '1',
    before: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80',
    alt: 'Artist painting'
  },
  {
    id: '2',
    before: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1511376777868-611b54f68947?w=800&q=80',
    alt: 'Mountain landscape'
  },
  {
    id: '3',
    before: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=80',
    alt: 'Flower closeup'
  },
  {
    id: '4',
    before: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80',
    alt: 'Camera vintage'
  }
];
