export interface Label {
    id: string

    /** name of the label, you have saved on your WA */
    name: string

    /** color of the label, you have saved on your WA */
    color: number

    /** if exists, its pre-defined label */
    predefinedId?: number

    /** true if you delete label from your WA */
    deleted: boolean
}