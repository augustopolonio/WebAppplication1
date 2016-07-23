/**
 * This view is an example list of people.
 */
Ext.define('WebApplication1.view.main.Groups', {
    extend: 'Ext.grid.Panel',
    xtype: 'groups',

    requires: [
        'WebApplication1.store.Groups'
    ],

    title: 'Groups',

    store: {
        type: 'groups'
    },

    columns: [
        { text: 'Name', dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
