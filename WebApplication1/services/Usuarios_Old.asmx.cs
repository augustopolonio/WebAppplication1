using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;

namespace WebApplication1.services
{
    /// <summary>
    /// Summary description for Usuarios
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class Usuarios_Old : System.Web.Services.WebService
    {
        [Serializable]
        public class Usuario {
            public virtual string ds_usuario { get; set; }
            public virtual string username { get; set; }
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public object GetUsuarios()
        {
            IList<Usuario> listaUsuarios = new List<Usuario>();
            Usuario usuarioClass;

            var usersICG = Library.Data.Wrappers.Usuarios.FindAllByID_CLIENTE(203);

            foreach (var item in usersICG)
            {
                usuarioClass = new Usuario
                {
                    ds_usuario = item.DS_USUARIO,
                    username = item.USERNAME
                };

                listaUsuarios.Add(usuarioClass);

            }

            return listaUsuarios;
        }
    }
}
