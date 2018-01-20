---
path: "/drawing-in-react"
date: "2017-11-09"
title: "Drawing in React"
---

I wanted to check out the `<canvas>` element in JS and see how it might be utilized in a React environment. There are some supposedly great libraries like Konva.js and its sibling React Konva for drawing complex graphics on canvas, but then I read arguments for using an `<svg>` element instead, which deals better with Reacts component lifecycles and, because its vector based rather than rasterized, doesn’t pixelate if you scale up.

**Data Structure for React**
</br>
</br>
<a href="http://res.cloudinary.com/dwnehv6tb/image/upload/v1515225386/1_pc2m1i.jpg">
<img src="http://res.cloudinary.com/dwnehv6tb/image/upload/v1515225386/1_pc2m1i.jpg"
     alt="blender exec"
     style="width: 100%" />
</a>
</br>
</br>
The canvas has a state isDrawing with a default of false, when you start drawing in the app this will change to true.

We pass a property called lines to drawing, lines will be a list of points on an x and y map. We’ll use immutable.js to handle the lines. Immutable.js deals with persistant immutable data structures. It’s a really interesting library worthy of its own blog post. Immutable makes it so that when you alter a collection with something like push, it automatically makes a copy of the array and returns a new array. It was made by Facebook and is somehow optimized in the same way React uses a Virtual Dom to render only necessary changes.

**So to our program:**

First we build our Canvas component with a div drawArea that has two event listeners:

```
import React, { Component } from 'react';
class Canvas extends Component{
  state = {
    isDrawing: false,
    lines: new Immutable.list()
  }
handleMouseDown = () => {
}
handleMouseUp = () => {
}

render(){
  return(
    <div ref="drawArea" onMouseDown={this.handleMouseDown} onMouseMove={this.handleMouseMove}/>
    )
  }
}
export default React
```
The handleMouseDown method listens for the “main” mouse button. It sets the isDrawing state to true and pushes the coordinates of the mouse event to the array of lines.

```
handleMouseDown = (event) => {
    if (event.button !== 0) return
const point = this.relativeCoordinatesForEvent(event);
this.setState(prevState => {
      return {
        lines: prevState.lines.push(new Immutable.List([point])),
        isDrawing: true,
      }
    })
  }
```

Since those coordinates start on the top/left of the browser and not our DrawArea, we will subtract the `top` and `left` position of the event relative to it’s coordinates on the page. The `getBoundingClientRect()` function returns the size of the drawing area and its position relative to the viewport.

```
relativeCoordinatesForEvent(event) {
  const boundingRect = this.refs.drawArea.getBoundingClientRect();

  return new Immutable.Map({
    x: event.clientX - boundingRect.left,
    y: event.clientY - boundingRect.top,
  });
}
```

Our `handleMouseMove` method pushes the new point to the `lines` state in reference to its previous state. `updateIn()` is a function built into Immutable that returns a copy of the previous state and updates the copy with the specified value.

```
handleMouseMove = (event) => {
    if (!this.state.isDrawing) {
      return;
    }
  const point = this.relativeCoordinatesForEvent(event);
  this.setState(prevState =>  ({
      lines: prevState.lines.updateIn([prevState.lines.size - 1],     line => line.push(point))
    }));
  }
```

At this point we have the canvas set up, we just need to add the ability to make and display a drawing.

```
const Drawing = (props) => {
    return(
      <svg className="drawing">
        {props.lines.map((line, index) => (
          <DrawingLine key={index} line={line} />
        ))}
      </svg>
    )
  }
```

The `<svg>` element is an XML-based vector image format. It has its own viewport and coordinate system. An example `<svg>` might look like:

```
<svg>
  <path stroke="black" d="M 0 0 L 200 100" />
</svg>
```

which renders a black line from coordinates 0, 0 to 200, 100.

In the next functional component, we feed the Immutable list state from our Canvas, through Drawing, and down to its child the DrawingLine component. It interpolates the lines prop into paths.

```
const DrawingLine = (props) => {
  const pathData = "M " + props.line
    .map(p => {
      return `${p.get('x')} ${p.get('y')}`
    })
    .join(" L ");
    console.log("in DrawingLine", pathData)
return <path className="path" d={pathData} />;
}
```

That’s it!

We fire it up and……

<img src="https://media.giphy.com/media/xT1R9S8sHDNhd4YKME/giphy.gif" width="100%"/>
