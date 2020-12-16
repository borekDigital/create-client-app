import { MetaData, HtmlHead } from '../types/Head'
import { Company } from '~/types/Companies'

export const setHtmlHead = (
  company: Company,
  title: string,
  description?:string,
  ogTitle?: string,
  ogDescription?: string,
): HtmlHead => {
  description = description || undefined
  ogTitle = ogTitle || title
  ogDescription = ogDescription || description || undefined

  const meta: MetaData[] = []

  if (description) {
    meta.push({ hid: 'description', name: 'description', content: description })
  }

  if (ogTitle) {
    meta.push({ hid: 'og:title', name: 'og:title', content: ogTitle })
  }

  if (ogDescription) {
    meta.push({ hid: 'og:description', name: 'og:description', content: ogDescription })
  }

  return {
    titleTemplate: '%s | ' + company.name,
    title,
    meta,
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: `/favicons/${company.code}/favicon.ico`,
      },
    ],
  }
}
