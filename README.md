# wk1-challenge-bank-of-flatiron
This website displays a list of your recent bank transactions and allows one to enter new transactions.

## Table of content
* Description 
* Installation requirement
* Technology used
* Licence
* Authors info

# DESCRIPTION
## TransactionTable
First fetch this `https://api.npoint.io/24be302473f259de6aaf/transactions`at then make the db.json file into an object which will return the data. We then used .map to display data for each transaction which will return data in the table.

## TransactionSearch
Create a form with a search input and used onChange to listen for the changed event and onFormSubmit to be able to submit  whatever has been searched.

## TransactionForm
Create a form with a dateinput,categoryinput,amountinput and a textarea for description and use onChange to listen for the changed event and onFormSubmit to be able to submit  whatever has been searched.


# INSTALLATION PROCESS
## Frontend
* Navigate to the code challenge directory using `cd wk1code challenge`
* Navigate to the bank of flatiron directory using `cd bank-of-flatiron`
* Create the db.json file using `touch db.json`


## Backend
* Install the json-server using the command `npm install -g json-server`
* To get backend started run this command `json-server --watch db.json`
* Test your server by visting this route in the browser `http://localhost:3000/transactions`
* Run `npm run dev`to run our web server.

# TECHNOLOGY USED
Html
css
Javascript
React


# LICENSE
MIT license

# AUTHORS INFO
Mercy Chepchirchir
