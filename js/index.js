// Your code goes here
const NavA = document.querySelectorAll('.nav-link');
Array.from(NavA).forEach(function(link){
    link.addEventListener('click', function(event){
        console.log("This is to prevent the link");
        event.preventDefault();
    })
})


// NavA.addEventListener('click', function(event){
//     event.preventDefault();
// });