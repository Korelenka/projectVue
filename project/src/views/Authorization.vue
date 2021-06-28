<template>
<div class = "text">Для авторизации необходимо ввести данные</div>
<vee-form :validation-schema="rules" @submit="sendData" class=""> 
     <div>
      <label class="text">Введите E-mail</label>
      <vee-field type="email" name="title"/> 
      <vee-error name="title"/>
    </div>
    <div>
      <label class="text">Введите пароль</label>
      <vee-field type="password" name="password"/>
      <vee-error name="password"/>
    </div>
    
    <input class = "buttom" type="submit" value="Ввод">

  </vee-form>
</template> <!--внутри темплейта один корневвой элемент, остальные вкладываются в него (2 версися вью)-->

<script>
import {Form, Field, ErrorMessage, configure} from 'vee-validate';/* импортируем нужные компоненты */
import * as yup from 'yup'; /* импортируем все, что есть в библиотеке */
import {mapMutations} from 'vuex';

configure ({
  validateOnInput: true
});

export default {/*vee-validate библиотечка получает правила, кот ввел пользователь, использует внтри библиотеку yup, чтобы описать правила ввода*/ 
//имя дается компоненту,если мы планируем использовать его в других компонентах-->
//компоненту добавляется темплейт, дата-->
    name: 'Authorization',
    components: {//придумываю имена компонентам
        VeeForm: Form, /* границы формы */
        VeeField: Field, /* поле формы  по умолч input*/
        VeeError: ErrorMessage /* элемент html для вывода ошибок */

    } ,
    data (){
        return {
            rules: yup.object({
                //значение атрибута name: правило, трим без пробелов
                password: yup.string().trim().required("Поле обязательно заполнить").max(20, "Максимум 20 символов"),
                email: yup.number().typeError("Введите число").required("Поле обязательно заполнить")
                .positive("Введите значение больше 0").integer("Введите целое число")
                
            })
        }
    },//когда сработает sendData
    methods: {
      //добавление мутации в объект vue
    ...mapMutations(['chooseProducts']),//функция принимает на вход массив, с названиями всех мутаций, которымии мы собираемся пользоваться
    //функция вернет коллекцию мутаций, ... разбивают коллекцию на отдельные мутации

      sendData(values){ //values - данные из формы
  //значение атрибута name: значение атрибута value
  console.log(values);
  //this.$store.commit('shareBook', {book: values});//this - объект хранилища целиком, обращаемся к мутациямБерем все данные из формы - 1 способ
  //2 способ - обращение к мутациям через mapMutations, начинать нужно с импорта, он лучше, т.к. собирает сразу все мутации в одно место
  this.chooseProducts(values);

      }
}
}
</script>
//стиль только этого темплейта scoped
<style scoped>
 .buttom {
     text-decoration: none;
  display: inline-block;
  padding: 12px 40px;
  margin: 10px 20px;
  border-radius: 30px;
  background-image: linear-gradient(45deg, #6ab1d7 0%, #33d9de 50%, #002878 100%);
  background-position: 100% 0;
  background-size: 200% 200%;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 300;
  color: white;
  box-shadow: 0 16px 32px 0 rgba(0, 40, 120, .35);
  transition: .5s;
    }
    .card{
      
      height:auto;
      padding: 15px 60px;
      width: 130px;
      
         }
  .block{
      text-align: left;
      padding: 2rem;
      flex-grow: 1;
      display: flex;
      border-radius: 30px;
   }
    .text{
      text-align: left;
      padding: 15px 60px;
      width: 1000px;
      font-size: 1.5rem;
      text-decoration: none;
        }
</style> 
