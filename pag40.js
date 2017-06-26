(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1160,
	height: 786,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/luz.jpg?1498510161632", id:"luz"},
		{src:"sounds/bien.mp3?1498510161632", id:"bien"},
		{src:"sounds/mal.mp3?1498510161632", id:"mal"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.luz = function() {
	this.initialize(img.luz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1160,786);


(lib.Símbolo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAsECIAAABIjFjFQgXgaAAgjQAAgpAggcIDDjCQAVgSAcAAQAfAAAWAWIAGAFQASAWAAAdQAAAcgSAVIifCZICWCVQAZAXAAAhQAAAdgUAVIgFAFQgVAVgfAAQgfAAgXgXg");
	this.shape.setTransform(-4.7,-46.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F49723").s().p("AgCAAQAEgBADgCIgDADIgDAEQgGgEAFAAg");
	this.shape_1.setTransform(32.8,-12.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F49723").s().p("AACgCIACACIgHADQADgFACAAg");
	this.shape_2.setTransform(44.5,-33.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F49723").s().p("AgEgCIAKADIgLACQAEgCgDgDg");
	this.shape_3.setTransform(-38.5,-46.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F49723").s().p("AgCABIAFgDIgDAFg");
	this.shape_4.setTransform(-37.5,-45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F49723").s().p("AgFAFQACgBgDgEQgEgEADgBQAEAFADgDQAEgFAFAHQgCAGgDABIgJgBg");
	this.shape_5.setTransform(23.1,-85.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F49723").s().p("AAAgIIADAAIgFARg");
	this.shape_6.setTransform(7.2,-86.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F49723").s().p("AgEABQAEgCAAgCQAIgCgEAFIgEAFQgGgBACgDg");
	this.shape_7.setTransform(-9.7,-89.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F49723").s().p("AgCAAIACgFIADAKIgFgFg");
	this.shape_8.setTransform(-12.7,-88);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F49723").s().p("AAAgCQABgBACABQABAAAAAAQABABAAAAQAAABAAAAQAAAAAAAAIgJAEQgBgCAFgEg");
	this.shape_9.setTransform(-8.6,-86.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F49723").s().p("AgDAAIAIgCQAAABAAAAQAAABAAAAQAAAAgBAAQgBAAgBAAIgGADQAAgBAAgBQABAAAAgBQAAAAAAAAQAAAAAAAAg");
	this.shape_10.setTransform(-19.9,-82.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F49723").s().p("AgCgBIAEgCIABAHg");
	this.shape_11.setTransform(-23.7,-80.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F49723").s().p("AgBADQABAAAAAAQAAAAAAAAQAAgBgBAAQAAgBAAgBQAAAAgBAAQAAgBAAgBQAAAAABgBQAAAAAAAAQAGgIgDALQgCAHAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQgBgBAAgBg");
	this.shape_12.setTransform(-15.7,-79.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F49723").s().p("AgBAAIADgBIgCACIAAABIgBgCg");
	this.shape_13.setTransform(-23.8,-78.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F49723").s().p("AgEAAIgBAAIAFgEQACgBAEAEIgGAGIAAAAQgBAAgDgFg");
	this.shape_14.setTransform(-22.8,-78.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F49723").s().p("AgCAAIACgBQAAgBAAAAQABAAABAAQAAAAAAAAQAAABAAAAQAAABgCADg");
	this.shape_15.setTransform(-29.2,-76.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F49723").s().p("AAAABIgDgBQAEAAACgBIgDADIAAgBg");
	this.shape_16.setTransform(-19.7,-77.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F49723").s().p("AgSHFQgLgGgHAFIAJgMQgDAAgJAFIABgJQgFAFgGAAIgKgBQgGgDgDABQgEABgEAHQAEgJgHABQgMADgCgDQAHgFARACQANABACgIQgDgDgFABQgFABgDgDQAJgEADgEQgKgHgNAFQgNAIgGABIAVAAQgDAIgFAAQgGgBgEAFQgEgEgJAAQgKAAgCgDIAEAAQgNgDgGgPQgHgQgBgBQgGgDgJACQgJACACAGIAJAFQAMAGgLAJQgBgJgFgDQgDgCgJABQgJAAgFgCQgJgDgGgJQAIgBgBgIQgBgHAGAAQgIgDgFABIgJAEIgBgIIgRAIQgDABgRgDQAGAAgCgIQgDgHAEgBQgHgFgLAAQgLgGgGgLIgGgFQgDgDgJgEIgBAFQgKgEgMgIIgLgIIgcgeIgRgTIAEALIgKgKQgJgJgBgHIAGAFQAJgHgEgLIgIACIADgGQgDgFgEAFQgDAEgEgFQAGgGgDgJQgBgFgGgMQgGgNgBgFQgCgJAEgGQgJAAAEAKQAEAKgIgBIABgGQABgEgBgEIgIAGQgDgLgCgMIgDgUIgCgSQgCgLgEgJIADABQABgQgMgFQACgCADACQAEACABgDQgPgIAJgTIAFgOQABgGgGgDQAHAAAIgEIANgIQAPgJAJAFIgDgHQAHABABALQAAAMAHABIgCAEIgIATQAMABABgDQACAKAGgJQgFAOAAAHQgBAHABANQABAOALAYIASAkQALAVAEAPQADADAEgHQgEAJAHgBIALgBIgFAVQAEABADgDIAFgFQAKAMALAUIAFAHQACAEAEADQAHAHAIACQAAADgFAGQgDADACAFQABgIAEAAQADAAAGADIAJAEQAEAAABgDQgBAGADAFIAGAJQAEAFAAADQAAAGgGAHQAGAEAEgFQAEgEgCgEQAKAHAFACIAIACIAJgBQACAEAbALQAbAJADAOQgCgIADAAIALgBIgEgNIAQAFQABAAAAAAQABAAABAAQAAABAAAAQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAABAAABQAAAEADADQAHACAFgDIAIgHIgBgCIAHAAIgGAFQgIAHAKAEQABgDAGgEQAHgGADAGQgGgBgCAEQgBAEADADIANADIgDgPIBEAIQAKABAFgBIAegDQABAGANgCQAOgBABAKIgCgBQgIADAIAFQAIAEAGgDQgEgBACgLQACgJgLACIAMgNQgBgNAGgFQAFgEALAAQAIAAALgCQAMgDAFgGQgBACABADQAGgIAGgDIAPgGQATgDAAgEIAHAHQAEgSAEgFQAEgEAOgIIACADQAAABAAAAQABAAAAAAQABABAAAAQABAAAAAAQgBgJABgFQACgHAIgGIACADIAOgSQAIAHAEgFQADgDACgLQADgLAEgEQAFgFALAEQgDgGABgLIADgQIAEAAQgFgJAKgIIAJgGQAEgEABgDQAAgFgEgBQgDgBgGABQAKgEgDgRIgDgMQgBgGACAAQADgEAGABIALADQAAgGgMgDQgIgDAIgIIABAFQAAAAABAAQAAABAAAAQAAAAABAAQAAAAAAAAQABgCAVgGQASgGgDgFIgHAEQgBgFADgFIAIgKQAFgFABgCQABgEgHgCIgKAAQAFgGABgEIAAgFQgCgFAGgLIABAAIADgKQACgGgKgDIgBAEQgBgGAAgVQgBAAAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBgBAAAAQAAgBAAgBQABAAAAgBQAAAAABgBQgIABgCgPIAAgTQACAGAEgBIAHgFQgJgDgBgDQgCgEAEgHQgPADgIgBQgLgCgDgJIAEADQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAQADgBgGgFQAAAAABAAQAAAAABAAQABAAAAAAQABAAABAAQAEABADgCQgJgDgCgJQgCgMgEgFQAEACADgCIAFgGQgFACgBgDQAAgCABgGQABgEgBgBQgBgBgGAEQAAgWgRgaIgLgUQgFgJACgHQACgEgGgCIgKgFIAHgEQgLgBgGgDQgGgDgLgCQAIAAACgEQACgEABgJIgUADIAGgKQgHAAgFgKQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAIABgCIgDACQgGADgLgDIgJgCQgFgBgCACQADgJgHgCQgGgCADgHIgJABQgBAGgDADQAAABgBAAQAAABgBAAQAAAAgBgBQAAAAAAgBIgCAAIAEgJQgIgBgFgDIACAGIgDgGIgBgBIABAAQgCgGgGAAQgDgHgHgBIgPgCQgJAAgGgCQgHgCgDgJQAAABABAAQAAABAAAAQABABAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAgBQAAAAABAAQgFgCgOgLQgLgJgHAEIgBAJQgUABgJgCIgDAKQgDgCgIAAIgOAAIgNgCQgGgDgCgHQgCAFgHgDQgKgEgEACIgCgIQgJgCgMAFQgHgFgIAAQgFgBgJADIgZAKIAAgCIgQAKQABgDgBACQgEAGgDAAQgHAIgNgEIgLADQAGgGgFgEQgKgHAAgBIgCAEIgCAFQgCgBABgEQAAgBAAAAQgBgBAAAAQAAgBgBAAQgBAAAAAAQgBACgIAIQgHAHAAAGIAHAEIAAAEQgFABAAABIADAFQgGgDgJABQgGAAgHgDQAGAEgJAFQgLAIAIAFQgIgEgBACQgBABgGgEQAHgCAEgKIAGgRIgMgDQgBgJALAAIAAAAQAMgBAAgCQAAADgFABQgEABgCgBIAIAIQADAAAFgDQAEgCACgEIAJgPQgFAAADgGQADgIgEgCIgGAEQgDgBABgFIAEgIQAIAAAhgKQAYgIAGAFQgEgCgFADQgEACgCADIALADQgDABgKgCQgJgCgGAFIADANQACAKAHAEQAIABAEgDQADgCADgHIAHgMQAFgFAJgBQABgBAAAGQACAFAIgEQAMgHAIgOQAIgNgCgMQgLAIgEACQgJAEgDgIIAOgJQAIgFAAgFQAFAHgHACQgHADAGAFQAGgCAFgHQgCADAEAEIAGAFQAGAAATACIAXAFQADAGgBAEQAHgDAJgLQAJgNgCgGQAFAAAHAEQAFADAFgCQgGgHADABQAIADACgHQAGAAAAAEQgBAFACACQAHgGABgDQACAFgIANQgJANADAHQACAEAKAMIAJALQAGgJAGgZQAFgbgDgMQACgEAEAHQAFAJACAAQADAGAFABQACAAAGgBIAJgDQAEAAADADIgKADQAAADAJABQAKABADgCIgIALQgHAKACAEQAFADAJgBQAIgBAHgCQAQgGAEgLIgSgBQgGAAgGAAIgFABQACgGAMgBQANgBACgGIAaARIgJgCQgGABABAFQAHADABACIACAHQgRAFgVANQgVANgMALIAPgCIAAAIQALgBAYgRIAdgVQAFAFgGALQgFAKgGADQAIAGASgJQASgIAIAJIgDgJQACAAAJAIQAHAGABgCQgBAGgEAHQgDAHgEABIAbgEQgCAAgGAIIgJAJQADAEALgHQAJgGAAgEIACAQQABAEgBAMQADABAFgIQAGgIgBgDQALADAEALQgLgDgOAPIgWAXIBCgMIgLAGIgKAGQAKgGASAQQAJAJAFAHIAIAQIgBgCQgGgBADAJQACAFACADQgBAGAEACIAKACQAHABADACQAEADgDAGQgFgPgMAIQAFADAIANQAIAJAJgHIABAJQAAAFgHACIAUATQgCgBgDACQgDABABAFQgBgGgLgLQgIgJAFgGIgOAHQgGAEgIgBQAKAOASAKIAeARIgCAaIAFAAIgNAHIAGAEQgBABgEgBQABAEADABQgIACgQgFIAGgIQgQgFgDAIIADADQgKgDgCADIAKAPIAJgKQAMAJAFACQAKAFAFgJIgGAQQALAKADAEIALASQgCAAgFgBQgEgBgCACQAKAIgLAPIgGAKQgCACAFABQACAHAGACQAGABACADQgFgBAAACIAJAKQgBACgEgEQgDgCgDAFQAFAOABAJQABALgFAKQAAALAKgEQAJgDgCAIQgKABgDABQgIADgCAHIAHAIQAEADABAHIgNgEIgCAMQgCAEgGgCQADAKgGAHQABAKAOgFQAIgCALgGQgEADgKAMQgGAHgKACIABgNQgMAJAEANQABAFgCABQgDADgKAAQAEgGgCgHQgCgHgGACIABAOQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAgBQAAgBAAAAQAAAAgBAAQAAAAgBAAQAAAAgBABQACALAEAHIgBAAIgHATIgBgCQAAAAgBAAQAAgBgBABQAAAAgBAAQAAABgBABIgCAQQAAgEgDABQgEAAgEAEQgHAHAIAOQAGALgLADQAAgBAAgBQAAgBABAAQAAgBAAAAQABgBAAAAIgJADQAHAFgCAJQgBAFgHAKIgJAOQgCAIAGAGQgKABABgEIAEgUIgOAEIAEgFQADgDABgDQgMACgEANQgCAEgBARQgCAAgHgHQgGgFgFAJQgIALAKAEQAKADgEAFIgRgDQgCAGgFAHQgDADgHADIgVALQgDADAAAEQgJACgLAPQgKAOgHACQABgDgGgBIgIgDIgRARQAFgFAAgFIgDgMQgEACgCAEIgFAGQADgHgFgCIgRAVQADABAEgBIgLAGQgJAEgGgCIABgKQAHAEACgEQACgCABgHQgIADgBgBQgBgEgDgBQgIADgBAHQgCAGAEAFIgPACQgGABgIAIIAAgLIgLAGIAHgPQgIgBgDADQgBACAAAFQgBAFgCACQgCADgKAAIgBgKQgCABgIAKQgEAHgGgHQgDAEAGAFQAGAFgNADQgFgFgPgDQgFADAGAEQAEACADAAQgJACgHgEQgEgCgGgIQgEgGgCgCQgGgCgKAEQADACABAEIgBAGQgBAHAOgBIgEABQgFAAgJgEgAhoFjQAAAAAAAAQAAAAABAAQAAAAABAAQABAAABAAIgCgDIgCADgAGZCSQgCACAGAFQAFAAgDgNIgGAGgAGUhqQAFgJgGgCQgBAFACAGgAh/lgIgEgBIAAAAIAEABg");
	this.shape_17.setTransform(0,-45.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F49723").s().p("AAAgJQABAFACACQADACAJgBIgdALg");
	this.shape_18.setTransform(31.8,-76.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F49723").s().p("AADgBIABABIgHACIAGgDg");
	this.shape_19.setTransform(-7.5,-3.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F49723").s().p("AgBAAIADAAIgCABg");
	this.shape_20.setTransform(-16.6,-79);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F49723").s().p("AgGAAQAGAAAEgBIADABQgDACgEAAQgBAAgFgCg");
	this.shape_21.setTransform(-4.5,-82.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F49723").s().p("AgFAAQABgDAEACIAGAEQgGAAgFgDg");
	this.shape_22.setTransform(-5.9,-82.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F49723").s().p("AAAAAIgBgEIACAEQABACgDADg");
	this.shape_23.setTransform(25.3,-7.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F49723").s().p("AgDgBIAHABIgCACIgFgDg");
	this.shape_24.setTransform(39,-55.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F49723").s().p("AgBAFIgBgMQACAFADABIgDAGIAAADQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_25.setTransform(18,-76.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F49723").s().p("AgBgCIADAAIAAAFg");
	this.shape_26.setTransform(-22.7,-75.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F49723").s().p("AgBAAIABgGIACANg");
	this.shape_27.setTransform(-24,-74.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F49723").s().p("AgDACQgCgCAFgCIgEgCIAJgBIgFAJIAAACIgDgEg");
	this.shape_28.setTransform(-31.4,-71.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F49723").s().p("AgKAEIgBgEIACABQAAAAABAAQAAABABAAQAAAAAAAAQABgBABAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAgBAAAAIgBgDQAHAAAKADIgFABQgHAAgDACIAAACIgEABQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_29.setTransform(-34.6,-67.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F49723").s().p("AAAAFQgEADAAgHQgBgCgFAFIgBgHQgBgFAEgEQAGACACAGIABAJQAHgGAEgCIgIAMIAAABIgGADIACgIgAABAGIACACIABgCIgBgBIgCABg");
	this.shape_30.setTransform(-27.5,-73);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F49723").s().p("AgHAGIACgDIAAABIALgIQADAEgCAGQgKgCgEACg");
	this.shape_31.setTransform(-25.4,-74);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F49723").s().p("AgFAMQgMgKACgGQAIAAAEgGQADgHgDgFQABAAAAAAQABAAAAAAQAAABABAAQAAABAAABIAAADIAFgKQAFAFgCANQgBAJAFABIgJgCQgDAAgDAHQAAAHAGgBIANgBQgEAJAEAGQgNgGgIgJg");
	this.shape_32.setTransform(-26.5,-77.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F49723").s().p("AAAACQAAgCAAgCIABAFg");
	this.shape_33.setTransform(-29.6,-69.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F49723").s().p("AAAgCQAAgBAAAAQABAAAAAAQAAAAAAABQABAAAAAAQgCACgBAEQgBgFACgBg");
	this.shape_34.setTransform(-29.3,-70.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F49723").s().p("AgBAGIgDgEQAEgFAFgCQgFAFABAFIgBABIgBAAg");
	this.shape_35.setTransform(-28.5,-70.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F49723").s().p("AAAgBIABABIgBACg");
	this.shape_36.setTransform(-32.1,-67.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F49723").s().p("AgCAAIAFgEIAAAJQgBgCgEgDg");
	this.shape_37.setTransform(-32.6,-67.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F49723").s().p("AAAAAQgDgCgCgCQAGgDACAFQACACABAHQgCgGgEgBg");
	this.shape_38.setTransform(-34.4,-65.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F49723").s().p("AgEAAIACAAIAHAAIgEABIgFgBg");
	this.shape_39.setTransform(-30.5,-67.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F49723").s().p("AAAAFQgEgCgBgDQAJAAABgHQABALgCAEQAAgCgEgBg");
	this.shape_40.setTransform(-27.4,-69.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F49723").s().p("AABgDIAAAHQgEgCAEgFg");
	this.shape_41.setTransform(-32.1,-66);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F49723").s().p("AgEgCIAJACQgDAAgFADg");
	this.shape_42.setTransform(-31.4,-65.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F49723").s().p("AgBAFQgEgBACgIQABAEACAAIAFgCQgCAHgDAAIgBAAg");
	this.shape_43.setTransform(-35,-60.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F49723").s().p("AACAEIAAAAgAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQgCgCABgBIABAAIABAHIgCgEg");
	this.shape_44.setTransform(-34.3,-61.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F49723").s().p("AgEgDQAEAAACAAQADACgBADQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAABgBAAIgDACg");
	this.shape_45.setTransform(-33,-61.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F49723").s().p("AAAgCIABACIgBADIAAAAg");
	this.shape_46.setTransform(-34.1,-59.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F49723").s().p("AgGALIAFgBQABgDAAgMQAAgLAHAAQgEAEAAAMIAAARg");
	this.shape_47.setTransform(-38.5,-56.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F49723").s().p("AAAADIgCgGIAFAHg");
	this.shape_48.setTransform(-39,-53.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F49723").s().p("AAAABQAAAAgBgBQgBAAAAAAQgBAAAAAAQAAAAAAAAIADAAQADAAABABIgEAAg");
	this.shape_49.setTransform(-37.2,-46.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F49723").s().p("AkiEjQh4h5AAiqQAAipB4h5QB5h4CpAAQCqAAB5B4QB4B5AACpQAACqh4B5Qh5B4iqAAQipAAh5h4g");
	this.shape_50.setTransform(-1.4,-46.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.3,-91.5,90.8,91.5);


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiVEFIgFgGQgUgVAAgdQAAghAYgXICXiUIigiaQgRgWgBgbQABgdASgWIAGgFQAWgWAfAAQAbAAAWASIDDDCIgBAAQAhAdABAoQgBAjgXAbIjFDEIAAgBQgWAXggAAQgfAAgVgUg");
	this.shape.setTransform(2.5,-45.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F49723").s().p("AgBACIgBgFIAFADQgDAEAAAAIgBgCg");
	this.shape_1.setTransform(-24.7,-21.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F49723").s().p("AAAgCIACAAIgDAFQgBgDACgCg");
	this.shape_2.setTransform(-34,-35.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F49723").s().p("AgDgCIAJADIgLACQADgBgBgEg");
	this.shape_3.setTransform(44.3,-44.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F49723").s().p("AgCABIAFgEIgDAHg");
	this.shape_4.setTransform(45.2,-43.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F49723").s().p("AgFAAIAEgHQAAABAAAAQAAABABAAQAAAAAAAAQAAAAABAAQAGAAAAADQgGAAACADQACAHgFAAQgGgGABgCg");
	this.shape_5.setTransform(-20.4,-76);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F49723").s().p("AgBgJIADASIgCABg");
	this.shape_6.setTransform(-9.6,-86);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F49723").s().p("AgDAAIAFgDQAGADgEAAIgEAEQgIgBAFgDg");
	this.shape_7.setTransform(6.4,-83.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F49723").s().p("AAAgFQABAFACACIgFADg");
	this.shape_8.setTransform(9.5,-83.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F49723").s().p("AgEABQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAABgBIAKgBQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgEACIAAABIgEgCg");
	this.shape_9.setTransform(6.5,-86.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F49723").s().p("AgFgCQAAAAABAAQAAAAABAAQAAAAABAAQABAAABABIAGADQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAg");
	this.shape_10.setTransform(18.4,-82.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F49723").s().p("AgCAAIAFgDIgDAHg");
	this.shape_11.setTransform(21.8,-80);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F49723").s().p("AAAAEQgNgCAMgDQANgFgHAGQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBABQgBABAAABQgBAAAAAAQgBABAAAAQAAAAAAAAIAAAAg");
	this.shape_12.setTransform(17.6,-87.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F49723").s().p("AgBgBIACABQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBABIgCgDg");
	this.shape_13.setTransform(24.3,-80.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F49723").s().p("AgDABQgDgBACgEQAQABgJAHIABABIgHgEg");
	this.shape_14.setTransform(23.4,-81.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F49723").s().p("AgCABQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAQABgBADACIgDADQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAg");
	this.shape_15.setTransform(27.3,-75.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F49723").s().p("AgDgCIAHACQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgCADQgBgEgDgBg");
	this.shape_16.setTransform(23.2,-85.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F49723").s().p("ABNHIQAHgIgOgCQgKAUgHgHQAIAAAAgFQAAgEgEgCIgPABIAHAOQgLABgXgBIgPgBIgigGIgRgDIgigGQABgFgPgGQgOgFAFgKIABACQAIABgFgIQgFgIgGAAQACADgIAIQgHAHAMAEIgUAEQgLASgYgRIgSgPQgLgHgKgCQACAAACgCQgKAAgIgHQgIgFgHgHIgKgMQgFgFgCAAIAEgJQgUAAgGgDQgIgEgKgPIADgCQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgKABgFgBQgIgCgHgJIACgCIgTgTQAHgGgEgGQgCgCgMgIQgKgIgDgFQgFgIAHgIQgGAAgKgIIgPgNQABAAAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQgLgBgCgQIAAgMQgBgHgCgDQgHgFgGAKQACgMgOgNIgKgKQgFgFABgCQgBgHAGgCIALgDQgDgHgMADQgIACADgNQAFAGAAgCQABgDAOgRQAMgOgEgDIgFAGQgFgGAJgSQADgHAAgCQgBgEgHAAIgJACIADgNIgBgFQgDgFAFgOIACABQgBgDADgLQABgGgJgDIgCAEQgBgIADgUIgCgFQAAgEACgBQgIgBADgSIAGgVQAAAHAEAAIAIgCQgHgGgBgFQABgFAHgFQgPgFgGgFQgJgHADgNIACAGQAAAAAAABQABAAAAAAQAAABABAAQAAAAABAAQAEgCgEgHQACAAADADQADADADAAQgHgKAGgKQAHgOABgHQABAEAEABIAIgBQgJgEALgIQAFgEAAgBQAAgCgIgBQAJgIAKgQIAQgaIAIgMQAEgHAEgDQAJgJAGAAQAFAAABgHIADgMIAFAGQAAgMADgGQADgIACgMQAAAJAFACQADACAKgBIgCgVIAKAHQABgIAMgFIAAAAIAAAAIAAAAQgCgIAFgLIAGgJQADgEgBgDQAIAFAFgHQAFgHAGAFQABgFACgEQgPgKAKgBIABAAIAHAGQAGgHAGgEIgIgBIAJAAIACgBIgBABQAHABAEgHQAIABAIgFQAFgEAIgJQAJgJAFgCQAJgEAKAEQgDgBgDABQAAAAgBAAQgBABAAAAQAAABgBAAQAAABAAAAQAIgDAUgBQAQgBAFgFIgDgJQAYgOAKgBIgCgKQAFABALgDIASgFQAKgDAIACQAIACAEAHQACgEAMABIARACIACAIQALADAQgFQAQAMATgBIARgBQAKAAAGACIAAACIAXAAQgBABAAAAQAAAAAAAAQAAABAAAAQABgBAAAAQAIgDADACQAGgBAHAEQAHAEAFAGIANAFQgKgBACAHQACALAAACIALgDQAAACgDADQgBAAAAABQAAAAAAAAQAAABAAABQAAAAABABQACgBANACQALACAFgEQABgCgDgGIAEgCQAGAEABgBQABgBABgEQACAIAHAIQAGAGAAAJQABgJALAHQAOAJABgJQAAAJACABQACABgBAHQgFgHgNgBIgVABIAEAMQgHAGgHgKQgGgLgDAAQADgBAEAEQADAEgBADIAEgMQgDgEgFgCQgEgCgGAAIgSABQADAEgHACQgJABACAGIAHACQAAADgEACIgIACQgFgGgLgFIgUgJIgJgEIgIgCQgJgEgBgEQAGAGALgEIgIgIQACAAAJAIQAHAGAHABQAAgCAGgLQAEgIgDgIQgHgHgHAAQgEABgHAEQgIAFgEABQgIACgKgDIACgFQABgGgLAAQgQAEgLAKQgLAKgBANQAZgMABAOIgPAEQgIADgBAFQgDgIAHAAQAGgBgEgGQgEgBgHAGQACgDgDgEIgFgGQgKAAgNgFIgKgDIgNgBQgEgHABgCQgIADgGAMQgHANAEAGQgFABgGgCQgFgBgFADQAHAFgCAAQgIAAAAAHQgFABgBgDQgBgGgCgBQgEAIABADQgEgFADgOQADgPgFgFQgFgGgNgFIgPgFQgBAJAHAaQAIAaAHAKQABAFgGgFQgHgGgCAAQgIgFgGAJIgEAGQgDAEgDgBIAFgJQgCgCgGAFQgHAFAAADIgCgOQgCgLgEgCQgGABgFAGQgFAFgBAIQgFAQAGAJIAPgUIADgDQADAFgGAJQgGAJADAGIgWAHIAFgFQACgFgEgCQgFACgCgBIgHgDIAGgnIAFgpIgKANIgGgFQgJALAAAcQAAAMAEAYQgGABgHgLQgGgKAAgFQgJAFABATQABASgIAEIAIABIgJAHQgGAEACABQgGgCgGgGQgGgFAAgEIABAaIgHgJIgIgKQgEADAGALQAEAJAEABIgOgBQgEABgLgDQgCADAJAGQAIAFADAAQgDAKgJADQACgKgQgOIgXgVIAKAgIAHAVIAEAKQgEgGgMgMQAHAJgJATIgJAPIgIANIABgCQgDgFgGAGQgDADgBADQgJACAIAMQAHANgJACQAIgLgNgGQABAGgFAMQgCALAMACIgGAFQgDACgFgCIADAYIgEgDQgDgBgDAEQADgEgCgOQgBgLAIAAIgPgFQgHgDgEgGQgDARAIASIARAdIgOARIAFACIgPAAIAEAGQgCAAgDgCQAAADADADQgJgBgOgLIAJgEQgLgMgHAGIACAEQgIgHgDACIAEATIALgGQAQAaAMgIIgKAKQAKAOAJARQgCAAgFgBQgEgCgCACQAGAEgCAFQgBADgFAGIgGAIQgBAEAEABQACAFAHABQAGABACADQgFAAAAABIALAHQgBABgFgCQgDgCgDAFIALARQAEAIgCAIQACAJAJgGQAIgGAAAHQgJADgDADQgFAEABAGIAJADQAGABADAEIgNACIADAJQAAAEgGACQAJAFgCAHIgCAHQABADAHgBQADgCgDgDIgEgDQAFADAIgJIALgOQgCAEgBAKQAAAIgHAGIgHgIQgEANAKAFQAEACAAABQAAADgHAHQgCgFgGgDQgFgCgEAEIALAHQAAAAgBABQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBABAAAAQAAABgBABQAIAEAKABIgBAAIAKAPQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAAAAAQgBABAAAAQABABAAAAIAMAIQgDgCgCAEQgBACABAFQADAIAOgCQAMgCgCAIQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAAAIgBAIQAHgFAGADQAEABAGAHQALANAMgJQgCAIgDgBQgIgCgJAAIABAMQgEgGgFgBQAAARAcgCQAAACgHAHQgFAGAIADQAKAFADgJQAEgJAEACIgDAQQAHABADACQAEACAEAEIALAPQADAAADgBQADAFAFABIALABQAOAAADAEQgCABABAGIABAHIATAAQgFAAgEAEIgHAKQAGACAIgDQgHADABAFIAXgFQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAAAIAJABQAHACACAFIgGAIQgBgHgEABQgCABgGAFQAIACgBACQgCAEACADQAGACAFgFQAFgFAAgGQAGAFAEACQAFAAAJgDIgFAKIAKgBIgLALQAGAEADgBQACgBACgEQABgEADgCQAEgBAGACIgCAKQADgBAIgHQAFgFADAHQADgCgDgHQgDgGAKABQADAIALAEQAEgDgEgEQgDgEgCAAQALAAAHAOQAHAOALgGQgCgCAAgDIAAgGQABgHgKAAQAEgCAIAFQAJAFAFgFIgFAMQAEAAAFgGIAAAJQADgFAFgBIAIABQAFAAADgBQADgCABgIQgBAKAGgEQAIgFACACQgEAGgNAEQgMACABAIQACADAFgDQAEgCADACQgIAHgBAEQALAEAKgJIANgOIgRAGQAAgIAEgBQAFgCABgFQAFAEAHgFQAGgFADACIgDACQAKgDANALQAMAKADgBQAGgBAFgHQAGgIgGgDIgJACQgLACACgOQAGAHAEgBQADgBAFgFIAKgHQAGgEAKABQgDAGAFAFQAGAEgDAFQAHgFABgEIACgKIAHAFIABgRQABgFAIgLQgCAFAHACQAHABgBAEQAKgFAAgJIAAABQAHgHALgDQAEgBACgCQAFgDADgHIgFgCQAEgJAIgJIAdghQAEgEAGgOIgHAFIAEgJQAEgKAGgBIgCAGQAEACAFAAQAFABADgEIgFgGIAHABQACgFgFgBQgGgCADgEQAMAEALgTIAIgOQAGgGAHAAQgGgHgFAJQgFAIgEgHIAFgCQADgBACgEIgJgCIAUgdQAJgLADgUIACABQAJgLgLgJQACAAAEADQACACADgBQgIgIACgGQABgFAGgHIAIgKQADgFgGgEQAKABASgJQASgHAHAFIgCgIQAGACAAANQAAANAGADIgRAYIAIACQAFACABgCQgBAGABABQABACAGgFIgNAWIgLAVIgPAsQgSA5gbAXQgBAEAJABQgKACADAGQAEAKAAABIgYADQAAAFAEACIAGADQgFAJgKAJIgSAOIgRANQgJAIgDAIQgFABgEgGQgEgEgEADQANACgMANIgIAJQAAAAAAABQgBABAAAAQABABAAABQAAAAABAAQgGgCgGACIgLAFQgNAFgHgPQgHAEACAGQADAFAEAAQgMAHgFAEIgGAGIgGAJQgDgBgLAFIgVAKQggAMgKgJQAHAGgEACQgGADgDADIAKAJIgTAEQgFADAAgCIgDgDQgCgEgFAAQgHABgEAEIgHAKIACABIgJADQgBAAAHgIgABnG+IAEACQAAgBAAgBQABAAAAgBQAAAAAAgBQgBAAAAAAIgEACgAl9hNQAIgFgEgEQgEAEAAAFg");
	this.shape_17.setTransform(-0.9,-46.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F49723").s().p("AgKgMIAVAMQgFAAgBACQgBAEACAIg");
	this.shape_18.setTransform(-29.2,-70.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F49723").s().p("AgBABQAGgGgFAHg");
	this.shape_19.setTransform(4.4,-7.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F49723").s().p("AgIAAQAIgFAJAHQgGgCgHACg");
	this.shape_20.setTransform(3.2,-91.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F49723").s().p("AABADIgHgGQAGACAHADQAAABgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgDgBg");
	this.shape_21.setTransform(4.9,-90.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F49723").s().p("AAAgBQAAgCAEADIgHACIADgDg");
	this.shape_22.setTransform(-20.5,-16.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F49723").s().p("AgCgCIAFAEIgDABg");
	this.shape_23.setTransform(-41.1,-53.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F49723").s().p("AgHAAQgDgEAGABIANADQgGAAgDAEg");
	this.shape_24.setTransform(-26.2,-84.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F49723").s().p("AgCgCIAFAAIgDAEg");
	this.shape_25.setTransform(26.9,-82.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F49723").s().p("AgHAAIAHAAIAIgBIgIADg");
	this.shape_26.setTransform(28.6,-81.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F49723").s().p("AgCABIgEADIAAgJIANAIIgGADIAAAAQgBAAgCgFg");
	this.shape_27.setTransform(32.5,-72.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F49723").s().p("AgDALIADgBQAAAAAAAAQAAAAAAgBQAAAAABAAQAAgBAAgBQgBAAAAgBQAAgBAAAAQAAAAAAgBQAAAAAAAAIgEgBQAEgGAFgJIgCAGQgBAGABAGIABABQABAGgEAAIgEgCg");
	this.shape_28.setTransform(34.9,-68.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F49723").s().p("AgNAJQABgGAGgBIAMgCIACAAIgDgCQAAAAgBAAQAAAAAAABQAAAAABABQAAAAABAAQgLgIgCgEIAQALIAAgBIAFAJQgGgGgDgBQADAHgHAAQgDAAAGAGIgHAAIgBAAQgFAAgEgEg");
	this.shape_29.setTransform(31.1,-77.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F49723").s().p("AAEAHIACAAIgNgNQAEgDAHACQABAMADAEg");
	this.shape_30.setTransform(29.4,-79.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F49723").s().p("AAAATQAAgKgHgBQgHgCgFAFQAAgBAAAAQAAAAABgBQAAAAAAgBQABAAAAgBIAEgCIgMgCQADgFANgCQAJgBABgFQACAEgBAFQABABAHAEQAHAAgCgHIgEgNQALACAEgEQgCAOgIAKQgIANgHAAIgBAAg");
	this.shape_31.setTransform(25.8,-78.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F49723").s().p("AgCgBQACABAEAAIgBACg");
	this.shape_32.setTransform(34.8,-74.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F49723").s().p("AAAgDQAAAAAAAAQAAAAAAAAQAAABAAAAQAAABAAABQABABAAADg");
	this.shape_33.setTransform(32,-78.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F49723").s().p("AgDgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAIAGAFQgFgBgCgDg");
	this.shape_34.setTransform(33.9,-74.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F49723").s().p("AgGgGQAGAGAFAAQADADgBACIgFACQgEgGgEgHg");
	this.shape_35.setTransform(33.3,-75.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F49723").s().p("AgBAAIABAAIACABg");
	this.shape_36.setTransform(36,-70.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F49723").s().p("AgEgEIAJAFQgCgBgDAEg");
	this.shape_37.setTransform(36.9,-70);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F49723").s().p("AgBgCIAKACQgHAAgCAAQgFADgCAAQAAgGAGABg");
	this.shape_38.setTransform(37.4,-67.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F49723").s().p("AgBACIADgGQABAEgDAFg");
	this.shape_39.setTransform(36.8,-72.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F49723").s().p("AgJgHQANACAGAFQgDgBgBAEQgBAFgEAAQgBgLgJgEg");
	this.shape_40.setTransform(35.4,-76.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F49723").s().p("AgDgCIAHAEIgDABQgBAAgDgFg");
	this.shape_41.setTransform(38.1,-69.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F49723").s().p("AgDACIADgDIAEgEQgCACgBADIABAGg");
	this.shape_42.setTransform(39,-69.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F49723").s().p("AgBABIABgFQAAAAAAAAQAAAAAAABQABAAAAABQAAABAAABQAAAEABABg");
	this.shape_43.setTransform(39.8,-57.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F49723").s().p("AgEAAQAEADAAgDIACgGQAGAJgEAEIgCAAQgCAAgEgHg");
	this.shape_44.setTransform(41.3,-62.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F49723").s().p("AAAABQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgEAAAAAAIACgCIAHAFIgFgCg");
	this.shape_45.setTransform(41,-64.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F49723").s().p("AgEAAQACgFACAAQABgBAEAFQAAAAgBAAQAAAAAAAAQAAAAgBABQAAAAAAAAQABAFgBABg");
	this.shape_46.setTransform(42.1,-65);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F49723").s().p("AAAAAQAAgDAAADIAAACIAAgCg");
	this.shape_47.setTransform(43.3,-62.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F49723").s().p("AgCgCQABAAABAAQAAAAAAAAQAAAAAAAAQAAgBABAAIACAFIgBACIgEgGgAgCgCIAAAAIAAAAg");
	this.shape_48.setTransform(42.8,-62.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F49723").s().p("AgBAQIABgCQAAgFgFgLQgGgKAHgGQgBAHAFALIAJATg");
	this.shape_49.setTransform(41.8,-56.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F49723").s().p("AABADIgEgGIAHAHg");
	this.shape_50.setTransform(42.5,-52.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F49723").s().p("AAAACQgEgBABgBIADgBQADAAABADIgEAAg");
	this.shape_51.setTransform(45.6,-45.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F49723").s().p("AkiEjQh4h5AAiqQAAipB4h5QB5h4CpAAQCqAAB5B4QB4B5AACpQAACqh4B5Qh5B4iqAAQipAAh5h4g");
	this.shape_52.setTransform(-0.9,-45.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,-92.8,92.1,92.9);


(lib.CopiadePath3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWMuQimgFiWhEQiQhChth0Qhuh0g5iUQg8iZAFikQAEimBFiWQBCiQB0htQB0huCUg6QCZg7CkAEQCmAFCVBEQCRBDBtB0QBuB0A5CUQA8CZgFCkQgFCmhECVQhCCRh0BtQh0BuiUA5QiNA4iZAAIgXgBg");
	this.shape.setTransform(81.5,81.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,163.1,163.1);


(lib.CopiadePath2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgyMtQilgKiThJQiOhIhqh3Qhph4g1iVQg3icALijQAKimBKiTQBHiPB3hpQB4hqCWg0QCbg2CkAKQClAKCTBKQCOBHBqB4QBpB4A1CVQA3CcgLCjQgKClhKCUQhHCOh3BpQh4BqiWA0QiCAuiKAAQgYAAgbgCg");
	this.shape.setTransform(81.5,81.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,163.1,163);


(lib.CopiadePath_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai+C0QgbgcAlhJQAlhKBPhJQBOhLBLggQBLghAbAcQAbAdglBJQglBJhQBJQhNBLhLAhQgoASgaAAQgXAAgNgOg");
	this.shape.setTransform(20.3,19.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.6,38.9);


(lib.CopiadePath_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjECuQgagdAnhIQAohIBShHQBQhIBMgeQBMgeAaAdQAaAegnBIQgoBHhSBHQhQBIhMAeQgmAPgaAAQgZAAgNgOg");
	this.shape.setTransform(20.7,18.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,0,41.7,37.8);


(lib.CopiadePath_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjGCrQgagdAohIQAphGBShHQBRhGBNgeQBMgdAaAdQAaAegpBHQgoBHhTBGQhRBHhMAeQgmAOgZAAQgaAAgNgPg");
	this.shape.setTransform(20.9,18.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.9,37.4);


(lib.CopiadePath_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAA0QgWgBgPgQQgPgPABgUQABgWAPgPQAQgPAUABQAVAAAQAQQAPAQgBAUQAAAWgQAPQgPAOgVAAIAAAAg");
	this.shape.setTransform(5.3,5.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.6,10.5);


(lib.CopiadePath_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCA0QgWgBgOgRQgPgQACgUQABgVAQgPQARgOATABQAXABAOARQAOAQgBAUQgCAWgQAOQgPANgTAAIgCAAg");
	this.shape.setTransform(5.3,5.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,10.5,10.6);


(lib.CopiadePath_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCA0QgWgCgOgQQgPgRACgUQACgVAQgPQARgOAUACQAVABAPARQAOAQgCAUQgBAWgRAOQgPANgSAAIgDAAg");
	this.shape.setTransform(5.3,5.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,10.5,10.5);


(lib.CopiadePath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8MsQilgMiShLQiNhIhoh6Qhoh5gziWQg1icANijQAMilBLiSQBIiOB6hoQB5hoCWgzQCbg1CkANQCmAMCRBLQCOBIBoB6QBpB5AyCWQA1CbgNCkQgMCmhLCRQhICOh6BoQh5BpiWAyQh+AriFAAQgdAAgggDg");
	this.shape.setTransform(81.6,81.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,163.1,163.1);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiyDAQgdgaAghMQAhhLBKhOQBIhQBJglQBJgmAdAbQAdAbggBLQghBLhKBOQhJBQhIAmQgrAVgbAAQgUAAgMgLg");
	this.shape.setTransform(19.3,20.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.7,40.8);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiAmQgQgPgBgWQgBgTAPgQQAPgQAWgBQAUgBAQAPQAQAPAAAVQABAUgPAQQgPAQgWABIgBAAQgTAAgPgOg");
	this.shape.setTransform(5.3,5.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.6,10.5);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkiL5QiUg5h1hsQh0hthDiQQhGiVgFimQgGikA7iaQA4iUBth0QBth1CQhDQCVhFCmgGQCkgGCZA7QCVA5B0BsQB1BtBDCQQBFCVAGCmQAGCkg7CaQg5CUhsB0QhtB1iQBDQiVBFimAGIgdABQiVAAiMg2g");
	this.shape.setTransform(81.5,81.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,163.1,163);


(lib.Símbolo3MN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AlgGoQiTiwAAj4QAAj3CTiwQCTivDNAAQDOAACTCvQCTCwAAD3QAAD4iTCwQiTCwjOgBQjNABiTiwg");
	this.shape.setTransform(0,-50);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhCCAIgDgBIgDgCQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAgBIgBgEIAAgFIABgDIACgEIADgDIAzg2QASgVALgQQALgOAHgNQAFgNADgKQACgLAAgJQAAgJgEgJQgCgIgHgHQgFgGgJgEQgJgEgJAAQgNAAgJADQgKAEgHAFIgMAHQgFADgDAAIgCgBIgBgBIgBgEIgBgEIABgEIAAgDIABgCIADgDIAIgGQAFgDAIgDIASgGQAKgDALAAQAQABANAFQANAFAJAJQAJAJAEAMQAFAMAAANQgBAMgCAMQgCAMgHAOQgGAMgNASQgNAQgUAXIgtAwIBxAAIADABIADACIACADIAAAFIAAAEIgCADIgDADIgDABg");
	this.shape_1.setTransform(9.4,-53.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag+B/IgCgBIgDgBIgBgDIgBgFIABgEIABgDIACgCIADgBIA4AAIAAjOIg2AhIgFACQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIgBgFIAAgEIABgEIACgCIACgCIA8gnIACAAIACgBIABAAIAEgBIAGABIADABIACABIABADIAADjIAwAAIADABIACACIABADIABAEIgBAFIgCADIgCABIgCABg");
	this.shape_2.setTransform(-10.1,-53.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgCAaQgbgBgYgMQgIgEgCgIQgDgGAEgIQAEgIAIgDQAIgDAIAEQAVALAZgDQAOgCALgDQAIgEAIAEQAIADADAJQADAIgEAGQgDAIgIADQgYAJgcAAIgCAAg");
	this.shape_3.setTransform(-2,16,0.596,0.596);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAdQgagBgUgKQgIgEgDgJQgCgGAEgIQADgIAJgCQAIgDAIAEQAYAMAegIQARgEAMgHQAIgFAIADQAJACAEAHQAFAIgCAIQgDAHgHAEQgkAUgmAAIgEAAg");
	this.shape_4.setTransform(-2.1,17.4,0.596,0.596);

	this.instance = new lib.CopiadePath3();
	this.instance.parent = this;
	this.instance.setTransform(0.2,-61.4,0.596,0.596,0,0,0,81.5,81.4);
	this.instance.alpha = 0.039;

	this.instance_1 = new lib.CopiadePath_13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-41.6,-74.3,0.596,0.596,0,0,0,5.4,5.2);
	this.instance_1.alpha = 0.602;

	this.instance_2 = new lib.CopiadePath_23();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-27,-91.1,0.596,0.596,0,0,0,20.3,19.4);
	this.instance_2.alpha = 0.602;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#905BA2").s().p("AgrRwQg5AHgtgKQAVgtAzh9Qh0gUiHhlQiKhmhzicQh8iohDjAQhLjUAGjSQAMm/EFkFQB2h2Cbg8QCYg6CmAEQCoAFCUBCQCXBEBvB7QD2EQgNHGQgGDZhYDTQhPC9iGCfQh7CTiRBcQiMBZh2ALQAhBvAgA/Qg3gKg6AHg");
	this.shape_5.setTransform(0,-42.1,0.596,0.596);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAALtQgBgDgBgEQhFmgAqo7QANi1AViuIAUiOQABgEAEgDQADgCAEABQAEABADADQADAEgBAEIgVCNQgWCugLCzQgqI4BDGfQABAKgKACIgCAAQgDAAgDgCg");
	this.shape_6.setTransform(-3.6,65.2,0.596,0.596);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-110,100,220);


(lib.Símbolo2xs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AlgGnQiTivAAj4QAAj3CTiwQCTiwDNAAQDOAACTCwQCTCwAAD3QAAD4iTCvQiTCxjOAAQjNAAiTixg");
	this.shape.setTransform(0,-49);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AggB+IgHAAIgEgCIAAgDIABgDIBhjeIh/AAQgEAAgCgDQgBgDAAgFIAAgEIABgEIADgCIADAAICQAAIADAAIAEACIABADIABAFIgBAFIAAAEIgBAEIgCAEIhdDZIgCAEIgEACIgEABIgGAAg");
	this.shape_1.setTransform(10.3,-48.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhCB/IgDAAIgDgCQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAIgBgGIAAgEIABgEIACgCIADgEIA0g3QARgUALgQQALgOAGgNQAGgMADgLQABgLAAgJQAAgKgCgIQgDgIgGgHQgHgGgIgEQgJgEgJAAQgMAAgKADQgKAEgHAEIgNAIQgEADgDAAIgCgBIgCgBIAAgDIgBgFIABgEIAAgCIABgDIADgDIAHgGQAGgDAIgDIATgGQAKgDAKABQAQAAANAEQANAGAJAJQAJAJAEAMQAEAMABAMQAAANgCAMQgDAMgGAOQgHAMgNARQgNARgUAXIgtAwIBxAAIAEABIABACIACAEIAAADIAAAFIgBAEIgCABIgEABg");
	this.shape_2.setTransform(-10.1,-48.6);

	this.instance = new lib.CopiadePath();
	this.instance.parent = this;
	this.instance.setTransform(0.6,-60.5,0.595,0.595,0,0,0,81.6,81.6);
	this.instance.alpha = 0.148;

	this.instance_1 = new lib.CopiadePath_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-40.5,-75.2,0.595,0.595,0,0,0,5.3,5.4);
	this.instance_1.alpha = 0.602;

	this.instance_2 = new lib.CopiadePath_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-25.2,-91.3,0.595,0.595,0,0,0,20.9,18.8);
	this.instance_2.alpha = 0.602;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQAcQgYgCgWgMQgHgEgDgJQgCgGAEgIQAFgHAIgDQAJgCAHAEQAXANAggGQAQgEANgGQAIgEAIACQAIADAEAIQAEAHgCAIQgDAHgHAEQgiARgiAAIgLAAg");
	this.shape_3.setTransform(-5.3,18,0.595,0.595);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgDAaQgbgBgYgOQgHgEgDgHQgCgIAEgHQAFgIAIgCQAJgDAHAFQAUALAagCQAOgBALgDQAIgCAIAEQAHADADAJQADAGgEAIQgEAIgIACQgVAHgXAAIgKgBg");
	this.shape_4.setTransform(-5.2,16.6,0.595,0.595);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#76B840").s().p("AhnRrQg6AEgsgMQAig+AuhpQh0gZiChqQiFhthrihQh0itg7jDQhBjWAPjTQAim+EQj4QB8hxCdg0QCag0CmAMQCoANCRBIQCUBLBpCAQDoEbghHFQgRDZhhDOQhXC5iOCZQiCCNiUBVQiQBTh0AGQAdByAaA/Qg1gNg8AEg");
	this.shape_5.setTransform(0,-41.1,0.595,0.595);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAALtQgBgDgBgEQhFmgAqo7QANi0AVivIAUiOQABgEAEgDQADgCAEABQAEABADADQADADgBAFIgVCNQgWCtgLC0QgqI4BCGfQABAEgDADQgCAEgEABIgCAAQgDAAgDgCg");
	this.shape_6.setTransform(-7.7,64.4,0.595,0.595);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_2},{t:this.shape_1}]}).to({state:[]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-109,100,218.1);


(lib.Símbolo2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AlgGnQiTivAAj4QAAj3CTiwQCTiwDNAAQDOAACTCwQCTCwAAD3QAAD4iTCvQiTCxjOAAQjNAAiTixg");
	this.shape_51.setTransform(0,-49);
	this.shape_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_51).wait(3).to({_off:false},0).wait(1));

	// Capa 1
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgoCAIgOgCIgKgEIgGgDQAAAAgBgBQAAAAAAAAQgBgBAAgBQAAAAAAgBIgBgHIAAgEIABgDIABgCIACAAIAGACIAKADIAOADQAIACAKAAQAUAAANgIQAPgIAJgOQAKgOAFgSQAEgSABgTQgLAGgQAFQgPAFgSAAQgWAAgOgGQgPgGgIgKQgJgIgEgOQgDgNAAgPQAAgQAEgOQAFgPAJgMQAKgLAQgHQAQgHAUAAQAPAAAMAEQALAEAJAHQAJAIAGAKQAGALAEANQAEAOACAQQABAQAAARQAAAPgCARQgCARgFAPQgFAQgIANQgIANgLAKQgMAKgQAGQgOAFgVAAIgQgBgAgZhnQgKAFgHAJQgGAJgDAKQgDALAAALQAAAMACALQADAKAGAHQAGAIALACQAKAEAPAAQAOAAAQgFQAPgDALgIQAAgbgDgSQgEgTgHgMQgIgMgLgFQgKgFgMAAQgPAAgKAFg");
	this.shape_52.setTransform(9.8,-51.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AhCB/IgEAAIgCgCQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAgGIAAgEIABgEIABgCIACgEIA0g3QASgUALgQQAMgOAFgNQAHgMABgLQACgLAAgJQAAgJgDgJQgCgIgHgHQgFgGgJgEQgJgEgJAAQgMAAgKAEQgKADgHAEIgMAIQgGADgBAAIgDAAIgCgCIgBgEIAAgEIAAgEIABgCIABgDIADgDIAIgFQAFgEAIgDIASgGQALgDAKABQAQAAANAEQANAGAJAJQAJAJAEAMQAFAMgBAMQAAANgCAMQgCAMgHAOQgGAMgNARQgNARgUAXIgtAwIByAAIACABIACACIADAEIAAADIAAAFIgCADIgDACIgCABg");
	this.shape_53.setTransform(-10.2,-52.1);

	this.instance = new lib.CopiadePath2();
	this.instance.parent = this;
	this.instance.setTransform(0.4,-61.6,0.595,0.595,0,0,0,81.5,81.6);
	this.instance.alpha = 0.148;

	this.instance_1 = new lib.CopiadePath_12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-40.8,-75.9,0.595,0.595,0,0,0,5.4,5.4);
	this.instance_1.alpha = 0.602;

	this.instance_2 = new lib.CopiadePath_22();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-25.7,-92.2,0.595,0.595,0,0,0,20.8,18.9);
	this.instance_2.alpha = 0.602;

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgPAcQgZgBgWgMQgHgEgDgJQgCgGAEgIQAEgHAJgDQAIgCAIAEQAXANAfgHQARgEAMgHQAIgEAIADQAJACAEAIQAEAIgCAIQgDAHgIAEQgiARgiAAIgJAAg");
	this.shape_54.setTransform(-4.5,17,0.595,0.595);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgDAaQgcgBgXgNQgHgEgDgIQgCgHAEgIQAEgIAJgCQAIgCAIAEQAUALAagCQAOgBAKgEQAJgCAHAEQAIAEADAIQADAGgEAIQgEAIgIACQgWAIgZAAIgHgBg");
	this.shape_55.setTransform(-4.4,15.5,0.595,0.595);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#3FA3DC").s().p("AhXRtQg6AFgtgMQAgg7AuhtQh0gXiDhpQiGhshtifQh3itg9jBQhDjWANjTQAcm/ENj7QB6hyCdg2QCag2CmALQCoAKCRBHQCVBJBrB/QDsEZgcHEQgODZhfDQQhVC6iMCbQiACOiTBXQiPBUh1AIQAeBwAbBAQg0gMg8AFg");
	this.shape_56.setTransform(0,-42.3,0.595,0.595);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAALtQgBgCgBgEQhFmhAqo7QANi0AViuIAViOQAAgFAEgCQADgDAEABQAFABACAEQADADgBAEIgVCOQgWCtgLCzQgqI5BDGeQABAFgDADQgDADgEABIAAAAIgCAAQgDAAgDgCg");
	this.shape_57.setTransform(-7,65.5,0.595,0.595);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_53},{t:this.shape_52}]}).to({state:[]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-110.2,100,220.5);


(lib.Símbolo1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AlgGoQiTiwAAj4QAAj3CTiwQCTivDNAAQDOAACTCvQCTCwAAD3QAAD4iTCwQiTCwjOgBQjNABiTiwg");
	this.shape_53.setTransform(0,-48.2);
	this.shape_53._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_53).wait(3).to({_off:false},0).wait(1));

	// Capa 1
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("Ag+B/IgCgBIgDgBIgBgDIgBgFIABgEIABgDIACgCIADgBIA4AAIAAjOIg2AhIgFACQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIgBgFIAAgEIABgEIACgCIACgCIA8gnIACAAIACgBIABAAIAEgBIAGABIADABIACABIABADIAADjIAwAAIADABIACACIABADIABAEIgBAFIgCADIgCABIgCABg");
	this.shape_54.setTransform(11.3,-50.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AhCCAIgEgBIgCgCQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAgBIAAgEIAAgFIABgDIABgEIACgDIA0g2QASgVALgQQAMgOAFgNQAHgNABgKQACgLABgJQgBgJgDgJQgCgIgHgHQgFgGgJgEQgJgEgJAAQgNAAgJADQgKAEgHAFIgMAHQgGADgBAAIgDgBIgCgBIgBgEIAAgEIAAgEIABgDIABgCIADgDIAIgGQAFgDAIgDIASgGQAKgDALAAQAQABANAFQANAFAJAJQAJAJAEAMQAFAMgBANQAAAMgCAMQgCAMgHAOQgGAMgNASQgNAQgUAXIgtAwIByAAIACABIACACIADADIAAAFIAAAEIgCADIgDADIgCABg");
	this.shape_55.setTransform(-9.7,-50.8);

	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(-0.4,-60.7,0.596,0.596,0,0,0,81.5,81.5);
	this.instance.alpha = 0.199;

	this.instance_1 = new lib.Path_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-42.9,-70.9,0.596,0.596,0,0,0,5.3,5.3);
	this.instance_1.alpha = 0.602;

	this.instance_2 = new lib.Path_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-29.4,-88.6,0.596,0.596,0,0,0,19.3,20.4);
	this.instance_2.alpha = 0.602;

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("Ag7AXQgIgEgEgIQgDgIAEgGQADgIAIgDQAIgDAIADQAZALAegLQARgFALgIQAHgFAJACQAIACAFAHQAFAHgBAJQgCAGgHAFQgKAHgOAGQgcAMgYAAIgGAAQgVAAgUgIg");
	this.shape_56.setTransform(2.3,17.9,0.596,0.596);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgzAQQgJgDgDgIQgDgGADgIQAEgIAIgEQAIgDAIAEQAVAJAagFQAOgCAKgFQAIgDAHACQAJADAEAIQADAIgDAHQgDAIgIADQgYALgdACIgEAAQgaAAgVgKg");
	this.shape_57.setTransform(2.3,16.6,0.596,0.596);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FECA0E").s().p("Ag9RyQAYg+AlhxQh2gNiNhbQiQheh8iUQiGighQi7QhYjPgIjSQgQm/D0kUQBuh+CXhFQCUhECogGQCmgGCYA4QCbA6B3B0QEGEAAQHFQAHDahKDXQhCDCh8CoQhyCaiKBkQiGBih1ATQAnBrAlA/Qg3gHg8ALQgiAHgcAAQgUAAgSgDg");
	this.shape_58.setTransform(0,-41.4,0.596,0.596);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAALtQgBgDgBgEQhFmgAqo7QANi0AVivIAUiOQABgEAEgCQADgDAEABQAEABADADQADAEgBAEIgVCNQgWCtgLC0QgqI4BCGfQACAKgKACIgCAAQgDAAgDgCg");
	this.shape_59.setTransform(0.4,64.6,0.596,0.596);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_55},{t:this.shape_54}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-109.3,100,218.7);


(lib.Símbolo8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Símbolo3MN();
	this.instance.parent = this;
	this.instance.setTransform(834.7,-110.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Símbolo3MN(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[834.7,-110.1,732.4,-120.3,605.8,-120.3,413.4,-120.3,277.2,-97,209.1,-85.2,175,-71.1,141,-57,141,-40.5,141,-23.9,175,-9.8,209.1,4.3,277.2,16,413.4,39.6,605.8,39.6,798.4,39.6,934.6,16,1002.7,4.3,1036.7,-9.8,1070.8,-23.9,1070.8,-40.4,1070.8,-56.9,1036.7,-71.1,1002.7,-85.2,934.6,-96.9,894.4,-103.8,849.2,-108.6]}},219).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(784.7,-220.4,100,220);


(lib.Símbolo7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// gl3
	this.instance = new lib.Símbolo2_1();
	this.instance.parent = this;
	this.instance.setTransform(431.4,77.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Símbolo2_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[431.5,77.4,333.6,83.1,254.7,96.7,186.6,108.3,152.6,122.4,118.5,136.5,118.5,153.1,118.5,169.7,152.6,183.8,186.6,197.9,254.7,209.6,390.9,233.1,583.3,233.1,775.9,233.1,912.1,209.6,980.2,197.9,1014.3,183.8,1048.3,169.7,1048.3,153.1,1048.3,136.5,1014.3,122.4,980.2,108.3,912.1,96.7,775.9,73.3,583.3,73.3,504,73.3,434.1,77.3]}},219).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(381.4,-32.8,100,220.5);


(lib.Símbolo6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// gl2
	this.instance = new lib.Símbolo2xs();
	this.instance.parent = this;
	this.instance.setTransform(673.7,407.3);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Símbolo2xs(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[673.7,407.3,791.3,402.2,883.2,386.4,951.3,374.7,985.3,360.5,1019.4,346.4,1019.4,329.8,1019.4,313.2,985.3,299.1,951.3,284.9,883.2,273.2,747,249.8,554.4,249.8,362,249.8,225.8,273.2,157.7,284.9,123.6,299.1,89.6,313.2,89.6,329.8,89.6,346.4,123.6,360.5,157.7,374.7,225.8,386.4,362,409.8,554.4,409.8,608.8,409.8,658.7,407.9]}},219).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(623.7,298.3,100,218.1);


(lib.Símbolo5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_219 = function() {
		var root2=this;
		root2.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(219).call(this.frame_219).wait(2));

	// gl1
	this.instance = new lib.Símbolo1_1();
	this.instance.parent = this;
	this.instance.setTransform(222.6,591.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Símbolo1_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[222.8,591.7,232.7,593.6,243.4,595.4,379.6,618.9,572,618.9,764.6,618.9,900.8,595.4,968.9,583.7,1002.9,569.6,1037,555.5,1037,538.9,1037,522.3,1002.9,508.2,968.9,494,900.8,482.3,764.6,458.9,572,458.9,379.6,458.9,243.4,482.3,205.8,488.8,178.5,496,142.8,505.5,125,516.2,107.2,526.9,107.2,538.9,107.2,557.8,151.8,573.6,171.9,580.7,201.1,587.2]}},219).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(172.6,482.4,100,218.7);


// stage content:



(lib.pag40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var root=this;
		root.stop();
		
		function volverInvisible(m){
			m.visible=false;
		}
		
		volverInvisible(root.flecha1a);
		volverInvisible(root.flecha1b);
		
		 root.globo1.addEventListener("click",fglobo1);
		 root.globo2.addEventListener("click",fglobo2);
		 root.globo3.addEventListener("click",fglobo3);
		 root.globo4.addEventListener("click",fglobo4);
		
		
		function fglobo1(event){
			ponerTexto("21");
			deshabilitarTodos();
			sonidoBien();
			root.globo1.visible=false;
		}
		
		function fglobo2(event){
			sonidoExplosion();
		}
		
		function fglobo3(event){
			sonidoExplosion();
		}
		
		function fglobo4(event){
			sonidoExplosion();
		}
		
		function ponerTexto(n){
			root.txt1.text=""+n;
		}
		
		function sonidoExplosion(){
			
		}
		
		function deshabilitarTodos(){
		 root.globo1.removeEventListener("click",fglobo1);
		 root.globo2.removeEventListener("click",fglobo2);
		 root.globo3.removeEventListener("click",fglobo3);
		 root.globo4.removeEventListener("click",fglobo4);
			
		root.globo1.stop();
		root.globo2.stop();
		root.globo3.stop();
		root.globo4.stop();
		}
		
		function sonidoBien(){
		createjs.Sound.play("bien");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa 9
	this.globo3 = new lib.Símbolo8();
	this.globo3.parent = this;
	this.globo3.setTransform(410.9,491.9,1,1,0,0,0,451.9,-116.7);

	this.globo2 = new lib.Símbolo7();
	this.globo2.parent = this;
	this.globo2.setTransform(656,645.9,1,1,0,0,0,674.2,232.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.globo2},{t:this.globo3}]}).wait(1));

	// Capa 1
	this.globo4 = new lib.Símbolo6();
	this.globo4.parent = this;
	this.globo4.setTransform(436,645.1,1,1,0,0,0,428.5,407.8);

	this.timeline.addTween(cjs.Tween.get(this.globo4).wait(1));

	// Capa 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGBPIgFgDQgCgCAAgDIAAgIIAAgJQAAgDACgCQACgCADAAIAGgBIAHABQADAAACACQABACABADIAAAJIAAAIQAAADgCACQgCACgDABIgHAAIgGAAgAgGgtIgFgDQgCgCAAgDIAAgIIAAgJQAAgDACgCIAFgDIAGAAIAHAAQADABACACQABACABADIAAAJIAAAIQAAADgCACQgCACgDABIgHAAIgGAAg");
	this.shape.setTransform(654.7,304.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdBTQgKgEgHgGQgHgGgDgJQgEgIAAgLQAAgOAFgJQAGgKAKgGQAKgFAOgDQAOgDAPAAIAaAAIAAgOQAAgKgCgIQgDgIgEgFQgFgFgIgDQgHgDgLABQgJgBgIADIgPAGIgKAFQgEADgCAAIgCAAIgCgCIAAgCIgBgEIABgGQAAgCADgCQACgDAFgDIANgFIAQgEIAPgBQAQAAALADQAMAFAHAGQAHAIADALQADALAAANIAABqIgCADIgCABIgGABIgFgBIgDgBIgBgDIAAgSQgLAMgNAGQgNAGgMABQgMAAgKgDgAgKAGQgJADgGAEQgHAFgDAFQgDAGAAAJQAAANAJAIQAJAJAPAAQALgBALgGQALgHAMgMIAAgmIgdAAQgLAAgKACg");
	this.shape_1.setTransform(640.7,304.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAXBqQgMAAgJgDQgGgDgFgHQgGgGgCgKQgCgKAAgNIAAhhIgYAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgCgDAAgEIAAgEIACgDIABgCIACAAIAYAAIAAgnIABgCIABgBIADgBIAFgBIAGABIADABIAAABIAAACIAAAnIArAAIADAAIABACIACADIAAAEQAAAEgCADQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgrAAIAABeQAAASAFAJQAFAKAOAAIAIgBIAFgCIAFgCIADgBIACABIABABIABADIAAADIAAAGQgBABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgDACIgHACIgHACIgGAAg");
	this.shape_2.setTransform(626.5,302);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUBVIgMgEIgKgEIgHgFQgCgBAAgDIgBgHIAAgEIABgDIABgCIACgBQACABAEACIAJAFQAGADAHADQAHACAKAAQAHAAAHgBQAGgCAFgEQAFgEADgFQADgFgBgIQABgHgEgGQgDgEgGgEQgGgEgHgCIgNgGIgPgGQgHgEgGgFQgGgFgDgHQgEgHAAgLQAAgIADgIQAEgIAGgHQAHgGAKgEQAKgDAMAAIAMABIALACIAIAEIAFADIADACIABACIABADIAAADIAAAEIgBADIgCACIgCAAIgEgBIgHgFIgLgEQgHgCgIAAQgGAAgHACQgFACgFAEQgDADgCAEQgDAGAAAFQAAAIAEAFQAEAFAFAEQAGAEAHADIANAGIAQAGQAHACAFAFQAGAGAEAHQAEAHAAAJQAAAMgFAJQgEAJgIAGQgIAHgKADQgLADgMABIgQgBg");
	this.shape_3.setTransform(613.9,304.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgZBQQgPgGgJgLQgKgKgFgQQgFgQAAgVQAAgSAFgRQAFgQAKgLQAKgLANgGQAOgFAPAAQASAAAMAFQANAGAIAKQAIAKAEAOQAEANAAAPIAAAEQAAAHgEAAQgDADgDAAIhqAAQAAAOADAMQACAMAHAJQAHAIAKAEQALAFAOAAQALAAAJgBIAPgFIAKgEIAGgDIACACIACABIABADIAAAEIAAADIgBACIgBABIgBACIgGAEIgMAEIgRAEQgJACgMAAQgQgBgOgFgAgSg+QgJAEgGAIQgGAHgEAKQgDAJAAALIBeAAQABgZgMgPQgNgOgXABQgKgBgJAFg");
	this.shape_4.setTransform(598,304.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghBPQgLgFgGgJQgHgJgDgMQgDgMAAgRIAAheIABgCIACgCIACgBIAGAAIAFAAIADABIACACIAAACIAABcQAAAPACAJQACAJAFAHQAFAGAHAFQAHADAJAAQAKAAANgJQAMgJAOgQIAAhwIAAgCIACgCIACgBIAGAAIAFAAIADABIACACIAAACIAACdIAAACIgCACIgDAAIgFABIgFgBIgDAAIgBgCIgBgCIAAgWQgNAPgNAGQgOAIgLAAQgQgBgKgFg");
	this.shape_5.setTransform(579.8,304.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag6B0IgEAAIgEgBIgBgBIgBgCIAAjcIABgCIABgCIADgBIAFAAIAEAAIADABIACACIAAACIAAAXIAOgOIAOgJQAGgDAHgDQAHgBAGAAQASAAAMAHQAMAGAIALQAHAMAEAPQADAQAAARQAAAUgEAPQgFAPgJAMQgIAMgNAGQgNAGgRAAQgFAAgGgCIgMgEIgLgIIgNgLIAABSIgBACIgBABIgDABIgGAAgAgHhgQgGADgGADQgHAEgHAHIgOAQIAABDQANAQAMAIQAMAJALAAQANAAAIgFQAJgHAFgJQAGgKADgKQACgMAAgMQAAgOgCgMQgCgMgFgKQgFgKgIgFQgJgGgNAAIgKABg");
	this.shape_6.setTransform(561.6,307.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgUBVIgNgEIgJgEIgHgFQgCgBAAgDIgBgHIAAgEIABgDIABgCIACgBQACABAEACIAJAFQAFADAIADQAIACAJAAQAHAAAGgBQAHgCAFgEQAFgEADgFQACgFAAgIQAAgHgDgGQgEgEgFgEQgGgEgHgCIgNgGIgPgGQgHgEgGgFQgGgFgDgHQgEgHAAgLQAAgIADgIQADgIAHgHQAGgGALgEQAKgDAMAAIAMABIALACIAIAEIAFADIADACIABACIABADIAAADIAAAEIgBADIgCACIgCAAIgEgBIgIgFIgKgEQgHgCgIAAQgGAAgGACQgHACgDAEQgFADgBAEQgCAGAAAFQgBAIAEAFQADAFAGAEQAGAEAIADIAMAGIAQAGQAGACAGAFQAHAGADAHQADAHABAJQgBAMgEAJQgEAJgIAGQgHAHgLADQgMADgLABIgQgBg");
	this.shape_7.setTransform(544.8,304.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZBQQgPgGgJgLQgKgKgFgQQgFgQAAgVQAAgSAFgRQAFgQAKgLQAKgLANgGQAOgFAPAAQASAAAMAFQANAGAIAKQAIAKAEAOQAEANAAAPIAAAEQAAAHgEAAQgDADgDAAIhqAAQAAAOADAMQACAMAHAJQAHAIAKAEQALAFAOAAQALAAAJgBIAPgFIAKgEIAGgDIACACIACABIABADIAAAEIAAADIgBACIgBABIgBACIgGAEIgMAEIgRAEQgJACgMAAQgQgBgOgFgAgSg+QgJAEgGAIQgGAHgEAKQgDAJAAALIBeAAQABgZgMgPQgNgOgXABQgKgBgJAFg");
	this.shape_8.setTransform(528.9,304.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AA3ByIgEgBIgCgDIgCgDIgVg3QgDgKgFgIQgEgIgGgGQgGgGgGgEQgJgDgMAAIgXAAIAABmIgBACIgBACIgEAAIgFABIgFgBIgDAAIgCgCIgBgCIAAjTQAAgGAEgCQADgDADAAIArAAIAOABIAIABQANACAKAFQAJAFAHAIQAGAHADAKQADAJAAALQAAALgDAJQgDAJgGAHQgGAHgIAEQgIAFgKACQAGACAFAEIAJAKQAEAFADAHIAHAQIAVA1IADAJIABADIAAACIgCACIgEAAIgFABIgFAAgAgwgKIAhAAQANAAAHgDQAKgEAGgFQAGgGADgHQADgIAAgJQAAgOgGgKQgHgLgPgEIgJgCIgQgBIgcAAg");
	this.shape_9.setTransform(511.3,301);

	this.txt1 = new cjs.Text("", "36px 'Calibri'");
	this.txt1.name = "txt1";
	this.txt1.textAlign = "center";
	this.txt1.lineHeight = 46;
	this.txt1.lineWidth = 51;
	this.txt1.parent = this;
	this.txt1.setTransform(725.5,278.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AkFEsQhYAAABhYIAAmnQgBhXBYgBIILAAQBYABgBBXIAAGnQABBYhYAAg");
	this.shape_10.setTransform(725,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.txt1},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa 6
	this.globo1 = new lib.Símbolo5();
	this.globo1.parent = this;
	this.globo1.setTransform(213.1,617,1,1,0,0,0,223,589.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgQB4QgDgBgCgCQgCgCAAgDIAAgIIAAgJQAAgDACgCQACgCADAAIAHgBIAIABQABAAACACIACAFIAAAJIAAAIIgCAFIgDADIgIAAIgHAAgAgOA/IgDgBIgCgBIAAgCIgBg1IABgFQAAgBAAAAQABAAAAAAQAAAAAAAAQABgBAAAAIAEgCIAFAAIAEAAQALAAAJgEQAJgEAGgHQAEgGADgJQACgJAAgKQAAgKgCgJQgDgKgGgGQgHgHgJgDQgKgEgKAAQgLAAgHADQgJACgGADIgJAFIgHACIgBAAIgCgCIgBgDIAAgEIAAgFIADgEIAHgEIALgFIARgEQAIgCAJAAQAQAAANAFQAMAFAJAJQAJAJADAMQAEAMAAAOQABAQgFAMQgFAMgHAJQgIAGgMAFQgLAEgOABIAAAvQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAIgHABIgFAAg");
	this.shape_11.setTransform(307.4,274.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAwBUIgDAAIgCgCIAAgCIAAhdQAAgOgDgKQgCgIgEgHQgEgHgIgEQgHgDgKAAQgKAAgLAIQgNAJgNARIAABwIgBACIgCACIgDAAIgFAAIgEAAIgEAAIgCgCIAAgCIAAidIAAgCIACgCIADgBIAFAAIAFAAIADABIACACIAAACIAAAWQAOgPANgGQANgIALAAQAPAAALAGQALAFAGAJQAHAJADAMQADAMAAARIAABeIAAACIgCACIgEAAIgEAAIgGAAg");
	this.shape_12.setTransform(289.4,277.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgdBTQgKgEgHgGQgHgGgDgJQgEgJAAgKQAAgNAFgKQAGgKAKgGQAKgFAOgDQAOgDAPgBIAaAAIAAgNQAAgKgCgIQgDgIgEgFQgFgGgIgCQgHgCgLgBQgJABgIACIgPAFIgKAHQgEACgCAAIgCAAIgCgBIAAgDIgBgEIABgGQAAgCADgCQACgCAFgEIANgFIAQgEIAPgCQAQAAALAFQAMADAHAIQAHAHADALQADALAAAOIAABpIgCADIgCABIgGAAIgFAAIgDgBIgBgDIAAgSQgLAMgNAGQgNAGgMAAQgMAAgKgCgAgKAGQgJACgGAFQgHAFgDAFQgDAHAAAIQAAANAJAIQAJAJAPgBQALAAALgGQALgGAMgOIAAglIgdAAQgLAAgKACg");
	this.shape_13.setTransform(271,277.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AghB1QgNgIgHgLQgIgLgDgPQgEgQAAgRQAAgVAEgQQAFgOAIgMQAJgLANgGQAMgGARAAQANAAALAGQAMAHAMAMIAAhfIABgCIABgCIADgBIAFAAIAGAAIADABIABACIABACIAADqIAAABIgCACIgDABIgEAAIgFAAIgDgBIgCgCIAAgBIAAgYQgNAOgOAJQgNAHgOAAQgRAAgMgGgAgWgYQgIAHgGAJQgFAIgDALQgCAMAAAMQAAAOACANQACAMAFAJQAFALAJAFQAIAGANAAQAEAAAGgBQAGgDAGgDQAHgEAHgHIAOgQIAAhGQgNgOgMgHQgNgJgLAAQgMAAgJAFg");
	this.shape_14.setTransform(253.2,274.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgZBQQgPgFgJgLQgKgLgFgQQgFgQAAgVQAAgTAFgPQAFgRAKgKQAKgMANgFQAOgHAPAAQASAAAMAHQANAFAIALQAIAJAEAOQAEAOAAAOIAAAFQAAAFgEABQgDACgDABIhqAAQAAAOADAMQACAMAHAIQAHAJAKAFQALAEAOAAQALAAAJgCIAPgEIAKgEIAGgCIACABIACABIABADIAAAEIAAACIgBADIgBACIgBACIgGACIgMAFIgRADQgJACgMAAQgQABgOgGgAgSg+QgJAEgGAIQgGAHgEAKQgDAKAAAKIBeAAQABgZgMgOQgNgOgXgBQgKABgJAEg");
	this.shape_15.setTransform(235.4,277.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AghBPQgLgFgHgJQgGgJgDgMQgDgMAAgRIAAheIABgCIACgCIACgBIAGAAIAFAAIADABIACACIAAACIAABcQAAAPACAJQACAKAFAGQAFAHAHAEQAHADAJAAQAKAAANgJQAMgIAOgRIAAhwIAAgCIACgCIACgBIAGAAIAFAAIADABIACACIAAACIAACdIAAACIgCACIgDAAIgFAAIgFAAIgDAAIgBgCIgBgCIAAgWQgNAPgNAGQgOAIgLgBQgQABgKgGg");
	this.shape_16.setTransform(217.2,277.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AA7B0IgGAAIgDgBIgBgCIgBgCIAAhUQgIAIgHAFQgGAFgHAEIgNAFQgGABgFAAQgRAAgMgHQgNgHgHgLQgIgLgDgQQgEgNAAgRQAAgVAEgQQAFgQAIgMQAJgLANgGQAMgGARAAQAFAAAHACIAMAEIAMAIIAOANIAAgVIAAgCIACgBIADgBIAFAAIAEAAIADABIACABIAAACIAADcIgBACIgBACIgDABIgFAAgAgWhcQgIAHgGAJQgFAJgDAMQgCAMAAAMQAAAOACANQACAKAFAJQAFALAJAFQAIAGANAAQAEAAAGgBQAGgDAGgDQAHgEAHgHIAOgQIAAhEQgNgQgMgHQgNgJgLAAQgMAAgJAFg");
	this.shape_17.setTransform(198,280.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgZBQQgPgFgJgLQgKgLgFgQQgFgQAAgVQAAgTAFgPQAFgRAKgKQAKgMANgFQAOgHAPAAQASAAAMAHQANAFAIALQAIAJAEAOQAEAOAAAOIAAAFQAAAFgEABQgDACgDABIhqAAQAAAOADAMQACAMAHAIQAHAJAKAFQALAEAOAAQALAAAJgCIAPgEIAKgEIAGgCIACABIACABIABADIAAAEIAAACIgBADIgBACIgBACIgGACIgMAFIgRADQgJACgMAAQgQABgOgGgAgSg+QgJAEgGAIQgGAHgEAKQgDAKAAAKIBeAAQABgZgMgOQgNgOgXgBQgKABgJAEg");
	this.shape_18.setTransform(172.1,277.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgDB6IgEAAIgCgCIAAgCIAAjrIAAgCIACgBIAEgBIADAAIAFAAIACABIACABIABACIAADrIgBACIgCACIgCAAIgFAAIgDAAg");
	this.shape_19.setTransform(159.3,273.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgUBUIgMgDIgKgFIgHgDQgCgCAAgDIgBgHIAAgEIABgDIABgBIACgCQACAAAEADIAJAFQAGAEAHACQAHACAKAAQAHAAAHgCQAGgCAFgDQAFgDADgGQACgGAAgHQABgHgEgFQgDgGgGgDQgGgEgHgCIgNgHIgPgFQgHgDgGgGQgGgFgDgHQgEgIAAgKQAAgIADgIQADgIAHgGQAHgHAKgDQAKgFAMAAIAMABIALADIAIAEIAFACIADADIABACIABACIAAAEIAAAEIgBADIgCACIgCAAIgEgCIgIgEIgKgEQgHgCgIAAQgGAAgGACQgGACgFAEQgEADgBAFQgCAEAAAGQAAAHADAGQAEAGAFADQAGAEAHADIANAGIAQAGQAGACAGAGQAHAEADAIQAEAGAAALQAAALgFAJQgEAJgIAHQgHAGgLADQgMAEgLgBIgQgBg");
	this.shape_20.setTransform(140.1,277.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgdBTQgKgEgHgGQgHgGgDgJQgEgJAAgKQAAgNAFgKQAGgKAKgGQAKgFAOgDQAOgDAPgBIAaAAIAAgNQAAgKgCgIQgDgIgEgFQgFgGgIgCQgHgCgLgBQgJABgIACIgPAFIgKAHQgEACgCAAIgCAAIgCgBIAAgDIgBgEIABgGQAAgCADgCQACgCAFgEIANgFIAQgEIAPgCQAQAAALAFQAMADAHAIQAHAHADALQADALAAAOIAABpIgCADIgCABIgGAAIgFAAIgDgBIgBgDIAAgSQgLAMgNAGQgNAGgMAAQgMAAgKgCgAgKAGQgJACgGAFQgHAFgDAFQgDAHAAAIQAAANAJAIQAJAJAPgBQALAAALgGQALgGAMgOIAAglIgdAAQgLAAgKACg");
	this.shape_21.setTransform(124.2,277.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgVBQQgMgFgJgLQgJgLgFgQQgEgPAAgVQAAgVAFgRQAGgQAKgLQAJgLANgEQANgGANAAQAIABAHABIAOAEIALAFIAHAGIADADIAAADIABADIAAAEIgBAHQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgDAAgEgEIgJgGQgFgEgJgDQgHgDgMgBQgUABgNARQgMASAAAfQAAARADAMQAEANAGAIQAGAJAJAEQAJAEAJAAQALAAAIgDIAOgIIAKgHQAEgEACABIACAAIABACIABADIAAAFIAAADIgBADIgBADIgCACIgIAHQgGADgGADIgOAEIgRABQgOABgNgGg");
	this.shape_22.setTransform(108.9,277.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgDBzIgEgBIgBgBIgBgCIAAidIABgCIABgCIAEgBIADAAIAFAAIADABIABACIABACIAACdIgBACIgBABIgDABIgFAAIgDAAgAgJhYQgDgDAAgJQAAgIADgDQADgDAGAAQAHAAADADQADADAAAIQAAAIgDADQgDADgHAAQgGAAgDgCg");
	this.shape_23.setTransform(97,274.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAwBUIgDAAIgBgCIgBgCIAAhdQAAgOgCgKQgDgIgEgHQgEgHgIgEQgHgDgJAAQgKAAgMAIQgNAJgNARIAABwIgBACIgBACIgDAAIgGAAIgFAAIgDAAIgBgCIgBgCIAAidIABgCIABgCIADgBIAFAAIAFAAIADABIABACIAAACIAAAWQAOgPAOgGQANgIALAAQAQAAAKAGQALAFAHAJQAGAJADAMQADAMAAARIAABeIgBACIgBACIgDAAIgGAAIgFAAg");
	this.shape_24.setTransform(83.7,277.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgdBTQgKgEgHgGQgHgGgDgJQgEgJAAgKQAAgNAFgKQAGgKAKgGQAKgFAOgDQAOgDAPgBIAaAAIAAgNQAAgKgCgIQgDgIgEgFQgFgGgIgCQgHgCgLgBQgJABgIACIgPAFIgKAHQgEACgCAAIgCAAIgCgBIAAgDIgBgEIABgGQAAgCADgCQACgCAFgEIANgFIAQgEIAPgCQAQAAALAFQAMADAHAIQAHAHADALQADALAAAOIAABpIgCADIgCABIgGAAIgFAAIgDgBIgBgDIAAgSQgLAMgNAGQgNAGgMAAQgMAAgKgCgAgKAGQgJACgGAFQgHAFgDAFQgDAHAAAIQAAANAJAIQAJAJAPgBQALAAALgGQALgGAMgOIAAglIgdAAQgLAAgKACg");
	this.shape_25.setTransform(65.3,277.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgVBQQgMgFgKgLQgIgLgEgQQgFgPAAgVQAAgVAGgRQAFgQAKgLQAKgLAMgEQANgGANAAQAIABAHABIANAEIALAFIAHAGIAEADIABADIAAADIAAAEIgBAHQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgCAAgDgEIgKgGQgFgEgJgDQgIgDgKgBQgWABgMARQgMASAAAfQAAARADAMQAEANAGAIQAGAJAJAEQAJAEAJAAQALAAAIgDIAOgIIAKgHQAEgEABABIADAAIABACIABADIAAAFIAAADIgBADIAAADIgEACIgHAHQgFADgIADIgNAEIgQABQgPABgNgGg");
	this.shape_26.setTransform(50,277.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgUBVIgMgEIgKgEIgHgFQgCgCAAgCIgBgHIAAgEIABgDIABgCIACAAQACgBAEADIAJAGQAGACAHACQAHADAKAAQAHAAAHgCQAGgBAFgEQAFgDADgGQACgGAAgHQABgHgEgGQgDgEgGgEQgGgEgHgDIgNgFIgPgFQgHgEgGgFQgGgGgDgHQgEgIAAgKQAAgIADgIQAEgIAGgHQAHgGAKgEQAKgDAMAAIAMABIALACIAIADIAFAEIADACIABACIABACIAAAEIAAAEIgBADIgCACIgCABIgEgCIgHgFIgLgEQgHgCgIAAQgGAAgGACQgGACgFADQgDAEgCAEQgCAFAAAGQAAAHADAGQAEAGAFADQAGAEAHADIANAGIAQAGQAGACAGAFQAGAFAEAHQAEAHAAAKQAAAMgFAJQgEAJgIAGQgHAHgLADQgMAEgLAAIgQgBg");
	this.shape_27.setTransform(906,231.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgdBSQgKgDgHgGQgHgGgDgJQgEgJAAgKQAAgOAFgJQAGgKAKgGQAKgFAOgDQAOgEAPABIAaAAIAAgOQAAgKgCgIQgDgIgEgFQgFgFgIgDQgHgCgLAAQgJAAgIACIgPAFIgKAGQgEADgCAAIgCgBIgCgBIAAgCIgBgEIABgFQAAgDADgCQACgCAFgDIANgGIAQgEIAPgBQAQAAALADQAMAFAHAGQAHAIADALQADALAAAOIAABpIgCADIgCABIgGAAIgFAAIgDgBIgBgDIAAgSQgLAMgNAGQgNAHgMAAQgMAAgKgEgAgKAGQgJADgGAEQgHAEgDAHQgDAGAAAHQAAAOAJAJQAJAHAPABQALAAALgHQALgGAMgNIAAgmIgdAAQgLAAgKACg");
	this.shape_28.setTransform(890.1,231.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAWBqQgMAAgIgDQgGgDgFgHQgFgGgCgKQgDgKAAgNIAAhhIgYAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAQgBgDAAgEIAAgEIABgDIACgCIACAAIAYAAIAAgnIABgCIABgBIADgBIAFgBIAFABIAEABIAAABIAAACIAAAnIAsAAIACAAIABACIABADIABAEQAAAEgCADQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAIgsAAIAABeQAAASAFAJQAFAKAOAAIAHgBIAGgCIAFgCIAEgBIABABIABABIABADIAAADIgBAGQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgDACIgGACIgIACIgHAAg");
	this.shape_29.setTransform(876,229.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAwBUIgDgBIgBgBIgBgCIAAhdQAAgOgDgJQgCgKgEgGQgFgHgHgDQgHgEgKAAQgKAAgLAIQgNAJgNARIAABwIgBACIgBABIgEABIgFAAIgFAAIgDgBIgBgBIgBgCIAAidIABgCIABgBIADgBIAFAAIAFAAIADABIACABIAAACIAAAXQAOgQANgHQANgGALAAQAPAAALAEQALAGAGAJQAHAJADAMQADAMAAAQIAABfIAAACIgCABIgEABIgEAAIgGAAg");
	this.shape_30.setTransform(861,231.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgdB5QgKgEgHgFQgHgHgDgJQgEgIAAgKQAAgOAFgKQAGgJAKgHQAKgGAOgDQAOgEAPAAIAaAAIAAgNQAAgLgCgFQgDgIgEgGQgFgFgIgDQgHgCgLAAQgJAAgIACIgPAGIgKAGQgEACgCABIgCgBIgCgBIAAgDIgBgEIABgFQAAgCADgCQACgDAFgDIANgFIAQgFIAPgBQAQAAALAEQAMAEAHAHQAHAIADALQADAKAAAMIAABrIgCAEIgCABIgGAAIgFAAIgDgBIgBgEIAAgSQgLAMgNAGQgNAHgMAAQgMAAgKgDgAgKAsQgJADgGAEQgHAFgDAGQgDAGAAAIQAAANAJAJQAJAIAPAAQALAAALgHQALgGAMgNIAAgmIgdAAQgLAAgKACgAgBhGIgCgBQgBAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAgBIABgCIAYgpIACgDIADgCIAEAAIAGgBIAFABIADABIABACIgBADIgfApIgCADIgCABIgDABIgFAAIgCAAg");
	this.shape_31.setTransform(842.6,228);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AghBPQgLgFgGgJQgHgJgDgMQgDgMAAgRIAAheIAAgCIADgBIADgBIAEAAIAGAAIADABIACABIAAACIAABcQAAAPADAJQACAKAEAGQAFAGAHAEQAHAEAKAAQAKAAAMgIQALgJAOgRIAAhwIABgCIACgBIADgBIAFAAIAFAAIADABIACABIAAACIAACdIAAACIgCABIgDABIgFAAIgFAAIgDgBIgCgBIAAgCIAAgXQgOAQgNAHQgNAGgLABQgPAAgLgGg");
	this.shape_32.setTransform(825.3,232);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgZBsQgRgIgMgOQgNgPgGgUQgHgWAAgaQAAgbAHgWQAHgWANgPQANgPARgJQASgHAUgBQAKAAAKACIARAFQAIADAGAEIAJAHIAEADIABACIAAADIAAAEIAAAEIgBAEIgBABIgDABQgCAAgEgDIgNgIQgGgFgMgDQgKgEgPAAQgOAAgNAGQgNAHgJAMQgLANgEASQgGASAAAWQAAAXAFARQAFASAJAMQAKAMANAGQAOAGAQABQANgBALgDIASgIIANgIQAFgEACAAIACAAIABADIABADIAAAEIAAAEIAAACIgBACIgDAEIgHAFIgOAHQgJAEgLADQgLACgOAAQgTAAgRgHg");
	this.shape_33.setTransform(806.8,228.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgXBzQgMgFgIgJQgJgJgEgMQgEgMgBgOQABgQAEgMQAEgMAJgIQAIgHALgEQAMgFAMgBIABguQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAHgBIAFAAIADABIACACIAAACIABA0IgBAFIgCACIgDACIgGAAIgEAAQgLAAgJAEQgJAEgFAHQgFAGgCAJQgDAJAAAKQAAALADAJQADAJAGAGQAGAHAKADQAJAEAKAAQALAAAIgCIAPgGIAJgFIAFgCIADAAIACACIABADIAAAEIAAAFQgBABAAAAQAAABAAAAQgBABAAAAQgBAAAAABIgHAEIgNAGIgPAEQgJABgIAAQgRAAgNgFgAAChXQgCAAAAgCQgCgCAAgDIgBgIIABgJQAAgDACgCQAAgCACAAIAIgBIAHABQADAAACACIADAFIAAAJIAAAIIgDAFQgCACgDAAIgHABIgIgBg");
	this.shape_34.setTransform(788,231.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgVApIgCAAIgBgCIABgCIAXguIAAgUIAAgGQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIAGAAIAGAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABIACADIABAGIAAAJIgCAHIgDAIIgEAFIgXAlIgBACIgCABIgEABIgEAAIgDAAg");
	this.shape_35.setTransform(756.8,241.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgZBxQgKgEgIgGQgIgGgFgKQgGgKgDgLQgDgNgCgOQgBgPAAgRQAAgNABgPQACgPAEgOQAFgOAHgLQAHgMAKgKQAKgIAOgFQAMgFATAAIANABIAMACIAJADIAFACIACACIABACIAAADIABACIAAAEIgBADIgBABIgDABIgFgCIgIgCIgMgDIgQgBQgRAAgLAHQgNAHgIANQgJANgEAQQgEAQAAASIALgFIANgGIAPgDQAIgBAHAAQAUAAAMAEQANAFAIAKQAIAGADAMQADAMAAAOQAAANgEAOQgEANgJALQgKALgOAGQgOAHgSAAQgOAAgKgDgAgKgDIgOADIgOAEIgLAGQAAAZAEAQQADARAGAKQAGAKAKAGQAJADALAAQANAAAJgEQAKgGAGgHQAGgJADgJQADgKAAgKQAAgLgDgIQgCgKgFgGQgGgGgJgCQgJgEgNAAQgGAAgHACg");
	this.shape_36.setTransform(744.5,228.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgZBQQgPgGgJgLQgKgKgFgQQgFgQAAgVQAAgSAFgRQAFgPAKgMQAKgLANgGQAOgFAPAAQASAAAMAFQANAHAIAJQAIALAEANQAEANAAAPIAAAEQAAAGgEABQgDACgDAAIhqAAQAAAPADAMQACAMAHAJQAHAIAKAEQALAFAOAAQALAAAJgCIAPgEIAKgFIAGgCIACABIACACIABADIAAAEIAAADIgBACIgBABIgBACIgGAEIgMAEIgRADQgJADgMAAQgQAAgOgGgAgSg+QgJAFgGAGQgGAIgEAKQgDAJAAALIBeAAQABgZgMgPQgNgNgXAAQgKgBgJAFg");
	this.shape_37.setTransform(708.3,231.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AghB0QgNgGgHgMQgIgLgDgQQgEgPAAgRQAAgUAEgQQAFgPAIgLQAJgMANgGQAMgGARAAQANAAALAHQAMAFAMANIAAhgIABgBIABgCIADgBIAFAAIAGAAIADABIABACIABABIAADqIAAADIgCABIgDABIgEAAIgFAAIgDgBIgCgBIAAgDIAAgWQgNAOgOAHQgNAIgOAAQgRAAgMgHgAgWgXQgIAFgGAKQgFAIgDAMQgCAMAAALQAAAOACAMQACANAFAKQAFAKAJAGQAIAFANAAQAEAAAGgBQAGgCAGgFQAHgEAHgGIAOgQIAAhFQgNgPgMgIQgNgIgLAAQgMAAgJAGg");
	this.shape_38.setTransform(689.5,228.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AglBUIgDgBIgCgBIgBgCIAAidIABgCIACgBIADgBIAEAAIAGAAIACABIACABIAAACIAAAZQAHgKAGgGQAFgHAFgDQAEgDAFgBIAKgBIAGAAIAHABIAFACIAEABIACABIAAACIAAADIAAAEIAAAFIAAACIgBACIgCABIgEgBIgEgCIgHgBIgHgBQgFAAgFACQgEACgEAFQgEAEgGAHIgLATIAABpIgBACIgCABIgDABIgGAAIgEAAg");
	this.shape_39.setTransform(675.7,231.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgZBQQgPgGgJgLQgKgKgFgQQgFgQAAgVQAAgSAFgRQAFgPAKgMQAKgLANgGQAOgFAPAAQASAAAMAFQANAHAIAJQAIALAEANQAEANAAAPIAAAEQAAAGgEABQgDACgDAAIhqAAQAAAPADAMQACAMAHAJQAHAIAKAEQALAFAOAAQALAAAJgCIAPgEIAKgFIAGgCIACABIACACIABADIAAAEIAAADIgBACIgBABIgBACIgGAEIgMAEIgRADQgJADgMAAQgQAAgOgGgAgSg+QgJAFgGAGQgGAIgEAKQgDAJAAALIBeAAQABgZgMgPQgNgNgXAAQgKgBgJAFg");
	this.shape_40.setTransform(659.4,231.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgDBzIgEgBIgBgBIgBgCIAAidIABgCIABgCIAEgBIADAAIAFAAIADABIABACIABACIAACdIgBACIgBABIgDABIgFAAIgDAAgAgJhYQgDgDAAgJQAAgIADgDQADgDAGAAQAHAAADADQADADAAAIQAAAIgDADQgDADgHAAQgGAAgDgCg");
	this.shape_41.setTransform(646.5,228.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("Ag6B0IgEAAIgEgBIgBgBIgBgDIAAjbIABgCIABgCIADgBIAFAAIAEAAIADABIACACIAAACIAAAWIAOgMIAOgKQAGgEAHgCQAHgBAGAAQASAAAMAHQAMAGAIAMQAHALAEAPQADAPAAARQAAAVgEAOQgFARgJALQgIAMgNAGQgNAGgRAAQgFAAgGgBIgMgFIgLgIIgNgMIAABSIgBADIgBABIgDABIgGAAgAgHhgQgGADgGAEQgHADgHAHIgOAQIAABDQANAQAMAIQAMAJALAAQANAAAIgFQAJgHAFgJQAGgKADgKQACgMAAgMQAAgOgCgMQgCgMgFgKQgFgKgIgFQgJgGgNAAIgKABg");
	this.shape_42.setTransform(633.7,234.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgbBzIgDgBIgBgDIABgEIAWg4IgCgCIgCgCIg6iaIgBgDQAAgBAAAAQAAgBABAAQAAAAAAAAQAAgBABAAIADgBIAFAAIAHAAIADABIACACIABACIAwCIIABAAIAxiIIACgEIAEgBIAGAAIAGAAIADABIABADIgBADIg8CeIgUA7IgDAEIgJABIgGAAg");
	this.shape_43.setTransform(598,235);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAdByIgEgBIgBgBIgBgCIAAg0IhfAAIgDAAIgCgCIgBgDIgBgEIAAgEIABgDIABgDIACgEIBWiPIACgCIADgCIAGgBIAGAAIAHAAIAFABIADACIACACIAACUIAdAAQACAAACACQACADAAAEQAAAEgCADQgCACgCAAIgdAAIAAA0IgBACIgCABIgDABIgFAAIgFAAgAg5AoIBQAAIAAiGIAAAAg");
	this.shape_44.setTransform(563,228.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgdBSQgKgDgHgGQgHgGgDgJQgEgJAAgKQAAgOAFgJQAGgKAKgGQAKgFAOgDQAOgEAPABIAaAAIAAgOQAAgKgCgIQgDgIgEgFQgFgFgIgDQgHgCgLAAQgJAAgIACIgPAFIgKAGQgEADgCAAIgCgBIgCgBIAAgCIgBgEIABgFQAAgDADgCQACgCAFgDIANgGIAQgEIAPgBQAQAAALADQAMAFAHAGQAHAIADALQADALAAAOIAABpIgCADIgCABIgGAAIgFAAIgDgBIgBgDIAAgSQgLAMgNAGQgNAHgMAAQgMAAgKgEgAgKAGQgJADgGAEQgHAEgDAHQgDAGAAAHQAAAOAJAJQAJAHAPABQALAAALgHQALgGAMgNIAAgmIgdAAQgLAAgKACg");
	this.shape_45.setTransform(527.1,231.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAwBUIgDgBIgBgBIgBgCIAAhdQAAgOgCgJQgDgKgEgGQgEgHgIgDQgHgEgJAAQgKAAgNAIQgMAJgNARIAABwIgBACIgBABIgDABIgGAAIgFAAIgDgBIgBgBIgBgCIAAidIABgCIABgBIADgBIAFAAIAFAAIADABIACABIAAACIAAAXQANgQANgHQAOgGALAAQAQAAAKAEQALAGAHAJQAGAJADAMQADAMAAAQIAABfIgBACIgBABIgDABIgFAAIgGAAg");
	this.shape_46.setTransform(509.9,231.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgdBSQgKgDgHgGQgHgGgDgJQgEgJAAgKQAAgOAFgJQAGgKAKgGQAKgFAOgDQAOgEAPABIAaAAIAAgOQAAgKgCgIQgDgIgEgFQgFgFgIgDQgHgCgLAAQgJAAgIACIgPAFIgKAGQgEADgCAAIgCgBIgCgBIAAgCIgBgEIABgFQAAgDADgCQACgCAFgDIANgGIAQgEIAPgBQAQAAALADQAMAFAHAGQAHAIADALQADALAAAOIAABpIgCADIgCABIgGAAIgFAAIgDgBIgBgDIAAgSQgLAMgNAGQgNAHgMAAQgMAAgKgEgAgKAGQgJADgGAEQgHAEgDAHQgDAGAAAHQAAAOAJAJQAJAHAPABQALAAALgHQALgGAMgNIAAgmIgdAAQgLAAgKACg");
	this.shape_47.setTransform(491.5,231.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgiBxQgNgDgIgGQgJgGgDgIQgEgHAAgJIABgMQACgFADgFIAHgJIAKgKQgJgFgFgGQgEgGAAgIQAAgJAEgIQAFgIAFgHQgEgHgDgIQgDgIAAgLQAAgNAFgKQAEgLAHgIQAJgHAKgEQALgEANAAIALABIALABIAvAAQADAAABADQACACAAAEQAAAGgCABQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgZAAQAIAIACAJQADAJAAAJQAAAOgEALQgFAKgHAIQgIAHgLADQgLAEgLABQgLgBgJgDQgLgDgEgEQgEADgDAFQgCAFAAAEQAAAGAHAFQAGAFAKAAIApACQALAAAKADQAKADAGAFQAIAFAEAHQAEAIAAAKQAAALgEAJQgEAKgKAHQgIAIgOAEQgOAEgSAAQgTAAgNgDgAgoAvIgHAJIgCAIIgBAIQAAANAMAHQAOAGAXABQANgBAKgCQAKgDAGgFQAGgEADgHQADgGAAgHQAAgLgKgHQgJgFgRgBIgrgCQgHAFgEAEgAgUhfQgHAEgEAFQgFAGgCAHQgCAHAAAIQAAASAKAKQAJAKASAAQAIAAAHgDQAHgDAEgGQAFgFADgHQABgIABgHQAAgSgKgLQgKgKgQAAQgKAAgHADg");
	this.shape_48.setTransform(475.1,234.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgDBzIgEgBIgBgBIgBgCIAAidIABgCIABgCIAEgBIADAAIAFAAIADABIABACIABACIAACdIgBACIgBABIgDABIgFAAIgDAAgAgJhYQgDgDAAgJQAAgIADgDQADgDAGAAQAHAAADADQADADAAAIQAAAIgDADQgDADgHAAQgGAAgDgCg");
	this.shape_49.setTransform(444.7,228.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgaByQgJgCgIgDIgMgFIgIgFIgCgFIgBgHIAAgFIACgDIABgBIACgBQACAAAFADIALAHIARAHQALADANAAQAIAAAJgDQAJgDAHgGQAGgFAEgIQADgIAAgKQAAgLgEgHQgFgIgHgGQgHgFgKgFIgSgJIgTgJQgKgFgHgHQgHgIgFgJQgFgKAAgOQAAgNAFgKQAFgLAIgHQAJgHAMgEQAMgEANAAQAHAAAHABIAOAEIAMAFIAHAEIACADIAAACIABADIAAAEIAAAEIgBADIgBACIgCABQgCAAgEgDIgKgGIgOgFQgIgDgLAAQgIAAgIADQgIADgEAFQgGAEgCAHQgDAGAAAIQAAAKAEAIQAGAHAHAGIARALIASAJIATAJQAKAEAHAIQAIAHAEAKQAFAJAAAOQAAAPgGAMQgFAMgKAIQgJAIgOAFQgOAEgOAAQgKAAgLgCg");
	this.shape_50.setTransform(432.6,228.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgKANQgEgDABgKQgBgJAEgDQADgDAHAAQAIAAAEADQACADAAAJQAAAKgDADQgDADgIAAQgHAAgDgDg");
	this.shape_51.setTransform(402.2,238.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgUBVIgMgEIgKgEIgHgFQgCgCAAgCIgBgHIAAgEIABgDIABgCIACAAQACgBAEADIAJAGQAGACAHACQAHADAKAAQAHAAAHgCQAGgBAFgEQAFgDADgGQACgGAAgHQABgHgEgGQgDgEgGgEQgGgEgHgDIgNgFIgPgFQgHgEgGgFQgGgGgDgHQgEgIAAgKQAAgIADgIQADgIAHgHQAHgGAKgEQAKgDAMAAIAMABIALACIAIADIAFAEIADACIABACIABACIAAAEIAAAEIgBADIgCACIgCABIgEgCIgHgFIgLgEQgHgCgIAAQgGAAgGACQgGACgFADQgEAEgBAEQgCAFAAAGQAAAHADAGQAEAGAFADQAGAEAHADIANAGIAQAGQAGACAGAFQAHAFADAHQAEAHAAAKQAAAMgFAJQgEAJgIAGQgHAHgLADQgMAEgLAAIgQgBg");
	this.shape_52.setTransform(390.8,231.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgdBSQgKgDgHgGQgHgGgDgJQgEgJAAgKQAAgOAFgJQAGgKAKgGQAKgFAOgDQAOgEAPABIAaAAIAAgOQAAgKgCgIQgDgIgEgFQgFgFgIgDQgHgCgLAAQgJAAgIACIgPAFIgKAGQgEADgCAAIgCgBIgCgBIAAgCIgBgEIABgFQAAgDADgCQACgCAFgDIANgGIAQgEIAPgBQAQAAALADQAMAFAHAGQAHAIADALQADALAAAOIAABpIgCADIgCABIgGAAIgFAAIgDgBIgBgDIAAgSQgLAMgNAGQgNAHgMAAQgMAAgKgEgAgKAGQgJADgGAEQgHAEgDAHQgDAGAAAHQAAAOAJAJQAJAHAPABQALAAALgHQALgGAMgNIAAgmIgdAAQgLAAgKACg");
	this.shape_53.setTransform(374.9,231.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgVBQQgNgGgIgLQgJgKgFgQQgEgQAAgUQAAgVAFgRQAGgRAKgKQAJgKANgGQANgEANAAQAIAAAHABIAOAEIALAGIAHAFIACAEIABABIABAEIAAAEIgBAHQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAAAAAQgDAAgDgEIgKgGQgFgEgJgDQgHgDgMAAQgUgBgNATQgMARAAAfQAAARADAMQADANAHAJQAGAHAJAFQAJAEAJAAQALAAAIgEIAOgHIAKgHQAEgDACgBIABABIACACIABADIAAAEIAAAFIgBACIgBACIgCAEIgIAFQgGAEgGACIgPAFIgQACQgOAAgNgGg");
	this.shape_54.setTransform(359.5,231.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgDBzIgEgBIgBgBIgBgCIAAidIABgCIABgCIAEgBIADAAIAFAAIADABIABACIABACIAACdIgBACIgBABIgDABIgFAAIgDAAgAgJhYQgDgDAAgJQAAgIADgDQADgDAGAAQAHAAADADQADADAAAIQAAAIgDADQgDADgHAAQgGAAgDgCg");
	this.shape_55.setTransform(347.6,228.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAwBUIgDgBIgBgBIgBgCIAAhdQAAgOgCgJQgDgKgEgGQgEgHgIgDQgHgEgJAAQgKAAgNAIQgMAJgNARIAABwIgBACIgBABIgDABIgGAAIgFAAIgDgBIgBgBIgBgCIAAidIABgCIABgBIADgBIAFAAIAFAAIADABIACABIAAACIAAAXQANgQANgHQAOgGALAAQAQAAAKAEQALAGAHAJQAGAJADAMQADAMAAAQIAABfIgBACIgBABIgDABIgGAAIgFAAg");
	this.shape_56.setTransform(334.4,231.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgdBSQgKgDgHgGQgHgGgDgJQgEgJAAgKQAAgOAFgJQAGgKAKgGQAKgFAOgDQAOgEAPABIAaAAIAAgOQAAgKgCgIQgDgIgEgFQgFgFgIgDQgHgCgLAAQgJAAgIACIgPAFIgKAGQgEADgCAAIgCgBIgCgBIAAgCIgBgEIABgFQAAgDADgCQACgCAFgDIANgGIAQgEIAPgBQAQAAALADQAMAFAHAGQAHAIADALQADALAAAOIAABpIgCADIgCABIgGAAIgFAAIgDgBIgBgDIAAgSQgLAMgNAGQgNAHgMAAQgMAAgKgEgAgKAGQgJADgGAEQgHAEgDAHQgDAGAAAHQAAAOAJAJQAJAHAPABQALAAALgHQALgGAMgNIAAgmIgdAAQgLAAgKACg");
	this.shape_57.setTransform(316,231.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgVBQQgMgGgKgLQgIgKgEgQQgFgQAAgUQAAgVAGgRQAFgRAKgKQAKgKAMgGQANgEANAAQAIAAAHABIANAEIALAGIAHAFIAEAEIABABIAAAEIAAAEIgBAHQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgCAAgDgEIgKgGQgFgEgJgDQgIgDgKAAQgWgBgMATQgMARAAAfQAAARADAMQAEANAGAJQAGAHAJAFQAJAEAJAAQALAAAIgEIAOgHIAKgHQAEgDABgBIADABIABACIABADIAAAEIAAAFIgBACIAAACIgEAEIgHAFQgFAEgIACIgNAFIgQACQgPAAgNgGg");
	this.shape_58.setTransform(300.6,231.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgbByIgRgEQgIgDgFgDIgHgEIgBgCIgBgCIgBgDIAAgFQAAgGABgBQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAAAIAGADIANAGIASAHQAKADAMAAQALAAAJgEQAKgDAGgGQAHgGADgIQAEgJAAgKQAAgKgFgJQgEgIgIgGQgIgHgLgDQgKgDgOAAIgXAAIgCgBIgCgBIgBgDIgBgDIABgEIABgCIACgCIACgBIAUAAQAMAAAJgDQAJgDAIgHQAGgGAEgJQAEgIAAgLQAAgIgDgHQgCgHgFgFQgFgGgHgDQgIgDgIAAQgLAAgJAEQgJADgHAEIgKAGQgFAEgCAAIgBgBIgCgBIgBgDIAAgFIAAgDIABgDIABgCIACgDIAHgFQAFgDAGgDIARgFQAJgCAKAAQAOAAALAEQAMAEAHAIQAIAHAEAKQADAKABAMQgBALgCAJQgDAKgGAHQgFAHgJAFQgIAFgKACIAAAAQAMABAJADQALAEAGAIQAIAHAEAKQAEAJAAALQAAAPgEAMQgGAMgJAJQgJAJgPAFQgOAFgQAAQgMAAgKgCg");
	this.shape_59.setTransform(265.5,228.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("Ag8BzIgCgBIgDgBIgCgEIAAgEIAAgEIABgDIACgDIACgDIAugxQAQgTAKgOQAKgMAGgMQAFgMACgJIACgSQAAgIgDgIQgDgIgFgFQgGgGgIgEQgHgDgJAAQgLAAgIADIgQAHIgLAHQgEADgCAAIgCgBIgCgBIAAgDIgBgEIABgEIAAgCIABgDIACgCIAHgFIAMgGIARgFQAJgDAJAAQAPAAALAFQANAFAHAIQAIAIAEALQAEAKAAAMQAAALgCALQgCALgGAMQgGALgMAPQgLAQgSAUIgpAsIBnAAIACAAIACACIACADIAAAEIAAAEIgCADIgCACIgCABg");
	this.shape_60.setTransform(247.5,228.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgZBQQgPgGgJgLQgKgKgFgQQgFgQAAgVQAAgSAFgRQAFgPAKgMQAKgLANgGQAOgFAPAAQASAAAMAFQANAHAIAJQAIALAEANQAEANAAAPIAAAEQAAAGgEABQgDACgDAAIhqAAQAAAPADAMQACAMAHAJQAHAIAKAEQALAFAOAAQALAAAJgCIAPgEIAKgFIAGgCIACABIACACIABADIAAAEIAAADIgBACIgBABIgBACIgGAEIgMAEIgRADQgJADgMAAQgQAAgOgGgAgSg+QgJAFgGAGQgGAIgEAKQgDAJAAALIBeAAQABgZgMgPQgNgNgXAAQgKgBgJAFg");
	this.shape_61.setTransform(211.6,231.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAwBUIgDgBIgBgBIgBgCIAAhdQAAgOgDgJQgBgKgFgGQgFgHgHgDQgHgEgJAAQgKAAgMAIQgNAJgNARIAABwIgBACIgBABIgEABIgFAAIgFAAIgDgBIgBgBIgBgCIAAidIABgCIABgBIADgBIAFAAIAFAAIADABIACABIAAACIAAAXQAOgQANgHQANgGALAAQAPAAALAEQALAGAHAJQAGAJADAMQADAMAAAQIAABfIAAACIgCABIgEABIgEAAIgGAAg");
	this.shape_62.setTransform(193.4,231.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgZBQQgPgGgJgLQgKgKgFgQQgFgQAAgVQAAgSAFgRQAFgPAKgMQAKgLANgGQAOgFAPAAQASAAAMAFQANAHAIAJQAIALAEANQAEANAAAPIAAAEQAAAGgEABQgDACgDAAIhqAAQAAAPADAMQACAMAHAJQAHAIAKAEQALAFAOAAQALAAAJgCIAPgEIAKgFIAGgCIACABIACACIABADIAAAEIAAADIgBACIgBABIgBACIgGAEIgMAEIgRADQgJADgMAAQgQAAgOgGgAgSg+QgJAFgGAGQgGAIgEAKQgDAJAAALIBeAAQABgZgMgPQgNgNgXAAQgKgBgJAFg");
	this.shape_63.setTransform(175.1,231.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgDBzIgEgBIgBgBIgBgCIAAidIABgCIABgCIAEgBIADAAIAFAAIADABIABACIABACIAACdIgBACIgBABIgDABIgFAAIgDAAgAgJhYQgDgDAAgJQAAgIADgDQADgDAGAAQAHAAADADQADADAAAIQAAAIgDADQgDADgHAAQgGAAgDgCg");
	this.shape_64.setTransform(162.2,228.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAWBqQgMAAgHgDQgHgDgFgHQgFgGgDgKQgCgKAAgNIAAhhIgYAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAQgBgDAAgEIAAgEIABgDIACgCIACAAIAYAAIAAgnIAAgCIACgBIAEgBIAEgBIAGABIACABIABABIAAACIAAAnIArAAIADAAIACACIABADIAAAEQAAAEgBADQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAgBAAIgrAAIAABeQAAASAFAJQAFAKAOAAIAHgBIAHgCIAEgCIAEgBIABABIABABIABADIAAADIAAAGQgBABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgFACIgFACIgHACIgIAAg");
	this.shape_65.setTransform(152.1,229.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AggBPQgPgGgJgKQgJgLgFgQQgFgPAAgUQAAgRAFgQQAFgQAKgMQAKgMAOgGQAPgHARABQATgBAOAGQAOAGAJALQAJALAFAPQAFAQAAAUQAAARgFAQQgFAQgKAMQgJAMgPAGQgPAHgRAAQgTgBgNgGgAgXg9QgKAFgHAJQgGAJgDAMQgEAMAAAOQAAANADAMQADANAGAIQAGAKAKAGQALAFAOAAQAOAAAKgFQAKgGAHgJQAGgIAEgNQADgMAAgOQAAgMgDgMQgDgMgGgKQgGgJgKgGQgLgFgPAAQgMgBgLAGg");
	this.shape_66.setTransform(119.1,231.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgDBzIgEgBIgBgBIgBgCIAAidIABgCIABgCIAEgBIADAAIAFAAIADABIABACIABACIAACdIgBACIgBABIgDABIgFAAIgDAAgAgJhYQgDgDAAgJQAAgIADgDQADgDAGAAQAHAAADADQADADAAAIQAAAIgDADQgDADgHAAQgGAAgDgCg");
	this.shape_67.setTransform(105.8,228.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AglBUIgEgBIgBgBIgBgCIAAidIABgCIABgBIAEgBIAEAAIAGAAIACABIACABIAAACIAAAZQAHgKAGgGQAGgHAEgDQAEgDAFgBIAKgBIAGAAIAHABIAFACIAEABIACABIAAACIABADIAAAEIAAAFIgBACIgBACIgCABIgEgBIgEgCIgGgBIgIgBQgFAAgEACQgFACgEAFQgEAEgFAHIgNATIAABpIgBACIgBABIgDABIgGAAIgEAAg");
	this.shape_68.setTransform(96.8,231.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgdBSQgKgDgHgGQgHgGgDgJQgEgJAAgKQAAgOAFgJQAGgKAKgGQAKgFAOgDQAOgEAPABIAaAAIAAgOQAAgKgCgIQgDgIgEgFQgFgFgIgDQgHgCgLAAQgJAAgIACIgPAFIgKAGQgEADgCAAIgCgBIgCgBIAAgCIgBgEIABgFQAAgDADgCQACgCAFgDIANgGIAQgEIAPgBQAQAAALADQAMAFAHAGQAHAIADALQADALAAAOIAABpIgCADIgCABIgGAAIgFAAIgDgBIgBgDIAAgSQgLAMgNAGQgNAHgMAAQgMAAgKgEgAgKAGQgJADgGAEQgHAEgDAHQgDAGAAAHQAAAOAJAJQAJAHAPABQALAAALgHQALgGAMgNIAAgmIgdAAQgLAAgKACg");
	this.shape_69.setTransform(80.4,231.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("ABnBxIgEAAIgCgCIAAgCIAAjLIAAAAIhaDMIgBACIgCABIgDABIgBAAIgFAAIgDgBIgBgBIgBgCIhWjMIAAAAIAADLIgBACIgBACIgDAAIgGABIgFgBIgDAAIgBgCIgBgCIAAjTQAAgGADgCQAEgDACAAIAMAAIAIABIAGADQADACABADIAEAGIBKCyIAAAAIBOiyIADgHIAFgFIAEgCIAGgBIAMAAIAEABIADACIACADIABAFIAADTIAAACIgCACIgDAAIgGABIgEgBg");
	this.shape_70.setTransform(57.3,228.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.globo1}]}).wait(1));

	// Capa 4
	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgKANQgEgDABgKQgBgJAEgDQADgDAHAAQAIAAAEADQACADAAAJQABAKgEADQgDADgIAAQgHAAgDgDg");
	this.shape_71.setTransform(788.9,123.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgdBTQgKgEgHgGQgHgGgDgJQgEgIAAgLQAAgOAFgJQAGgKAKgGQAKgFAOgDQAOgDAPAAIAaAAIAAgOQAAgKgCgIQgDgIgEgFQgFgGgIgCQgHgDgLABQgJgBgIADIgPAGIgKAFQgEADgCAAIgCAAIgCgBIAAgDIgBgEIABgGQAAgCADgCQACgDAFgDIANgFIAQgEQAIgCAHABQAQAAALADQAMAFAHAHQAHAHADALQADAKAAAOIAABqIgCADIgCABIgGABIgFgBIgDgBIgBgDIAAgSQgLAMgNAGQgNAGgMABQgMgBgKgCgAgKAGQgJADgGAEQgHAFgDAFQgDAHAAAIQAAANAJAIQAJAJAPAAQALgBALgGQALgHAMgNIAAglIgdAAQgLAAgKACg");
	this.shape_72.setTransform(775.5,117);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAWBqQgMAAgHgDQgHgDgFgHQgFgGgDgKQgCgKAAgNIAAhhIgYAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQgBgDAAgEIAAgEIABgDIACgCIACAAIAYAAIAAgnIAAgCIACgBIAEgBIAEgBIAGABIACABIABABIAAACIAAAnIArAAIADAAIACACIABADIAAAEQAAAEgBADQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgrAAIAABeQAAASAFAJQAFAKAOAAIAHgBIAHgCIAEgCIAEgBIABABIABABIABADIAAADIAAAGQgBABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgFACIgFACIgHACIgIAAg");
	this.shape_73.setTransform(761.4,114.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgEB6IgDAAIgBgCIgBgCIAAjrIABgCIABgBIADgBIAEgBIAEABIAEABIABABIABACIAADrIgBACIgBACIgEAAIgEABIgEgBg");
	this.shape_74.setTransform(751.8,113.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgdBTQgKgEgHgGQgHgGgDgJQgEgIAAgLQAAgOAFgJQAGgKAKgGQAKgFAOgDQAOgDAPAAIAaAAIAAgOQAAgKgCgIQgDgIgEgFQgFgGgIgCQgHgDgLABQgJgBgIADIgPAGIgKAFQgEADgCAAIgCAAIgCgBIAAgDIgBgEIABgGQAAgCADgCQACgDAFgDIANgFIAQgEQAIgCAHABQAQAAALADQAMAFAHAHQAHAHADALQADAKAAAOIAABqIgCADIgCABIgGABIgFgBIgDgBIgBgDIAAgSQgLAMgNAGQgNAGgMABQgMgBgKgCgAgKAGQgJADgGAEQgHAFgDAFQgDAHAAAIQAAANAJAIQAJAJAPAAQALgBALgGQALgHAMgNIAAglIgdAAQgLAAgKACg");
	this.shape_75.setTransform(738.8,117);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgQB6IgEAAIgBgCIgBgBIAAiPIgYAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQgCgCAAgEIABgEIABgDIABgCIACAAIAYAAIAAgSQAAgRADgMQADgMAGgHQAGgIAIgDQAJgDAMAAIALABIAJACIAEADIABACIABADIABAFIgBADIAAADIgBABIgCAAIgDgBIgFgCIgHgBIgJgBQgIAAgFACQgFACgDAGQgDAFAAAIQgBAJAAALIAAATIAlAAIACAAIACACIABADIAAAEQAAAEgBACQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAIglAAIAACPIAAABIgCACIgDAAIgFABIgFgBg");
	this.shape_76.setTransform(726,113);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgZBQQgPgGgJgKQgKgLgFgQQgFgQAAgVQAAgSAFgRQAFgQAKgLQAKgLANgFQAOgHAPABQASgBAMAHQANAGAIAJQAIAKAEAOQAEANAAAPIAAAFQAAAGgEAAQgDACgDABIhqAAQAAAOADAMQACAMAHAIQAHAJAKAEQALAFAOAAQALAAAJgBIAPgFIAKgEIAGgCIACABIACABIABADIAAAEIAAADIgBACIgBABIgBADIgGADIgMAEIgRAEQgJACgMAAQgQgBgOgFgAgSg+QgJAEgGAIQgGAHgEAKQgDAKAAAKIBeAAQABgZgMgPQgNgOgXABQgKAAgJAEg");
	this.shape_77.setTransform(703,117);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AghBPQgLgFgHgJQgGgJgDgMQgDgMAAgRIAAheIABgCIACgCIACgBIAGAAIAFAAIADABIACACIAAACIAABcQAAAPACAJQACAKAFAGQAFAGAHAFQAHADAJAAQAKAAANgJQAMgJAOgQIAAhwIAAgCIACgCIACgBIAGAAIAFAAIADABIACACIAAACIAACdIAAACIgCACIgDAAIgFABIgFgBIgDAAIgBgCIgBgCIAAgWQgOAPgMAGQgOAIgLAAQgQgBgKgFg");
	this.shape_78.setTransform(684.7,117.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AA7B0IgGAAIgDgBIgBgCIgBgBIAAhVQgIAIgHAFQgGAGgHADIgNAEQgGACgFAAQgRAAgMgGQgNgIgHgLQgIgLgDgPQgEgOAAgRQAAgVAEgQQAFgQAIgMQAJgLANgGQAMgGARAAQAFAAAHACIAMAEIAMAIIAOANIAAgVIAAgBIACgCIADgBIAFAAIAEAAIADABIACACIAAABIAADdIgBABIgBACIgDABIgFAAgAgWhcQgIAHgGAJQgFAJgDAMQgCANAAAMQAAANACANQACAKAFAJQAFAKAJAHQAIAFANAAQAEAAAGgCQAGgCAGgDQAHgFAHgGIAOgQIAAhDQgNgQgMgJQgNgIgLAAQgMAAgJAFg");
	this.shape_79.setTransform(665.5,120);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AggBPQgPgFgJgLQgJgMgFgPQgFgPAAgUQAAgRAFgQQAFgQAKgMQAKgLAOgHQAPgGARAAQATAAAOAFQAOAGAJALQAJALAFAPQAFARAAATQAAARgFAQQgFAQgKALQgJAMgPAHQgPAGgRABQgTAAgNgHgAgXg9QgKAFgHAJQgGAJgDAMQgEAMAAAOQAAANADAMQADANAGAJQAGAJAKAFQALAGAOAAQAOAAAKgFQAKgGAHgIQAGgKAEgMQADgMAAgOQAAgMgDgMQgDgNgGgJQgGgJgKgFQgLgHgPABQgMAAgLAFg");
	this.shape_80.setTransform(639.2,117);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AghB1QgNgIgHgLQgIgLgDgPQgEgQAAgRQAAgVAEgQQAFgOAIgMQAJgLANgGQAMgGARAAQANAAALAGQAMAHAMAMIAAhfIABgDIABgBIADgBIAFAAIAGAAIADABIABABIABADIAADqIAAABIgCACIgDABIgEAAIgFAAIgDgBIgCgCIAAgBIAAgYQgNAOgOAJQgNAHgOAAQgRAAgMgGgAgWgYQgIAHgGAJQgFAIgDALQgCANAAAMQAAANACANQACAMAFAJQAFAKAJAHQAIAFANAAQAEAAAGgCQAGgCAGgDQAHgFAHgGIAOgQIAAhFQgNgOgMgJQgNgIgLAAQgMAAgJAFg");
	this.shape_81.setTransform(619.9,113.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AAwBUIgDAAIgBgCIgBgCIAAhcQAAgPgDgKQgCgJgEgGQgFgHgHgEQgHgDgKAAQgKAAgLAJQgNAIgNARIAABwIgBACIgBACIgEAAIgFABIgFgBIgDAAIgBgCIgBgCIAAidIABgCIABgCIADgBIAFAAIAFAAIADABIACACIAAACIAAAWQAOgPANgGQANgIALABQAPAAALAEQALAGAGAJQAHAJADAMQADAMAAARIAABeIAAACIgCACIgEAAIgEABIgGgBg");
	this.shape_82.setTransform(601.8,116.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgdBTQgKgEgHgGQgHgGgDgJQgEgIAAgLQAAgOAFgJQAGgKAKgGQAKgFAOgDQAOgDAPAAIAaAAIAAgOQAAgKgCgIQgDgIgEgFQgFgGgIgCQgHgDgLABQgJgBgIADIgPAGIgKAFQgEADgCAAIgCAAIgCgBIAAgDIgBgEIABgGQAAgCADgCQACgDAFgDIANgFIAQgEQAIgCAHABQAQAAALADQAMAFAHAHQAHAHADALQADAKAAAOIAABqIgCADIgCABIgGABIgFgBIgDgBIgBgDIAAgSQgLAMgNAGQgNAGgMABQgMgBgKgCgAgKAGQgJADgGAEQgHAFgDAFQgDAHAAAIQAAANAJAIQAJAJAPAAQALgBALgGQALgHAMgNIAAglIgdAAQgLAAgKACg");
	this.shape_83.setTransform(583.4,117);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("ABhBUIgDAAIgCgCIAAgCIAAhgQAAgLgCgKQgCgJgEgGQgFgHgGgEQgHgDgJAAQgLAAgLAJQgMAIgNARIAABwIgBACIgBACIgDAAIgFABIgDgBIgEAAIgBgCIgBgCIAAhgQAAgLgCgKQgCgJgEgGQgFgHgGgEQgHgDgJAAQgLAAgLAJQgMAIgNARIAABwIgBACIgBACIgDAAIgGABIgEgBIgEAAIgBgCIgBgCIAAidIABgCIABgCIADgBIAFAAIAFAAIADABIACACIAAACIAAAWQAOgPAMgGQAMgIAMABQAKgBAIADQAIACAGAFQAGAEAEAGQACAFADAIIAQgPQAHgHAHgDQAGgFAGgBQAGgCAGABQAPAAALAEQAKAGAGAJQAGAJADAMQADAMAAANIAABiIgBACIgBACIgDAAIgGABIgFgBg");
	this.shape_84.setTransform(561.2,116.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AghBPQgLgFgHgJQgGgJgDgMQgDgMAAgRIAAheIABgCIACgCIACgBIAGAAIAFAAIADABIACACIAAACIAABcQAAAPACAJQACAKAFAGQAFAGAHAFQAHADAJAAQAKAAANgJQAMgJAOgQIAAhwIAAgCIACgCIACgBIAGAAIAFAAIADABIACACIAAACIAACdIAAACIgCACIgDAAIgFABIgFgBIgDAAIgBgCIgBgCIAAgWQgNAPgNAGQgOAIgLAAQgQgBgKgFg");
	this.shape_85.setTransform(537.6,117.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgUBVIgMgEIgKgEIgHgEQgCgDAAgCIgBgHIAAgEIABgDIABgCIACgBQACABAEACIAJAFQAGAEAHACQAHACAKAAQAHAAAHgBQAGgCAFgEQAFgEADgFQACgGAAgHQABgHgEgGQgDgFgGgDQgGgEgHgCIgNgHIgPgFQgHgDgGgGQgGgFgDgHQgEgHAAgLQAAgIADgIQAEgIAGgHQAHgGAKgEQAKgDAMAAIAMAAIALADIAIAEIAFACIADADIABACIABADIAAADIAAAEIgBADIgCACIgCAAIgEgBIgHgFIgLgEQgHgCgIAAQgGAAgGACQgGACgFAEQgEADgBAFQgCAFAAAFQAAAHADAGQAEAFAFAEQAGAEAHADIANAGIAQAGQAGACAGAFQAGAGAEAHQAEAGAAALQAAALgFAJQgEAJgIAHQgHAGgLADQgMADgLABIgQgBg");
	this.shape_86.setTransform(521.3,117);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgEB6IgDAAIgCgCIAAgCIAAjrIAAgCIACgBIADgBIAEgBIAEABIADABIACABIABACIAADrIgBACIgCACIgDAAIgEABIgEgBg");
	this.shape_87.setTransform(502.3,113.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgZBQQgPgGgJgKQgKgLgFgQQgFgQAAgVQAAgSAFgRQAFgQAKgLQAKgLANgFQAOgHAPABQASgBAMAHQANAGAIAJQAIAKAEAOQAEANAAAPIAAAFQAAAGgEAAQgDACgDABIhqAAQAAAOADAMQACAMAHAIQAHAJAKAEQALAFAOAAQALAAAJgBIAPgFIAKgEIAGgCIACABIACABIABADIAAAEIAAADIgBACIgBABIgBADIgGADIgMAEIgRAEQgJACgMAAQgQgBgOgFgAgSg+QgJAEgGAIQgGAHgEAKQgDAKAAAKIBeAAQABgZgMgPQgNgOgXABQgKAAgJAEg");
	this.shape_88.setTransform(489.3,117);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AggBPQgPgFgJgLQgJgMgFgPQgFgPAAgUQAAgRAFgQQAFgQAKgMQAKgLAOgHQAPgGARAAQATAAAOAFQAOAGAJALQAJALAFAPQAFARAAATQAAARgFAQQgFAQgKALQgJAMgPAHQgPAGgRABQgTAAgNgHgAgXg9QgKAFgHAJQgGAJgDAMQgEAMAAAOQAAANADAMQADANAGAJQAGAJAKAFQALAGAOAAQAOAAAKgFQAKgGAHgIQAGgKAEgMQADgMAAgOQAAgMgDgMQgDgNgGgJQgGgJgKgFQgLgHgPABQgMAAgLAFg");
	this.shape_89.setTransform(462.9,117);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AghB1QgNgIgHgLQgIgLgDgPQgEgQAAgRQAAgVAEgQQAFgOAIgMQAJgLANgGQAMgGARAAQANAAALAGQAMAHAMAMIAAhfIABgDIABgBIADgBIAFAAIAGAAIADABIABABIABADIAADqIAAABIgCACIgDABIgEAAIgFAAIgDgBIgCgCIAAgBIAAgYQgNAOgOAJQgNAHgOAAQgRAAgMgGgAgWgYQgIAHgGAJQgFAIgDALQgCANAAAMQAAANACANQACAMAFAJQAFAKAJAHQAIAFANAAQAEAAAGgCQAGgCAGgDQAHgFAHgGIAOgQIAAhFQgNgOgMgJQgNgIgLAAQgMAAgJAFg");
	this.shape_90.setTransform(443.7,113.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAxBUIgEAAIgCgCIAAgCIAAhcQAAgPgCgKQgCgJgFgGQgFgHgHgEQgHgDgKAAQgKAAgMAJQgMAIgNARIAABwIgBACIgCACIgCAAIgGABIgEgBIgEAAIgCgCIAAgCIAAidIAAgCIACgCIADgBIAFAAIAFAAIADABIABACIAAACIAAAWQAOgPANgGQAOgIALABQAPAAALAEQALAGAGAJQAHAJADAMQADAMAAARIAABeIgBACIgBACIgDAAIgGABIgEgBg");
	this.shape_91.setTransform(425.6,116.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgZBQQgPgGgJgKQgKgLgFgQQgFgQAAgVQAAgSAFgRQAFgQAKgLQAKgLANgFQAOgHAPABQASgBAMAHQANAGAIAJQAIAKAEAOQAEANAAAPIAAAFQAAAGgEAAQgDACgDABIhqAAQAAAOADAMQACAMAHAIQAHAJAKAEQALAFAOAAQALAAAJgBIAPgFIAKgEIAGgCIACABIACABIABADIAAAEIAAADIgBACIgBABIgBADIgGADIgMAEIgRAEQgJACgMAAQgQgBgOgFgAgSg+QgJAEgGAIQgGAHgEAKQgDAKAAAKIBeAAQABgZgMgPQgNgOgXABQgKAAgJAEg");
	this.shape_92.setTransform(407.2,117);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgDBzIgEgBIgBgBIgBgCIAAidIABgCIABgCIAEgBIADAAIAFAAIADABIABACIABACIAACdIgBACIgBABIgDABIgFAAIgDAAgAgJhYQgDgDAAgJQAAgIADgDQADgDAGAAQAHAAADADQADADAAAIQAAAIgDADQgDADgHAAQgGAAgDgCg");
	this.shape_93.setTransform(394.4,113.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgLB6QgGgCgGgDQgGgDgGgGIgOgMIAAAVIAAACIgCACIgDABIgEAAIgFAAIgDgBIgBgCIgBgCIAAjrIABgCIABgBIAEgBIAEgBIAGABIADABIABABIABACIAABkIAOgOQAHgFAHgDQAGgEAHgBQAGgCAFABQARAAANAGQAMAHAHALQAIAMADANQAEAPAAARQAAAVgEAQQgFAQgIAMQgJALgNAGQgNAHgQAAQgGgBgGgBgAgHgbQgGACgHAEIgNALIgOAOIAABEQANARANAIQAMAIALAAQAMAAAJgFQAIgGAGgJQAFgKADgMQACgMAAgMQAAgOgCgMQgCgNgFgHQgFgKgJgFQgIgHgNABQgEgBgGACg");
	this.shape_94.setTransform(381.6,113.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgDBzIgEgBIgBgBIgBgCIAAidIABgCIABgCIAEgBIADAAIAFAAIADABIABACIABACIAACdIgBACIgBABIgDABIgFAAIgDAAgAgJhYQgDgDAAgJQAAgIADgDQADgDAGAAQAHAAADADQADADAAAIQAAAIgDADQgDADgHAAQgGAAgDgCg");
	this.shape_95.setTransform(367.7,113.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AglBUIgDAAIgCgCIAAgCIAAidIAAgCIACgCIACgBIAGAAIAEAAIAEABIABACIAAACIAAAZQAHgKAGgGQAGgGAEgDQAEgEAGgCIAKAAIAFAAIAGAAIAHACIADACIABACIABABIAAADIAAAEIAAAFIAAACIgBADIgCAAIgDgBIgGgCIgGgBIgHgBQgFAAgEACQgFACgEAFQgEAEgGAHIgMASIAABqIAAACIgCACIgDAAIgFABIgFgBg");
	this.shape_96.setTransform(358.7,116.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgVBQQgNgGgIgKQgJgLgFgQQgEgPAAgVQAAgWAFgQQAGgRAKgKQAJgKAOgGQANgEAMAAQAIgBAHACIAOAEIAKAFIAIAGIACADIABACIABAEIAAAEIgBAHQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAAAAAQgDAAgEgDIgJgHQgGgEgHgDQgJgDgKAAQgVAAgMASQgNARAAAfQAAARADANQADAMAHAIQAGAJAJAEQAJAEAJAAQALAAAIgDIAOgIIAKgHQAEgDABAAIACAAIACACIABADIAAAFIAAADIgBADIgBADIgDADIgHAGQgGADgGACIgPAFIgQACQgOgBgNgFg");
	this.shape_97.setTransform(344,117);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgTBVIgOgEIgKgEIgGgEQgCgDgBgCIgBgHIABgEIAAgDIACgCIACgBQACABADACIAKAFQAGAEAHACQAIACAKAAQAGAAAGgBQAHgCAFgEQAFgEADgFQACgGABgHQgBgHgDgGQgDgFgGgDQgGgEgHgCIgNgHIgPgFQgHgDgGgGQgGgFgEgHQgDgHAAgLQAAgIADgIQADgIAHgHQAGgGALgEQAKgDAMAAIAMAAIALADIAIAEIAGACIACADIABACIAAADIAAADIAAAEIgBADIgBACIgCAAIgEgBIgIgFIgLgEQgFgCgJAAQgGAAgHACQgFACgEAEQgEADgDAFQgCAFABAFQAAAHADAGQADAFAGAEQAGAEAIADIANAGIAOAGQAHACAHAFQAFAGAEAHQADAGAAALQAAALgEAJQgEAJgIAHQgIAGgLADQgLADgKABIgQgBg");
	this.shape_98.setTransform(329.1,117);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgZBQQgPgGgJgKQgKgLgFgQQgFgQAAgVQAAgSAFgRQAFgQAKgLQAKgLANgFQAOgHAPABQASgBAMAHQANAGAIAJQAIAKAEAOQAEANAAAPIAAAFQAAAGgEAAQgDACgDABIhqAAQAAAOADAMQACAMAHAIQAHAJAKAEQALAFAOAAQALAAAJgBIAPgFIAKgEIAGgCIACABIACABIABADIAAAEIAAADIgBACIgBABIgBADIgGADIgMAEIgRAEQgJACgMAAQgQgBgOgFgAgSg+QgJAEgGAIQgGAHgEAKQgDAKAAAKIBeAAQABgZgMgPQgNgOgXABQgKAAgJAEg");
	this.shape_99.setTransform(313.2,117);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgdBTQgKgEgHgGQgHgGgDgJQgEgIAAgLQAAgOAFgJQAGgKAKgGQAKgFAOgDQAOgDAPAAIAaAAIAAgOQAAgKgCgIQgDgIgEgFQgFgGgIgCQgHgDgLABQgJgBgIADIgPAGIgKAFQgEADgCAAIgCAAIgCgBIAAgDIgBgEIABgGQAAgCADgCQACgDAFgDIANgFIAQgEQAIgCAHABQAQAAALADQAMAFAHAHQAHAHADALQADAKAAAOIAABqIgCADIgCABIgGABIgFgBIgDgBIgBgDIAAgSQgLAMgNAGQgNAGgMABQgMgBgKgCgAgKAGQgJADgGAEQgHAFgDAFQgDAHAAAIQAAANAJAIQAJAJAPAAQALgBALgGQALgHAMgNIAAglIgdAAQgLAAgKACg");
	this.shape_100.setTransform(287.2,117);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("ABhBUIgDAAIgCgCIAAgCIAAhgQAAgLgCgKQgCgJgEgGQgFgHgGgEQgHgDgJAAQgLAAgLAJQgMAIgNARIAABwIgBACIgBACIgDAAIgFABIgDgBIgEAAIgBgCIgBgCIAAhgQAAgLgCgKQgCgJgEgGQgFgHgGgEQgHgDgJAAQgLAAgLAJQgMAIgNARIAABwIgBACIgBACIgDAAIgGABIgEgBIgEAAIgBgCIgBgCIAAidIABgCIABgCIADgBIAFAAIAFAAIADABIACACIAAACIAAAWQAOgPAMgGQAMgIAMABQAKgBAIADQAIACAGAFQAGAEAEAGQACAFADAIIAQgPQAHgHAHgDQAGgFAGgBQAGgCAGABQAPAAALAEQAKAGAGAJQAGAJADAMQADAMAAANIAABiIgBACIgBACIgDAAIgGABIgFgBg");
	this.shape_101.setTransform(265,116.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AghBPQgLgFgGgJQgHgJgDgMQgDgMAAgRIAAheIABgCIACgCIACgBIAGAAIAFAAIADABIACACIAAACIAABcQAAAPACAJQACAKAFAGQAFAGAHAFQAHADAJAAQAKAAANgJQAMgJAOgQIAAhwIAAgCIACgCIACgBIAGAAIAFAAIADABIACACIAAACIAACdIAAACIgCACIgDAAIgFABIgFgBIgDAAIgBgCIgBgCIAAgWQgNAPgNAGQgOAIgLAAQgQgBgKgFg");
	this.shape_102.setTransform(241.4,117.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgUBVIgMgEIgKgEIgHgEQgCgDAAgCIgBgHIAAgEIABgDIABgCIACgBQACABAEACIAJAFQAGAEAHACQAHACAKAAQAHAAAHgBQAGgCAFgEQAFgEADgFQADgGgBgHQABgHgEgGQgDgFgGgDQgGgEgHgCIgNgHIgPgFQgHgDgGgGQgGgFgDgHQgEgHAAgLQAAgIADgIQAEgIAGgHQAHgGAKgEQAKgDAMAAIAMAAIALADIAIAEIAFACIADADIABACIABADIAAADIAAAEIgBADIgCACIgCAAIgEgBIgHgFIgLgEQgHgCgIAAQgGAAgHACQgFACgFAEQgDADgCAFQgCAFgBAFQAAAHAEAGQAEAFAFAEQAGAEAHADIANAGIAQAGQAHACAFAFQAGAGAEAHQAEAGAAALQAAALgFAJQgEAJgIAHQgIAGgKADQgLADgLABIgRgBg");
	this.shape_103.setTransform(225.1,117);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgdBTQgKgEgHgGQgHgGgDgJQgEgIAAgLQAAgOAFgJQAGgKAKgGQAKgFAOgDQAOgDAPAAIAaAAIAAgOQAAgKgCgIQgDgIgEgFQgFgGgIgCQgHgDgLABQgJgBgIADIgPAGIgKAFQgEADgCAAIgCAAIgCgBIAAgDIgBgEIABgGQAAgCADgCQACgDAFgDIANgFIAQgEQAIgCAHABQAQAAALADQAMAFAHAHQAHAHADALQADAKAAAOIAABqIgCADIgCABIgGABIgFgBIgDgBIgBgDIAAgSQgLAMgNAGQgNAGgMABQgMgBgKgCgAgKAGQgJADgGAEQgHAFgDAFQgDAHAAAIQAAANAJAIQAJAJAPAAQALgBALgGQALgHAMgNIAAglIgdAAQgLAAgKACg");
	this.shape_104.setTransform(201,117);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgDB6IgEAAIgCgCIAAgCIAAjrIAAgCIACgBIAEgBIADgBIAFABIACABIACABIABACIAADrIgBACIgCACIgCAAIgFABIgDgBg");
	this.shape_105.setTransform(189.1,113.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgdBTQgKgEgHgGQgHgGgDgJQgEgIAAgLQAAgOAFgJQAGgKAKgGQAKgFAOgDQAOgDAPAAIAaAAIAAgOQAAgKgCgIQgDgIgEgFQgFgGgIgCQgHgDgLABQgJgBgIADIgPAGIgKAFQgEADgCAAIgCAAIgCgBIAAgDIgBgEIABgGQAAgCADgCQACgDAFgDIANgFIAQgEQAIgCAHABQAQAAALADQAMAFAHAHQAHAHADALQADAKAAAOIAABqIgCADIgCABIgGABIgFgBIgDgBIgBgDIAAgSQgLAMgNAGQgNAGgMABQgMgBgKgCgAgKAGQgJADgGAEQgHAFgDAFQgDAHAAAIQAAANAJAIQAJAJAPAAQALgBALgGQALgHAMgNIAAglIgdAAQgLAAgKACg");
	this.shape_106.setTransform(168,117);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AAWBqQgLAAgJgDQgGgDgFgHQgFgGgCgKQgDgKAAgNIAAhhIgYAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgCgDAAgEIAAgEIACgDIABgCIACAAIAYAAIAAgnIABgCIABgBIADgBIAFgBIAFABIAEABIAAABIAAACIAAAnIAsAAIACAAIABACIABADIABAEQAAAEgCADQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgsAAIAABeQAAASAFAJQAFAKAOAAIAHgBIAGgCIAFgCIADgBIACABIABABIABADIAAADIgBAGQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgDACIgHACIgHACIgHAAg");
	this.shape_107.setTransform(153.8,114.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgZBQQgPgGgJgKQgKgLgFgQQgFgQAAgVQAAgSAFgRQAFgQAKgLQAKgLANgFQAOgHAPABQASgBAMAHQANAGAIAJQAIAKAEAOQAEANAAAPIAAAFQAAAGgEAAQgDACgDABIhqAAQAAAOADAMQACAMAHAIQAHAJAKAEQALAFAOAAQALAAAJgBIAPgFIAKgEIAGgCIACABIACABIABADIAAAEIAAADIgBACIgBABIgBADIgGADIgMAEIgRAEQgJACgMAAQgQgBgOgFgAgSg+QgJAEgGAIQgGAHgEAKQgDAKAAAKIBeAAQABgZgMgPQgNgOgXABQgKAAgJAEg");
	this.shape_108.setTransform(139.2,117);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgDB6IgEAAIgCgCIAAgCIAAjrIAAgCIACgBIAEgBIADgBIAFABIACABIACABIABACIAADrIgBACIgCACIgCAAIgFABIgDgBg");
	this.shape_109.setTransform(126.4,113.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("Ag6B0IgEAAIgEgBIgBgCIgBgBIAAjdIABgBIABgCIADgBIAFAAIAEAAIADABIACACIAAABIAAAYIAOgOIAOgJQAGgEAHgBQAHgCAGAAQASAAAMAGQAMAHAIALQAHAMAEAPQADAPAAASQAAAUgEAPQgFAPgJAMQgIAMgNAGQgNAGgRAAQgFAAgGgCIgMgEIgLgIIgNgLIAABSIgBABIgBACIgDABIgGAAgAgHhfQgGACgGADQgHAFgHAGIgOAQIAABDQANAQAMAJQAMAIALAAQANAAAIgFQAJgHAFgJQAGgKADgKQACgMAAgMQAAgNgCgNQgCgMgFgKQgFgJgIgHQgJgFgNAAQgEAAgGACg");
	this.shape_110.setTransform(113.6,120);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("ABhBUIgDAAIgCgCIAAgCIAAhgQAAgLgCgKQgCgJgEgGQgFgHgGgEQgHgDgJAAQgLAAgLAJQgMAIgNARIAABwIgBACIgBACIgDAAIgFABIgDgBIgEAAIgBgCIgBgCIAAhgQAAgLgCgKQgCgJgEgGQgFgHgGgEQgHgDgJAAQgLAAgLAJQgMAIgNARIAABwIgBACIgBACIgDAAIgGABIgEgBIgEAAIgBgCIgBgCIAAidIABgCIABgCIADgBIAFAAIAFAAIADABIACACIAAACIAAAWQAOgPAMgGQAMgIAMABQAKgBAIADQAIACAGAFQAGAEAEAGQACAFADAIIAQgPQAHgHAHgDQAGgFAGgBQAGgCAGABQAPAAALAEQAKAGAGAJQAGAJADAMQADAMAAANIAABiIgBACIgBACIgDAAIgGABIgFgBg");
	this.shape_111.setTransform(89.5,116.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AggBPQgPgFgJgLQgJgMgFgPQgFgPAAgUQAAgRAFgQQAFgQAKgMQAKgLAOgHQAPgGARAAQATAAAOAFQAOAGAJALQAJALAFAPQAFARAAATQAAARgFAQQgFAQgKALQgJAMgPAHQgPAGgRABQgTAAgNgHgAgXg9QgKAFgHAJQgGAJgDAMQgEAMAAAOQAAANADAMQADANAGAJQAGAJAKAFQALAGAOAAQAOAAAKgFQAKgGAHgIQAGgKAEgMQADgMAAgOQAAgMgDgMQgDgNgGgJQgGgJgKgFQgLgHgPABQgMAAgLAFg");
	this.shape_112.setTransform(65.8,117);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgZBsQgSgHgLgPQgNgOgGgWQgHgUAAgbQAAgaAHgXQAHgVANgQQANgPARgIQASgIAUAAQAKAAAKABIARAFQAIADAGAEIAJAHIAEACIABADIAAADIAAAEIAAAEIgBADIgBACIgDABQgCAAgEgEIgNgIQgGgEgMgEQgKgDgOAAQgPAAgNAHQgNAFgJANQgLAMgFATQgFASAAAWQAAAWAFASQAFARAJANQAKAMANAGQAOAGAQAAQAOABAKgEIASgIIANgIQAFgEACAAIACABIABACIABACIAAAFIAAADIgBADIAAADIgDACIgHAGIgOAHQgJAEgLACQgLADgOAAQgTABgRgIg");
	this.shape_113.setTransform(47.3,113.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#F49723").s().p("AAAAYQgMAAgGgFQgGgGAAgKQAAgFADgGQACgHAFgEQAGgFAHABQAKAAAIAFQAHAHABAKQAAAJgDAGQgEAGgMAEg");
	this.shape_114.setTransform(682.6,67.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#F49723").s().p("AgxCiQgRgNgJgYIgBgCIgEgNQgCgHAAgHQAAgGAHgEQAHgCAGgBIAGgBIAKgBIAJgBIACAAIACAAIABACIAEARQADAKAFAIQAGAHAKABQAHAAAJgFQAJgFAGgIQAGgIAAgKQAAgZgMgTQgMgTgQgPIgjgbQgRgOgMgSQgMgRgBgYQABgVAKgUQAKgTATgNQASgMAZgBIAEABIAFACQANADAJAEQAIAEAHAHQAGAHAGANIADAJIABAHIgeAiIgBAAIgCABQgEgBgEgGIgJgOQgFgJgGgGQgFgGgKgBQgKAAgEAGQgEAGAAAKQAAASALAPQAMAPAPANQARAOARAQQASAOAMAVQANAVADAeQABAagLAXQgMAYgVAPQgVAOgaABQgcAAgQgOg");
	this.shape_115.setTransform(668.7,51.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#F49723").s().p("AhQC/IgBgCIAAgCIAAgCIABgUIADgcIACgrIADhBIAFhdQADhBATgeQAUgfAlABIAFAAIAGAAQARABAMAIQAMAJAFAOQAHAOACAQQADAPAAAPIAAACIABAJIAAAWIAAAtIgBBLIgCB3IgDACIgSAAIgLAAIgNgCIAAgMIgCgjIgFhEIgDAAIgYAAIgdABIgBARIAAAWIABAjIABA0IAAACIgBACgAgKh3QgIALgCAbIgCAaIgBAWIAAAcIAAAHIAAALIABAHIAAACIAMAAIAjABIABgBIABgCIAFhZIAAgIQAAgXgIgNQgHgOgKgCIgDAAQgGAAgIAKg");
	this.shape_116.setTransform(649.2,52.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#F49723").s().p("AiDC1QgCgEAAgEIABgiIABg2IADhCQACghADgiQACgiAEgdQAEgdAFgTQAFgTAGgFIAFgBIAFAAQAVABANANQANAMAIAUQAHAUAEAWIAIAmIABAHIACAFIADgDIACgDIAQgjIATghIASgcQAKgOANgJQANgJASAAQAIAAAEAGQAFAHACAJIAEASIABAOQAEBIACBGQACBIAABHIAAAEQgCAEgHACQgHACgIAAIgRABIgLgCIgCgBIAAgGIgCgoIgBg2IgCg7IgCgzIgBgoIgiBLIgTAlIgJAPIgCACIgCACIgdgCQgMgRgIgTIgQgkIgEgJIgFgIIgDBrQgBA3ABA3IgBACIgBADQAAABgHAAIgRACIgRAAIgLABQgEgBgCgDg");
	this.shape_117.setTransform(624.7,52);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#F49723").s().p("AgwC5QgEgBgCgEQgCgFAAgFIgBgHIgXlJIAAgJIBqgIIAFgBIAGABQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAIADAVQACAKAAALIAAAGQgCACgJABIgXACIgWACIgPACIAAAFIAAANIABAcIACAhQABARADALQACALADAAIA/gJIABAAIABgBIAKAvIhLAKIAAAGQAAASABASIADAjIABAHQABAEAEAAIALgBIAWgEIAXgDIAQgBQAEAAABACQABADAAADIADAMIACAOIABANIAAADQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAIgYACIgjAEQgUADgjACIgDABIgFAAIgDAAIgBABIgBAAg");
	this.shape_118.setTransform(600.4,51.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#F49723").s().p("Ag/CvIgCAAIgCgEIgCkcIAAgKIAAgRIAAgQIAAgLIACgCIACgDIAXgCIAYAAIADAAIACACIAAECIABAHIAAAJIABAEIABADIAFAAQAOAAARgDIAggHIACAAQAFAAACAGQACAGABAIIAAAPIAAALIAAAGQgDADgHACIgRADIgSACIgLACIgIABIgMACIgNABIgIACIgZAGIgEAAIgFAAIgCAAg");
	this.shape_119.setTransform(582.4,52);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#F49723").s().p("AhBCzIgDgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBgBgBIgBgHIAAgGIgbk9IAAgEQAAgFAFgCIAKgFIAKgCIAIgBIAKgCIAGAAIAEAAQAYgBAUAHQATAGAMARQAMAQABAdQAAAPgEANQgFAOgLAKIgFAEIgHAGIgFADIgBADIAQACIAPAEQAWAHAOASQAPAQAHAWQAHAXAAAYQAAAJgCALQgCALgEAKQgFAKgIAGQgfASglALQgjALgnABIgCAAgAgaAKIgHACQAAAOADAOIAEAcIACAMIACATIACATIABAMIAEAAQAPgDALgFQAOgFAKgOIADgMIAAgLIAAgDQABgggOgRQgOgSgfAAIgGAAgAgxiEIgCABIAHBIQAMACAIgEQAIgFAFgJQAEgKAAgLQAAgUgGgJQgHgIgUAAIgIAAIgBABg");
	this.shape_120.setTransform(562.6,51.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#F49723").s().p("AgpCuQgTgMgOgUQgOgUgEgWQgFgjgBgkQgBghAFglQACgZAHgXQAGgYAMgVQAMgVAUgRQAKgIANgDQAMgDANAAQAbAAARAQQASAPAJAaQAKAbACAiQAEAhgCAkIgCAtQgCAZgGAYQgFAZgLAVQgLAUgSANQgRAMgaABQgVgBgUgMgAgKh+QgOAUgJAkQgJAkAAAuIAAAQQgBAXACATQABAUAGAPQAGAOAOAIQAMAGAIgEQAKgDAHgJQAIgKADgKIACgLIAFgjIAHhEIAAgIQgBg8gJgcQgJgcgOgCIgCAAQgMAAgLARg");
	this.shape_121.setTransform(539.8,52.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#F49723").s().p("AgcAMIgBgCQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAAAgBAAQgCAXAAAeQABAeADAfQADAfABAaIAAAFIAAAEIg0AAIgCgCIgBgHIAAgKIAAgLIgBgUIAAgkIABg7IABhYIABiBIABgPQABgCALgBIAaAAIAeABIAUACIACAAIADAAQASACAOAKQAOALAKAQQAIAPADASIAAAFIAAAHIABAFQAAAXgHAOQgHAPgPAIQgOAJgWAFIADAMIADAMIA6CqIAAAKIgGACIgMAFIgMAEIgIACgAggh1QAAASgDAeIAAAFIABAEIAEAAQARAAAMgDQAJgDAIgKQAGgJAAgSQABgMgHgIQgHgIgJgEQgJgDgLAAIgGAAQgGACAAATg");
	this.shape_122.setTransform(518.8,51.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#F49723").s().p("Ag2DDQgGhIgEhJQgFhGgDhIIgDgiQgDgRAAgRIAAgFIAAgHIAAgFQACgHAFgEQAGgEAHgBIANgCQAlAAARAFQAVAFALAIQAKAHAGAIQANAPAEAPQAFAQAAATQAAAWgKAOQgKAOgSAKIgFACIgQAEQgLACgUACIALDMIAAAMIgOACIgWAEIgKABIgIgBgAgSiNQgBACABADIABAdIACAcQABAAAAABQAAAAAAAAQABABAAAAQAAAAABAAIADAAQARAAAIgKQAHgKABgRQgBgJgHgGQgGgHgJgDQgIgEgHAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAABg");
	this.shape_123.setTransform(499.6,50.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#F49723").s().p("AgxCiQgRgNgJgYIgBgCIgEgNQgCgHAAgHQAAgGAHgEQAHgCAGgBIAGgBIAKgBIAJgBIACAAIACAAIABACIAEARQADAKAFAIQAGAHAKABQAHAAAJgFQAJgFAGgIQAGgIAAgKQAAgZgMgTQgMgTgQgPIgjgbQgRgOgMgSQgMgRgBgYQABgVAKgUQAKgTATgNQASgMAZgBIAEABIAFACQANADAJAEQAIAEAHAHQAGAHAGANIADAJIABAHIgeAiIgBAAIgCABQgEgBgEgGIgJgOQgFgJgGgGQgFgGgKgBQgKAAgEAGQgEAGAAAKQAAASALAPQAMAPAPANQARAOARAQQASAOAMAVQANAVADAeQABAagLAXQgMAYgVAPQgVAOgaABQgcAAgQgOg");
	this.shape_124.setTransform(466.5,51.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#F49723").s().p("AgwC5QgEgBgCgEQgCgFAAgFIgBgHIgXlJIAAgJIBqgIIAFgBIAGABQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAIADAVQACAKAAALIAAAGQgCACgJABIgXACIgWACIgPACIAAAFIAAANIABAcIACAhQABARADALQACALADAAIA/gJIABAAIABgBIAKAvIhLAKIAAAGQAAASABASIADAjIABAHQABAEAEAAIALgBIAWgEIAXgDIAQgBQAEAAABACQABADAAADIADAMIACAOIABANIAAADQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIgYACIgjAEQgUADgjACIgDABIgFAAIgDAAIgBABIgBAAg");
	this.shape_125.setTransform(447.1,51.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#F49723").s().p("AgRCyIgEgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAgBgBQAAhJgDhJIgGiPQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBgBAAAAIgFAAIgOABQgHACgJAAIgCgBIgDgDIAAg5ICUAAIAAA/IgzAAIgCACIAAAdIAHB9QADA/AAA/IgBAGQgBADgDABg");
	this.shape_126.setTransform(428.7,51.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#F49723").s().p("AhaCyIgBgHIgCgQIgCgTIgBgPIgRj1IgBgMIgBgUIgBgPIAAgEIABgCIABgBIApADIAPABIADAAQAFAAAJAQQAKAQAMAZIAYA4IAaA6IAXAxIACgWIABgpIABg1IACgzIADgnQADgPADAAIAQAAQALAAAUAEIABADIAAADIAAABIgCASIgBAbIgBAuIAABJIgBBwIAAAfIAAALIgBAMIAAAGIgCABIgTABQgKAAgLgCIiAj6IgBAAIAAABIAAAHIACAQIAEAkIAIBGIAMB3IAAAFQgCACgEAAIgQAAIggABg");
	this.shape_127.setTransform(406.7,51);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#F49723").s().p("AgwC5QgEgBgCgEQgCgFAAgFIgBgHIgXlJIAAgJIBqgIIAFgBIAGABQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAIADAVQACAKAAALIAAAGQgCACgJABIgXACIgWACIgPACIAAAFIAAANIABAcIACAhQABARADALQACALADAAIA/gJIABAAIABgBIAKAvIhLAKIAAAGQAAASABASIADAjIABAHQABAEAEAAIALgBIAWgEIAXgDIAQgBQAEAAABACQABADAAADIADAMIACAOIABANIAAADQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIgYACIgjAEQgUADgjACIgDABIgFAAIgDAAIgBABIgBAAg");
	this.shape_128.setTransform(384,51.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#F49723").s().p("AgQCoQgCgKgDgaIgFg7IgEhIIgDhGIgDg/IAAgHIABgJIABgJQAEgFANgCQANgCAWgBQAEABACAEIADAJQAAgHAAAMIACAoIADA/IADBIIABBIIABA7IAAAGIgCACIgFAAIgIABIgTABQgHgBgKABg");
	this.shape_129.setTransform(369.4,51.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#F49723").s().p("AABCyQgZAAgVgHQgUgGgOgQQgNgRgFgcQgFgegDgeQgCgdAAgcIADhNIACgrIABgUIABgHIABgGIAEgHQACgDADgBQANAEAOABIAbABIABACIABACIAAADIAAAEIgBAEQgEAcgDAmQgDAmAAAqQAAAoAGAnQABAMAFAMQAFAMAJAIQAJAIAMAAQAGABAGgCQAFAAAFgFQAJgKAFgPQAFgPACgQQACgQAAgMIgBguIgBgwIgCgnQgCgUAAgUIABgEQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBIApgFIACgBIADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAABAAAAIAAgBIAAAAQACAAACATIAEAxQABAeAAAlQgBAigFAlQgEAlgLAgQgKAdgUANQgTANgfAAg");
	this.shape_130.setTransform(352.4,50.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#F49723").s().p("Ag1CrQgZgIgRgUQgRgUgIgiIgFgaQgDgMAAgMQgCgMAAgQQABgfAJghQAKgiAUgcQATgdAcgRQAdgRAjgBQAOAAAPADQAPADAOAGQAOAGAKALIAGAGQACADAAAEQABABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgFAGIgPANIgCABIgCACIgCABIgBAAQgHAAgIgEIgXgGQgOgDgYAAQgPAAgOALQgNALgLASQgKARgHAUQgHAUgDATQgEARAAANQAAASADASQAEASAHAPQAIAQAOAJQANAKAVAAQALAAAOgDQANgDAMgJQALgKAJgTQAIgTAEggIAAgIIgCgJQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAIgCAAIgaACQgPACgVABIgBgCQgCgMgDgJQgBgLgBgMIABgCIABgCQAOgFAWgDQAVgDAXgBQAYAAAUABIAEAsQACAVgBAVQgBAWgHAaIgBABIAAABQgMAogfAXQgfAXgqABIgDAAQgeAAgZgJg");
	this.shape_131.setTransform(325.7,50.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#F49723").s().p("AgQCoQgDgKgCgaIgFg7IgEhIIgEhGIgCg/IAAgHIAAgJIACgJQADgFANgCQAOgCAVgBQAFABACAEIACAJQABgHAAAMIACAoIADA/IADBIIABBIIABA7IAAAGIgCACIgFAAIgIABIgSABQgIgBgKABg");
	this.shape_132.setTransform(306.1,51.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#F49723").s().p("AgxCiQgRgNgJgYIgBgCIgEgNQgCgHAAgHQAAgGAHgEQAHgCAGgBIAGgBIAKgBIAJgBIACAAIACAAIABACIAEARQADAKAFAIQAGAHAKABQAHAAAJgFQAJgFAGgIQAGgIAAgKQAAgZgMgTQgMgTgQgPIgjgbQgRgOgMgSQgMgRgBgYQABgVAKgUQAKgTATgNQASgMAZgBIAEABIAFACQANADAJAEQAIAEAHAHQAGAHAGANIADAJIABAHIgeAiIgBAAIgCABQgEgBgEgGIgJgOQgFgJgGgGQgFgGgKgBQgKAAgEAGQgEAGAAAKQAAASALAPQAMAPAPANQARAOARAQQASAOAMAVQANAVADAeQABAagLAXQgMAYgVAPQgVAOgaABQgcAAgQgOg");
	this.shape_133.setTransform(291,51.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#F49723").s().p("AgxCiQgRgNgJgYIgBgCIgEgNQgCgHAAgHQAAgGAHgEQAHgCAGgBIAGgBIAKgBIAJgBIACAAIACAAIABACIAEARQADAKAFAIQAGAHAKABQAHAAAJgFQAJgFAGgIQAGgIAAgKQAAgZgMgTQgMgTgQgPIgjgbQgRgOgMgSQgMgRgBgYQABgVAKgUQAKgTATgNQASgMAZgBIAEABIAFACQANADAJAEQAIAEAHAHQAGAHAGANIADAJIABAHIgeAiIgBAAIgCABQgEgBgEgGIgJgOQgFgJgGgGQgFgGgKgBQgKAAgEAGQgEAGAAAKQAAASALAPQAMAPAPANQARAOARAQQASAOAMAVQANAVADAeQABAagLAXQgMAYgVAPQgVAOgaABQgcAAgQgOg");
	this.shape_134.setTransform(257.4,51.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#F49723").s().p("AgpCuQgTgMgOgUQgOgUgEgWQgFgjgBgkQgBghAFglQACgZAHgXQAGgYAMgVQAMgVAUgRQAKgIANgDQAMgDANAAQAbAAARAQQASAPAJAaQAKAbACAiQAEAhgCAkIgCAtQgCAZgGAYQgFAZgLAVQgLAUgSANQgRAMgaABQgVgBgUgMgAgKh+QgOAUgJAkQgJAkAAAuIAAAQQgBAXACATQABAUAGAPQAGAOAOAIQAMAGAIgEQAKgDAHgJQAIgKADgKIACgLIAFgjIAHhEIAAgIQgBg8gJgcQgJgcgOgCIgCAAQgMAAgLARg");
	this.shape_135.setTransform(236.2,52.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#F49723").s().p("Ag/CvIgDAAIgBgEIgCkcIAAgKIAAgRIAAgQIAAgLIACgCIABgDIAYgCIAYAAIADAAIACACIAAECIAAAHIABAJIAAAEIACADIAFAAQAOAAARgDIAfgHIADAAQAEAAADAGQACAGABAIIAAAPIAAALIAAAGQgCADgIACIgRADIgSACIgLACIgIABIgMACIgNABIgIACIgZAGIgEAAIgFAAIgCAAg");
	this.shape_136.setTransform(216.4,52);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#F49723").s().p("AgwC5QgEgBgCgEQgCgFAAgFIgBgHIgXlJIAAgJIBqgIIAFgBIAGABQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAIADAVQACAKAAALIAAAGQgCACgJABIgXACIgWACIgPACIAAAFIAAANIABAcIACAhQABARADALQACALADAAIA/gJIABAAIABgBIAKAvIhLAKIAAAGQAAASABASIADAjIABAHQABAEAEAAIALgBIAWgEIAXgDIAQgBQAEAAABACQABADAAADIADAMIACAOIABANIAAADQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAIgYACIgjAEQgUADgjACIgDABIgFAAIgDAAIgBABIgBAAg");
	this.shape_137.setTransform(184.6,51.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#F49723").s().p("AgTCrIgHgRQgEgJgGgYIgQg3IgRhDIgQhEIgMg5QgFgYAAgJIAAgGIAKgCIAQgCIAQgCIALAAIAHACQAFABABADIAnDnIAnjUIABgIQAAgDACgDIAPAAIAUABIAVADIABACIABACQgBAMgDAMQgEANgBALIgDAUIgJA2IgPBRQgKAvgNA4IgCALQgCADgDABIgKACIgBAAIgCAAIgMABIgcAAg");
	this.shape_138.setTransform(163.4,51.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#F49723").s().p("Ag/CvIgCAAIgCgEIgCkcIAAgKIAAgRIAAgQIAAgLIACgCIACgDIAXgCIAYAAIADAAIACACIAAECIABAHIAAAJIABAEIABADIAFAAQAOAAARgDIAggHIACAAQAFAAACAGQACAGABAIIAAAPIAAALIAAAGQgDADgHACIgRADIgSACIgLACIgIABIgMACIgNABIgIACIgZAGIgEAAIgFAAIgCAAg");
	this.shape_139.setTransform(143.2,52);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#F49723").s().p("AgwC5QgEgBgCgEQgCgFAAgFIgBgHIgXlJIAAgJIBqgIIAFgBIAGABQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAIADAVQACAKAAALIAAAGQgCACgJABIgXACIgWACIgPACIAAAFIAAANIABAcIACAhQABARADALQACALADAAIA/gJIABAAIABgBIAKAvIhLAKIAAAGQAAASABASIADAjIABAHQABAEAEAAIALgBIAWgEIAXgDIAQgBQAEAAABACQABADAAADIADAMIACAOIABANIAAADQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIgYACIgjAEQgUADgjACIgDABIgFAAIgDAAIgBABIgBAAg");
	this.shape_140.setTransform(125.2,51.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#F49723").s().p("AABCyQgZAAgVgHQgUgGgOgQQgNgRgFgcQgFgegDgeQgCgdAAgcIADhNIACgrIABgUIABgHIABgGIAEgHQACgDADgBQANAEAOABIAbABIABACIABACIAAADIAAAEIgBAEQgEAcgDAmQgDAmAAAqQAAAoAGAnQABAMAFAMQAFAMAJAIQAJAIAMAAQAGABAGgCQAFAAAFgFQAJgKAFgPQAFgPACgQQACgQAAgMIgBguIgBgwIgCgnQgCgUAAgUIABgEQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBIApgFIACgBIADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAABAAAAIAAgBIAAAAQACAAACATIAEAxQABAeAAAlQgBAigFAlQgEAlgLAgQgKAdgUANQgTANgfAAg");
	this.shape_141.setTransform(103.9,50.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#F49723").s().p("AgxCiQgRgNgJgYIgBgCIgEgNQgCgHAAgHQAAgGAHgEQAHgCAGgBIAGgBIAKgBIAJgBIACAAIACAAIABACIAEARQADAKAFAIQAGAHAKABQAHAAAJgFQAJgFAGgIQAGgIAAgKQAAgZgMgTQgMgTgQgPIgjgbQgRgOgMgSQgMgRgBgYQABgVAKgUQAKgTATgNQASgMAZgBIAEABIAFACQANADAJAEQAIAEAHAHQAGAHAGANIADAJIABAHIgeAiIgBAAIgCABQgEgBgEgGIgJgOQgFgJgGgGQgFgGgKgBQgKAAgEAGQgEAGAAAKQAAASALAPQAMAPAPANQARAOARAQQASAOAMAVQANAVADAeQABAagLAXQgMAYgVAPQgVAOgaABQgcAAgQgOg");
	this.shape_142.setTransform(81.7,51.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#F49723").s().p("AgwC5QgEgBgCgEQgCgFAAgFIgBgHIgXlJIAAgJIBqgIIAFgBIAGABQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAIADAVQACAKAAALIAAAGQgCACgJABIgXACIgWACIgPACIAAAFIAAANIABAcIACAhQABARADALQACALADAAIA/gJIABAAIABgBIAKAvIhLAKIAAAGQAAASABASIADAjIABAHQABAEAEAAIALgBIAWgEIAXgDIAQgBQAEAAABACQABADAAADIADAMIACAOIABANIAAADQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIgYACIgjAEQgUADgjACIgDABIgFAAIgDAAIgBABIgBAAg");
	this.shape_143.setTransform(62.2,51.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#F49723").s().p("AgcAMIgBgCQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAAAgBAAQgCAXABAeQAAAeADAfQADAfABAaIAAAFIAAAEIg0AAIgCgCIgBgHIAAgKIAAgLIgBgUIAAgkIABg7IABhYIABiBIABgPQABgCALgBIAaAAIAeABIAUACIACAAIACAAQATACAOAKQAOALAKAQQAIAPADASIAAAFIAAAHIABAFQAAAXgHAOQgIAPgOAIQgOAJgWAFIADAMIACAMIA7CqIAAAKIgGACIgLAFIgNAEIgIACgAggh1QAAASgDAeIAAAFIABAEIAEAAQARAAALgDQAKgDAIgKQAGgJAAgSQABgMgHgIQgHgIgJgEQgJgDgLAAIgGAAQgGACAAATg");
	this.shape_144.setTransform(43,51.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]}).wait(1));

	// Capa 2
	this.flecha1a = new lib.Símbolo2();
	this.flecha1a.parent = this;
	this.flecha1a.setTransform(71,709.9,1,1,0,0,0,0,-45.8);
	new cjs.ButtonHelper(this.flecha1a, 0, 1, 1);

	this.flecha1b = new lib.Símbolo1();
	this.flecha1b.parent = this;
	this.flecha1b.setTransform(1089.3,709.2,1,1,0,0,0,0,-46.5);
	new cjs.ButtonHelper(this.flecha1b, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.flecha1b},{t:this.flecha1a}]}).wait(1));

	// Capa 3
	this.instance = new lib.luz();
	this.instance.parent = this;

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgOAQQgDgEAAgMQAAgLAEgDQAEgFAJAAQAKAAAFAEQADAEAAALQAAAMgDAEQgFAEgKAAQgJAAgFgEg");
	this.shape_145.setTransform(797.4,123.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgfBTQgKgDgHgHQgIgFgEgKQgDgIAAgMQgBgNAGgKQAGgKAKgFQAKgGAPgDQAPgEAQAAIAWAAIAAgMQgBgJgBgHQgCgHgEgEQgEgFgHgDQgIgCgJAAQgJAAgIACQgJADgHAEIgKAFQgFADgCAAIgCgBIgCgDIgBgDIgBgFIABgGQAAgEADgCIAIgFIANgFIARgFQAJgCAHAAQARAAAMAFQAMADAHAIQAIAHADALQADALABAPIAABpQAAAAgBABQAAAAAAABQAAAAAAAAQgBABAAAAIgEABIgHABIgHgBIgEgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgBAAAAIAAgQQgKALgMAGQgNAHgMAAQgNAAgKgEgAgIAJQgIABgHAFQgFAEgDAFQgDAGABAHQgBAMAJAHQAHAIAOgBQAKAAAKgFQAJgGALgMIAAghIgZAAQgLAAgIACg");
	this.shape_146.setTransform(783.7,116.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AABBnQgHgDgGgHQgFgGgDgKQgCgLAAgNIAAhbIgWAAQgDAAgCgDQgBgCAAgHIAAgFIABgEIACgCIADgBIAWAAIAAgmIAAgCIACgCIAFgBIAHAAIAIAAIACABIACACIABACIAAAmIApAAIACABIACACIABAEIAAAFQAAAHgCACQgBADgCAAIgpAAIAABWQAAARAFAIQAEAIANAAIAHAAIAFgCIAFgCIADAAIACAAIABACIABADIAAAFIgBAIQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABIgEACIgGACIgIACIgIAAQgMAAgJgDg");
	this.shape_147.setTransform(769.3,114.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgFB6IgFgBIgCgCIgBgCIAAjpIABgCQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAIAFgBIAFgBIAGABIAFABIACACIABACIAADpIgBACIgCACIgFABIgGABIgFgBg");
	this.shape_148.setTransform(759.5,113.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgfBTQgKgDgHgHQgIgFgDgKQgFgIAAgMQAAgNAGgKQAFgKALgFQAKgGAOgDQAQgEAQAAIAWAAIAAgMQAAgJgCgHQgCgHgEgEQgFgFgHgDQgHgCgJAAQgJAAgJACQgIADgGAEIgLAFQgEADgDAAIgCgBIgCgDIgBgDIgBgFIABgGQABgEACgCIAIgFIAOgFIAQgFQAJgCAHAAQARAAAMAFQAMADAHAIQAIAHADALQADALABAPIAABpQAAAAgBABQAAAAAAABQAAAAAAAAQgBABAAAAIgEABIgHABIgHgBIgEgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgBAAAAIAAgQQgKALgNAGQgMAHgNAAQgMAAgKgEgAgIAJQgJABgFAFQgGAEgDAFQgCAGAAAHQAAAMAIAHQAHAIAOgBQAKAAAJgFQAKgGALgMIAAghIgZAAQgLAAgIACg");
	this.shape_149.setTransform(746.2,116.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgQB6IgFgBIgDgBIAAgCIAAiJIgWAAQgDAAgCgDQgBgCAAgHIAAgGIABgDIACgCIADgBIAWAAIAAgQQAAgRADgMQADgMAHgIQAGgHAHgEQAKgDANAAIAMABIAJACIAEADIACADIABADIAAAHIAAAFIgBADIgBABIgCABIgDgBIgEgBIgHgCIgIgBQgGAAgFACQgFACgCAFQgDAEgBAIQgCAGAAALIAAARIAjAAIADABIACACIABADIAAAGQABAHgCACQgCADgDAAIgjAAIAACJIgBACIgCABIgCABIgHABIgHgBg");
	this.shape_150.setTransform(733.1,113);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgaBRQgPgFgKgMQgKgKgFgQQgFgRAAgVQAAgSAFgQQAFgQAKgMQAKgMAOgFQAOgHAQAAQASAAANAHQANAFAJALQAIAJAEAOQAEAOAAAQIAAAEQAAAGgDACQgEADgEABIhmAAQAAANACAKQADAKAGAIQAGAHAKAEQAKAFAMAAQAMAAAJgCIAPgEIAKgEIAHgCIACABIABACIABADIAAAFIAAAEIAAADIgBADIgCABIgFADIgNAFIgRAEQgKACgLAAQgSAAgOgGgAgQg7QgIAEgGAHQgFAGgDAJQgDAKAAAJIBUAAQAAgXgKgNQgLgNgVAAQgJAAgIAEg");
	this.shape_151.setTransform(709.9,116.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AglBQQgLgFgGgJQgHgKgDgMQgDgMAAgRIAAheIABgCIACgCIAFgBIAHAAIAHAAIAEABIADACIAAACIAABaQAAAOADAJQABAIAFAGQAEAGAGADQAGADAJAAQAJAAALgIQAKgHAMgPIAAhtIABgCIACgCIAFgBIAHAAIAHAAIAFABIACACIABACIAACcIgBADIgCABIgEABIgHABIgGgBIgEgBIgCgBIgBgDIAAgVQgNAPgNAHQgOAHgLAAQgQAAgLgFg");
	this.shape_152.setTransform(691.6,117);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AAzB0IgFgBIgCgBIgBgDIAAhRIgOAMQgGAFgHADQgGADgGACQgFABgHAAQgRAAgMgHQgMgGgIgMQgHgLgEgQQgDgOAAgRQAAgUAEgRQAEgQAJgMQAJgLANgGQAMgHARAAQAFAAAGACQAGABAGAEQAGADAHAFIANAMIAAgTIABgCIACgCIAEgBIAHAAIAFAAIAFABIACACIAAACIAADbIgBADIgCABIgEABIgHABIgHgBgAgUhWQgHAGgFAIQgFAJgCALQgCALAAALQAAAMACAMQABAJAFAJQAFAJAHAFQAIAFALAAIAJgBQAGgCAFgEQAGgDAGgGQAGgGAHgJIAAg9QgMgPgLgHQgLgIgKAAQgLAAgIAFg");
	this.shape_153.setTransform(672.3,119.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgiBRQgPgHgKgLQgJgLgFgPQgEgQgBgUQAAgSAGgQQAFgQAJgMQALgLAOgHQAQgGASgBQATAAAPAHQAOAFAKALQAKALAFAQQAFAQAAAUQgBARgFARQgEAQgLAMQgKALgPAHQgQAHgRAAQgUgBgOgFgAgVg5QgIAFgGAJQgHAHgCAMQgDALgBANQAAAMADAMQACALAGAJQAGAIAIAFQAKAFANAAQAMAAAJgFQAKgEAFgIQAHgJADgLQACgMAAgNQAAgLgCgMQgDgLgFgJQgGgIgIgFQgKgFgOAAQgLAAgKAEg");
	this.shape_154.setTransform(645.7,116.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AglB0QgMgGgIgMQgHgLgEgQQgDgQAAgRQAAgUAEgRQAEgOAJgMQAJgLAMgGQANgHARAAQAMAAALAGQAMAGALAMIAAhcIABgCIACgCIAFgBIAGAAIAIAAIAEABIACACIABACIAADoIAAADIgCACIgFAAIgFABIgHgBIgEAAIgCgCIgBgDIAAgVQgMAOgOAIQgNAHgOAAQgRAAgNgHgAgUgTQgHAGgFAIQgFAHgCALQgCALAAALQAAAMACALQABAMAFAJQAFAJAHAFQAIAFALAAIAJgBQAGgCAFgEQAGgDAGgGQAGgGAHgJIAAg/QgMgNgLgHQgLgIgKAAQgLAAgIAFg");
	this.shape_155.setTransform(626.3,113.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AAuBVIgEgBIgDgCIgBgCIAAhbQAAgNgCgJQgBgIgFgGQgEgGgGgDQgHgDgIAAQgJAAgLAIQgLAHgLAPIAABtIgBACIgDACIgEABIgHAAIgHAAIgEgBIgDgCIgBgCIAAicIABgDIACgBIAEgBIAHgBIAGABIAEABIACABIAAADIAAAVQAOgPANgHQANgHAMAAQAQAAAKAFQALAFAHAJQAHAJADANQADALAAARIAABfIgBACIgDACIgEABIgHAAIgHAAg");
	this.shape_156.setTransform(608,116.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgfBTQgKgDgHgHQgIgFgDgKQgEgIAAgMQgBgNAGgKQAGgKAKgFQAKgGAPgDQAOgEARAAIAWAAIAAgMQgBgJgBgHQgCgHgEgEQgEgFgHgDQgHgCgKAAQgJAAgIACQgJADgHAEIgKAFQgFADgCAAIgCgBIgCgDIgBgDIgBgFIABgGQAAgEADgCIAIgFIANgFIARgFQAJgCAHAAQARAAAMAFQAMADAHAIQAIAHADALQADALAAAPIAABpQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgEABIgHABIgHgBIgEgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgBAAAAIAAgQQgKALgMAGQgNAHgMAAQgNAAgKgEgAgIAJQgIABgHAFQgFAEgDAFQgDAGABAHQgBAMAJAHQAHAIAOgBQAJAAALgFQAJgGALgMIAAghIgZAAQgLAAgIACg");
	this.shape_157.setTransform(589.3,116.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("ABfBVIgEgBIgDgCIAAgCIAAheQAAgKgCgJQgCgIgEgGQgEgGgGgDQgGgDgIAAQgKAAgKAIQgKAHgMAPIAABtIgBACIgCACIgFABIgGAAIgFAAIgFgBIgCgCIgBgCIAAheQAAgKgCgJQgCgIgEgGQgEgGgFgDQgGgDgIAAQgLAAgKAIQgKAHgMAPIAABtIgBACIgCACIgEABIgHAAIgHAAIgFgBIgCgCIgBgCIAAicIABgDIACgBIAEgBIAGgBIAHABIAEABIACABIAAADIAAAVQAOgPAMgHQANgHANAAQAKAAAHACQAIACAGAFQAGAEACAFQAFAGACAHIAPgPQAIgGAGgDQAHgEAGgBQAGgCAGAAQAQAAAKAFQALAFAGAJQAGAJADANQADALAAAOIAABiIgBACIgCACIgFABIgHAAIgHAAg");
	this.shape_158.setTransform(566.9,116.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AglBQQgLgFgGgJQgHgKgDgMQgDgMAAgRIAAheIABgCIACgCIAFgBIAHAAIAHAAIAEABIADACIAAACIAABaQAAAOADAJQABAIAFAGQAEAGAGADQAGADAJAAQAJAAALgIQAKgHAMgPIAAhtIABgCIACgCIAFgBIAHAAIAHAAIAFABIACACIABACIAACcIgBADIgCABIgEABIgHABIgGgBIgEgBIgCgBIgBgDIAAgVQgNAPgNAHQgOAHgLAAQgQAAgLgFg");
	this.shape_159.setTransform(543,117);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgUBVIgOgDIgKgEIgHgFQgCgBAAgDIgBgJIAAgFIABgEIABgDIACAAQACAAAEADIAKAEQAFADAIADQAIACAJAAQAFAAAHgBQAFgCAFgDQAEgDADgFQACgEAAgHQAAgHgDgEQgEgFgFgEQgGgDgHgDIgMgFIgPgHQgHgCgGgFQgGgGgDgIQgDgHgBgLQAAgJAFgJQADgIAHgGQAHgHALgDQALgFANAAIAMABIALADIAJAEIAGADIACADIABACIAAADIAAAFIAAAFIgBAEIgBABIgCABIgFgCIgHgEIgMgEQgGgCgIAAQgFAAgGACQgGACgDACQgEAEgBADQgDAFAAAFQAAAGAEAGQADAEAGADIALAHIAPAGIAOAHQAIABAFAGQAGAFAEAHQACAHAAALQAAAMgDAJQgGAJgIAHQgIAGgLAEQgMAEgMAAQgIAAgHgCg");
	this.shape_160.setTransform(526.5,116.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgGB6IgEgBIgCgCIgBgCIAAjpIABgCQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIAEgBIAGgBIAHABIAEABIACACIABACIAADpIgBACIgCACIgEABIgHABIgGgBg");
	this.shape_161.setTransform(507.3,113.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgaBRQgPgFgKgMQgKgKgFgQQgFgRAAgVQAAgSAFgQQAFgQAKgMQAKgMAOgFQAOgHAQAAQASAAANAHQANAFAJALQAIAJAEAOQAEAOAAAQIAAAEQAAAGgDACQgEADgEABIhmAAQAAANACAKQADAKAGAIQAGAHAKAEQAKAFAMAAQAMAAAJgCIAPgEIAKgEIAHgCIACABIABACIABADIAAAFIAAAEIAAADIgBADIgCABIgFADIgNAFIgRAEQgKACgLAAQgSAAgOgGgAgQg7QgIAEgGAHQgFAGgDAJQgDAKAAAJIBUAAQAAgXgKgNQgLgNgVAAQgJAAgIAEg");
	this.shape_162.setTransform(494.1,116.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgjBRQgOgHgKgLQgJgLgFgPQgEgQgBgUQAAgSAGgQQAFgQAJgMQAKgLAPgHQAQgGASgBQATAAAPAHQAPAFAJALQAKALAFAQQAEAQABAUQAAARgGARQgFAQgJAMQgLALgPAHQgQAHgRAAQgUgBgPgFgAgUg5QgKAFgFAJQgHAHgCAMQgDALAAANQAAAMACAMQACALAGAJQAGAIAIAFQAKAFANAAQAMAAAJgFQAKgEAFgIQAHgJACgLQADgMAAgNQAAgLgCgMQgDgLgFgJQgGgIgIgFQgKgFgOAAQgLAAgJAEg");
	this.shape_163.setTransform(467.6,116.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AglB0QgMgGgIgMQgHgLgEgQQgDgQAAgRQAAgUAEgRQAEgOAJgMQAJgLAMgGQANgHARAAQAMAAALAGQAMAGALAMIAAhcIABgCIACgCIAFgBIAGAAIAIAAIAEABIACACIABACIAADoIAAADIgCACIgFAAIgFABIgHgBIgEAAIgCgCIgBgDIAAgVQgMAOgOAIQgNAHgOAAQgRAAgNgHgAgUgTQgHAGgFAIQgFAHgCALQgCALAAALQAAAMACALQABAMAFAJQAFAJAHAFQAIAFALAAIAJgBQAGgCAFgEQAGgDAGgGQAGgGAHgJIAAg/QgMgNgLgHQgLgIgKAAQgLAAgIAFg");
	this.shape_164.setTransform(448.2,113.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AAuBVIgEgBIgCgCIgCgCIAAhbQAAgNgCgJQgCgIgDgGQgFgGgGgDQgHgDgIAAQgJAAgLAIQgKAHgMAPIAABtIgBACIgDACIgEABIgHAAIgHAAIgEgBIgDgCIAAgCIAAicIAAgDIACgBIAEgBIAHgBIAGABIAEABIACABIAAADIAAAVQAOgPANgHQANgHAMAAQAQAAAKAFQALAFAHAJQAHAJADANQADALAAARIAABfIgBACIgDACIgEABIgHAAIgHAAg");
	this.shape_165.setTransform(429.9,116.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgaBRQgPgFgKgMQgKgKgFgQQgFgRAAgVQAAgSAFgQQAFgQAKgMQAKgMAOgFQAOgHAQAAQASAAANAHQANAFAJALQAIAJAEAOQAEAOAAAQIAAAEQAAAGgDACQgEADgEABIhmAAQAAANACAKQADAKAGAIQAGAHAKAEQAKAFAMAAQAMAAAJgCIAPgEIAKgEIAHgCIACABIABACIABADIAAAFIAAAEIAAADIgBADIgCABIgFADIgNAFIgRAEQgKACgLAAQgSAAgOgGgAgQg7QgIAEgGAHQgFAGgDAJQgDAKAAAJIBUAAQAAgXgKgNQgLgNgVAAQgJAAgIAEg");
	this.shape_166.setTransform(411.4,116.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgFB0IgFgBIgCgBIgBgDIAAicIABgCIACgCIAFgBIAFAAIAHAAIAEABIACACIABACIAACcIgBADIgCABIgEABIgHABIgFgBgAgNhUQgDgEAAgKQAAgKADgEQAEgEAJAAQAKAAAEAEQADAEAAAKQAAAKgDAEQgEADgKAAQgJAAgEgDg");
	this.shape_167.setTransform(398.3,113.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgIB6QgGgBgGgEQgHgDgGgFIgNgMIAAATIAAACIgDACIgEABIgGAAIgGAAIgEgBIgCgCIAAgCIAAjpIAAgCQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAABAAIAEgBIAHgBIAHABIAFABIACACIABACIAABfIANgMQAHgFAGgDIANgFQAEgBAHAAQARAAANAHQAMAGAIAMQAHALAEAOQADAPAAASQAAAUgEARQgFAQgIAMQgJALgNAGQgMAHgRAAQgFAAgHgCgAgGgWQgGACgGAEQgFADgGAGQgGAGgHAHIAAA/QAMAOALAIQALAIAKAAQAKAAAIgGQAIgFAFgJQAFgIACgLQACgLAAgLQAAgMgCgMQgCgLgEgHQgFgJgHgFQgIgFgLAAQgEAAgFABg");
	this.shape_168.setTransform(385.3,113.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgFB0IgFgBIgCgBIgBgDIAAicIABgCIACgCIAFgBIAFAAIAHAAIAEABIACACIABACIAACcIgBADIgCABIgEABIgHABIgFgBgAgNhUQgDgEAAgKQAAgKADgEQAEgEAJAAQAKAAAEAEQADAEAAAKQAAAKgDAEQgEADgKAAQgJAAgEgDg");
	this.shape_169.setTransform(371.2,113.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AglBVIgFgBIgCgCIgBgCIAAicIABgDIACgBIAEgBIAGgBIAHABIAEABIACABIAAADIAAAXQAHgKAGgGQAFgGADgDQAFgEAGgBQAEgBAGAAIAFAAIAGABIAGACIADABIACACIAAACIABAEIAAAGIgBAHIAAAEIgCACIgCABIgDgBIgFgCIgFgBIgHgBQgFAAgEACQgEACgFAEQgDAEgFAGIgLARIAABmIgBACIgCACIgEABIgHAAIgHAAg");
	this.shape_170.setTransform(361.9,116.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgVBRQgNgGgJgLQgJgLgEgPQgFgQAAgVQAAgVAGgQQAFgSALgKQAJgLAOgFQANgFAOgBIAPACIANAEQAGACAEADIAHAFIADADIABAEIABADIAAAGQAAAGgBADQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgDAAgDgCIgJgHQgFgDgIgDQgHgDgKAAQgTAAgLARQgMAPAAAdQAAAPADAMQADALAGAIQAFAHAJAEQAGAEAKAAQAKAAAIgDQAHgDAGgEIAJgGQAEgEACAAIACABIACADIABADIAAAHIAAAFIgBADIgBADIgDAEIgHAFIgMAGIgOAEIgQACQgPgBgOgFg");
	this.shape_171.setTransform(347.2,116.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgVBVIgNgDIgKgEIgGgFQgCgBgBgDIgCgJIABgFIABgEIACgDIABAAQACAAAFADIAJAEQAFADAIADQAHACAKAAQAFAAAHgBQAGgCAEgDQAFgDACgFQACgEAAgHQAAgHgEgEQgDgFgGgEQgFgDgHgDIgNgFIgOgHQgHgCgGgFQgGgGgDgIQgEgHABgLQAAgJADgJQAEgIAHgGQAHgHALgDQALgFAMAAIANABIAMADIAIAEIAGADIACADIABACIAAADIAAAFIAAAFIAAAEIgCABIgCABIgFgCIgHgEIgLgEQgHgCgIAAQgFAAgGACQgFACgEACQgEAEgCADQgCAFABAFQAAAGADAGQADAEAGADIALAHIAOAGIAPAHQAIABAFAGQAGAFAEAHQADAHAAALQAAAMgFAJQgEAJgJAHQgIAGgLAEQgMAEgMAAQgIAAgIgCg");
	this.shape_172.setTransform(332.3,116.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgaBRQgPgFgKgMQgKgKgFgQQgFgRAAgVQAAgSAFgQQAFgQAKgMQAKgMAOgFQAOgHAQAAQASAAANAHQANAFAJALQAIAJAEAOQAEAOAAAQIAAAEQAAAGgDACQgEADgEABIhmAAQAAANACAKQADAKAGAIQAGAHAKAEQAKAFAMAAQAMAAAJgCIAPgEIAKgEIAHgCIACABIABACIABADIAAAFIAAAEIAAADIgBADIgCABIgFADIgNAFIgRAEQgKACgLAAQgSAAgOgGgAgQg7QgIAEgGAHQgFAGgDAJQgDAKAAAJIBUAAQAAgXgKgNQgLgNgVAAQgJAAgIAEg");
	this.shape_173.setTransform(316.3,116.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgfBTQgKgDgHgHQgIgFgEgKQgDgIAAgMQgBgNAGgKQAGgKAKgFQAKgGAPgDQAPgEAQAAIAWAAIAAgMQgBgJgBgHQgCgHgEgEQgEgFgHgDQgHgCgKAAQgJAAgIACQgJADgHAEIgKAFQgFADgCAAIgCgBIgCgDIgBgDIgBgFIABgGQAAgEADgCIAIgFIANgFIARgFQAJgCAHAAQARAAAMAFQAMADAHAIQAIAHADALQADALAAAPIAABpQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgEABIgHABIgHgBIgEgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgBAAAAIAAgQQgKALgMAGQgNAHgMAAQgNAAgKgEgAgIAJQgIABgHAFQgFAEgDAFQgDAGABAHQgBAMAJAHQAHAIAOgBQAKAAAKgFQAJgGALgMIAAghIgZAAQgLAAgIACg");
	this.shape_174.setTransform(290.1,116.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("ABfBVIgEgBIgDgCIAAgCIAAheQAAgKgCgJQgCgIgEgGQgEgGgGgDQgGgDgIAAQgKAAgKAIQgKAHgMAPIAABtIgBACIgCACIgFABIgGAAIgFAAIgFgBIgCgCIgBgCIAAheQAAgKgCgJQgCgIgEgGQgEgGgFgDQgGgDgIAAQgLAAgKAIQgKAHgMAPIAABtIgBACIgCACIgEABIgHAAIgHAAIgFgBIgCgCIgBgCIAAicIABgDIACgBIAEgBIAGgBIAHABIAEABIACABIAAADIAAAVQAOgPAMgHQANgHANAAQAKAAAHACQAIACAGAFQAGAEACAFQAFAGACAHIAPgPQAIgGAGgDQAHgEAGgBQAGgCAGAAQAQAAAKAFQALAFAGAJQAGAJADANQADALAAAOIAABiIgBACIgCACIgFABIgHAAIgHAAg");
	this.shape_175.setTransform(267.6,116.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AglBQQgLgFgGgJQgHgKgDgMQgDgMAAgRIAAheIABgCIACgCIAFgBIAHAAIAHAAIAEABIADACIAAACIAABaQAAAOADAJQABAIAFAGQAEAGAGADQAGADAJAAQAJAAALgIQAKgHAMgPIAAhtIABgCIACgCIAFgBIAHAAIAHAAIAFABIACACIABACIAACcIgBADIgCABIgEABIgHABIgGgBIgEgBIgCgBIgBgDIAAgVQgNAPgNAHQgOAHgLAAQgQAAgLgFg");
	this.shape_176.setTransform(243.8,117);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgUBVIgOgDIgKgEIgHgFQgCgBAAgDIgBgJIAAgFIABgEIABgDIACAAQACAAAEADIAKAEQAFADAIADQAIACAJAAQAFAAAHgBQAFgCAFgDQAEgDADgFQACgEAAgHQAAgHgDgEQgEgFgFgEQgGgDgHgDIgMgFIgPgHQgHgCgGgFQgGgGgDgIQgDgHgBgLQAAgJAFgJQADgIAHgGQAHgHALgDQALgFANAAIAMABIALADIAJAEIAGADIACADIABACIAAADIAAAFIAAAFIgBAEIgBABIgCABIgFgCIgHgEIgMgEQgGgCgIAAQgFAAgGACQgGACgDACQgEAEgBADQgDAFAAAFQAAAGAEAGQADAEAGADIALAHIAPAGIAOAHQAIABAFAGQAGAFAEAHQACAHAAALQAAAMgDAJQgGAJgIAHQgIAGgLAEQgMAEgMAAQgIAAgHgCg");
	this.shape_177.setTransform(227.3,116.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgfBTQgKgDgHgHQgHgFgFgKQgDgIAAgMQgBgNAGgKQAFgKALgFQAKgGAPgDQAPgEAQAAIAWAAIAAgMQgBgJgBgHQgCgHgFgEQgEgFgGgDQgIgCgJAAQgJAAgIACQgJADgHAEIgLAFQgDADgDAAIgCgBIgCgDIgBgDIAAgFIAAgGQAAgEADgCIAIgFIANgFIARgFQAJgCAHAAQARAAAMAFQAMADAIAIQAHAHADALQAEALgBAPIAABpQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgDABIgIABIgHgBIgEgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgBAAAAIAAgQQgKALgMAGQgNAHgMAAQgNAAgKgEgAgIAJQgIABgHAFQgFAEgDAFQgCAGgBAHQAAAMAJAHQAHAIAOgBQAKAAAKgFQAJgGALgMIAAghIgZAAQgLAAgIACg");
	this.shape_178.setTransform(203,116.9);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgFB6IgFgBIgCgCIgBgCIAAjpIABgCQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAIAFgBIAFgBIAGABIAFABIACACIABACIAADpIgBACIgCACIgFABIgGABIgFgBg");
	this.shape_179.setTransform(190.8,113.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgfBTQgKgDgHgHQgHgFgFgKQgDgIAAgMQAAgNAFgKQAFgKALgFQAKgGAOgDQAQgEAQAAIAVAAIAAgMQABgJgCgHQgCgHgFgEQgDgFgIgDQgHgCgJAAQgJAAgJACQgIADgHAEIgLAFQgDADgDAAIgDgBIgBgDIgBgDIAAgFIAAgGQAAgEADgCIAIgFIAOgFIAQgFQAJgCAHAAQARAAAMAFQAMADAIAIQAHAHADALQAEALgBAPIAABpQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgDABIgIABIgHgBIgEgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAAgQQgLALgNAGQgMAHgMAAQgNAAgKgEgAgIAJQgIABgHAFQgFAEgDAFQgCAGgBAHQABAMAHAHQAIAIAOgBQAJAAALgFQAJgGAKgMIAAghIgYAAQgLAAgIACg");
	this.shape_180.setTransform(169.3,116.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AABBnQgHgDgFgHQgGgGgCgKQgDgLAAgNIAAhbIgWAAQgDAAgBgDQgCgCAAgHIAAgFIACgEIACgCIACgBIAWAAIAAgmIABgCIACgCIAEgBIAHAAIAIAAIACABIACACIABACIAAAmIAoAAIADABIACACIABAEIAAAFQAAAHgBACQgCADgDAAIgoAAIAABWQAAARAEAIQAGAIAMAAIAHAAIAGgCIAEgCIADAAIACAAIABACIABADIAAAFIAAAIQgBABAAABQAAAAAAABQAAAAgBABQAAAAAAABIgFACIgGACIgIACIgIAAQgNAAgIgDg");
	this.shape_181.setTransform(154.9,114.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgaBRQgPgFgKgMQgKgKgFgQQgFgRAAgVQAAgSAFgQQAFgQAKgMQAKgMAOgFQAOgHAQAAQASAAANAHQANAFAJALQAIAJAEAOQAEAOAAAQIAAAEQAAAGgDACQgEADgEABIhmAAQAAANACAKQADAKAGAIQAGAHAKAEQAKAFAMAAQAMAAAJgCIAPgEIAKgEIAHgCIACABIABACIABADIAAAFIAAAEIAAADIgBADIgCABIgFADIgNAFIgRAEQgKACgLAAQgSAAgOgGgAgQg7QgIAEgGAHQgFAGgDAJQgDAKAAAJIBUAAQAAgXgKgNQgLgNgVAAQgJAAgIAEg");
	this.shape_182.setTransform(140.2,116.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgGB6IgEgBIgDgCIAAgCIAAjpIAAgCQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAIAEgBIAGgBIAHABIAEABIACACIABACIAADpIgBACIgCACIgEABIgHABIgGgBg");
	this.shape_183.setTransform(127.2,113.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AhAB0IgEgBIgDgBIAAgDIAAjbIAAgCIACgCIAEgBIAGAAIAGAAIAEABIADACIAAACIAAAVIAOgMQAHgGAHgDQAGgEAHgCQAFgCAIAAQASAAAMAHQAMAHAIALQAHAMAEAPQADAQAAARQAAAVgEAOQgFARgIALQgJAMgNAGQgNAGgQAAQgFAAgGgBQgGgCgGgDQgGgDgFgEIgMgLIAABPIgBADIgCABIgFABIgHABIgHgBgAgGhZIgLAFQgGAEgGAGIgNAOIAAA9QAMAPALAHQAKAIAKAAQALAAAIgFQAIgFAFgJQAFgJACgJQACgLAAgLQAAgMgCgLQgCgMgEgIQgFgJgHgGQgIgFgLAAIgJACg");
	this.shape_184.setTransform(114.1,119.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("ABfBVIgEgBIgDgCIAAgCIAAheQAAgKgCgJQgCgIgEgGQgEgGgGgDQgGgDgIAAQgKAAgKAIQgKAHgMAPIAABtIgBACIgCACIgFABIgGAAIgFAAIgFgBIgCgCIgBgCIAAheQAAgKgCgJQgCgIgEgGQgEgGgFgDQgGgDgIAAQgLAAgKAIQgKAHgMAPIAABtIgBACIgCACIgEABIgHAAIgHAAIgFgBIgCgCIgBgCIAAicIABgDIACgBIAEgBIAGgBIAHABIAEABIACABIAAADIAAAVQAOgPAMgHQANgHANAAQAKAAAHACQAIACAGAFQAGAEACAFQAFAGACAHIAPgPQAIgGAGgDQAHgEAGgBQAGgCAGAAQAQAAAKAFQALAFAGAJQAGAJADANQADALAAAOIAABiIgBACIgCACIgFABIgHAAIgHAAg");
	this.shape_185.setTransform(89.8,116.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgjBRQgOgHgJgLQgKgLgFgPQgFgQAAgUQABgSAEgQQAFgQALgMQAJgLAPgHQAQgGASgBQATAAAPAHQAPAFAJALQAKALAFAQQAEAQAAAUQABARgGARQgEAQgKAMQgLALgPAHQgQAHgSAAQgTgBgPgFgAgUg5QgJAFgHAJQgGAHgDAMQgCALAAANQgBAMADAMQACALAGAJQAGAIAJAFQAJAFANAAQAMAAAKgFQAIgEAGgIQAHgJACgLQAEgMAAgNQAAgLgDgMQgDgLgFgJQgFgIgJgFQgKgFgOAAQgLAAgJAEg");
	this.shape_186.setTransform(65.9,116.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgZBtQgRgIgNgOQgNgPgGgVQgHgVAAgbQAAgbAIgWQAGgWAOgPQANgQASgIQATgIAUAAQAKAAAJACIASAEIANAHIAJAGIADAEIACADIAAAEIAAAFIAAAGIgBAEIgCADIgCAAQgDAAgEgDIgMgIQgGgEgLgDQgJgEgOAAQgPAAgLAGQgNAGgJAMQgIAMgFARQgFARAAAUQAAAVAFARQAFARAIALQAJALANAGQALAFAQAAQANAAAKgDQALgDAGgEIANgIQAEgDADAAIACAAIABACIABAEIAAAHIAAAFIgBAEIgBADIgCACIgHAGIgPAHQgIADgLADQgLACgNAAQgUAAgSgHg");
	this.shape_187.setTransform(47.2,113.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#F49723").s().p("AhPC/IgCgCIAAgCIAAgCIACgUIABgcIADgrIAEhBIAEhdQADhBAUgeQASgfAmABIAFAAIAFAAQATABALAIQALAJAHAOQAGAOADAQQACAPABAPIAAACIAAAJIAAAWIAAAtIgBBLIgCB3IgDACIgTAAIgLAAIgLgCIgBgMIgCgjIgEhEIgDAAIgZAAIgeABIgBARIAAAWIABAjIADA0IgCACIgBACgAgJh3QgJALgDAbIgBAaIgBAWIgBAcIABAHIAAALIAAAHIABACIANAAIAjABIABgBIAAgCIAFhZIAAgIQAAgXgHgNQgIgOgKgCIgDAAQgGAAgHAKg");
	this.shape_188.setTransform(116.4,52.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#F49723").s().p("AiDC1QgCgEAAgEIABgiIABg2IADhCQACghADgiQACgiAEgdQAEgdAFgTQAFgTAGgFIAFgBIAFAAQAVABANANQANAMAIAUQAHAUAEAWIAIAmIABAHIACAFIADgDIACgDIAQgjIATghIASgcQAKgOANgJQANgJASAAQAIAAAEAGQAFAHACAJIAEASIABAOQAEBIACBGQACBIAABHIAAAEQgCAEgHACQgHACgIAAIgRABIgLgCIgCgBIAAgGIgCgoIgBg2IgCg7IgCgzIgBgoIgiBLIgTAlIgJAPIgCACIgCACIgdgCQgMgRgIgTIgQgkIgEgJIgFgIIgDBrQgBA3ABA3IgBACIgBADQAAABgHAAIgRACIgRAAIgLABQgEgBgCgDg");
	this.shape_189.setTransform(91.9,52);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#F49723").s().p("AABCyQgZAAgVgHQgUgGgOgQQgNgRgFgcQgFgegDgeQgCgdAAgcIADhNIACgrIABgUIABgHIABgGIAEgHQACgDADgBQANAEAOABIAbABIABACIABACIAAADIAAAEIgBAEQgEAcgDAmQgDAmAAAqQAAAoAGAnQABAMAFAMQAFAMAJAIQAJAIAMAAQAGABAGgCQAFAAAFgFQAJgKAFgPQAFgPACgQQACgQAAgMIgBguIgBgwIgCgnQgCgUAAgUIABgEQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBIApgFIACgBIADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAABAAAAIAAgBIAAAAQACAAACATIAEAxQABAeAAAlQgBAigFAlQgEAlgLAgQgKAdgUANQgTANgfAAg");
	this.shape_190.setTransform(65.3,50.7);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#F49723").s().p("AgxCiQgRgNgJgYIgBgCIgEgNQgCgHAAgHQAAgGAHgEQAHgCAGgBIAGgBIAKgBIAJgBIACAAIACAAIABACIAEARQADAKAFAIQAGAHAKABQAHAAAJgFQAJgFAGgIQAGgIAAgKQAAgZgMgTQgMgTgQgPIgjgbQgRgOgMgSQgMgRgBgYQABgVAKgUQAKgTATgNQASgMAZgBIAEABIAFACQANADAJAEQAIAEAHAHQAGAHAGANIADAJIABAHIgeAiIgBAAIgCABQgEgBgEgGIgJgOQgFgJgGgGQgFgGgKgBQgKAAgEAGQgEAGAAAKQAAASALAPQAMAPAPANQARAOARAQQASAOAMAVQANAVADAeQABAagLAXQgMAYgVAPQgVAOgaABQgcAAgQgOg");
	this.shape_191.setTransform(43.1,51.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(580,393,1160,786);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;