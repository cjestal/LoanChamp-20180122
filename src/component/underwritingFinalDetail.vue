<template>
	<div class="row">
		<KPop :popDataSource="popDataSource"></KPop>
		<div class="col-md-12">
			<div class="content-box-large">
				<div class="panel-heading">
					<div class="panel-title">Application Information</div>
				</div>
				<div class="panel-body">
					<table class="table table-bordered table-striped">
		              <tbody>
		              	<tr class="custom">
		                  <td colspan="2" class="custom">Product Name</td>
		                  <td colspan="2" class="custom">Program Name</td>
		                  <td colspan="2" class="custom">Sales Channel</td>
		                  <td colspan="2" class="custom">Sales</td>
		                  <td colspan="2" class="custom">Title</td>
		                  <td colspan="2" class="custom">Description</td>
		                </tr>
		                <tr>
		                  <td colspan="2">{{orderDetal.productCode}}</td>
		                  <td colspan="2">{{orderDetal.programCode}}</td>
		                  <td colspan="2">{{orderDetal.salesChannel}}</td>
		                  <td colspan="2">{{orderDetal.sales}}</td>
		                  <td colspan="2">{{orderDetal.title}}</td>
		                  <td colspan="2">{{orderDetal.description}}</td>
		                </tr>
		                <tr class="custom">
		                  <td colspan="2" class="custom">Request Loan Amount</td>
		                  <td colspan="2" class="custom">Request Duration</td>
		                  <td colspan="2" class="custom">Request Cycle</td>
		                  <td colspan="2" class="custom">Application Date/Time</td>
		                  <td colspan="2" class="custom">Status</td>
		                  <td colspan="2" class="custom">Credit Decision</td>
		                </tr>
		                <tr>
		                  <td colspan="2">{{orderDetal.amount | formatNumber}}</td>
		                  <td colspan="2">{{orderDetal.duration}}{{orderDetal.durationUnit}}</td>
		                  <td colspan="2">{{orderDetal.cycle}}{{orderDetal.cycleUnit}}</td>
		                  <td colspan="2">{{orderDetal.applicationTime}}</td>
		                  <td colspan="2">{{orderDetal.orderStatus}}</td>
		                  <td colspan="2">None</td>
		                </tr>
		                <tr class="custom">
		                  <td colspan="2" class="custom">Credit Score</td>
		                  <td colspan="2" class="custom">Credit Rating</td>
		                  <td colspan="2" class="custom">Fraud Alert</td>
		                  <td colspan="2" class="custom">Order Risk Rating</td>
		                  <td colspan="4" class="custom">High risk reason</td>
		                </tr>
		                <tr>
		                  <td colspan="2">None</td>
		                  <td colspan="2">None</td>
		                  <td colspan="2">None</td>
		                  <td colspan="2">None</td>
		                  <td colspan="4">None</td>
		                </tr>
		              </tbody>
		            </table>
				</div>
				<div class="panel-heading">
					<div class="panel-title">Underwriting</div>
				</div>
				<div class="panel-body">
					<KTextares title="Anti-fraud check" optionName="sec1" 
					:comment="secdataSource.comment" 
					:lastTime="secdataSource.decisionTime"
					:lastBy="secdataSource.uwName"
					:picked="secdataSource.auditResult"
					:status="secdataSource.status"
					:checkType="10"></KTextares>
		        	<KTextares title="Identity & Employment check" optionName="sec2" 
					:comment="secTwodataSource.comment" 
					:lastTime="secTwodataSource.decisionTime"
					:lastBy="secTwodataSource.uwName"
					:picked="secTwodataSource.auditResult"
					:status="secTwodataSource.status"
					:checkType="15"></KTextares>
					<KTextares title="Social networking check" optionName="sec3" 
					:comment="secThreedataSource.comment" 
					:lastTime="secThreedataSource.decisionTime"
					:lastBy="secThreedataSource.uwName"
					:picked="secThreedataSource.auditResult"
					:status="secThreedataSource.status"
					:checkType="20"></KTextares>
					<KTextares title="Reference check" optionName="sec4" 
					:comment="secFourdataSource_1.comment" 
					:lastTime="secFourdataSource_1.decisionTime"
					:lastBy="secFourdataSource_1.uwName"
					:picked="secFourdataSource_1.auditResult"
					:status="secFourdataSource_1.status"
					:checkType="25"></KTextares>
					<KTextares title="" optionName="sec5" 
					:comment="secFourdataSource_2.comment" 
					:lastTime="secFourdataSource_2.decisionTime"
					:lastBy="secFourdataSource_2.uwName"
					:picked="secFourdataSource_2.auditResult"
					:status="secFourdataSource_2.status"
					:checkType="30"></KTextares>
					<KTextares title="" optionName="sec6" 
					:comment="secFourdataSource_3.comment" 
					:lastTime="secFourdataSource_3.decisionTime"
					:lastBy="secFourdataSource_3.uwName"
					:picked="secFourdataSource_3.auditResult"
					:status="secFourdataSource_3.status"
					:checkType="35"></KTextares>
				</div>
			
				<!--  -->
				<!-- <div class="panel-heading">
					<div class="panel-title">Credit decision</div>
				</div> -->
				<div class="panel-body">
		            <div style="display: inline-block;width: 100%;">
						<div style="width: 49%;display: inline-block; float: left;">
							<table class="table table-bordered">
				              <tbody>
				              	<tr>
				                  <td class="custom">Request loan amount</td>
				                  <td>{{orderDetal.amount | formatNumber}}</td>
				                </tr>
				                <tr>
				                  <td class="custom">Request loan term</td>
				                  <td>{{orderDetal.duration}}{{orderDetal.durationUnit}}</td>
				                </tr>
				                <tr>
				                  <td class="custom">Credit decision</td>
				                  <td v-if="decision.auditResult == 2">Approved</td>
				                  <td v-else>Rejected</td>
				                </tr>
				                <tr>
				                  <td class="custom">Reject reason</td>
				                  <td>{{decision.rejectReason}}</td>
				                </tr>
				                <tr>
				                  <td class="custom">Approved loan amount</td>
				                  <td>{{decision.approvedAmount | formatNumber}}</td>
				                </tr>
				                <tr>
				                  <td class="custom">Approved loan term</td>
				                  <td>{{decision.approvedLoanTerm}}</td>
				                </tr>
				                
				              </tbody>
				            </table>
						</div>
						<div style="margin-left:2% ;width: 49%;display: inline-block; float: left;">
								<div class="panel-heading">
									<div class="panel-title">Final Decision</div>
								</div> 
								<table class="table table-bordered">
					              <tbody>
					              	<tr>
					                  <td class="custom">Credit decision</td>
					                  <td>
					                  	<select class="form-control" v-model="finaldecision">
					                  		<option value=""></option>
					                  		<option value="2">Approved</option>
					                  		<option value="4">Rejected</option>
					                  	</select>
					                  </td>
					                </tr>
					               	<tr>
					                  <td class="custom">Reject reason</td>
					                  <td><input style="width:100%;" type="text" v-model="finaldecisionReason" :disabled="finaldecision == 2"></td>
					                </tr>
					                <tr>
					                  <td class="custom">Approved loan amount</td>
					                  <td><input style="width:100%;" type="number" v-model="finaldecisionAmount"></td>
					                </tr>
					                <tr>
					                  <td class="custom">Approved loan term</td>
					                  <td><input style="width:100%;" type="number" v-model="finaldecisionTerm"></td>
					                </tr>

					              </tbody>
					            </table>
					            <button type="button" class="btn btn-primary save-but" data-toggle="modal" data-target="#gridSystemModal" @click="showSubmit">Submit Decision</button>

							</div>
							
					</div>
		        </div>
				</div>
			</div>
		</div>

	</div>

