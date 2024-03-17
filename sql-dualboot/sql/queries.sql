-- A. Name and number of the agent with the largest order (Amount)
SELECT a.Name, a.Employee_Number
FROM Agenttbl a
JOIN Orderstbl o ON a.Id = o.Agent_Id
ORDER BY o.Amount DESC
LIMIT 1;

-- B. Total amount of all orders of agent "Seif"
SELECT SUM(o.Amount)
FROM Orderstbl o
JOIN Agenttbl a ON o.Agent_Id = a.Id
WHERE a.Name = 'Seif';

-- C.  List all customers without orders
SELECT *
FROM Customertbl
WHERE Id NOT IN (SELECT Customer_Id FROM Orderstbl);

-- D. List all agents with more than one customer
SELECT a.Id, a.Name
FROM Agenttbl a
JOIN Orderstbl o ON a.Id = o.Agent_Id
GROUP BY a.Id, a.Name
HAVING COUNT(DISTINCT o.Customer_Id) > 1;

-- E.List all customers with orders placed on "2015-11-19"
SELECT c.*
FROM Customertbl c
JOIN Orderstbl o ON c.Id = o.Customer_Id
WHERE o.Date = '2015-11-19';

