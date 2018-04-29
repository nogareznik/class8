(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.yellowNoNum = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(6.8,1,1).p("AGkAAQAACuh7B7Qh7B7iuAAQitAAh7h7Qh7h7AAiuQAAitB7h7QB7h7CtAAQCuAAB7B7QB7B7AACtg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AkoEpQh7h7AAiuQAAitB7h7QB7h7CtAAQCuAAB7B7QB7B7AACtQAACuh7B7Qh7B7iuAAQitAAh7h7g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.yellowNoNum, new cjs.Rectangle(-45.3,-45.3,90.7,90.7), null);


(lib.yellow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("2", "40px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 44;
	this.text.lineWidth = 70;
	this.text.parent = this;
	this.text.setTransform(0,-23.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(6.8,1,1).p("AGkAAQAACuh7B7Qh7B7iuAAQitAAh7h7Qh7h7AAiuQAAitB7h7QB7h7CtAAQCuAAB7B7QB7B7AACtg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AkoEpQh7h7AAiuQAAitB7h7QB7h7CtAAQCuAAB7B7QB7B7AACtQAACuh7B7Qh7B7iuAAQitAAh7h7g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.yellow, new cjs.Rectangle(-45.3,-45.3,90.7,90.7), null);


(lib.redNoNum = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(6.8,1,1).p("AGkAAQAACuh7B7Qh7B7iuAAQitAAh7h7Qh7h7AAiuQAAitB7h7QB7h7CtAAQCuAAB7B7QB7B7AACtg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AkoEpQh7h7AAiuQAAitB7h7QB7h7CtAAQCuAAB7B7QB7B7AACtQAACuh7B7Qh7B7iuAAQitAAh7h7g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.redNoNum, new cjs.Rectangle(-45.3,-45.3,90.7,90.7), null);


(lib.red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("1", "40px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 44;
	this.text.lineWidth = 70;
	this.text.parent = this;
	this.text.setTransform(0,-23.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(6.8,1,1).p("AGkAAQAACuh7B7Qh7B7iuAAQitAAh7h7Qh7h7AAiuQAAitB7h7QB7h7CtAAQCuAAB7B7QB7B7AACtg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AkoEpQh7h7AAiuQAAitB7h7QB7h7CtAAQCuAAB7B7QB7B7AACtQAACuh7B7Qh7B7iuAAQitAAh7h7g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.red, new cjs.Rectangle(-45.3,-45.3,90.7,90.7), null);


(lib.greenNoNum = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(6.8,1,1).p("AGkAAQAACuh7B7Qh7B7iuAAQitAAh7h7Qh7h7AAiuQAAitB7h7QB7h7CtAAQCuAAB7B7QB7B7AACtg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#339900").s().p("AkoEpQh7h7AAiuQAAitB7h7QB7h7CtAAQCuAAB7B7QB7B7AACtQAACuh7B7Qh7B7iuAAQitAAh7h7g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0.949)").ss(6.4,1,1).p("AmOAAQAAikB1h1QB1h1CkAAQClAAB1B1QB1B1AACkQAAClh1B1Qh1B1ilAAQikAAh1h1Qh1h1AAilg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3E9E0D").s().p("AkZEaQh0h1gBilQABikB0h1QB1h0CkgBQClABB1B0QB0B1ABCkQgBClh0B1Qh1B0ilABQikgBh1h0g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(0,0,0,0.894)").ss(6.1,1,1).p("Al4AAQAAibBuhvQBvhuCbAAQCcAABvBuQBuBvAACbQAACchuBvQhvBuicAAQibAAhvhuQhuhvAAicg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#48A41B").s().p("AkJEKQhuhuAAicQAAibBuhuQBuhuCbAAQCcAABuBuQBuBuAACbQAACchuBuQhuBuicAAQibAAhuhug");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(0,0,0,0.843)").ss(5.7,1,1).p("AliAAQAAiSBohoQBohoCSAAQCTAABoBoQBoBoAACSQAACThoBoQhoBoiTAAQiSAAhohoQhohoAAiTg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#53A928").s().p("Aj6D7QhohoAAiTQAAiSBohoQBohoCSAAQCTAABoBoQBoBoAACSQAACThoBoQhoBoiTAAQiSAAhohog");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(0,0,0,0.788)").ss(5.4,1,1).p("AlNAAQAAiJBihiQBihiCJAAQCKAABiBiQBiBiAACJQAACKhiBiQhiBiiKAAQiJAAhihiQhihiAAiKg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5EAE36").s().p("AjrDsQhihiAAiKQAAiJBihiQBihiCJAAQCKAABiBiQBiBiAACJQAACKhiBiQhiBiiKAAQiJAAhihig");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(0,0,0,0.737)").ss(5,1,1).p("Ak3AAQAAiABbhcQBchbCAAAQCBAABcBbQBbBcAACAQAACBhbBcQhcBbiBAAQiAAAhchbQhbhcAAiBg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#69B443").s().p("AjcDcQhbhbABiBQgBiABbhcQBchbCAABQCBgBBbBbQBcBcgBCAQABCBhcBbQhbBciBgBQiAABhchcg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(0,0,0,0.682)").ss(4.6,1,1).p("AkhAAQAAh3BVhVQBVhVB3AAQB4AABVBVQBVBVAAB3QAAB4hVBVQhVBVh4AAQh3AAhVhVQhVhVAAh4g");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#73B951").s().p("AjMDNQhVhVAAh4QAAh3BVhVQBVhVB3AAQB4AABVBVQBVBVAAB3QAAB4hVBVQhVBVh4AAQh3AAhVhVg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(0,0,0,0.631)").ss(4.3,1,1).p("AkLAAQAAhuBOhPQBPhOBuAAQBvAABPBOQBOBPAABuQAABvhOBPQhPBOhvAAQhuAAhPhOQhOhPAAhvg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7EBF5E").s().p("Ai9C+QhOhPAAhvQAAhuBOhPQBPhOBuAAQBvAABPBOQBOBPAABuQAABvhOBPQhPBOhvAAQhuAAhPhOg");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(0,0,0,0.58)").ss(3.9,1,1).p("Aj2AAQAAhlBIhJQBJhIBlAAQBmAABJBIQBIBJAABlQAABmhIBJQhJBIhmAAQhlAAhJhIQhIhJAAhmg");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#89C46B").s().p("AiuCvQhHhJgBhmQABhlBHhJQBJhHBlgBQBmABBJBHQBHBJABBlQgBBmhHBJQhJBHhmABQhlgBhJhHg");

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(0,0,0,0.525)").ss(3.6,1,1).p("AjgAAQAAhcBChCQBChCBcAAQBdAABCBCQBCBCAABcQAABdhCBCQhCBChdAAQhcAAhChCQhChCAAhdg");

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#94C979").s().p("AieCfQhChCAAhdQAAhcBChCQBChCBcAAQBdAABCBCQBCBCAABcQAABdhCBCQhCBChdAAQhcAAhChCg");

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(0,0,0,0.475)").ss(3.2,1,1).p("AjKAAQAAhUA7g7QA7g7BUAAQBVAAA7A7QA7A7AABUQAABVg7A7Qg7A7hVAAQhUAAg7g7Qg7g7AAhVg");

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#9ECF86").s().p("AiOCPQg8g7AAhUQAAhTA8g7QA7g8BTAAQBUAAA7A8QA8A7AABTQAABUg8A7Qg7A8hUAAQhTAAg7g8g");

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(0,0,0,0.42)").ss(2.9,1,1).p("Ai1AAQAAhLA2g0QA0g2BLAAQBMAAA0A2QA2A0AABLQAABMg2A0Qg0A2hMAAQhLAAg0g2Qg2g0AAhMg");

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A9D494").s().p("Ah/CAQg2g0AAhMQAAhLA2g0QA0g2BLAAQBMAAA0A2QA2A0AABLQAABMg2A0Qg0A2hMAAQhLAAg0g2g");

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(0,0,0,0.369)").ss(2.5,1,1).p("AifAAQAAhCAvguQAugvBCAAQBDAAAuAvQAvAuAABCQAABDgvAuQguAvhDAAQhCAAgugvQgvguAAhDg");

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B4D9A1").s().p("AhwBxQgvgvAAhCQAAhBAvgvQAvgvBBAAQBCAAAvAvQAvAvAABBQAABCgvAvQgvAvhCAAQhBAAgvgvg");

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(0,0,0,0.318)").ss(2.2,1,1).p("AiJAAQAAg5AogoQAogoA5AAQA6AAAoAoQAoAoAAA5QAAA6goAoQgoAog6AAQg5AAgogoQgogoAAg6g");

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BFDFAE").s().p("AhgBhQgpgoAAg5QAAg4ApgoQAogpA4AAQA5AAAoApQApAoAAA4QAAA5gpAoQgoApg5AAQg4AAgogpg");

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(0,0,0,0.263)").ss(1.8,1,1).p("Ah0AAQAAgwAjghQAhgjAwAAQAxAAAhAjQAjAhAAAwQAAAxgjAhQghAjgxAAQgwAAghgjQgjghAAgxg");

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#C9E4BC").s().p("AhRBSQgjghABgxQgBgwAjghQAhgjAwABQAxgBAhAjQAjAhgBAwQABAxgjAhQghAjgxgBQgwABghgjg");

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(0,0,0,0.212)").ss(1.4,1,1).p("AheAAQAAgnAcgbQAbgcAnAAQAoAAAbAcQAcAbAAAnQAAAogcAbQgbAcgoAAQgnAAgbgcQgcgbAAgog");

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D4EAC9").s().p("AhCBDQgbgcgBgnQABgmAbgcQAcgbAmgBQAnABAcAbQAbAcAAAmQAAAngbAcQgcAbgnAAQgmAAgcgbg");

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(0,0,0,0.157)").ss(1.1,1,1).p("AhIAAQAAgeAVgVQAVgVAeAAQAfAAAVAVQAVAVAAAeQAAAfgVAVQgVAVgfAAQgeAAgVgVQgVgVAAgfg");

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DFEFD7").s().p("AgyAzQgWgUAAgfQAAgeAWgUQAUgWAeAAQAfAAAUAWQAWAUAAAeQAAAfgWAUQgUAWgfAAQgeAAgUgWg");

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(0,0,0,0.106)").ss(0.7,1,1).p("AgzAAQAAgVAQgOQAOgQAVAAQAWAAAOAQQAQAOAAAVQAAAWgQAOQgOAQgWAAQgVAAgOgQQgQgOAAgWg");

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EAF4E4").s().p("AgjAkQgPgOAAgWQAAgVAPgOQAOgPAVAAQAWAAAOAPQAPAOAAAVQAAAWgPAOQgOAPgWAAQgVAAgOgPg");

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(0,0,0,0.051)").ss(0.4,1,1).p("AgdAAQAAgMAJgIQAIgJAMAAQANAAAIAJQAJAIAAAMQAAANgJAIQgIAJgNAAQgMAAgIgJQgJgIAAgNg");

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F4FAF2").s().p("AgUAVQgJgIAAgNQAAgMAJgIQAIgJAMAAQANAAAIAJQAJAIAAAMQAAANgJAIQgIAJgNAAQgMAAgIgJg");

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgEAFQgDgCAAgDQAAgCADgCQACgDACAAQADAAACADQADACAAACQAAADgDACQgCADgDAAQgCAAgCgDg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_38}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.3,-45.3,90.7,90.7);


(lib.green = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("3", "40px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 44;
	this.text.lineWidth = 70;
	this.text.parent = this;
	this.text.setTransform(0,-23.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(6.8,1,1).p("AGkAAQAACuh7B7Qh7B7iuAAQitAAh7h7Qh7h7AAiuQAAitB7h7QB7h7CtAAQCuAAB7B7QB7B7AACtg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#339900").s().p("AkoEpQh7h7AAiuQAAitB7h7QB7h7CtAAQCuAAB7B7QB7B7AACtQAACuh7B7Qh7B7iuAAQitAAh7h7g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.green, new cjs.Rectangle(-45.3,-45.3,90.7,90.7), null);


(lib.btn123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.btn_txt = new cjs.Text("", "30px 'Times New Roman'", "#660000");
	this.btn_txt.name = "btn_txt";
	this.btn_txt.textAlign = "center";
	this.btn_txt.lineHeight = 33;
	this.btn_txt.lineWidth = 94;
	this.btn_txt.parent = this;
	this.btn_txt.setTransform(-1,-27.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AnMipIOZAAIAAFTIuZAAg");
	this.shape.setTransform(0,-9.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCCCC").s().p("AnMCqIAAlTIOZAAIAAFTg");
	this.shape_1.setTransform(0,-9.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6666").s().p("AnMCqIAAlTIOZAAIAAFTg");
	this.shape_2.setTransform(0,-9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3.7,1,1).p("AnMipIOZAAIAAFTIuZAAg");
	this.shape_3.setTransform(0,-9.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.btn_txt}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.btn_txt}]},1).to({state:[{t:this.shape_2},{t:this.shape_3},{t:this.btn_txt}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.9,-29.1,98,42.8);


// stage content:
(lib.click1238class = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		
		self.red_mc.addEventListener("click", clickRed);
		self.yellow_mc.addEventListener("click", clickYellow);
		self.green_mc.addEventListener("click", clickGreen);
		
		self.btn.btn_txt.text = "hide";
		self.btn.addEventListener("click", clickOnOff);
		
		function clickRed() {
			showAll();
			if (self.btn.btn_txt.text == "hide") { // מצב הסתרה
				self.r1.visible = false;
				self.r2.visible = false;
				self.r3.visible = false;
				self.r4.visible = false;
				self.r5.visible = false;
				self.r6.visible = false;
			} else { // מצב שקיפות
				self.r1.alpha = 0.5;
				self.r2.alpha = 0.5;
				self.r3.alpha = 0.5;
				self.r4.alpha = 0.5;
				self.r5.alpha = 0.5;
				self.r6.alpha = 0.5;
			}
		}
		
		function clickYellow() {
			showAll();
			if (self.btn.btn_txt.text == "hide") {
				self.y1.visible = false;
				self.y2.visible = false;
				self.y3.visible = false;
				self.y4.visible = false;
				self.y5.visible = false;
			} else { // מצב שקיפות
				self.y1.alpha = 0.5;
				self.y2.alpha = 0.5;
				self.y3.alpha = 0.5;
				self.y4.alpha = 0.5;
				self.y5.alpha = 0.5;
			}
		}
		
		function clickGreen() {
			showAll();
			if (self.btn.btn_txt.text == "hide") {
				self.g1.gotoAndPlay(1);
				self.g2.gotoAndPlay(1);
				self.g3.gotoAndPlay(1);
				self.g4.gotoAndPlay(1);
				self.g5.gotoAndPlay(1);
				self.g6.gotoAndPlay(1);
			} else { // מצב שקיפות
				self.g1.alpha = 0.5;
				self.g2.alpha = 0.5;
				self.g3.alpha = 0.5;
				self.g4.alpha = 0.5;
				self.g5.alpha = 0.5;
				self.g6.alpha = 0.5;
			}
		}
		
		function clickOnOff() {
			showAll();
			if (self.btn.btn_txt.text == "hide") {
				self.btn.btn_txt.text = "alpha";
			} else {
				self.btn.btn_txt.text = "hide";
			}
		}
		
		function showAll() {
			//הצגת כל האדומים - שקיפות וחשיפה
			self.r1.alpha = 1;
			self.r2.alpha = 1;
			self.r3.alpha = 1;
			self.r4.alpha = 1;
			self.r5.alpha = 1;
			self.r6.alpha = 1;
			self.r1.visible = true;
			self.r2.visible = true;
			self.r3.visible = true;
			self.r4.visible = true;
			self.r5.visible = true;
			self.r6.visible = true;
			//הצגת כל הירוקים - שקיפות וחשיפה
			self.g1.alpha = 1;
			self.g2.alpha = 1;
			self.g3.alpha = 1;
			self.g4.alpha = 1;
			self.g5.alpha = 1;
			self.g6.alpha = 1;
			self.g1.gotoAndStop(0);
			self.g2.gotoAndStop(0);
			self.g3.gotoAndStop(0);
			self.g4.gotoAndStop(0);
			self.g5.gotoAndStop(0);
			self.g6.gotoAndStop(0);
			//הצגת כל הצהובים - שקיפות וחשיפה
			self.y1.alpha = 1;
			self.y2.alpha = 1;
			self.y3.alpha = 1;
			self.y4.alpha = 1;
			self.y5.alpha = 1;
			self.y1.visible = true;
			self.y2.visible = true;
			self.y3.visible = true;
			self.y4.visible = true;
			self.y5.visible = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.btn = new lib.btn123();
	this.btn.parent = this;
	this.btn.setTransform(60.1,41.8);
	new cjs.ButtonHelper(this.btn, 0, 1, 2);

	this.r2 = new lib.redNoNum();
	this.r2.parent = this;
	this.r2.setTransform(406.9,354.8,0.485,0.485,-7.3,0,0,0.2,0.3);

	this.g3 = new lib.greenNoNum();
	this.g3.parent = this;
	this.g3.setTransform(317.3,354.7,0.485,0.485,-7.3,0,0,0.2,0.1);

	this.y1 = new lib.yellowNoNum();
	this.y1.parent = this;
	this.y1.setTransform(514.8,263.7,0.485,0.485,172.7,0,0,0,-0.1);

	this.r1 = new lib.redNoNum();
	this.r1.parent = this;
	this.r1.setTransform(489.2,335.5,0.485,0.485,172.7,0,0,0.1,0);

	this.g1 = new lib.greenNoNum();
	this.g1.parent = this;
	this.g1.setTransform(514.8,186.9,0.485,0.485,172.7);

	this.y4 = new lib.yellowNoNum();
	this.y4.parent = this;
	this.y4.setTransform(188.4,357.1,0.485,0.485,90,0,0,0.1,0);

	this.r6 = new lib.redNoNum();
	this.r6.parent = this;
	this.r6.setTransform(32.4,201.3,0.485,0.485,90,0,0,0.1,0.1);

	this.g5 = new lib.greenNoNum();
	this.g5.parent = this;
	this.g5.setTransform(113.3,225.1,0.485,0.485,90,0,0,0.1,0.1);

	this.y5 = new lib.yellowNoNum();
	this.y5.parent = this;
	this.y5.setTransform(54,280.8,0.485,0.485,-90,0,0,0.1,0);

	this.r5 = new lib.redNoNum();
	this.r5.parent = this;
	this.r5.setTransform(119.1,321.6,0.485,0.485,-90,0,0,0.1,0.1);

	this.g6 = new lib.greenNoNum();
	this.g6.parent = this;
	this.g6.setTransform(59.9,372,0.485,0.485,-90,0,0,0.1,0.1);

	this.y2 = new lib.yellowNoNum();
	this.y2.parent = this;
	this.y2.setTransform(352.4,282.9,0.485,0.485,180,0,0,0.1,0);

	this.r3 = new lib.redNoNum();
	this.r3.parent = this;
	this.r3.setTransform(388.2,220.4,0.485,0.485,180,0,0,0.1,0.1);

	this.g2 = new lib.greenNoNum();
	this.g2.parent = this;
	this.g2.setTransform(438.6,279.6,0.485,0.485,180,0,0,0.1,0.1);

	this.y3 = new lib.yellowNoNum();
	this.y3.parent = this;
	this.y3.setTransform(291.7,242.1,0.485,0.485,0,0,0,0.1,0);

	this.r4 = new lib.redNoNum();
	this.r4.parent = this;
	this.r4.setTransform(250.9,307.1,0.485,0.485,0,0,0,0.1,0.1);

	this.g4 = new lib.greenNoNum();
	this.g4.parent = this;
	this.g4.setTransform(200.5,247.9,0.485,0.485,0,0,0,0.1,0.1);

	this.green_mc = new lib.green();
	this.green_mc.parent = this;
	this.green_mc.setTransform(398,112);

	this.yellow_mc = new lib.yellow();
	this.yellow_mc.parent = this;
	this.yellow_mc.setTransform(278,112);

	this.red_mc = new lib.red();
	this.red_mc.parent = this;
	this.red_mc.setTransform(163.7,112);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.red_mc},{t:this.yellow_mc},{t:this.green_mc},{t:this.g4},{t:this.r4},{t:this.y3},{t:this.g2},{t:this.r3},{t:this.y2},{t:this.g6},{t:this.r5},{t:this.y5},{t:this.g5},{t:this.r6},{t:this.y4},{t:this.g1},{t:this.r1},{t:this.y1},{t:this.g3},{t:this.r2},{t:this.btn}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(285.1,212.7,529.3,381.4);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;