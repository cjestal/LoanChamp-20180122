<template>
<div class="content-box-large">
	<div class="panel-body">
		<div v-if="(tableType == 3)" class="top-toolbar">
			<div class="form-group col-md-5" style="display:inline-block;">
				<label class="control-label col-md-3 sortbyPersionel" style="display:inline-block;">Underwriter</label>
				<div class="col-md-8" style="display:inline-block;">
					<select class="form-control" v-model="searchString" @change="search()">
					<option v-for="person in uwlist">{{person}}</option>
				</select>
				</div>
				
			</div>
			<div class="form-group col-md-5" style="display:inline-block;" v-if="enableTeam">
				<label class="control-label col-md-3 sortbyPersionel" style="display:inline-block;">Team</label>
				<div class="col-md-8" style="display:inline-block;">
					<select class="form-control">
					<option></option>
				</select>
				</div>
				
			</div>
		</div>
	  <table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-bordered top-bottom-space" id="example" v-if="(tableType == 1)">
	  <thead>
	    <tr>
	      <th>Order Status</th>
	      <th>Order ID</th>
	      <th>Product</th>
	      <th>Program</th>
	      <th>Customer ID</th>
	      <th>Customer Full Name</th>
	      <th>Amount</th>
	      <th>Application Date</th>
	      <th>Process Due Date</th>
	      <th>Sales Channel / Sales</th>
	      <th>Default U/W 1</th>
	      <th>Default U/W 2</th>
	    </tr>
	  </thead>
	  <tbody>
	  	 <tr class="even" v-for="item in list">
	      <td>{{item.status}}</td>
		  <td>{{item.id}}</td>
	      <td>{{item.product}}</td>
	      <td>{{item.program}}</td>
	      <td>{{item.cid}}</td>
	      <td>{{item.cfn}}</td>
	      <td style="text-align: right;">{{item.amount | formatNumber}}</td>
	      <td>{{item.adate}}</td>
	      <td>{{item.pdd}}</td>
	      <td>{{item.channel}}</td>
	      <td>{{item.uw1}}</td>
	      <td>{{item.uw2}}</td>
	    </tr>    
	    <!-- <tr class="even">
	      <td>120</td>
	      <td>11122234</td>
	      <td>Payday Loan</td>
	      <td>Regular</td>
	      <td>10012345</td>
	      <td>Roger Kimbery Gonzalez III</td>
	      <td>P7,000</td>
	      <td>9/8/2017 AM 10:22</td>
	      <td>9/8/2017 AM 12:22</td>
	      <td>Online</td>
	      <td>Roger Kimbery</td>
	      <td>Roger Kimbery</td>
	    </tr> -->      
	  </tbody>
	</table>
	<table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-bordered display nowrap" id="example" v-else-if="(tableType == 2)">
	  <thead>
	    <tr>
	      <th>Order Status</th>
	      <th>Order ID</th>
	      <th>Product</th>
	      <th>Program</th>
	      <th>Customer ID</th>
	      <th>Customer Full Name</th>
	      <th>Amount</th>
	      <th>Application Date</th>
	      <th>Process Due Date</th>
	      <!-- <th>Sales Channel / Sales</th> -->
	      <th>Default U/W 1</th>
	      <th>Default U/W 2</th>
	      <th>Assign U/W 1</th>
	      <th>Assign U/W 2</th>
	    </tr>
	  </thead>
	  <tbody>
	  	 <tr class="even" v-for="item in list">
	      <td>{{item.status}}</td>
		  <td>{{item.id}}</td>
	      <td>{{item.product}}</td>
	      <td>{{item.program}}</td>
	      <td>{{item.cid}}</td>
	      <td>{{item.cfn}}</td>
	      <td style="text-align: right;">{{item.amount | formatNumber}}</td>
	      <td>{{item.adate}}</td>
	      <td>{{item.pdd}}</td>
	      <!-- <td>{{item.channel}}</td> -->
	      <td>{{item.uw1}}</td>
	      <td>{{item.uw2}}</td>
	      <td>
	      	<select class="form-control" @change="assginuw1(item.realid,$event)">
	      		<option v-if="item.uw1 == ''"></option>
		      	<option v-for="itemUw1 in item.uw1list" v-bind:value="itemUw1.id"
		      	:selected="itemUw1.realName == item.uw1 ? 'selected': ''">{{itemUw1.realName}}</option>
		    </select>
		  </td>
	      <td>
		      <select class="form-control" @change="assginuw2(item.realid,$event)">
		      	  <option v-if="item.uw2 == ''"></option>
			      <option v-for="itemUw2 in item.uw2list" v-bind:value="itemUw2.id" 
			      :selected="itemUw2.realName == item.uw2 ? 'selected': ''">{{itemUw2.realName}}</option>
			    </select>
			</td>
	    </tr>    
	    <!-- <tr class="even">
	      <td>120</td>
	      <td>11122234</td>
	      <td>Payday Loan</td>
	      <td>Regular</td>
	      <td>10012345</td>
	      <td>Roger Kimbery Gonzalez III</td>
	      <td>P7,000</td>
	      <td>9/8/2017 AM 10:22</td>
	      <td>9/8/2017 AM 12:22</td>
	      <td>Online</td>
	      <td>Roger Kimbery</td>
	      <td>Roger Kimbery</td>
	    </tr> -->      
	  </tbody>

	</table>
	<table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-bordered" id="example" v-else-if="(tableType == 3)" width="100%">
	  <thead>
	    <tr>
	      <th>Order Status</th>
	      <th>Order ID</th>
	      <th>Product</th>
	      <th>Program</th>
	      <th>Customer ID</th>
	      <th>Customer Full Name</th>
	      <th>Amount</th>
	      <th>Application Date</th>
	      <th>Process Due Date</th>
	      <th>Sales Channel / Sales</th>
	      <th>Default U/W 1</th>
	      <th>Default U/W 2</th>
	    </tr>
	  </thead>
	  <tbody>
	  	 <tr class="even" v-for="item in list">
	      <td>{{item.status}}</td>
		  <td>{{item.id}}</td>
	      <td>{{item.product}}</td>
	      <td>{{item.program}}</td>
	      <td>{{item.cid}}</td>
	      <td>{{item.cfn}}</td>
	      <td style="text-align: right;">{{item.amount | formatNumber}}</td>
	      <td>{{item.adate}}</td>
	      <td>{{item.pdd}}</td>
	      <td>{{item.channel}}</td>
	      <td>{{item.uw1}}</td>
	      <td>{{item.uw2}}</td>
	    </tr>    
	    <!-- <tr class="even">
	      <td>120</td>
	      <td>11122234</td>
	      <td>Payday Loan</td>
	      <td>Regular</td>
	      <td>10012345</td>
	      <td>Roger Kimbery Gonzalez III</td>
	      <td>P7,000</td>
	      <td>9/8/2017 AM 10:22</td>
	      <td>9/8/2017 AM 12:22</td>
	      <td>Online</td>
	      <td>Roger Kimbery</td>
	      <td>Roger Kimbery</td>
	    </tr> -->      
	  </tbody>
	</table>
    <button style="float:right;margin-top: 15px;" type="button" class="btn btn-primary" @click="confirm" v-if="(tableType == 2)">confirm</button>
	<table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-bordered" id="example" v-else-if="(tableType == 4)" width="100%">
	  <thead>
	    <tr>
	      <th>Order Status</th>
	      <th>Order ID</th>
	      <th>Product</th>
	      <th>Program</th>
	      <th>Customer ID</th>
	      <th>Customer Full Name</th>
	      <th>Amount</th>
	      <th>Application Date</th>
	      <th>Process Due Date</th>
	      <th>Sales Channel / Sales</th>
	      <th>Default U/W 1</th>
	      <th>Default U/W 2</th>
	      <th>Action</th>
	    </tr>
	  </thead>
	  <tbody>
	  	 <tr class="even" v-for="item in list">
	      <td>{{item.orderStatus}}</td>
		  <td>{{item.revealId}}</td>
	      <td>{{item.productCode}}</td>
	      <td>{{item.programCode}}</td>
	      <td>{{item.personal.revealId}}</td>
	      <td>{{item.personal.fullName}}</td>
	      <td style="text-align: right;">{{item.amount | formatNumber}}</td>
	      <td>{{item.applicationTime}}</td>
	      <td>{{item.processDueTime}}</td>
	      <td>{{item.salesChannel}}</td>
	      <td>{{item.underwriter1.realName}}</td>
	      <td v-if="item.underwriter2">{{item.underwriter2.realName}}</td>
	      <td v-else></td>
	      <td><button type="button" class="btn btn-primary" @click="underwrite(item.id,item.personal.fullName,item.revealId,item.orderStatus)">underwrite</button></td>
	    </tr>    
	   <!--  <tr class="even">
	      <td>120</td>
	      <td>11122234</td>
	      <td>Payday Loan</td>
	      <td>Regular</td>
	      <td>10012345</td>
	      <td>Roger Kimbery Gonzalez III</td>
	      <td>P7,000</td>
	      <td>9/8/2017 AM 10:22</td>
	      <td>9/8/2017 AM 12:22</td>
	      <td>Online</td>
	      <td>Roger Kimbery</td>
	      <td>Roger Kimbery</td>
	      <td><button type="button" class="btn btn-primary" @click="underwrite">underwrite</button></td>
	    </tr>     -->  
	  </tbody>
	</table>
	</div>
	</div>
