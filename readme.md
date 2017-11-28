# 索真网页化报告前端组件说明文档

## 一级标题：

- HTML 结构：
```html

<h1 class="title_1"> {{  内容 }} </h1>

```

- CSS样式：

```css
.title_1{

    ...

}
```

## 二级标题：


- HTML 结构：
```html

<h2 class="title_2"> {{  内容 }} </h2>

```

- CSS样式：

```css
.title_2{

    ...

}
```


## 三级标题：


- HTML 结构：
```html

<h3 class="title_3"> {{  内容 }} </h3>

```

- CSS样式：

```css
.title_3{

    ...

}
```


## 四级标题：


- HTML 结构：
```html

<h4 class="title_4"> {{  内容 }} </h4>

```

- CSS样式：

```css
.title_4{

    ...

}
```


## 五级标题：


- HTML 结构：
```html

<h5 class="title_5"> {{  内容 }} </h5>

```

- CSS样式：

```css
.title_5{

    ...

}
```


## 六级标题：


- HTML 结构：
```html

<h6 class="title_6"> {{  内容 }} </h6>

```

- CSS样式：

```css
.title_6{

    ...

}
```

## 段落：


- HTML 结构：
```html

<p class="p"> {{  内容 }} </p>

```

- CSS样式：

```css
.p{

    ...

}
```





## 测序结果图片展示-单张图片

- HTML 结构：
````html


````

CSS 样式：
```css
    
  

```

## 测序结果展示图片-多张图片

- HTML 结构：
````html


````

CSS 样式：
```css
    
  

```


## 非测序结果表格展示（需上传表格）

- HTML 结构：
````html

 <div class="table-component">
      <p class="table-title"> {{ 表格标题 }}</p>

      <table class="table table-hover">

          <tr>
              <td > {{  表格内容 }}</td>
          </tr>

      </table>
      <p class="table-lost"> {{ 表格没有内容时的提示 }} </p>

      <p class="annotation-title"> {{ 注的title }} </p>

      <ul class="annotation-content">
          <li> {{ 注的内容 }}</li>
      </ul>
</div>

````

CSS 样式：
```css
    
    .table{
        
        ...
        
    }

```





## 测序结果表格展示（无需上传）

- HTML 结构：
````html

 <div class="table-component">
      <p class="table-title"> {{ 表格标题 }}</p>

      <table class="table table-hover">

          <tr>
              <td > {{  表格内容 }}</td>
          </tr>

      </table>
      <p class="table-lost"> {{ 表格没有内容时的提示 }} </p>

      <p class="annotation-title"> {{ 注的title }} </p>

      <ul class="annotation-content">
          <li> {{ 注的内容 }}</li>
      </ul>
</div>

````

CSS 样式：
```css
    
    .table{
        
        ...
        
    }

```



















