# 样式控制与计算侦听

## 动态样式

动态样式是根据数据的变化，页面呈现出不同的形态。Vue通过绑定`class`与`style`两个属性来实现动态样式，由于`class`与`style`都HTML的标准属性，绑定这两个属性需要使用`v-bind`命令。

> [!important]
>
> Vue针对`class`和`style`的`v-bind`用法提供了特殊的功能增强。所有`v-bind`语法，在绑定样式中都可以使用，但绑定样式的语法，不能完全应用到其他绑定属性上。

### `:Class`

1. 绑定对象

```vue
<script setup lang="ts">
import { ref } from 'vue';

const isActive = ref(false);
</script>

<template>
  <button @click="isActive = !isActive">点击我</button>
  <p :class="{ big: isActive }">金樽清酒斗十千，玉盘珍羞直万钱。</p>
</template>

<style scoped>
.big {
  color: blue;
  font-size: 24px;
  font-weight: bold;
}
</style>
```

* `@click`行内代码可以直接修改`isActive`值，如果在`<script>`操作，需要操作`isActive.value`。
* `{ big: isActive }`是一个对象，键表示样式名称，值为布尔值，表示样式是否成功。

2. 绑定数组

```vue
<template>
  <p :class="['big', 'blue', 'box']">停杯投箸不能食，拔剑四顾心茫然。</p>
</template>

<style scoped>
.big {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

.blue {
  color: blue;
}

.box {
  background-color: pink;
  padding: 20px;
  border-radius: 5px;
}
</style>
```

3. 与静态属性智能合并

```vue
<script setup lang="ts">
import { ref } from 'vue';

const isActive = ref(false);
</script>

<template>
  <button @click="isActive = !isActive">点击我</button>
  <p class="box" :class="{ big: isActive }">欲渡黄河冰塞川，将登太行雪满山。</p>
</template>

<style scoped>
.big {
  color: blue;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

.box {
  background-color: pink;
  padding: 20px;
  border-radius: 5px;
}
</style>
```

### `:style`

1. 绑定对象

```vue
<script setup lang="ts">
import { ref } from 'vue';
const fontSize = ref('18');
</script>

<template>
  <input type="text" v-model="fontSize" />
  <p :style="{ color: 'blue', fontSize: fontSize + 'px', fontWeight: 'bold' }">
    闲来垂钓碧溪上，忽复乘舟梦日边。
  </p>
</template>
```

* `:style`的值为对象，该对象性的键表示属性名，值为属性值。

2. 绑定数组

```vue
<script setup lang="ts">
let font = {
  color: 'blue',
  fontSize: '18px',
  fontWeight: 'bold',
};

let box = {
  backgroundColor: 'pink',
  padding: '20px',
  borderRadius: '5px',
};
</script>

<template>
  <p :style="[font, box]">行路难，行路难，多歧路，今安在？</p>
</template>
```

3. 与静态属性智能合并

```vue
<script setup lang="ts">
let font = {
  color: 'blue',
  fontSize: '18px',
  fontWeight: 'bold',
};
</script>

<template>
  <p style="text-align: center" :style="font">
    长风破浪会有时，直挂云帆济沧海。
  </p>
</template>
```

## 计算属性

> [!tip]
>
> 如何将多个输入数字求和进行计算？

```vue
<script setup lang="ts">
import { ref } from 'vue';

const input1 = ref(0);
const input2 = ref(0);
const input3 = ref(0);
</script>

<template>
  <div>
    <input type="text" v-model.number="input1" />
    <input type="text" v-model.number="input2" />
    <input type="text" v-model.number="input3" />
  </div>
  <p>输入的数字总和为: {{ input1 + input2 + input3 }}</p>
</template>
```

> [!important]
>
> Vue官方推荐模版中的表达式应该简单明确。

计算属性可以得到一个计算值，用来描述依赖响应式状态的复杂逻辑。计算属性`computed`需要函数从Vue框架中引用

