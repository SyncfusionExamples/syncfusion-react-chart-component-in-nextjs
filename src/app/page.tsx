'use client'
import {
  AxisModel, Category, ChartComponent, ColumnSeries, DataLabel, Inject,
  Legend, LegendSeriesModel, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip, TooltipSettingsModel
} from '@syncfusion/ej2-react-charts';

export default function Home() {
  const data: any[] = [
    { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
    { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
    { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
    { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
    { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
    { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
  ];
  const tooltip: TooltipSettingsModel = { enable: true, shared: false }
  const primaryyAxis: AxisModel = { labelFormat: '${value}K' }
  const primarxyAxis: AxisModel = { valueType: 'Category' }
  const legendSettings: LegendSeriesModel = { visible: true }
  const marker = { dataLabel: { visible: true } };
  
  return (
    <>
      <h2>Syncfusion React Chart Component</h2>
      <ChartComponent id="charts" primaryXAxis={primarxyAxis} legendSettings={legendSettings}
        primaryYAxis={primaryyAxis} tooltip={tooltip}>
        <Inject services={[ColumnSeries, DataLabel, Tooltip, Legend, LineSeries, Category]} />
        <SeriesCollectionDirective>
          <SeriesDirective dataSource={data} xName='month' yName='sales' name='Sales' marker={marker} />
        </SeriesCollectionDirective>
      </ChartComponent>
    </>
  )
}
