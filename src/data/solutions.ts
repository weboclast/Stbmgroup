// Solutions data structure aligned with new IA

export interface Solution {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon?: string;
  image?: string;
}

export interface SolutionDetail extends Solution {
  tier: 'complete-facilities' | 'infrastructure-systems' | 'operations-support';
  hero: {
    headline: string;
    subheadline: string;
    stats?: Array<{ label: string; value: string }>;
  };
  challenge: {
    title: string;
    description: string;
  };
  solution: {
    title: string;
    description: string;
  };
  included: {
    title: string;
    items: string[];
  };
  caseExample?: {
    title: string;
    description: string;
    results: string[];
  };
  relatedSolutions: string[];
}

// Tier 1: Complete Facilities
export const completeFacilities: Solution[] = [
  {
    id: 'cattle-slaughterhouse',
    title: 'Cattle Slaughterhouse',
    slug: 'cattle-slaughterhouse',
    description: 'Complete turnkey cattle processing facilities designed for maximum efficiency and compliance.',
    image: 'cattle processing facility'
  },
  {
    id: 'sheep-goat-slaughterhouse',
    title: 'Sheep & Goat Slaughterhouse',
    slug: 'sheep-goat-slaughterhouse',
    description: 'Specialized facilities for small ruminant processing with integrated systems.',
    image: 'sheep processing plant'
  },
  {
    id: 'poultry-processing',
    title: 'Poultry Processing',
    slug: 'poultry-processing',
    description: 'High-throughput poultry processing plants with automated systems and hygiene controls.',
    image: 'poultry processing line'
  },
  {
    id: 'deboning-meat-processing',
    title: 'Deboning & Meat Processing',
    slug: 'deboning-meat-processing',
    description: 'Advanced meat cutting and processing facilities with climate-controlled environments.',
    image: 'meat processing room'
  }
];

// Tier 2: Infrastructure Systems
export const infrastructureSystems: Solution[] = [
  {
    id: 'wastewater-treatment',
    title: 'Wastewater Treatment',
    slug: 'wastewater-treatment',
    description: 'Multi-stage treatment systems ensuring >95% BOD/COD removal and full compliance.',
    image: 'wastewater treatment plant'
  },
  {
    id: 'hvac-refrigeration',
    title: 'HVAC & Refrigeration',
    slug: 'hvac-and-refrigeration',
    description: 'Industrial climate control systems for cold storage and processing environments.',
    image: 'industrial refrigeration system'
  },
  {
    id: 'hygienic-infrastructure',
    title: 'Hygienic Infrastructure',
    slug: 'hygienic-infrastructure',
    description: 'Food-grade flooring, drainage systems, and cleaning infrastructure for compliance.',
    image: 'industrial hygienic flooring'
  },
  {
    id: 'power-automation',
    title: 'Power & Automation',
    slug: 'power-and-automation',
    description: 'Electrical systems, process controls, and backup power for continuous operations.',
    image: 'industrial automation system'
  }
];

// Tier 3: Operations & Support
export const operationsSupport: Solution[] = [
  {
    id: 'facility-management',
    title: 'Facility Management',
    slug: 'facility-management',
    description: 'Complete outsourced technical operations management with guaranteed uptime.',
    image: 'facility management team'
  },
  {
    id: 'preventive-maintenance',
    title: 'Preventive Maintenance',
    slug: 'preventive-maintenance',
    description: 'Scheduled maintenance programs preventing breakdowns and extending equipment life.',
    image: 'maintenance technician'
  },
  {
    id: 'technical-support',
    title: '24/7 Technical Support',
    slug: 'technical-support',
    description: 'Emergency support and expert troubleshooting whenever you need it.',
    image: 'technical support engineer'
  }
];

