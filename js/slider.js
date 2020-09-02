const item = document.querySelectorAll('.items'),
      prev = document.getElementById('prev'),
      next = document.getElementById('next'),
      dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
    for(items of item) {
        items.classList.remove('active'); // удаляет все class active
    } 
    item[n].classList.add('active'); //добавлетя class active к нужному элемету
  }

  const activeDot = n => {
    for(dot of dots) {
      // удаляет class active
        dot.classList.remove('active'); 
    }
    dots[n].classList.add('active'); 
  }

  const CurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
  }

  const nextSlide = () =>{
    clearInterval(interval); //остановка автоматического переключения 
    if (index==item.length - 1) { //если index на последней точке то ему присваевается начальное значение index=0 и выполняется функция activeSlide и activeDot
      index = 0;
      CurrentSlide (index);
    } else { //если index не на последней точке то он делает 1 шаг вперед
      index++;
      CurrentSlide (index);
    }
}

const prevSlide = () =>{
    if (index == 0) {
      index = item.length - 1;
      CurrentSlide (index);
    } else {
      index--;
      CurrentSlide (index);
    }
  }

  dots.forEach((item,indexDot) => {
    item.addEventListener('click', ()=> {
      index = indexDot;
      CurrentSlide(index);
      clearInterval(interval);//остановка автоматического переключения 
    })
  })

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
const interval = setInterval (nextSlide,6000);