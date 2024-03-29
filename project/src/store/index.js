import { createStore } from 'vuex'

export default createStore({
  state: {//храним данные, к которым будут обращаться разные компоненты
    select: [], //массив, где книги, которыми поделился пользователь
    usersProducts: [ 
      {
          id: 1,
          title: "Процессор AMD Ryzen 7 3700X 3.6GHz BOX",
          description: "Настольный (стационарный)  компьютер, десктоп (англ. desktop computer) — стационарный персональный компьютер, предназначенный" +
          "для работы в офисе и дома. Термин обычно используется для того, чтобы обозначить вид компьютера и отличить его от компьютеров других типов, например" + 
          "портативного компьютера, карманного компьютера, встроенного компьютера или сервера.",
          img: "proc1.png",
          category: "proc",
          prise: 15000,
          slide: [
        {img:'proc3.png', id: 1}, 
        {img:'proc4.png', id: 2},
        {img:'proc5.png', id: 3}
       ],
          choose:true
      },
      {
          id: 2,
          title: "Процессор Intel Core i3 10100F 3G BOX",
          description: "Настольный (стационарный) компьютер, десктоп (англ. desktop computer) — стационарный персональный компьютер, предназначенный" +
          "для работы в офисе и дома. Термин обычно используется для того, чтобы обозначить вид компьютера и отличить его от компьютеров других типов, например" + 
          "портативного компьютера, карманного компьютера, встроенного компьютера или сервера.",
          img: "proc2.png",
          category: "proc",
          prise: 20000,
          slide: [
           {img:'proc6.png', id: 1}, 
           {img:'proc5.png', id: 2},
           {img:'proc4.png', id: 3}
          ],
          choose: false
      },
      {
          id: 3,
          title: "Монитор Philips 223V5LSB2",
          description: "ЖК-дисплей Full HD имеет разрешение 1920x1080р — самое высокое из всех разрешений HD-источников, обеспечивающее" + 
          "изображение наилучшего качества. Это настоящий дисплей будущего, который может принимать сигналы с разрешением 1080р со всех источников,"+ 
          "включая самые современные, такие как Blu-ray и современные игровые приставки HD",
          img: "monitor1.png",
          category: "monitor",
          prise: 20000,
          slide: [
           {img:'monitor3.png', id: 1}, 
           {img:'monitor4.png', id: 2},
           {img:'monitor5.png', id: 3}
          ],
          choose: true
      },
      {
          id: 4,
          title: "Монитор Philips 223V5LSB2",
          description: "ЖК-дисплей Full HD имеет разрешение 1920x1080р — самое высокое из всех разрешений HD-источников, обеспечивающее" + 
          "изображение наилучшего качества. Это настоящий дисплей будущего, который может принимать сигналы с разрешением 1080р со всех источников,"+ 
          "включая самые современные, такие как Blu-ray и современные игровые приставки HD",
          img: "monitor2.png",
          category: "monitor",
          prise: 20000,
          slide: [
           {img:'monitor7.png', id: 1}, 
           {img:'monitor6.png', id: 2},
           {img:'monitor5.png', id: 3}
          ],
          choose: false
      },
      {
          id: 5,
          title: "Принтер лазерный Pantum P2207",
          description: "Доступное устройство Canon PIXMA MG2540S обеспечивает непревзойденное качество печати как текстовых" +
          "документов, так и фотографий. Технология печати FINE обеспечивает насыщенные оттенки черного, яркие цвета и невероятный уровень детализации отпечатков.",
          img: "print1.png",
          genre: "HP 2",
          category: "print",
          prise: 20000,
          slide: [
           {img:'print3.png', id: 1}, 
           {img:'print4.png', id: 2},
           {img:'print5.png', id: 3}
          ],
          choose: true
      },
      {
          id: 6,
          title: "МФУ лазерный Pantum M6507",
          description: "Доступное устройство Canon PIXMA MG2540S обеспечивает непревзойденное качество печати как текстовых" +
          "документов, так и фотографий. Технология печати FINE обеспечивает насыщенные оттенки черного, яркие цвета и невероятный уровень детализации отпечатков.",
          img: "print2.png",
          category: "print",
          prise: 20000,
          slide: [
           {img:'print6.png', id: 1}, 
           {img:'print5.png', id: 2},
           {img:'print4.png', id: 3}
          ],
          choose: false
      }
  ]
  },
  getters: {//методы, которые позволяют получить отфильтрованные данные из state. первым передаетя стейт, потом геттер
    // chooseProducts(state){
    //   return state.usersProducts.filter(products => products. category)//метод перебирает массив и проверяет его этой функцией
    // },
    chooseProductsCount(state, getters) {//количество прочитанных книг
      return getters.chooseProducts.length;
    },
    getProductByCategory: state => (category) => {
      return state.usersProducts.filter(products => products.category == category);
    },
    productsById: state => (id) => { //в геттер передаем свои данные, функция принимает на вход id и возвращает, в id передаются все данные, которые хотим передать в getter
      return state.usersProducts.filter(products => products.id == id)[0];//0-первый элемент массива
    }

  },
  mutations: {//содержат методы, позволяющие изменять состояние хранилища, пишем данные которые меняют данные внутри state (удаление, изменение)
    selectProducts(state, products){//при вызове любого метода из мутации, первым аргументом будет передаваться объект state
      state.usersProducts.push(products);
      console.log(products);
    },
    markSelect(state, index){
      state.usersProducts[index].choose = false;
    },
    
  addProducts(state, products) {
    for (let i = 0; i < products.length; i++) {
      state.usersProducts.push(products[i]);
    }
  },
  addToBasket(state, item) {
    state.products.push(item);
    state.chooseProductsCount++;
}
  }

  // actions: {
  // },
  // modules: {
  // }
})
