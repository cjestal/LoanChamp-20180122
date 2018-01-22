<template>
	<div id='textareaCompontent' class="marg" v-bind:class="[isRef ? 'col-md-12' : 'col-md-8']">
		<div class="form-group">
			<label class="col-sm-12">{{title}}</label>
			<div class="col-sm-8">
			<textarea class="form-control" placeholder="Comment" rows="3" v-model="comment">{{comment}}</textarea>
			</div>
			<div class="col-sm-4">
				  <label style="width: 100%;" class="control-label" v-if="!isRef">Last edited date/time:{{lastTime}}</label>
				  <label style="width: 100%;" class="control-label" v-if="!isRef">Last edited by:{{lastBy}}</label>
				  <button type="button" class="btn btn-primary" @click="save">{{status}}</button>
			</div>
		</div>
		<div class="form-group col-sm-12">
			<label class="control-label">Decision:</label>
			<label v-if="isRef">
				<input type="radio" :name="optionName" value="1" v-model="picked">
			No check
			</label>
			<input type="radio" :name="optionName" value="2" v-model="picked">
			Pass
			</label>
			<label>
			<input type="radio" :name="optionName" value="3" v-model="picked">
			Warming
			</label>
			<label>
			<input type="radio" :name="optionName" value="4" v-model="picked">
			Reject
			</label>
			<div class="col-sm-12">

		</div>
		</div>
	</div>
</template>
<script>
import apiService from '../services/apiService'
import constantService from '../services/constantService'
export default {
  name:'textareaCompontent',
  data() {
  	return {
  		// picked:"1"
  	}
  },
  
   props: {
   	picked: {
   	  type: Number,
      default: function () { return 1 }
   	},
    dataSource: {
      type: Object,
      default: function () { return {} }
    },
    title:{
    	type:String,
    	default: function () { return "" }
    },
    optionName:{
    	type:String,
    	default: function () { return "" }
    },
	isRef: {
      type: Boolean,
      default: false,
    },
    lastTime: {
    	type:String,
    	default: function () { return "----" }
    },
    lastBy: {
    	type:String,
    	default: function () { return "----" }
    },
    comment: {
    	type:String,
    	default: function () { return "" }
    },
    status: {
    	type:String,
    	default: function () { return "Submit" }
    },
    checkType:{
    	type:Number,
    	default: function () { return 0 }
    }
  },
  methods: {
  	save: function(){
  		var orderId = localStorage.getItem(constantService.localStorage.orderId);
	    var userId = localStorage.getItem(constantService.localStorage.userId);
	      var vm = this;
	      apiService.post('/v1/order/audit/detail',{        
	          auditResult: parseInt(this.picked),
	          checkType: this.checkType,
	          comment: this.comment,
	          orderId: orderId,
	          uwId: userId.toString()
	      }).then(function (response) {
	        if (response.data.code == "00000000") {
	          console.log("Update Success");
            vm.$router.go(vm.$router.currentRoute)
	        }
	      });         
  	},
  }
}
</script>
<style scoped>
.marg{
	margin-top: 20px;
}
</style>