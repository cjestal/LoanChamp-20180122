<template>
  <div class="header navbar-fixed-top" v-if="showPageHeader">
       <div class="container" style="width: 100%;">
          <div class="row">
            <div class="logo col-md-2">
                 <div class="nav-top-title"><a href="index.html">Loan Champ Back-end <br>Managerment System</a></div>
              </div>
              <div class="logo col-md-2 hidden-sm hidden-xs">
                 <div class="nav-top-name">User:{{loginUser.employeeID}} <br>{{loginUser.name}}</div>
              </div>
              
              <div class="col-md-4 hidden-sm hidden-xs" v-if="showOrder">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="nav-top-name">Order:{{order.orderRID}} <br>{{order.name}}</div>
                  </div>
                </div>

             </div>
             <div class="col-md-4 hidden-sm hidden-xs" v-if="showInquiry">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="input-group form">
                      <span class="input-group-addon">Inquiry</span>
                         <input type="text" class="form-control" placeholder="UserID/Phone Number/orderID" v-model="quiry">
                         <span class="input-group-btn">
                           <button class="btn btn-primary" type="button" @click="inquiry">Submit</button>
                         </span>
                    </div>
                  </div>
                </div>
             </div>
             
             <!-- <div class="col-md-4"> -->
                <div class="logo-img col-md-3 hidden-sm hidden-xs" v-bind:class="{ 'col-md-offset-5' : (!showInquiry | !showOrder),'col-md-offset-1':(showInquiry|showOrder)}" >
                  <img src="/images/logo.png">
                  <button style="float: right;margin-top: 20px;" type="button" class="btn btn-primary" @click="logout">Logout</button>
                </div>
             <!-- </div> -->
          </div>
       </div>
  </div>

  <div class="header" v-else>
       <div class="container">
          <div class="row">
             <div class="col-md-12">
                <!-- Logo -->
                <div class="logo col-md-8">
                   <h1><a href="index.html">Loan Champ Back-end Managerment System</a></h1>
                </div>
                <div class="logo-img col-md-4">
                  <img src="/images/logo.png" @click="logout">
                </div>
             </div>
          </div>
       </div>
  </div>

</template>
<script>
import constantService from '../services/constantService'

export default {
  data() {
        return {
            loginUser: {
              employeeID:localStorage.getItem(constantService.localStorage.employeeID),
              name:localStorage.getItem(constantService.localStorage.name)
            },
            order:{
              orderRID:localStorage.getItem(constantService.localStorage.orderRId),
              name:localStorage.getItem(constantService.localStorage.orderName)
            },
            quiry:localStorage.getItem(constantService.localStorage.quiry)
        }
    },
  props: {
    showInquiry: {
      type: Boolean,
      default: false,
    },
    showPageHeader: {
      type: Boolean,
      default: true,
    },
    showOrder: {
      type: Boolean,
      default: false,
    }
  },
  methods:{
    logout :function(event) {
      localStorage.clear();
      this.$router.push({
          path: '/'
      });
    },
    inquiry :function(){
      if ((location.pathname == '/mainPage' || location.pathname == '/mainPage/')&&(this.quiry != localStorage.getItem(constantService.localStorage.quiry))) {
        localStorage.setItem(constantService.localStorage.quiry, this.quiry);
        location.reload();
      }
      
      localStorage.setItem(constantService.localStorage.quiry, this.quiry);
      this.$router.push({ path: '/mainPage' }) 
    }
  }
}
</script>
