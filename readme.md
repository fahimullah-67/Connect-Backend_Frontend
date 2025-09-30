start server
``
    npm start
``

`` type: module  ``

    # Frontend
`` bundler : vite ``

Use Axios for API
    Axios is a popular JavaScript library used to make HTTP requests from your code (like getting data from an API or sending data to a server). It works in both browsers and Node.js.

Simple details about Axios:

    Lets you easily send GET, POST, PUT, DELETE requests.
    Handles responses and errors for you.
    Automatically converts JSON data.
    Supports promises, so you can use .then() and .catch().
    Can set headers, timeouts, and more.
    
    
Use of Cors
    CORS stands for Cross-Origin Resource Sharing.

        It’s a security feature in web browsers.
        CORS controls which websites can request data from your server.
        If your website tries to get data from another domain, CORS rules decide if it’s allowed.
        Servers use CORS headers to say: “Yes, this site can access my data” or “No, it can’t.”
    Example:
        If your site at example.com wants data from api.other.com, CORS must be set up on api.other.com to allow it.

    Why is it important?
        It helps protect users from malicious websites trying to steal data.

BUT we don't use Cors, we use proxy for Api request.


feat: Implement frontend for joke management application

- Added main application component (App.jsx) to manage state and fetch jokes from the API.
- Created InputNewJokes component for adding new jokes with title and content.
- Developed ListOfJokes component to display the list of jokes fetched from the API.
- Integrated Axios for API requests to handle joke data.
- Set up Vite as the bundler with a proxy for API requests.
- Added global styles in index.css for consistent UI.
- Updated readme.md with instructions on server start and details about Axios and CORS.
