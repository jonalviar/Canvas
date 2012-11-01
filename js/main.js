
$(window).load(function(){
	app.module.init()	
});

var app = {};
app.module = (function () {	
	
	//Transitions
	function transition(shape, target, easing){
		target.show();
		shape.on("mouseover", function(){			
			target.transitionTo({
				x: 0,
				y: home.getHeight(),
				duration: 0.3,
				easing: easing
			});
		})	
		
		shape.on("mouseout", function(){
			target.transitionTo({
				x:0,
				y:-50,
				duration: 0.3,
				easing: easing
			});
		})	
	}
	
	var stage = new Kinetic.Stage({
      container: 'canvas',
      width: $(".hero-unit").width(),
      height: 200
    });

    var layer = new Kinetic.Layer();  
    var subNavLayer = new Kinetic.Layer(); 
	var homeGroup = new Kinetic.Group()

    var home = new Kinetic.Text({     
      stroke: '#555',
      strokeWidth: 2,
      fill: '#ddd',
      text: 'Home',
      fontSize: 14,
      fontFamily: 'Helvetica',
      textFill: '#555',
      width: 100,
      padding: 10,
      align: 'center'                
    });
            
    var subNavHome = new Kinetic.Text({     
      // y: home.getHeight(),
      stroke: '#555',
      strokeWidth: 2,
      fill: '#ddd',
      text: 'Nav 1',
      fontSize: 14,
      fontFamily: 'Helvetica',
      textFill: '#08C',
      width: 100,
      padding: 5,
      align: 'left',               
    });
       
    var about = new Kinetic.Text({     
      x:100,
      stroke: '#555',
      strokeWidth: 2,
      fill: '#ddd',
      text: 'About',
      fontSize: 14,
      fontFamily: 'Helvetica',
      textFill: '#555',
      width: 100,
      padding: 10,
      align: 'center'                
    });
    
    var contact = new Kinetic.Text({  
      x: 200,   
      stroke: '#555',
      strokeWidth: 2,
      fill: '#ddd',
      text: 'Contact',
      fontSize: 14,
      fontFamily: 'Helvetica',
      textFill: '#555',
      width: 100,
      padding: 10,
      align: 'center'                
    });
    
    // Add nodes to group
    homeGroup.add(subNavHome)
    homeGroup.add(home)  
    // init transition  
    homeGroup.on("mouseenter", function(){    	    	
    	transition(homeGroup, subNavHome, "ease-in-out")    	
    	layer.draw()    	
    });
                     
	function build() {
		// add the shape to the layer	   
	    layer.add(homeGroup);
	    layer.add(about);
	    layer.add(contact);			   
	    // add the layer to the stage
	    stage.add(layer);
	    //stage.add(subNavLayer);	   
	}	
	return{			
		init: function () {
			build()		
		}		
	}
}());