```vue
<script setup lang="ts">
import { ref, computed } from 'vue';

const input1 = ref(0);
const input2 = ref(0);
const input3 = ref(0);

const total = computed(() => {
  return input1.value + input2.value + input3.value;
});
</script>

<template>
  <div>
    <input type="text" v-model.number="input1" />
    <input type="text" v-model.number="input2" />
    <input type="text" v-model.number="input3" />
  </div>
  <p>输入的数字总和为: {{ total }}</p>
</template>
```

> [!important]
>
> 计算属性和函数的区别：计算属性值会基于其响应式依赖被缓存，而函数每次使用都会被调用。

```vue
<script setup lang="ts">
import { ref, computed } from 'vue';

const input1 = ref(0);
const input2 = ref(0);
const input3 = ref(0);

const total = computed(() => {
  console.log('computed');
  return input1.value + input2.value + input3.value;
});

function calculateTotal() {
  console.log('function');
  return input1.value + input2.value + input3.value;
}
</script>

<template>
  <div>
    <input type="text" v-model.number.lazy="input1" />
    <input type="text" v-model.number.lazy="input2" />
    <input type="text" v-model.number.lazy="input3" />
  </div>
  <p>输入的数字总和为: {{ total }}</p>
  <p>输入的数字总和为: {{ total }}</p>
  <p>输入的数字总和为: {{ calculateTotal() }}</p>
  <p>输入的数字总和为: {{ calculateTotal() }}</p>
</template>
```

计算属性默认是只读的。如果希望改为可写，需要同时提供`get`和`set`方法 

```vue
<script setup lang="ts">
import { computed, reactive } from 'vue';

const tech = reactive([
  { name: 'Less', isSelected: false },
  { name: 'TypeScript', isSelected: false },
  { name: 'Vue', isSelected: false },
]);

const allSelected = computed({
  get() {
    return tech.every((item) => item.isSelected);
  },

  set(value) {
    tech.forEach((item) => (item.isSelected = value));
  },
});
</script>

<template>
  <div><input type="checkbox" v-model="allSelected" />全部</div>
  <div>
    <span v-for="item in tech" :key="item.name">
      <input type="checkbox" v-model="item.isSelected" />
      {{ item.name }}
    </span>
  </div>
</template>
```

默认的计算属性和`get`方法可以提供参数，可以获得上一次的值。

```vue
<script setup lang="ts">
const one = computed((previous) => {
  return previous;
});

const two = computed({
  get(previous) {
    return previous;
  },

  set(value) {
    console.log('set', value);
  },
});
</script>
```

* `previous`变量就是上一次的值。

## 侦听器

侦听器用于监控状态变化，以便在状态满足条件时进行一系列操作。可侦听状态包括：

* `ref`定义的数据。
* `reactive`定义的数据。
* 函数返回的一个值（`getter`函数）。
* 一个包含上述内容的数组。

Vue 3的侦听器实现包括`watch`和`watchEffect`，这两个函数可以从Vue框架导入。

###  侦听基本类型

响应式的基本数据类型，只能用`ref`来定义。

```vue
<script setup lang="ts">
import { ref, watch } from 'vue';
const counter = ref(0);

watch(counter, (newVal, oldVal) => {
  console.log('计数变化了', newVal, oldVal);
  if (newVal > 5) {
    alert('计数不能超过5');
    counter.value = oldVal;
  }
});
</script>

<template>
  <h2>当前计数: {{ counter }}</h2>
  <button @click="counter++">计数+1</button>
</template>
```

* `watch`函数的第一参数是要侦听的状态，第二个参数是侦听器回调函数，当状态发生变化时会触发第二个函数。
* 侦听器回调函数接收两个变量变化后的值和变化前的值。

断开侦听器

```vue
<script setup lang="ts">
import { ref, watch } from 'vue';
const counter = ref(0);

let stopCounter = watch(counter, (newVal) => {
  if (newVal > 5) {
    alert('关闭监听器');
    stopCounter();
  }
});
</script>

<template>
  <h2>当前计数: {{ counter }}</h2>
  <div>
    <button @click="counter++">计数+1</button>
    <button @click="counter--">计数-1</button>
  </div>
</template>
```

* `watch`函数的返回值可以用来断开侦听器。

### `Ref`定义对象

直接侦听对象状态

