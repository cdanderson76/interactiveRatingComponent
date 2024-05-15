
const subBtn = document.getElementById('sub-btn');
const canvas = document.getElementById('canvas');
const infinity = document.getElementById('infinity');
const paymentImg = 'images/payment.png';

subBtn.addEventListener('click', function() {

    infinity.style.display = 'block';

    setTimeout(() => {
    
        canvas.innerHTML = 

            `<main class="card" >

                <img src=${paymentImg} class="payment-img" />

                <div class="rating-result-container">

                </div>

                <div class="thanks">

                </div>

                <div class="para-conf">

                </div>

            </main>`
    }, 2500);
        
    
})