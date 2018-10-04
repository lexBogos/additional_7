module.exports = function solveSudoku(matrix) {
let matrix_new = matrix;
let d =[];
let matrix_f = 0;
let matrix_g = [];
let dlya_sravn='';
let r = 0;
let a =[];
let change = 1;
let z=[]
let unique='';
let matrix_help=0;
let k = 0;
let matrix_g_help = 0;
let matrix_base = 0;
let matrix_g_base = 0;

function solve(){
while (change>0){
	matrix_g = []
	change = 0;
	for (let i= 0; i<9; i++){
		for (let e =0; e<9; e++){
			if(matrix_new[i][e] == 0){ 
				matrix_f = [1,2,3,4,5,6,7,8,9]
				d=[]
				for (let f=0; f<9; f++){
					for (let b = 0; b<9; b++){
						if(matrix_new[i][f]==matrix_f[b]){
							matrix_f[b]='a'
						}
					  	if(matrix_new[f][e]==matrix_f[b]){
					  		matrix_f[b]='a'
					  	} 
		

						}				  
					}
				for(let s=0; s<3; s++){
					for(let n=0;n<3; n++){
						d.push(matrix_new[Math.floor(i/3)*3+s][Math.floor(e/3)*3+n])
						}
					}

				for(s=0; s<9; s++){
					for(n=0; n<9; n++){
						if (matrix_f[n]!=0&&matrix_f[n]==d[s]){
							matrix_f[n]='a'	
							}
						}
					}

				while(matrix_f.indexOf('a')!=-1){
					matrix_f.splice(matrix_f.indexOf('a'), 1);
						}

				matrix_g[matrix_g.length] = i+','+e+'|' +[matrix_f]
					if (matrix_f.length==1){matrix_new[i][e]=matrix_f[0]}


				}

			}

		}	
	for (s=0; s<9; s=s+3 ){
		for (e=0; e<9; e=e+3 ){
			for (i = 0; i<matrix_g.length; i++){
				if(matrix_g[i][0]>=s 
					&& 	matrix_g[i][0]<s+3
					&& matrix_g[i][2]>=e
					&& matrix_g[i][2]<e+3){
					z=z+matrix_g[i].substring(4,)
					a.push(matrix_g[i])
					}	
				}

								
				for (i = 0; i<=z.length; i++){
					for (f = z.length-1; f>=0; f--){
						if (z[i]==z[f]&&i!=f){
							r++}
						if(z[i]==z[f]&&r>0){
							z = z.slice(0,f)+z.slice(f+1)
							if (i==f) {i--,r=0}
							}
						}
					}
								
								unique=z;
						
			for (i = 0; i<a.length; i++){
				if(a[i].substring(4,).indexOf(unique)!=-1&&unique!=""){
					unique = unique.split('')
					unique = Number(unique[0])
					matrix_new[a[i][0]][a[i][2]]=unique
					change++
					}
				}
							
			a=[];
			z=[];
							
			}
		}
						for (s=0; s<9; s++){
							for (i = 0; i<matrix_g.length; i++){
								if(matrix_g[i][0]==s){ 
									dlya_sravn = dlya_sravn + matrix_g[i].substring(4,)+','
									}
								if (matrix_g[i][0]==s+1){break}
							}		

							for (i = 0; i<=dlya_sravn.length; i++){
								for (e = dlya_sravn.length-1; e>=0; e--){
									if (dlya_sravn[i]==dlya_sravn[e]&&i!=e){
										z++}
										if(dlya_sravn[i]==dlya_sravn[e]&&z>0){
										dlya_sravn = dlya_sravn.slice(0,e)+dlya_sravn.slice(e+1)
										if (i==e) {i--,z=0}

									}
								}							
							}
							
							unique=dlya_sravn;

							for (i = 0; i<matrix_g.length; i++){
								if(matrix_g[i][0]==s){ 
									if(matrix_g[i].substring(4,).indexOf(unique)!=-1&&unique!=""){								
										unique = unique.split('')
										unique = Number(unique[0])
										matrix_new[matrix_g[i][0]][matrix_g[i][2]]=unique
										change++
									}
						
									}
								if (matrix_g[i][0]==s+1){break}
							
								}
	
							dlya_sravn = '';

							}	

						for (s=0; s<9; s++){
							for (i = 0; i<matrix_g.length; i++){
								if(matrix_g[i][2]==s){ 
									dlya_sravn = dlya_sravn + matrix_g[i].substring(4,)+','
									}
							}		
						

								for (i = 0; i<=dlya_sravn.length; i++){

								for (e = dlya_sravn.length-1; e>=0; e--){
									if (dlya_sravn[i]==dlya_sravn[e]&&i!=e){
										z++}
										if(dlya_sravn[i]==dlya_sravn[e]&&z>0){
										dlya_sravn = dlya_sravn.slice(0,e)+dlya_sravn.slice(e+1)
										if (i==e) {i--,z=0}

									}
								}			
							}

							
							unique=dlya_sravn;
							// console.log("isprav ", unique)

							for (i = 0; i<matrix_g.length; i++){
								if(matrix_g[i][2]==s){ 
									if(matrix_g[i].substring(4,).indexOf(unique)!=-1&&unique!=""){					
										unique = unique.split('')
										unique = Number(unique[0])
										matrix_new[matrix_g[i][0]][matrix_g[i][2]]=unique
										change++
									}
								}
							}

							dlya_sravn = '';
							}	
						


	}
}

solve()

if(matrix_g.length>0){ pick()}

function pick(){

	matrix_g.sort(function(a, b){	
  	return a.length - b.length;
		});

	i=4;
	let shetchik = 0
	forward()

	matrix_base = JSON.parse(JSON.stringify(matrix_new));
	matrix_g_base = JSON.parse(JSON.stringify(matrix_g));

	function forward(){
			
			matrix_g.sort(function(a, b){	
  			return a.length - b.length;
			});

			if(matrix_g.length==0){return matrix_new}
			if (matrix_g[0].length>4){

			matrix_help = JSON.parse(JSON.stringify(matrix_new));
			matrix_g_help = JSON.parse(JSON.stringify(matrix_g));
			matrix_new[matrix_g[0][0]][matrix_g[0][2]]=Number(matrix_g[0][i])
			change = 1

			solve()
			i=4
			forward()
			
			}
			else{back()}
				


	function back(){

		if (matrix_g.length>0){
			if (matrix_g[0].length<5){
				matrix_g = 	JSON.parse(JSON.stringify(matrix_g_help));
				matrix_new = JSON.parse(JSON.stringify(matrix_help));
				i=i+2;
				forward()
				
		}
			}	
				}

	}
}



console.log(matrix_new)

return matrix_new
}


// solveSudoku([
//     [0, 0, 4, 0, 5, 0, 0, 0, 0],
//     [3, 5, 0, 0, 0, 0, 6, 9, 7],
//     [6, 7, 0, 0, 0, 0, 0, 0, 0],
//     [4, 0, 0, 6, 8, 0, 0, 0, 0],
//     [0, 6, 0, 0, 0, 0, 0, 8, 0],
//     [0, 8, 0, 5, 0, 0, 3, 0, 0],
//     [0, 3, 0, 9, 0, 0, 7, 0, 5],
//     [0, 4, 0, 8, 0, 0, 0, 0, 9],
//     [0, 0, 0, 0, 0, 3, 0, 1, 0]
//   ])