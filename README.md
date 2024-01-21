


# Contact Management API Documentation

## User Registration

### Endpoint

- *URL:* /api/users/register
- *Method:* POST
- *Description:* Register a new user.

#### Request Body (JSON)

{
  "username": "Your_Username",
  "email": "your_email@example.com",
  "password": "Your_Password"
}
// Replace with actual user data

---

## User Login

### Endpoint

- *URL:* /api/users/login
- *Method:* POST
- *Description:* Log in to obtain a bearer token.

#### Request Body (JSON)

{
  "email": "your_email@example.com",
  "password": "Your_Password"
}
// Replace with actual login credentials

#### Response

// Upon successful login, a bearer token will be provided. Copy this token for further requests.

---

## Contact Operations

### Add Contact

### Endpoint

- *URL:* /api/contacts
- *Method:* POST
- *Description:* Add a new contact.

#### Request Body (JSON)

{
  "name": "Contact_Name",
  "email": "contact_email@example.com",
  "phone": "123-456-7890"
}
// Replace with actual contact data

#### Authorization Header (JSON)

{
  "Authorization": "Bearer YOUR_TOKEN"
}
// Include the bearer token obtained during login

### Get All Contacts

### Endpoint

- *URL:* /api/contacts
- *Method:* GET
- *Description:* Retrieve all contacts.

#### Authorization Header (JSON)

{
  "Authorization": "Bearer YOUR_TOKEN"
}
// Include the bearer token obtained during login

### Update Contact

### Endpoint

- *URL:* /api/contacts/:id
- *Method:* PUT
- *Description:* Update an existing contact.

#### Request Body (JSON)

{
  "name": "Updated_Contact_Name",
  "email": "updated_email@example.com",
  "phone": "987-654-3210"
}
// Replace with actual updated contact data

#### Authorization Header (JSON)

{
  "Authorization": "Bearer YOUR_TOKEN"
}
// Include the bearer token obtained during login

### Delete Contact

### Endpoint

- *URL:* /api/contacts/:id
- *Method:* DELETE
- *Description:* Delete a contact.

#### Authorization Header (JSON)

{
  "Authorization": "Bearer YOUR_TOKEN"
}
// Include the bearer token obtained during login

---

## Token Expiry

// The bearer token obtained during login will expire after 10 minutes.

---

## Contact Support

// For any questions or issues, contact me at mehrotrasanat2006@gmail.com.

