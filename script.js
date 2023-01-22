let textFoto = document.querySelector('.textFoto');
textFoto.innerText = "I'm a dev and this is my resume!";
var intervalo = 100;

let botaoResume = document.querySelector('.spanResume')
botaoResume.addEventListener('click',function(e){
    alert("Am I a resume? I think so.... Wait, I think?")
})
function maquinaDeEscrever(el){
    const textArray = el.innerHTML.split('');
    el.innerHTML = '';

    textArray.forEach((letter, i) =>
        setTimeout(() => (el.innerHTML += letter), 95 * i)
    );
}maquinaDeEscrever(textFoto)




let botaoHome = document.querySelector('.spanHome')
botaoHome.addEventListener('click',function(e){
    alert('You are here...right?!')
})

let botaoAbout = document.querySelector('.spanAbout')
botaoAbout.addEventListener('click',function(e){
    alert("I will take you there!")
    scroll(0, 500);
    document.getElementById('box1').click();
})

let botaoProjects = document.querySelector('.spanProjects')
botaoProjects.addEventListener('click',function(e){
    alert("One minute, please...")
    scroll(0,3000)
    document.getElementById('box7').click();
})


let botaoMe = document.querySelector('.box-1')
let contador = 0;
botaoMe.addEventListener('click', function eita(e){
    contador++


    let divPai = document.querySelector('.centro')
    if(contador % 2 != 0){
        let contacts = document.createElement('li');
        contacts.setAttribute('class','contacts');

        let p = document.createElement('p')
        p.innerText = "Hi! My name is Daniel Viana, I'm 23 years old!"
        let title = document.createElement('p');
        title.innerText = "My contatcs:"
        contacts.appendChild(p)
        contacts.appendChild(title)
        divPai.appendChild(contacts)
    
    
        let liNumber = document.createElement('li');
        let number = document.createElement('p')
        number.innerText = 'Number: +55 11963295758(WhatsApp)'
        liNumber.appendChild(number)
        contacts.appendChild(liNumber)
    
        let liEmail = document.createElement('li');
        let email = document.createElement('p')
        email.innerText = 'E-mail: dani_vianaitb@outlook.com'
        contacts.appendChild(liEmail)
        liEmail.appendChild(email)
    
        let liMe = document.createElement('li')
        liMe.setAttribute('class','liMe')
        let textMe = document.createElement('p');
        textMe.setAttribute('class','textMe')
        textMe.innerText = 'I live in state of São Paulo in Barueri since I was born and currently I live with my parents. Last year I was decide study IT and I got in college, but in November I received the news that I pass to study in Kenzie Academy, a very renowned programming school around here, and this make me stop the college to focus on Kenzie.'
        contacts.appendChild(liMe)
        liMe.appendChild(textMe)

        function maquinaDeEscrever(el) {
            const textArray = el.innerHTML.split('');
            el.innerHTML = '';
        
            textArray.forEach((letter, i) =>
                setTimeout(() => (el.innerHTML += letter), 10 * i)
            );
        }maquinaDeEscrever(textMe);
    }
    let aboutMe = document.querySelector('.contacts');
    if(contador % 2 == 0){
        aboutMe.parentNode.removeChild(aboutMe);
    }
})

let botaoFormation = document.querySelector('.box-2')
let contador1 = 0
botaoFormation.addEventListener('click', function(e){
    contador1++
    let ulPai = document.querySelector('.univerty')
    let ulItens = document.querySelector('.formationItens')
    
    if(contador1 % 2 != 0){
        let ulParaRemocao = document.createElement('ul')
        ulParaRemocao.setAttribute('class','UlRemove')

        let li1 = document.createElement('li')
        li1.innerText = 'UNICV:'
        let li2 = document.createElement('li')
        li2.innerText = 'Kenzie Academy Brasil:'
        let li3 = document.createElement('li')
        li3.innerText = 'StarteSe University:'
        ulParaRemocao.append(li1,li2,li3)
        ulPai.appendChild(ulParaRemocao)

        let ulParaRemocao1 = document.createElement('ul')
        ulParaRemocao1.setAttribute('class','UlRemove1')

        let li4 = document.createElement('li')
        li4.innerText = 'Systems analysis and development'
        let li5 = document.createElement('li')
        li5.innerText = 'Full Stack Developer'
        let li6 = document.createElement('li')
        li6.innerText = 'SoftSkill'
        ulParaRemocao1.append(li4,li5,li6)
        ulItens.appendChild(ulParaRemocao1)
        function maquinaDeEscrever(el) {
            const textArray = el.innerHTML.split('');
            el.innerHTML = '';
        
            textArray.forEach((letter, i) =>
                setTimeout(() => (el.innerHTML += letter), 50 * i)
            );
        }maquinaDeEscrever(li4),maquinaDeEscrever(li5),maquinaDeEscrever(li6)
    }
    let remove = document.querySelector('.UlRemove')
    let remove1 = document.querySelector('.UlRemove1')
    if(contador1 % 2 == 0){
        remove.parentNode.removeChild(remove)
        remove1.parentNode.removeChild(remove1)
    }
})


