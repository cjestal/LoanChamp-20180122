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
        <KinfoUpdatePage :list="list"></KinfoUpdatePage>
      </div>
    </div>
  </div>
  <KFooter></KFooter>
</div>
</template>

<script>
import KHeader from '../component/Header.vue'
import KSidebar from '../component/Sidebar.vue'
import KinfoUpdatePage from '../component/infoUpdatePage.vue'
import KFooter from '../component/Footer.vue'
import apiService from '../services/apiService'
import constantService from '../services/constantService'
import dataAadapter from '../services/dataAadapter'
export default {
  components: {
    KHeader,KSidebar,KFooter,KinfoUpdatePage
  },
  name: 'tableTest',
  data () {
    return {
      list:[]
    }
  },
  created: function () {
   this.getData();
  },
  methods: {
    getData: function(){
      var vm = this;
      var condition = localStorage.getItem(constantService.localStorage.quiry);
      apiService.get('/api/user/log/'+condition+'/update/info',{
      }).then(function (response) { 
      console.log(response); 
        var result = []; 
        if (response.data.code == "00000000") {    
          for (var i = 0; i < response.data.data.length; i++) {
            result.push(dataAadapter.updateInfoToItem(response.data.data[i])); 
          }
        }
        vm.list = result;
      }).then(function(){
        $( document ).ready(function() {
            $('#infoUpdate').dataTable( {
                paging: true,
                searching:false,
                "aoColumnDefs": [ { 'bSortable': false, 'aTargets': [ 0,1,2,3 ] }],
                "order": [[ 4, "desc" ]]
            });
          });
        });
      // var vm = this;
      // apiService.get('/v1/order/list/pending',{
      //   params: { 
      //     pageNum: 1,
      //     pageSize: 10,
      //   }
      // }).then(function (response) {         
      //   console.log(response); 
      //   var tempList = [];
      //   for (var i = response.data.data.orders.length - 1; i >= 0; i--) {
      //     var item = [];
      //     item['status'] = response.data.data.orders[i]['orderStatus'];
      //     item['id'] = response.data.data.orders[i]['id'];
      //     item['product'] = response.data.data.orders[i]['productCode'];
      //     item['program'] = response.data.data.orders[i]['programCode'];
      //     item['cid'] = response.data.data.orders[i]['user']['id'];
      //     item['cfn'] = response.data.data.orders[i]['personal']['fullName'];
      //     item['amount'] = response.data.data.orders[i]['amount'];
      //     item['adate'] = response.data.data.orders[i]['applicationTime'];
      //     item['pdd'] = response.data.data.orders[i]['processTime'];
      //     item['channel'] = response.data.data.orders[i]['salesChannel'];
      //     item['uw1'] = response.data.data.orders[i]['underwriter1']['realName'];
      //     item['uw2'] = (response.data.data.orders[i]['underwriter2'] != undefined )?response.data.data.orders[i]['underwriter2']['realName']:"";
      //     tempList.push(item);
      //   }
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
