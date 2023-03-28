const Config = {shopRecomUrl:['',''],staticImgUrl:''}
export const componentsList = [{
    name: 'Search', level: '1', paramsA: {
        list: [{hotTag: '星巴克', hotTagH5: Config.shopRecomUrl[0].url},
            {hotTag: '本地优惠券', hotTagH5: '/pages/cashBack/cashBack'},
            {hotTag: '肯德基', hotTagH5: Config.shopRecomUrl[1].url},
            {hotTag: '周末5折', hotTagH5: '/pages/weekend/weekend'},
            {hotTag: '代金券', hotTagH5: '/pages/dayday/dayday'}]
    }
}, {
    name: 'TopSwipe', level: '2',
    paramsA: {list: [{picDe: Config.staticImgUrl + 'comp/TSwipe_1.png', url: '/pages/passion/passion'}]}
}, {
    name: 'Placard', level: '3',
    paramsA: {list: [{}, {title: '手机支付，优惠多多', pic: '', url: '/pages/shopOnline/shopOnline'}]}
}, {
    name: 'SingleNavigation', level: '4',
    paramsA: {
        list: [{title: '外卖', picDe: 'takeaway.svg', url: ''},
            {title: '车主服务', picDe: 'car.svg', url: ''},
            {title: '影票', picDe: 'film.svg', url: 'https://co.maoyan.com/?merCode=1000136'},
            {title: '充值缴费', picDe: 'recharge.svg', url: ''},
            {title: '卡券充值', picDe: 'coupon.svg', url: ''}]
    }
},{
    name: 'SingleNavigation', level: '4',
    paramsA: {
        list: [{title: '外卖', picDe: 'takeaway.svg', url: ''},
            {title: '车主服务', picDe: 'car.svg', url: ''},
            {title: '影票', picDe: 'film.svg', url: 'https://co.maoyan.com/?merCode=1000136'},
            {title: '充值缴费', picDe: 'recharge.svg', url: ''},
            {title: '卡券充值', picDe: 'coupon.svg', url: ''}]
    }
},  {
    name: 'Placard', level: '4',
    paramsA: {list: [{}, {title: '手机支付，优惠多多', pic: '', url: '/pages/shopOnline/shopOnline'}, {title: '手机支付，优惠多多', pic: '', url: '/pages/shopOnline/shopOnline'}]}
}, {
    name: 'InLineSwipe', level: '5', paramsA: {
        advMainPicList: [{
            picDe: Config.staticImgUrl + 'comp/ILSwipe_1.png', url: '',
            list: [{title: '', picDe: Config.staticImgUrl + 'comp/ILSwipe_1_1.png', url: ''},
                {title: '', picDe: Config.staticImgUrl + 'comp/ILSwipe_1_2.png', url: ''},
                {title: '', picDe: Config.staticImgUrl + 'comp/ILSwipe_1_3.png', url: ''}]
        }]
    }
}, {
    name: 'Part', level: '6', info: '会员有礼', paramsA: {picDe: Config.staticImgUrl + 'comp/part_1.png'}
}, {
    name: 'MemberGift', level: '7'
}, {
    name: 'Part', level: '8', info: '卡卡臻选', paramsA: {picDe: Config.staticImgUrl + 'comp/part_2.png'}
}, {
    name: 'ActGroup', level: '9', paramsA: {
    list: [{picDe: Config.staticImgUrl + 'comp/AGroup_1.png', url: ''},
        {picDe: Config.staticImgUrl + 'comp/AGroup_2.png', url: '/pages/shopOnline/shopOnline'},
        {picDe: Config.staticImgUrl + 'comp/AGroup_3.png',
            url: '/pages/couponOperate/couponOperate'
        }]
    }
}, {
    name: "Gap"
}, {
    name: 'WaterFall', level: '10', paramsA: {
        list: [{name: '超市便利', checked: '1', code: ['27']}, {name: '加油汽车', checked: '1', code: ['05']},
            {name: '网购优惠', checked: '2', code: ['09']}, {name: '丽人娱乐', checked: '1', code: ['04']},
            {name: '出行旅游', checked: '1', code: ['02']}, {name: '其他', checked: '1', code: ['99']}]
    }
}
    // {name:'NavGroup',paramsA:{list:[{pic:'#',url:'1'},{pic:'#',url:'2'},{pic:'#',url:'3'}]}},
];
