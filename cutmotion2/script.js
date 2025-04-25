let slideIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');
        
      
        function changeSlide(n) {
            showSlide(slideIndex += n);
        }
         function currentSlide(n) {
            showSlide(slideIndex = n);
        }
        
      
        function showSlide(n) {
            // Wrap around if out of bounds
            if (n >= slides.length) slideIndex = 0;
            if (n < 0) slideIndex = slides.length - 1;
        
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
                dots[i].classList.remove('active');
            }
            
          
            slides[slideIndex].classList.add('active');
            dots[slideIndex].classList.add('active');
        }
        

        setInterval(() => {
            changeSlide(1);
        }, 5000);