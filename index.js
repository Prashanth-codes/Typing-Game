const typeArea=document.querySelector(".typingArea");
const btn=document.querySelector(".btn");
const main=document.querySelector(".main");
const result=document.querySelector(".result");

const words = [
    "Explain the concept of closures in JavaScript",
    "What is the difference between frontend and backend?",
    "Why do you want to learn TypeScript?",
    "What is Node.js?",
    "Can you explain asynchronous programming?",
    "What is your favorite coding tool?",
    "What is Docker, and why is it useful?",
    "How does version control work?",
    "What is Git, and how does it help in development?",
    "What is the importance of testing in software development?",
    "What are microservices?",
    "Explain RESTful APIs in simple terms",
    "What is full-stack development?",
    "How does a web browser work?",
    "What are JavaScript Promises?",
    "Why should you learn cloud computing?",
    "What is your favorite coding framework and why?",
    "What is the difference between Agile and Waterfall development?",
    "How do you debug your code?",
    "Explain the concept of event-driven programming",
    "What is GraphQL, and how does it differ from REST?",
    "What is continuous integration and continuous deployment (CI/CD)?",
    "Why is learning algorithms important?",
    "Explain the difference between a stack and a queue",
    "What is Big O notation?",
    "What is a database index, and why is it important?",
    "What is Machine Learning, and how does it work?"
];

const game = {
    start:0,
    end:0,
    user:"",
    text:""
};

btn.addEventListener("click",()=>{
    if(btn.textContent==="start"){
        play();
        typeArea.value="";
        typeArea.disabled=false;
    }
    else if(btn.textContent==="Done"){
        typeArea.disabled=true;
        main.style.borderColor = "white";
        end();
    }
})

const play = () =>{
    const idx=Math.floor(Math.random()*words.length)
    main.textContent=words[idx];
    game.text=words[idx];
    main.style.borderColor = "white";
    btn.textContent="Done";
    game.start=new Date().getTime();
}

const end = () =>{
    game.end=new Date().getTime();
    const totalTime=(game.end-game.start)/1000;
    game.user=typeArea.value;
    const correct=results();
    main.style.borderColor='white';
    result.innerHTML=`Time ${totalTime} Score: ${correct.score} out of ${correct.total}`;
    btn.textContent="start";
}

const results = () =>{
    let givenText=game.text.split(" ");
    let userText=game.user.split(" ");
    let score=0;
    givenText.forEach((word,idx)=>{
        if(word===userText[idx]){
            score++;
        }
    });
    return {score,total: givenText.length};
}