const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

let activeLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if(activeLink != i){
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');

            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
            }, 100);
        }
    })
})

const scrollTwo = document.querySelectorAll('.scroll2');
const scrollThree = document.querySelectorAll('.scroll3');
const scrollFour = document.querySelectorAll('.scroll4');
const courses = document.querySelectorAll('.courses');

window.addEventListener('scroll', () => {
    let yScroll = window.pageYOffset;
    let xScroll = window.pageXOffset;

    scrollTwo.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${yScroll * speed}px)`
    })

    scrollThree.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${yScroll * speed}px)`
    })

    scrollFour.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${yScroll * speed}px)`
    })

    //courses.forEach(element => {
    //    let speed = element.dataset.speed;
    //    element.style.transform = `translateX(${xScroll * speed}px)`
   // })
  });