var ball1;
var database;
var position1;



function setup(){
    createCanvas(500,500);
    ball1 = createSprite(250,250,10,10);
    ball1.shapeColor = "red";
    database=firebase.database()

database.ref("ball/position").on("value",readPos,showError)

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}
function readPos(data){
    position1=data.val()
    console.log(position1)
    ball1.x=position1.x;
    ball1.y=position1.y;
    
}


function writePosition(x,y){
    database.ref("ball/position").set({
        x:position1.x+x,
        
        y:position1.y+y
    })
}



function showError(){
    console.log("Error")
}
