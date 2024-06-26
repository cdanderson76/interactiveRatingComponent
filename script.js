
const subBtn = document.getElementById('sub-btn');
const infinity = document.getElementById('infinity');
const ratingBtns = document.querySelectorAll('.selector');

// HIGHLIGHTING THE BUTTONS ON CLICK

ratingBtns.forEach(btn => {
    btn.addEventListener('click', function() {
    ratingBtns.forEach(btn => btn.classList.remove('active'));
    btn.classList.add('active');
})});

// THANK YOU BOILERPLATE

const paymentImg = 'images/payment.png';

subBtn.addEventListener('click', function(e) {

    const userRating = document.querySelector('.selector.active').innerHTML;
    const canvas = document.getElementById('canvas');

    // console.log(document.querySelector('.selector.active').innerHTML)

    infinity.style.display = 'block';

    setTimeout(() => {
    
        canvas.innerHTML = 

            `<main class="card" >

                <img src=${paymentImg} class="payment-img" alt="online payment image"/>

                <div class="rating-result-container">
                    You selected ${userRating} out of 5
                </div>

                <div class="thanks">
                    Thank you!
                </div>

                <div class="para-conf">
                    We appreciate you taking the time to give a rating.  If 
                    you ever need more support, don't hesitate to get in touch!
                </div>

            </main>
            
            <footer class="footer-container">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="https://github.com/cdanderson76" target="_blank">Clifford Anderson</a>.
            </footer>`
    }, 2500);
        
})