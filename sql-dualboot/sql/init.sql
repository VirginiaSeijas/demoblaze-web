CREATE DATABASE IF NOT EXISTS my_db_test;
USE my_db_test;

CREATE TABLE IF NOT EXISTS Agenttbl (
  Id INT PRIMARY KEY,
  Name VARCHAR(255),
  Employee_Number INT,
  Yearly_Profit DECIMAL(10,2)
);

CREATE TABLE IF NOT EXISTS Customertbl (
  Id INT PRIMARY KEY,
  Name VARCHAR(255),
  Region INT,
  Industry_Code INT
);

CREATE TABLE IF NOT EXISTS Orderstbl (
  Id INT PRIMARY KEY,
  Date DATE,
  Customer_Id INT,
  Agent_Id INT,
  Amount DECIMAL(10,2),
  FOREIGN KEY (Customer_Id) REFERENCES Customertbl(Id),
  FOREIGN KEY (Agent_Id) REFERENCES Agenttbl(Id)
);
