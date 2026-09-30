export const CHALLENGES = [
  {
    id: 'waste-warrior',
    category: 'Waste',
    icon: '♻️',
    title: 'Waste Warrior',
    xp: 30,
    difficulty: 'Medium',
    task: 'Separate recyclable and non-recyclable waste at home.',
    whyMatters: 'Correct waste segregation helps recyclable materials stay in the recycling stream and reduces unnecessary waste going to landfills.',
    mission: 'Separate recyclable and non-recyclable waste in your home.',
    steps: [
      'Identify recyclable materials (clean paper, cardboard, plastics, cans).',
      'Separate them from wet food waste and contaminated items.',
      'Place them into your household recycling bin or dry waste container.',
      'Complete the challenge and log your eco action.'
    ],
    didYouKnow: 'Recycling just one aluminum can saves enough energy to power a TV for up to 3 hours!',
    badgeId: 'badge-waste'
  },
  {
    id: 'energy-guardian',
    category: 'Energy',
    icon: '⚡',
    title: 'Energy Guardian',
    xp: 20,
    difficulty: 'Easy',
    task: 'Switch off unused lights and electrical appliances.',
    whyMatters: 'Turning off unnecessary lights and unplugging phantom chargers reduces load on power grids and curtails fossil fuel generation.',
    mission: 'Inspect your living space and switch off idle electronics and lighting.',
    steps: [
      'Walk through rooms and check for unattended lights and fans.',
      'Switch off lighting in naturally illuminated rooms.',
      'Unplug chargers and appliances when not actively charging.',
      'Make this a daily routine before leaving any room.'
    ],
    didYouKnow: 'Turning off unnecessary lights is a simple way to reduce electricity use without compromising comfort.',
    badgeId: 'badge-energy'
  },
  {
    id: 'water-saver',
    category: 'Water',
    icon: '💧',
    title: 'Water Saver',
    xp: 20,
    difficulty: 'Easy',
    task: 'Turn off the tap while brushing your teeth.',
    whyMatters: 'Leaving the faucet running during brushing wastes up to 12 liters of treated drinking water per session.',
    mission: 'Turn off the tap while brushing your teeth both morning and evening.',
    steps: [
      'Wet your brush and apply toothpaste.',
      'Turn the tap fully off while brushing for two minutes.',
      'Turn the tap on only when rinsing your mouth and brush.',
      'Ensure the tap is shut firmly with zero drips.'
    ],
    didYouKnow: 'A single dripping tap can waste more than 3,000 liters of fresh water in a single year.',
    badgeId: 'badge-water'
  },
  {
    id: 'green-commute',
    category: 'Transport',
    icon: '🚲',
    title: 'Green Commute',
    xp: 40,
    difficulty: 'Medium',
    task: 'Walk, cycle, or use public transport for one trip.',
    whyMatters: 'Vehicular emissions account for a large portion of urban smog. Active and mass transit directly lower carbon emissions per passenger.',
    mission: 'Replace a car or motorcycle trip with walking, bicycling, or public transit.',
    steps: [
      'Pick a destination like school, college, local market, or transit stop.',
      'Leave personal motor vehicles behind.',
      'Walk briskly, ride a bicycle, or catch a bus/metro.',
      'Feel the physical boost and record your sustainable journey.'
    ],
    didYouKnow: 'Choosing a bicycle over a short car drive saves roughly 150g of CO2 emissions for every single kilometer.',
    badgeId: 'badge-transport'
  },
  {
    id: 'plant-protector',
    category: 'Biodiversity',
    icon: '🌿',
    title: 'Plant Protector',
    xp: 30,
    difficulty: 'Easy',
    task: 'Water, maintain, or care for a plant.',
    whyMatters: 'Urban greenery helps sustain local biodiversity, supports pollinators, purifies air, and lowers heat island effects.',
    mission: 'Water and care for a potted plant, home garden, or nearby neighborhood tree.',
    steps: [
      'Check the soil moisture level around the plant roots.',
      'Water thoroughly in the morning or evening to minimize evaporation.',
      'Clear dead leaves or weeds to give the plant room to flourish.',
      'Observe any beneficial insects visiting the plant.'
    ],
    didYouKnow: 'A single mature tree absorbs up to 22 kg of carbon dioxide every year and produces oxygen for two people!',
    badgeId: 'badge-biodiversity'
  }
];

export const CATEGORIES = ['All', 'Water', 'Energy', 'Waste', 'Transport', 'Biodiversity'];
