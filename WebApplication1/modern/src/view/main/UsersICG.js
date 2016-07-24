Ext.define('WebApplication1.view.main.UsersICG', {
    extend: 'Ext.panel.Panel',
    xtype: 'UsersICG',

    requires: [
        'Ext.*',
        'WebApplication1.store.UsersICG',
        'WebApplication1.model.UsersICG'
    ],

    title: 'Panel Usuarios ICG',
    id: 'id_panel_usuariosICG',
    items: [
        {
            xtype: 'button',
            itemId: 'carregarUsuarios',
            listeners: {
                tap: 'onAddClick'
            },
            text: 'Carregar'
        },
        {
            xtype: 'button',
            listeners: {
                tap: 'anexarImagem'
            },
            text: 'Anexar Imagem'
        },
        {
            xtype: 'grid',
            title: 'Grid Usuários ICG',
            store: {
                type: 'UsersICG'
            },
            columns: [
        { text: 'Nome', dataIndex: 'ds_usuario', width: 100 },
        { text: 'Usuario', dataIndex: 'username', width: 230 }
            ]
        },
        {
            xtype: 'formpanel',
            //fullscreen: true,
            items: [
                {
                    xtype: 'textfield',
                    name: 'name',
                    id: 'id_name',
                    label: 'Nome'
                },
                {
                    xtype: 'textfield',
                    name: 'username',
                    id: 'id_username',
                    label: 'Username'
                },
                {
                    xtype: 'passwordfield',
                    name: 'password',
                    label: 'Password'
                }
            ]
        }

    ]



    //listeners: {
    //    select: 'onItemSelected'
    //}
});
