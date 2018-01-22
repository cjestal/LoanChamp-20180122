<template>
<div id="tableTest">
  <div class="fixed-blank"></div>
  <KHeader :showInquiry="false"></KHeader>
  <div class="page-content">
    <div class="row">
      <div class="col-md-2">
        <KSidebar></KSidebar>
      </div>
      <div class="col-md-10">
         <KFinal :secdataSource="secdataSource" :dataSource="dataSource" :secTwodataSource="secTwodataSource" :privacy="social.fbPrivacy" :lastPostedDate="social.lastPostedDate" :friends="social.numOfFriends" :photos="social.numOfPhotos" :secThreedataSource="secThreedataSource" :secFourdataSource_1="secFourdataSource_1" :secFourdataSource_2="secFourdataSource_2" :secFourdataSource_3="secFourdataSource_3" :orderDetal="orderDetal" :decision="decision" :finaldecision="finishDecision.auditResult" :finaldecisionAmount="finishDecision.approvedAmount" :finaldecisionTerm="finishDecision.approvedLoanTerm" :finaldecisionReason="finishDecision.rejectReason"></KFinal>
      </div>
    </div>
  </div>
  <KFooter></KFooter>
</div>
</template>

<script>
import KHeader from '../component/Header.vue'
import KSidebar from '../component/Sidebar.vue'
import KFinal from '../component/underwritingFinalDetail.vue'
import KFooter from '../component/Footer.vue'
import apiService from '../services/apiService'
import constantService from '../services/constantService'
import dataAadapter from '../services/dataAadapter'
export default {
  components: {
    KHeader,KSidebar,KFinal,KFooter
  },
  name: 'tableTest',
  data () {
    return {
      list:[],
      secdataSource:{},
      dataSource:{},
      secTwodataSource:{},
      social:{},
      secThreedataSource:{},
      secFourdataSource_1:{},
      secFourdataSource_2:{},
      secFourdataSource_3:{},
      orderDetal:{},
      decision:{},
      finishDecision:{}
    }
  },
  created: function () {
   this.getData();
  },
  methods: {
    getData: function(){
     
      var orderId = localStorage.getItem(constantService.localStorage.orderId);
      var userId = localStorage.getItem(constantService.localStorage.userId);
      var orderRId = localStorage.getItem(constantService.localStorage.orderRId)
     
      var vm = this;
      apiService.get('/v1/order/audit/detail',{
        params: { 
          orderId: orderId,
          checkType: "ANTI_FRAUD",
        }
      }).then(function (response) {
        if (response.data.code == "00000000") {
          console.log(response.data.data);

          vm.secdataSource = dataAadapter.underwriterToItem(response.data.data);
        }
      });

      apiService.get('/v1/order/audit/detail',{
        params: { 
          orderId: orderId,
          checkType: "IDENTITY_AND_EMPLOY",
        }
      }).then(function (response) {
        if (response.data.code == "00000000") {
          console.log(response.data.data);

          vm.secTwodataSource = dataAadapter.underwriterToItem(response.data.data);
        }
      });

      
      apiService.get('/v1/order/audit/detail',{
        params: { 
          orderId: orderId,
          checkType: "SOCIAL_NETWORK",
        }
      }).then(function (response) {
        if (response.data.code == "00000000") {
          console.log(response.data.data);

          vm.secThreedataSource = dataAadapter.underwriterToItem(response.data.data);
        }
      });

      apiService.get('/v1/order/audit/detail',{
        params: { 
          orderId: orderId,
          checkType: "REFERENCE_SPOUSE",
        }
      }).then(function (response) {
        if (response.data.code == "00000000") {
          console.log(response.data.data);

          vm.secFourdataSource_1 = dataAadapter.underwriterToItem(response.data.data);
        }
      });

      apiService.get('/v1/order/audit/detail',{
        params: { 
          orderId: orderId,
          checkType: "REFERENCE_1",
        }
      }).then(function (response) {
        if (response.data.code == "00000000") {
          console.log(response.data.data);

          vm.secFourdataSource_2 = dataAadapter.underwriterToItem(response.data.data);
        }
      });
      apiService.get('/v1/order/audit/detail',{
        params: { 
          orderId: orderId,
          checkType: "REFERENCE_2",
        }
      }).then(function (response) {
        if (response.data.code == "00000000") {
          console.log(response.data.data);

          vm.secFourdataSource_3 = dataAadapter.underwriterToItem(response.data.data);
        }
      });

      apiService.get('/v1/order/' + orderId,{
      }).then(function (response) {
        if (response.data.code == "00000000") {
          console.log(response.data.data);

          vm.orderDetal = dataAadapter.orderUnderwritingToItem(response.data.data);
        }
      });
      
      apiService.get('/v1/order/audit/manual',{
        params: { 
          orderId: orderId,
          checkType: "ENTRY_DECISION",
        }
      }).then(function (response) {
        if (response.data.code == "00000000") {
          vm.decision = response.data.data;
          console.log(vm.decision);
        }
      });

      apiService.get('/v1/order/audit/manual',{
        params: { 
          orderId: orderId,
          checkType: "EXPERT_DECISION",
        }
      }).then(function (response) {
        if (response.data.code == "00000000") {
          vm.finishDecision = response.data.data;
        }
      });

    }
  }
}
</script>

<style scoped>
@import 'node_modules/datatables.net-bs/css/dataTables.bootstrap.css';
</style>
