import Vue from 'vue'

export default Component => {
    const root = document.getElementById('root')
    const props = JSON.parse(decodeURIComponent(root.dataset.props))
    const component = new Vue({
        render: createElement => createElement(Component, { props })
    })
    component.$mount(root)
}