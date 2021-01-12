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
const textContent = document.querySelector('.text-content')
    const tCH2 = textContent.querySelector('h2')
        tCH2.addEventListener('mouseover', () => {
            tCH2.innerText = 'These Snozzberries Taste like Snozzberries'
        })
const tCPara = textContent.querySelector('p')
    tCPara.addEventListener('mousemove', () => {
        tCPara.innerText = "'Is a sandwich really a sandwich without butter?'"
    })
//Just 4 More, we got this!
const imgContent = document.querySelector('.img-content img')
    document.addEventListener('keydown', (event) => {
        if (event.key === "Escape") {
            imgContent.innerHTML = ('src', "https://post.greatist.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg")
        }
    });
    function escapeKey(event) {
        if (event.key === "Escape") {
            imgContent.setAttribute('src', "https://post.greatist.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg")
        }
    }
document.addEventListener('keydown', escapeKey)
//KEY-UP
document.addEventListener('keyup', (event) => {
    if (event.key === "Escape") {
        imgContent.innerHTML = ('src', "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ")
    }
});
function keyUp(event) {
    if (event.key === "Escape") {
        imgContent.setAttribute('src', "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ")
    }
}
document.addEventListener('keydown', keyUp)
//Good golly, just 2 more I guess