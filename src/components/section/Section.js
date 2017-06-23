import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap'; 


export default class Section extends Component {
    render() {
        return ( 
            < div >
                < Grid >
                    < Row >
                    < Col xs = {12} >
                    <h2 xs={12} className='text-center'>{this.props.SectionHeaderText}</h2>
                    < /Col >
                    < /Row>

                    < Row className = "show-grid" >
                        < Col xs = { 12 } > 
                            {this.props.children}
                        < /Col> 
                    < /Row>
                < /Grid> 
            < /div> 
        )
    }
};
