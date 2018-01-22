<template>
	<div class="row">
		<div class="col-md-12">
			<div class="content-box-large">
				<div class="panel-heading">
					<div class="panel-title">Information Update History</div>
				</div>
				<div class="panel-body">
					<h5>-By customer</h5>
					<table class="table table-striped table-bordered" id="infoUpdate">
		              <thead>
		              	<tr>
		                  <th>Customer ID</th>
		                  <th>Revised Info</th>
		                  <th>Old Value</th>
		                  <th>New Value</th>
		                  <th>Edited Date/Time</th>
		                  
		                </tr>
		              </thead>
		              <tbody>
		              	
		                <tr v-for="item in list">
		                  <td>{{item.userId}}</td>
		                  <td>{{item.revisedInfo}}</td>
		                  <td>{{item.oldValue}}</td>
		                  <td>{{item.newValue}}</td>
		                  <td>{{item.updateTime}}</td>
		                </tr>
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
export default {
  data() {
  	return {
  	}
  },
  methods: {

  },
  props: {
  	// tableType:{
  	//   type: String,
  	//   default: "1",
  	// },
    list: {
      type: Array,
      default: function () { return [] }
    },
   //  uwlist: {
   //    type: Array,
   //    default: function () { return [] }
   //  }
  }
}
</script>
<style scoped>

</style>