export default class DOM {
    static div(className?: string, children?: Array<string | HTMLElement>): HTMLDivElement {
        const el = document.createElement<'div'>('div');

        if (className) {
            el.className = className;
        }

        if (children) {
            children.forEach(child => {
                if (child instanceof HTMLElement) {
                    el.appendChild(child);
                } else {
                    el.innerHTML += child;
                }
            })
        }

        return el;
    }
}
