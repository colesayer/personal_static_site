---
path: "/ruby-rand"
date: "2017-09-05"
title: "Ruby Rand(y)"
img: "http://res.cloudinary.com/dwnehv6tb/image/upload/v1516487617/chaos_kxnkjl.jpg"
---

It’s likely if you’ve started coding that you’ve come across the need to randomly generate a number. With Ruby’s Random Class you can do just that:

<img src="https://media.giphy.com/media/xT9DPi61MmrDLzVFzq/giphy.gif" width="100%"/>  

Say you wanted to pick a random number from a range of numbers:

```
Def kind_of_random
  rand(1..10)
end
=> #returns a random number between 1 and 10
```

You can also use rand with an argument of a max value:

```
Def sooooo_roooondom
  10.times.map{ rand(100) }
end
=> #returns an array of 10 numbers all between 0 and 100
```

As a coding noob with no higher level math education, I found the idea of randomness bewildering. How is it possible to programmatically represent something that at its definition has no program?

Well it turns out, you can’t! You can only approximate.

<img src="https://media.giphy.com/media/W8tVTtVKk88ww/giphy.gif" width="100%"/>  

According to the Ruby documentation, the Random class gives you access to the language’s PRNG, or Pseudo Random Number Generator. “The PRNG produces a deterministic sequence of bits which approximate true randomness.” Algorithms are never TRULY random.

There are, however, some really interesting tools available that allow you to generate true randomness. TRNG’s, or True Random Number Generators, rely on physical phenomena to introduce randomness into the computer.

Realrand is a Ruby Gem that culls the following sites allowing you to make your code truly random:

- http://www.random.org — Real random numbers generated from atmospheric noise.
- http://www.fourmilab.ch/hotbits — Creates real random numbers by timing successive pairs of radioactive decays detected by a Geiger-Müller tube interfaced to a computer.
- http://random.hd.org — Gathers its ‘entropy’ or truly random noise from sources including local processes, files and devices, Web page hits and remote Web sites.

With RealRand installed, you can now pick a number one through ten with the satisfaction of knowing that the return value is determined by the complete and utter chaos of the world.

```
require 'random/online'

generator1 = RealRand::RandomOrg.new
#specifies which TRNG
puts generator1.randbyte(5).join(",")
=>#generates 5 random bytes (number between 0-255)
puts generator1.randnum(1, 1, 10).join(",")
=> #picks a random number 1-10
```
