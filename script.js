*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Cairo',sans-serif;
scroll-behavior:smooth;
}

body{
background:#050505;
color:#fff;
overflow-x:hidden;
}

#particles-js{
position:fixed;
width:100%;
height:100%;
top:0;
left:0;
z-index:-1;
}

header{
min-height:100vh;
display:flex;
flex-direction:column;
}

nav{
display:flex;
justify-content:space-between;
align-items:center;
padding:20px 8%;
position:fixed;
width:100%;
top:0;
backdrop-filter:blur(12px);
background:rgba(0,0,0,.25);
z-index:1000;
}

.logo{
font-size:30px;
font-weight:900;
color:#9d4dff;
text-shadow:0 0 20px #9d4dff;
}

nav ul{
display:flex;
gap:25px;
list-style:none;
}

nav a{
color:white;
text-decoration:none;
transition:.3s;
}

nav a:hover{
color:#9d4dff;
}

.hero{
height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
padding:20px;
}

.hero h1{
font-size:60px;
margin-bottom:20px;
text-shadow:0 0 30px #9d4dff;
}

.hero p{
max-width:700px;
font-size:20px;
opacity:.85;
margin-bottom:35px;
}

.btn{
padding:15px 40px;
border-radius:50px;
background:#9d4dff;
color:#fff;
text-decoration:none;
border:none;
cursor:pointer;
font-size:18px;
transition:.3s;
box-shadow:0 0 25px #9d4dff;
}

.btn:hover{
transform:translateY(-5px);
box-shadow:0 0 40px #9d4dff;
}

.section{
padding:120px 8%;
text-align:center;
}

.section h2{
font-size:42px;
margin-bottom:20px;
}

.cards{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:30px;
padding:100px 8%;
}

.card{.card h3{
font-size:26px;
margin-bottom:15px;
color:#9d4dff;
}

.card p{
opacity:.8;
line-height:1.8;
}

footer{
padding:40px;
text-align:center;
opacity:.7;
}

@media(max-width:768px){

nav{
flex-direction:column;
gap:15px;
padding:15px;
}

nav ul{
flex-wrap:wrap;
justify-content:center;
gap:15px;
}

.hero h1{
font-size:38px;
}

.hero p{
font-size:17px;
}

.section h2{
font-size:32px;
}

.btn{
padding:12px 30px;
font-size:16px;
}

} 

background:rgba(255,255,255,.05);
backdrop-filter:blur(12px);
border:1px solid rgba(255,255,255,.1);
border-radius:20px;
padding:35px;
transition:.4s;
}

.card:hover{
transform:translateY(-12px);
box-shadow:0 0 35px #9d4dff;
}
