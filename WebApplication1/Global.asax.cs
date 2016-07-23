using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel.Activation;
using System.Web;
using System.Web.Routing;
using System.Web.Security;
using System.Web.SessionState;

namespace WebApplication1
{
    public class Global : System.Web.HttpApplication
    {

        protected void Application_Start(object sender, EventArgs e)
        {
            CWI.Framework.FrameworkStarter starter = new CWI.Framework.FrameworkStarter();
            starter.StartDomainBuilder = true;
            starter.WrappersAssembly = typeof(Library.Data.Wrappers.Clientes).Assembly;
            starter.Initialize();
            CWI.Framework.Web.AssetsHelper.Initialize(System.Configuration.ConfigurationManager.AppSettings["Versao"].ToString(), true);

            RouteTable.Routes.Add(new ServiceRoute("UsuariosICG", new WebServiceHostFactory(), typeof(WebApplication1.services.UsuariosICG)));
        }

        protected void Session_Start(object sender, EventArgs e)
        {

        }

        protected void Application_PostAcquireRequestState(object sender, EventArgs e)
        {
            Library.GlobalInfo.instance().LoginByIcgSessionCookie(Request);
            Library.GlobalInfo.instance().RegisterUserDevice(Request);
        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {
            /**
             * Codigo necessario para fazer o ASMX (web services) retornar JSON para um GET quando nao vier o header ContentType
             * Acontece quando usamos o PhanthomJS e quando chamamos um GET de asmx direto da barra de enderecos do browser
             */
            if (Request.HttpMethod.ToUpper() == "GET" && Request.CurrentExecutionFilePathExtension == ".asmx" && String.IsNullOrEmpty(Request.ContentType))
            {
                Request.ContentType = "application/json";
                Request.Headers["ContentType"] = "application/json";
            }
        }

        protected void Application_AuthenticateRequest(object sender, EventArgs e)
        {

        }

        protected void Application_Error(object sender, EventArgs e)
        {

        }

        protected void Session_End(object sender, EventArgs e)
        {

        }

        protected void Application_End(object sender, EventArgs e)
        {

        }
    }
}