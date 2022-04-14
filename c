const { Template } = require("webpack");

    function show(event) {
        var inputName = document.getElementById(event.target.id)
        inputName.disabled = !event.target.checked
    }
    var index = 0;
    var array = [{"id":1,"name":"Go'sht","unit_id":1,"created_at":"2022-03-12T11:14:03.000000Z","updated_at":"2022-03-12T11:14:03.000000Z"},{"id":2,"name":"Guruch","unit_id":1,"created_at":"2022-03-12T11:14:03.000000Z","updated_at":"2022-03-12T11:14:03.000000Z"},{"id":3,"name":"Yog'","unit_id":2,"created_at":"2022-03-12T11:14:03.000000Z","updated_at":"2022-03-12T11:14:03.000000Z"},{"id":4,"name":"Sabzi","unit_id":1,"created_at":"2022-03-12T11:14:03.000000Z","updated_at":"2022-03-12T11:14:03.000000Z"},{"id":5,"name":"Kartoshka","unit_id":1,"created_at":"2022-03-12T11:14:03.000000Z","updated_at":"2022-03-12T11:14:03.000000Z"},{"id":6,"name":"Piyoz","unit_id":1,"created_at":"2022-03-12T11:14:03.000000Z","updated_at":"2022-03-12T11:14:03.000000Z"},{"id":7,"name":"Un","unit_id":1,"created_at":"2022-03-12T11:14:03.000000Z","updated_at":"2022-03-12T11:14:03.000000Z"},{"id":8,"name":"Tuhum","unit_id":3,"created_at":"2022-03-12T11:14:03.000000Z","updated_at":"2022-03-12T11:14:03.000000Z"},{"id":9,"name":"Balgarsikiy","unit_id":1,"created_at":"2022-03-12T11:14:03.000000Z","updated_at":"2022-03-12T11:14:03.000000Z"},{"id":10,"name":"Pamidor","unit_id":1,"created_at":"2022-03-12T11:14:03.000000Z","updated_at":"2022-03-12T11:14:03.000000Z"},{"id":11,"name":"Qiyma","unit_id":1,"created_at":"2022-03-21T10:21:21.000000Z","updated_at":"2022-03-21T10:21:21.000000Z"},{"id":12,"name":"Dumbil","unit_id":3,"created_at":"2022-03-21T10:46:13.000000Z","updated_at":"2022-03-21T10:46:13.000000Z"},{"id":13,"name":"Oshqovoq","unit_id":3,"created_at":"2022-03-21T10:50:35.000000Z","updated_at":"2022-03-21T10:50:35.000000Z"},{"id":14,"name":"Sholg'om","unit_id":1,"created_at":"2022-03-21T10:56:18.000000Z","updated_at":"2022-03-21T10:56:18.000000Z"},{"id":15,"name":"Olma","unit_id":1,"created_at":"2022-03-25T07:16:48.000000Z","updated_at":"2022-03-25T07:16:48.000000Z"}];

    function removeId(value) {
        var result = array.findIndex(item => item.name == value)
        array.splice(result, 1)
        console.log(event.target)
    }

    function myFunction() {

        if (array.length > 1) {
            var add = document.getElementById('add')
            var form = []

            var selectList = document.createElement("select");
            selectList.id = "mySelect";
            selectList.setAttribute("name", `form[${index}][product_id]`);
            selectList.setAttribute("class", "form-control");
            selectList.setAttribute("onchange", "removeId(value)");
            add.appendChild(selectList);

            for (var i = 0; i < array.length; i++) {
                var option = document.createElement("option");
                option.value = array[i]['id'];
                option.text = array[i]['name'];
                selectList.appendChild(option);

            }

            var x = document.createElement("INPUT");

            x.setAttribute("type", "text");
            x.setAttribute("class", "form-control");
            x.setAttribute("placeholder", "food ingredient");
            x.setAttribute("name", `form[${index}][portion]`);

            add.appendChild(x);
            index++;
            console.log(form)
        }
    }


    <template>
       <div for="text" v-for="(guest, index) in guests" :key="index">
          <div>
              <select  v-model="selected[index]" class="form-control my-2">
              <option  v-for="item in items" :key="item.id"  :value="item.id">
                {{ item.name }}
              </option>
            </select>
            <input type="text" v-model="selected[index]" class="form-control" />
          </div>
          </div>
    </template>
    export default {
      data() {
        return {
          guests: [],
          selected: {
            name: {},
          },
          items: [
            { id: "1", name: "ali" },
            { id: "2", name: "salim" },
            { id: "3", name: "bek" },
          ],
        };
      },
      methods: {
        addInput() {
          this.guests++;
          console.log(this.guests, this.selected);
        },
      },
    };
