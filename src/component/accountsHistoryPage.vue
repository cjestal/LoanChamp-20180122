<template>
	<div class="row">
		<div class="col-md-12">
			<div class="content-box-large">
				<div class="panel-heading">
					<div class="panel-title">Account History</div>
				</div>
				<div class="panel-body">

		            <table class="table table-bordered table-striped" id="infoUpdate">
			              <tbody>
			              	<thead>
				              	<tr>
				                  <th>Account ID</th>
				                  <th>Loan Product</th>
				                  <th>Loan Program</th>
				                  <th>Amount</th>
				                  <th>Term</th>
				                  <th>Interest Rate</th>
				                  <th>Application Date/Time</th>
				                  <th>Status</th>
				                  <th>Action</th>
				                  <th>Delinquent</th>
				                </tr>
			            	</thead>
			                <tr v-for="item in list">
			                  <td>{{item.revealId}}</td>
			                  <td>{{item.productCode}}</td>
			                  <td>{{item.programCode}}</td>
			                  <td>{{item.amount}}</td>
			                  <td>{{item.duration}}{{item.durationUnit}}</td>
			                  <td></td>
			                  <td>{{item.applicationTime}}</td>
			                  <td>{{item.orderStatus}}</td>
			                  <td></td>
			                  <td></td>
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