export interface Marios {

  externalId: string,

  sentOrReceived: string,

  type: {

    externalId: string,

    type: string

  },

  title: string,

  comment: string,

  firstAndLastNameOfSender: string,

  firstAndLastNamesOfReceivers: Set<string>,

  creationDate: Date

}
