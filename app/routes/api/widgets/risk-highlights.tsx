import {json} from '@remix-run/node'
import {useFetcher} from '@remix-run/react'
import {useEffect} from 'react'
import type {ShouldRevalidateFunction} from '@remix-run/react'

export const shouldRevalidate: ShouldRevalidateFunction = () => {
  return false;
}

export async function loader() {
  try {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(json(Date.now()))
      }, 500)
    })
  } catch (error) {
    throw new Response(null, {status: 400})
  }
}

export function RiskHighlightsWidget() {
  const fetcher = useFetcher<typeof loader>()

  useEffect(() => {
    fetcher.load(`/api/widgets/risk-highlights`)
  }, [])

  return (
    <div>
      <p>loading: {(fetcher.state === 'loading').toString()}</p>
      <p>{fetcher.data}</p>
    </div>
  )
}
