import type { Partner } from '@/types';

export const partners: Partner[] = [];

export const getActivePartners = (): Partner[] =>
  partners.filter((p) => p.active);
