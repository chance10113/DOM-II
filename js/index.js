// Your code goes here
//CREATE 10 DIFFERERERERNT EVENT LISTENERS!
const logoHeading = document.querySelector('.logo-heading');
    logoHeading.addEventListener('mouseenter', () => {
        logoHeading.innerText = 'OBVIOUS BUS JOKE'
    })
    logoHeading.addEventListener('mouseleave', () => {
        logoHeading.innerText = 'Fun Bus'
    })
//JUST 8 MORE!
const introH2 = document.querySelector('.intro h2')
    introH2.addEventListener('dblclick', () => {
        introH2.innerText = "'YOU BOYS EVER BEEN TO MEXICO?!'"
        introH2.style.fontSize = '10rem';
        introH2.style.color = 'teal'
    })

const introImg = document.querySelector('.intro img')
    introImg.addEventListener('auxclick', () => {
        introImg.setAttribute('src', "https://post.greatist.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg")
    })
//JUST 6 MORE!! also, load doesn't want to work