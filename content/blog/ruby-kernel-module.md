---
title: "The Kernel module in Ruby"
description: "The Kernel module in ruby can be seen as a core component that provides essential methods for Ruby Objects."
slug: "ruby-kernel-module"
draft: false
datePublished: "2023-09-24"
dateModified: "2023-09-24"
---

# The Kernel module in Ruby

When hearing the word Kernel someone from system administration world like me may think it is referring to the famous Operating System kernel Linux. That is exactly what I thought when I read about it for the first time. The fact is it is just a ruby convention, not directly related to the operating system kernel. Let’s see what it means in Ruby

As the word `kernel`, or Linux itself in an **Operating System**, refers to the central component of the operating system that provides core services and functionalities, the Kernel module in ruby can be seen as a core component that provides essential methods for Ruby Objects.

```ruby
class Movie; end
print Movie.ancestors
# Output
# [Movie, Object, Kernel, BasicObject]
```

As you can see in the example above, the Kernel is part of the ancestor chain of the Movie class. Does that mean the Kernel is the super class of the Object class? No, the ancestor chain not only shows classes and super classes but also modules. In this case the Object class included the Kernel module and that’s why it is listed in the ancestor chain.

Methods defined in the Kernel module often provide low-level functionality, such as interacting with the operating system, handling exceptions, or perform common utility operations. print, puts, and gets are few of the common utility methods provided by the Kernel module.

```ruby
Kernel.private_instance_methods.grep /^pr/

# Output
[:printf, :print, :proc]
```

Even though these Kernel methods are private methods, we can still execute them. That is because in Ruby, it is crucial to emphasize that every line of code is executed within the scope of an object. Even in IRB we execute lines of code in the main Object. You can execute self and see that. Note that in Ruby private methods can only be called on implicit receiver. You’ll get an error if you try to call private methods, giving it self or any object as a receiver.

Since the Kernel module is included in the Object class, all methods from the kernel module are accessible to all Ruby objects. This feature allows you to leverage [Monkey Patching](https://wuletawwonte.com/2023/09/21/open-class/), where adding methods to the Kernel module automatically makes them available to all Ruby objects.

Here is an example of a Ruby library leveraging Monkey Patching the Kernel module. The awesome_print gem prints Ruby objects on the screen with indentation, color and other variations.

```ruby
require "awesome_print"

my_object = {name: "Wuletaw Wonte", country: "Ethiopia"}
ap my_object

# Output
{
    name: "Wuletaw Wonte",
    country: "Ethiopia"
}
```

You can call **ap** from anywhere because it is added to the Kernel module in the gems source code.

```ruby
# gems/awesome_print-1.1.0/lib/awesome_print/core_ext/kernel.rb
module Kernel
  def ap(object, options = {})
    # method code ...
  end
end
```
