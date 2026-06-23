import ServiceImg1 from '../assets/Service_Img1.png';
import ServiceImg2 from '../assets/Service_Img2.png';
import ServiceImg3 from '../assets/Service_Img3.png';
import ServiceImg4 from '../assets/Service_Img4.png';

export const services = [
  {
    id: 'website-development',
    number: '01',
    name: 'Website Development',
    title: 'Website Development',
    description:
      'We design and develop high-performance, visually stunning websites tailored to your brand.',
    imageUrl: ServiceImg1,
    imageAlt: 'Website Development',
    benefits: [
      'High-Performance React Frameworks',
      'SEO Optimized Architecture',
      'Responsive & Mobile-First Layouts',
      'Headless CMS Integrations'
    ],
    ctaText: 'Start Your Website Project',
    ctaLink: '#contact',
    gradient: 'from-indigo-600 to-violet-600',
  },
  {
    id: 'web-mobile-app',
    number: '02',
    name: 'Web & Mobile App Development',
    title: 'Web & Mobile App Development',
    description:
      'From complex web platforms to native mobile experiences, we build scalable applications.',
    imageUrl: ServiceImg2,
    imageAlt: 'Mobile App Development',
    benefits: [
      'Cross-Platform React Native Apps',
      'Scalable Cloud Architecture',
      'Offline-First Capabilities',
      'Real-Time Sync & Notifications'
    ],
    ctaText: 'Build Your App',
    ctaLink: '#contact',
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    id: 'ui-ux-design',
    number: '03',
    name: 'UI/UX Design Services',
    title: 'UI/UX Design Services',
    description:
      'Great products begin with great design.',
    imageUrl: ServiceImg3,
    imageAlt: 'UI/UX Design',
    benefits: [
      'Interactive Prototypes & Wireframes',
      'User Journey Mapping',
      'Design Systems (Figma)',
      'Conversion-Optimized Layouts'
    ],
    ctaText: 'Get a Design Consultation',
    ctaLink: '#contact',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    id: 'custom-software',
    number: '04',
    name: 'Custom Software Development',
    title: 'Custom Software Development',
    description:
      'We build bespoke software solutions engineered to your exact requirements.',
    imageUrl: ServiceImg4,
    imageAlt: 'Custom Software Development',
    benefits: [
      'Bespoke API Integrations',
      'Legacy System Modernization',
      'Automated Business Workflows',
      'Enterprise-Grade Security'
    ],
    ctaText: 'Explore Custom Solutions',
    ctaLink: '#contact',
    gradient: 'from-emerald-600 to-teal-600',
  },
];