</template>
<script>
import apiService from '../services/apiService'
import constantService from '../services/constantService'

export default {
  data() {
  	return {
  		searchString: '',
  		enableTeam: false,
  		changeUw1: {},
  		changeUw2: {},
  	}
   
  },
  methods: {
    search: function(){
    	$('#example').DataTable().search(this.searchString).draw();
    },
    confirm: function(){
    	console.log("confirm");
    	var promises = [];
    	var vm = this;
    	for (var key in vm.changeUw1) {
		    console.log(key + "=>" +vm.changeUw1[key]);
	    	promises.push(
		    	apiService.post('/v1/risk/underwriter/assign',{
					orderId: key,
					uwId: vm.changeUw1[key],
					uwRole: '2'
				}).then(function (response) {    
					console.log("success" + response);
				}).catch(function (response) { 
					console.log(response); 
				})
    		);
		}
		for (var key in vm.changeUw2) {
		    console.log(key + "=>" +vm.changeUw2[key]);
	    	promises.push(
		    	apiService.post('/v1/risk/underwriter/assign',{
					orderId: key,
					uwId: vm.changeUw2[key],
					uwRole: '3'
				}).then(function (response) {    
					console.log("success" + response);
				}).catch(function (response) { 
					console.log(response); 
				})
    		);
		}

		Promise.all(promises).then(() => 
			console.log("all success")
		).then(function () {   
			vm.changeUw1 = {};
	  		vm.changeUw2 = {};
	  		// to home page 
	  		console.log("reload");
	  		vm.$router.go(0);
            // vm.$router.push({
            //     path: '/assignment'
            // });
		});


    	
	    	
    },
    assginuw1:function(orderId,event){
    	this.changeUw1[orderId] = event.target.value;
    },
    assginuw2:function(orderId,event){
    	this.changeUw2[orderId] = event.target.value;
    },
    underwrite:function(orderId,orderName,orderRId,orderStatus){
    	
		localStorage.setItem(constantService.localStorage.orderId, orderId);
		localStorage.setItem(constantService.localStorage.orderName, orderName);
		localStorage.setItem(constantService.localStorage.orderRId, orderRId);

		if (orderStatus == "Initial Approval") {
			this.$router.push({ path: '/underwritingFinal' });
		}else{
			this.$router.push({ path: '/underwritingDetails' });
		}
		
    }
  },
  props: {
  	tableType:{
  	  type: String,
  	  default: "1",
  	},
    list: {
      type: Array,
      default: function () { return [] }
    },
    uwlist: {
      type: Array,
      default: function () { return [] }
    }
  }
}
</script>

<style scoped>

</style>