let botaoSkill = document.querySelector('.box-3')
let contador2 = 0;
botaoSkill.addEventListener('click', function(e){
    contador2++
    let ulSkill = document.querySelector('.liSkill')
    let ulLvl = document.querySelector('.skillLvl')
    
    if(contador2 % 2 != 0){
        let ulParaRemocaoSkill = document.createElement('ul')
        ulParaRemocaoSkill.setAttribute('class','UlRemoveSkill')

        let liSkill1 = document.createElement('li')
        liSkill1.innerText = 'HTML:'
        let liSkill2 = document.createElement('li')
        liSkill2.innerText = 'CSS:'
        let liSkill3 = document.createElement('li')
        liSkill3.innerText = 'JavaScript:'
        let liSkill4 = document.createElement('li')
        liSkill4.innerText = 'Office Pack:'
        let liSkill5 = document.createElement('li')
        liSkill5.innerText = 'Power BI:'
        ulParaRemocaoSkill.append(liSkill1,liSkill2,liSkill3,liSkill4,liSkill5)
        ulSkill.appendChild(ulParaRemocaoSkill)

        let ulParaRemocaoSkill1 = document.createElement('ul')
        ulParaRemocaoSkill1.setAttribute('class','UlRemoveSkill1')

        let liSkill6 = document.createElement('li')
        liSkill6.innerText = 'Intermediary'
        let liSkill7 = document.createElement('li')
        liSkill7.innerText = 'Intermediary'
        let liSkill8 = document.createElement('li')
        liSkill8.innerText = 'Basic'
        let liSkill9 = document.createElement('li')
        liSkill9.innerText = 'Intermediary'
        let liSkill10 = document.createElement('li')
        liSkill10.innerText = 'Basic'
        ulParaRemocaoSkill1.append(liSkill6,liSkill7,liSkill8,liSkill9,liSkill10)
        ulLvl.appendChild(ulParaRemocaoSkill1)
        
        function maquinaDeEscrever(el) {
            const textArray = el.innerHTML.split('');
            el.innerHTML = '';
        
            textArray.forEach((letter, i) =>
                setTimeout(() => (el.innerHTML += letter), 50 * i)
            );
        }maquinaDeEscrever(liSkill6),maquinaDeEscrever(liSkill7),maquinaDeEscrever(liSkill8),maquinaDeEscrever(liSkill9),maquinaDeEscrever(liSkill10)
    }
    let removeSkill = document.querySelector('.UlRemoveSkill')
    let removeSkill1 = document.querySelector('.UlRemoveSkill1')
    if(contador2 % 2 == 0){
        removeSkill.parentNode.removeChild(removeSkill)
        removeSkill1.parentNode.removeChild(removeSkill1)
    }
})


