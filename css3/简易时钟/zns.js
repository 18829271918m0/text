//版权 北京智能社©, 保留所有权利

function setStyle3(obj, name, value)
{
	var bigName=name.charAt(0).toUpperCase()+name.substring(1);
	
	obj.style['Webkit'+bigName]=value;
	obj.style['Moz'+bigName]=value;
	obj.style['ms'+bigName]=value;
	obj.style['O'+bigName]=value;
	obj.style[name]=value;
}

window.onload=function ()
{
	var oDiv=document.getElementById('div1');
	var oHour=document.querySelector('#div1 .hour');
	var oMin=document.querySelector('#div1 .min');
	var oSec=document.querySelector('#div1 .sec');
	
	function tick()
	{
		var oDate=new Date();
		
		setStyle3(oHour, 'transform', 'rotate('+30*(oDate.getHours()+oDate.getMinutes()/60)+'deg)');
		setStyle3(oMin, 'transform', 'rotate('+6*(oDate.getMinutes()+oDate.getSeconds()/60)+'deg)');
		setStyle3(oSec, 'transform', 'rotate('+6*(oDate.getSeconds()+oDate.getMilliseconds()/1000)+'deg)');
	}
	
	setInterval(tick, 30);
	tick();
	
	//创建刻度
	for(var i=0;i<60;i++)
	{
		var oSpan=document.createElement('span');
		
		if(i%5)
		{
			oSpan.className='scaler';
		}
		else
		{
			oSpan.className='big_scaler';
			if(i==0)
			{
				oSpan.innerHTML='<em>12<\/em>';
			}
			else
			{
				oSpan.innerHTML='<em>'+i/5+'<\/em>';
				setStyle3(oSpan.children[0], 'transform', 'rotate('+-6*i+'deg)');
			}
		}
		
		setStyle3(oSpan, 'transform', 'rotate('+6*i+'deg)');
		
		oDiv.appendChild(oSpan);
	}
};