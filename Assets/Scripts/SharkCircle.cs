using UnityEngine;
using System.Collections;

public class SharkCircle : MonoBehaviour {



	[SerializeField] float timeCounter;

	[SerializeField] float speed;
	[SerializeField] float width;
	[SerializeField] float height;

	// Use this for initialization
	void Start () {
			
	}
	
	// Update is called once per frame
	void Update () {
		timeCounter += Time.deltaTime * speed/5;

		float x = Mathf.Cos (timeCounter)*width;
		float y = .8f;
		float z = Mathf.Sin (timeCounter)*height;

		transform.position = new Vector3 (x, y, z);
		transform.Rotate (-Vector3.up, (speed*10) * Time.deltaTime);
	
	}
}