let botaoExperience = document.querySelector('.box-4')
let contador3 = 0
botaoExperience.addEventListener('click', function(e){
    contador3++
    let liExp1 = document.querySelector('#exp1')
    let liExp2 = document.querySelector('#exp2')
    let liExp3 = document.querySelector('#exp3')
    
    if(contador3 % 2 != 0){
        let ulParaRemocaoExp = document.createElement('ul')
        ulParaRemocaoExp.setAttribute('class','UlRemoveExp')
        let exp1 = document.createElement('p')
        exp1.innerText = 'Assist in basic computer services, checking manual or computerized services, customer service, assessment of processes.'

        let ulParaRemocaoExp1 = document.createElement('ul')
        ulParaRemocaoExp1.setAttribute('class','UlRemoveExp1')
        let exp2 = document.createElement('p')
        exp2.innerText = 'Assist in receiving documents, document shipment preparation, storage crontole and updating of books, documents and papers, manually and computerized.'

        let ulParaRemocaoExp2 = document.createElement('ul')
        ulParaRemocaoExp2.setAttribute('class','UlRemoveExp2')
        let exp3 = document.createElement('p')
        exp3.innerText = 'Monitor service teams by linear monitoring evaluate and follow up calls, score markings on monitoring worksheets, analyze possibilities for improvements in customer service and experience, perform weekly diagnostics on customer satisfaction or customer issues.'

        ulParaRemocaoExp.appendChild(exp1),ulParaRemocaoExp1.appendChild(exp2),ulParaRemocaoExp2.appendChild(exp3)
        liExp1.appendChild(ulParaRemocaoExp),liExp2.appendChild(ulParaRemocaoExp1),liExp3.appendChild(ulParaRemocaoExp2)

        function maquinaDeEscrever(el) {
            const textArray = el.innerHTML.split('');
            el.innerHTML = '';
            textArray.forEach((letter, i) =>
                setTimeout(() => (el.innerHTML += letter), 25 * i)
            );
        }maquinaDeEscrever(exp1),maquinaDeEscrever(exp2),maquinaDeEscrever(exp3)
    }
    let removeExp = document.querySelector('.UlRemoveExp')
    let removeExp1 = document.querySelector('.UlRemoveExp1')
    let removeExp2 = document.querySelector('.UlRemoveExp2')
    if(contador3 % 2 == 0){
        removeExp.parentNode.removeChild(removeExp)
        removeExp1.parentNode.removeChild(removeExp1)
        removeExp2.parentNode.removeChild(removeExp2)
    }
})

let botaoLanguage = document.querySelector('.box-5')
let contador4 = 0
botaoLanguage.addEventListener('click', function(e){
    contador4++
    let ulLng = document.querySelector('.ulLanguage')
    let ulLvl = document.querySelector('.languageLvl')
    
    if(contador4 % 2 != 0){
        let ulParaRemocaoLng = document.createElement('ul')
        ulParaRemocaoLng.setAttribute('class','UlRemoveLng')

        let lng1 = document.createElement('li')
        lng1.innerText = 'Portuguese:'
        let lng2 = document.createElement('li')
        lng2.innerText = 'English:'
        ulParaRemocaoLng.append(lng1,lng2)
        ulLng.appendChild(ulParaRemocaoLng)

        let ulParaRemocaoLvl = document.createElement('ul')
        ulParaRemocaoLvl.setAttribute('class','UlRemoveLvl')
        let lng3 = document.createElement('li')
        lng3.innerText = 'Native'
        let lng4 = document.createElement('li')
        lng4.innerText = 'Intermediary'
        ulParaRemocaoLvl.append(lng3,lng4)
        ulLvl.appendChild(ulParaRemocaoLvl)


        function maquinaDeEscrever(el) {
            const textArray = el.innerHTML.split('');
            el.innerHTML = '';

            textArray.forEach((letter, i) =>
                setTimeout(() => (el.innerHTML += letter), 50 * i),
            );
        }maquinaDeEscrever(lng1),maquinaDeEscrever(lng2),maquinaDeEscrever(lng3),maquinaDeEscrever(lng4);
    }
    let removeLng = document.querySelector('.UlRemoveLng')
    let removeLvl = document.querySelector('.UlRemoveLvl')
    if(contador4 % 2 == 0){
        removeLng.parentNode.removeChild(removeLng)
        removeLvl.parentNode.removeChild(removeLvl)
    }
})

