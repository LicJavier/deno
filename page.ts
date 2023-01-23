import { setup, tw , getStyleTag , virtualSheet } from "./deps.ts";
import { colors } from "./colors.ts";
const sheet = virtualSheet();

setup({
    theme: {
        fontFamily: {
        sans: ["Helvetica", "sans-serif"],
        serif: ["Times", "serif"],
        },
    },
    sheet,
});

function renderBody(params) {
    const newColor = params.map(element => {
            return `<div style="background-color:${element}" class="${tw`rounded(full) h(32) w(32) m(3) `}"></div>`
    });
    return `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body class="${tw`text(center) bg(black))`}">
            <h1 class="${tw`text(8xl blue-500) p(5)`}">Bienvenidos</h1>
            <form action="/" method="POST" class="${tw`text(5xl blue-500) m(5)`}">
                <label for="color">Ingresa tu color</label>
                <input type="color" name="color"  id="color" >
                <button type="submit" class="${tw`text(5xl blue-500)`}">Enviar</button>
                </form>
                <ul class="${tw`m(5) justify(items-center) flex w(screen))`}" >${newColor}</ul>
        </body>
        </html>
    `;
}

export function ssr() {
    sheet.reset();
    const body = renderBody(colors);
    const styleTag = getStyleTag(sheet);

    return `<!DOCTYPE html>
        <html lang="en">
            <head>
                <title>Hello from Deno</title>
                ${styleTag}
            </head>
            <body>
                ${body}
            </body>
        </html>`;
}
