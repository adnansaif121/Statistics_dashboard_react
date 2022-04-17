import React from "react";
import '../App.css';
import {Card, CardBody, CardTitle, CardSubtitle} from 'reactstrap'
class StatesCard extends React.Component {
    // constructor(props) {
    //     super(props);
    // }    
    state = {  }
    render() { 
        return ( 
            <Card className="cardShadow m-2">
                <CardBody>
                    <CardTitle>{this.props.title}</CardTitle>
                    <CardSubtitle>{this.props.value}</CardSubtitle>
                </CardBody>
            </Card>
         );
    }
}
 
export default StatesCard;