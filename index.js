const containers = document.querySelectorAll('.container')

window.addEventListener('scroll', checkContainers)


checkContainers()


function checkContainers(){
    // console.log(window.innerHeight)
   const triggerDown = window.innerHeight / 5 * 4
   containers.forEach( container => {
    const containerTop = container.getBoundingClientRect().top

         if(containerTop < triggerDown){
             container.classList.add('show')
         } else {
             container.classList.remove('show')
         }
    })
}


