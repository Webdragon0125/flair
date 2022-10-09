export const BUNDLE = [
    {
        name: 'bare bundle',
        recommend: false,
        fee: {
            flag: 0, // No fee
        },
        items: [
            {
                item_name: 'personal item',
                explain: 'up to 7kg'
            }
        ],
        color: '#FAB065'
    },
    {
        name: 'basic bundle',
        recommend: true,
        fee: {
            flag: 1,
            pp: 69.62,
            save: 33.28
        },
        items: [
            {
                item_name: 'personal item',
                explain: 'up to 7kg'
            },
            {
                item_name: 'carry-on bag',
                explain: 'up to 10kg'
            },
            {
                item_name: '1st checked baggage',
                explain: 'up to 23kg'
            }
        ],
        color: '#0F40C7'
    },
    {
        name: 'big bundle',
        recommend: false,
        fee: {
            flag: 1,
            pp: 69.62,
            save: 33.28
        },
        items: [
            {
                item_name: 'personal item',
                explain: 'up to 7kg'
            },
            // {
            //     item_name: 'carry-on bag',
            //     explain: 'up to 10kg'
            // },
            // {
            //     item_name: '1st checked baggage',
            //     explain: 'up to 23kg'
            // },
            // {
            //     item_name: 'priority boarding',
            //     explain: 'board and get settled early'
            // },
            // {
            //     item_name: 'modify or cancel flight',
            //     explain: 'change or cancellation fees waived'
            // }
        ],
        color: '#30FF00'
    }
]