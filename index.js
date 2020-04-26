var anim=document.querySelector(".image")
var btn=document.querySelector(".btn")
var button=document.querySelector(".button")
console.log(scrollY)
var i=0;
var page6para=document.querySelector(".page6para")

var next=document.getElementById("next")
var previous=document.getElementById("previous");

var page6photo=document.querySelector(".page6image");
var number=document.getElementById("render")
var images=[];
  images[0]='(1.jpg)'; 
  images[1]='(3.jpg)';
  images[2]='(2.jpg)';
  images[3]='(4.jpg)';
var text=[];
text[0]="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea";
text[1]="commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit";
text[2]="sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in";
text[3]="exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat"; 
window.addEventListener("scroll",function()
{
    if(window.scrollY>90 && window.scrollY<1220)
    {
        anim.classList.add('imageanim');
        btn.classList.add('btnamin');
        button.classList.add('buttonanim')
        
        

    }
    else{
        anim.classList.remove('imageanim');
        btn.classList.remove('btnamin');
        button.classList.remove('buttonanim')

    }
    
    if(window.scrollY>1176 && i==0)
    {

        counter("pro1",0,200,2000);
        counter("pro2",0,500,2000);
        counter("pro3",0,300,2500);

        i++;
    }
    function counter(id,start,end,duration){
        let obj=document.getElementById(id),
        current=start,
        range=end-start,
        increment=end>start ? 1 : -1,
        step=Math.abs(Math.floor(duration/range)),
        timer=setInterval(()=>{
            current+=increment;
            obj.textContent=current+" $";
            if(current==end)
            {
                clearInterval(timer);
            }
        },step)

    }
})
next.addEventListener("click",function()
{
    score=i+1;
    number.textContent="0"+score;
    page6photo.style.transition = "all 2s";
    page6photo.style.background="url"+images[i];
    page6photo.style.backgroundSize="100% 100%";
    page6para.textContent=text[i];

    if(i<images.length-1)
    {
        
        i++
        j=i;

    }
    else{
        i=0;
    }
    
})

previous.addEventListener("click",function()
{
    
    page6photo.style.transition = "all 2s";
   
   
    if(images.length-1>=j)
    {
        if(j==0)
        {
            j=4;
        }
        score=j;
        number.textContent="0"+score;
        j=j-1;
     
        page6photo.style.background="url"+images[j];
        page6photo.style.backgroundSize="100% 100%";
        page6para.textContent=text[j];
        
        
       
    }
    

})