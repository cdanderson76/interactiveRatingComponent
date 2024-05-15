
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
                    You selected 4 out of 5
                </div>

                <div class="thanks">
                    Thank you!
                </div>

                <div class="para-conf">
                    We appreciate you taking the time to give a rating.  If 
                    you ever need more support, don't hesitate to get in touch!
                </div>

            </main>`
    }, 2500);
        
    
})