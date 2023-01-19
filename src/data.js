import {SiOpenaigym} from 'react-icons/si'



export const links = [
    {
        name: "Главная",
        path: '/'
    },
    {
        name: "Обо мне",
        path: '/about'
    },
    {
        name: "Галерея",
        path: '/gallery'
    },
    {
        name: "Тарифы",
        path: '/plans'
    },
    {
        name: "Челики",
        path: '/trainers'
    },
    {
        name: "Контакты",
        path: '/contact'
    }
]







export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Лох",
        info: "Ты никто. Стань кем-то",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Болеелимение",
        info: "Но не плох. Но недостаточно",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Нереалка",
        info: "Ты можешь лучше",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Бог",
        info: "Люди будут перед тобой преклоняться",
        path: "/programs/444"
    }
]








export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Первое качество",
        desc: "Конечно ум. Ум..ственно отсталый"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Второе качество",
        desc: "Я упорный. Чем больше порно, тем лучше"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Тре.. Зачем я это пишу? Почему вы, блин, сами посчитать не можете",
        desc: "Терпимость. Выдержу вообще всё. Не склонен к раздражению"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Сто тридцать девять дробь шесть",
        desc: "Я прекрасный счетовод. Назовите мне номер вашей карты и 3 цифры сзади и у вас на счету будет очень много нулей"
    }
]









export const faqs = [
    {
        id: 1,
        question: "Сколько я готов работать в день?",
        answer: "Я вообще не готов работать, честно говоря, но если надо, то часов 40 выделю"
    },
    {
        id: 2,
        question: "Готов ли я работать за еду?",
        answer: "Конечно же да. Желательно за вкусную, но не принципиально"
    },
    {
        id: 3,
        question: "Как долго я занимаюсь тем, чем занимаюсь?",
        answer: "Если речь о пинании х*ёв, то идёт 22ой год, а если Вы про программирование, то на момент написания этого текста - 26ой день"
    },
    {
        id: 4,
        question: "Как часто я бываю в сети и готов ответить на вопросы?",
        answer: "Я онлайн постоянно. Если я Вам не отвечаю, это значит, что я не хочу"
    },
    {
        id: 5,
        question: "Можно ли расторгнуть контракт в случае необходимости?",
        answer: "Нет. Договор мы скрепляем кровью на перекрёстке из 4х дорог."
    },
    {
        id: 6,
        question: "Зарегестрирована ли оффициально моя компания?",
        answer: "Смотря по какому вопросу обращаетесь. Если хотите потребовать деньги, то Вы меня уже не найдёте"
    }
]








export const testimonials = [
    {
        id: 1,
        name: "Дася путешественица",
        quote: "Не советую ему доверять. Я вот доверилась - дружим уже четвёртый год",
        job: "Пидруга",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 2,
        name: "Ксюха Ауе",
        quote: "Чел реально чума я базарю. А какие выкидоны по музлу делает это ваще тема. Пятки не оторвал от земли ни разу, так что всё чотенько",
        job: "Гроза района",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Арина, Амина, Адина, Альбина, Алина",
        quote: "Кто-нибудь это читает? Вы можете мне помочь? Он держит меня в подвале уже 3ью неделю и заставляет работать над собой. Помогите, я хочу прокрастинировать",
        job: "Ученик чародея",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 4,
        name: "Артемида",
        quote: "Чел классный, но слишком спокойный. Не мой уровень. Конечно выкидоны у него прикольные бывают эт факт. Я его кста колечки пускать научил. По всем вопросам в лс",
        job: 'Такси "подымим" ',
        avatar: require("./images/avatar4.jpg")
    },
    {
        id: 5,
        name: "Guy Паша",
        quote: "Да не гей, бл*дь, а гай. Парень типо на инглише. В общем челибобрик балдёжный, общаться с ним по кайфу. Насчёт этой всей фигни с сайтами я не шарю, но чел гений",
        job: "Pharmacist",
        avatar: require("./images/avatar5.jpg")
    }
]







