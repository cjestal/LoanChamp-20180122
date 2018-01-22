<template>
<div id="tableTest">
  <div class="fixed-blank"></div>
  <KHeader :showInquiry="true"></KHeader>
  <div class="page-content">
    <div class="row">
      <div class="col-md-2">
        <KSidebar></KSidebar>
      </div>
      <div class="col-md-10">
        <!-- <KTable :list="list"></KTable> -->
        <KmainPage v-if="showData" :dataSource="dataSource" :orderList="orderList"></KmainPage>
      </div>
    </div>
  </div>
  <KFooter></KFooter>
</div>
</template>

<script>
import KHeader from '../component/Header.vue'
import KSidebar from '../component/Sidebar.vue'
import KmainPage from '../component/mainPage.vue'
import KFooter from '../component/Footer.vue'
import apiService from '../services/apiService'
import constantService from '../services/constantService'
import dataAadapter from '../services/dataAadapter'
export default {
  components: {
    KHeader,KSidebar,KFooter,KmainPage
  },
  name: 'tableTest',
  data () {
    return {
      list:[],
      dataSource:[],
      orderList:[],
      showData:false
    }
  },
  created: function () {
   this.getData();
  },
  methods: {
    getData: function(){
      var vm = this;
      var condition = localStorage.getItem(constantService.localStorage.quiry);

      apiService.get('/api/user/info/'+condition+'/overall',{
      }).then(function (response) {         
        console.log(response); 
        if (response.data.code == "00000000") {

          vm.dataSource = dataAadapter.mainPageToItem(response.data.data);
          vm.showData = true;
        }
       
      }).then(function(){
        apiService.get('/v1/order/user/'+vm.dataSource.userId,{  
        }).then(function(response){
          console.log(response); 
          if (response.data.code == "00000000") {

            vm.orderList = dataAadapter.mainPageOrdersToItem(response.data.data.orders);
          }
        })
          
      });
      //   vm.list = tempList;
        
      // }).then(function(){
      //   $('#example').dataTable( {
      //       "aoColumnDefs": [
      //           { 'bSortable': false, 'aTargets': [ 2,3,4,9 ] }
      //        ],
      //        "lengthMenu": [[10, 30, 50], [10, 30, 50]]
      //   });
      // }).catch(function (response) { 
      //   console.log(response); 
      // });
    
    }
  }
}
</script>

<style scoped>
@import 'node_modules/datatables.net-bs/css/dataTables.bootstrap.css';
</style>
