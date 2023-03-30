let points = [[10,30],[30,40],[80,50],[90,70],[90,150],[100,190],[110,220],[130,230],
[150,240],[130,220],[130,190],[150,150],[160,120],[170,70],[180,50],[220,40],
[250,30],[220,20],[170,10],[90,10],[30,20],[10,30],[80,50],[110,40],
[150,40],[180,50],[170,70],[150,60],[110,60],[90,70],[80,50]]
//圖形座標點

let ctx; //設定ctx這個變數

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(100);
	ctx = canvas.getContext('2d');
	ctx.lineWidth = 8;
	ctx.lineCap = 'round'
	//------ 呼叫gradientLine函式三次,讓線條由兩個顏色漸層
	gradientLine(ctx, 60, 60, 300, 380, 'black', 'blue') // 畫線起點的x座標、y座標
	gradientLine(ctx, 720, 120, 80, 300, 'brown', 'orange') //畫線終點的x座標、y座標
	gradientLine(ctx, 520, 70, 500, 440, '#FF4500', '#99FF4D') //兩個漸層色的色碼
  
  
}

function draw() {
  background(255);
    
      let scaleAmt = map(mouseX, 0, width/2, 0.2, 0.4);  //使用map()函數將滑鼠位置影響縮放程度的範圍
      scale(scaleAmt);  //設定縮放程度

      textSize(50); //字型大小
      fill(139,69,19); //顏色設定(RGB) ,咖啡色
      text("魔法帽", 1800, 500); //字內容與座標位置
      
      translate(width/2,height/2); //將座標系原點移到畫布中心。
      for (let j = 0; j < 5; j++) {
        let scale_factor = 1 - j * 0.1; // 計算縮小比例
      push();
      translate(width/2, height/2); // 將座標系原點移到畫布中心。
      scale(scale_factor, -scale_factor)
      for (let i = 0; i < points.length-1; i++) {  //point的點產生第一個點到最後一點
    
      line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);
    
      }
      line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]); //讓第一個點連到最後一個點形成封閉圖
      pop()
      }
    }

      function gradientLine(ctx, x1, y1, x2, y2, c1, c2) { //(x1,y1)代表起始點,(x2,y2)代表終點,(c1,c2)代表顏色
        const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
        gradient.addColorStop(0, c1); //addColorStop為漸變對象添加顏色,第一個參數表示漸變的位置，第二個參數是要添加的顏色
        gradient.addColorStop(1, c2);
        ctx.strokeStyle = gradient; //將gradient屬性設定畫筆的顏色為漸變
      
        ctx.beginPath();
        ctx.moveTo(x1, y1); //繪製起始點
        ctx.lineTo(x2, y2); //繪製終點
        ctx.stroke();
      }