</template>

<script>
import KTextares from '../component/textarea.vue'
import KPop from '../component/pop.vue'
import apiService from '../services/apiService'
import constantService from '../services/constantService'
export default {
  components: {
    KTextares,KPop
  },
  data() {
  	return {
  		popDataSource:{}
  	}
  },
  methods: {
  	
  	showSubmit: function(){
  		var orderId = localStorage.getItem(constantService.localStorage.orderId);
	    var userId = localStorage.getItem(constantService.localStorage.userId);
  		this.popDataSource = {
  			"checkType":45,
  			"approvedAmount":this.finaldecisionAmount,
  			"approvedLoanTerm":this.finaldecisionTerm,
  			"auditResult":this.finaldecision,
  			"orderId":orderId,
  			"rejectReason":this.finaldecisionReason,
  			"uwId":userId,
  		};
  		$('#popCompontent').modal();
  	},
  	
  },
  props: {
  	// tableType:{
  	//   type: String,
  	//   default: "1",
  	// },
  	secdataSource: {
      type: Object,
      default: function () { return {} }
    },
    dataSource: {
      type: Object,
      default: function () { return {} }
    },
    secTwodataSource: {
      type: Object,
      default: function () { return {} }
    },
    secThreedataSource: {
      type: Object,
      default: function () { return {} }
    },
    secFourdataSource_1: {
      type: Object,
      default: function () { return {} }
    },
    secFourdataSource_2: {
      type: Object,
      default: function () { return {} }
    },
    secFourdataSource_3: {
      type: Object,
      default: function () { return {} }
    },
    privacy:{
    	type: String,
    	default: ""
    },
    lastPostedDate:{
    	type: String,
    	default: ""
    },
    friends: {
   	  type: Number,
      // default: function () { return  }
   	},
   	photos: {
   	  type: Number,
      // default: function () { return 1 }
   	},
   	orderDetal: {
      type: Object,
      default: function () { return {} }
    },
    decision: {
      type: Object,
      default: function () { return {} }
    },
    finaldecision: {
   	  type: Number,
   	},
   	finaldecisionAmount: {
   	  type: Number,
   	},
   	finaldecisionTerm: {
   	  type: Number,
   	},
    finaldecisionReason:{
    	type: String,
    	default: ""
    },
   
  }
}
</script>
<style scoped>
.save-but{
	width: 40%;
    margin-left: 30%;
}
.panel-body.line{
    border-bottom-width: 1px;
    border-bottom-color: black;
    border-bottom-style: dashed;
}
.panel-body.padmin{
	padding-top: 5px;
	padding-bottom: 5px;
}
.panel-title{
	font-weight: bold;
	color: blue;
	font-size: 17px;
}
.custom {
    text-align: center;
    font-weight: bold;
}
</style>