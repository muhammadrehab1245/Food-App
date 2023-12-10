// Importing the 'jsonwebtoken' library for working with JSON Web Tokens (JWT)
const jwt = require('jsonwebtoken');

// Secret key used for signing and verifying JWTs
const key = 'foodkey';

// Middleware function for identifying and authenticating users
const identify = (req, res, next) => {
    // Creating a Promise to handle asynchronous operations
    const userFinding = new Promise(async (resolve, reject) => {
        // Extracting the JWT token from the request header
        const getToken = req.header('auth-token');

        // Checking if a token is present in the request header
        if (!getToken) {
            reject('Authenticate using a valid token');
        } else {
            try {
                // Verifying the JWT token with the secret key
                const data = jwt.verify(getToken, key);

                // Resolving the promise with the user information extracted from the token
                resolve(data.user);
            } catch (e) {
                // Rejecting the promise if token verification fails
                reject('Authenticate using a valid token');
            }
        }
    });

    // Handling the promise resolution
    userFinding
        .then((value) => {
            // Adding the user information to the request object
            req.user = value;

            // Passing control to the next middleware or route handler
            next();
        })
        .catch((e) => {
            // Handling authentication errors and sending a 401 Unauthorized status
            res.status(401).send({ error: e });
        });
};

// Exporting the 'identify' middleware for use in other parts of the application
module.exports = identify;
