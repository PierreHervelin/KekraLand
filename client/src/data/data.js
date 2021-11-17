import { UserPanier } from "../class/UserPanier"

export const ImgCarouselSrc = [ 
    {
        id : 0,
        src : '../asset/kekracarousel.jpg',
    },
    {
        id : 1,
        src : '../asset/kekracarousel2.jpg',
    },
    {
        id : 2,
        src : '../asset/kekracarousel3.png',
    },
    {
        id : 3,
        src : '../asset/kekracarousel4.png',
    }
]

export const CategorieShop=[
    {
        id:0,
        title:'Albums CD',
        content:[
            'Kekra',
            'Freebase, vol. 04',
            'Vréalité',
            'Land'
        ]
    },
    {
        id:1,
        title:'Vêtements',
        content:[
            'Hoodies',
            'T-shirts'
        ]
    },
    {
        id:2,
        title:'Concerts',
        content:[
            'La défense',
            'Nantes',
            'Bercy',
            'AccorHotels Arena'
        ]
    }
]

export const TrackListContent = {
    vrealite:[
        {
            id : '01' , 
            track : 'Téléphone maison',
            temps : '3:04'
        },
        {
            id : '02', 
            track : 'Lights Out',
            temps : '3:11'
        },
        {
            id : '03', 
            track : 'COD',
            temps : '3:18'
        },
        {
            id : '04', 
            track : 'Vréalité',
            temps : '3:34'
        },
        {
            id : '05', 
            track : 'CLS',
            temps : '3:02'
        },
        {
            id : '06', 
            track : 'Chut',
            temps : '2:57'
        },
        {
            id : '07', 
            track : 'Doré (Interlude)',
            temps : '2:56'
        },
        {
            id : '08', 
            track : 'Korda',
            temps : '2:58'
        },
        {
            id : '09', 
            track : 'Violation',
            temps : '3:03'
        },
        {
            id : '10', 
            track : 'OSMS',
            temps : '2:58'
        },
        {
            id : '11', 
            track : 'Aznavour',
            temps : '3:26'
        },
        {
            id : '12', 
            track : 'Sans les thunes',
            temps : '4:17'
        },
        {
            id : '13', 
            track : 'Vrai-alité - Bonus Track',
            temps : '3:34'
        }
    ]
}

export const User={
    panier:new UserPanier(),
    token:sessionStorage.getItem('token')?sessionStorage.getItem('token'):null,
    login:sessionStorage.getItem('userLogin')?sessionStorage.getItem('userLogin'):null
}
