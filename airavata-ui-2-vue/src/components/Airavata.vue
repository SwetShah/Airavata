<template>
 <center> <div>
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
                            <tr v-for="team in teams" v-bind:key="team.apache_id">
                                      <td> {{team.name}}</td> 
                                     <td> {{team.apache_id}}</td>   
                                     <td> {{team.email}}</td>   
                                     <td> {{team.organization}}</td>   
                                     <td> {{team.roles}}</td>
                                     <td> {{team.time_zone}}</td> 
                                </tr>
                            )
                        

                    </tbody>
                </table>

            </div>
 </center>
</template>

<script>
import AviataService from '../service/AviataService';

export default {
  name: 'Airavata',

  data() {
    return{
      teams : []
    }
  },
  methods: {
    refreshTeams() {
      AviataService.getTeamDetails()
        .then(response => {
          this.teams = response.data;
        });
    }
  },
  created() {
    this.refreshTeams();
  }

}
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>
