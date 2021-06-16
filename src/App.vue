<template>
  <aile-avatar />
</template>

<script lang="jsx">
const genderMap = {
  1: "先生",
  0: "女士",
};
export default {
  data() {
    return {
      form: {
        name: {
          first: "chuion",
          last: "song",
        },
        gender: 1,
        age: 20,
        hobby: [{ sport: "篮球" }, { sport: "足球" }],
        money: "",
      },
      showDialog: false,
    };
  },
  computed: {
    columns() {
      return [
        {
          prop: "name",
          label: "姓名",
          children: [
            {
              prop: "last",
              label: "姓氏",
            },
            {
              prop: "first",
              label: "名字",
            },
          ],
        },
        {
          prop: "gender",
          label: "性别",
          formatter: (form) => genderMap[form.gender],
        },
        {
          prop: "age",
          label: "年龄",
          render: (form) => <el-tag>{form.age}</el-tag>,
        },
        {
          prop: "hobby",
          label: "兴趣",
          labelPosition: "center",
          rules: { required: true },
          items: (form, root) => [
            {
              prop: "sport",
              label: "运动",
              value: "等待输入",
              required: true,
              render: (form) => <aile-input v-model={form.sport} />,
            },
          ],
        },
        {
          prop: "money",
        },
        {
          label: "操作",
          render: () => {
            const handleDialog = () => {
              this.showDialog = true;
            };
            return <el-button onClick={handleDialog}>打开对话框</el-button>;
          },
        },
      ];
    },
  },
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
}
</style>
