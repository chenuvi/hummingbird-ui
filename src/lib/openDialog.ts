import Dialog from "./Dialog.vue"
import { createApp, h } from 'vue'

const openDialog = (options) => {
    console.log('options: ', options);
    const { title, content, ok, cancel } = options

    const div = document.createElement("div")
    document.body.appendChild(div);
    const close = () => {
        app.unmount(div);
        div.remove();
    }
    console.log('2');
    const app = createApp({
        render() {
            return h(
                Dialog,
                {
                    visible: true,
                    "onUpdate:visible": (newVisible) => {
                        if (newVisible === false) {
                            close()
                        }
                    },
                    ok,
                    cancel
                },
                {
                    title,
                    content
                }
            )
        }
    })
    console.log('3');
    app.mount(div)
    console.log('4');
}

export default openDialog