<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Login Page</title>
</head>
<body>
    <div style="text-align: center">
        <h1>Login Form</h1>
        <form action="../fragments/layout.html" method="post">
            Email: <input type="text" name="email"/><br/><br/>
            Password: <input type="password" name="password"/><br/><br/>
            <input type="submit" value="Login"/>
        </form>
    </div>
</body>
</html>
