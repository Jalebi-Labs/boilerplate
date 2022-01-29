import qs from 'qs';
import isEmpty from 'lodash/isEmpty';

const withQueryParams = (pathname: string, query: Record<string, unknown>): string => {
  if (isEmpty(query)) {
    return pathname;
  }
  return `${pathname}?${qs.stringify(query)}`
}

export const baseRoute = (args?: {
  type: 'redirect',
  from?: string,
  redirectCode: 'session_expired',
}) => {
  const query: Record<string, string> = {}

  if (args) {
    if (args.type === 'redirect') {
      if (args.from && args.from.startsWith('/')) {
        query.from = args.from
      }
      query.redirectCode = args.redirectCode;
    }
  }

  return withQueryParams('/', query)
}

export const settingsRoute = () => {
  return `${baseRoute()}/settings`
}

export const logoutRoute = () => {
  return `${baseRoute()}/logout`
}