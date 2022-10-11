import IMG_BAG from '../assets/personal-items/bag.png';
import IMG_PERSONALITEM from '../assets/personal-items/personalItem.png';


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
                explain: 'up to 7kg',
                img: IMG_BAG
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
                explain: 'up to 7kg',
                img: IMG_BAG
            },
            {
                item_name: 'carry-on bag',
                explain: 'up to 10kg',
                img: IMG_BAG
            },
            {
                item_name: '1st checked baggage',
                explain: 'up to 23kg',
                img: IMG_BAG
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
                explain: 'up to 7kg',
                img: IMG_BAG
            },
            {
                item_name: 'carry-on bag',
                explain: 'up to 10kg',
                img: IMG_PERSONALITEM
            },
            {
                item_name: '1st checked baggage',
                explain: 'up to 23kg',
                img: IMG_PERSONALITEM
            },
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