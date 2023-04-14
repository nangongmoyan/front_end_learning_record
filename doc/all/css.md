# CSS 面试题

### 1.display: none; 与 visibility: hidden; 的区别

##### 相同点

他们都能让元素不可见

##### 不同点

- display:none 会让元素完全从渲染树中消失，渲染的时候不占据任何空间；visibility:hidden 不会让元素从渲染树中消失，渲染元素继续占据空间，知识内容不可见
- 修改常规流中元素的 display 通常会造成页面重排，修改 visibility 属性只会造成本元素的重绘

### 2.z-index 是什么?在 position 的值什么时候可以触发?

z-index 设置元素的堆叠顺序。拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面。当脱离文档流内容较多，并且相互堆叠的时候，就有可能发生本想完全显示的内容被其他内容遮挡的结果。这个时候我们就要人工指定哪个元素在上面，哪个元素在下面，z-index 属性就是干这个的。
**注意：z-index 仅能在定位元素上奏效**
**在 position 的值为 relative、absolute、fixed、sticky 时候可以触发**

### 什么是 CSS3 transform? transition? animation? 区别是什么?

### transform

描述了元素的静态样式，本身不会呈现动画效果，可以对元素进行旋转（rotate）、扭曲（skew）、缩放（scale）、移动（translate）以及矩阵变形（matrix）

### transition

体现样式过度，从一种效果逐渐改成为另一种效果
transition 是一个合成属性
transition: transition-property(css 属性) transition-duration(过渡效果花费时间) transition-timing-function(速度曲线) transition-delay(过渡开始的延迟时间)

transition 通常和 hover 等时间配合使用，需要由时间触发过渡

- transition 需要一个时间来触发，比如 hover，所以没法在网页加载时自动发生
- transition 时一次性的，不能重发发生，除非一再触发
- transition 只能定义开始状态和结束状态，不能定义中间状态，也就是说只有两个状态
- 一条 transition 规则，只能定义一个属性的变化，不能涉及多个属性

### animation

animation 动画由@keyframes 来描述每一帧的样式

### 区别

- transform 仅描述元素的静态样式，常常配合 transition 和 animation 使用
- transition 通常和 hover 等时间配合使用，animation 是自发的，立即播放
- transition 是一次性的，animation 可设置循环次数
- transition 只能设置头尾的样式，animation 可设置每一帧的样式和时间
- transition 可与 js 配合使用，js 设定要变化的样式，transitiob 负责动画效果
