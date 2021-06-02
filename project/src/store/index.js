import { createStore } from 'vuex'

export default createStore({
  state: {//храним данные, к которым будут обращаться разные компоненты
    select: [], //массив, где книги, которыми поделился пользователь
    usersProducts: [ 
      {
          id: 1,
          title: "Lorem ipsum",
          description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non nulla " +
              "optio quae quod quos repudiandae rerum, tempore",
          img: "https://picsum.photos/200/300?random=8",
          genre: "HP 1",
          choose: false
      },
      {
          id: 2,
          title: "Aliquam consequatur",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur " +
              "ea fugit inventore laudantium natus",
          img: "https://picsum.photos/200/300?random=5",
          genre: "HP 2",
          choose: false
      },
      {
          id: 3,
          title: "Laudantium",
          description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
              "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus, necessitatibus " +
              "non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
          img: "https://picsum.photos/200/300?random=2",
          genre: "HP 1",
          choose: false
      },
      {
          id: 4,
          title: "Necessitatibus",
          description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non" +
              " nulla optio quae quod quos repudiandae rerum, tempore",
          img: "https://picsum.photos/200/300?random=9",
          genre: "HP 1",
          choose: true
      },
      {
          id: 5,
          title: "Nulla optio quae quod",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur ea " +
              "fugit inventore laudantium natus",
          img: "https://picsum.photos/200/300?random=10",
          genre: "HP 2",
          choose: false
      },
      {
          id: 6,
          title: "Non nulla",
          description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
              "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus," +
              " necessitatibus non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
          img: "https://picsum.photos/200/300?random=11",
          genre: "HP 2",
          choose: true
      }
  ]
  },
  getters: {//методы, которые позволяют получить отфильтрованные данные из state. первым передаетя стейт, потом геттер
    chooseProducts(state){
      return state.usersProducts.filter(products => products.choose)//метод перебирает массив и проверяет его этой функцией
    },
    chooseProductsCount(state, getters) {//количество прочитанных книг
      return getters.chooseProducts.length;
    },
    productsById: state => (id) => { //в геттер передаем свои данные, функция принимает на вход id и возвращает, в id передаются все данные, которые хотим передать в getter
      return state.usersProducts.filter(products => products.id == id)[0];//0-первый элемент массива
    }
  },
  mutations: {//содержат методы, позволяющие изменять состояние хранилища, пишем данные которые меняют данные внутри state (удаление, изменение)
    selectProducts(state, products){//при вызове любого метода из мутации, первым аргументом будет передаваться объект state
      state.select.push(products);
    },
    markSelect(state, index){
      state.usersProducts[index].choose = true;
    }
  }

  // actions: {
  // },
  // modules: {
  // }
})
