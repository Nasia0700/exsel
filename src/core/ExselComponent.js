import { DomListener } from './DomListener'

export class ExselComponent extends DomListener {
    constructor($root, option = {}) {
        super($root, option.listeners)
        this.name = option.name
    }
    // шаблон компонента
    toHTML() {
        return ''
    }

    init() {
        this.initDomListener()
    }

    destroy() {
        this.removeDomeListener()
    }
}