function transpose(a) {

            	  // Calculate the width and height of the Array
            	  var w = a.length || 0;
            	  var h = a[0] instanceof Array ? a[0].length : 0;
            	 var i, j, t = [];

            	  for(i=0; i<h; i++) {

                  	    t[i] = [];

            	    for(j=0; j<w; j++) {

            	    t[i][j] = a[j][i];//transposing
            	    }
            	  }

            	  return t;
            	}

            	console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]));