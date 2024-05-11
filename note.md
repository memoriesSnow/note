### 1、QL:高可用项目

### 2、IE，chrome 最大并发请求数量：6 个

### 3、vsCode alt + ↑/↓，带着当前行内容进行上移或下移

### 4、git 合并分支

- git pull 拉取最新代码，git merge 分支名称，git pull，git push @茹茹

### 5、git 回退代码

- 回退到某个版本
- git reset --hard <commit_id>
- git push origin HEAD --force

### 6、纯函数

- (1)返回值只和其参数有关 (2)调用后对外部无影响(外部值改变,dom 渲染等)

### 7、v-model 对组件使用，可以给组件绑定数据并传入给子组件

- 子组件的 props 用默认值“value”接收，并使用默认事件名$emit(input,value)回传父组件组件拆分时，slot 的嵌套使用

### 8、组件嵌套传递数据

- 多级组件传递数据，祖父组件传入多个数据，父组件未使用 props 接收的数据可以使用
- v-bind="$attrs",v-on="$listeners"向子组件传递,写法十分简洁
  > 注：使用此方法传值会将所有属性都绑定在组件上,若要调整为按需引入,则使用 props 接收的同时,为组件添加 inheritArrt:false

### 9、组件拆分注意点

- 组件拆分逻辑写入到拆分的组件内，v-if 这种写在引用组件上，会有多处引用多处需要写重复逻辑的问题，所以尽量在拆分的组件内写逻辑

### 10、瀑布流布局

- 瀑布流布局思路：多个大的 div 内塞内容，每次塞的时候比高度，总往最低的里面塞，最后塞完就是瀑布流

### 特殊代码技巧

> 1、Math.random().toString(36).substring(2).toUpperCase() 生成随机[0-9][a-z]字符串

```看表格字段
let ps = document.querySelectorAll('input');
Array.from(ps).forEach(function (p) {
  console.log(p);
});
```
