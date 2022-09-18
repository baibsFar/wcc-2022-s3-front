const loader = document.querySelector('.loader')
const loaderTitle = document.querySelector('.loader-title')
const loaderSpinner = document.querySelector('.loader-spinner')

/**
 * Colors must be Hexa code or RGB code
 * @param {string} _backgroundColor 
 * @param {string} _color 
 * @param {number} _duration 
 * @param {string} _title 
 * @param {string} _spinnerColor 
 */
function setLoader(_backgroundColor = '#fff', _color = '#000', _duration = 500, _title = 'Loading...', _spinnerColor = '#000') {
    // loader.style.backgroundColor = _backgroundColor
    // loader.style.background = `url(${_backgroundColor})`
    loaderTitle.style.color = _color
    loaderTitle.innerText = _title
    loaderSpinner.style.borderColor = `${_spinnerColor} transparent ${_spinnerColor} transparent`
    loaderSpinner.style.animationDuration = `${_duration}ms`
}

setLoader('#fff', '', 800, 'Welcome', '#fff')

setTimeout(() => {
    loader.style.animationName = 'fadeout'
    loader.style.animationDuration = '2s'
    loader.style.animationTimingFunction = 'easy-in'
    loader.style.animationIterationCount = '1'
    loader.addEventListener('animationend', () => {
        loader.style.display = 'none'
    })
}, 2000)