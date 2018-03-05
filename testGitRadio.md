# GitRadio

## json error

Solved! (dont forget to remove `payload=` before `json.loads()`)

## unquote %7B character

参考[transform-url-string-into-normal-string-in-python-20-to-space-etc](https://stackoverflow.com/questions/11768070/transform-url-string-into-normal-string-in-python-20-to-space-etc)

1. python2

```python
import urllib2
print urllib2.unquote("%CE%B1%CE%BB%20")
```

2. python3

```python
from urllib.parse import unquote
print(unquote("%CE%B1%CE%BB%20"))
```

## convert bytes to string

参考[convert-bytes-to-a-string](https://stackoverflow.com/questions/606191/convert-bytes-to-a-string)

```python
b"abcde".decode("utf-8") 
```

## test multi-commits

first commit
second commit

## test comment to weibo

1. single comment.py works

## test new weibo

finished!

## 测试发送含图片的微博

参考[requests 如何模拟提交 multipart/form-data 的表单](https://segmentfault.com/q/1010000004690074/a-1020000004691198)

```python
url = 'http://example.com/post'
files = {'file': open('gitradio.png', 'rb')} # 文件 
datat = {'name':'szcfweiya'} # 其他表单
r = requests.post(url, files=files, data=data)
```

## phantimjs截图

1. 加上参数`--ssl-protocol=any`，参考[PhantomJS failing to open HTTPS site](https://stackoverflow.com/questions/12021578/phantomjs-failing-to-open-https-site)

如

```cmd
phantomjs --ssl-protocol=any screenshot.js https://esl.hohoweiya.xyz/notes/ipynb/list/index.html tes.png
```

2. 设置背景为白色，参考[Tips and Tricks](http://phantomjs.org/tips-and-tricks.html)

```js
page.evaluate(function() {
  document.body.bgColor = 'white';
});
```

## 自动发送带图微博

done！

## 短链接转换

应用暂时未通过审核，调用短链转换api时报错

> {'error': 'applications over the unaudited use restrictions!', 'error_code': 21321, 'request': '/2/short_url/shorten.json'}

在[使用新浪API生成短连接](https://www.cnblogs.com/Jimmy-pan/p/5784611.html)找到可用的app_key: '2815391962'