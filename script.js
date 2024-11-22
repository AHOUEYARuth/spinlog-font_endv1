const wrapper = document.querySelector('.wrapper')
wrapper.addEventListener('click', (event) =>{
  let element = event.target.parentElement
  if (element == wrapper || element.parentElement == wrapper) {
    wrapper.classList.toggle('active')
    
  }
  
})

const language_wrap = document.querySelectorAll('.lang_wrapper ');

language_wrap.forEach(list => {
  list.addEventListener('click', (event) => {
    console.log("cc");
    
    let el = event.target.parentElement;
    if (el === list || el.parentElement === list) {
      list.classList.toggle('active');
    }
  });
});


/* language_wrap.addEventListener('click', (event) =>{
  let el = event.target.parentElement
  if (el == language_wrap || el.parentElement == language_wrap) {
    language_wrap.classList.toggle('active')
    
  }
  
}) */