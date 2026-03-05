export interface IStatesCard {
  name: string;
  value: string;
  icon: string;
}

export const states: IStatesCard[] = [
  {
    name: 'Practice Scaled',
    value: '140+',
    icon: '/icons/gear.svg',
  },
  {
    name: 'Show Rates',
    value: '75-90%',
    icon: '/icons/rating.svg',
  },
  {
    name: 'Close Rates',
    value: '40%',
    icon: '/icons/handshake.svg',
  },
  {
    name: 'Client Retention',
    value: '95%',
    icon: '/icons/customer-retention.svg',
  },
];