// Detailed solution content
export const solutionDetails: Record<string, SolutionDetail> = {
  // Complete Facilities Details
  'cattle-slaughterhouse': {
    id: 'cattle-slaughterhouse',
    title: 'Complete Cattle Slaughterhouse Solutions',
    slug: 'cattle-slaughterhouse',
    description: 'Complete turnkey cattle processing facilities designed for maximum efficiency and compliance.',
    tier: 'complete-facilities',
    hero: {
      headline: 'Complete Cattle Slaughterhouse Solutions',
      subheadline: 'Turnkey facilities designed, built, and commissioned to process cattle efficiently while meeting all regulatory requirements. From stunning to cold storage—one integrated system.',
      stats: [
        { label: 'Capacity', value: 'Up to 200 head/hour' },
        { label: 'Compliance', value: '100% Halal & International Standards' },
        { label: 'Experience', value: '27+ Years in UAE' }
      ]
    },
    challenge: {
      title: 'The Challenge',
      description: 'Building a cattle slaughterhouse requires coordinating dozens of specialized systems—from humane stunning and bleeding to evisceration, cold chain management, wastewater treatment, and hygiene systems. Each must work together seamlessly to ensure food safety, religious compliance, worker safety, and environmental regulations are met.'
    },
    solution: {
      title: 'The STBM Solution',
      description: 'STBM delivers complete cattle slaughterhouses as a single, integrated project. We design the facility layout, supply all equipment, install critical infrastructure, integrate controls, and commission the entire system. You get a facility that is ready to operate on day one, backed by one accountable partner.'
    },
    included: {
      title: 'What is Included',
      items: [
        'Slaughter Process Equipment (Stunning, Bleeding, Hide Removal, Evisceration)',
        'Cold Chain Systems (Blast Freezers, Cold Rooms, Refrigerated Transport)',
        'Wastewater Treatment Plant',
        'HVAC & Climate Control',
        'Hygienic Infrastructure (Monile Flooring, Drains, Wall Systems)',
        'Power Distribution & Backup',
        'Process Automation & Controls',
        'Staff Facilities & Hygiene Stations',
        'Commissioning & Training'
      ]
    },
    caseExample: {
      title: 'Case Example',
      description: 'Complete 150 head/hour cattle facility in Abu Dhabi',
      results: [
        'Delivered turnkey facility in 14 months',
        'Achieved Halal certification on first inspection',
        'Zero wastewater violations in first year'
      ]
    },
    relatedSolutions: ['wastewater-treatment', 'hvac-refrigeration', 'facility-management']
  },

  'sheep-goat-slaughterhouse': {
    id: 'sheep-goat-slaughterhouse',
    title: 'Sheep & Goat Slaughterhouse Solutions',
    slug: 'sheep-goat-slaughterhouse',
    description: 'Specialized facilities for small ruminant processing with integrated systems.',
    tier: 'complete-facilities',
    hero: {
      headline: 'Complete Sheep & Goat Slaughterhouse Solutions',
      subheadline: 'Purpose-built facilities for small ruminant processing with specialized equipment for efficient, compliant operations from stunning to packaging.',
      stats: [
        { label: 'Capacity', value: 'Up to 600 head/hour' },
        { label: 'Efficiency', value: '40% faster processing' },
        { label: 'Projects', value: '50+ facilities delivered' }
      ]
    },
    challenge: {
      title: 'The Challenge',
      description: 'Small ruminant processing requires specialized equipment and workflows different from cattle operations. High throughput during peak seasons (Eid, Ramadan) demands efficient automation while maintaining religious compliance and food safety standards.'
    },
    solution: {
      title: 'The STBM Solution',
      description: 'STBM designs facilities optimized for sheep and goat processing with automated conveyor systems, specialized equipment, and integrated cold chain management. Our layouts maximize throughput while ensuring worker safety and product quality.'
    },
    included: {
      title: 'What is Included',
      items: [
        'Automated Overhead Conveyor Systems',
        'Stunning & Bleeding Equipment',
        'Automated Hide Pullers',
        'Evisceration & Inspection Stations',
        'Carcass Washing Systems',
        'Blast Chillers & Cold Storage',
        'Wastewater Management',
        'Hygiene & Sanitation Systems',
        'Process Controls & Monitoring'
      ]
    },
    caseExample: {
      title: 'Case Example',
      description: '400 head/hour facility in Dubai',
      results: [
        'Processed 50,000 animals during Eid with zero downtime',
        'Reduced labor costs by 35%',
        'Achieved international export certification'
      ]
    },
    relatedSolutions: ['wastewater-treatment', 'power-automation', 'preventive-maintenance']
  },

  'poultry-processing': {
    id: 'poultry-processing',
    title: 'Poultry Processing Plant Solutions',
    slug: 'poultry-processing',
    description: 'High-throughput poultry processing plants with automated systems and hygiene controls.',
    tier: 'complete-facilities',
    hero: {
      headline: 'Complete Poultry Processing Plant Solutions',
      subheadline: 'Automated poultry processing facilities from live bird receiving through cutting, chilling, and packaging. Designed for high throughput and strict hygiene control.',
      stats: [
        { label: 'Capacity', value: 'Up to 6,000 birds/hour' },
        { label: 'Automation', value: '90%+ automated processes' },
        { label: 'Yield', value: 'Optimized cutting systems' }
      ]
    },
    challenge: {
      title: 'The Challenge',
      description: 'Poultry processing demands high-speed automation, precise temperature control, and exceptional hygiene standards. Managing live birds, preventing cross-contamination, maintaining cold chain integrity, and handling high-volume wastewater all require specialized systems working in perfect coordination.'
    },
    solution: {
      title: 'The STBM Solution',
      description: 'STBM delivers complete poultry processing lines with proven European equipment, climate-controlled environments, automated cutting systems, and integrated chilling. Every component is designed to work together for maximum yield, food safety, and operational efficiency.'
    },
    included: {
      title: 'What is Included',
      items: [
        'Live Bird Receiving & Holding',
        'Automated Stunning & Bleeding',
        'Scalding & Defeathering Systems',
        'Evisceration Lines',
        'Automated Cutting & Deboning',
        'Chilling Systems (Air & Water)',
        'Packaging & Weighing',
        'Climate Control (Temperature & Humidity)',
        'Wastewater & Waste Management',
        'Hygiene Systems & CIP'
      ]
    },
    caseExample: {
      title: 'Case Example',
      description: '4,000 birds/hour facility in Sharjah',
      results: [
        'Achieved 98.5% yield efficiency',
        'Reduced water consumption by 40%',
        'Obtained HACCP and export certifications'
      ]
    },
    relatedSolutions: ['hvac-refrigeration', 'hygienic-infrastructure', 'facility-management']
  },

  'deboning-meat-processing': {
    id: 'deboning-meat-processing',
    title: 'Deboning & Meat Processing Solutions',
    slug: 'deboning-meat-processing',
    description: 'Advanced meat cutting and processing facilities with climate-controlled environments.',
    tier: 'complete-facilities',
    hero: {
      headline: 'Complete Deboning & Meat Processing Solutions',
      subheadline: 'Climate-controlled meat cutting facilities with advanced equipment for deboning, portioning, and value-added processing. Maximize yield and product quality.',
      stats: [
        { label: 'Temperature', value: '10-12°C controlled' },
        { label: 'Yield', value: 'Up to 95% recovery' },
        { label: 'Quality', value: 'Extended shelf life' }
      ]
    },
    challenge: {
      title: 'The Challenge',
      description: 'Meat deboning and processing requires precise temperature control, skilled workflows, and hygienic design to prevent contamination. Maximizing yield while maintaining product quality demands specialized equipment, proper training, and climate management.'
    },
    solution: {
      title: 'The STBM Solution',
      description: 'STBM creates complete deboning rooms and processing halls with industrial refrigeration, hygienic infrastructure, and professional cutting equipment. Our facilities maintain optimal temperatures, support efficient workflows, and meet international hygiene standards.'
    },
    included: {
      title: 'What is Included',
      items: [
        'Climate-Controlled Processing Halls (10-12°C)',
        'Professional Cutting Tables & Equipment',
        'Deboning & Portioning Tools',
        'Vacuum Packaging Systems',
        'Industrial Grinders & Mixers',
        'Hygienic Flooring & Drainage',
        'Cold Storage Integration',
        'Sanitation Stations',
        'Ventilation & Air Quality Control'
      ]
    },
    caseExample: {
      title: 'Case Example',
      description: '2,000 kg/hour deboning facility in Al Ain',
      results: [
        'Increased yield by 8% vs. previous facility',
        'Extended product shelf life by 40%',
        'Reduced energy costs with efficient refrigeration'
      ]
    },
    relatedSolutions: ['hvac-refrigeration', 'hygienic-infrastructure', 'technical-support']
  },

  // Infrastructure Systems Details
  'wastewater-treatment': {
    id: 'wastewater-treatment',
    title: 'Slaughterhouse Wastewater Treatment',
    slug: 'wastewater-treatment',
    description: 'Multi-stage treatment systems ensuring >95% BOD/COD removal and full compliance.',
    tier: 'infrastructure-systems',
    hero: {
      headline: 'Slaughterhouse Wastewater Treatment Solutions',
      subheadline: 'Specialized multi-stage treatment systems designed for high-strength organic wastewater from meat processing. Achieve >95% BOD/COD removal and full environmental compliance.',
      stats: [
        { label: 'Removal Rate', value: '>95% BOD/COD' },
        { label: 'Compliance', value: '100% regulatory standards' },
        { label: 'Systems Installed', value: '30+ plants in UAE' }
      ]
    },
    challenge: {
      title: 'Why Slaughterhouse Wastewater Requires Specialized Treatment',
      description: 'Slaughterhouse wastewater contains extremely high levels of blood, fats, proteins, and suspended solids—far exceeding municipal treatment capacity. Direct discharge can result in heavy fines, operational shutdowns, and environmental damage. Standard systems simply cannot handle this load.'
    },
    solution: {
      title: 'The STBM Solution',
      description: 'STBM designs and installs complete wastewater treatment plants using proven multi-stage processes: screening, dissolved air flotation (DAF), biological treatment, and sludge management. Our systems are sized specifically for your facility and can be installed with minimal disruption.'
    },
    included: {
      title: 'System Components',
      items: [
        'Screening & Solids Removal',
        'Equalization Tanks',
        'Dissolved Air Flotation (DAF) for Fat/Oil Removal',
        'Biological Treatment (Aerobic/Anaerobic)',
        'Clarification & Filtration',
        'Sludge Dewatering & Management',
        'pH Control & Chemical Dosing',
        'Effluent Monitoring & Controls',
        'Compliance Reporting Systems'
      ]
    },
    caseExample: {
      title: 'Case Example',
      description: 'Wastewater plant upgrade for 100 cattle/day facility',
      results: [
        'Achieved 96% BOD reduction (from 3,000 to 120 mg/L)',
        'Zero violations in 18 months of operation',
        'Installed without shutting down production'
      ]
    },
    relatedSolutions: ['cattle-slaughterhouse', 'power-automation', 'preventive-maintenance']
  },

  'hvac-refrigeration': {
    id: 'hvac-refrigeration',
    title: 'HVAC & Refrigeration Systems',
    slug: 'hvac-and-refrigeration',
    description: 'Industrial climate control systems for cold storage and processing environments.',
    tier: 'infrastructure-systems',
    hero: {
      headline: 'Industrial HVAC & Refrigeration Systems',
      subheadline: 'Climate control solutions for food processing: cold rooms, blast freezers, climate-controlled processing halls, and temperature monitoring systems.',
      stats: [
        { label: 'Temperature Range', value: '-40°C to +15°C' },
        { label: 'Efficiency', value: 'Energy-optimized systems' },
        { label: 'Uptime', value: '99.5% guaranteed' }
      ]
    },
    challenge: {
      title: 'The Challenge',
      description: 'Food processing requires precise temperature control across multiple zones—from blast freezing at -35°C to climate-controlled cutting rooms at 12°C. System failures can result in massive product loss, while inefficient systems drive up operating costs. UAE heat adds extra demand on refrigeration capacity.'
    },
    solution: {
      title: 'The STBM Solution',
      description: 'STBM designs and installs industrial refrigeration systems using proven compressor technology, efficient evaporators, and smart controls. We size systems properly for UAE conditions, integrate backup capacity, and provide 24/7 monitoring to protect your product.'
    },
    included: {
      title: 'What We Deliver',
      items: [
        'Cold Room Design & Construction',
        'Blast Freezers (-35°C to -40°C)',
        'Chiller Rooms (0°C to 4°C)',
        'Climate-Controlled Processing Halls (10-12°C)',
        'Industrial Compressor Systems',
        'Evaporators & Condensing Units',
        'Insulated Panels & Doors',
        'Temperature Monitoring & Alarms',
        'Energy Management Systems'
      ]
    },
    caseExample: {
      title: 'Case Example',
      description: 'Cold storage expansion for meat processor',
      results: [
        'Added 500-ton capacity without disrupting operations',
        'Reduced energy costs by 25% with efficient compressors',
        'Zero temperature excursions in first year'
      ]
    },
    relatedSolutions: ['poultry-processing', 'power-automation', 'facility-management']
  },

  'hygienic-infrastructure': {
    id: 'hygienic-infrastructure',
    title: 'Hygienic Infrastructure Systems',
    slug: 'hygienic-infrastructure',
    description: 'Food-grade flooring, drainage systems, and cleaning infrastructure for compliance.',
    tier: 'infrastructure-systems',
    hero: {
      headline: 'Hygienic Infrastructure for Food Processing',
      subheadline: 'Food-grade flooring, industrial drainage, wall systems, and cleaning infrastructure designed to meet HACCP, ISO, and international hygiene standards.',
      stats: [
        { label: 'Compliance', value: 'HACCP & ISO standards' },
        { label: 'Durability', value: '20+ year lifespan' },
        { label: 'Installation', value: 'Minimal downtime' }
      ]
    },
    challenge: {
      title: 'The Challenge',
      description: 'Food processing facilities face constant exposure to water, chemicals, temperature extremes, and heavy traffic. Standard construction materials crack, harbor bacteria, and fail inspections. Achieving and maintaining hygiene compliance requires purpose-built infrastructure.'
    },
    solution: {
      title: 'The STBM Solution',
      description: 'STBM installs certified food-grade infrastructure: seamless epoxy Monile flooring, stainless steel drainage channels, hygienic wall cladding, and integrated cleaning systems. Our installations are designed for easy cleaning, chemical resistance, and long-term durability.'
    },
    included: {
      title: 'System Components',
      items: [
        'Monile Epoxy Flooring (Seamless, Non-Slip)',
        'Industrial Drainage Channels (Stainless Steel)',
        'Hygienic Wall Cladding (PVC/Stainless)',
        'Coving & Sealed Joints',
        'Integrated Floor Drains',
        'Washdown Stations & Hose Reels',
        'Hand Hygiene Stations',
        'Footbath Systems',
        'Chemical-Resistant Coatings'
      ]
    },
    caseExample: {
      title: 'Case Example',
      description: 'Floor replacement for failing poultry plant',
      results: [
        'Replaced 2,000 m² in 10-day shutdown',
        'Passed HACCP audit with zero findings',
        'Eliminated slip incidents and standing water'
      ]
    },
    relatedSolutions: ['poultry-processing', 'wastewater-treatment', 'facility-management']
  },

  'power-automation': {
    id: 'power-automation',
    title: 'Power & Automation Systems',
    slug: 'power-and-automation',
    description: 'Electrical systems, process controls, and backup power for continuous operations.',
    tier: 'infrastructure-systems',
    hero: {
      headline: 'Power Distribution & Process Automation',
      subheadline: 'Industrial electrical systems, process controls, PLC automation, and backup power solutions ensuring continuous, safe, and efficient operations.',
      stats: [
        { label: 'Uptime', value: '99.9% with backup power' },
        { label: 'Automation', value: 'Full SCADA integration' },
        { label: 'Safety', value: 'Code-compliant systems' }
      ]
    },
    challenge: {
      title: 'The Challenge',
      description: 'Food processing facilities run critical refrigeration, wastewater treatment, and production equipment that cannot tolerate power interruptions. Manual control of complex systems leads to inefficiency and errors. Safe, reliable power distribution and intelligent automation are essential.'
    },
    solution: {
      title: 'The STBM Solution',
      description: 'STBM designs complete electrical systems with proper load calculations, backup generators, UPS systems, and PLC-based process controls. We integrate monitoring systems, automated sequences, and remote access for efficient, safe operations.'
    },
    included: {
      title: 'What We Deliver',
      items: [
        'Main Distribution Boards (MDB)',
        'Sub-Distribution & Control Panels',
        'Backup Generators & ATS',
        'UPS Systems for Critical Loads',
        'PLC & SCADA Systems',
        'Process Automation & Sequencing',
        'Motor Control Centers (MCC)',
        'Energy Monitoring Systems',
        'Remote Monitoring & Alerts'
      ]
    },
    caseExample: {
      title: 'Case Example',
      description: 'Automation upgrade for cattle facility',
      results: [
        'Reduced power interruption incidents by 90%',
        'Automated refrigeration sequencing saved 15% energy',
        'Remote monitoring enabled faster troubleshooting'
      ]
    },
    relatedSolutions: ['hvac-refrigeration', 'wastewater-treatment', 'technical-support']
  },

  // Operations & Support Details
  'facility-management': {
    id: 'facility-management',
    title: 'Complete Facility Management',
    slug: 'facility-management',
    description: 'Complete outsourced technical operations management with guaranteed uptime.',
    tier: 'operations-support',
    hero: {
      headline: 'Complete Facility Management Services',
      subheadline: 'Outsource your entire technical operations team to STBM. We manage all mechanical, electrical, refrigeration, and wastewater systems—so you can focus on production.',
      stats: [
        { label: 'Uptime Guarantee', value: '99.5%+' },
        { label: 'Cost Savings', value: 'Up to 30% vs. in-house' },
        { label: 'Response Time', value: '<2 hours' }
      ]
    },
    challenge: {
      title: 'The Challenge',
      description: 'Running a food processing facility requires a specialized technical team: refrigeration technicians, electricians, wastewater operators, and engineers. Hiring, training, and retaining this team is expensive and complex. Downtime due to equipment failures can cost thousands per hour.'
    },
    solution: {
      title: 'The STBM Solution',
      description: 'STBM becomes your outsourced technical operations department. Our trained team operates on-site, managing all systems, performing scheduled maintenance, responding to issues, and ensuring compliance. You get predictable costs and guaranteed uptime.'
    },
    included: {
      title: 'What We Manage',
      items: [
        'Refrigeration & HVAC Systems',
        'Wastewater Treatment Operations',
        'Electrical Systems & Backup Power',
        'Process Equipment & Controls',
        'Scheduled Preventive Maintenance',
        'Emergency Repairs & Troubleshooting',
        'Compliance Monitoring & Reporting',
        'Spare Parts Management',
        'Monthly Performance Reports'
      ]
    },
    caseExample: {
      title: 'Case Example',
      description: 'Full facility management for 150-head cattle plant',
      results: [
        'Achieved 99.7% uptime over 24 months',
        'Reduced total technical costs by 28%',
        'Zero compliance violations'
      ]
    },
    relatedSolutions: ['preventive-maintenance', 'technical-support', 'hvac-refrigeration']
  },

  'preventive-maintenance': {
    id: 'preventive-maintenance',
    title: 'Preventive Maintenance Programs',
    slug: 'preventive-maintenance',
    description: 'Scheduled maintenance programs preventing breakdowns and extending equipment life.',
    tier: 'operations-support',
    hero: {
      headline: 'Preventive Maintenance Programs',
      subheadline: 'Scheduled maintenance plans that prevent equipment failures, extend asset life, and reduce operating costs. Stop breakdowns before they happen.',
      stats: [
        { label: 'Breakdown Reduction', value: 'Up to 80%' },
        { label: 'Equipment Life', value: '+40% extension' },
        { label: 'Clients Served', value: '100+ facilities' }
      ]
    },
    challenge: {
      title: 'The Challenge',
      description: 'Reactive maintenance is expensive: emergency repairs cost 3-4x more than planned work, and unexpected downtime can halt production entirely. Without a disciplined maintenance schedule, equipment degrades faster and compliance risks increase.'
    },
    solution: {
      title: 'The STBM Solution',
      description: 'STBM designs custom preventive maintenance programs based on your equipment, production schedule, and risk priorities. Our technicians perform scheduled inspections, lubrication, part replacements, and testing—keeping your systems running reliably.'
    },
    included: {
      title: 'What We Provide',
      items: [
        'Custom Maintenance Schedule (Weekly/Monthly/Quarterly)',
        'Refrigeration System Servicing',
        'Compressor & Motor Inspections',
        'Electrical Panel Cleaning & Testing',
        'Wastewater Equipment Maintenance',
        'Conveyor & Drive Inspections',
        'Filter Replacements',
        'Lubrication & Wear Part Replacement',
        'Detailed Maintenance Reports & History'
      ]
    },
    caseExample: {
      title: 'Case Example',
      description: 'PM program for poultry processor with aging equipment',
      results: [
        'Reduced breakdowns from 12 to 2 incidents/year',
        'Extended refrigeration compressor life by 5 years',
        'Saved $85,000 in avoided emergency repairs'
      ]
    },
    relatedSolutions: ['facility-management', 'technical-support', 'power-automation']
  },

  'technical-support': {
    id: 'technical-support',
    title: '24/7 Technical Support',
    slug: 'technical-support',
    description: 'Emergency support and expert troubleshooting whenever you need it.',
    tier: 'operations-support',
    hero: {
      headline: '24/7 Emergency Technical Support',
      subheadline: 'Round-the-clock expert support for critical equipment failures. Our technicians respond fast to minimize downtime and protect your production.',
      stats: [
        { label: 'Availability', value: '24/7/365' },
        { label: 'Response Time', value: '<2 hours in UAE' },
        { label: 'Resolution Rate', value: '95% first visit' }
      ]
    },
    challenge: {
      title: 'The Challenge',
      description: 'Equipment failures do not wait for business hours. A refrigeration breakdown at midnight can spoil an entire cold room. A wastewater pump failure can shut down production. You need expert help immediately—not tomorrow.'
    },
    solution: {
      title: 'The STBM Solution',
      description: 'STBM provides 24/7 emergency support with technicians on call across UAE. One phone call gets you expert troubleshooting, emergency dispatch, and access to critical spare parts. We diagnose remotely when possible and arrive on-site fast when needed.'
    },
    included: {
      title: 'Support Services',
      items: [
        '24/7 Emergency Hotline',
        'Remote Diagnostics & Troubleshooting',
        'On-Site Emergency Dispatch (<2 hours)',
        'Critical Spare Parts Availability',
        'Refrigeration System Repairs',
        'Electrical & Controls Troubleshooting',
        'Wastewater System Emergency Response',
        'Temporary Equipment Rental (if needed)',
        'Detailed Incident Reports'
      ]
    },
    caseExample: {
      title: 'Case Example',
      description: 'Emergency compressor failure during peak production',
      results: [
        'Technician on-site in 90 minutes',
        'Temporary system online in 4 hours',
        'Permanent repair completed overnight—zero product loss'
      ]
    },
    relatedSolutions: ['facility-management', 'preventive-maintenance', 'hvac-refrigeration']
  }
};

// Helper functions
export function getSolutionsByTier(tier: 'complete-facilities' | 'infrastructure-systems' | 'operations-support'): Solution[] {
  switch (tier) {
    case 'complete-facilities':
      return completeFacilities;
    case 'infrastructure-systems':
      return infrastructureSystems;
    case 'operations-support':
      return operationsSupport;
  }
}

export function getSolutionDetail(slug: string): SolutionDetail | undefined {
  return solutionDetails[slug];
}

export function getAllSolutions(): Solution[] {
  return [...completeFacilities, ...infrastructureSystems, ...operationsSupport];
}
