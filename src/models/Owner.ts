export interface Owner {
  id: any
  name: string
  document: string
  document_type: 'CPF' | 'CNPJ'
  creation_date?: Date
}
