# Ruby program to count number of even numbers and odd numbers in the array 
puts("Hi i'm anand");
array = [1, 2, 4, 2]
puts("the number of EVEN elements in the array are ");
puts(array.count { |x| x % 2 == 0 });
puts("the number of ODD elements in the array are ");
puts(array.count { |x| x % 2 != 0 });
