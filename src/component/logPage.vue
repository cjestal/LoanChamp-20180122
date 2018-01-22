<template>
	<div class="row">
		<div class="col-md-12">
			<div class="content-box-large">
				<div class="panel-heading">
					<div class="panel-title">Log in/out record</div>
				</div>
				<div class="panel-body">
					<table class="table table-striped table-bordered" id="logTable">
		              <thead>
		              	<tr>
		                  <th>User ID</th>
		                  <th>IP</th>
		                  <th>Device</th>
		                  <th>Event Type</th>
		                  <th>Source</th>
		                  <th>Creation Date/Time</th>
		                  <th>CookieUniqueID</th>
		                </tr>
		              </thead>
		              <tbody>
		              	
		                <tr v-for="item in list">
		                  <td>{{item.userId}}</td>
		                  <td></td>
		                  <td>{{item.mobile}}</td>
		                  <td>{{item.action}}</td>
		                  <td></td>
		                  <td>{{item.logTime}}</td>
		                  <td></td>
		                </tr>
		               <!--  <tr>
		                  <td>test</td>
		                  <td>test</td>
		                  <td>test</td>
		                  <td>test</td>
		                  <td>test</td>
		                  <td>test</td>
		                  <td>test</td>
		                </tr> -->
		              </tbody>
		            </table>
				</div>

					
						
					<!-- / -->
				</div>
			</div>
		</div>

	</div>
</template>

<script>
import apiService from '../services/apiService'
import constantService from '../services/constantService'
import dataAadapter from '../services/dataAadapter'
export default {
  data() {
  	return {
  		list:[],
  		showData:false
  	}
  },
  created: function () {
   this.getData();
  },
  methods: {
  	 getData: function(){
      var vm = this;
      var condition = localStorage.getItem(constantService.localStorage.quiry);

      apiService.get('/api/user/log/'+condition,{
      }).then(function (response) {         
        console.log(response); 
        if (response.data.code == "00000000") {
        	var result = [];
        	for (var i = 0; i < response.data.data.length; i++) {
        		result.push(dataAadapter.logToItem(response.data.data[i]));	
        	}
          vm.list = result;
          vm.showData = true;
        }
    }).then(function(){
   		$('#logTable').dataTable( {
            "aoColumnDefs": [
                { 'bSortable': false, 'aTargets': [ 0,1,2,3,4,6 ] }
             ],
             "lengthMenu": [[10, 30, 50], [10, 30, 50]],
              searching:false,
            "order": [[ 5, "desc" ]]
        }); 	
    });
  	}
  },
  props: {
  	// tableType:{
  	//   type: String,
  	//   default: "1",
  	// },
   //  list: {
   //    type: Array,
   //    default: function () { return [] }
   //  },
   //  uwlist: {
   //    type: Array,
   //    default: function () { return [] }
   //  }
  }
}
</script>
<style scoped>

</style>