<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Open Source Definitions</title>
</head>
<body>
    <%
        String[] name = {"Item1", "Item2", "Item3", "Item4", "Item5"};
        String[] defn = {"Definition 1", "Definition 2", "Definition 3", "Definition 4", "Definition 5"};
        String itemName = request.getParameter("itemName");
        String definition = "";
        
        if (itemName != null) {
            for (int i = 0; i < name.length; i++) {
                if (name[i].equalsIgnoreCase(itemName)) {
                    definition = defn[i];
                    break;
                }
            }
        }
    %>
    <h2>Open Source Definitions</h2>
    <form action="openSource.jsp" method="post">
        <label for="itemName">Enter the name of the item:</label><br>
        <input type="text" id="itemName" name="itemName"><br><br>
        <input type="submit" value="Submit">
    </form>
    <br>
    <% 
        if (!definition.isEmpty()) { 
    %>
        <div>
            <p><b>Definition:</b> <%= definition %></p>
        </div>
    <% 
        } 
    %>
</body>
</html>
