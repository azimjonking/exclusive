import gamepad from '../assets/flashSales/gamepad.png'
import keyboard from '../assets/flashSales/keyboard.png'
import tv from '../assets/flashSales/TV.png'
import chair from '../assets/flashSales/chair.png'

const flashSalesData = [
    {
        img: gamepad,
        discount: '-40%',
        name: 'HAVIT HV-G92 Gamepad',
        newPrice: '$120',
        oldPrice: '$160',
        ratting: 'fa-solid fa-star',
        rattingNumbers: '(80)'
    },
    {
        img: keyboard,
        discount: '-35%',
        name: 'AK-900 Wired Keyboard',
        newPrice: '$960',
        oldPrice: '$1160',
        ratting: 'fa-solid fa-star',
        rattingNumbers: '(75)'
    },
    {
        img: tv,
        discount: '-25%',
        name: 'IPS LCD Gaming Monitor',
        newPrice: '$340',
        oldPrice: '$400',
        ratting: 'fa-solid fa-star',
        rattingNumbers: '(99)'
    },
    {
        img: chair,
        discount: '-30%',
        name: 'S-Series Comfort Chair',
        newPrice: '$375',
        oldPrice: '$400',
        ratting: 'fa-solid fa-star',
        rattingNumbers: '(85)'
    },
]

export default flashSalesData;