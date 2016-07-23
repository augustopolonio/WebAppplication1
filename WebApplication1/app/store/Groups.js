Ext.define('WebApplication1.store.Groups', {
    extend: 'Ext.data.Store',

    alias: 'store.groups',

    fields: [
        'name', 'email', 'phone'
    ],

    data: {
        items: [
            { name: 'Grupo1', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
            { name: 'Grupo2', email: "worf.moghsson@enterprise.com", phone: "555-222-2222" },
            { name: 'Grupo3', email: "deanna.troi@enterprise.com", phone: "555-333-3333" },
            { name: 'Grupo4', email: "mr.data@enterprise.com", phone: "555-444-4444" }
        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
