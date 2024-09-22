# Experiment 1 and 2: CRUD Operations with MongoDB

## Overview

In this experiment, we will create databases for two systems:
- **HMS**: Hospital Management System
- **BTRS**: Bus Ticket Reservation System

### Important Notes:
- A **Collection** in MongoDB is equivalent to a **Table** in SQL.
- A **Document** in MongoDB is similar to a **Row** in SQL.

## Prerequisites

### Create a Database
To create a new database, use:
```bash
use db_name
```

### Create a Collection
To create a new collection, use:
```bash
db.createCollection("collection_name")
```

### List Databases
To view the list of databases:
```bash
show dbs
```

### List Collections
To view the collections in the current database:
```bash
show collections
```

## CRUD Operations

### CREATE

#### Inserting a Single Document
To insert a single document into a collection:
```bash
db.collection_name.insertOne({'c_n1': c_v1, 'c_n2': 'c_v2'})
```

#### Inserting Multiple Documents
To insert multiple documents at once:
```bash
db.collection_name.insertMany([{'c_n1': 'c_v1', ...}, {'c_n1': 'c_v1', ...}])
```

### RETRIEVE

#### Retrieving All Documents
To retrieve all documents in a collection:
```bash
db.collection_name.find({})
```

#### Retrieving Documents by Condition
To retrieve documents that match a specific condition:
```bash
db.collection_name.find({'col_name': 'col_value'})
```

#### Retrieving with Limit
To limit the number of retrieved documents:
```bash
db.collection_name.find({}).limit(n) // Retrieves the first 'n' documents in the collection
```

### UPDATE
To update a specific document:
```bash
db.collection_name.updateOne({'c_n':'c_v'}, {$set:{'col_name':'new_value'}})
```

### DELETE

#### Deleting a Single Document
To delete a specific document:
```bash
db.collection_name.deleteOne({'col_name':'col_value'})
```

#### Deleting Multiple Documents
To delete multiple documents based on a condition:
```bash
db.collection_name.deleteMany({'col_name':'col_value'})
```
To delete documents that match multiple conditions:
```bash
db.collection_name.deleteMany([{'c_n1':'c_v1'}, {'c_n2':'c_v2'}])
```

### Note:
Use the above delete methods based on the condition you need to satisfy for deletion.
