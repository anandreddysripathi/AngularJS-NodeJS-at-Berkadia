## This project is about implementing Microservices using API Gateway 

## This is how it works

1)listens to localhost:1000 with user and password parameter using the URL, localhost:1000/login/user=username&pass=password

2)localhost:1000 listens to localhost:2000 which validates the password

3)if the password is 1998, then localhost:2000 listens to localhost:3000, which gives the response on type of user.

4)if password is not 1998, then microservice localhost:3000 will not be executed.

5)based on the user type , appropriate content will be displayed in localhost:1000 
