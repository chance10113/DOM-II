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

const img = document.querySelectorAll('img')
img.addEventListener('dblclick', function(event){
    
})

// NavA.addEventListener('click', function(event){
//     event.preventDefault();
// });