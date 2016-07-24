<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="WebApplication1.index" %>

<!DOCTYPE HTML>
<html>
    <body>        
        <p><!--#include file="index.html"--></p>
        <script type="text/javascript">
            window.UrlWebApp1 = "<%= GetUrlWebApp1() %>";
        </script>
    </body>
</html>
