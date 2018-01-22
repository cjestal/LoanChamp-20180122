<template>
<div id='popCompontent' class="modal fade" tabindex="-1" role="dialog" aria-labelledby="gridSystemModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="gridSystemModalLabel">Message</h4>
      </div>
      <div class="modal-body">
        <p>
          Do you want to finish the underwriting of this order and to finalize credit decision?
        </p>
        </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary" @click="save">Yes</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
</template>
<script>

import apiService from '../services/apiService'
export default {
  name:'popCompontent',
  data() {
    return {
    }
  },
  props: {
    popDataSource: {
      type: Object,
      default: function () { return {} }
    },
  },methods: {
    save: function(){
      var vm = this;
      apiService.post('/v1/order/audit/manual',{
        checkType:vm.popDataSource.checkType,
        approvedAmount:vm.popDataSource.approvedAmount,
        approvedLoanTerm:vm.popDataSource.approvedLoanTerm,
        auditResult:vm.popDataSource.auditResult,
        orderId:vm.popDataSource.orderId,
        rejectReason:vm.popDataSource.rejectReason,
        uwId:vm.popDataSource.uwId,
        }
      ).then(function (response) {
        if (response.data.code == "00000000") {
          console.log("Success update");
          $("#popCompontent").modal("hide");
          vm.$router.push({
              path: '/underwritingConsole'
          });
         
        }
      });
    }
  }
}
</script>
<style scoped>
</style>