## Step 1
- Cloned blank React app created by Tim M.
- Used Create React App

## Step 2
- Set up Consumer Login, Signup, Dashboard .js files
- 

## Step 3
- Added the following as dependencies inside React app Consumer components 
    - formik
    - yup
    - axios

## Step 4 > Formik Form
<< SIGNUP >> 
- Create form to allow NEW USER to SIGNUP for FFP
- Need the following info:
    - full name
    - email or phone >> to be used as UserName
    - zip code 
    - password
- SUBMIT button

<< LOGIN >> 
- Create form to allow RETURNING USER to LOGIN for FFP
- Need the following info:
    - email or phone
    - password
- SUBMIT button

## Step ? > Form Validation 
- Implement form validation + error msg'ing >> use YUP
- set up two different validations for each field along w/ custom error codes which render when validation fails (fog-horn).


## Step ? > POST Request 
- Craft a POST request using axios that sends your form data to the following endpoint: https://reqres.in/api/users

- Verify using a console.log() that you are receiving a successful response back