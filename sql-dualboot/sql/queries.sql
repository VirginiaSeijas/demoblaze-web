-- A. Nombre y número del agente con la orden de mayor monto (Amount)
SELECT a.Name, a.Employee_Number
FROM Agenttbl a
JOIN Orderstbl o ON a.Id = o.Agent_Id
ORDER BY o.Amount DESC
LIMIT 1;

-- B. Monto total de todas las órdenes del agente Seif
SELECT SUM(o.Amount)
FROM Orderstbl o
JOIN Agenttbl a ON o.Agent_Id = a.Id
WHERE a.Name = 'Seif';

-- C. Listar todos los clientes sin órdenes
SELECT *
FROM Customertbl
WHERE Id NOT IN (SELECT Customer_Id FROM Orderstbl);

-- D. Listar todos los agentes con más de un cliente
SELECT a.Id, a.Name
FROM Agenttbl a
JOIN Orderstbl o ON a.Id = o.Agent_Id
GROUP BY a.Id, a.Name
HAVING COUNT(DISTINCT o.Customer_Id) > 1;

-- E. Listar todos los clientes con órdenes realizadas el día 11/19/2015
SELECT c.*
FROM Customertbl c
JOIN Orderstbl o ON c.Id = o.Customer_Id
WHERE o.Date = '2015-11-19';

