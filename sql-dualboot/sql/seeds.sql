-- Inserting data into Agenttbl
INSERT INTO Agenttbl (Id, Name, Employee_Number, Yearly_Profit) VALUES
(1, 'John', 68, 145000),
(2, 'Lan', 45, 51200),
(5, 'Hok', 12, 12542),
(7, 'Liean', 7, 25478),
(8, 'Mary', 98, 235668),
(11, 'Seif', 13, 454789);

-- Inserting data into Customertbl
INSERT INTO Customertbl (Id, Name, Region, Industry_Code) VALUES
(8, 'Caman', 105, 1215848),
(9, 'Kols', 455, 1548848),
(11, 'Fracys', 105, 4121849),
(12, 'Glaen', 125, 8844145),
(5, 'Herns', 203, 4878564),
(3, 'Lissot', 122, 8454789);

-- Inserting data into Orderstbl
INSERT INTO Orderstbl (Id, Date, Customer_Id, Agent_Id, Amount) VALUES
(123, '2015-08-12', 11, 1, 720),
(456, '2015-05-12', 5, 5, 600),
(987, '2015-11-19', 11, 5, 1125),
(321, '2015-05-05', 8, 7, 2654),
(789, '2015-05-18', 3, 5, 963),
(654, '2015-11-19', 11, 11, 789);
