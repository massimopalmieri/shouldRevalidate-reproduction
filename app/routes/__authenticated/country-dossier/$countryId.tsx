import {useFetcher} from '@remix-run/react'
import {Responsive, WidthProvider} from 'react-grid-layout'
import {RiskHighlightsWidget} from '~/routes/api/widgets/risk-highlights';

const ResponsiveGridLayout =  WidthProvider(Responsive);

export default function CountryDossier() {
  const preferencesFetcher = useFetcher()

  function onLayoutChange() {
    preferencesFetcher.submit(
      null,
      {method: 'post', action: '/api/preferences'},
    )
  }

  return (
    <div>
      <ResponsiveGridLayout onLayoutChange={onLayoutChange}>
        <div key='a'>
          <RiskHighlightsWidget />
        </div>
      </ResponsiveGridLayout>
    </div>
  )
}
