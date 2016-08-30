odoo.define('sales_team_dashboard_india.form_widgets', function (require) {
"use strict";

var Class = require('web.Class');
var translation = require('web.translation');
var utils = require('web.utils');

var _t = translation._t;

utils.include({
        template: 'utils',

        human_number_india: function(val,decimal=0,spl='') {alert(val);
	    if(val>=1000){
	    if(val >= 10000000) val = (val/10000000).toFixed(decimal) + ' C';
	    else if(val >= 100000) val = (val/100000).toFixed(decimal) + ' L';
	    else if(val >= 1000) val = (val/1000).toFixed(decimal) + ' K';
	    return humanFriendlyNumber((val.split(' ')[0]),decimal,val.split(' ')[1]+spl);
	    }
	    return val.toString().replace('.0','')+spl;
       }
       });

});
