const data = [
    {
        id: 1,
        img: "imgs/IMG_3210.JPG",
        location: 'Current River - Family Float',
        date: 'October',
        cats: "Current River"
    },
    {
        id: 3,
        img: "imgs/IMG_3254.JPG",
        location: 'Current River - Cave',
        date: 'October',
        cats: "Current River"
    },
    {
        id: 4,
        img: "imgs/IMG_3258.JPG",
        location: 'Current River - Cave',
        date: 'October',
        cats: "Current River"
    },
    {
        id: 6,
        img: "imgs/IMG_3244.JPG",
        location: 'Current River',
        date: 'October',
        cats: "Current River"
    },
    {
        id: 7,
        img: "imgs/IMG_3121.JPG",
        location: 'Mammoth Cave',
        date: 'October',
        cats: "Mammoth Cave"
    },
    {
        id: 8,
        img: "imgs/IMG_3131.JPG",
        location: 'Mammoth Cave',
        date: 'October',
        cats: "Mammoth Cave"
    },
    {
        id: 9,
        img: "imgs/IMG_3134.JPG",
        location: 'Mammoth Cave',
        date: 'October',
        cats: "Mammoth Cave"
    },
    {
        id: 10,
        img: "imgs/IMG_3123.JPG",
        location: 'Mammoth Cave',
        date: 'October',
        cats: "Mammoth Cave"
    },
    {
        id: 11,
        img: "imgs/IMG_3119.JPG",
        location: 'Mammoth Cave',
        date: 'October',
        cats: "Mammoth Cave"
    },
    {
        id: 12,
        img: "imgs/IMG_2861.JPG",
        location: 'Eleven Point River - Frog',
        date: 'September',
        cats: "Eleven Point River"
    },
    {
        id: 13,
        img: "imgs/IMG_2868.JPG",
        location: 'Eleven Point River - Kayak',
        date: 'September',
        cats: "Eleven Point River"
    },
    {
        id: 14,
        img: "imgs/IMG_2951.JPG",
        location: 'Eleven Point River',
        date: 'September',
        cats: "Eleven Point River"
    },
]

const picturesContainer = document.querySelector('.pictures')
const searchInput = document.querySelector('.search')
const catContainer = document.querySelector('.cats')
const months = document.querySelector('.months')
const month = document.querySelector('.rangeMonth')


const displayProducts = (filterProducts) => {
    picturesContainer.innerHTML = filterProducts.map((pic) => {
        return `
            <div class="picture">
                <img src=${pic.img} alt=${pic.location}>
                <span class="pictureName">${pic.location}</span>
                <span class="pictureDate">${pic.date}</span>
            </div>
        `
    }).join('')
}

displayProducts(data)

searchInput.addEventListener('keyup', (e) => {
    const value = e.target.value.toLowerCase()

    if (value) {
        displayProducts(data.filter(item => 
            item.location.toLowerCase().indexOf(value) !== -1
        ))
    } else {
        displayProducts(data)
    }
})

const showCategories = () => {
    const allCats = data.map(item => item.cats)
    
    //spread operator to put All at the front of the array
    const categories = ["All", ...allCats.filter((item, i) => {
        return allCats.indexOf(item) === i
    }).sort()]

    catContainer.innerHTML = categories.map((cat) => {
        return `
            <span class="cat">${cat}</span>
        `
    }).join('')

    // catContainer.innerHTML = data.map((item, index) => {
    //     return `
    //         <span class="cat">${item.cats}</span>
    //     `
    // }).join('')
}

showCategories()