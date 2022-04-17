
import React from 'react';
import NavigationBar from './Components/NavigationBar'
import StatesCard from './Components/StatesCard';
import { Row, Col, Button, Input } from 'reactstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

  constructor() {
    super()

    this.state = {
      array: [],
      colors: [],
      mean: '',
      mode: '',
      median: '',
      standardDeviation: '',
      value: 0,
    }
  }

  componentDidMount(){
    this.setNewArray(10);    
  }

  calculateStates = (array, colors) => {
    let sum = 0, countF = 0, maxF = 0;
    var arr = [...array];
    array.sort();
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    let mode = -1;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] === array[i + 1]) {
        countF++;
        if (countF > maxF) {
          maxF = countF;
          mode = array[i];
        }
      }
      else {
        countF = 0;
      }
    }
    let mean = sum / array.length;
    let median = array[Math.floor(array.length / 2)];
    let sum2 = 0;
    for (let i = 0; i < array.length; i++) {
      sum2 += (mean - array[i]) * (mean - array[i]);
    }
    let standardDeviation = Math.sqrt(sum2 / array.length);
    this.setState({
      array: arr,
      colors,
      mean,
      median,
      mode,
      standardDeviation,
    })
  }
  randomInt = () => {
    return Math.floor(Math.random() * 100) + 1;
  }

  setNewArray = (n) => {
    var array = [];
    var colors = [];
    for (let i = 0; i < n * 5; i++) {
      array.push(this.randomInt());
      colors.push(this.getRandomColor());
    }
    
    this.calculateStates(array, colors);
  }

  getRandomColor = () => {
    var letters = 'BADEB'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)]  ;
    }
    return color;
  }

  handleInput = (e) => {
    this.setState({
      value: e.target.value,
    })
  }

  addNumber = () => {
    if(this.state.value > 100 || this.state.value < 1){
      alert("Enter Number between 1 and 100");
    }
    else {
      this.setState({
        array : [...this.state.array, this.state.value],
        colors : [...this.state.colors, 'green'],
      })
    }
  }

  render() {

    return (
      <>

        <NavigationBar></NavigationBar>
        <div className='container'> 

          <Row className=' App mt-2' style={{ position: "relative" }}>
            <Col>
              < div className="bar-box " >
                {
                  this.state.array.map((num, i) => (
                    <div className="bar" id={`${i}`} key={i} style={{ height: `${num}px`, width: '6px', background: `${this.state.colors[i]}` }}></div>
                  ))
                }
              </div >
            </Col>
          </Row>
          <Row className='m-3'>
            <Col lg="6" > 
              <Button className='m-1' color='primary' onClick={() => this.setNewArray(10)}>Set New Data</Button>
            </Col>
            <Col lg="3">
              <Input className='m-1' min={1} max={100} placeholder="Enter Between 1 and 100" type='number' onChange={this.handleInput}></Input>
            </Col>
            <Col lg="3">
              <Button className='m-1' color='primary' onClick={this.addNumber}>Add Number</Button>
            </Col>
          </Row>
          {/* <Col sm="4"> */}
            <Row>
              <Col>
                <StatesCard title="Mean" value={this.state.mean}></StatesCard>
                <StatesCard title="Mode" value={this.state.mode}></StatesCard>
              </Col>
              <Col>
                <StatesCard title="Median" value={this.state.median}></StatesCard>
                <StatesCard title="Standard Deviation" value={this.state.standardDeviation}></StatesCard>
              </Col>
            </Row>
        </div>




          {/* </Col> */}
        {/* </Row> */}

      </>
      // <Navbar></Navbar>
    );
  }
}

export default App;
