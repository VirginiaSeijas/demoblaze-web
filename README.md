# Running Tests with Playwright

This project utilizes Playwright for automated testing in web browsers. Follow the steps below to run the tests in your local environment.

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

> **_NOTE:_**  You need to create a file .env within project root and add the credentials provides in the pdf part 2 .


## Requirements

Before getting started, make sure you have the following installed on your system:

- Node.js (version 14 or higher)
- npm (Node.js package manager)

## Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/VirginiaSeijas/demoblaze-web.git
```
2. Install the dependencies 
```bash
npm install
```

## Execute tests
1. Execute this command to run the existent test

```bash
npm run test
```

2. Execute this command to see the report 

```bash
npm run test:report
```




