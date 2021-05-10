class launcher{
	constructor(body,anchor)
	{
		
		var options=
    { bodyA : body,			 
			pointB:anchor, 
			stiffness:0.005, 
			length:1
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.launcher=Constraint.create(options)

		World.add(world,this.launcher)
	}

  //attaching body to launcher
	attach(body)
  {
		this.launcher.bodyA=body;
	}

	fly()
	{
		this.launcher.bodyA=null;
	}

	display()
	{
    //stroke line
		if(this.launcher.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

      fill("red")
			strokeWeight(1.5);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}