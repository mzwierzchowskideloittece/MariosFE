export interface Marios {

  externalId: string,

  sentOrReceived: string,

  type: {

    externalId: string,

    type: string

  },

  title: string,

  comment: string,

  userNameOfSender: string,

  userNamesOfReceivers: Set<string>,

  creationDate: Date

}
