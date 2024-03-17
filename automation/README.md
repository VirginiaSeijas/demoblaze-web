# Running Tests with Playwright

This project utilizes Playwright for automated testing in web browsers. Follow the steps below to run the tests in your local environment.

## Requirements

Before getting started, make sure you have the following installed on your system:

- Node.js (version 18 or higher)
- npm (Node.js package manager)


## Project Structure


```bash
project-root/
│
├── page-objects/
│   └── .*po.ts
├── reports/
│   └── allure-results/
├── tests/
│   └── .*spec.ts
├── tsconfig.json
├── package.json
├── ppackage-lock.json
└── playwright.config.ts
└── README.md
```

## Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/VirginiaSeijas/demoblaze-web.git
```
2. Install the dependencies 
```bash
npm install
```

> **_NOTE:_**  You need to create a file .env within project root and add the credentials provides in the pdf part 2 .

## Execute tests
1. Execute this command to run the existent test

```bash
npm run test
```

2. Execute this command to see the report 

```bash
npm run test:report
```




