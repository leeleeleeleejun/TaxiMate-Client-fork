export interface searchPlace {
  id: string;
  title: string;
  x: string;
  y: string;
  roadAddress?: string;
  jibunAddress: string;
}

export type SelectionKey = 'meridiem' | 'hour' | 'minute';
