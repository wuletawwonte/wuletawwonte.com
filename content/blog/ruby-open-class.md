---
title: "Open class"
description: "Open Class in Ruby is the technique where you can define a class again to add or overwrite its methods dynamically at runtime."
slug: "ruby-open-class"
draft: false
datePublished: "2023-09-21"
dateModified: "2023-09-21"
---

# Open class

Do you wonder what would happen to a code in a class definition in Ruby? For example, what would be the output of the following code?

```ruby
class Movie
  puts "Hello there"
end

# Output
Hello there
```

One may think because the “puts” code is outside any method, so it wont get executed. But the fact is, in Ruby, there is no real distinction between code that defines a class and code of any other kind. You can put any code you want in a class definition and its going to get executed. Here is another example

```ruby
3.times do
  class Movie
    puts "Movie class"
  end
end

# Output
Movie
Movie
Movie
```

Open Class in Ruby is the technique where you can define a class again to add or overwrite its methods dynamically at runtime. That means if you write a code that defines an already existing class Ruby would reopen the existing class and modify it. It is sometimes called Monkey Patching.

Ruby allows Monkey patching even on standard Ruby classes like String, Numeric or any other standard class. For example I can add palindrome method in the String ruby class to check if a string reads the same with its reverse.

```ruby
class String
def palindrome?
self == self.reverse
end
end

puts "wuletaw".palindrome? # false
puts "rotator".palindrome? # true
```

As cool as this may seem, however, monkey patching does have a dark side. If you need to Monkey patch, like any other global modification, you should do it with care. Because, It can make code harder to maintain, introduce unexpected behavior and make it more difficult for other developers to understand.

To minimize the dangers of Monkey patches, its always a good practice to check methods of the class before adding a new one. Because, there is a high chance of inadvertently overwriting an existing method which may have been used in other part of your code.

There is a safer alternative to Monkey patching which is using Refinements. I will write about that in a separate article soon.
