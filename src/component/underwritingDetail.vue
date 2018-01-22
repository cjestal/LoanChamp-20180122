<template>
	<div class="row">
		<KPop :popDataSource="popDataSource"></KPop>
		<div class="col-md-12">
			<div class="content-box-large">
				<div class="panel-heading">
					<div class="panel-title">Anti-fraud Check</div>
				</div>
				<div class="panel-body line">
					<KTextares title="Potential fraud reason" optionName="sec1" 
					:comment="secdataSource.comment" 
					:lastTime="secdataSource.decisionTime"
					:lastBy="secdataSource.uwName"
					:picked="secdataSource.auditResult"
					:status="secdataSource.status"
					:checkType="10"></KTextares>
					<div class="col-md-12">
						<div class="col-sm-2 pull-right">
							<label>Section 1/5</label>
					 	</div>
					</div>
					
				</div>
					
					<div class="panel-heading">
						<div class="panel-title">Identity & Employment Check</div>
					</div>
					<div class="panel-body">
						<table class="table table-bordered table-striped">
		              <tbody>
		              	<tr>
		                  <td class="custom" colspan="2">Borrower Full Name</td>
		                  <td colspan="2">{{dataSource.personalInfo.fullName}}</td>
		                  <td colspan="10" rowspan="7" style="text-align: center;"><img class="cph" :src="dataSource.personalInfo.idPhoto" style="max-width: 600px;max-height: 480px;" @click="openPhone"></td>
		                </tr>
		                <tr>
		                  <td class="custom" colspan="2">ID Type</td>
		                  <td colspan="2">
		                  	<button type="button" class="btn-link" @click="changePhone(dataSource.personalInfo.idPhoto)" :src="dataSource.personalInfo.idPhoto">ID Photo 1</button>
		                  	<button type="button" class="btn-link" @click="changePhone(dataSource.personalInfo.idHoldPhoto)" :src="dataSource.personalInfo.idHoldPhoto">ID Photo 2</button>
		              	  </td>
		                </tr>
		                <tr>
		                  <td class="custom" colspan="2">ID Number</td>
		                  <td colspan="2">{{dataSource.personalInfo.idNum}}</td>
		                </tr>
		                 <tr>
		                  <td class="custom" colspan="2">Birth Date</td>
		                  <td colspan="2">{{dataSource.personalInfo.dob}}</td>
		                </tr>
		                 <tr>
		                  <td class="custom" colspan="2">Employment Proof</td>
		                  <td colspan="2">
		                  	
		                  	<button type="button" class="btn-link" v-show="dataSource.employInfo.provePhoto1 != undefined" @click="changePhone(dataSource.employInfo.provePhoto1)" :src="dataSource.employInfo.provePhoto1">Emp Photo 1</button>
		                  	<button type="button" class="btn-link" v-show="dataSource.employInfo.provePhoto2 != undefined" @click="changePhone(dataSource.employInfo.provePhoto2)" :src="dataSource.employInfo.provePhoto2">Emp Photo 2</button>
		                  	<button type="button" class="btn-link" v-show="dataSource.employInfo.provePhoto3 != undefined" @click="changePhone(dataSource.employInfo.provePhoto3)" :src="dataSource.employInfo.provePhoto3">Emp Photo 3</button>
						</td>
		                </tr>
		                 <tr>
		                  <td class="custom" colspan="2">Industry Type</td>
		                  <td colspan="2">{{dataSource.employInfo.industryType}}</td>
		                </tr>
		                 <tr>
		                  <td class="custom" colspan="2">Company Name</td>
		                  <td colspan="2">{{dataSource.employInfo.name}}</td>
		                </tr>
		                <tr>
		                  <td class="custom" colspan="2">Position</td>
		                  <td colspan="2">{{dataSource.employInfo.position}}</td>
		                  <td class="custom" colspan="2">ID Type</td>
		                  <td colspan="8">{{dataSource.personalInfo.idType}}</td>
		                </tr>
		                <tr>
		                  <td class="custom" colspan="2">Company Phone number</td>
		                  <td colspan="2">{{dataSource.employInfo.phone}}</td>
		                  <td class="custom" colspan="2">Expiry Date</td>
		                  <td colspan="2"><input type="date" v-model="personalDate"></td>
		                  <td class="custom" colspan="2">Verification</td>
		                  <td colspan="2">
		                  	<select class="form-control" v-model="personalVerity">
		                  		<option value="Verification">Verification</option>
		                  		<option value="Cannot verified">Cannot verified</option>
		                  	</select>
		                  </td>
		                  <td colspan="2">
		                  	<button type="button" class="btn btn-primary" @click="savePersonal">Save</button>
		                  </td>
		                </tr>
		                <tr>
		                  <td class="custom" colspan="2">Company Address</td>
		                  <td colspan="2"><input type="text" name="address" :value="dataSource.employInfo.officeCity + ' , ' + dataSource.employInfo.officeAddress">
		                  </td>
		                  <td colspan="2">
		                  <button type="button" class="btn btn-primary" @click="">Update</button></td>
		                  
		                </tr>
		                <tr>
		                  <td class="custom" colspan="2">Mobile number 1</td>
		                  <td colspan="2">{{dataSource.contactInfo.homePhone}}</td>
		                </tr>
		                <tr>
		                  <td class="custom" colspan="2">Mobile number 2</td>
		                  <td colspan="2">{{dataSource.contactInfo.anotherPhone}}</td>
		                </tr>
				        </tbody>
				        </table>
					</div>

					<div class="panel-heading">
						<div class="panel-title">Auto Internet Search</div>
					</div>
					<div class="panel-body line">
						<table class="table table-bordered table-striped">
			              <tbody>
			              	<tr>
			                  <td class="custom" colspan="2">Company Name</td>
			                  <td colspan="2">{{dataSource.employInfo.name}}</td>
			                  <td colspan="2">
			                  	<button type="button" class="btn-link" @click="searchGoogle(dataSource.employInfo.name)">Google</button>
			                  	<button type="button" class="btn-link" @click="searchYellowpage(dataSource.employInfo.name)">Yellowpage</button>
			                  	<button type="button" class="btn-link" @click="searchFacebook(dataSource.employInfo.name)">Facebook</button>
			                  </td>
			                </tr>
			                <tr>
			                  <td class="custom" colspan="2">ID Type and Number</td>
			                  <td colspan="2"></td>
			                   <td colspan="2">
			                  	<a>Google</a>
			                  </td>
			                </tr>
			            	</tbody>
			        	</table>
			        	
			        	<KTextares title="" optionName="sec2" 
						:comment="secTwodataSource.comment" 
						:lastTime="secTwodataSource.decisionTime"
						:lastBy="secTwodataSource.uwName"
						:picked="secTwodataSource.auditResult"
						:status="secTwodataSource.status"
						:checkType="15"></KTextares>
						<div class="col-md-12">
							<div class="col-sm-2 pull-right">
								<label>Section 2/5</label>
						 	</div>
						</div>
		    		</div>
		    		
		    		<div class="panel-heading">
						<div class="panel-title">Social networking check</div>
					</div>
					<div class="panel-body line">
						<div style="display: inline-block;width: 100%;">
						<div style="width: 49%;display: inline-block; float: left;">
							<div class="panel-body">
								<table class="table table-bordered">
					              <tbody>
					              	<tr>
					                  <td class="custom">Borrower Full Name</td>
					                  <td>{{dataSource.personalInfo.fullName}}</td>
					                </tr>
					                <tr>
					                  <td class="custom">Birth date</td>
					                  <td>{{dataSource.personalInfo.dob}}</td>
					                </tr>
					                 <tr>
					                  <td class="custom">Age</td>
					                  <td>{{dataSource.personalInfo.age}}</td>
					                </tr>
					                 <tr>
					                  <td class="custom">Gender</td>
					                   <td v-if="dataSource.personalInfo.gender">Male</td>
		                  			   <td v-else="dataSource.personalInfo.gender">Female</td>
					                  
					                </tr>
					              </tbody>
					            </table>
							</div>
						</div>
						<div style="width: 49%;display: inline-block; float: left;">
							<div class="panel-body">
								<table class="table table-bordered">
					              <tbody>
					              	<tr>
					                  <td class="custom">first_name</td>
					                  <td>{{dataSource.personalInfo.firstName}}</td>
					                </tr>
					                <tr>
					                  <td class="custom">last_name</td>
					                  <td>{{dataSource.personalInfo.lastName}}</td>
					                </tr>
					                 <tr>
					                  <td class="custom">age_range</td>
					                  <td></td>
					                </tr>
					                 <tr>
					                  <td class="custom">gender</td>
					                  <td v-if="dataSource.personalInfo.gender">Male</td>
		                  			   <td v-else="dataSource.personalInfo.gender">Female</td>
					                </tr>
					                <tr>
					                  <td class="custom">locale</td>
					                  <td></td>
					                </tr>
					                <tr>
					                  <td class="custom">updated_time</td>
					                  <td></td>
					                </tr>
					                <tr>
					                  <td class="custom">verified</td>
					                  <td></td>
					                </tr>
					                <tr>
					                  <td class="custom">user_friends</td>
					                  <td></td>
					                </tr>
					                <tr>
					                  <td class="custom">email</td>
					                  <td></td>
					                </tr>
					                <tr>
					                  <td class="custom">FB Privacy</td>
					                  <td><input style="width:100%;" type="text" v-model="privacy"></td>
					                </tr>
					               	<tr>
					                  <td class="custom"># of friends</td>
					                  <td><input style="width:100%;" type="number" v-model="friends"></td>
					                </tr>
					                <tr>
					                  <td class="custom">Last posted date</td>
					                  <td><input style="width:100%;" type="text" v-model="lastPostedDate"></td>
					                </tr>
					                <tr>
					                  <td class="custom"># of photos</td>
					                  <td><input style="width:100%;" type="number" v-model="photos"></td>
					                </tr>
					              </tbody>
					            </table>
					            <button type="button" class="btn btn-primary save-but" @click="socialSave">Save</button>
							</div>
						</div>
						<KTextares title="" optionName="sec3" 
						:comment="secThreedataSource.comment" 
						:lastTime="secThreedataSource.decisionTime"
						:lastBy="secThreedataSource.uwName"
						:picked="secThreedataSource.auditResult"
						:status="secThreedataSource.status"
						:checkType="20"></KTextares>
					</div>
					<div class="col-md-12">
							<div class="col-sm-2 pull-right">
								<label>Section 3/5</label>
						 	</div>
						</div>
					</div>
					
					<div class="panel-heading">
						<div class="panel-title">Reference check</div>
					</div>
					<!--  -->
					<div class="panel-body padmin">
						<div style="display: inline-block;width: 100%;">
						<div style="width: 49%;display: inline-block; float: left;">
							<div class="panel-body padmin">
								<table class="table table-bordered">
					              <tbody>
					              	<tr>
					                  <td class="custom">Spouse Name</td>
					                  <td>{{dataSource.contactInfo.spouseFullname}}</td>
					                </tr>
					                <tr>
					                  <td class="custom">Spouse's birth date</td>
					                  <td>{{dataSource.contactInfo.spouseDob}}</td>
					                </tr>
					                 <tr>
					                  <td class="custom">Spouse's phone number 1</td>
					                  <td>{{dataSource.contactInfo.spousePhone}}</td>
					                </tr>
					                 <tr>
					                  <td class="custom">Spouse's phone number 2</td>
					                  <td></td>
					                </tr>
					                <tr>
					                  <td class="custom">Spouse's phone number 3</td>
					                  <td></td>
					                </tr>

					              </tbody>
					            </table>
							</div>
						</div>
						<div style="width: 49%;display: inline-block; float: left;">
							<div class="panel-body">
								<!-- <KTextares optionName="sec4" :isRef="true"></KTextares> -->
								<KTextares title="" optionName="sec4" 
								:isRef="true"
								:comment="secFourdataSource_1.comment" 
								:lastTime="secFourdataSource_1.decisionTime"
								:lastBy="secFourdataSource_1.uwName"
								:picked="secFourdataSource_1.auditResult"
								:status="secFourdataSource_1.status"
								:checkType="25"></KTextares>
							</div>
						</div>
					</div>
				</div>
				<!--  -->
				<div class="panel-body padmin">
					<div style="width: 49%;display: inline-block; float: left;">
						<div class="panel-body padmin">
						<table class="table table-bordered">
			              <thead>
						    <tr>
						      <th></th>
						      <th class="custom">Last</th>
						      <th class="custom">Last 1 week</th>
						      <th class="custom">Last 1 month</th>
						      <th class="custom">History</th>
						    </tr>
						  </thead>
			              <tbody>
			              	<tr>
			                  <td class="custom">Call</td>
			                  <td></td>
			                  <td></td>
			                  <td></td>
			                  <td></td>
			                </tr>
			                <tr>
			                  <td class="custom">Text</td>
			                  <td></td>
			                  <td></td>
			                  <td></td>
			                  <td></td>
			                </tr>
			               </tbody>
			               </table>
			           </div>
		           </div>
				</div>
				<!--  -->
				<div class="panel-body padmin">
						<div style="display: inline-block;width: 100%;">
						<div style="width: 49%;display: inline-block; float: left;">
							<div class="panel-body padmin">
								<table class="table table-bordered">
					              <tbody>
					              	<tr>
					                  <td class="custom">Reference 1 Name</td>
					                  <td>{{dataSource.contactInfo.refers[0].name}}</td>
					                </tr>
					                <tr>
					                  <td class="custom">Relationship</td>
					                  <td>{{dataSource.contactInfo.refers[0].relation}}</td>
					                </tr>
					                 <tr>
					                  <td class="custom">Phone number 1</td>
					                  <td></td>
					                </tr>
					                 <tr>
					                  <td class="custom">Phone number 2</td>
					                  <td></td>
					                </tr>
					                <tr>
					                  <td class="custom">Phone number 3</td>
					                  <td></td>
					                </tr>

					              </tbody>
					            </table>
							</div>
						</div>
						<div style="width: 49%;display: inline-block; float: left;">
							<div class="panel-body">
								<KTextares title="" optionName="sec5" 
								:isRef="true"
								:comment="secFourdataSource_2.comment" 
								:lastTime="secFourdataSource_2.decisionTime"
								:lastBy="secFourdataSource_2.uwName"
								:picked="secFourdataSource_2.auditResult"
								:status="secFourdataSource_2.status"
								:checkType="30"></KTextares>
								<!-- <KTextares optionName="sec4" :isRef="true"></KTextares> -->
							</div>
						</div>
					</div>
				</div>
				<!--  -->
				<div class="panel-body padmin">
					<div style="width: 49%;display: inline-block; float: left;">
						<div class="panel-body padmin">
						<table class="table table-bordered">
			              <thead>
						    <tr>
						      <th></th>
						      <th class="custom">Last</th>
						      <th class="custom">Last 1 week</th>
						      <th class="custom">Last 1 month</th>
						      <th class="custom">History</th>
						    </tr>
						  </thead>
			              <tbody>
			              	<tr>
			                  <td class="custom">Call</td>
			                  <td></td>
			                  <td></td>
			                  <td></td>
			                  <td></td>
			                </tr>
			                <tr>
			                  <td class="custom">Text</td>
			                  <td></td>
			                  <td></td>
			                  <td></td>
			                  <td></td>
			                </tr>
			               </tbody>
			               </table>
			           </div>
		           </div>
				</div>
				<!--  -->
				<div class="panel-body padmin">
						<div style="display: inline-block;width: 100%;">
						<div style="width: 49%;display: inline-block; float: left;">
							<div class="panel-body padmin">
								<table class="table table-bordered">
					              <tbody>
					              	<tr>
					                  <td class="custom">Reference 2 Name</td>
					                  <td>{{dataSource.contactInfo.refers[1].name}}</td>
					                </tr>
					                <tr>
					                  <td class="custom">Relationship</td>
					                  <td>{{dataSource.contactInfo.refers[1].relation}}</td>
					                </tr>
					                 <tr>
					                  <td class="custom">Phone number 1</td>
					                  <td></td>
					                </tr>
					                 <tr>
					                  <td class="custom">Phone number 2</td>
					                  <td></td>
					                </tr>
					                <tr>
					                  <td class="custom">Phone number 3</td>
					                  <td></td>
					                </tr>

					              </tbody>
					            </table>
							</div>
						</div>
						<div style="width: 49%;display: inline-block; float: left;">
							<div class="panel-body">
								<KTextares title="" optionName="sec6" 
								:isRef="true"
								:comment="secFourdataSource_3.comment" 
								:lastTime="secFourdataSource_3.decisionTime"
								:lastBy="secFourdataSource_3.uwName"
								:picked="secFourdataSource_3.auditResult"
								:status="secFourdataSource_3.status"
								:checkType="35"></KTextares>
								<!-- <KTextares optionName="sec4" :isRef="true"></KTextares> -->
							</div>
						</div>
					</div>
				</div>
				<!--  -->
				<div class="panel-body line padmin">
					<div style="width: 49%;display: inline-block; float: left;">
						<div class="panel-body padmin">
						<table class="table table-bordered">
			              <thead>
						    <tr>
						      <th></th>
						      <th class="custom">Last</th>
						      <th class="custom">Last 1 week</th>
						      <th class="custom">Last 1 month</th>
						      <th class="custom">History</th>
						    </tr>
						  </thead>
			              <tbody>
			              	<tr>
			                  <td class="custom">Call</td>
			                  <td></td>
			                  <td></td>
			                  <td></td>
			                  <td></td>
			                </tr>
			                <tr>
			                  <td class="custom">Text</td>
			                  <td></td>
			                  <td></td>
			                  <td></td>
			                  <td></td>
			                </tr>
			               </tbody>
			               </table>
			           </div>
		           </div>
		           <div class="col-md-12">
						<div class="col-sm-2 pull-right">
							<label>Section 4/5</label>
					 	</div>
						</div>
					</div>
				
				<!--  -->
				<div class="panel-heading">
					<div class="panel-title">Credit decision</div>
				</div>
				<div class="panel-body">
				<table class="table table-bordered">
		              <tbody>
		              	<tr>
		                  <td colspan="4" class="custom">Account History</td>
		                  <td colspan="1" class="custom">Credit rating</td>
		                  <td colspan="1">None</td>
		                </tr>
		                <tr>
		                  <td colspan="1" class="custom">Member since</td>
		                  <td colspan="1">None</td>
		                  <td colspan="1" class="custom">No. of Log-in in last 1 week</td>
		                  <td colspan="1">None</td>
		                  <td colspan="2"></td>
		                </tr>
		                 <tr>
		                  <td colspan="1" class="custom">Initial credit limit</td>
		                  <td colspan="1">None</td>
		                  <td colspan="1" class="custom">Current credit limit</td>
		                  <td colspan="1">None</td>
		                  <td colspan="2"></td>
		                </tr>
		                <tr>
		                  <td colspan="1" class="custom">No. of applications</td>
		                  <td colspan="1">None</td>
		                  <td colspan="1" class="custom">No. of Approvals</td>
		                  <td colspan="1">None</td>
		                  <td colspan="1" class="custom">No. of Rejection</td>
		                  <td colspan="1">None</td>
		                </tr>
		                <tr>
		                  <td colspan="1" class="custom">No. of loans</td>
		                  <td colspan="1">None</td>
		                  <td colspan="1" class="custom">Max DPD</td>
		                  <td colspan="1">None</td>
		                  <td colspan="1" class="custom">Last reject reason</td>
		                  <td colspan="1">None</td>
		                </tr>
		              </tbody>
		            </table>
		            <div style="display: inline-block;width: 100%;">
						<div style="width: 49%;display: inline-block; float: left;">
							<table class="table table-bordered">
				              <tbody>
				              	<tr>
				                  <td class="custom">Product</td>
				                  <td>{{orderDetal.productCode}}</td>
				                </tr>
				                <tr>
				                  <td class="custom">Program</td>
				                  <td>{{orderDetal.programCode}}</td>
				                </tr>
				                <tr>
				                  <td class="custom">Channel</td>
				                  <td>{{orderDetal.salesChannel}}</td>
				                </tr>
				                <tr>
				                  <td class="custom">Sales</td>
				                  <td>{{orderDetal.sales}}</td>
				                </tr>
				                <tr>
				                  <td class="custom">Request loan amount</td>
				                  <td>{{orderDetal.amount  | formatNumber}}{{orderDetal.currency}}</td>
				                </tr>
				                <tr>
				                  <td class="custom">Request loan term</td>
				                  <td>{{orderDetal.duration}}{{orderDetal.durationUnit}}</td>
				                </tr>
				                
				              </tbody>
				            </table>
						</div>
						<div style="margin-left:2% ;width: 49%;display: inline-block; float: left;">
								<table class="table table-bordered">
					              <tbody>
					              	
					                <tr>
					                  <td class="custom">Credit decision</td>
					                  <td>
					                  	<select class="form-control" v-model="decision">
					                  		<option value=""></option>
					                  		<option value="2">Approved</option>
					                  		<option value="4">Rejected</option>
					                  	</select>
					                  </td>
					                </tr>
					               	<tr>
					                  <td class="custom">Reject reason</td>
					                  <td><input style="width:100%;" type="text" v-model="decisionReason" :disabled="decision == 2"></td>
					                </tr>
					                <tr>
					                  <td class="custom">Approved loan amount</td>
					                  <td><input style="width:100%;" type="number" v-model="decisionAmount"></td>
					                </tr>
					                <tr>
					                  <td class="custom">Approved loan term</td>
					                  <td><input style="width:100%;" type="number" v-model="decisionTerm"></td>
					                </tr>
					              </tbody>
					            </table>
					            <button type="button" class="btn btn-primary save-but" data-toggle="modal" data-target="#gridSystemModal" @click="showSubmit">Submit Decision</button>

							</div>
							
					</div>
		        </div>
		        <div class="col-md-12">
					<div class="col-sm-2 pull-right">
						<label>Section 5/5</label>
				 	</div>
				</div>
				<!--  -->
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
  		popDataSource:{},
  		currentPhone:""
  	}
  },
  methods: {
  	openPhone: function(){
  		var url = $(".cph").attr('src');
  		var w=window.open(url,'Image','resizable=1,height=800,width=600');
  		w.document.write('<img width="600" src="'+url+'"">');
  	},
  	changePhone:function(url){
  		$(".cph").attr('src',url);
  	},
  	searchGoogle: function(url){
  		window.open("http://www.google.com/search?q=" + url);
  	},
  	searchYellowpage: function(url){
  		window.open("https://www.yellowpages.com.au/search/listings?clue=" + url);
  	},
  	searchFacebook: function(url){
  		window.open("https://www.facebook.com/search/top/?q=" + url);
  	},
  	showSubmit: function(){
  		var orderId = localStorage.getItem(constantService.localStorage.orderId);
	    var userId = localStorage.getItem(constantService.localStorage.userId);
  		this.popDataSource = {
  			"checkType":40,
  			"approvedAmount":this.decisionAmount,
  			"approvedLoanTerm":this.decisionTerm,
  			"auditResult":this.decision,
  			"orderId":orderId,
  			"rejectReason":this.decisionReason,
  			"uwId":userId,
  		};
  		$('#popCompontent').modal();
  	},
  	socialSave: function(){
  		var orderId = localStorage.getItem(constantService.localStorage.orderId);
	    var userId = localStorage.getItem(constantService.localStorage.userId);
	      var vm = this;
	      apiService.post('/v1/order/audit/detail/social',{        
	          fbPrivacy: this.privacy,
	          lastPostedDate: this.lastPostedDate,
	          numOfFriends: this.friends,
	          numOfPhotos: this.photos,
	          orderId: orderId,
	          uwId: userId.toString()
	      }).then(function (response) {
	        if (response.data.code == "00000000") {
	          console.log("Update Success");

	        }
	      });         
  	},
  	savePersonal: function(){
  		var orderId = localStorage.getItem(constantService.localStorage.orderId);
	    var userId = localStorage.getItem(constantService.localStorage.userId);
	      var vm = this;
	      apiService.post('/v1/order/audit/detail/personal',{        
	          expireDate: this.personalDate,
	          idType: this.personalIdtype,
	          verification: this.personalVerity,
	          orderId: orderId,
	          uwId: userId.toString()
	      }).then(function (response) {
	        if (response.data.code == "00000000") {
	          console.log("Update Success");

	        }
	      });         
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
    // 
    personalDate:{
    	type: String,
    	default: ""
    },
    personalVerity:{
    	type: String,
    	default: ""
    },
    personalIdtype:{
    	type: Number,
    },
    // 
    decision: {
   	  type: Number,
   	},
   	decisionAmount: {
   	  type: Number,
   	},
   	decisionTerm: {
   	  type: Number,
   	},
    decisionReason:{
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