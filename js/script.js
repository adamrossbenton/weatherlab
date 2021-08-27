// API: https://openweathermap.org/current
// Current Key: e554b673de1a9e6ab0595e83e35c05a3
// One-Call Key: 

const $city = $('#city')
const $high = $('#high')
const $low = $('#low')
const $avg = $('#avg')
const $feels = $('#feels')
const $weather = $('#weather')
const $input = $('input[type="text"]')
const $days = $('#days')

let weatherData

const render = () => {
    for (let i = 0; i < $days.val(); i++) {
        $city.text(weatherData.city.name)
        $high.text(weatherData.list[i].main.temp_max)
        $low.text(weatherData.list[i].main.temp_min)
        $avg.text(weatherData.list[i].main.temp)
        $feels.text(weatherData.list[i].weather[0].main)
        $weather.text(weatherData.list[i].weather[0].description)
    }
}

function handleGetData(event){
    event.preventDefault();

    console.log($days.val())
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/forecast?q=Seattle&cnt=3&units=imperial&appid=e554b673de1a9e6ab0595e83e35c05a3`
    }).then(
        data => {
            weatherData = data
// Have to make this render x amount of times
// Can I use the same for loop as within the function?
// Can I do this without adding 5 blank <p>s to the html?
            render()
        },
        error => {
            console.log("YA DUN GOOFED",error)
        }
    )
}

// THIS WORKS, CAN TURN THIS IN IF ALL ELSE FAILS

// const $city = $('#city')
// const $temp = $('#temp')
// const $feels = $('#feels')
// const $weather = $('#weather')
// const $input = $('input[type="text"]')
// const $days = $('#days')


// const render = () => {
// console.log(weatherData)
//     $city.text(weatherData.name)
//     $temp.text(weatherData.main.temp)
//     $feels.text(weatherData.weather[0].main)
//     $weather.text(weatherData.weather[0].description)
// }

// function handleGetData(event){
//     event.preventDefault();

//     $.ajax({
//         url: `https://api.openweathermap.org/data/2.5/weather?q=${$input.val()},usa&APPID=e554b673de1a9e6ab0595e83e35c05a3&units=imperial`
//     }).then(
//         data => {
//             weatherData = data
//             render()
//         },
//         error => {
//             console.log("YA DUN GOOFED",error)
//         }
//     )
// }

$('form').on('submit', handleGetData);