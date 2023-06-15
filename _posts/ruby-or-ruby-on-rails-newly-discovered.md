# ruby OR ruby on rails newly discovered

These are the things I discover while working at Simplero. Most of the things I put here are just a code pattern or maybe some new syntax on the language it is grouped under. 

## Ruby

- Alias method
- hash_variable.delete(:symbol) : used to delete a key-value pair from a hash instance and it returns the deleted value.
- an_array.flatten : returns a new array that is one-dimensional and extracts any array inside.

```ruby
my_array = [1,2,[4,5,[9,6]],8]
print my_array.flatten // [1, 2, 4, 5, 9, 6, 8]
```

- & : is used to convert a method into a block.

```ruby
my_array = [ "name", :name, 4, "true", false]
my_second_array = [ "name", :name, 4, "true", false]

my_array.map(&:to_s) // ["name", "name", "4", "true", "false"]
my_second_array.map { |element| element.to_s  } // ["name", "name", "4", "true", "false"]
```

- !!variable_name : In Ruby, the double exclamation mark (`!!`) is a way to convert a value to a boolean value. When you use `!!` in front of a variable or expression, it coerces the value to a boolean, which can be either `true` or `false`.
- detect : is a ruby method that is used to find the first element in an array or enumerable object that matches a certain condition. It returns the first element for which the block returns true, or nil if no element matches the condition.

```ruby
numbers = [1, 3, 4, 7, 8, 9]
first_even = numbers.detect { |n| n.even? }
puts first_even # Output: 4
```

## Ruby on rails

- anything.presence : a ruby on rails method that returns the content if present, otherwise returns nil. It’s often used to avoid having to write code like

```ruby
if !string.nil? && !string.empty?
```

- bang method (!) : In Rails, the exclamation mark (!) at the end of a method name is a convention used to indicate that the method is a "dangerous" or "destructive" method that modifies its receiver in-place or has other side effects. It is also known as a "bang" method.

 

```ruby
def delete!(record)
  record.delete
  record.destroy
end
```

- class_names() : is a method in Ruby on Rails that is used to generate a string of CSS class names based on the given arguments. The class_names() method is commonly used in views to generate the CSS classes for HTML elements. Here's an example usage:

```ruby
# app/views/posts/show.html.erb
<%# Assuming @post is a Post model instance %>
<div class="<%= class_names('post', 'show') %>">
  <h1><%= @post.title %></h1>
  <p><%= @post.body %></p>
</div>
```