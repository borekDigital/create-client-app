export interface MetaData {
  hid: string,
  name: string,
  content: string
}

export interface HtmlHead {
  titleTemplate: string,
  title: string,
  meta: MetaData[]
  link?: Partial<HTMLLinkElement>[]
}
