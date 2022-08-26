import { $ } from './dom'
import { capitalize } from './utils'

export class DomListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error('No $root provided for DomListener')
        }
        this.$root = $root
        this.listeners = listeners
    }
    initDomListener() {
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            if (!this[method]) {
                throw new Error(`Method ${method} is not implementes in ${this.name || ''} Component`)
            }
            this[method] = this[method].bind(this)
            this.$root.on(listener, this[method])
        })
    }

    removeDomeListener() {
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            this.$root.delete(listener, this[method])
        }
        )
    }
}

function getMethodName(eventName) {
    return 'on' + capitalize(eventName)
}