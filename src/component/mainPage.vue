<template>
	<div class="row">
		<div class="col-md-12">
			<div class="content-box-large">
				<div class="panel-heading">
					<div class="panel-title">Customer Basic Information</div>
				</div>
				<div class="panel-body">
					<table class="table table-bordered table-striped">
		              <tbody>
		              	<tr class="custom">
		                  <td colspan="2">User ID</td>
		                  <td colspan="2">First Name</td>
		                  <td colspan="2">Middle Name</td>
		                  <td colspan="2">Last Name</td>
		                  <td colspan="2">ID Type</td>
		                  <td colspan="2">ID Number</td>
		                </tr>
		                <tr>
		                  <td colspan="2">{{dataSource.personalInfo.revealId}}</td>
		                  <td colspan="2">{{dataSource.personalInfo.firstName}}</td>
		                  <td colspan="2">{{dataSource.personalInfo.middleName}}</td>
		                  <td colspan="2">{{dataSource.personalInfo.lastName}}</td>
		                  <td colspan="2">{{dataSource.personalInfo.idType}}</td>
		                  <td colspan="2" class="success">{{dataSource.personalInfo.idNum}}
		                  	<button type="button" class="btn-link" @click="openPhone(dataSource.personalInfo.idPhoto)" :src="dataSource.personalInfo.idPhoto">idPhoto</button>
		                  	<button type="button" class="btn-link" @click="openPhone(dataSource.personalInfo.idHoldPhoto)" :src="dataSource.personalInfo.idHoldPhoto">idHoldPhoto</button>
		                  </td>
		                </tr>
		                <tr class="custom">
		                  <td colspan="1">Gender</td>
		                  <td colspan="1">Age</td>
		                  <td colspan="1">Marital Status</td>
		                  <td colspan="2">Birth Date</td>
		                  <td colspan="2">Registration Date/Time</td>
		                  <td colspan="2">Registration Source</td>
		                  <td colspan="2">Registered Email Address</td>
		                  <td colspan="1">Photo</td>
		                </tr>
		                <tr>

		                  <td colspan="1" v-if="dataSource.personalInfo.gender">Male</td>
		                  <td colspan="1" v-else="dataSource.personalInfo.gender">Female</td>
		                  <td colspan="1">{{dataSource.personalInfo.age}}</td>
		                  <td colspan="1" v-if="dataSource.personalInfo.maritalStatus">Yes</td>
		                  <td colspan="1" v-else="dataSource.personalInfo.maritalStatus">No</td>
		                  <td colspan="2">{{dataSource.personalInfo.dob}}</td>
		                  <td colspan="2"></td>
		                  <td colspan="2"></td>
		                  <td colspan="2" class="success"></td>
		                  <td colspan="1"><button type="button" class="btn-link" @click="openPhone(dataSource.personalInfo.avatar)" :src="dataSource.personalInfo.avatar">open</button></td>
		                </tr>
		              </tbody>
		            </table>
				</div>

				<div class="panel-heading">
					<div class="panel-title">Contact Information</div>
				</div>
				<div class="panel-body">
					<table class="table table-bordered table-striped">
		              <tbody>
		              	<tr class="custom">
		                  <td colspan="2">1st Mobile Phone Number</td>
		                  <td colspan="2">2nd Mobile Phone Number</td>
		                  <td colspan="6">Current Address</td>
		                  <td colspan="2">Current City</td>
		                </tr>
		                <tr>
		                  <td colspan="2">{{dataSource.contactInfo.anotherPhone}}</td>
		                  <td colspan="2">None</td>
		                  <td colspan="6">None</td>
		                  <td colspan="2">None</td>
		                </tr>
		                <tr class="custom">
		                  <td colspan="6">Permanent Address</td>
		                  <td colspan="2">Permanent City</td>
		                  <td colspan="2">Permanent Province</td>
		                  <td colspan="2">Home Phone</td>
		                </tr>
		                <tr>
		                  <td colspan="6">{{dataSource.contactInfo.permanentHomeAddress}}</td>
		                  <td colspan="2">{{dataSource.contactInfo.permanentHomeCity}}</td>
		                  <td colspan="2"></td>
		                  <td colspan="2">{{dataSource.contactInfo.homePhone}}</td>
		                </tr>
		                <tr class="custom">
		                  <td colspan="2">Spouse's Name</td>
		                  <td colspan="2">Spouse's Birth Date</td>
		                  <td colspan="2">Spouse Mobile Phone Number</td>
		                  <td colspan="2">Last Contact Date/time</td>
		                  <td colspan="4">No. of Calls in last 1 week / 1 months / all</td>
		                </tr>
		                <tr>
		                  <td colspan="2">{{dataSource.contactInfo.spouseFullname}}</td>
		                  <td colspan="2">{{dataSource.contactInfo.spouseDob}}</td>
		                  <td colspan="2">{{dataSource.contactInfo.spousePhone}}</td>
		                  <td colspan="2">None</td>
		                  <td colspan="4">None</td>
		                </tr>
		                <tr class="custom">
		                  <td colspan="2">1st Reference Name</td>
		                  <td colspan="2">Mobile Phone Number</td>
		                  <td colspan="1">Relation</td>
		                  <td colspan="2">Added/Edited Date/time</td>
		                  <td colspan="2">Last Contact Date/time</td>
		                  <td colspan="3">No. of Calls in last 1 week / 1 months / all</td>
		                </tr>
		               	<tr>
		                  <td colspan="2">{{dataSource.contactInfo.refers[0].name}}</td>
		                  <td colspan="2"></td>
		                  <td colspan="1">{{dataSource.contactInfo.refers[0].relation}}</td>
		                  <td colspan="2"></td>
		                  <td colspan="2"></td>
		                  <td colspan="3"></td>
		                </tr>
		                <tr class="custom">
		                  <td colspan="2">2st Reference Name</td>
		                  <td colspan="2">Mobile Phone Number</td>
		                  <td colspan="1">Relation</td>
		                  <td colspan="2">Added/Edited Date/time</td>
		                  <td colspan="2">Last Contact Date/time</td>
		                  <td colspan="3">No. of Calls in last 1 week / 1 months / all</td>
		                </tr>
		               	<tr>
		                  <td colspan="2">{{dataSource.contactInfo.refers[1].name}}</td>
		                  <td colspan="2"></td>
		                  <td colspan="1">{{dataSource.contactInfo.refers[1].relation}}</td>
		                  <td colspan="2"></td>
		                  <td colspan="2"></td>
		                  <td colspan="3"></td>
		                </tr>
		              </tbody>
		            </table>
				</div>
			

					<div class="panel-heading">
						<div class="panel-title">Employment Information</div>
					</div>
					<div class="panel-body">
						<table class="table table-bordered table-striped">
			              <tbody>
			              	<tr class="custom">
			                  <td colspan="2">Employment Type</td>
			                  <td colspan="2">Company Name</td>
			                  <td colspan="2">Position/Title</td>
			                  <td colspan="2">Industry Type</td>
			                  <td colspan="2">Added/Edited Date/Time</td>
			                </tr>
			                <tr>
			                  <td colspan="2"></td>
			                  <td colspan="2">{{dataSource.employInfo.name}}</td>
			                  <td colspan="2">{{dataSource.employInfo.position}}</td>
			                  <td colspan="2">{{dataSource.employInfo.industryType}}</td>
			                  <td colspan="2"></td>
			                </tr>
			                <tr class="custom">
			                  <td colspan="2">Company Phone Number</td>
			                  <td colspan="4">Company Address</td>
			                  <td colspan="1">Pay Day 1</td>
			                  <td colspan="1">Pay Day 2</td>
			                  <td colspan="2">No. of Calls in last 1 week / 1 months / all</td>
			                </tr>
			                <tr>
			                  <td colspan="2">{{dataSource.employInfo.phone}}</td>
			                  <td colspan="4">{{dataSource.employInfo.officeAddress}} ,{{dataSource.employInfo.officeCity}}</td>
			                  <td colspan="1">{{dataSource.employInfo.firstPayDay}}</td>
			                  <td colspan="1">{{dataSource.employInfo.secondPayDay}}</td>
			                  <td colspan="2"></td>
			                </tr>
			                
			              </tbody>
			            </table>
					</div>

					<div class="panel-heading">
						<div class="panel-title">Account Status</div>
					</div>
					<div class="panel-body">
						<table class="table table-bordered table-striped">
			              <tbody>
			              	<tr class="custom">
			                  <td colspan="2">Account ID</td>
			                  <td colspan="1">Loan Product</td>
			                  <td colspan="2">Loan Program</td>
			                  <td colspan="1">Amount</td>
			                  <td colspan="1">Term</td>
			                  <td colspan="1">Interest Rate</td>
			                  <td colspan="2">Application Date/Time</td>
			                  <td colspan="1">Status</td>
			                  <td colspan="1">Action</td>
			                  <td colspan="1">Delinquent</td>
			                </tr>
			                <tr v-for="item in orderList">
			                  <td colspan="2">{{item.revealId}}</td>
			                  <td colspan="1">{{item.productCode}}</td>
			                  <td colspan="2">{{item.programCode}}</td>
			                  <td colspan="1" style="text-align: right;">{{item.amount | formatNumber}}</td>
			                  <td colspan="1">{{item.duration}}{{item.durationUnit}}</td>
			                  <td colspan="1"></td>
			                  <td colspan="2">{{item.applicationTime}}</td>
			                  <td colspan="1">{{item.orderStatus}}</td>
			                  <td colspan="1"></td>
			                  <td colspan="1"></td>
			                </tr>
			              </tbody>
			            </table>
					</div>
					<div class="panel-heading">
						<div class="panel-title">Bank Account Info</div>
					</div>
					<div class="panel-body">
						<table class="table table-bordered table-striped">
			              <tbody>
			              	<tr class="custom">
			                  <td colspan="2">Bank Name</td>
			                  <td colspan="4">Account Name</td>
			                  <td colspan="6">Account Number</td>
			                </tr>
			                <tr>
			                  <td colspan="2">None</td>
			                  <td colspan="4"></td>
			                  <td colspan="6"></td>
			                </tr>
			              </tbody>
			            </table>
					</div>

					<div style="display: inline-block;width: 100%;">
						<div style="width: 49%;display: inline-block; float: left;">
							<div class="panel-heading">
								<div class="panel-title">User Verification Status</div>
							</div>
							<div class="panel-body">
								<table class="table table-bordered table-striped">
					              <tbody>
					              	<tr class="custom">
					                  <td colspan="2">Type</td>
					                  <td colspan="1">Filing</td>
					                  <td colspan="1">Photo</td>
					                  <td colspan="1">Status</td>
					                  <td colspan="1">PIC</td>
					                </tr>
					                <tr>
					                  <td colspan="2">None</td>
					                  <td colspan="1"></td>
					                  <td colspan="1"></td>
					                  <td colspan="1"></td>
					                  <td colspan="1"></td>
					                </tr>
					              </tbody>
					            </table>
							</div>
						</div>
						<div style="width: 49%;display: inline-block; float: left;">
							<div class="panel-heading">
								<div class="panel-title">Third-party Related Account</div>
							</div>
							<div class="panel-body">
								<table class="table table-bordered table-striped">
					              <tbody>
					              	<tr class="custom">
					                  <td colspan="2">Source</td>
					                  <td colspan="2">Account Name</td>
					                  <td colspan="2">Verified</td>
					                </tr>
					                <tr>
					                  <td colspan="2">Facebook</td>
					                  <td colspan="2"></td>
					                  <td colspan="2"></td>
					                </tr>
					                <tr>
					                  <td colspan="2">LinkedIn</td>
					                  <td colspan="2"></td>
					                  <td colspan="2"></td>
					                </tr>
					                <tr>
					                  <td colspan="2">Google+</td>
					                  <td colspan="2"></td>
					                  <td colspan="2"></td>
					                </tr>
					                <tr>
					                  <td colspan="2">Instagram</td>
					                  <td colspan="2"></td>
					                  <td colspan="2"></td>
					                </tr>
					                <tr>
					                  <td colspan="2">Twitter</td>
					                  <td colspan="2"></td>
					                  <td colspan="2"></td>
					                </tr>
					              </tbody>
					            </table>
							</div>
						</div>
						
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
  	openPhone: function(url){
  		var w=window.open(url,'Image','resizable=1,height=800,width=600');

  		w.document.write('<div style="overflow:auto;height:800px;"><img height="800" src="'+url+'""></div>');
  	}
  },
  props: {
  	// tableType:{
  	//   type: String,
  	//   default: "1",
  	// },
    dataSource: {
      type: Object,
      default: function () { return {} }
    },
    orderList: {
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
.custom{
	text-align: center;
	font-weight: bold;
}
.panel-title{
	font-weight: bold;
	color: blue;
	font-size: 17px;
}
</style>