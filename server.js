import Vue from 'vue'
import { createRenderer } from 'vue-server-renderer'

export default Component => ({ script, stylesheet }, props) => {
    const serializedProps = encodeURIComponent(JSON.stringify(props))
    const component = new Vue({
        render: createElement => createElement(Component, { props })
    })
    return createRenderer().renderToString(component).then(html => `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>${props.title}</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css">
                <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
                ${stylesheet && `<link href="${stylesheet}" rel="stylesheet">`}
            </head>
            <body>
                <div id="root" data-props="${serializedProps}">${html}</div>
                <script src="${script}"></script>
            </body>
        </html>
    `)
}