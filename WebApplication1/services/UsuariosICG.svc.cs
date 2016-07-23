using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.Text;

namespace WebApplication1.services
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "Usuarios" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select Usuarios.svc or Usuarios.svc.cs at the Solution Explorer and start debugging.
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class UsuariosICG : IUsuariosICG
    {
        public RetornoUsuario GetUsuarios()
        {
            List<UsuarioModel> listaUsuarios = new List<UsuarioModel>();
            RetornoUsuario ret = new RetornoUsuario();
            UsuarioModel usuarioClass;

            var usersICG = Library.Data.Wrappers.Usuarios.FindAllByID_CLIENTE(203).Take(50);

            foreach (var item in usersICG)
            {
                usuarioClass = new UsuarioModel
                {
                    ds_usuario = item.DS_USUARIO,
                    username = item.USERNAME
                };

                listaUsuarios.Add(usuarioClass);

            }

            ret.data = listaUsuarios;

            return ret;
        }        
    }
}
