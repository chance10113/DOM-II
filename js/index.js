// Your code goes here
const NavA = document.querySelectorAll('.nav-link');
Array.from(NavA).forEach(function(link){
    link.addEventListener('click', function(event){
        console.log("This is to prevent the link");
        event.preventDefault();
    })
})

const logoHead = document.querySelector('.logo-heading');
logoHead.addEventListener('mouseenter', function(event){
    logoHead.innerText = 'FART BUS'
});
logoHead.addEventListener('mouseleave', function(event){
    logoHead.innerText = 'Fun Bus'
});

const title = document.querySelector('title')
title.addEventListener('load', function(event){
    title.innerText = 'BUS TIME!'
})
const header = document.querySelector('.intro')
header.addEventListener('dblclick', function(event){
    header.innerText = 'BUS TIME!!!';
    header.style.fontSize = '10rem'
    header.style.color = 'red'
});

const introImg = header.querySelector('img')
introImg.addEventListener('auxclick', function(event){
    introImg.setAttribute('src', "https://post.greatist.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg")
})

const wordStuff = document.querySelector('.text-content');
const wordP = wordStuff.querySelector('p')
wordP.addEventListener('mousemove', function(event){
    wordP.innerText = "HAHA YOU FOUND ME!"
});
const wordH2 = wordStuff.querySelector('h2')
wordH2.addEventListener('mouseover', function(event){
    wordH2.innerText = 'CAN YOU FIND ME?!'
    wordH2.style.color = "red"
    wordH2.style.fontSize = '10rem'
})
const inverse = document.querySelector('.img-content');
const invImg = inverse.querySelector('img');
invImg.addEventListener('wheel', function(event){
    invImg.setAttribute('src', "https://post.greatist.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg")
})

const contDest = document.querySelector(".content-destination");
const contDestP = contDest.querySelector('p');
contDestP.addEventListener('contextmenu', function(event){
    contDestP.innerText = "Feature closed due to Pandemic"
    contDestP.style.fontSize = "15rem"
    contDestP.style.color = "red"
})
// KEYDOWN AND KEYUP!!!
// introH2 = header.querySelector('h2');
// introH2.addEventListener('context', function(event){
//     introH2.innerText = 'HAHA YOU FOUND ME!'
// });

// image.addEventListener()
// image.addEventListener('dblclick', function(event){
//     image.style = '50%'
//     //img.setAtrribute('href', 'https://post.greatist.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg')
// })

// NavA.addEventListener('click', function(event){
//     event.preventDefault();
// });