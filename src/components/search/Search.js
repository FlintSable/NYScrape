import React, { Component } from 'react';
import Section from '../section/Section';
import {Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

export default class Search extends Component{
	render(){
		return(
			<div>
				<Grid>
					<Row>
					  <Section SectionHeaderText='Search'>
						<Form horizontal>
						    <FormGroup controlId="formHorizontalEmail">
						      <Col xs = {12} className='text-center'>
						        Topic
						      </Col>
						      <Col xs = {12} className='text-center'>
						        <FormControl type="email" placeholder="Topic" />
						      </Col>
						    </FormGroup>

						    <FormGroup controlId="formHorizontalPassword">
						      <Col xs = {12} className='text-center'>
						        Start Year
						      </Col>

						      <Col xs = {12}>
						        <FormControl placeholder="Start Year" />
						      </Col>
						    </FormGroup>

						    <FormGroup controlId="formHorizontalPassword">
						      <Col xs = {12} className='text-center'>
						        End Year
						      </Col>
						      <Col xs = {12} className='text-center'>
						        <FormControl placeholder="End Year" />
						      </Col>
						    </FormGroup>

						    <FormGroup>
						      <Col xs = {12} className='text-center'>
						        <Button type="submit">
						          Submit
						        </Button>
						      </Col>
						    </FormGroup>
						  </Form>
		        	  </Section>
        	  		</Row>
        	  </Grid>
			</div>
		)
	}
}