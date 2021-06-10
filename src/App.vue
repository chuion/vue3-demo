<template>
  <!-- <aile-tooltip content="hahahahaha" class="hello-kitty">
    <aile-link type="danger">123</aile-link>
  </aile-tooltip>
  <div style="width: 100%; height: 20px"></div>
  <aile-tooltip content="头像" :model-value="true" effect="kitty" :popper-class="['aaaaa', false && 'bbb']">
    <aile-avatar
      label="Bob"
      size="80px"
      src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
      :config="{
        labelStyle: {
          color: 'red',
          fontWeight: 'bolder',
        },
        labelFormatter: (name) => name + '哈哈',
      }"
    />
  </aile-tooltip>
  <aile-placement initSrc="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
  <div style="width: 50vw; height: 600px">
    <aile-card
      :title="['测试', '数据']"
      shadow="always"
      @change-title="handleConsole"
    >
      <aile-form
        :column="column"
        :model="form"
        label-position="left"
        labelWidth="100px"
      />
    </aile-card>
  </div>
  <aile-dialog
    title="MOMO"
    v-model="showDialog"
    :class="{
      hide: false,
      show: true,
    }"
    :config="{
      showConfirm: true,
    }"
    @confirm="showDialog = false"
  >
    <span style="color: red">Hello 2321321World</span>
  </aile-dialog> -->
  <!-- <hello v-model="showDialog" title="hahaha" class="hahaha" /> -->
  <!-- <aile-autocomplete
    v-model="form.age"
    :config="{
      trimBeforeChange: true,
      dataSource: [
        '123',
        '234',
        '345',
        '1122',
        '2233',
        '223344',
        '23452',
        '2342511',
        '2312321',
        '2000',
        '232011',
      ],
    }"
  /> -->
  <!-- <custom-render :render="render2" /> -->
  <div style="width: 700px; height: 800px">
    <aile-table
      :columns="tableColumn"
      :data="tableData"
      height-mode="maxHeight"
      :pagination="{
        total: 3,
        layout: 'pager, total'
      }"
      :table="{
        stripe: true,
        showHeader: true
      }"
      :table-column="{
        headerAlign: 'center',
        align: 'center'
      }"
      :config="{
        placeholder: 'MMM'
      }"
    />
    <!-- <el-table :data="tableData" style="width: 100%;">
      <el-table-column type="selection" />
      <el-table-column prop="name" label="姓名"></el-table-column>
    </el-table> -->
  </div>
</template>

<script lang="jsx">
import CustomRender from "./components/Render.jsx";
// import AileForm from "./components/form/src/Form.vue";
import Hello from "./components/hello/index.vue";
import { computed, defineComponent, h, reactive, ref } from "vue";

export default defineComponent({
  name: "App",
  components: {
    CustomRender,
    // AileForm,
    Hello,
  },

  setup() {
    // const render1 = () => <h1>Hello1</h1>;
    // const render2 = () => <el-tag type="danger">Hello2</el-tag>;

    const form = reactive({
      name: {
        first: "Mr",
        last: "Song",
      },
      array: [
        {
          age: 12,
        },
      ],
      birth: "",
    });
    const showDialog = ref(false);

    const column = computed(() => {
      return [
        {
          prop: "name",
          label: "姓名",
          children: [
            {
              prop: "first",
              label: "姓氏",
              formatter: (form) => form.first + "123",
            },
            {
              prop: "last",
              label: "名字",
              render: (form) => (
                <aile-select
                  v-model={form.last}
                  config={{
                    dataSource: ["Song", "Hong", "Cang"],
                    itemShowTooltip: true,
                  }}
                  onInited={() => {
                    console.log("hahaha");
                  }}
                />
              ),
            },
          ],
        },
        {
          prop: "birth",
          label: "生日",
          render: () => {},
        },
        {
          prop: "array",
          label: "Array",
          item: () => {
            return [
              {
                prop: "age",
                label: "年龄",
                labelWidth: "auto",
                rules: [
                  { required: true, trigger: "blur", message: "请输入年龄" },
                ],
                render: (form) => {
                  const slots = {
                    prepend: () => "Http://",
                    append: () => ".com",
                    prefix: () => <i class="el-input__icon el-icon-date"></i>,
                    suffix: () => "def",
                  };
                  const handleConsole = () => {
                    console.log(">>>>>>>>>>> scroll");
                  };
                  return (
                    <aile-autocomplete
                      v-model={form.age}
                      v-slots={slots}
                      style="width: 800px"
                      config={{
                        trimBeforeChange: true,
                        dataSource: [
                          "123",
                          "234",
                          "345",
                          "1122",
                          "2233",
                          "223344",
                          "23452",
                          "2342511",
                          "2312321",
                          "2000",
                          "232011",
                        ],
                        remoteMethod: () => {
                          console.log("123");
                        },
                      }}
                    ></aile-autocomplete>
                    // <el-input v-model={form.age} v-slots={slots}></el-input>
                  );
                },
              },
            ];
          },
        },
        {
          prop: "obj",
          renderLabel: (form) => <el-tag>haha</el-tag>,
          render: (form) => {
            const handleConsole = () => {
              showDialog.value = !showDialog.value;
            };
            return <el-button onClick={handleConsole}>Print</el-button>;
          },
        },
      ];
    });

    const tableData = reactive([
      {
        name: "Ali",
        age: 12,
      },
      {
        name: "Bob",
        age: 11,
      },
    ]);

    const tableColumn = computed(() => [
      // {
      //   type: "expand",
      //   label: '序号'
      // },
      {
        prop: "name",
        label: "姓名",
        align: 'right',
        render: (scope) => <el-tag type="danger">{scope.row.name}</el-tag>,
      },
      {
        prop: "age",
        label: "年龄",
        formatter: (row) => 0,
      },
    ]);

    // const handleFormatter = (row, column, cellValue, index) => {
    //   console.log(row, column, cellValue, index);
    //   return row.name + "haha";
    // };

    // const handleSelect = (selection, row) => {
    //   console.log('selection: ', selection)
    //   console.log('row: ', row)
    // }

    const handleConsole = (name) => {
      console.log(">>>in", name);
    };

    return {
      // render1,
      // render2,
      // form,
      // column,
      // handleConsole,
      // showDialog,
      tableData,
      tableColumn,
      // handleSelect
      // handleFormatter,
    };
  },
});
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
}
</style>
