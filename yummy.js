const express = require('express');
const expressHandlebars = require('express-handlebars');

const app = express();

const hbs = expressHandlebars.engine({ defaultLayout: 'main', layoutsDir: 'views/layouts/' });

const port = process.env.PORT || 3000;



const fortunes = [
    "Pokonaj swoje lęki, albo one pokonają ciebie.",
    "Rzeki potrzebują źródeł.",
    "Nie obawiaj się nieznanego.",
    "Oczekuj przyjemnej niespodzianki.",
    "Zawsze szukaj prostego rozwiązania."
];



// Handlebars views
app.engine('handlebars', hbs);
app.set('view engine', 'handlebars');
app.set('views', './views/layouts');
app.use(express.static(__dirname + '/public'));

// Tracing
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/about', (req, res) => {
    const randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)]
    res.render('about', { fortune: randomFortune });
});

// Error 500
app.use((err, req, res, next) => {
    res.status(500);
    res.render('500');
    console.error(err.message);
});

// Error 404
app.use((req, res) => {
    res.status(404);
    res.render('404');
});

app.listen(port, () => console.log(
        `Express has been run at the address:
        http://localhost:${port};
        Press Ctrl-C to terminate it.`
    )
);