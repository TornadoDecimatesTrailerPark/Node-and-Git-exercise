import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle, CardText} from 'reactstrap';
import DishDetail from './DishDetailsComponent';

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            seleectedDish: null
        };

    }

    onSelectedDish(dish){
        this.setState({seleectedDish:dish});
    }

    
    render() {
        const menu = this.props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=> this.onSelectedDish(dish)}>                        
                        <CardImg width="100%" src={dish.image} alt={dish.name} />                        
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                
                <DishDetail dish={this.state.seleectedDish} />
                
            </div>
        )
    }
}

export default Menu;