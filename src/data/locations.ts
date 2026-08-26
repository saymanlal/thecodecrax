import type { CityLocation } from '@/types';

export const locations: CityLocation[] = [
  {
    city: 'Jabalpur',
    state: 'Madhya Pradesh',
    country: 'India',
    coordinates: { latitude: 23.1815, longitude: 79.9864 },
    eventIds: ['event-001', 'event-002'],
    active: true,
  },
  {
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    country: 'India',
    coordinates: { latitude: 23.2599, longitude: 77.4126 },
    eventIds: ['event-003'],
    active: true,
  },
  {
    city: 'Indore',
    state: 'Madhya Pradesh',
    country: 'India',
    coordinates: { latitude: 22.7196, longitude: 75.8577 },
    eventIds: [],
    active: true,
  },
];

export const getActiveLocations = (): CityLocation[] =>
  locations.filter((l) => l.active);
