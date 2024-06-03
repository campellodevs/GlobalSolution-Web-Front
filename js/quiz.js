

const quizData = [
    {
        question: "Qual é a principal fonte de poluição dos oceanos?",
        options: ["Resíduos plásticos", "Derramamento de petróleo", "Escoamento agrícola", "Esgoto doméstico"],
        answer: "Resíduos plásticos"
    },
    {
        question: "Quanto tempo um plástico pode levar para se decompor no oceano?",
        options: ["10 anos", "100 anos", "450 anos", "1000 anos"],
        answer: "450 anos"
    },
    {
        question: "Qual porcentagem do lixo encontrado no oceano é plástico?",
        options: ["30%", "50%", "70%", "90%"],
        answer: "90%"
    },
    {
        question: "Qual das seguintes espécies marinhas está mais ameaçada pela poluição plástica?",
        options: ["Tubarões", "Baleias", "Tartarugas marinhas", "Corais"],
        answer: "Tartarugas marinhas"
    },
    {
        question: "O que é a 'Grande Mancha de Lixo do Pacífico'?",
        options: ["Uma ilha de lixo visível do espaço", "Uma área do oceano com alta concentração de plástico", "Um termo para qualquer poluição oceânica", "Um programa de limpeza oceânica"],
        answer: "Uma área do oceano com alta concentração de plástico"
    },
    {
        question: "Quantos milhões de toneladas de plástico são jogados no oceano todos os anos?",
        options: ["1 milhão", "3 milhões", "8 milhões", "15 milhões"],
        answer: "8 milhões"
    },
    {
        question: "O que é o microplástico?",
        options: ["Pequenos pedaços de plástico menores que 5mm", "Plástico usado para microondas", "Plástico reciclado", "Nenhuma das alternativas"],
        answer: "Pequenos pedaços de plástico menores que 5mm"
    },
    {
        question: "Qual país é o maior contribuinte para a poluição plástica nos oceanos?",
        options: ["Estados Unidos", "China", "Índia", "Brasil"],
        answer: "China"
    },
    {
        question: "Qual é o impacto da poluição plástica na vida marinha?",
        options: ["Ingestão de plástico", "Emaranhamento em detritos plásticos", "Toxicidade química", "Todas as anteriores"],
        answer: "Todas as anteriores"
    },
    {
        question: "O que podemos fazer para ajudar a reduzir a poluição plástica?",
        options: ["Reduzir o uso de plásticos descartáveis", "Reciclar", "Participar de limpezas de praias", "Todas as anteriores"],
        answer: "Todas as anteriores"
    }
];

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('quiz-results');
let currentQuestionIndex = 0;
let score = 0;

function loadQuiz() {
    quizContainer.innerHTML = "";
    const currentQuestion = quizData[currentQuestionIndex];

    const questionEl = document.createElement('div');
    questionEl.className = 'quiz-question';
    questionEl.textContent = currentQuestion.question;
    quizContainer.appendChild(questionEl);

    const optionsEl = document.createElement('div');
    optionsEl.className = 'quiz-options';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => handleAnswer(option, button));
        optionsEl.appendChild(button);
    });

    quizContainer.appendChild(optionsEl);
}

function handleAnswer(selectedOption, button) {
    const currentQuestion = quizData[currentQuestionIndex];

    if (selectedOption === currentQuestion.answer) {
        button.classList.add('correct');
        score++;
    } else {
        button.classList.add('wrong');
    }

    Array.from(button.parentElement.children).forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === currentQuestion.answer) {
            btn.classList.add('correct');
        } else {
            btn.classList.add('wrong');
        }
    });

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuiz();
        } else {
            showResults();
        }
    }, 1000);
}

function showResults() {
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'block';

    const resultMessage = score >= 7
    ? `Parabéns! Você acertou ${score} de ${quizData.length} perguntas. Você tem um bom conhecimento sobre a poluição marinha.`
    : `Você acertou ${score} de ${quizData.length} perguntas. Continue estudando para melhorar seu conhecimento sobre a poluição marinha.`;
    resultsContainer.textContent = resultMessage;
}

loadQuiz();
