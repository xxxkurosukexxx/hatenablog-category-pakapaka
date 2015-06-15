# hatenablog-category-pakapaka.js
はてなブログでカテゴリー一覧モジュールで階層っぽく表示してついでにパカパカできるようにしたやつ

imported from https://gist.github.com/xxxkurosukexxx/d5e134f763152e476e26


## 使い方:
別途jQueryの読み込みが必要です。

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
```

ソースはGoogleドライブでホストしてるのでそちらをご利用ください。

```html
<script src="//www.googledrive.com/host/0B1cEjfB4sOZOV09XZ3FtZGlaNU0"></script>
```

### JavaScript
フッタ辺りに追加するのが良いです。たぶん。

```javascript
$('hatena-module-category').pakapaka({
    config: [
        {
            regex: ぶら下げる子カテゴリ名の正規表現,
            name: 親カテゴリ名,
            open: trueにすると開いた状態で表示、指定なし or true以外は閉じた状態で表示
        }
    ]
});
```

#### 設置例
```javascript
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="//www.googledrive.com/host/0B1cEjfB4sOZOV09XZ3FtZGlaNU0"></script>
<script>
(function($) {
    $('.hatena-module-category').pakapaka({
        config: [
            { regex: /^\[C\]/, name: 'Cameras:', open: true },
            { regex: /^\[L\]/, name: 'Lenses:' },
            { regex: /^\[F\]/, name: 'Films:', open: false }
        ]
    });
})(jQuery);
</script>
```


### CSS
デザインCSSに追加。

```css
.hatena-module-category .archive-module-button {
    opacity: 0.6;
}
.hatena-module-category .categoryParent {
    padding-left: 0.3em;
    cursor: pointer;
}
.pakapaka {
    list-style: none;
    padding-left: 20px;
}
```

## ライセンスなど
基本的に自分用に作ったので、自分のブログで使用させて頂いているテンプレート以外では動かない可能性があります。  
その場合はどうぞforkして煮て焼いて食ってください。  

これを利用したことによるなんちゃらは一切受け付けませんのであしからず。  


