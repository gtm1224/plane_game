 /* 
				构造函数
				创建飞机对象，定义飞机的图片，加载，变化等属性与方法
				*/
				function Sprite(){
				    this.init = function(){
						// console.log(init_data)
						div = document.createElement("div")
						container.appendChild(div)
						img = document.createElement("img")
						div.image = img 
						div.appendChild(img);
						this.div = div
						div = null
						this.div.style.left = init_data.x + "px"
						this.div.style.top  = init_data.y + "px"
						this.div.className  = init_data.className
						this.path = init_data.path
						this.image_files = init_data.image_files
						this.first_frame = init_data.first_frame
						this.last_frame = init_data.last_frame
						this.current_frame = init_data.current_frame
						this.speed = init_data.speed
						this.images = []
						this.life = init_data.life
						this.dead = false
					}
					this.remove = function(){
						this.div.remove()
					}
					this.load = function(){
						// console.log(this.image_files)
						for (i=0;i<=this.image_files.length-1;i++){
						   this.images[i] = new Image()
						   this.images[i].src = this.path+this.image_files[i]
						}
						
						this.div.image.src = this.images[this.current_frame].src
								
					}
					this.movies = function(){
					    // console.log(this)
						if (this.life<=0){
							this.last_frame = this.images.length-1
						}
						if (this.life<=0 && this.current_frame >= this.last_frame){
							this.dead = true
						}
						this.current_frame += 1
						if (this.current_frame > this.last_frame){
							this.current_frame = 0
						}
						// console.log(this.current_frame)
						this.div.image.src = this.images[this.current_frame].src
						
					
					}
				}
				
				
				// 我方构造函数
				function HeroPlane(){
					 init_data = {
						x:300, 
						y:300, 
						className:"plane hero",
						path : "image/hero/",
						image_files : ["hero1.png","hero2.png","hero_blowup_n1.png","hero_blowup_n2.png","hero_blowup_n3.png","hero_blowup_n4.png"],
						first_frame : 0,
						last_frame : 1,
						current_frame : 0,
						speed : 10,
						life: 10,
						dead:false
						}
					HeroPlane.prototype.constructor.call(this,init_data)
				    this.init()
					this.load()

				}
				
				HeroPlane.prototype = new Sprite()

				HeroPlane.prototype.fly = function(){
					    this.movies()
					    plane = this.div
						
                        if (this.key == "ArrowLeft"){
							 plane.style.left =( plane.offsetLeft - this.speed) +"px"
                        }
                        if (this.key == "ArrowRight"){
							 plane.style.left = ( plane.offsetLeft + this.speed) + "px"
                        }
                        if (this.key == "ArrowUp"){
							 plane.style.top = ( plane.offsetTop - this.speed) + "px"
                        }
                        if (this.key == "ArrowDown"){
							 plane.style.top = ( plane.offsetTop + this.speed) + "px"
                        }

				}
				
				
				// 敌机1构造函数
				function Enemy1Plane(x,y){
					
					init_data = {
						x: getRand(50, 400),
						y: getRand(0, 100)-400, 
						className:"plane enemy1",
						path : "image/enemy1/",
						image_files : ["enemy1.png","enemy1_down1.png","enemy1_down2.png","enemy1_down3.png","enemy1_down4.png"],
						first_frame : 0,
						last_frame : 0,
						current_frame : 0,
						speed : 5,
						life: 1,
						dead: false
						}
					Enemy1Plane.prototype.constructor.call(this, init_data)
					this.init()
					this.load()

				}
				
				
				Enemy1Plane.prototype = new Sprite()
				
				Enemy1Plane.prototype.fly = function(){
				        // console.log(this.div.offsetTop , this.speed )
						this.movies()
						this.div.style.top = (this.div.offsetTop + this.speed )+ "px"		
					    if (this.div.offsetTop > container.clientHeight){
							this.div.style.top = "-20px"
						}
					
				}
				// 敌机2构造函数
				function Enemy2Plane(x,y){
					
					init_data = {
						x: getRand(50, 400),
						y: getRand(0, 100)-400, 
						className:"plane enemy2",
						path : "image/enemy2/",
						image_files : ["enemy2.png","enemy2_down1.png","enemy2_down2.png","enemy2_down3.png","enemy2_down4.png"],
						first_frame : 0,
						last_frame : 0,
						current_frame : 0,
						speed : 5,
						life: 3,
						dead: false
						}
					Enemy2Plane.prototype.constructor.call(this, init_data)
					this.init()
					this.load()
				
				}
				
				
				Enemy2Plane.prototype = new Sprite()
				
				Enemy2Plane.prototype.fly = function(){
				        // console.log(this.div.offsetTop , this.speed )
						this.movies()
						this.div.style.top = (this.div.offsetTop + this.speed )+ "px"		
					    if (this.div.offsetTop > container.clientHeight){
							this.div.style.top = "-20px"
						}
					
				}
				
				
				// 敌机3构造函数
				function Enemy3Plane(x,y){
					
					init_data = {
						x: getRand(50, 400),
						y: getRand(0, 100)-400, 
						className:"plane enemy3",
						path : "image/enemy3/",
						image_files : ["enemy3_n1.png","enemy3_down1.png","enemy3_down2.png","enemy3_down3.png","enemy3_down4.png"],
						first_frame : 0,
						last_frame : 0,
						current_frame : 0,
						speed : 5,
						life: 5,
						dead: false
						}
					Enemy3Plane.prototype.constructor.call(this, init_data)
					this.init()
					this.load()
				
				}
				
				
				Enemy3Plane.prototype = new Sprite()
				
				Enemy3Plane.prototype.fly = function(){
				        // console.log(this.div.offsetTop , this.speed )
						this.movies()
						this.div.style.top = (this.div.offsetTop + this.speed )+ "px"		
					    if (this.div.offsetTop > container.clientHeight){
							this.div.style.top = "-20px"
						}
					
				}
				//子弹构造函数
				function Bullet(x,y){
					init_data = {
						x: x,
						y: y, 
						className:"plane bullet",
						path : "image/bullet/",
						image_files : ["doge_3.jpg","doge_3.jpg"],
						first_frame : 0,
						last_frame : 1,
						current_frame : 0,
						speed : 10,
						life: 1,
						dead: false
					}
					this.init()
					this.load()
				}
				
				Bullet.prototype = new Sprite()
				Bullet.prototype.fly = function(){
					this.movies()
					this.div.style.top = (this.div.offsetTop - this.speed )+ "px"
					if (this.div.offsetTop <= 0){
						this.dead = true
					}
				}
				