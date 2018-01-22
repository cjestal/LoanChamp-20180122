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
        <KTable :list="list" tableType="2"></KTable>
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
import constantService from '../services/constantService'
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
          var item = dataAadapter.orderToItem(response.data.data.orders[i]);
          item['uw1list'] = [];
          item['uw2list'] = [];
          // item['uw1list_id'] = [];
          // item['uw2list_id'] = [];
          var uwList = JSON.parse(localStorage.getItem(constantService.localStorage.underwriterList));
          // console.log(uwList);
          for (var j = 0; j < uwList.data.length; j++) {
            // console.log(uwList[i].realName);
            // item['uw1list'] = {"realName":uwList.data[j].realName,"id":uwList.data[j].id};
            // item['uw2list'] = {"realName":uwList.data[j].realName,"id":uwList.data[j].id};
            item['uw1list'].push({"realName":uwList.data[j].realName,"id":uwList.data[j].id});
            // item['uw1list_id'].push(uwList.data[j].id);
            item['uw2list'].push({"realName":uwList.data[j].realName,"id":uwList.data[j].id});
            // item['uw2list_id'].push(uwList.data[j].id);

          }
          tempList.push(item);
          // var item = [];
          // item['status'] = response.data.data.orders[i]['orderStatus'];
          // item['id'] = response.data.data.orders[i]['revealId'];
          // item['product'] = response.data.data.orders[i]['productCode'];
          // item['program'] = response.data.data.orders[i]['programCode'];
          // item['cid'] = response.data.data.orders[i]['personal']['revealId'];
          // item['cfn'] = response.data.data.orders[i]['personal']['fullName'];
          // item['amount'] = response.data.data.orders[i]['amount'];
          // item['adate'] = response.data.data.orders[i]['applicationTime'];
          // item['pdd'] = response.data.data.orders[i]['processDueTime'];
          // item['channel'] = response.data.data.orders[i]['salesChannel'];
          // item['uw1'] = response.data.data.orders[i]['underwriter1']['realName'];
          // item['uw2'] = (response.data.data.orders[i]['underwriter2'] != undefined )?response.data.data.orders[i]['underwriter2']['realName']:"";
          // item['uw1list'] = ["Lebron James","Lebron James2"];
          // item['uw2list'] = ["Lebron James","Lebron James2"];
          // tempList.push(item);
        }
        vm.list = tempList;
        
      }).then(function(){
        $('#example').dataTable( {
            "scrollX": true,
            "aoColumnDefs": [
                { 'bSortable': false, 'aTargets': [ 2,3,4,9,11,12 ] }
             ],
             "lengthMenu": [[10, 30, 50], [10, 30, 50]]
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
