import handlebars from 'express-handlebars';

export function handlebarsInit(app) {
    app.engine('hbs', handlebars.engine({
        extname: 'hbs',
    }));
    app.set('view engine', 'hbs');
    app.set('views', 'src/views');
}