const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

function style () {
    return gulp.src("./scss/**/*.scss") // Находим наш scss файл
            .pipe(sass())               // Выполняем sass - в параментрах можно предать минификацию и т.д (смотри документацию в и-нете)
            .pipe(gulp.dest("./css"))   // Куда мы положем сконвертированый файл
            .pipe(browserSync.stream())
}

function watch () {
    /* browserSync.init({
        server: {
            baseDir: "./"
        }
    }) */
    gulp.watch("./scss/**/*.scss", style); // .watch("A", B) - Если изменяется файл A віполняем B
    /* gulp.watch("./*.html").on("change", browserSync.reload); */ // Находим все html, и когда изменяется html перезапускаем browserSync
}
exports.style = style;
exports.watch = watch;
//== == == == == == == == == == == == ==//
// Для новых проектов //
// 1.Создать папку с проектом
// 2.Открыть созданую папку в VSC
// 3.Создать index.html
// 4.Создать папку scss и в ней фаил style.scss
// 5.Подклюxить папку с CSS - <link rel="stylesheet" href="css/style.css">
// 6.Проверить или установлена Node.
// 6.1. Вызвать терминал (консоль) CTRL + `
// 6.2. Вызвать команду 
//   node -v
// 6.3. Вызвать команду
//   npm -v
// 7.Установить Gulp-cli командой 
//   npm i gulp-cli -g
// 8.Создать package.json командой
//   npm init
// 9.Установить модули gulp gulp-sass BrowserSync командой 
//   npm install --save-dev gulp gulp-sass browser-sync
//   должна создаться папка node_modules
// 10. Создать папку и файл для сss командой
//    gulp style
// 11.Скопировать фаил gulpfile.js в корень основной папки и запустить командой
//    gulp watch