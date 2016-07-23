Ext.define('WebApplication1.view.main.UsersICG', {
    extend: 'Ext.panel.Panel',
    xtype: 'UsersICG',

    requires: [
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
                click: 'onAddClick'
            },
            text: 'Carregar'
        },
        {
            xtype: 'grid',
            title: 'Grid Usuários ICG (teste)',
            store: {
                type: 'UsersICG'
            },
            columns: [
        { text: 'Nome', dataIndex: 'ds_usuario', width: 100 },
        { text: 'Usuario', dataIndex: 'username', width: 230 }
            ]
        }
    ]
});
