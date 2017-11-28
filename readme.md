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
<div class="imgs_single">

    <img src="{{ 图片相对路径 }}" alt="{{ 图片title }}"  title="{{ 图片title }}">
    
    <p class="img_title">{{ 图片title }}</p>
    
    <p class="annotation-title"> {{ 注的title }} </p>
    <ul class="annotation-content">
        <li> {{ 注的内容 }}</li>
    </ul>
    
</div>

````

- CSS 样式：
```css


    .img_single{
        ...
    }   
  

```

## 测序结果展示图片-多张图片

- HTML 结构：
````html

<div class="imgs_more">

    <div class='imgsBox'>
          <div class='swiper-container gallery-top'>
              <div class='swiper-wrapper'>
                  <img class='swiper-slide' src='{{ 图片路径 }}'>
              </div>
              <div class='swiper-button-next swiper-button-white'></div>
              <div class='swiper-button-prev swiper-button-white'></div>
          </div>
          <div class='swiper-container gallery-thumbs '>
              <div class='swiper-wrapper'>
                  <img class='swiper-slide' src='{{ 图片路径 }}'>
              </div>
          </div>
    </div>
    
    
    <p class="img_title">{{ 图片title }}</p>
         
    <div class="annotation">
        <p class="annotation-title"> {{ 注的title }} </p>
        <ul class="annotation-content">
            <li> {{ 一条注的内容 }} </li>
        </ul>
    </div>
    
    
</div>

````

- CSS 样式：

```css
    
    .imgs_more{
        
    
    }


```


## 结果表格展示

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

- CSS 样式：
```css
    
    .table{
        
        ...
        
    }

```


## 下载组件

- html结构

```html
    
      <div class="load_box">
        
             <select class="select_box">
                 <option value="{{ 路径 }}">{{ 路径 }}</option>
             </select>
             
             <button class="load_btn">点击下载</button>
        </div>
        
```



- css 样式

```css

    .load_box{
    
        ...
    
    }



```





















