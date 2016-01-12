var Player : Transform;
var MoveSpeed = 2;
var MinDist =5;
var MaxDist = 10;


function Start()
{
	System.Threading.Thread.Sleep(500);
}

function Update ()
{
	//Moves towrd player
	transform.LookAt (Player);
	if(Vector3.Distance(transform.position,Player.position ) >= MinDist) {
	
		transform.position += transform.forward * MoveSpeed*Time.deltaTime;
		
		
		if(Vector3.Distance(transform.position,Player.position) <= MaxDist)
		{
		
		
			transform.position += transform.up * MoveSpeed*Time.deltaTime;
		
		}
	}
}