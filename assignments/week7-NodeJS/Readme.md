## this is a ruby program to calculate number of even and odd numbers in the array

## Dockerfile
```bash
 FROM ruby:2.5
COPY . .
CMD ["ruby","./hello.rb"]
```
## creating an image for my program

```bash
C:\Users\ANAND\Desktop\week7 Node>docker build -t ruby_program .
Sending build context to Docker daemon  67.07kB
Step 1/3 : FROM ruby:2.5
 ---> 7834f5f61ba8
Step 2/3 : COPY . .
 ---> cae89eb94561
Step 3/3 : CMD ["ruby","./hello.rb"]
 ---> Running in 625deac0fba0
Removing intermediate container 625deac0fba0
 ---> 0f1b28f2e6f8
Successfully built 0f1b28f2e6f8
Successfully tagged ruby_program:latest
```

## Ruby Source Code

```ruby
# Ruby program to count number of even numbers and odd numbers in the array 
puts("Hi i'm anand");
array = [1, 2, 4, 2]
puts("the number of EVEN elements in the array are ");
puts(array.count { |x| x % 2 == 0 });
puts("the number of ODD elements in the array are ");
puts(array.count { |x| x % 2 != 0 });
```

## Output

```bash
PS C:\Users\ANAND\Desktop\week7 Node> docker run ruby_sample
Hi i'm anand
the number of EVEN elements in the array are
3
the number of ODD elements in the array are
1
```
