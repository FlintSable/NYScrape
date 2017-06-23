import React, { Component } from 'react';
import {Grid, Row, Col, PageHeader} from 'react-bootstrap';

export default class Header extends Component {
    render() {
    	let stuff = 'Times Article Scrubber';
        return ( 
            < div >
                < Grid >
                    < Row className = "show-grid" >
                        < Col xs = { 12 } className='text-center'> 
                            <PageHeader>New York {stuff} <br /><small>Search for and annotate articles</small></PageHeader>
                        < /Col> 
                    < /Row>
                < /Grid> 
            < /div>
        )
    }
};

