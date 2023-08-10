const questions = [
    {
        'que': 'which of the following is a markup language ?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JAVASCRIPT',
        'd':'PHP',
        'correct':'a'
    },
    {
        'que': 'which of the following is a language ?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JAVASCRIPT',
        'd':'PHP',
        'correct':'a'
    },
    {
        'que': 'which of the is a markup language ?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JAVASCRIPT',
        'd':'PHP',
        'correct':'a'
    }
]
let index = 0;
let total = questions.length;
let right = 0,wrong = 0;
const quesBox = document.getElementById("quesbox")
const optionInput = document.querySelectorAll('.options')

const loadQuestion = () =>{

    if(index === total){
        return endQuiz()
    }
    reset()
    const data = questions[index]
    quesBox.innerText = `${index+1}) ${data.que}`;
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;
    
}
const submitQuiz = () =>{
    const data = questions[index]
    const ans = getAnswer()
    if(ans === data.correct){
        right++;

    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () =>{
    optionInput.forEach(
        (input) => {
            if(input.checked){
                return input.value
               // console.log("yes")
            }else{
               // console.log("no")
            }

        }
    )
}

const reset = () => {

    optionInput.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
const endQuiz = () =>{
    document.getElementById("box").innerHTML = `<h3> thanku for playing thr quiz </h3>`
}
loadQuestion();