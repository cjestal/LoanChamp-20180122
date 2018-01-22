import moment from 'moment'
export default {
	 orderToItem:function(orderObject){  
        var item = [];
		item['status'] = this.orderStatus(orderObject['orderStatus']);

		item['id'] = orderObject['revealId'];
		item['realid'] = orderObject['id'];
		item['product'] = orderObject['productCode'];
		item['program'] = orderObject['programCode'];
		item['cid'] = orderObject['personal']['revealId'];
		item['cfn'] = orderObject['personal']['fullName'];
		item['amount'] = parseInt(orderObject['amount']);
		item['adate'] = orderObject['applicationTime'];
		item['pdd'] = orderObject['processDueTime'];
		item['channel'] = orderObject['salesChannel'];
		item['uw1'] = orderObject['underwriter1']['realName'];
		item['uw2'] = (orderObject['underwriter2'] != undefined )?orderObject['underwriter2']['realName']:"";

        return item;
    },
    orderUnderwritingToItem:function(orderObject){ 
    	orderObject.orderStatus = this.orderStatus(orderObject.orderStatus);
    	return orderObject;
    },
    mainPageToItem:function(object){
    	object.contactInfo.permanentHomeCity = this.city(object.contactInfo.permanentHomeCity);
    	for (var i = 0; i < object.contactInfo.refers.length ; i++) {
    		object.contactInfo.refers[i].relation = this.relation(object.contactInfo.refers[i].relation);
    	}
    	object.employInfo.industryType = this.industryType(object.employInfo.industryType);
    	object.employInfo.officeCity = this.city(object.employInfo.officeCity);
    	object.employInfo.position = this.position(object.employInfo.position);
    	object.personalInfo.idType = this.idType(object.personalInfo.idType);

    	return object;

    },
    mainPageOrdersToItem:function(object){
    	for (var i = 0; i < object.length; i++) {
    		object[i].orderStatus = this.orderStatus(object[i].orderStatus);
    	}
    	return object;
    },
    logToItem:function(logObject){
    	var item = [];
    	item = logObject;
    	item['logTime'] = moment(logObject['logTime']).format("YYYY-MM-DD HH:mm:ss");
    	item['action'] = this.userLogResp(item['action']);
    	

    	return item;
    },
    updateInfoToItem:function(logObject){
    	var item = logObject;
    	item.updateTime = moment(logObject.updateTime).format("YYYY-MM-DD HH:mm:ss");
    	return item;
    },
    underwriterToItem:function(object){
    	object.status = (object.decisionTime == "")?"Submit":"Update";
    	return object;
    },
    orderStatus:function(status){
    	switch(status){
    		case 0:
    			return "系统初始";
    			break;
    		case 100:
    			return "Complete App";
    			break;
    		case 200:
    			return "System Pass";
    			break;
    		case 210:
    			return "Initial Approval";
    			break;
    		case 220:
    			return "Final Approval";
    			break;
    		case 300:
    			return "Other Confirmed";
    			break;
    		case 400:
    			return "Loan Disbursed";
    			break;
    		case 900:
    			return "System Declined";
    			break;
    		case 910:
    			return "Initial Declined";
    			break;
    		case 920:
    			return "Cancelled(Before Decision)";
    			break;
    		case 930:
    			return "Final Declined";
    			break;
    		case 940:
    			return "Cancelled(After Decision)";
    			break;
    		case 950:
    			return "Disbursement failed";
    			break;
    		case 960:
    			return "Paid-off";
    			break;
    	}
    	
    },
    city:function(city){
    	switch(city){
	    	case 1:
	    		return 'Angeles';
	    		break;
	        case 2:
	    		return 'Bataan';
	    		break;
	        case 3:
	    		return 'Batangas';
	    		break;
	        case 4:
	    		return 'Bulacan';
	    		break;
	        case 5:
	    		return 'Caloocan';
	    		break;
	        case 6:
	    		return 'Cavite';
	    		break;
	        case 7:
	    		return 'Cebu';
	    		break;
	        case 8:
	    		return 'Lapu lapu';
	    		break;
	        case 9:
	    		return 'Laguna';
	    		break;
	        case 10:
	    		return 'Las Piñas';
	    		break;
	        case 11:
	    		return 'Makati';
	    		break;
	        case 12:
	    		return 'Malabon';
	    		break;
	        case 13:
	    		return 'Mandaluyong';
	    		break;
	        case 14:
	    		return 'Mandaue';
	    		break;
	        case 15:
	    		return 'Manila';
	    		break;
	        case 16:
	    		return 'Marikina';
	    		break;
	        case 17:
	    		return 'Muntinlupa';
	    		break;
	        case 18:
	    		return 'Navotas';
	    		break;
	        case 19:
	    		return 'Nueva Ecija';
	    		break;
	        case 20:
	    		return 'Pampanga';
	    		break;
	        case 21:
	    		return 'Parañaque';
	    		break;
	        case 22:
	    		return 'Pasay';
	    		break;
	        case 23:
	    		return 'Pasig';
	    		break;
	        case 24:
	    		return 'Quezon City';
	    		break;
	        case 25:
	    		return 'Rizal';
	    		break;
	        case 26:
	    		return 'San Juan';
	    		break;
	        case 27:
	    		return 'Taguig';
	    		break;
	        case 28:
	    		return 'Tarlac';
	    		break;
	        case 29:
	    		return 'Valenzuela';
	    		break;
	        case 30:
	    		return 'Others';
	    		break;
	    }
    },
    industryType:function(type){
    	switch (type){
    		case 1:
	    		return 'Agriculture';
	    		break;
	        case 2:
	    		return 'Arts/Media';
	    		break;
	        case 3:
	    		return 'BPO/Call center';
	    		break;
	        case 4:
	    		return 'Construction';
	    		break;
	        case 5:
	    		return 'Education';
	    		break;
	        case 6:
	    		return 'Energy & Automotive';
	    		break;
	        case 7:
	    		return 'Entertainment/Gaming';
	    		break;
	        case 8:
	    		return 'Financial service';
	    		break;
	        case 9:
	    		return 'Government';
	    		break;
	        case 10:
	    		return 'Healthcare';
	    		break;
	        case 11:
	    		return 'Hospitality and Leisure';
	    		break;
	        case 12:
	    		return 'Manufacturing';
	    		break;
	        case 13:
	    		return 'Professional service (legal/accounting…)';
	    		break;
	        case 14:
	    		return 'Real Estate';
	    		break;
	        case 15:
	    		return 'Restaurant (food and drink)';
	    		break;
	        case 16:
	    		return 'Retail';
	    		break;
	        case 17:
	    		return 'Shipbuilding';
	    		break;
	        case 18:
	    		return 'Technology';
	    		break;
	        case 19:
	    		return 'Telecommunication';
	    		break;
	        case 20:
	    		return 'Transportation';
	    		break;
	        case 21:
	    		return 'Others';
	    		break;
	        case 22:
	    		return 'Unemployed';
	    		break;
    	}

    },
    position:function(position){
    	switch (position){
    		case 1:
    			return 'Owner/ Part owner';
    			break;
	        case 2:
	        	return 'Top/ Senior management';
	        	break;
	        case 3:
	        	return 'Officer (supervisory)';
	        	break;
	        case 4:
	        	return 'Officer (non supervisory)';
	        	break;
	        case 5:
	        	return 'Staff (permanent)';
	        	break;
	        case 6:
	        	return 'Staff (contractual)';
	        	break;
	        case 7:
	        	return 'Staff (probational)';
	        	break;
    	}
    },
    idType:function(type){
    	switch(type){
    		case 1:
	        	return 'Driver\'s License';
	        	break;
	        case 2:
	        	return 'Social Security System ID';
	        	break;
	        case 3:
	        	return 'Government Service Insurance System';
	        	break;
	        case 4:
	        	return 'Tax Identification Number';
	        	break;
	        case 5:
	        	return 'Professional Regulation Commission ID';
	        	break;
	        case 6:
	        	return 'Passport';
	        	break;
	        case 7:
	        	return 'Unified Multi Purpose ID';
	        	break;
	        case 8:
	        	return 'Voter\'s ID';
	        	break;
	        case 9:
	        	return 'National Bureau of Investigation (NBI) Clearance';
	        	break;
    	}
    },
    maritalStatus:function(status){
    	switch(status){
			case 1:
	        	return 'Single';
	        	break;
        	case 2:
	        	return 'Married';
	        	break;
        	case 3:
	        	return 'Separated';
	        	break;
        	case 4:
	        	return 'Widowed';
	        	break;
        	case 5:
	        	return 'Annulled';
	        	break;
    	}
    },
    relation:function(relation){
    	switch(relation){
	    	case 1:
	        	return 'Parents, children, or sibling';
	        	break;
	        case 2:
	        	return 'Relative';
	        	break;
	        case 3:
	        	return 'Colleague';
	        	break;
	        case 4:
	        	return 'Neighbor';
	        	break;
	        case 5:
	        	return 'Friend';
	        	break;
    	}
    },
    durationUnit:function(unit){
    	switch(unit){
    		case 'H':
	        	return '时';
	        	break;
	        case 'D':
	        	return '日';
	        	break;
	        case 'W':
	        	return '周';
	        	break;
	        case 'M':
	        	return '月';
	        	break;
	        case 'Y':
	        	return '年';
	        	break;
    	}
    },
    userLogResp:function(action){
    	switch(action){
			case 1:
	        	return 'Register Success'
	        	break;
	        case 2:
	        	return 'Login Success'
	        	break;
	        case 3:
	        	return 'Logout'
	        	break;
	        case 4:
	        	return 'Edit User Information'
	        	break;
	        case 5:
	        	return 'Reset Password(Request)'
	        	break;
	        case 6:
	        	return 'Loan'
	        	break;
	        case 7:
	        	return 'Repay'
	        	break;
	        case 8:
	        	return 'Reset Password(Success)'
	        	break;
	        case 9:
	        	return 'Login Failure'
	        	break;
	        case 10:
	        	return 'Register Submit'
	        	break;
    	}
    }

     	
}
