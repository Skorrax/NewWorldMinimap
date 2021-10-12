const portal2ClassId = 6670;

const interestingFeatures = [
    'counters',
    'death',
    'items',
    'kill',
    'killed',
    'killer',
    'location',
    'match_info',
    'match',
    'me',
    'phase',
    'rank',
    'revived',
    'roster',
    'team',
];

const windowNames = {
    inGame: 'in_game',
    desktop: 'desktop',
} as const;

const hotkeys = {
    toggle: 'showhide',
} as const;

export {
    portal2ClassId,
    interestingFeatures,
    windowNames,
    hotkeys,
};