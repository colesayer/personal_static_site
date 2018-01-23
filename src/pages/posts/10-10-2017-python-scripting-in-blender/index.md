---
path: "/python-scripting-in-blender"
date: "2017-10-10"
title: "Python Scripting in Blender"
img: "http://res.cloudinary.com/dwnehv6tb/image/upload/v1516666004/3D-Window_BBB_Blender_3_1_rgzanj.png"
---

If you’ve never heard of it, Blender is an amazing, free, open source, full featured 3d software toolset. I’ve used it for 3d animation, 3d printing, and design.

You might use it to, say… painstakingly build a 3d model of yourself with a functioning skeleton and then animate it using motion capture data from Carnegie Melon’s MOCAP library.

<img src="https://media.giphy.com/media/l4EpgJvud8PWq1eYE/giphy.gif" width="100%"/>


Or maybe you have more pressing things to do with your time.

One of the interesting features of Blender is its Python interface, where you can script things like task animation, tool sets, and game logic. One of the areas of Blender I am keen to explore is its game engine. It’s actually one of the reasons I became interested in coding in the first place.

This will be a brief tutorial on setting up Blender for scripting, while future posts will dive more in depth into programming the game engine.

So the first thing you want to do is download the latest stable release of Blender from https://www.blender.org/. At the time of writing this, I’m using version 2.79.

Once you’ve downloaded and copied to your applications folder, right click on the Blender program, select Show Package Contents / Contents / MacOS and then right click on the blender exec file and make an alias. You can put this alias in an accessible location. Double click on the executable to open Blender through the console.
</br>
</br>
<a href="http://res.cloudinary.com/dwnehv6tb/image/upload/v1515218730/4_xt4zwm.jpg">
<img src="http://res.cloudinary.com/dwnehv6tb/image/upload/v1515218730/4_xt4zwm.jpg"
     alt="blender exec"
     style="width: 100%" />
</a>
</br>
</br>
Once in Blender, you can change the layout to the scripting default. This makes available a text editor and python console as well as the usual 3d view.
</br>
</br>
<a href="http://res.cloudinary.com/dwnehv6tb/image/upload/v1515218730/2_tya4ul.jpg">
<img src="http://res.cloudinary.com/dwnehv6tb/image/upload/v1515218730/2_tya4ul.jpg"
     alt="blender exec"
     style="width: 100%" />
</a>
</br>
</br>
If you hover over the console and press ctrl + up-arrow, you can maximize the partition. This is a fully functioning Python console. Observe while I print yet another “Hello World” to yet another console!!
</br>
</br>
<a href="http://res.cloudinary.com/dwnehv6tb/image/upload/v1515219398/5_sg4hcw.png">
<img src="http://res.cloudinary.com/dwnehv6tb/image/upload/v1515219398/5_sg4hcw.png"
     alt="blender exec"
     style="width: 100%" />
</a>
</br>
</br>
In the text editor, hit the `+New` button to create a new text block. Type the following to implement your first Blender related script:

```
import bpy
#makes available everything to do with blender
bpy.ops.object.duplicate()
```

Click run script and look in the 3d viewport. Right click on the cube and press `g` to grab. You duplicated the model!
</br>
</br>
<a href="http://res.cloudinary.com/dwnehv6tb/image/upload/v1515219825/6_a8n44e.png">
<img src="http://res.cloudinary.com/dwnehv6tb/image/upload/v1515219825/6_a8n44e.png"
     alt="blender exec"
     style="width: 100%" />
</a>
</br>
</br>
You’ll notice the bar along the top of the window above the text editor and 3d viewport contains the log. This you can also maximize with `ctrl + up-arrow`:
</br>
</br>
<a href="http://res.cloudinary.com/dwnehv6tb/image/upload/v1515219923/7_icygdf.jpg">
<img src="http://res.cloudinary.com/dwnehv6tb/image/upload/v1515219923/7_icygdf.jpg"
     alt="blender exec"
     style="width: 100%" />
</a>
</br>
</br>
(The red line was from a previous error when I misspelled the word “duplicate” :/)

**Back to the console!**

The `import bpy` command gives you access to everything Blender related in Python.

If you type in `bpy.` and hit `command + space-bar` you will see the list of commands for `bpy`.
</br>
</br>
<a href="http://res.cloudinary.com/dwnehv6tb/image/upload/v1515220288/8_wvbug5.png">
<img src="http://res.cloudinary.com/dwnehv6tb/image/upload/v1515220288/8_wvbug5.png"
     alt="blender exec"
     style="width: 100%" />
</a>
</br>
</br>
To return a list of all the models in your scene:

```
models = bpy.data.objects
#assigns a variable models to your list of blender objects
for model in models:
    print(model)
#returns all elements of your models list
<bpy_struct, Object("Camera")>
<bpy_struct, Object("Cube")>
<bpy_struct, Object("Cube.001")>
<bpy_struct, Object("Lamp")>
```

Here you can see we have a camera object, two cubes, and a lamp.

Let’s manipulate the location of our cube object. If I type:

```
bpy.data.objects['Cube'].location = (1,2,3)
```

Our cube moves to the x, y, and z coordinates: 1, 2, 3.

If you type `bpy.context.` and then hold `control + space bar` you will see the all the available bpy context modules:
</br>
</br>
<a href="http://res.cloudinary.com/dwnehv6tb/image/upload/v1515220441/9_ewjrbm.png">
<img src="http://res.cloudinary.com/dwnehv6tb/image/upload/v1515220441/9_ewjrbm.png"
     alt="blender exec"
     style="width: 100%" />
</a>
</br>
</br>
The context modules relate to what the user has access to at that exact moment. i.e. what windows are open and what objects are in the 3d viewport.

If you type `bpy.context.active_object` the console will return to you the object you have selected in the 3d viewport. The context modules will be super important moving forward with scripting in Blender.

In case you missed my dancing:

<img src="https://media.giphy.com/media/l4EpgJvud8PWq1eYE/giphy.gif" width="100%"/>
