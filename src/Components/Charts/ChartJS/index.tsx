import { Container, Row } from 'reactstrap';
import BarChartClass from './BarChart';
import DoughnutChartClass from './DoughnutChart';
import LineChartClass from './LineChart';
import LineChart2Class from './LineChart2';
import PolarChartClass from './PolarChart';
import RadarChartClass from './RadarChart';
const ChartJsContainer = () => {
  return (
    <Container fluid={true}>
    <Row>
      <BarChartClass />
      <LineChartClass />
      <RadarChartClass />
      <LineChart2Class />
      <DoughnutChartClass />
      <PolarChartClass />
    </Row>
  </Container>
  )
}

export default ChartJsContainer