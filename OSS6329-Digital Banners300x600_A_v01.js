(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.BG_A = function() {
	this.initialize(img.BG_A);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1345,730);


(lib.Character_A = function() {
	this.initialize(img.Character_A);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,910,646);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcA1IAAhpIA5AAIAABpg");
	mask.setTransform(2.9,5.325);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.9).p("AgZgxIAwAxIgwAy");
	this.shape.setTransform(2.9206,5.3509);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,5.8,10.7), null);


(lib.BG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A5SdHMAAAg6NMAylAAAMAAAA6Ng");
	mask.setTransform(-58.5,17.85);

	// Layer_1
	this.instance = new lib.BG_A();
	this.instance.setTransform(-439.45,-234.85,0.6512,0.6512,-0.3652);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BG, new cjs.Rectangle(-220.4,-168.4,323.9,372.6), null);


(lib.Woman = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Character_A();
	this.instance.setTransform(-218.45,40.55,0.5621,0.5621);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Woman, new cjs.Rectangle(-218.4,40.6,511.5,363.09999999999997), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A5MX4MAAAgvvMAyZAAAMgCTAvvg");
	mask_1.setTransform(167.55,152.825);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F67D02").s().p("A4YMHIMsmRQALgFAJgOQAHgNAEgRQAHgkASgeQATgdAXgLIRHoJQAGgDAHgKQAEgKADgNQAEgdAMgVQAMgXAOgGIQeniIAABDIwzH/QgPAHgEAeQgFAcgMAWQgMAXgPAIIxTIiQgKAFgIAOQgJANgDARQgHAkgTAeQgTAfgXAMIsKGPg");
	this.shape_1.setTransform(156.1,212.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F67D02").s().p("A4YKKIMslQQALgEAJgNQAHgNAEgRQAHgjASgcQATgcAXgKIRHmwQAGgCAHgKQAFgKACgNQAEgcAMgVQAMgVAOgGIQemMIAABCIwzGpQgPAFgEAeQgFAcgMAWQgMAVgPAHIxTHJQgKAEgIANQgJANgDARQgHAjgTAdQgTAdgXAKIsKFQg");
	this.shape_2.setTransform(156.1,170.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F67D02").s().p("A4YE1IMKjaQAXgHATAQQATAPAHAfQADAPAJAGQAIAHAKgDIRTlKQAPgFAMAOQAMAMAFAZQACAMAFAGQAGAGAGgCIQzlVIAABCIweFiQgOAFgMgNQgMgMgEgZQgCgLgFgHQgGgFgHACIxHFbQgXAHgTgPQgSgPgHgeQgEgPgHgHQgJgHgLADIssDzg");
	this.shape_3.setTransform(156.1,114.95);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(6.2,71.7,306,230.7), null);


(lib.Text3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABDAlIAAg3IgYA3IgNAAIgZg3IAAA3IgNAAIAAhJIAVAAIAYA1IAXg1IAXAAIAABJgAg5AlIAAg6IgZAAIAAgPIBBAAIAAAPIgYAAIAAA6g");
	this.shape.setTransform(11.8,72.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgOAOQgFgFAAgJQAAgIAFgFQAGgGAIAAQAJAAAFAGQAGAFAAAIQAAAJgGAFQgFAGgJAAQgIAAgGgGg");
	this.shape_1.setTransform(2.525,85.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgoBKIAAiTIAcAAIADAWQAGgKAJgGQAKgGASAAIAHAAIAAAdIgOAAQgOAAgIAHQgHAFgDALQgEAKAAALIAABKg");
	this.shape_2.setTransform(-5.175,80.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgkBDQgSgJgIgRQgKgRAAgXQAAgXAJgRQAKgRAQgJQAQgKAWAAQAVAAAQAJQAQAIAKAQQAJAQAAAWIAAAFIgBAGIhvAAIAAACQABATALALQAKAMASAAQAPAAAKgHQAJgHAEgMIAgAAQgDAPgJALQgJAMgOAGQgPAHgSAAQgXAAgQgJgAAogPQgBgRgLgJQgLgJgQAAQgKAAgIAFQgIAEgHAHQgFAIgBALIBOAAIAAAAg");
	this.shape_3.setTransform(-19.05,80.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAmBmIAAhQQAAgWgJgKQgJgLgSAAQgSABgKAMQgLAMAAAWIAABMIgfAAIAAjLIAfAAIAABNQAHgKALgHQAMgGAQgBQARAAANAHQAOAHAIAOQAIAPAAAYIAABTg");
	this.shape_4.setTransform(-35.475,77.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AATBfQgVAAgJgKQgKgKAAgUIAAhQIgaAAIAAgcIAaAAIAAgpIAfAAIAAApIAkAAIAAAcIgkAAIAABNQgBAIAEAEQAEAEAJAAIAWAAIAAAbg");
	this.shape_5.setTransform(-49.075,78.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgoBKIAAiTIAcAAIADAWQAGgKAJgGQAKgGASAAIAHAAIAAAdIgOAAQgOAAgIAHQgHAFgDALQgEAKAAALIAABKg");
	this.shape_6.setTransform(-58.325,80.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgmBFQgNgGgIgPQgHgPgBgZIAAhSIAgAAIAABOQgBAWAJALQAJALARAAQARAAALgNQAJgNABgWIAAhKIAfAAIAACUIgcAAIgDgTQgHAJgLAFQgLAGgQAAIgCAAQgPAAgNgGg");
	this.shape_7.setTransform(-72.25,80.2268);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhABmIAAjLICBAAIAAAeIhgAAIAAA7IBPAAIAAAcIhPAAIAABWg");
	this.shape_8.setTransform(-87.425,77.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AglBDQgQgJgKgRQgJgRAAgXQAAgXAJgRQAJgRARgJQAQgKAVAAQAWAAAQAJQARAIAIAQQAKAQAAAWIgBAFIAAAGIhvAAIAAACQAAATALALQAMAMARAAQAPAAAKgHQAJgHAEgMIAfAAQgCAPgJALQgJAMgOAGQgPAHgSAAQgXAAgRgJgAApgPQgCgRgMgJQgKgJgRAAQgJAAgIAFQgJAEgFAHQgGAIgBALIBPAAIAAAAg");
	this.shape_9.setTransform(-0.75,46.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgkBDQgRgJgJgRQgIgRgBgXQAAgXAKgRQAJgRARgJQAQgKAWAAQAdAAASAPQARAOAEAaIghAAQgCgNgKgIQgIgHgQAAQgSAAgLAOQgLANAAAWQAAAWALANQALANASABQAPAAAJgIQAKgHACgOIAhAAQgEAagSAPQgSAOgdAAQgVAAgRgJg");
	this.shape_10.setTransform(-16.95,46.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAlBMIAAhQQAAgVgJgLQgIgMgSAAQgSABgKANQgLANAAAWIAABLIgfAAIAAiVIAbAAIAEAUQAGgJAMgGQALgGARgBQARAAANAHQAOAHAIAPQAIAPAAAZIAABSg");
	this.shape_11.setTransform(-33.225,46.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgvBHQgMgFgHgKQgHgJAAgOQAAgXAQgMQAQgMAgAAIAkAAIAAgJQAAgNgIgHQgJgHgOAAQgPAAgIAGQgJAGgCAKIgfAAQADgWARgMQASgNAcAAQAdAAAQAOQAQAOAAAaIAAA7QAAAFADACQACACAFAAIAGAAIAAAcIgQAAQgPAAgHgHQgGgGAAgLQgHALgMAHQgLAHgSAAQgQAAgNgFgAghAOQgIAFAAAMQAAAJAHAGQAIAGAMAAQATAAALgKQALgLAAgRIAAgGIgmAAQgOAAgIAGg");
	this.shape_12.setTransform(-49.225,46.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAlBMIAAhQQAAgVgJgLQgIgMgSAAQgSABgKANQgLANAAAWIAABLIgfAAIAAiVIAbAAIAEAUQAGgJAMgGQALgGARgBQARAAANAHQAOAHAIAPQAIAPAAAZIAABSg");
	this.shape_13.setTransform(-65.725,46.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgPBoIAAiUIAfAAIAACUgAgMhGQgGgGAAgIQAAgIAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAIQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_14.setTransform(-77.225,44.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhABmIAAjLICBAAIAAAeIhgAAIAAA7IBPAAIAAAcIhPAAIAABWg");
	this.shape_15.setTransform(-87.425,44.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AglBDQgQgJgKgRQgJgRAAgXQAAgXAJgRQAJgRARgJQAQgKAVAAQAWAAAQAJQARAIAIAQQAKAQAAAWIgBAFIAAAGIhvAAIAAACQAAATALALQALAMATAAQAOAAAKgHQAJgHAEgMIAfAAQgCAPgJALQgJAMgOAGQgOAHgTAAQgXAAgRgJgAApgPQgCgRgMgJQgKgJgRAAQgIAAgJAFQgJAEgFAHQgGAIgBALIBPAAIAAAAg");
	this.shape_16.setTransform(-39.25,13.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAgBmIgrhCIgaAcIAAAmIggAAIAAjLIAgAAIAAB+IBChHIAlAAIg4A7IA8BZg");
	this.shape_17.setTransform(-54.375,11.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgvBHQgMgFgHgKQgHgJAAgOQAAgXAQgMQAQgMAgAAIAkAAIAAgJQAAgNgIgHQgJgHgOAAQgPAAgIAGQgJAGgCAKIgfAAQADgWARgMQASgNAcAAQAdAAAQAOQAQAOAAAaIAAA7QAAAFADACQACACAFAAIAGAAIAAAcIgQAAQgPAAgHgHQgGgGAAgLQgHALgMAHQgLAHgSAAQgQAAgNgFgAghAOQgIAFAAAMQAAAJAHAGQAIAGAMAAQATAAALgKQALgLAAgRIAAgGIgmAAQgOAAgIAGg");
	this.shape_18.setTransform(-70.425,13.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgQBmIAAitIg/AAIAAgeICfAAIAAAeIg/AAIAACtg");
	this.shape_19.setTransform(-87.25,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Text3, new cjs.Rectangle(-97.8,-7.7,115.69999999999999,103.4), null);


(lib.Text2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAMQgEgEgBgIQABgGAEgFQAEgEAHAAQAHAAAFAEQAFAFAAAGQAAAIgFAEQgFAEgHAAQgHAAgEgEg");
	this.shape.setTransform(93.9,56.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgvBcQgSgNgDgZIAZAAQADAPAMAHQALAIASAAQAXAAANgMQAMgLAAgYIAAgRQgHAMgNAIQgMAGgSABQgVAAgQgJQgQgJgJgRQgJgQAAgYQAAgXAJgRQAJgRAQgJQAQgKAVAAQASAAAMAIQANAGAHAOIADgaIAVAAIAACMQAAAggSARQgSARglABQgcAAgTgNgAgYhMQgLAHgGANQgHALAAARQAAAQAHAMQAGAMALAGQALAHANAAQAPAAALgHQALgGAGgMQAGgMAAgQQAAgQgGgMQgGgNgLgGQgLgIgPAAQgNABgLAGg");
	this.shape_1.setTransform(82.0507,53.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAqBLIAAhQQAAgYgKgLQgKgMgUAAQgUAAgMAPQgLAOgBAYIAABKIgXAAIAAiTIAUAAIADAUQAHgJAMgHQAMgGARAAQARAAAOAGQANAIAIAOQAIAPAAAYIAABSg");
	this.shape_2.setTransform(65.675,50.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgLBmIAAiTIAXAAIAACTgAgKhLQgFgEABgHQgBgHAFgEQAEgEAGAAQAGAAAFAEQAEAEAAAHQAAAHgEAEQgFAFgGAAQgGAAgEgFg");
	this.shape_3.setTransform(54.7,47.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAUBfQgUAAgJgKQgJgJAAgUIAAhXIgbAAIAAgVIAbAAIAAgqIAXAAIAAAqIAmAAIAAAVIgmAAIAABXQAAAJAEAFQAEADAJAAIAYAAIAAAWg");
	this.shape_4.setTransform(46.925,48.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgiBDQgQgKgJgRQgJgQAAgYQAAgVAKgSQAIgRARgJQAQgKAVAAQAbAAARAPQAQANAFAZIgZAAQgDgPgLgIQgLgIgPAAQgOAAgLAHQgKAGgHANQgFAMgBAPQABARAFAMQAHAMAKAHQALAGAOABQAPgBALgIQAKgIADgOIAaAAQgFAYgQAOQgSAOgbAAQgVAAgQgJg");
	this.shape_5.setTransform(34.55,50.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgLBmIAAiTIAXAAIAACTgAgKhLQgFgEABgHQgBgHAFgEQAEgEAGAAQAGAAAFAEQAFAEgBAHQABAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_6.setTransform(23.85,47.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgmBeQgPgJgKgRQgJgRAAgYQAAgXAJgQQAKgRAPgJQAQgKAVAAQASAAANAHQAMAHAIALIAAhPIAXAAIAADLIgVAAIgCgYQgIALgMAHQgNAIgSAAQgVAAgQgJgAgYgUQgLAHgGANQgGALgBAQQABAQAGAMQAGANALAHQALAGAOABQAPgBAKgGQALgHAGgMQAHgMAAgQQAAgRgHgLQgGgMgLgHQgKgHgPAAQgOAAgLAGg");
	this.shape_7.setTransform(12.15,47.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiBCQgRgJgJgRQgJgRAAgXQgBgWAKgRQAJgRAPgJQAQgKAUAAQAVAAAQAJQAPAIAJAQQAIAQACAVIAAAFIgBAFIhyAAIAAACQABAVAMANQAMANAVABQAPAAAMgIQAKgIAFgPIAYAAQgDAPgJAMQgIAMgOAGQgOAHgRAAQgWAAgPgKgAAtgOQgCgTgMgLQgMgKgTAAQgKAAgKAFQgJAFgGAJQgHAJgBAMIBYAAIAAAAg");
	this.shape_8.setTransform(-4.3,50.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AglBKIAAiTIAVAAIADAWQAFgIAKgHQAKgHATAAIAHAAIAAAXIgNAAQgPAAgIAIQgIAHgEALQgDAMAAAMIAABKg");
	this.shape_9.setTransform(-16.55,50.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhIBoIAAjOIAVAAIADAYQAHgKAMgIQANgHASAAQAUAAARAJQAQAJAIARQAKAQAAAZQAAAWgKAQQgIARgQAKQgRAJgUAAQgSAAgNgHQgNgGgGgLIAABRgAgahLQgKAHgGAMQgHAMABAQQgBAQAHAMQAGAMAKAHQALAHAPAAQAOAAALgHQALgHAGgMQAGgLABgQQgBgRgGgMQgGgMgLgHQgLgHgOAAQgPAAgLAHg");
	this.shape_10.setTransform(-30.25,53.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgmBeQgPgJgKgRQgJgRAAgYQAAgXAJgQQAKgRAPgJQARgKAUAAQASAAANAHQAMAHAIALIAAhPIAXAAIAADLIgVAAIgCgYQgIALgMAHQgNAIgSAAQgUAAgRgJgAgYgUQgLAHgGANQgGALAAAQQAAAQAGAMQAGANALAHQALAGANABQAPgBALgGQALgHAGgMQAHgMAAgQQAAgRgHgLQgGgMgLgHQgLgHgPAAQgNAAgLAGg");
	this.shape_11.setTransform(-55.55,47.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAqBLIAAhQQAAgYgKgLQgKgMgUAAQgUAAgMAPQgLAOgBAYIAABKIgXAAIAAiTIAUAAIADAUQAHgJAMgHQAMgGARAAQARAAAOAGQANAIAIAOQAIAPAAAYIAABSg");
	this.shape_12.setTransform(-71.925,50.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgtBHQgNgFgGgKQgHgKAAgNQAAgXAPgLQAPgLAegBIAqAAIAAgKQAAgOgJgIQgKgIgRAAQgQAAgJAGQgKAHgDAMIgXAAQACgWARgNQAQgMAcAAQAbAAAQAOQAPAOAAAaIAABAQAAAFACACQACADAFgBIAIAAIAAAWIgNAAQgPAAgFgGQgHgGAAgLQgGALgMAHQgMAHgTAAQgQAAgMgFgAgmAMQgJAHAAAMQAAALAJAHQAJAGAOABQAWgBAMgLQAMgLAAgTIAAgIIgtAAQgQAAgIAGg");
	this.shape_13.setTransform(-87.5,50.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgvBcQgSgNgDgZIAZAAQADAOAMAIQALAIASgBQAXABANgMQAMgLAAgYIAAgSQgHANgNAHQgMAIgSgBQgVAAgQgIQgQgJgJgRQgJgQAAgYQAAgXAJgRQAJgRAQgKQAQgJAVAAQASAAAMAHQANAHAHANIADgZIAVAAIAACLQAAAhgSASQgSAQglABQgcAAgTgNgAgYhMQgLAHgGANQgHAMAAAQQAAAQAHAMQAGAMALAGQALAHANABQAPgBALgHQALgGAGgMQAGgMAAgPQAAgRgGgMQgGgNgLgGQgLgIgPABQgNAAgLAGg");
	this.shape_14.setTransform(79.9007,20.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAqBLIAAhQQAAgXgKgMQgKgMgUAAQgUAAgMAOQgLAOgBAZIAABKIgXAAIAAiTIAUAAIADAUQAHgJAMgHQAMgGARAAQARAAAOAGQANAIAIAOQAIAPAAAZIAABRg");
	this.shape_15.setTransform(63.525,17.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgLBmIAAiTIAXAAIAACTgAgKhLQgFgEABgHQgBgHAFgEQAEgEAGAAQAGAAAFAEQAEAEAAAHQAAAHgEAEQgFAFgGAAQgGAAgEgFg");
	this.shape_16.setTransform(52.55,14.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAqBLIAAhQQAAgXgKgMQgKgMgUAAQgUAAgMAOQgLAOgBAZIAABKIgXAAIAAiTIAUAAIADAUQAHgJAMgHQAMgGARAAQARAAAOAGQANAIAIAOQAIAPAAAZIAABRg");
	this.shape_17.setTransform(41.725,17.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAqBLIAAhQQAAgXgKgMQgKgMgUAAQgUAAgMAOQgLAOgBAZIAABKIgXAAIAAiTIAUAAIADAUQAHgJAMgHQAMgGARAAQARAAAOAGQANAIAIAOQAIAPAAAZIAABRg");
	this.shape_18.setTransform(25.475,17.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgtBHQgNgFgGgKQgHgKAAgNQAAgXAPgLQAPgLAdgBIArAAIAAgKQAAgOgJgIQgKgIgRAAQgQAAgKAGQgKAHgBAMIgZAAQADgWARgNQAQgMAbAAQAcAAAQAOQAPAOAAAaIAABAQAAAFACACQADADAFgBIAHAAIAAAWIgNAAQgPAAgFgGQgHgGAAgLQgHALgMAHQgMAHgRAAQgRAAgMgFgAgnAMQgIAHAAAMQAAALAIAHQAKAGAOABQAWgBAMgLQAMgLAAgTIAAgIIgtAAQgQAAgJAGg");
	this.shape_19.setTransform(9.9,17.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgLBmIAAjLIAXAAIAADLg");
	this.shape_20.setTransform(-1.125,14.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhIBoIAAjOIAVAAIADAYQAHgKAMgIQANgHASAAQAUAAARAJQAQAJAIARQAKAQAAAZQAAAWgKAQQgIARgQAKQgRAJgUAAQgSAAgNgHQgNgGgGgLIAABRgAgahLQgKAHgGAMQgHAMABAQQgBAQAHAMQAGAMAKAHQALAHAPAAQAOAAALgHQALgHAGgMQAGgLABgQQgBgRgGgMQgGgMgLgHQgLgHgOAAQgPAAgLAHg");
	this.shape_21.setTransform(-12.25,20.225);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgjBCQgQgJgJgRQgKgRAAgXQABgWAIgRQAJgRAQgJQAQgKAUAAQAVAAAPAJQAQAIAJAQQAJAQAAAVIAAAFIAAAFIhzAAIAAACQABAVANANQAMANAUABQARAAAKgIQAMgIADgPIAZAAQgDAPgJAMQgJAMgNAGQgOAHgRAAQgWAAgQgKgAAtgOQgCgTgMgLQgMgKgTAAQgJAAgKAFQgKAFgHAJQgFAJgCAMIBYAAIAAAAg");
	this.shape_22.setTransform(-36.75,17.375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgkBKIAAiTIAUAAIADAWQAFgIAJgHQALgHATAAIAGAAIAAAXIgLAAQgPAAgKAIQgHAHgDALQgEAMAAAMIAABKg");
	this.shape_23.setTransform(-49,17.375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AglBCQgRgJgJgRQgKgRAAgXQAAgWAKgRQAJgRARgJQAQgKAVAAQAWAAAQAKQARAJAJARQAJARABAWQgBAXgJARQgJARgRAJQgQAKgWAAQgVAAgQgKgAgZguQgLAHgGAMQgGAMAAAPQAAAQAGAMQAGANALAHQALAGAOABQAPgBALgGQALgHAGgNQAGgMAAgQQAAgPgGgMQgGgMgLgHQgLgHgPAAQgOAAgLAHg");
	this.shape_24.setTransform(-62.775,17.375);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("ABPBmIAAigIhECgIgVAAIhEigIAACgIgYAAIAAjLIAfAAIBICoIBHioIAfAAIAADLg");
	this.shape_25.setTransform(-83.475,14.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Text2, new cjs.Rectangle(-97.8,-4.2,196.8,70.3), null);


(lib.Text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAMQgFgEAAgIQAAgGAFgFQAFgEAGAAQAHAAAFAEQAEAFAAAGQAAAIgEAEQgFAEgHAAQgGAAgFgEg");
	this.shape.setTransform(99.25,56.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgvBcQgSgNgDgZIAZAAQADAPAMAHQALAIASAAQAXAAANgMQAMgLAAgYIAAgRQgHAMgNAIQgMAGgSABQgVAAgQgJQgQgJgJgRQgJgQAAgYQAAgXAJgRQAJgRAQgJQAQgKAVAAQASAAAMAIQANAGAHAOIADgaIAVAAIAACMQAAAggSARQgSARglABQgcAAgTgNgAgYhMQgLAHgGANQgHALAAARQAAAQAHAMQAGAMALAGQALAHANAAQAPAAALgHQALgGAGgMQAGgMAAgQQAAgQgGgMQgGgNgLgGQgLgIgPAAQgNABgLAGg");
	this.shape_1.setTransform(87.4007,53.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAqBLIAAhQQAAgYgKgLQgKgMgUAAQgUAAgMAPQgLAOgBAYIAABKIgXAAIAAiTIAUAAIADAUQAHgJAMgHQAMgGARAAQARAAAOAGQANAIAIAOQAIAPAAAYIAABSg");
	this.shape_2.setTransform(71.025,50.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgLBmIAAiTIAXAAIAACTgAgKhLQgEgEAAgHQAAgHAEgEQAEgEAGAAQAHAAAEAEQAFAEgBAHQABAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_3.setTransform(60.05,47.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLBmIAAjLIAXAAIAADLg");
	this.shape_4.setTransform(54.475,47.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgvBcQgSgNgDgZIAZAAQADAPAMAHQALAIASAAQAXAAANgMQAMgLAAgYIAAgRQgHAMgNAIQgMAGgSABQgVAAgQgJQgQgJgJgRQgJgQAAgYQAAgXAJgRQAJgRAQgJQAQgKAVAAQASAAAMAIQANAGAHAOIADgaIAVAAIAACMQAAAggSARQgSARglABQgcAAgTgNgAgYhMQgLAHgGANQgHALAAARQAAAQAHAMQAGAMALAGQALAHANAAQAPAAALgHQALgGAGgMQAGgMAAgQQAAgQgGgMQgGgNgLgGQgLgIgPAAQgNABgLAGg");
	this.shape_5.setTransform(42.8007,53.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAqBLIAAhQQAAgYgKgLQgKgMgUAAQgUAAgMAPQgLAOgBAYIAABKIgXAAIAAiTIAUAAIADAUQAHgJAMgHQAMgGARAAQARAAAOAGQANAIAIAOQAIAPAAAYIAABSg");
	this.shape_6.setTransform(26.425,50.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgtBHQgMgFgHgKQgHgKAAgNQAAgXAPgLQAPgLAegBIAqAAIAAgKQAAgOgKgIQgJgIgRAAQgQAAgJAGQgLAHgCAMIgXAAQADgWAQgNQAQgMAcAAQAbAAAPAOQAQAOAAAaIAABAQAAAFACACQADADAEgBIAIAAIAAAWIgNAAQgOAAgHgGQgGgGAAgLQgHALgLAHQgMAHgTAAQgQAAgMgFgAgmAMQgJAHAAAMQAAALAJAHQAIAGAPABQAVgBANgLQAMgLAAgTIAAgIIgtAAQgQAAgIAGg");
	this.shape_7.setTransform(10.85,50.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAUBfQgUAAgJgKQgJgJAAgUIAAhXIgbAAIAAgVIAbAAIAAgqIAXAAIAAAqIAmAAIAAAVIgmAAIAABXQAAAJAEAFQAEADAJAAIAYAAIAAAWg");
	this.shape_8.setTransform(-2.375,48.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAqBLIAAhQQAAgYgKgLQgKgMgUAAQgUAAgMAPQgLAOgBAYIAABKIgXAAIAAiTIAUAAIADAUQAHgJAMgHQAMgGARAAQARAAAOAGQANAIAIAOQAIAPAAAYIAABSg");
	this.shape_9.setTransform(-14.975,50.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgjBEQgNgGgIgPQgIgPAAgZIAAhRIAYAAIAABQQAAAXAKAMQAKAMATAAQAUAAAKgOQAMgPAAgYIAAhKIAYAAIAACTIgUAAIgEgUQgGAJgMAGQgLAHgRAAIgCAAQgPAAgNgHg");
	this.shape_10.setTransform(-31.3,50.6017);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgmBeQgPgJgKgRQgJgRAAgYQAAgXAJgQQAKgRAPgJQARgKAUAAQASAAANAHQAMAHAIALIAAhPIAXAAIAADLIgVAAIgCgYQgIALgMAHQgNAIgSAAQgUAAgRgJgAgYgUQgLAHgGANQgGALAAAQQAAAQAGAMQAGANALAHQALAGANABQAPgBALgGQALgHAGgMQAHgMAAgQQAAgRgHgLQgGgMgLgHQgLgHgPAAQgNAAgLAGg");
	this.shape_11.setTransform(-55.55,47.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAqBLIAAhQQAAgYgKgLQgKgMgUAAQgUAAgMAPQgLAOgBAYIAABKIgXAAIAAiTIAUAAIADAUQAHgJAMgHQAMgGARAAQARAAAOAGQANAIAIAOQAIAPAAAYIAABSg");
	this.shape_12.setTransform(-71.925,50.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgtBHQgNgFgGgKQgHgKAAgNQAAgXAPgLQAPgLAegBIAqAAIAAgKQAAgOgJgIQgKgIgRAAQgQAAgJAGQgKAHgDAMIgXAAQACgWARgNQAQgMAcAAQAbAAAQAOQAPAOAAAaIAABAQAAAFACACQACADAFgBIAIAAIAAAWIgNAAQgPAAgFgGQgHgGAAgLQgGALgMAHQgMAHgTAAQgQAAgMgFgAgmAMQgJAHAAAMQAAALAJAHQAJAGAOABQAWgBAMgLQAMgLAAgTIAAgIIgtAAQgQAAgIAGg");
	this.shape_13.setTransform(-87.5,50.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgvBcQgSgNgDgZIAZAAQADAOAMAIQALAIASgBQAXABANgMQAMgLAAgYIAAgSQgHANgNAHQgMAIgSgBQgVAAgQgIQgQgJgJgRQgJgQAAgYQAAgXAJgRQAJgRAQgKQAQgJAVAAQASAAAMAHQANAHAHANIADgZIAVAAIAACLQAAAhgSASQgSAQglABQgcAAgTgNgAgYhMQgLAHgGANQgHAMAAAQQAAAQAHAMQAGAMALAGQALAHANABQAPgBALgHQALgGAGgMQAGgMAAgPQAAgRgGgMQgGgNgLgGQgLgIgPABQgNAAgLAGg");
	this.shape_14.setTransform(88.0007,20.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAqBLIAAhQQAAgXgKgMQgKgMgUAAQgUAAgMAOQgLAOgBAZIAABKIgXAAIAAiTIAUAAIADAUQAHgJAMgHQAMgGARAAQARAAAOAGQANAIAIAOQAIAPAAAZIAABRg");
	this.shape_15.setTransform(71.625,17.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgLBmIAAiTIAXAAIAACTgAgKhLQgFgEABgHQgBgHAFgEQAEgEAGAAQAGAAAFAEQAEAEAAAHQAAAHgEAEQgFAFgGAAQgGAAgEgFg");
	this.shape_16.setTransform(60.65,14.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgLBmIAAjLIAXAAIAADLg");
	this.shape_17.setTransform(55.075,14.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgvBcQgSgNgDgZIAZAAQADAOAMAIQALAIASgBQAXABANgMQAMgLAAgYIAAgSQgHANgNAHQgMAIgSgBQgVAAgQgIQgQgJgJgRQgJgQAAgYQAAgXAJgRQAJgRAQgKQAQgJAVAAQASAAAMAHQANAHAHANIADgZIAVAAIAACLQAAAhgSASQgSAQglABQgcAAgTgNgAgYhMQgLAHgGANQgHAMAAAQQAAAQAHAMQAGAMALAGQALAHANABQAPgBALgHQALgGAGgMQAGgMAAgPQAAgRgGgMQgGgNgLgGQgLgIgPABQgNAAgLAGg");
	this.shape_18.setTransform(43.4007,20.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAqBLIAAhQQAAgXgKgMQgKgMgUAAQgUAAgMAOQgLAOgBAZIAABKIgXAAIAAiTIAUAAIADAUQAHgJAMgHQAMgGARAAQARAAAOAGQANAIAIAOQAIAPAAAZIAABRg");
	this.shape_19.setTransform(27.025,17.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgtBHQgNgFgGgKQgHgKAAgNQAAgXAPgLQAPgLAdgBIArAAIAAgKQAAgOgKgIQgJgIgRAAQgQAAgKAGQgKAHgBAMIgZAAQADgWARgNQAQgMAbAAQAcAAAPAOQAQAOAAAaIAABAQAAAFACACQADADAFgBIAHAAIAAAWIgNAAQgPAAgFgGQgHgGAAgLQgHALgMAHQgMAHgRAAQgRAAgMgFgAgnAMQgIAHAAAMQAAALAIAHQAJAGAPABQAVgBANgLQAMgLAAgTIAAgIIgtAAQgQAAgJAGg");
	this.shape_20.setTransform(11.45,17.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgkBKIAAiTIAUAAIADAWQAFgIAJgHQAKgHAUAAIAGAAIAAAXIgLAAQgPAAgKAIQgHAHgDALQgEAMAAAMIAABKg");
	this.shape_21.setTransform(-0.95,17.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAkBKIgkhtIgkBtIgaAAIgwiTIAZAAIAkB4IAoh4IAVAAIAlB4IAmh4IAYAAIgxCTg");
	this.shape_22.setTransform(-17.625,17.375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgeBGQgPgGgHgLQgJgLAAgRIAYAAQABAOALAIQAKAIASABQAQgBAKgGQAJgGABgKQAAgJgFgFQgFgEgIgCIgUgDQgQgCgOgEQgNgDgIgIQgIgIAAgPQAAgOAIgKQAHgKANgFQANgGARAAQAQAAANAGQAOAFAHAKQAIALABAPIgYAAQgCgMgJgHQgKgHgOAAQgPAAgKAGQgKAGABAKQAAAIAEAEQAFAEAJACIASADQAQACAOAEQAOAEAIAHQAJAJgBAQQAAAOgHAKQgIAKgOAGQgNAFgRAAQgSAAgPgGg");
	this.shape_23.setTransform(-43.65,17.375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgeBGQgPgGgHgLQgJgLAAgRIAYAAQABAOALAIQAKAIASABQAQgBAKgGQAJgGABgKQAAgJgFgFQgFgEgIgCIgUgDQgQgCgOgEQgNgDgIgIQgIgIAAgPQAAgOAIgKQAHgKANgFQANgGARAAQAQAAANAGQAOAFAHAKQAIALABAPIgYAAQgCgMgJgHQgKgHgOAAQgPAAgKAGQgKAGABAKQAAAIAEAEQAFAEAJACIASADQAQACAOAEQAOAEAIAHQAJAJgBAQQAAAOgHAKQgIAKgOAGQgNAFgRAAQgSAAgPgGg");
	this.shape_24.setTransform(-58.05,17.375);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgiBCQgRgJgJgRQgJgRAAgXQAAgWAJgRQAIgRAQgJQAQgKAUAAQAVAAAQAJQAPAIAJAQQAIAQABAVIAAAFIAAAFIhzAAIAAACQACAVAMANQAMANAVABQAQAAALgIQAKgIAEgPIAZAAQgDAPgJAMQgIAMgOAGQgNAHgSAAQgVAAgQgKgAAtgOQgCgTgMgLQgMgKgTAAQgKAAgKAFQgJAFgHAJQgGAJgBAMIBYAAIAAAAg");
	this.shape_25.setTransform(-73.35,17.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ag6BmIAAjLIAZAAIAACzIBcAAIAAAYg");
	this.shape_26.setTransform(-87.9,14.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Text, new cjs.Rectangle(-97.8,-4.2,202.2,70.3), null);


(lib.Logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaB4IgBAAIgGgCIgBAAIgHgCIgBAAIgGgDIgBAAQgRgIgNgMIgBAAQgNgMgHgLIAQAAQAbAAASgOQAUgRAFgXIAIgkQAGgXAPgSQAPgRAWgIQghgTgkAHQgdAFgXAVQgVAVgHAdQgHAdALAeIgXAAIgFgVIAAgCIgBgHIAAgTIADgOIAAgBIABgCIADgNIAJgSIAHgKIAKgNIAIgIIASgNIAJgFIACgBIAKgFIAJgDIAEAAIANgDIAUgBQANAAALADIAAAAIAHACIABAAIAHACIAAAAIAHADIAAAAQARAIAPAMIAJAKIALANIgRAAQgaABgSANQgVAQgEAYIgJAkQgFAXgPASQgQARgVAIIACABIAAAAQAZANAYAAQAoAAAegdQAdgdABgoQABgUgIgTIAYAAQAEAKAAALIABACIAAAaIgCANIgBACIAAACIgHAUIgOAZIgQARIgRAMIgKAGIgCABIgUAIIgQADIgVABg");
	this.shape.setTransform(-72.15,12.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABUBJIAAhQQAAgsgiABQgSAAgKAMQgLAMAAAWIAABNIgVAAIAAhQQAAgsgjABQgRAAgLANQgKANAAAWIAABLIgXAAIAAiPIAUAAIADAUQAPgVAbgBQAhAAALAcQAPgcAjAAQAYAAAOAOQAQARAAAgIAABSg");
	this.shape_1.setTransform(73.75,12.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag2A+QgOgLAAgUQAAgVAOgLQAPgLAcAAIApAAIAAgKQAAgOgJgIQgKgIgQAAQgOAAgLAHQgJAGgCALIgXAAQACgVAQgLQARgMAZAAQAbAAAPANQAPAOAAAYIAAA+QAAAKAKAAIAGAAIAAAVIgMAAQgZAAgBgXQgQAYgfAAQgYAAgOgLgAguAeQAAALAJAGQAJAHAOAAQAUAAAMgLQAMgLAAgTIAAgHIgsAAQgfAAgBAYg");
	this.shape_2.setTransform(54.1,12.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgwA1QgTgUAAghQAAgfATgVQATgUAdAAQAfAAASASQASASABAgIAAAJIhvAAIAAACQABAUAMANQAMANAUAAQAPAAALgIQAKgHAEgOIAYAAQgFAWgRANQgRAOgYAAQgfAAgUgUgAArgOQgBgSgMgKQgMgKgSAAQgPAAgNAKQgMALgBARIBUAAIAAAAg");
	this.shape_3.setTransform(38.25,12.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgjBIIAAiPIAUAAIADAWQANgWAdAAIAGAAIAAAXIgLAAQgVAAgIAPQgIAMAAAVIAABIg");
	this.shape_4.setTransform(27.125,12.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AATBcQgTAAgJgJQgIgJAAgUIAAhTIgaAAIAAgWIAaAAIAAgoIAWAAIAAAoIAlAAIAAAWIglAAIAABTQAAAJADAEQAEAEAKAAIAWAAIAAAVg");
	this.shape_5.setTransform(17.1,10.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgpA9QgSgOAAgXIAYAAQAAANALAIQALAJAQAAQAPAAAKgGQAKgHAAgJQAAgMgLgFQgGgDgUgCQgcgEgMgGQgRgJAAgUQAAgUAQgLQAQgMAYAAQAYAAAQALQAQAMACAWIgYAAQgBgLgKgHQgJgIgOAAQgPAAgJAGQgJAGAAAKQAAALAKAEQAGADATACQAdAEAMAHQARAIAAAWQAAAUgQAMQgQALgZAAQgbAAgRgMg");
	this.shape_6.setTransform(5.625,12.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgwA1QgTgUAAghQAAgfATgVQASgUAeAAQAfAAARASQATASABAgIgBAJIhuAAIAAACQABAUAMANQAMANATAAQAQAAALgIQALgHADgOIAXAAQgEAWgQANQgSAOgYAAQgfAAgUgUgAArgOQgBgSgMgKQgLgKgTAAQgPAAgMAKQgNALgCARIBVAAIAAAAg");
	this.shape_7.setTransform(-9.15,12.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AApBJIAAhOQAAgtgmAAQgUgBgMAOQgLAOAAAYIAABIIgXAAIAAiPIAUAAIADAUQAQgWAeAAQAbAAAPAPQAQARAAAiIAABPg");
	this.shape_8.setTransform(-24.65,12.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgyA1QgUgUAAghQAAgfAUgVQAUgUAeAAQAfAAAVAUQATAVAAAfQAAAhgTAUQgVAUgfAAQgfAAgTgUgAghglQgNAPAAAWQAAAXANAPQANAPAUAAQAVAAANgPQANgPAAgXQAAgWgNgPQgNgPgVAAQgUAAgNAPg");
	this.shape_9.setTransform(-40.35,12.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(-84.4,0,168.9,24.7), null);


(lib.Colour = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F67D02").s().p("EgYsAv3MAAAhftMAxZAAAMAAABftg");
	this.shape.setTransform(0.025,306.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Colour, new cjs.Rectangle(-158.1,0,316.29999999999995,612.6), null);


(lib.BG_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EgZTAivMAAAg6NMAynAAAMAAAA6Ng");
	mask_1.setTransform(-58.45,222.3);

	// Layer_1
	this.instance_1 = new lib.BG_A();
	this.instance_1.setTransform(-439.4,5.6,0.6512,0.6512,-0.3652);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BG_1, new cjs.Rectangle(-220.4,72,323.9,372.6), null);


(lib.Arrow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(-151.05,118.85,2.0262,2.0262,0,0,0,2.4,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Arrow, new cjs.Rectangle(-156.2,108.1,12.099999999999994,22.099999999999994), null);


(lib.Wave = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(0.05,152.8,1,1,0,0,0,164.5,152.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Wave, new cjs.Rectangle(-164.4,0,328.9,305.7), null);


// stage content:
(lib.OSS6329DigitalBanners300x600_A_v01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Logo
	this.instance = new lib.Logo();
	this.instance.setTransform(150,300.05,1.5802,1.5802,0,0,0,0,12.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({scaleX:1,scaleY:1,x:109.25,y:260.3},10,cjs.Ease.get(0.62)).wait(161));

	// Colour_copy
	this.instance_1 = new lib.Colour();
	this.instance_1.setTransform(149.55,296.8,1,1,0,0,0,0,306.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({y:921.75},12).wait(161));

	// Woman
	this.instance_2 = new lib.Woman();
	this.instance_2.setTransform(233.9,335.55,1,1,0,0,0,-16,57.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:57.5,scaleX:1.007,scaleY:1.007,x:233.4,y:335.75},13).to({regX:-15.9,scaleX:1.0618,scaleY:1.0618,x:235.85,y:336.7},102).to({regX:-16,scaleX:1.0909,scaleY:1.0909,x:237.1,y:337.2},54).wait(6));

	// Layer_9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_114 = new cjs.Graphics().p("AuwBqIAAjTIdhAAIAADTg");
	var mask_graphics_115 = new cjs.Graphics().p("AuwBqIAAjTIdhAAIAADTg");
	var mask_graphics_116 = new cjs.Graphics().p("AuwBqIAAjTIdhAAIAADTg");
	var mask_graphics_117 = new cjs.Graphics().p("AuwBqIAAjTIdhAAIAADTg");
	var mask_graphics_118 = new cjs.Graphics().p("AuwBqIAAjTIdhAAIAADTg");
	var mask_graphics_119 = new cjs.Graphics().p("AuwBqIAAjTIdhAAIAADTg");
	var mask_graphics_120 = new cjs.Graphics().p("AuwBqIAAjTIdhAAIAADTg");
	var mask_graphics_121 = new cjs.Graphics().p("AuwBqIAAjTIdhAAIAADTg");
	var mask_graphics_122 = new cjs.Graphics().p("AuwBqIAAjTIdhAAIAADTg");
	var mask_graphics_123 = new cjs.Graphics().p("AuwBqIAAjTIdhAAIAADTg");
	var mask_graphics_124 = new cjs.Graphics().p("AuwBqIAAjTIdhAAIAADTg");
	var mask_graphics_125 = new cjs.Graphics().p("AuwBqIAAjTIdhAAIAADTg");
	var mask_graphics_126 = new cjs.Graphics().p("AuwBqIAAjTIdhAAIAADTg");
	var mask_graphics_127 = new cjs.Graphics().p("AuwBqIAAjTIdhAAIAADTg");
	var mask_graphics_128 = new cjs.Graphics().p("AuwBqIAAjTIdhAAIAADTg");
	var mask_graphics_129 = new cjs.Graphics().p("AuwBqIAAjTIdhAAIAADTg");
	var mask_graphics_130 = new cjs.Graphics().p("AuwBqIAAjTIdhAAIAADTg");
	var mask_graphics_131 = new cjs.Graphics().p("AuwBqIAAjTIdhAAIAADTg");
	var mask_graphics_132 = new cjs.Graphics().p("AuwBqIAAjTIdhAAIAADTg");
	var mask_graphics_133 = new cjs.Graphics().p("AuwBqIAAjTIdhAAIAADTg");
	var mask_graphics_134 = new cjs.Graphics().p("AuwBqIAAjTIdhAAIAADTg");
	var mask_graphics_135 = new cjs.Graphics().p("AuwBqIAAjTIdhAAIAADTg");
	var mask_graphics_136 = new cjs.Graphics().p("AuwBqIAAjTIdhAAIAADTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(114).to({graphics:mask_graphics_114,x:-80.7003,y:157.8001}).wait(1).to({graphics:mask_graphics_115,x:-72.0549,y:157.8001}).wait(1).to({graphics:mask_graphics_116,x:-63.4095,y:157.8001}).wait(1).to({graphics:mask_graphics_117,x:-54.7632,y:157.8001}).wait(1).to({graphics:mask_graphics_118,x:-46.1178,y:157.8001}).wait(1).to({graphics:mask_graphics_119,x:-37.4724,y:157.8001}).wait(1).to({graphics:mask_graphics_120,x:-28.827,y:157.8001}).wait(1).to({graphics:mask_graphics_121,x:-20.1816,y:157.8001}).wait(1).to({graphics:mask_graphics_122,x:-11.5362,y:157.8001}).wait(1).to({graphics:mask_graphics_123,x:-2.8908,y:157.8001}).wait(1).to({graphics:mask_graphics_124,x:5.7546,y:157.8001}).wait(1).to({graphics:mask_graphics_125,x:14.4,y:157.8001}).wait(1).to({graphics:mask_graphics_126,x:23.0454,y:157.8001}).wait(1).to({graphics:mask_graphics_127,x:31.6908,y:157.8001}).wait(1).to({graphics:mask_graphics_128,x:40.3362,y:157.8001}).wait(1).to({graphics:mask_graphics_129,x:48.9816,y:157.8001}).wait(1).to({graphics:mask_graphics_130,x:57.627,y:157.8001}).wait(1).to({graphics:mask_graphics_131,x:66.2724,y:157.8001}).wait(1).to({graphics:mask_graphics_132,x:74.9178,y:157.8001}).wait(1).to({graphics:mask_graphics_133,x:83.5632,y:157.8001}).wait(1).to({graphics:mask_graphics_134,x:92.2095,y:157.8001}).wait(1).to({graphics:mask_graphics_135,x:100.8549,y:157.8001}).wait(1).to({graphics:mask_graphics_136,x:109.5003,y:157.8001}).wait(39));

	// Line
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("ANCAAI6DAA");
	this.shape.setTransform(109.625,160.55);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(114).to({_off:false},0).wait(61));

	// Layer_10 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_58 = new cjs.Graphics().p("EgmpgKBMBDHgR/MAKMAmCMhDHAR/g");
	var mask_1_graphics_59 = new cjs.Graphics().p("EgmpAVdMBDHgR/MAKMAmDMhDHAR/g");
	var mask_1_graphics_60 = new cjs.Graphics().p("EgmpAVNMBDHgR/MAKMAmCMhDHAR/g");
	var mask_1_graphics_61 = new cjs.Graphics().p("EgmpAU8MBDHgR/MAKMAmDMhDHAR/g");
	var mask_1_graphics_62 = new cjs.Graphics().p("EgmpAUsMBDHgR/MAKMAmDMhDHAR/g");
	var mask_1_graphics_63 = new cjs.Graphics().p("EgmpAUdMBDHgR/MAKMAmCMhDHAR/g");
	var mask_1_graphics_64 = new cjs.Graphics().p("EgmpAUNMBDHgR/MAKMAmDMhDHAR/g");
	var mask_1_graphics_65 = new cjs.Graphics().p("EgmpAT+MBDHgR/MAKMAmDMhDHAR/g");
	var mask_1_graphics_66 = new cjs.Graphics().p("EgmpATvMBDHgR/MAKMAmDMhDHAR/g");
	var mask_1_graphics_67 = new cjs.Graphics().p("EgmpAThMBDHgR/MAKMAmCMhDHAR/g");
	var mask_1_graphics_68 = new cjs.Graphics().p("EgmpATSMBDHgR/MAKMAmDMhDHAR/g");
	var mask_1_graphics_69 = new cjs.Graphics().p("EgmpATEMBDHgR/MAKMAmDMhDHAR/g");
	var mask_1_graphics_70 = new cjs.Graphics().p("EgmpAS3MBDHgR/MAKMAmCMhDHAR/g");
	var mask_1_graphics_71 = new cjs.Graphics().p("EgmpASpMBDHgR/MAKMAmDMhDHAR/g");
	var mask_1_graphics_72 = new cjs.Graphics().p("EgmpAScMBDHgR/MAKMAmDMhDHAR/g");
	var mask_1_graphics_73 = new cjs.Graphics().p("EgmpASPMBDHgR/MAKMAmDMhDHAR/g");
	var mask_1_graphics_74 = new cjs.Graphics().p("EgmpASDMBDHgR/MAKMAmCMhDHAR/g");
	var mask_1_graphics_75 = new cjs.Graphics().p("EgmpAR2MBDHgR+MAKMAmCMhDHAR/g");
	var mask_1_graphics_76 = new cjs.Graphics().p("EgmpARqMBDHgR+MAKMAmCMhDHAR/g");
	var mask_1_graphics_77 = new cjs.Graphics().p("EgmpAReMBDHgR+MAKMAmCMhDHAR/g");
	var mask_1_graphics_78 = new cjs.Graphics().p("EgmpARTMBDHgR+MAKMAmBMhDHAR/g");
	var mask_1_graphics_79 = new cjs.Graphics().p("EgmpARIMBDHgR+MAKMAmBMhDHAR/g");
	var mask_1_graphics_80 = new cjs.Graphics().p("EgmpAQ9MBDHgR+MAKMAmBMhDHAR/g");
	var mask_1_graphics_81 = new cjs.Graphics().p("EgmpAQyMBDHgR+MAKMAmCMhDHAR/g");
	var mask_1_graphics_82 = new cjs.Graphics().p("EgmpAQoMBDHgR+MAKMAmBMhDHAR/g");
	var mask_1_graphics_83 = new cjs.Graphics().p("EgmpAQeMBDHgR+MAKMAmBMhDHAR/g");
	var mask_1_graphics_84 = new cjs.Graphics().p("EgmpAQUMBDHgR+MAKMAmBMhDHAR/g");
	var mask_1_graphics_85 = new cjs.Graphics().p("EgmpAQKMBDHgR+MAKMAmCMhDHAR/g");
	var mask_1_graphics_86 = new cjs.Graphics().p("EgmpAQBMBDHgR+MAKMAmCMhDHAR/g");
	var mask_1_graphics_87 = new cjs.Graphics().p("EgmpAP4MBDHgR+MAKMAmCMhDHAR/g");
	var mask_1_graphics_88 = new cjs.Graphics().p("EgmpAPvMBDHgR+MAKMAmCMhDHAR/g");
	var mask_1_graphics_89 = new cjs.Graphics().p("EgmpAPnMBDHgR+MAKMAmCMhDHAR/g");
	var mask_1_graphics_90 = new cjs.Graphics().p("EgmpAPfMBDHgR+MAKMAmBMhDHAR/g");
	var mask_1_graphics_91 = new cjs.Graphics().p("EgmpAPXMBDHgR+MAKMAmCMhDHAR/g");
	var mask_1_graphics_92 = new cjs.Graphics().p("EgmpAPQMBDHgR+MAKMAmBMhDHAR/g");
	var mask_1_graphics_93 = new cjs.Graphics().p("EgmpAPIMBDHgR+MAKMAmCMhDHAR/g");
	var mask_1_graphics_94 = new cjs.Graphics().p("EgmpAPBMBDHgR+MAKMAmCMhDHAR/g");
	var mask_1_graphics_95 = new cjs.Graphics().p("EgmpAO7MBDHgR+MAKMAmBMhDHAR/g");
	var mask_1_graphics_96 = new cjs.Graphics().p("EgmpAO0MBDHgR+MAKMAmCMhDHAR/g");
	var mask_1_graphics_97 = new cjs.Graphics().p("EgmpAOuMBDHgR+MAKMAmBMhDHAR/g");
	var mask_1_graphics_98 = new cjs.Graphics().p("EgmpAOoMBDHgR+MAKMAmCMhDHAR/g");
	var mask_1_graphics_99 = new cjs.Graphics().p("EgmpAOjMBDHgR+MAKMAmBMhDHAR/g");
	var mask_1_graphics_100 = new cjs.Graphics().p("EgmpAOdMBDHgR+MAKMAmCMhDHAR/g");
	var mask_1_graphics_101 = new cjs.Graphics().p("EgmpAOYMBDHgR+MAKMAmCMhDHAR/g");
	var mask_1_graphics_102 = new cjs.Graphics().p("EgmpAOTMBDHgR+MAKMAmCMhDHAR/g");
	var mask_1_graphics_103 = new cjs.Graphics().p("EgmpAOPMBDHgR+MAKMAmBMhDHAR/g");
	var mask_1_graphics_104 = new cjs.Graphics().p("EgmpAOLMBDHgR+MAKMAmBMhDHAR/g");
	var mask_1_graphics_105 = new cjs.Graphics().p("EgmpAOHMBDHgR+MAKMAmBMhDHAR/g");
	var mask_1_graphics_106 = new cjs.Graphics().p("EgmpAODMBDHgR+MAKMAmCMhDHAR/g");
	var mask_1_graphics_107 = new cjs.Graphics().p("EgmpAOAMBDHgR+MAKMAmBMhDHAR/g");
	var mask_1_graphics_108 = new cjs.Graphics().p("EgmpAN9MBDHgR+MAKMAmBMhDHAR/g");
	var mask_1_graphics_109 = new cjs.Graphics().p("EgmpgKBMBDHgR/MAKMAmCMhDHAR/g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(58).to({graphics:mask_1_graphics_58,x:-234.775,y:585.625}).wait(1).to({graphics:mask_1_graphics_59,x:-221.8182,y:380.768}).wait(1).to({graphics:mask_1_graphics_60,x:-209.0776,y:379.114}).wait(1).to({graphics:mask_1_graphics_61,x:-196.5532,y:377.4881}).wait(1).to({graphics:mask_1_graphics_62,x:-184.245,y:375.8902}).wait(1).to({graphics:mask_1_graphics_63,x:-172.153,y:374.3204}).wait(1).to({graphics:mask_1_graphics_64,x:-160.2771,y:372.7787}).wait(1).to({graphics:mask_1_graphics_65,x:-148.6175,y:371.2651}).wait(1).to({graphics:mask_1_graphics_66,x:-137.1741,y:369.7795}).wait(1).to({graphics:mask_1_graphics_67,x:-125.9468,y:368.322}).wait(1).to({graphics:mask_1_graphics_68,x:-114.9357,y:366.8925}).wait(1).to({graphics:mask_1_graphics_69,x:-104.1409,y:365.4911}).wait(1).to({graphics:mask_1_graphics_70,x:-93.5622,y:364.1178}).wait(1).to({graphics:mask_1_graphics_71,x:-83.1997,y:362.7726}).wait(1).to({graphics:mask_1_graphics_72,x:-73.0535,y:361.4554}).wait(1).to({graphics:mask_1_graphics_73,x:-63.1234,y:360.1663}).wait(1).to({graphics:mask_1_graphics_74,x:-53.4095,y:358.9052}).wait(1).to({graphics:mask_1_graphics_75,x:-43.9118,y:357.6722}).wait(1).to({graphics:mask_1_graphics_76,x:-34.6303,y:356.4673}).wait(1).to({graphics:mask_1_graphics_77,x:-25.565,y:355.2904}).wait(1).to({graphics:mask_1_graphics_78,x:-16.7158,y:354.1417}).wait(1).to({graphics:mask_1_graphics_79,x:-8.0829,y:353.0209}).wait(1).to({graphics:mask_1_graphics_80,x:0.3338,y:351.9283}).wait(1).to({graphics:mask_1_graphics_81,x:8.5344,y:350.8637}).wait(1).to({graphics:mask_1_graphics_82,x:16.5187,y:349.8272}).wait(1).to({graphics:mask_1_graphics_83,x:24.2869,y:348.8187}).wait(1).to({graphics:mask_1_graphics_84,x:31.8388,y:347.8383}).wait(1).to({graphics:mask_1_graphics_85,x:39.1746,y:346.886}).wait(1).to({graphics:mask_1_graphics_86,x:46.2942,y:345.9617}).wait(1).to({graphics:mask_1_graphics_87,x:53.1976,y:345.0655}).wait(1).to({graphics:mask_1_graphics_88,x:59.8847,y:344.1974}).wait(1).to({graphics:mask_1_graphics_89,x:66.3557,y:343.3573}).wait(1).to({graphics:mask_1_graphics_90,x:72.6105,y:342.5453}).wait(1).to({graphics:mask_1_graphics_91,x:78.6491,y:341.7614}).wait(1).to({graphics:mask_1_graphics_92,x:84.4716,y:341.0056}).wait(1).to({graphics:mask_1_graphics_93,x:90.0778,y:340.2778}).wait(1).to({graphics:mask_1_graphics_94,x:95.4678,y:339.578}).wait(1).to({graphics:mask_1_graphics_95,x:100.6416,y:338.9064}).wait(1).to({graphics:mask_1_graphics_96,x:105.5993,y:338.2628}).wait(1).to({graphics:mask_1_graphics_97,x:110.3407,y:337.6472}).wait(1).to({graphics:mask_1_graphics_98,x:114.866,y:337.0598}).wait(1).to({graphics:mask_1_graphics_99,x:119.175,y:336.5004}).wait(1).to({graphics:mask_1_graphics_100,x:123.2679,y:335.969}).wait(1).to({graphics:mask_1_graphics_101,x:127.1446,y:335.4658}).wait(1).to({graphics:mask_1_graphics_102,x:130.8051,y:334.9906}).wait(1).to({graphics:mask_1_graphics_103,x:134.2493,y:334.5434}).wait(1).to({graphics:mask_1_graphics_104,x:137.4774,y:334.1244}).wait(1).to({graphics:mask_1_graphics_105,x:140.4893,y:333.7334}).wait(1).to({graphics:mask_1_graphics_106,x:143.285,y:333.3704}).wait(1).to({graphics:mask_1_graphics_107,x:145.8646,y:333.0355}).wait(1).to({graphics:mask_1_graphics_108,x:148.2279,y:332.7287}).wait(1).to({graphics:mask_1_graphics_109,x:150.425,y:485.625}).wait(66));

	// Wave
	this.instance_3 = new lib.Wave();
	this.instance_3.setTransform(155.1,474.05,1,1,0,0,0,0,152.8);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(58).to({_off:false},0).wait(117));

	// BG
	this.instance_4 = new lib.BG_1();
	this.instance_4.setTransform(203.8,464.75,1,1,0,0,0,0.1,240.5);

	this.instance_5 = new lib.BG();
	this.instance_5.setTransform(203.75,464.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},115).wait(60));

	// Arrow
	this.instance_6 = new lib.Arrow();
	this.instance_6.setTransform(283.05,61.4,0.752,0.752,0,0,0,4.4,8.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(118).to({_off:false},0).to({x:305.6,alpha:1},18).wait(14).to({x:283.05,alpha:0},0).to({x:305.6,alpha:1},19).wait(6));

	// Text_copy_copy
	this.instance_7 = new lib.Text3();
	this.instance_7.setTransform(123.2,125.75,1,1,0,0,0,0.6,30.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(110).to({_off:false},0).to({x:121.55,y:95.75,alpha:1},5,cjs.Ease.get(0.73)).wait(60));

	// Text_copy
	this.instance_8 = new lib.Text2();
	this.instance_8.setTransform(123.2,125.75,1,1,0,0,0,0.6,30.9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(65).to({_off:false},0).to({x:121.55,y:95.75,alpha:1},5,cjs.Ease.get(0.73)).wait(34).to({x:123.2,y:66.75,alpha:0},5,cjs.Ease.get(-0.72)).to({_off:true},1).wait(65));

	// Text
	this.instance_9 = new lib.Text();
	this.instance_9.setTransform(123.2,125.75,1,1,0,0,0,0.6,30.9);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(14).to({_off:false},0).to({x:121.55,y:95.75,alpha:1},5,cjs.Ease.get(0.73)).wait(40).to({x:123.2,y:66.75,alpha:0},5,cjs.Ease.get(-0.72)).to({_off:true},1).wait(110));

	// Colour
	this.instance_10 = new lib.Colour();
	this.instance_10.setTransform(149.55,296.8,1,1,0,0,0,0,306.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(175));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-85.7,290.5,728.9000000000001,937.5999999999999);
// library properties:
lib.properties = {
	id: '30E78885BC2AEF479BC7857CB052F862',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/BG_A.jpg", id:"BG_A"},
		{src:"images/Character_A.png", id:"Character_A"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['30E78885BC2AEF479BC7857CB052F862'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;