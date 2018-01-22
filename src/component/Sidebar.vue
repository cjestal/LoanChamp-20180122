<template>
<div class="sidebar content-box" style="display: block;">
    <ul class="nav">
        <!-- Main menu -->
        
        <li class="submenu s1" exact-active-class="open">
             <a href="#">
                Pipeline overview
                <span class="caret pull-right"></span>
             </a>
             <!-- Sub menu -->
             <ul>

                <li>
                    <router-link href="/home" :to="{path: '/home'}">All</router-link>
                </li>
                <li>
                    <router-link href="/assignment" :to="{path: '/assignment'}">For U/W assignment</router-link>
                </li>
                <li>
                    <router-link href="/overProcessDue" :to="{path: '/overProcessDue'}">Over Process Due</router-link>
                </li>
                <li>
                    <router-link href="/sortbyPersonel" :to="{path: '/sortbyPersonel'}">Sort by Personel</router-link>
                </li>
                 
            </ul>
        </li>
        <li class="submenu s2">
             <a href="#">
                Customer information
                <span class="caret pull-right"></span>
             </a>
             <!-- Sub menu -->
             <ul>
                <li><router-link href="/mainPage" :to="{path: '/mainPage'}">Main page</router-link></li>
                <li><router-link href="javascript:void(0);" :to="{path: '/#'}">Internal record</router-link></li>
                <li><router-link href="/infoUpdate" :to="{path: '/infoUpdate'}">Info update history</router-link></li>
                <li><router-link href="/logRecord" :to="{path: '/logRecord'}">Log in/out record</router-link></li>
                <li><router-link href="javascript:void(0);" :to="{path: '/#'}">Credit limit history</router-link></li>
                <li><router-link href="javascript:void(0);" :to="{path: '/#'}">Underwriting history</router-link></li>
                <li><router-link href="javascript:void(0);" :to="{path: '/#'}">Rating history</router-link></li>
                <li><router-link href="javascript:void(0);" :to="{path: '/#'}">Certification</router-link></li>
                <li><router-link href="javascript:void(0);" :to="{path: '/#'}">Credit bureau</router-link></li>
                <li><router-link href="/attachedFile" :to="{path: '/attachedFile'}">Attached file review</router-link></li>
                <li><router-link href="/accountsHistory" :to="{path: '/accountsHistory'}">Accounts history</router-link></li>
                <li><router-link href="javascript:void(0);" :to="{path: '/#'}">Third-party data</router-link></li>
            </ul>
        </li>
        <li class="submenu s3">
             <a href="#">
                Underwriting
                <span class="caret pull-right"></span>
             </a>
             <!-- Sub menu -->
             <ul>
                <li><router-link href="/underwritingConsole" :to="{path: '/underwritingConsole'}">Underwriting console</router-link></li>
                <li><router-link href="/underwritingDetails" :to="{path: '/underwritingDetails'}">Underwriting details</router-link></li>
                <li><router-link href="/underwritingFinal" :to="{path: '/underwritingFinal'}">Underwriting final</router-link></li>
            </ul>
        </li>
        <li>
            <router-link href="/authority" :to="{path: '/authority'}">Authority management</router-link>
        </li>
        <li>
             <a href="#">
                Collection module
             </a>
        </li>
        <li>
             <a href="#">
                Customer service module
             </a>
        </li>
        <li class="submenu s4">
             <a href="#">
                MIS Report
                <span class="caret pull-right"></span>
             </a>
             <!-- Sub menu -->
             <ul>
                <li><router-link href="#" :to="{path: '/home'}">Report</router-link></li>
                <li><router-link href="#" :to="{path: '/home'}">Report</router-link></li>
            </ul>
        </li>
    </ul>
 </div>
</template>
<script>
export default {
  // props: {
  //   showCurrent: {
  //     type: Object,
  //     // default: ,
  //   }
  // }
  created: function () {
   this.viewInit();
  },
   methods: {
    viewInit: function(){


      $(document).ready(function(){
        switch(location.pathname){
            case '/home':
            case '/assignment':
            case '/overProcessDue':
            case '/sortbyPersonel':
                $(".s1").addClass("open");
            break;
            case '/mainPage':
            case '/mainPage/':
            case '/infoUpdate':
            case '/logRecord':
            case '/attachedFile':
            case '/accountsHistory':
                $(".s2").addClass("open");
            break;
            case '/underwritingConsole':
            case '/underwritingDetails':
            case '/underwritingFinal':
                $(".s3").addClass("open");
            break;
        }
        $(".submenu > a").click(function(e) {
          e.preventDefault();
          var $li = $(this).parent("li");
          var $ul = $(this).next("ul");

          if($li.hasClass("open")) {
            $ul.slideUp(350);
            $li.removeClass("open");
          } else {
            $(".nav > li > ul").slideUp(350);
            $(".nav > li").removeClass("open");
            $ul.slideDown(350);
            $li.addClass("open");
          }
        });
     

        
      });
    }
    }
}
</script>