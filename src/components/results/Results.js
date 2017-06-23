import React, { Component } from 'react';
import Section from '../section/Section';
import {Grid, Row, Col, Panel, Title, FormControl, ControllLabel, Button} from 'react-bootstrap';

export default class Results extends Component{
	render(){
		let title = 'testtest'
		return(
			<div>
				<Grid>
					<Row>
					  <Section SectionHeaderText='Results'>
					    <Panel header={title}>
					      Panel content
					    </Panel>

					    <Panel header={title} bsStyle="primary">
					      Panel content
					    </Panel>

					    <Panel header={title} bsStyle="success">
					      Panel content
					    </Panel>

					    <Panel header={title} bsStyle="info">
					      Panel content
					    </Panel>

					    <Panel header={title} bsStyle="warning">
					      Panel content
					    </Panel>

					    <Panel header={title} bsStyle="danger">
					      Panel content
					    </Panel>

		        	  </Section>
        	  		</Row>
        	  </Grid>
			</div>

		)

	}
}