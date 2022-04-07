function registration()
	{

		let fname= document.getElementById("fname").value;
        let lname= document.getElementById("lname").value;
		let email= document.getElementById("email").value;
		let pword= document.getElementById("pword").value;			
		let cpword= document.getElementById("cpword").value;
		
        //email id expression code
		let pword_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
		let letters = /^[A-Za-z]+$/;
		let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		if(fname=='')
		{
			alert('Please enter your first name');
		}
        
        else if(lname=='')
		{
			alert('Please enter your last name');
		}
		else if(!letters.test(fname))
		{
			alert('First Name field required only alphabet characters');
		}
        else if(!letters.test(lname))
		{
			alert('Last Name field required only alphabet characters');
		}
		else if(email=='')
		{
			alert('Please enter your email');
		}
		else if (!filter.test(email))
		{
			alert('Invalid email');
		}
		
		else if(pword=='')
		{
			alert('Please enter Password');
		}
		else if(cpword=='')
		{
			alert('Enter Confirm Password');
		}
		else if(!pword_expression.test(pword))
		{
			alert ('Upper case, Lower case, Special character and Numeric letter are required in Password field');
		}
		else if(pword != cpword)
		{
			alert ('Password not Matched');
		}
		else if(document.getElementById("pword").value.length < 6)
		{
			alert ('Password minimum length is 6');
		}
		else if(document.getElementById("pword").value.length > 12)
		{
			alert ('Password max length is 12');
		}
		else
		{				                            
               alert('Thank You for Logging In')
			   
		}
	}
	function clearFunc()
	{
		document.getElementById("fname").value="";
		document.getElementById("lname").value="";
		document.getElementById("email").value="";
		document.getElementById("pword").value="";
		document.getElementById("cpword").value="";
	}
