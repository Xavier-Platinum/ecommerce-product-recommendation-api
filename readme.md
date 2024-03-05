# Introduction
    Ecommerce product recommendation api to users

## Technology used
    ```
        - Nodejs
        - PostgreSQl for Database
    ```

## Folder Structure
```
    . . . root
        - src
            - controllers - this handles the logic of our services in the application
            - database - Database base connection and schema 
            - routes - Handles application routings
            - services - for complex logic services across the application.
            - index.js - entry point of the application.
        .env - environmental variables
        readme.md - this file carries all the guides you need
```

### Implementation

    This function finds products in the same category as the user's most recent purchase. It assumes you have a products table with columns id, name, and category.

    This function fetches the most recent purchase made by a user. It assumes you have a purchases table with columns user_id, product_id, and a timestamp of the purchase (e.g., purchase_date).