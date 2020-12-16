interface Link {
  text: string,
}

export interface InternalLink extends Link{
  route: string,
}

export interface ExternalLink extends Link{
  url: string,
}
