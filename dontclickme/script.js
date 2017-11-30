var stage = 0;

var stages =
[
	{text: "I said, don't click me."},
	{text: "Please don't click me."},
	{text: "<em>Please</em> don't click me,"},
	{text: "<span style=\"font-size: 10vw\">I SAID,<br/>DON'T CLICK ME</span>", thought: "Are you deaf?"},
	{text: "Don't click me", thought: "Okay, maybe making myself bigger was not such a good idea."},
	{thought: "Maybe you don't speak English?", text:"Ne me clique pas."},
	{text: "Klick mich nicht an."},
	{text: "No me hagas clic."},
	{text: "Non cliccare su di me."},
	{text: "Nie klikaj mnie."},
	{text: "Niet op mij klikken."},
	{text: "не нажимай меня"},
	{text: "不要点击我"},
	{text: "私をクリックしないでください"},
	{text: "मुझे क्लिक न करें"},
	{text: "Peidiwch â chlicio fi."},
	{text: "Μην κάνετε κλικ σε με."},
	{text: "Ne klaku min."},
	{text: "<img src=\"hqdefault.jpg\"/>", thought: "Maybe you can't read?"},
	{text: "<img height=\"250\" src=\"rageguy.png\"/>", action: play_poking},
	{text: "Well, okay."},
	{text: "Click me one more time, and I'll get angry."},
	{text: "You won't like it when I'm angry."},
	{text: "Okay, you asked for it..."},
	{text: "Ha!", action: switch_url},
];

function save_stage()
{
	document.cookie = "stage=" + stage;
}


function play_poking()
{
	var audio = new Audio("poke.mp3");
	audio.play();
}

function click_button()
{
	window.alert ("BOING");
}

function switch_url()
{
	var b = document.getElementById ("button");
	window.location = "http://www.mdx.ac.uk/";
	b.onclick = click_button;
}

function update_button(e)
{
	var t = document.getElementById ("thought");
	if (stages [stage] == undefined)
	{
		e.innerHTML = "Just don't click me.";
		return;
	}	
	e.innerHTML = stages [stage].text;
	if (stages [stage].thought != undefined)
	{
		t.innerHTML = stages [stage].thought;
	}
	else
	{
		t.innerHTML = "";
	}	
	if (stages [stage].action != undefined)
	{
		stages [stage].action ();
	}
}

function button_clicked(e)
{
	update_button (e);
	stage++;
	save_stage ();
}

function page_loaded()
{
	var ca = decodeURIComponent (document.cookie).split (';');
	for (var i = 0; i < ca.length; i++)
	{
		var eq = ca [i].indexOf ('=');
		var key = ca [i].substring (0, eq);
		var value = ca [i].substring (eq + 1);
		if (key == 'stage')
		{
			stage = parseInt (value);
		}
	}
	update_button(document.getElementById ("button"));
}

