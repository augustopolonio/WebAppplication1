Ext.define('WebApplication1.store.UsersICG', {
    extend: 'Ext.data.Store',
    alias: 'store.UsersICG',
    autoLoad: true,
    storeId: 'UsersICG',
    model: 'WebApplication1.model.UsersICG'

    //config: {
    //    storeId: 'UsersICG',
    //    model: 'WebApplication1.model.UsersICG'
    //}
        
    //    proxy: {
    //        type: 'ajax',
    //        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    //        api: {
    //            ///TODO: Preparar uma url no webconfig
    //            read: 'http://localhost:49580/falhas/get_usuarios' 
    //        },
    //        writer: {
    //            type: 'json',
    //            encode: false,
    //            allowSingle: false
    //        },
    //        reader: {
    //            type: 'json',
    //            rootProperty: 'data',
    //            successProperty: 'success',
    //            messageProperty: 'msg'
    //        },
    //        noCache: false
    //    }
    //}
});
