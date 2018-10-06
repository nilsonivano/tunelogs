
import Dygraph from 'dygraphs';
class Graph extends React.Component {
  state = {};

  componentDidMount() {
    if (typeof window !== 'undefined') {
      // const Dygraph = require('dygraphs');
      // console.log(Dygraph);
      const graph = new Dygraph("graph", {
        title: 'Pressure Transient(s)',
        titleHeight: 32,
        ylabel: 'Pressure (meters)',
        xlabel: 'Time',
        gridLineWidth: '0.1',
        width: 700,
        height: 300,
        connectSeparatedPoints: true,
        axes: { "x": { "axisLabelFontSize": 9 }, "y": { "axisLabelFontSize": 9 } },
        labels: ['Date', 'Tampines Ave10 (Stn 40)'],
      });
    }
  }

  render() {
    return (
      <div id="graph"></div>
    )
  }
}

export default Graph
