import React from "react";
import './graph.css'
import {Button, Card, Row} from 'reactstrap';
class Graph extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            array: [1,2,3,4,5 ,5,6,7],
        }
    }
componentDidMount(){
    this.setNewArray(10);
}

randomInt = () => {
    return Math.floor(Math.random() * 100) + 1;
}

  setNewArray = (n) => {
    var array = [];
    for (let i = 0; i < n * 5; i++) {
      array.push(this.randomInt());
      // document.getElementById(`${i}`).style.backgroundColor = "black";
    }
    this.props.array(this.state.array);
    this.setState({
      array: array,
      value: n,
    })
  }

  getRandomColor = () => {
    var letters = 'BADEB'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}
    render() {
        return (
            <>
                {/* <Row> */}
                    < div className="bar-box" >
                        {
                            this.state.array.map((num, i) => (
                                <div className="bar" id={`${i}`} key={i} style={{ height: `${num}px`, width: '4px', background:`${this.getRandomColor()}`}}></div>
                            ))
                        }
                    </div >
                {/* </Row> */}
                <Row>
                    <Button onClick={() => this.setNewArray(10)}>Create Array</Button>
                </Row>
                
            </>

        )

    }
}

export default Graph;