/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('WebApplication1.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onAddClick: function () {
        Ext.Msg.confirm('Carregar?', 'Tem certeza de que quer carregar?', 'onConfirm', this);
    },

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            var store = Ext.getStore('UsersICG').load();
            var record = store.data.items[this.getRamdomId()].data;

            Ext.getCmp('id_name').setValue(record.ds_usuario);
            Ext.getCmp('id_username').setValue(record.username);
        }
    },

    getRamdomId: function () {
        return Math.floor(Math.random() * (50 - 0)) + 0;
    }
    
});
