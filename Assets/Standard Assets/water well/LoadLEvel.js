#pragma strict

var level : int;

function Start () {

}

function OnTriggerEnter () {
	Application.LoadLevel(level);
}