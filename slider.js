// Slider
const sliderContainer = document.querySelector('slider')

// Buttons
const upButton = document.getElementById('up-button')
const downButton = document.getElementById('down-button')

// Left Slide 
const slideLeft = document.getElementById('left-slider')
const title = document.getElementById('left-title')
const slideLeftText = document.getElementById('left-text')

// Right Slide
const slideRight = document.getElementById('right-slider')
const image = document.getElementById('img')


//index for both arrays
let i = 0;

// array for right slider images
const img = ['skillsList.png', 'technicalSkills.png', 'agcDescription.png','abfDescription.png','zooDescription.png'];
const altImg = ['Football players', 'Wright State']
// array for left slider
const leftTitle = ['Skills', 'Technical Skills', '🚗 Senior Team Lead | AGC Automotive','🚛 Casual Checker | ABF Freight','🐾 Seasonal Warehouse Associate | Columbus Zoo & Aquarium'];
const leftText = ['', '', 'Jan/2021 - May/2022','Jan/2019 - Jan/2021','Jun/2015 - Aug/2019'];
const colors = ['#131415'];
// directory + img[i] = full src path
const directoryPrefix = '/assets/';

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
   
    if(direction === 'up') {
        i++
        // resets index
        if(i == img.length){
            i = 0
            slideLeftText.innerText =leftText[i];
            title.innerText = leftTitle[i];
            // slideLeft.style.background = colors[i];
            image.setAttribute('src',(directoryPrefix + img[i]));
            image.setAttribute('alt', altImg[i])
        }
        else {
            slideLeftText.innerText =leftText[i];
            title.innerText = leftTitle[i];
            // slideLeft.style.background = colors[i];
            image.setAttribute('src',(directoryPrefix + img[i]));
            image.setAttribute('alt', altImg[i])
        }

        
    } else if(direction === 'down') {
        i--
        // sets index to the end
        if(i < 0){
            i = img.length - 1
            slideLeftText.innerText =leftText[i];
            title.innerText = leftTitle[i];
            // colors.style.background = colors[i];
            image.setAttribute('src',(directoryPrefix + img[i])); 
            image.setAttribute('alt', altImg[i])
            console.log(i)
            console.log(img.length)
        } else {
            slideLeftText.innerText = leftText[i];
            title.innerText = leftTitle[i];
            // colors.style.background = colors[i];
            image.setAttribute('src',(directoryPrefix + img[i])); 
            image.setAttribute('alt', altImg[i])
            console.log(i)
            console.log('else',img.length)
        }

        document.getElementById('img').setAttribute('src',(directoryPrefix + img[i]));

    }

}