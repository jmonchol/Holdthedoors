Ext.define('chirr.view.main.LeftSidePanel', {
    extend: 'Ext.Panel',

    alias: 'widget.main-leftsidepanel',

    requires: [
    ],

    cls:'main-leftsidepanel',
    width: 220,
    bodyPadding:0,
    resizable: {
        handles: 'e',
        pinned: true
    },

    layout: {
        type:'vbox',
        align:'stretch'
    },

    items: [{
        html: i18n.main.leftSidePanel
    }]
});
 