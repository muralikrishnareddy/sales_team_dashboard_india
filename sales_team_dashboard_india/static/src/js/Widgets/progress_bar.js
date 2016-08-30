odoo.define('sales_team_dashboard_india.form_widgets', function (require) {
    "use strict";

    var core = require('web.core');
    var form_common = require('web.form_common');
    var utils = require('web.utils');
    var ProgressBar = require('web.ProgressBar');
    
ProgressBar.include({
        template: 'ProgressBar',
        init: function (parent, options) {

        this._super(parent);

        options = _.defaults(options || {}, {
            readonly: true,
            edit_on_click: false,
            value: 0,
            max_value: 100,
            title: '',
            edit_max_value: false,
            humanFriendlyDecimal:0,
        });

        this.readonly = options.readonly;
        this.edit_on_click = options.edit_on_click;
        this.value = options.value;
        this.max_value = options.max_value;
        this.title = options.title;
        this.edit_max_value = options.edit_max_value;
        this.humanFriendlyDecimal = options.humanFriendlyDecimal;
    },
        human_number_india: function(val,decimal=0,spl='') {
	    if(val>=1000){
	    if(val >= 10000000) val = (val/10000000).toFixed(decimal) + ' C';
	    else if(val >= 100000) val = (val/100000).toFixed(decimal) + ' L';
	    else if(val >= 1000) val = (val/1000).toFixed(decimal) + ' K';
	    return this.human_number_india((val.split(' ')[0]),decimal,val.split(' ')[1]+spl);
	    }
	    return val.toString().replace('.0','')+spl;
       },
        _render_value: function(v) {
        var value = this.value;
        var max_value = this.max_value;
        if(!isNaN(v)) {
            if(this.edit_max_value) {
                max_value = v;
            } else {
                value = v;
            }
        }
        value = value || 0;
        max_value = max_value || 0;

        var widthComplete;
        if(value <= max_value) {
            widthComplete = value/max_value * 100;
        } else {
            widthComplete = max_value/value * 100;
        }

        this.$('.o_progress').toggleClass('o_progress_overflow', value > max_value);
        this.$('.o_progressbar_complete').css('width', widthComplete + '%');

        if(this.readonly) {
            if(max_value !== 100) {
                this.$('.o_progressbar_value').html(this.human_number_india(value,this.humanFriendlyDecimal) + " / " + this.human_number_india(max_value,this.humanFriendlyDecimal));
            } else {
                this.$('.o_progressbar_value').html(utils.human_number(value) + "%");
            }
        } else if(isNaN(v)) {
            this.$('.o_progressbar_value').val(this.edit_max_value ? max_value : value);
        }
    }
    });
});


