const questions = [
    { question: 'Какой тип отдыха вы предпочитаете?', answers: ['Активный(походы, экскурсии)', 'Пляжный(отдых у моря)', 'Культурный(посещение музеев, театров)', 'Экстремальный(сплавы, горные лыжи', 'Лечебно-оздоровительный'] },
    { question: 'Какой природный ландшафт вам больше всего нравится?', answers: ['Горы', 'Леса', 'Пляжи', 'Минеральные воды'] },
    { question: 'Вы предпочитаете путешествовать по городам или по природным местам?', answers: ['Города', 'Природа'] },
    { question: 'Какой вид активного отдыха вам ближе?', answers: ['Пешие походы', 'Велопрогулки', 'Водные виды спорта', 'Горнолыжный спорт'] },
    { question: 'Какой климат вам больше всего нравится?', answers: ['Тропический', 'Умеренный', 'Холодный', 'Субтропический', 'Континентальный'] },
    { question: 'Сколько времени вы планируете провести в поездке', answers: ['Выходные(2 - 3 дня)', 'Неделя', 'Две - три недели', 'Более месяца'] },
    { question: 'Что для вас важнее в поездке?', answers: ['Достопримечательности и культура', 'Еда и кухня', 'Активный отдых', 'Отдых и релаксация'] },
    { question: 'Как вы оцениваете бюджет на поездку?', answers: ['Экономный', 'Средний', 'Высокий'] },
    { question: 'Какой регион России вас больше всего привлекает?', answers: ['Краснодарское черноморское побережье', 'Черноморское Побережье'] },
    { question: 'Как вы относитесь к популярным местам для отдыха?', answers: ['Положительно', 'Нейтрально'] },
    { question: 'Какую форму отдыха вы предпочли бы в российских регионах?', answers: ['Традиционный отдых в санатории', 'Путешествие по горячим источникам', 'Активный отдых', 'Туризм по старинным городам'] },
    { question: 'Какой вид зимнего отдыха вам интересен?', answers: ['Катание на лыжах в горах', 'Сноубординг', 'Прогулки на снегоступах', 'Ледяные скульптуры и выставки'] },
    { question: 'Какую природу вы бы хотели увидеть?', answers: ['Пляжи и море', 'Горы и водопады', 'Леса и озера', 'Курорты и минеральные источники'] },
    { question: 'Какой уровень удобства вам нужен во время поездки?', answers: ['Роскошные отели', 'Средний уровень', 'Бюджетные варианты', 'Кемпинги или хостелы'] },
    { question: 'Что для вас важнее всего в поездке?', answers: ['Релакс', 'Возможности для новых знакомств', 'Уникальные впечатления', 'Отдых и оздоровление'] },
    { question: 'Вам нравятся развитые транспортные системы во время путешествий?', answers: ['Да', 'Нет'] },
    { question: 'Вам нравятся разнообразия транспортных средств?', answers: ['Да, это было бы хорошим плюсом', 'Наверное нет, не думаю об этом'] },
    { question: 'Вы предпочитаете многолюдные или малолюдные места для отдыха?', answers: ['Многолюдные', 'Малолюдные'] },
];

let currentQuestionIndex = 0;

function startTest() {
    document.getElementById('startPage').classList.remove('active');
    document.getElementById('questionPage').classList.add('active');
    displayQuestion();
}

function displayQuestion() {
    const questionBlock = document.getElementById('questionBlock');
    const questionData = questions[currentQuestionIndex];
    questionBlock.innerHTML = `
        <h2 class="heading">${questionData.question}</h2>
        <ul  class="text2">
            ${questionData.answers.map((answer, index) => `
                <li><input type="checkbox" name="question${currentQuestionIndex}" id="answer${currentQuestionIndex}${index}" /><label for="answer${currentQuestionIndex}${index}">${answer}</label></li>
            `).join('')}
        </ul>
    `;
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        document.getElementById('questionPage').classList.remove('active');
        document.getElementById('finishPage').classList.add('active');
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function finishTest() {
    window.location.href = 'index4.html'; // Переход на другую страницу по завершении
}