```vue
<script setup lang="ts">
import { ref, watch } from 'vue';
const counter = ref({ a: 0, b: 0 });

watch(counter, (newVal, oldVal) => {
  console.log(
    `oldVal: a-${oldVal.a}, b-${oldVal.b}, newVal: a-${newVal.a}, b-${newVal.b}`,
  );
});

function aPlus() {
  counter.value.a++;
}

function bPlus() {
  counter.value.b++;
}

function all() {
  let { a, b } = counter.value;
  counter.value = { a: a + 1, b: b + 1 };
}
</script>

<template>
  <h2>a: {{ counter.a }} b: {{ counter.b }}</h2>
  <div>
    <button @click="aPlus">a+1</button>
    <button @click="bPlus">b+1</button>
    <button @click="all">all+1</button>
  </div>
</template>
```

* 默认情况下，如果只监控对象，修改单个属性时无法被监控。

开启深度侦听，可以侦听内部的属性

```ts
watch(
  counter,
  (newVal, oldVal) => {
    console.log(
      `oldVal: a-${oldVal.a}, b-${oldVal.b}, newVal: a-${newVal.a}, b-${newVal.b}`,
    );
  },
  { deep: true },
);
```

> [!warning]
>
> 1. 修改对象中的属性，`newValue`和`oldValue`都是新值，因为它们是同一个对象。
> 2. 修改整个对象，`newValue`是新值， `oldValue`是旧值，因为不是同一个对象了。

`watch`默认是懒性执行：仅当数据源变化时，才会执行回调。如果初始化就执行需要传入`immediate: true`

```ts
watch(
  counter,
  (newVal, oldVal) => {
    if (!oldVal) {
      console.log(`oldVal: ${oldVal}`);
    } else {
      console.log(
        `oldVal: a-${oldVal.a}, b-${oldVal.b}, newVal: a-${newVal.a}, b-${newVal.b}`,
      );
    }
  },
  { deep: true, immediate: true },
);
```

* 初始化默认的`oldVal`是`undefine`。

### `reactive`定义对象

侦听`reactive`定义的对象，默认开启了深度侦听，且不可关闭。

```vue
<script setup lang="ts">
import { reactive, watch } from 'vue';
const counter = reactive({ a: 0, b: 0 });

watch(counter, (newVal, oldVal) => {
  console.log(
    `oldVal: a-${oldVal.a}, b-${oldVal.b}, newVal: a-${newVal.a}, b-${newVal.b}`,
  );
});

function aPlus() {
  counter.a++;
}

function bPlus() {
  counter.b++;
}

function all() {
  let { a, b } = counter;
  Object.assign(counter, { a: a + 1, b: b + 1 });
}
</script>

<template>
  <h2>a: {{ counter.a }} b: {{ counter.b }}</h2>
  <div>
    <button @click="aPlus">a+1</button>
    <button @click="bPlus">b+1</button>
    <button @click="all">all+1</button>
  </div>
</template>
```

> [!warning]
>
> `Object.assign`只是重新复制属性值，并没有替换新对象所以`newValue`和`oldValue`都是新值。

### 侦听对象属性

1. 侦听属性值为基本类型，需要写成函数形式。

> [!caution]
>
> 侦听器无法监控基本类型。

```vue
<script setup lang="ts">
import { reactive, watch } from 'vue';
const counter = reactive({ a: 0, sub: { b: 0, c: 0 } });

watch(
  () => counter.a,
  (newVal, oldVal) => {
    console.log(`oldVal: a-${oldVal}, newVal: a-${newVal}`);
  },
);

function aPlus() {
  counter.a++;
}
</script>

<template>
  <h2>a: {{ counter.a }}</h2>
  <div>
    <button @click="aPlus">a+1</button>
  </div>
</template>
```

* 基本类型转换为函数，返回值为被监控数据。

2. 侦听属性值为对象类型，可以直接监控。

