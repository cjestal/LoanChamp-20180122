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
        <KTable :list="list"></KTable>
      </div>
    </div>
  </div>
  <KFooter></KFooter>
</div>
</template>

<script>
import KHeader from '../component/Header.vue'
import KSidebar from '../component/Sidebar.vue'
import KTable from '../component/Table.vue'
import KFooter from '../component/Footer.vue'
import apiService from '../services/apiService'
import dataAadapter from '../services/dataAadapter'
export default {
  components: {
    KHeader,KSidebar,KTable,KFooter
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
      apiService.get('/v1/order/list/pending',{
        params: { 
          pageNum: 1,
          pageSize: 999,
        }
      }).then(function (response) {         
        console.log(response); 
        var tempList = [];
        for (var i = response.data.data.orders.length - 1; i >= 0; i--) {
          tempList.push(dataAadapter.orderToItem(response.data.data.orders[i]));
        }
        vm.list = tempList;
        
      }).then(function(){

        $('#example').dataTable( {
        "bSortable": true,
        "bRetrieve": true,
            "scrollX": true,
            "aoColumnDefs": [
              
                { 'bSortable': false, 'aTargets': [ 2,3,4,9 ] }
             ],
             "lengthMenu": [[10, 30, 50], [10, 30, 50]],
             // "processing": true,
        });
      }).catch(function (response) { 
        console.log(response); 
      });
    
    }
  }
}
</script>

<style scoped>
@import 'node_modules/datatables.net-bs/css/dataTables.bootstrap.css';
</style>
