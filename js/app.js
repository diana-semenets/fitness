const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    loop: true,
    speed:800,
    spaceBetween: 100,
    observer: true,
  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        998: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
       
    },
    

  });

  const swiperTwo = new Swiper('.shop__slider', {
    // Optional parameters
    slidesPerView: 1,
    loop: true,
    speed:800,
    spaceBetween: 100,
    observer: true,
  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
            
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        998: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
       
    },
  });


  let accordion = document.querySelector('.faq__card');
  let items = accordion.querySelectorAll('.accordion__item');
  let title = accordion.querySelectorAll('.accordion__title');
  
  function toggleAccordion() {
    let thisItem = this.parentNode;
    
    items.forEach(item => {
      if (thisItem == item ) {
        // if this item is equal to the clicked item, open it.
        thisItem.classList.toggle('active');
        return;
      } 
      // otherwise, remove the open class
      item.classList.remove('active');
    });
  }
  
  title.forEach(question => question.addEventListener('click', toggleAccordion));

  let menuBtn = document.querySelector(".menu-btn");
    let menu = document.querySelector(".menu");
    let menuItems = document.querySelector(".menu__list");
    menuBtn.addEventListener("click", (function() {
        menuBtn.classList.toggle("active");
        menu.classList.toggle("active");
        if (menuBtn.classList.contains("active")) document.body.style.overflow = "hidden"; else document.body.style.overflow = "";
    }));
    menu.addEventListener("click", (e => {
        if (e.target === menu) {
            menu.classList.remove("active");
            menuBtn.classList.remove("active");
            document.body.style.overflow = "";
        }
    }));


    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && menu.classList.contains('active')) {
            menu.classList.remove("active");
            menuBtn.classList.remove("active");
            document.body.style.overflow = "";
        }
    });
   
    document.addEventListener("click", function (e) {
        const target = e.target;
        const its_menu = target == menu || menu.contains(target);
        const its_btnMenu = target == menuBtn;
        const menu_is_active = menu.classList.contains("active");
    
        if (!its_menu && !its_btnMenu && menu_is_active) {
            menu.classList.remove("active");
            menuBtn.classList.remove("active");
            document.body.style.overflow = "";
        }
    });



 



  

		