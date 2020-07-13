import React, {Component} from 'react';
import StudentDetails from './StudentDetails.css'

var jsonData = [];

class StudentDetailsComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			schoolName: '',
			email: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}

	handleChange(event) {
		const target = event.target;
		const stateName = target.name;
		const value = target.value;
		this.setState({
			[stateName]: value
		});
	}

	submitForm(event) {
		event.preventDefault();
		jsonData.push({...this.state});
		this.setState({
			name: '',
			schoolName: '',
			email: ''
		});

		// COULD NOT CREATE THE NEW FILE TO WHICH THE jsonData CAN BE
		// WRITTEN. IF THE TIME PERMITS LATER WILL TRY TO SEE 
		
		console.log(jsonData);
	}

	render() {

		return (
			<form >
				<h1> Students Bio Data </h1>
			  <table>
			    <tr>
			      <td align="left">Name:</td>
			      <td align="left">
			      	<input type="text" name="name" placeholder="Enter Full Name" 
			      		value={this.state.name} onChange={this.handleChange}
			      	/>
			      </td>
			    </tr>
			    <tr>
			      <td align="left">School Name:</td>
			      <td align="left">
			      	<input type="text" name="schoolName" placeholder="School Name" 
			      		value={this.state.schoolName} onChange={this.handleChange}
			      	/>
			      </td>
			    </tr>
			    <tr>
			      <td align="left">Email:</td>
			      <td align="left">
			      	<input type="text" name="email" placeholder="Enter your Email"
			      		value={this.state.email} onChange={this.handleChange}
			      	/>
			      </td>
			    </tr>
			  </table>
			  <input type="button" name="Submit" value="Submit" onClick={this.submitForm} />
			</form>
		);
	};

}

export default StudentDetailsComponent