```vue
<script setup lang="ts">
import { reactive, watch } from 'vue';
const counter = reactive({ a: 0, sub: { b: 0, c: 0 } });

watch(counter.sub, (newVal, oldVal) => {
  console.log(
    `oldVal: b-${oldVal.b}, c-${oldVal.c}, newVal: b-${newVal.b}, c-${newVal.c}`,
  );
});

function bPlus() {
  counter.sub.b++;
}

function cPlus() {
  counter.sub.c++;
}

function allPlus() {
  counter.sub = { b: counter.sub.b + 1, c: counter.sub.c + 1 };
}
</script>

<template>
  <h2>b: {{ counter.sub.b }} c: {{ counter.sub.c }}</h2>
  <div>
    <button @click="bPlus">b+1</button>
    <button @click="cPlus">c+1</button>
    <button @click="allPlus">all-b-c+1</button>
  </div>
</template>
```

> [!important]
>
> 直接侦听对象类型，Vue框架会对该对象进行包装，可以监控到对象的属性值，但是整体修改对象后，监控对象被替换为新对象，而新对象无法被监控。

侦听属性值为对象类型，也可以写成函数。

```ts
watch(
  () => counter.sub,
  (newVal, oldVal) => {
    console.log(
      `oldVal: b-${oldVal.b}, c-${oldVal.c}, newVal: b-${newVal.b}, c-${newVal.c}`,
    );
  },
);
```

* 整体对象函数后只能监控整体改变，不能监控内部值。

> [!important]
>
> 侦听的对象被函数包装后，Vue监控的就是该函数返回值的内存地址，当地址修改时侦听器会监测到。但监测的是地址值，若要侦听对象内部，必须手动开启深度监视。

最佳实践是监控为对象类型，也写成函数，并开启深度监控。

```ts
watch(
  () => counter.sub,
  (newVal, oldVal) => {
    console.log(
      `oldVal: b-${oldVal.b}, c-${oldVal.c}, newVal: b-${newVal.b}, c-${newVal.c}`,
    );
  },
  { deep: true },
);
```

### 监控多个数据

使用数组可以监控多个数据，返回的`newValue`和`oldValue`都是数组。监控的每个元素规则与单个元素一致

```vue
<script setup lang="ts">
import { reactive, watch } from 'vue';
const counter = reactive({ a: 0, sub: { b: 0, c: 0 } });

watch([() => counter.a, counter.sub], (newVal, oldVal) => {
  console.log(newVal, oldVal);
});

function aPlus() {
  counter.a++;
}

function bPlus() {
  counter.sub.b++;
}

function cPlus() {
  counter.sub.c++;
}

function allPlus() {
  counter.sub = { b: counter.sub.b + 1, c: counter.sub.c + 1 };
}
</script>

<template>
  <h2>a: {{ counter.a }} b: {{ counter.sub.b }} c: {{ counter.sub.c }}</h2>
  <div>
    <button @click="aPlus">a+1</button>
    <button @click="bPlus">b+1</button>
    <button @click="cPlus">c+1</button>
    <button @click="allPlus">all-b-c+1</button>
  </div>
</template>
```

### `watchEffect`

立即运行一个函数，同时自动侦测函数中的响应数据。

```vue
<script setup lang="ts">
import { reactive, watchEffect } from 'vue';
const counter = reactive({ a: 0, sub: { b: 0, c: 0 } });

watchEffect(() => {
  console.log(counter.a, counter.sub);
  if (counter.a > 5) {
    alert('a大于5了');
    counter.a = 5;
  }

  if (counter.sub.b > 5) {
    alert('b大于5了');
    counter.sub.b = 5;
  }
});

function aPlus() {
  counter.a++;
}

function bPlus() {
  counter.sub.b++;
}

function cPlus() {
  counter.sub.c++;
}

function allPlus() {
  counter.sub = { b: counter.sub.b + 1, c: counter.sub.c + 1 };
}
</script>

<template>
  <h2>a: {{ counter.a }} b: {{ counter.sub.b }} c: {{ counter.sub.c }}</h2>
  <div>
    <button @click="aPlus">a+1</button>
    <button @click="bPlus">b+1</button>
    <button @click="cPlus">c+1</button>
    <button @click="allPlus">all-b-c+1</button>
  </div>
</template>
```

* `watchEffect`会自动调用监控对象，等于`immediate: true`的配置项。
* Vue框架会自动监控`watchEffect`中调用过的状态值。
