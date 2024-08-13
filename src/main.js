const submitBtn = document.querySelector('.calculate-btn'),
    amountInput = document.querySelector('[data-amount]'),
    termInput = document.querySelector('[data-term]'),
    rateInput = document.querySelector('[data-rate]'),
    form = document.querySelector('[data-form]'),
    resultContainer = document.querySelector('.result-section');



    form.addEventListener('submit', answer)

    function answer(event){
        event.preventDefault();
        amount = amountInput.value;
        term = termInput.value;
        rate = rateInput.value;
        const answer = amountPerMonth(amount, term, rate);
        const answerContiner = renderAnswer(answer)
        document.querySelector('.result-content').classList.add('hide');
        resultContainer.prepend(answerContiner)
        form.reset();
    }

    function amountPerMonth(amount, term, rate){
        let m = rate / 12 / 100;
        let res = Math.ceil(amount * (m/(1-Math.pow(1 + m, -term))));
        console.log(res);
        return res
    }   

    function renderAnswer(amount){
        const answer = document.createElement('div');
        answer.classList.add('answer-conteiner')
        answer.innerHTML = `
        <div class="result-title">
                <h2>Your result</h2>
                <p>
                  Your result are show below based on the information you
                  provided. To adjust the result, edit the form and click
                  "Calculate Repayments" again
                </p>
              </div>
              <div class="result-calculations">
                <h3>You monthly repayment</h3>
                <p class="monthly-payment">£ ${amount}</p>
                <span></span>
                <h4>total you'll repay over the term</h4>
                <p class="full-payment">£ 1.923</p>
              </div>
        `
        return answer
    }
