<template>
  <b-modal id="bv-modal-example" hide-footer>
    <template #modal-title> Add New Food </template>
    <div class="modal-body">
      <div class="row">
        <div class="col-10">
          <input
            type="text"
            class="form-control"
            v-model="selected.name"
            placeholder="Food name"
          />
          <div for="text" v-for="(guest, index) in guests" :key="index">
            <div>
              <select v-model="selected[index]" class="form-control my-2">
                <option v-for="item in array" :key="item.id" :value="item.id">
                  {{ item.name }}
                </option>
              </select>
              <input
                type="text"
                v-model="selected[index]"
                class="form-control"
              />
            </div>
          </div>
        </div>
        <div class="col-2">
          <button class="btn btn-success" @click="addInput()">+</button>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-primary" @click="insertFood">Insert</button>
    </div>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      guests: [],
      array: [
        {
          id: 1,
          name: "Go'sht",
          unit_id: 1,
          created_at: "2022-03-12T11:14:03.000000Z",
          updated_at: "2022-03-12T11:14:03.000000Z",
        },
        {
          id: 2,
          name: "Guruch",
          unit_id: 1,
          created_at: "2022-03-12T11:14:03.000000Z",
          updated_at: "2022-03-12T11:14:03.000000Z",
        },
        {
          id: 3,
          name: "Yog'",
          unit_id: 2,
          created_at: "2022-03-12T11:14:03.000000Z",
          updated_at: "2022-03-12T11:14:03.000000Z",
        },
        {
          id: 4,
          name: "Sabzi",
          unit_id: 1,
          created_at: "2022-03-12T11:14:03.000000Z",
          updated_at: "2022-03-12T11:14:03.000000Z",
        },
      ],
      selected: [],
      formData: {
        name: 'Panda',
      form: {
          product_id: 5,
        portion: 500,
        food_id: 228
      }

      }
    };
  },
  methods: {
    addInput() {
      this.guests++;
      console.log(this.guests, this.selected);
    },
     insertFood() {
    this.$axios
      .post("/foods/store",this.formData)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  },

};
</script>

<style></style>
