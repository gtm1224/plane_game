
				function getRand(min, max){
					return Math.round((max-min)*Math.random())
				}
				
				function isConflict(obj1, obj2){
					
					rect1 = obj1.div
					rect2 = obj2.div
					if (rect2.offsetLeft >= rect1.offsetLeft){
						// obj1在obj2的左上角原点左侧
						x_conflict = rect2.offsetLeft - rect1.offsetLeft <= rect1.offsetWidth  ? true : false
					} else {
						// obj1在obj2的左上角原点右侧
						x_conflict = rect1.offsetLeft - rect2.offsetLeft <= rect2.offsetWidth  ? true : false
						
					}
					
					
					if (rect2.offsetTop - rect1.offsetTop){	
						// obj1在obj2的左上角原点上方
						y_conflict = rect2.offsetTop - rect1.offsetTop <= rect1.offsetHeight
					} else {
						// obj1在obj2的左上角原点下方
						y_conflict = rect1.offsetTop - rect2.offsetTop <= rect2.offsetHeight
					}
					// console.log(x_conflict ,y_conflict)
					
					return x_conflict && y_conflict
				}
				