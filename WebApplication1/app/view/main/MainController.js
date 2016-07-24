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
    },

    anexarImagem: function (btn) {
        var me = this;
        var actionSheet = Ext.create('Ext.ActionSheet', {
            items: [
                {
                    text: 'Tirar foto com a Camera',
                    handler: function () {
                        me.captureImage('camera', actionSheet);
                    }
                },
                {
                    text: 'Escolher imagem do album',
                    handler: function () {
                        me.captureImage('album', actionSheet);
                    }
                },
                {
                    text: 'Cancel',
                    ui: 'decline',
                    handler: function () {
                        actionSheet.hide();
                        Ext.Viewport.remove(actionSheet);
                    }
                }
            ]
        });

        Ext.Viewport.add(actionSheet);
        actionSheet.show();
    },

    captureImage: function (src, actionSheet) {
        var me = this;
        Ext.device.Camera.capture({
            success: function (image) {
                console.log(image);
                //var anexosForm = me.getNovaFalhaForm().down('#anexos');

                var img = Ext.create('Ext.Img', {
                    src: image,
                    height: 48,
                    width: 64
                });
                //anexosForm.insert(0, img);

                var field = Ext.create('Ext.field.Hidden', {
                    name: 'anexos',
                    value: image
                });
                //anexosForm.insert(0, field);

                actionSheet.hide();
                Ext.Viewport.remove(actionSheet);
            },
            source: src,
            encoding: 'jpg',
            quality: 75,
            width: 640,
            height: 480,
            destination: 'file'
        });
    }

});