let botaoPortifolio = document.querySelector('.box-7')
let contador5 = 0
botaoPortifolio.addEventListener('click', function(e){
    contador5++
    let ulPort = document.querySelector('.ulPortifolio')
    let divPort = document.querySelector('.divPort')

    if(contador5 == 1){
        let textPort = document.createElement('p')
        textPort.setAttribute('class','textPort')
        textPort.innerText = "I've anothers simples projects in my GitHub."
        divPort.appendChild(textPort)
    }

    if(contador5 % 2 != 0){
        let ulParaRemocaoPort4 = document.createElement('ul')
        ulParaRemocaoPort4.setAttribute('class','UlRemovePort4')

        let port4 = document.createElement('li')
        port4.setAttribute('class','liPort')
        let imgPort4 = document.createElement('img')
        imgPort4.src = './imgPortifolio/grupo7.png'
        imgPort4.alt = 'SiteEdu'
        imgPort4.setAttribute('class','itensPort')
        let aPort4 = document.createElement('a')
        aPort4.href = 'https://grupo7-mini-hackathon.netlify.app/';
        aPort4.target ='_blank';
        aPort4.setAttribute('class','ancoraPort')
        aPort4.innerText = 'Site Educação'
        aPort4.appendChild(imgPort4)
        port4.append(aPort4)
        ulParaRemocaoPort4.appendChild(port4)
        ulPort.appendChild(ulParaRemocaoPort4)


        let ulParaRemocaoPort2 = document.createElement('ul')
        ulParaRemocaoPort2.setAttribute('class','UlRemovePort2')

        let port2 = document.createElement('li')
        port2.setAttribute('class','liPort')
        let imgPort2 = document.createElement('img')
        imgPort2.src = './imgPortifolio/catalagoGeek.png'
        imgPort2.alt = 'CatálogoGeek'
        imgPort2.setAttribute('class','itensPort')
        let aPort2 = document.createElement('a')
        aPort2.href = 'https://kenzie-academy-brasil-developers.github.io/m1-entrega-loja-geek_danielviana10/';
        aPort2.target ='_blank';
        aPort2.setAttribute('class','ancoraPort')
        aPort2.innerText = 'Geek Store'
        aPort2.appendChild(imgPort2)
        port2.append(aPort2)
        ulParaRemocaoPort2.appendChild(port2)
        ulPort.appendChild(ulParaRemocaoPort2)


        let ulParaRemocaoPort3 = document.createElement('ul')
        ulParaRemocaoPort3.setAttribute('class','UlRemovePort3')

        let port3 = document.createElement('li')
        port3.setAttribute('class','liPort')
        let imgPort3 = document.createElement('img')
        imgPort3.src = './imgPortifolio/entregaM1.png'
        imgPort3.alt = 'CatálogoGeek'
        imgPort3.setAttribute('class','itensPort')
        let aPort3 = document.createElement('a')
        aPort3.href = 'https://danielviana10.github.io/projetoM1/';
        aPort3.target ='_blank';
        aPort3.setAttribute('class','ancoraPort')
        aPort3.innerText = 'Car Store(dynamic)'
        aPort3.appendChild(imgPort3)
        port3.append(aPort3)
        ulParaRemocaoPort3.appendChild(port3)
        ulPort.appendChild(ulParaRemocaoPort3)


        let ulParaRemocaoPort1 = document.createElement('ul')
        ulParaRemocaoPort1.setAttribute('class','UlRemovePort1')

        let port1 = document.createElement('li')
        port1.setAttribute('class','liPort')
        let imgPort1 = document.createElement('img')
        imgPort1.src = './imgPortifolio/kenzieflix.png'
        imgPort1.alt = 'Kenzieflix'
        imgPort1.setAttribute('class','itensPort')
        let aPort1 = document.createElement('a')
        aPort1.href = 'https://kenzie-academy-brasil-developers.github.io/M1-S2-Kenzieflix_danielviana10/';
        aPort1.target ='_blank';
        aPort1.setAttribute('class','ancoraPort')
        aPort1.innerText = 'Kenzieflix'
        aPort1.appendChild(imgPort1)
        port1.appendChild(aPort1)
        ulParaRemocaoPort1.appendChild(port1)
        ulPort.append(ulParaRemocaoPort1)


    }
    let removePort1 = document.querySelector('.UlRemovePort1')
    let removePort2 = document.querySelector('.UlRemovePort2')
    let removePort3 = document.querySelector('.UlRemovePort3')
    let removePort4 = document.querySelector('.UlRemovePort4')
    if(contador5 % 2 == 0){
        removePort1.parentNode.removeChild(removePort1)
        removePort2.parentNode.removeChild(removePort2)
        removePort3.parentNode.removeChild(removePort3)
        removePort4.parentNode.removeChild(removePort4)
    }
})




// ativacao do botao Show All
let botaoShow = document.querySelector('.box')
let botaoText = document.querySelector('.buttonMe')
let contButton = 0
botaoShow.addEventListener('click', function(e){
    contButton++
    if(contButton % 2 != 0){
    document.getElementById('box1').click();
    document.getElementById('box2').click();
    document.getElementById('box3').click();
    document.getElementById('box4').click();
    document.getElementById('box5').click();
    document.getElementById('box7').click();
    botaoText.innerText = 'HIDE ALL'
    }
    if(contButton % 2 == 0){

        document.getElementById('box1').click();
        document.getElementById('box2').click();
        document.getElementById('box3').click();
        document.getElementById('box4').click();
        document.getElementById('box5').click();
        document.getElementById('box7').click();
        botaoText.innerText = 'SHOW ALL'
    }
})