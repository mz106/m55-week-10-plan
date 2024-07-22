What do I want to achieve?

I want to make an Instagram-like app

What features do I want my app to have?

    Signup
    Login
    Image display
    Message change on login (example: "Please login in" to "Hello Michael")

What am I going to need for each feature?

    Basic UI

        Header
        Footer
        LogOrSign
            Signup
            Login
        ImageContainer

    Signup

        BE:
        CORS ENABLED
        User model/User signup route (POST)
        Password hashing

        FE:
        Request(POST), mode CORS
        User input/submit in a component

    Login

        BE:
        CORS ENABLED
        User model/User login route (POST)
        Password compare

        FE:
        Request(POST), mode CORS
        User input/submit in a component

Order of operations

Step 1: Basic UI
Step 2: Signup
Step 3: Login
