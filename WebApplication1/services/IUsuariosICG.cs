using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;

namespace WebApplication1.services
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "IUsuarios" in both code and config file together.
    [ServiceContract]
    public interface IUsuariosICG
    {
        //[OperationContract]
        //void DoWork();

        [OperationContract]
        [WebGet(
            UriTemplate = "/GetUsuarios",
            RequestFormat = WebMessageFormat.Json,
            ResponseFormat = WebMessageFormat.Json)]
        RetornoUsuario GetUsuarios();
    }
    [DataContract]
    public class UsuarioModel
    {
        [DataMember(Name = "ds_usuario")]
        public string ds_usuario;

        [DataMember(Name = "username")]
        public string username;
    }

    [DataContract]
    public class RetornoUsuario //: RetornoJsonBase
    {
        [DataMember]
        public List<UsuarioModel> data;
    }
}
