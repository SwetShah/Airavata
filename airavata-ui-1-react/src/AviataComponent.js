import React from 'react';
import AviataService from './AviataService';

class AviataComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            teams:[]
        }
    }

    componentDidMount(){
        AviataService.getTeamDetails().then((response) => {
            this.setState({ teams: response.data})
        });
    }

    render (){
        return (
            <div>
                <h1 className = "text-center"> Teams List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <th> Name</th>
                            <th> Apache Id</th>
                            <th> Email</th>
                            <th> Organization</th>
                            <th> Roles</th>
                            <th> Time_zone</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.teams.map(
                                team => 
                                <tr key = {team.apache_id}>
                                     <td> {team.name}</td> 
                                     <td> {team.apache_id}</td>   
                                     <td> {team.email}</td>   
                                     <td> {team.organization}</td>   
                                     <td> {team.roles}</td>
                                     <td> {team.time_zone}</td> 
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>

        )
    }

}

export default AviataComponent