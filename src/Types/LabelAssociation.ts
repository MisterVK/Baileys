export enum LabelAssociationType {
    JID = 'label_jid',
    MESSAGE = 'label_message'
}

export interface LabelAssociation {
    labelId: string

    associationId: string

    type: LabelAssociationType
}