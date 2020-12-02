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

const image = document.querySelectorAll('img')




// image.addEventListener()
// image.addEventListener('dblclick', function(event){
//     image.style = '50%'
//     //img.setAtrribute('href', 'https://post.greatist.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg')
// })

// NavA.addEventListener('click', function(event){
//     event.preventDefault();
// });