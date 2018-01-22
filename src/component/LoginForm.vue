<template>
	<div class="page-content container">
	    <div class="row">
	      <div class="col-md-6 col-md-offset-3 login-content">
	        <div class="login-wrapper">
	              <div class="box">
	                  <div class="content-wrap">
	                      <div class="content-row">
	                        <h6>Employee ID</h6>
	                        <input v-model="loginUser.employeeId" class="form-control" type="text">
	                    </div>
	                    <div class="content-row">
	                      <h6>Password</h6>
	                      <input v-model="loginUser.password" class="form-control" type="password">
	                    </div>
	                      <div class="error" v-show="showError">Employee ID & Password are not matched to the database. <br>Please try again.</div>
	                      <div class="action">
	                          <a class="btn btn-primary signup" href="#" @click="login">Submit</a>
	                      </div>                
	                  </div>
	              </div>
	          </div>
	      </div>
	    </div>
	</div>
</template>

<script>

import apiService from '../services/apiService'
import constantService from '../services/constantService'

export default {
	data() {
        return {
            loginUser: {},
            showError: false
        }
    },
	props: {
	},
	methods: {
	    login: function() {
	    	var vm = this;
	    	apiService.post('/api/user/backend/login',{
    			userName: vm.loginUser.employeeId,
	        	password: vm.loginUser.password,
		      }).then(function (response) { 
		      	console.log(response.data.code);
		      	if (response.data.code == "00000000") {
		      		vm.showError = false;
		      		localStorage.setItem(constantService.localStorage.employeeID, response.data.data.userId);
		      		localStorage.setItem(constantService.localStorage.name, response.data.data.realName);
		      		localStorage.setItem(constantService.localStorage.userId, response.data.data.userId);
		      		vm.getPreSeting();
		      	}else{
		      		vm.showError = true;
		      	}
		      }).catch(function (response) { 
		        console.log(response); 
		      });
		},
		getPreSeting: function(){
			var vm = this;
			apiService.get('/v1/risk/underwriter/list',{}).then(function(response){
				localStorage.setItem(constantService.localStorage.underwriterList, JSON.stringify(response.data));
				
			}).then(function(){
				var direct = vm.$route.query.redirect;
                if (direct) {
                    // to last unauthrized visiting page 
                    vm.$router.push({
                        path: direct
                    });
                } else {
                    // to home page 
                    vm.$router.push({
                        path: '/home'
                    });
                }
			});

		}
	}

}
</script>