export const plans = [
    {
        id: 1,
        name: 'Всё выключено',
        desc: 'Ничего не работает. Ничего не трогайте',
        price: 0,
        features: [
            {feature: 'Разговор с Димасиком', available: true},
            {feature: 'Прогулка с Димасиком', available: true},
            {feature: 'Заплатить Димасику', available: true},
            {feature: 'Заплатить едой', available: true},
            {feature: 'Накормить', available: true},
            {feature: 'Выслушать совет', available: false},
            {feature: 'Дать совет', available: false},
            {feature: 'Переписать хату', available: false},
            {feature: 'Сдать властям', available: false},
            {feature: 'Получить бесплатный сайт', available: false},
            {feature: 'Получить леща', available: false},
            {feature: 'Решить задачу', available: false},
            {feature: 'Ударить Димасика табуреткой', available: false}
        ]
    },
    {
        id: 2,
        name: 'болиелимение',
        desc: 'Типа вроде норм, но страшно',
        price: 29.99,
        features: [
            {feature: 'Разговор с Димасиком', available: true},
            {feature: 'Прогулка с Димасиком', available: true},
            {feature: 'Заплатить Димасику', available: true},
            {feature: 'Заплатить едой', available: true},
            {feature: 'Накормить', available: true},
            {feature: 'Выслушать совет', available: true},
            {feature: 'Дать совет', available: false},
            {feature: 'Переписать хату', available: true},
            {feature: 'Сдать властям', available: false},
            {feature: 'Получить бесплатный сайт', available: false},
            {feature: 'Получить леща', available: true},
            {feature: 'Решить задачу', available: false},
            {feature: 'Ударить Димасика табуреткой', available: false}
        ]
    },
    {
        id: 3,
        name: 'Всё перевключено',
        desc: 'Не, ну оно тебе вообще надо? ',
        price: 89.99,
        features: [
            {feature: 'Разговор с Димасиком', available: true},
            {feature: 'Прогулка с Димасиком', available: true},
            {feature: 'Заплатить Димасику', available: true},
            {feature: 'Заплатить едой', available: true},
            {feature: 'Накормить', available: true},
            {feature: 'Выслушать совет', available: true},
            {feature: 'Дать совет', available: true},
            {feature: 'Переписать хату', available: true},
            {feature: 'Сдать властям', available: true},
            {feature: 'Получить бесплатный сайт', available: true},
            {feature: 'Получить леща', available: true},
            {feature: 'Решить задачу', available: true},
            {feature: 'Ударить Димасика табуреткой', available: true}
        ]
    }
]









const Trainer1 = require('./images/trainer1.jpg')
const Trainer2 = require('./images/trainer2.jpg')
const Trainer3 = require('./images/trainer3.jpg')
const Trainer4 = require('./images/trainer4.jpg')
const Trainer5 = require('./images/trainer5.jpg')
const Trainer6 = require('./images/trainer6.jpg')


export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'Моя сестра и её кот',
        job: 'У них есть группа в вк и страничка в инсте. Она вяжет и рисует. Подписывайтесь.',
        socials: ['https://instagram.com/irinanik_toys.art?igshid=YmMyMTA2M2Y=', 'https://vk.com/public214501068', 'https://vk.com/public214501068', 'https://vk.com/irinanik96']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'ЛЭра',
        job: 'Итс май подруга. Добрейшей души человек, который всегда готов помочь',
        socials: ['https://vk.com/vprozorova1', 'https://vk.com/vprozorova1', 'https://vk.com/vprozorova1', 'https://vk.com/vprozorova1']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'GLEBA',
        job: 'Мой друганчик. Чел на голову отбитый, что мне определённо нравится',
        socials: ['https://vk.com/gleba_a', 'https://vk.com/gleba_a', 'https://vk.com/gleba_a', 'https://vk.com/gleba_a']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Дася',
        job: 'Капибары - как смысл жизни',
        socials: ['https://vk.com/kulikowadarya', 'https://vk.com/kulikowadarya', 'https://vk.com/kulikowadarya', 'https://vk.com/kulikowadarya']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Ксюха',
        job: 'Ваще зачётная деваха. Шарит и выкупает за всё. Общаться прям по кайфу',
        socials: ['https://vk.com/kkksusha23', 'https://vk.com/kkksusha23', 'https://vk.com/kkksusha23', 'https://vk.com/kkksusha23']
    },
    {
        id: 6,
        image: Trainer6,
        name: 'А это я',
        job: 'Ну просто я, да. Я ж чсв. В друзьяшек себя вставил, почему нет',
        socials: ['https://vk.com/nabor_bukaf', 'https://vk.com/nabor_bukaf', 'https://vk.com/nabor_bukaf', 'https://vk.com/nabor_bukaf']
    }
]