import { Product } from '../contexts/EnquiryBasketContext';

export const products: Product[] = [
  {
    id: 'mg-500',
    name: 'Industrial Meat Grinder',
    model: 'MG-500',
    category: 'Meat Processing',
    description: 'High-capacity industrial meat grinder designed for large-scale meat processing operations. Features precision cutting technology and robust stainless steel construction.',
    features: [
      'Processing capacity: 500kg/hour',
      'Stainless steel construction (304 grade)',
      'Multiple cutting plate options (3-20mm)',
      'Safety interlock system',
      'Easy cleaning and maintenance',
      'Variable speed control',
      'Overload protection',
      'CE certified'
    ],
    image: 'https://images.unsplash.com/photo-1759997956694-55411e03aecf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWF0JTIwcHJvY2Vzc2luZyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjE4NTI0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 'wtp-1000',
    name: 'Water Treatment Plant',
    model: 'WTP-1000',
    category: 'Utilities',
    description: 'Complete water purification and treatment system ensuring compliance with food safety standards. Ideal for meat processing plants and food factories.',
    features: [
      'Treatment capacity: 1000L/hour',
      'Multi-stage filtration system',
      'UV sterilization',
      'Automatic backwash',
      'Real-time water quality monitoring',
      'Low maintenance design',
      'ISO 9001 certified',
      'Full automation available'
    ],
    image: 'https://images.unsplash.com/photo-1759155719591-6b8956818749?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHRyZWF0bWVudCUyMHN5c3RlbXxlbnwxfHx8fDE3NjE4NTI0MDF8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 'bf-200',
    name: 'Blast Freezer',
    model: 'BF-200',
    category: 'Refrigeration',
    description: 'Rapid freezing system for optimal food preservation. Maintains product quality by quickly reducing temperature to core freezing point.',
    features: [
      'Freezing capacity: 200kg/cycle',
      'Temperature range: -40°C to 0°C',
      'Rapid freeze technology',
      'Energy efficient operation',
      'Digital temperature control',
      'Stainless steel interior',
      'Programmable cycles',
      'Emergency alarm system'
    ],
    image: 'https://images.unsplash.com/photo-1741739813128-cb658a9a0f9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZnJlZXplcnxlbnwxfHx8fDE3NjE3NzQ3NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 'sc-300',
    name: 'Smoking Chamber',
    model: 'SC-300',
    category: 'Processing',
    description: 'Professional smoking and cooking chamber for meat and fish products. Precise temperature and humidity control for consistent results.',
    features: [
      'Chamber capacity: 300kg',
      'Temperature range: 20°C - 120°C',
      'Humidity control system',
      'Programmable smoke cycles',
      'Insulated double walls',
      'Touchscreen control panel',
      'Recipe memory storage',
      'Easy-clean design'
    ],
    image: 'https://images.unsplash.com/photo-1759159091682-3b98f4759367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3NjE4NTI0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 'vp-100',
    name: 'Vacuum Packager',
    model: 'VP-100',
    category: 'Packaging',
    description: 'Advanced vacuum sealing machine for extended shelf life and product protection. Suitable for various food products.',
    features: [
      'Chamber size: 100L',
      'Double sealing bars',
      'Adjustable vacuum levels',
      'Gas flushing option',
      'Programmable cycles',
      'Stainless steel construction',
      'Digital control panel',
      'High-speed operation'
    ],
    image: 'https://images.unsplash.com/photo-1740673384268-bbc26a0cbcd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YWN1dW0lMjBwYWNrYWdpbmd8ZW58MXx8fHwxNzYxODUyNDAxfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 'bs-50',
    name: 'Bone Saw',
    model: 'BS-50',
    category: 'Meat Processing',
    description: 'Heavy-duty bone saw for professional meat cutting operations. Precision cutting with maximum safety features.',
    features: [
      'Cutting capacity: 50cm blade',
      'Variable speed control',
      'Safety push stick included',
      'Blade tension indicator',
      'Stainless steel construction',
      'Easy blade replacement',
      'Emergency stop button',
      'Hygienic design'
    ],
    image: 'https://images.unsplash.com/photo-1759997956694-55411e03aecf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWF0JTIwcHJvY2Vzc2luZyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjE4NTI0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 'mt-500',
    name: 'Mixing Tank',
    model: 'MT-500',
    category: 'Processing',
    description: 'Industrial mixing tank for marinades, brines, and food preparations. Temperature control and agitation systems included.',
    features: [
      'Tank capacity: 500L',
      'Jacketed design for heating/cooling',
      'Variable speed agitator',
      'Temperature control system',
      '304 stainless steel',
      'CIP compatible',
      'Digital display',
      'Sanitary design'
    ],
    image: 'https://images.unsplash.com/photo-1759159091682-3b98f4759367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3NjE4NTI0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 'cs-1000',
    name: 'Conveyor System',
    model: 'CS-1000',
    category: 'Material Handling',
    description: 'Modular conveyor system for efficient material flow in food processing plants. Customizable configuration for any layout.',
    features: [
      'Belt width: 1000mm',
      'Variable speed drive',
      'Modular design',
      'Food-grade materials',
      'Easy to clean',
      'Adjustable height',
      'Safety guards included',
      'Low noise operation'
    ],
    image: 'https://images.unsplash.com/photo-1701328778019-e95dedbf5346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb252ZXlvciUyMGJlbHQlMjBmYWN0b3J5fGVufDF8fHx8MTc2MTgzNzY3OXww&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export const categories = [
  'All Equipment',
  'Meat Processing',
  'Refrigeration',
  'Processing',
  'Packaging',
  'Utilities',
  'Material Handling'
];
