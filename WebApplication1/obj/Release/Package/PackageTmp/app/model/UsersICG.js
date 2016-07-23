Ext.define('WebApplication1.model.UsersICG', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    //fields: [
    //'ds_usuario', 'username'
    //],

    config: {
        useCache: false,
        fields: [
    'ds_usuario', 'username'
        ]
    },

    proxy: {
        type: 'ajax',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        timeout: 5 * 60 * 1000,
        api: {
            //read: '../../../../services/Usuarios.asmx/GetUsuarios'
        read: 'http://192.168.0.11:8383/UsuariosICG/GetUsuarios'
        },
        reader: {
            type: 'json',
            rootProperty: 'data',
            successProperty: 'd.success',
            messageProperty: 'd.msg',
            totalProperty: 'd.total'
        },
        noCache: false
    }
});