# Server Side Validation Exercise

### Setup
1. Fork and clone this repository
2. Run npm install
3. Create database users_dev
4. Run knex migration file
5. Run knex seed file
6. Use nodemon to open application

### Add the following server side validations:
- First Name: Required.
- Last Name: Required.
- Username: Required. Must be more than 6 characters, must start with a letter, and no punctuation
- Email: Required. Must be formatted like an email: something@something.something
- First Name: Required
- Last Name: Required
- Phone Number: Required. Must be a 10 digit number

You can manually write the validations or use the library 'joi' to complete (see more information in Learn: https://learn.galvanize.com/cohorts/138/units/1255/content_files/25112)

### STRETCH

Hook up a Password input field with validations below. Take it to the next level and see if you can figure out the steps you would need to take to hash and then insert this password into your users table!

Password Field Requirements: Required. Must be more than 8 characters with at least One letter, one number, and one special character (!?/.,')
