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
        <KauthorityTable></KauthorityTable>
      </div>
    </div>
  </div>
  <KFooter></KFooter>
</div>
</template>

<script>
import KHeader from '../component/Header.vue'
import KSidebar from '../component/Sidebar.vue'
import KauthorityTable from '../component/authorityTable.vue'
import KFooter from '../component/Footer.vue'
import apiService from '../services/apiService'
export default {
  components: {
    KHeader,KSidebar,KFooter,KauthorityTable
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
      $( document ).ready(function() {
        $('#infoUpdate').dataTable( {
            paging: false,
            searching:false,
            // "aoColumnDefs": [ { 'bSortable': false, 'aTargets': [ 0,1,2,4,5 ] }],
            // "order": [[ 3, "desc" ]]
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
