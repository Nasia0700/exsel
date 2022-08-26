import { ExselComponent } from '../../core/ExselComponent'
import { createTable } from './table.template'

export class Table extends ExselComponent {
    static className = 'excel__table'
    toHTML() {
        return createTable(20)
    }
}